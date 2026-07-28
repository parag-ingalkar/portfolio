---
title: "Abhipraay - audio feedback for small businesses"
subtitle: "Personal project - deployed, real users"
outcome: "Deployed on Google Cloud Run, used by real businesses."
stack:
  - FastAPI
  - React
  - TypeScript
  - PostgreSQL
  - Sarvam AI
  - S3
  - Google Cloud Run
meta:
  - label: "Type"
    value: "SaaS, personal project"
  - label: "Status"
    value: "Deployed, real users"
  - label: "Stack"
    value: "FastAPI, React, PostgreSQL, Sarvam AI, S3"
  - label: "Deploy"
    value: "Google Cloud Run"
links:
  - label: "Live demo"
    href: "https://abhipraay-service-398084727840.asia-south1.run.app/"
    external: true
  - label: "Source"
    href: "https://github.com/parag-ingalkar/abhipraay"
    external: true
---

## The problem

This problem was sourced from Fix My Itch, a platform by Razorpay that surfaces real, validated pain points for builders to solve. It described how small businesses get almost no useful customer feedback, because long online surveys have poor completion rates - filling out a form after a purchase feels like a chore. What was missing was an easier way to give feedback that took seconds, not minutes, and didn't force customers to create an account or think hard about what to write.

## My role

I built the whole product myself: the backend, the frontend, the AI transcription pipeline, the audio storage, and the cloud deployment.

## Key technical decisions

**No login, just a QR code**

The fastest path from a customer's phone to submitted feedback is a QR code on a receipt or table card. There's no app to install and no account to create. The customer scans, records a short voice clip, and submits it - that's the entire interaction.

**Audio in, text out**

Asking someone to type a paragraph usually gets a one-line answer, if it gets an answer at all. Asking them to just talk for 30 seconds gets much richer, more honest feedback. I used Sarvam AI's speech-to-text API to automatically transcribe each recording, so the business owner reads a clear transcript instead of having to listen to every audio file to find useful information.

**Cloudflare R2 for audio, Postgres for everything else**

Audio recordings are stored in Cloudflare R2, an S3-compatible storage service built for files like this. Everything else - business accounts, transcripts, and metadata - lives in Postgres. Splitting storage this way keeps the database fast and keeps audio playback simple and cheap to serve.

**Background processing so nothing blocks the customer**

Transcribing audio takes a few seconds, and I didn't want the customer waiting on their phone while that happens. I built the transcription step as a background task: the customer's recording is saved and submitted instantly, and the transcript is generated afterward, ready by the time the business owner checks their dashboard.

**Cloud Run for a deploy that costs almost nothing when idle**

Feedback doesn't come in at a steady pace - it spikes around busy hours and goes quiet the rest of the day. Google Cloud Run scales down to zero when there's no traffic and scales up automatically during a rush, so I never had to pay for idle servers or manually plan for traffic spikes. This kept running costs low enough to make sense for a small-business product.

## Challenges

- Getting audio recording to work reliably across different phone browsers, which handle microphone permissions and audio formats inconsistently.
- Keeping the gap between "customer submits" and "transcript is ready" short enough that business owners don't feel like they're waiting.
- Designing a dashboard simple enough that a non-technical shop owner can glance at it and immediately understand what customers are saying, not just see a pile of transcripts.

## Outcome

Abhipraay is live and being used by real businesses to collect feedback they weren't getting before. The scan-record-submit flow removes the friction that kills traditional feedback forms, and the background transcription plus serverless deployment keep it fast for customers and cheap to run for the business.