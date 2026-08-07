---
title: "Deploying FastAPI and Celery on Google Cloud Run with one image and two services"
excerpt: "A practical walkthrough for running an HTTP API and a Celery worker on GCP — same container image, two Cloud Run resources, and a local Docker Compose setup to rehearse the architecture before you ship."
date: "2026-08-07"
tags: ["gcp", "cloud-run", "celery", "fastapi", "deployment"]
---

When a web app needs background work — transcribing audio, sending emails,
generating reports — you quickly end up with two processes: an HTTP server and
a worker. On Google Cloud Run, those are two different resource types, even if
they share the same codebase.

This is how I deploy that pattern for [Abhipraay](https://github.com/your-repo),
a voice-feedback product built with FastAPI, Celery, and Redis. The API handles
HTTP; Celery handles long-running jobs like transcription. Both run from one
Docker image, deployed twice.

## The architecture

Cloud Run offers three workload shapes. For this stack you need two:

| Resource | Role | Runs |
|---|---|---|
| **Cloud Run Service** | HTTP, request-driven | FastAPI + built React frontend |
| **Cloud Run Worker Pool** | Background, pull-based | Celery worker |

Redis sits between them as the message broker. The API enqueues tasks; the
worker consumes them. Postgres and object storage (Cloudflare R2 in my case) are
shared by both.

```
Browser → Cloud Run Service (APP_ROLE=web)
              ↓ enqueue
           Managed Redis
              ↓ consume
         Worker Pool (APP_ROLE=worker) → Postgres + R2
```

The API never waits for transcription to finish. The worker never needs a public
URL or an open HTTP port.

## One image, two entrypoints

Rather than maintaining separate Dockerfiles, I use a single image with a small
entrypoint script that switches on `APP_ROLE`:

```sh
case "${APP_ROLE:-web}" in
  web)
    exec fastapi run --host 0.0.0.0 --port "${PORT:-8080}" ...
    ;;
  worker)
    exec celery -A app.worker worker --loglevel=info
    ;;
esac
```

`APP_ROLE=web` starts the API. `APP_ROLE=worker` starts Celery. Everything
else — dependencies, application code, Celery task definitions — lives in the
same image.

Cloud Run exposes one port per service, so the API also serves the production
frontend from the built Vite output when `SERVE_FRONTEND=true`. No separate
static host.

## Rehearsing production locally

Before deploying to GCP, I run a pre-production stack with Docker Compose that
mirrors the same topology: two containers from the production Dockerfile, both
pointed at real managed services (Neon Postgres, Cloudflare R2, Upstash Redis).

```yaml
services:
  api:
    build: .
    ports: ["8080:8080"]
    env_file: backend/.env.preprod
    environment:
      APP_ROLE: web

  celery_worker:
    build: .
    env_file: backend/.env.preprod
    environment:
      APP_ROLE: worker
```

```bash
podman compose -f docker-compose.preprod.yml up --build
```

The API is at `http://localhost:8080`. The worker has no published port — it
just consumes from Redis in the background. Same image, same env file, same
split as Cloud Run. If transcription works here, the production deploy is
mostly configuration.

## Deploying to Google Cloud Run

### 1. Build and push the image

One build serves both deployments:

```bash
gcloud builds submit \
  --region=asia-south1 \
  --tag asia-south1-docker.pkg.dev/PROJECT/repo/abhipraay-app
```

### 2. Deploy the API as a Cloud Run Service

```bash
gcloud run deploy abhipraay-api \
  --image asia-south1-docker.pkg.dev/PROJECT/repo/abhipraay-app \
  --region asia-south1 \
  --allow-unauthenticated \
  --set-env-vars "ENVIRONMENT=production,SERVE_FRONTEND=true,FRONTEND_ORIGIN=https://your-service-url.run.app"
```

Set secrets and remaining env vars (`DATABASE_URL`, `REDIS_URL`, `SECRET_KEY`,
`R2_*`, etc.) via `--set-secrets` or the Cloud Console. `APP_ROLE` defaults to
`web` in the Dockerfile, so you do not need to set it explicitly on the service.

### 3. Deploy the worker as a Cloud Run Worker Pool

Same image, different resource type:

```bash
gcloud run worker-pools deploy abhipraay-worker \
  --image asia-south1-docker.pkg.dev/PROJECT/repo/abhipraay-app \
  --region asia-south1 \
  --set-env-vars "APP_ROLE=worker,ENVIRONMENT=production" \
  --set-secrets "DATABASE_URL=...,REDIS_URL=...,SECRET_KEY=...,R2_SECRET_ACCESS_KEY=..." \
  --instances 1
```

A few details worth noting:

- The command is `gcloud run worker-pools deploy`, not `gcloud run deploy`.
  Worker Pools are purpose-built for continuous, non-HTTP workloads like Celery.
- There is no `--port` and no `--allow-unauthenticated`. The worker does not
  receive HTTP traffic.
- `--instances 1` sets a fixed instance count. Worker Pools do not autoscale on
  their own.

## Environment variables: what goes where

Env vars are **per resource**. Settings on the API service are not inherited by
the worker pool. Both need the shared infrastructure credentials; only the API
needs frontend- and email-related vars.

| Variable | API Service | Worker Pool |
|---|---|---|
| `APP_ROLE` | `web` (default) | `worker` |
| `DATABASE_URL` | ✓ | ✓ |
| `REDIS_URL` | ✓ | ✓ (must match API exactly) |
| `SECRET_KEY` | ✓ | ✓ |
| `R2_*` | ✓ | ✓ |
| `ENVIRONMENT` | `production` | `production` |
| `SERVE_FRONTEND` | `true` | — |
| `FRONTEND_ORIGIN` | ✓ | — |
| `RESEND_API_KEY` | ✓ | — |

If you use managed Redis with TLS (`rediss://`), Celery needs explicit SSL
configuration. I handle that in the worker module by detecting `rediss://` and
setting `broker_use_ssl` automatically — worth wiring up before you deploy.

## Releasing a new version

Any code change — API, frontend, or Celery tasks — means one new image and two
deployments:

```bash
# Build once
gcloud builds submit --tag .../abhipraay-app:v1.2.0 .

# Update both with the same tag
gcloud run deploy abhipraay-api --image .../abhipraay-app:v1.2.0 ...
gcloud run worker-pools deploy abhipraay-worker --image .../abhipraay-app:v1.2.0 ...
```

Version tags keep both resources on the same digest and make rollbacks
straightforward.

## Verifying it works

After both are running:

1. Submit an action that triggers a background task (e.g. upload audio).
2. API logs should show the task being enqueued.
3. Worker pool logs should show Celery picking it up and processing it.

If enqueueing succeeds but nothing processes, the worker pool is either not
deployed, missing `APP_ROLE=worker`, or pointing at a different `REDIS_URL`
than the API.

## Summary

- **One Docker image**, built once per release.
- **Two Cloud Run resources**: a Service for HTTP, a Worker Pool for Celery.
- **`APP_ROLE`** selects which process the entrypoint starts.
- **Pre-production Compose** rehearses the same split locally against real managed
  infra before you touch GCP.
- **Env vars are duplicated** on both resources for shared secrets; API-only
  vars stay on the service.

Background work is not a configuration flag on your web service — it is a
second deployment. Once that is clear, the GCP pieces line up naturally.