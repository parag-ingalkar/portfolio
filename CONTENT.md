# Editing content

This portfolio is **markdown-driven** for all repeatable content - blog posts
and case studies. You edit a `.md` file and deploy; no TypeScript changes
needed. This document covers every kind of edit you'll make.

## Deploy workflow (GitHub Pages / Cloudflare Pages)

The site is configured for static export (`output: "export"` in `next.config.ts`).

1. Edit the relevant file(s) below.
2. Push to your `main` branch.
3. The platform's build runs `next build` and ships the static `out/` folder.

- **Cloudflare Pages**: build command `npm run build`, output directory `out`.
  (Next.js 16 writes static export to `out/` when `output: "export"` is set.)
- **GitHub Pages**: use the official `actions/deploy-pages` workflow with
  `next build` as the build step, uploading the `out/` artifact.

No server, no database, no runtime - the markdown is read at **build time**,
so adding a post or case study is just committing a file.

---

## Blog posts

**Location:** `content/blog/*.md`

To add a post, create a new `.md` file named after its slug:

```markdown
---
title: "Your title here"
excerpt: "One-line summary shown in the list."
date: "2026-03-01"
tags: ["engineering", "career"]
---

Your markdown body here. Headings, lists, code blocks, blockquotes all render.
```

To edit a post, open its `.md` file and edit. To remove one, delete the file.
The list at `/blog` updates automatically (newest first by `date`).

---

## Case studies

**Location:** `content/case-studies/*.md`

Each case study has frontmatter (structured fields) + a markdown body
(prose sections). Example:

```markdown
---
title: "DRG reimbursement inference engine"
subtitle: "Calliora GmbH - owned end to end, Sep 2025 – Mar 2026"
outcome: "200,000+ hospital cases processed in about 8 minutes."
diagram: drg-pipeline        # optional - embeds a named diagram
stack:
  - FastAPI
  - React
  - PostgreSQL
meta:
  - label: "Company"
    value: "Calliora GmbH"
  - label: "Period"
    value: "Sep 2025 – Mar 2026"
links:
  - label: "Live demo"
    href: "https://example.com"
    external: true
---

## The problem

Prose here.

## My role

Prose here.

## Key technical decisions

### Decision title

Prose explaining the decision.

### Another decision

Prose.

## Challenges

- First challenge.
- Second challenge.

## Outcome

Prose here.
```

**Section headings** (`## The problem`, `## My role`, `## Key technical
decisions`, `## Challenges`, `## Outcome`) are a convention, not a requirement -
use whichever sections fit the story. Decision sub-items use `###` headings.

**To link a project or experience card to a case study**, the `caseStudySlug`
field in `src/lib/profile-data.ts` must match the markdown filename (without
`.md`). For example, `caseStudySlug: "abhipraay"` links to
`content/case-studies/abhipraay.md`.

---

## Diagrams

There are two places a diagram appears:

### 1. The Calliora diagram on the home page (Work section)

**Location:** `src/components/drg-pipeline-diagram.tsx`

Edit the `NODES` array at the top of the file to change the boxes (each node
has a `title` and a `sub` label). The arrows, layout (horizontal on desktop,
vertical on mobile), and the "RLS policies" caption are below the array.

### 2. A diagram embedded in a case study

Set the `diagram:` key in the case study's frontmatter to a registered
diagram name. Currently registered:

- `drg-pipeline` - the DRG inference pipeline diagram.

```yaml
diagram: drg-pipeline
```

### Adding a brand-new diagram

1. Create a component, e.g. `src/components/my-flow-diagram.tsx` (copy the
   structure of `drg-pipeline-diagram.tsx` - a responsive `<figure>` with
   nodes and arrows).
2. Register it in `src/components/case-study-diagram.tsx`:

   ```ts
   import { MyFlowDiagram } from "@/components/my-flow-diagram";
   const REGISTRY = {
     "drg-pipeline": ZusatzentgeltPipelineDiagram,
     "my-flow": MyFlowDiagram,
   };
   ```

3. Reference it from any case study: `diagram: my-flow`.

Once a diagram is registered, every case study can reuse it by key - no
component work per case study.

---

## Other editable content

| What | Where |
|---|---|
| Name, role, positioning, email, socials, résumé link | `src/lib/profile-data.ts` → `PROFILE` |
| Experience entries (Calliora, Dassault) | `src/lib/profile-data.ts` → `EXPERIENCES` |
| Projects (Abhipraay, Pomokan, VaultLog, Easy Payroll) | `src/lib/profile-data.ts` → `PROJECTS` |
| Skills groups | `src/lib/profile-data.ts` → `SKILL_GROUPS` |
| Education | `src/lib/profile-data.ts` → `EDUCATION` |
| Testimonial quote | `src/lib/profile-data.ts` → `TESTIMONIAL` |
| SEO metadata, site URL, OG image | `src/app/layout.tsx` |
| Favicon | `public/favicon.svg`, `public/apple-touch-icon.png` |
| Profile photo (About section) | `public/profile.jpg` - 3:4 or 4:5 portrait, renders small beside the bio |
| Project cover images | `public/projects/*.png` |

---

## Quick reference: the three most common edits

**Add a blog post:** drop a file in `content/blog/`. Done.

**Edit a case study:** edit the file in `content/case-studies/`. Done.

**Update the DRG diagram:** edit the `NODES` array in
`src/components/drg-pipeline-diagram.tsx`. Done.
