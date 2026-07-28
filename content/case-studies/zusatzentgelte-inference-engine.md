---
title: "Zusatentgelte reimbursement inference engine"
subtitle: "Calliora GmbH - owned end to end, Sep 2025 – Mar 2026"
outcome: "200,000+ hospital cases processed in about 8 minutes."
diagram: zusatzentgelte-pipeline
stack:
  - FastAPI
  - React
  - TypeScript
  - PostgreSQL
  - RabbitMQ
  - Alembic
  - Docker
  - GitHub Actions
meta:
  - label: "Company"
    value: "Calliora GmbH"
  - label: "Role"
    value: "Working Student, Full-Stack Developer"
  - label: "Period"
    value: "Sep 2025 – Mar 2026"
  - label: "Stack"
    value: "FastAPI, React, PostgreSQL, Docker, Alembic, GitHub Actions"

---

## Problem

German hospitals are reimbursed through the DRG (Diagnosis-Related Groups) system, which assigns each case a base reimbursement amount from its diagnosis and procedure profile. On top of this base amount, Zusatzentgelte are additional surcharge payments for high-cost treatments - expensive drugs, implants, ICU care - that the DRG base rate doesn't cover. Eligibility rules for these surcharges are defined in the official Fallpauschalenkatalog, published annually, and mostly branch on OPS and ICD codes - but a meaningful subset carry complex footnote conditions that can't be resolved from codes alone. Calliora needed a system that could evaluate these rules automatically and correctly for every case, at scale, while keeping compliance-sensitive hospital data protected.

## My role

I owned this feature end-to-end: requirements study of the regulation itself, schema design, the parsing scripts, the inference engine, integration into three separate workflows, the admin UI for managing individually negotiated amounts, RLS policies, unit tests, and the production backfill.

## Key technical decisions

### From "flag for manual review" to fully parsing footnote logic

At first glance, most trigger rules are straightforward - matched directly against OPS or ICD codes. But a meaningful subset carry additional footnote conditions written in prose, not structured data. My first instinct was to sidestep this: flag those Zusatzentgelte with a warning telling users to verify the trigger manually. After digging further into the catalog, I realized that punting on these cases would leave a significant and unpredictable portion of surcharges unresolved for users. I went back and built a schema and parsing script capable of correctly capturing these footnote conditions in structured form, so they could be evaluated automatically like every other rule. Recognizing that the easy workaround wasn't good enough, and rebuilding the approach around the harder but correct solution, was the most important judgment call in the project.

### Hexagonal architecture for a portable inference core

The existing codebase followed a clean hexagonal (ports and adapters) architecture, and I built the inference engine as a standalone, independently unit-testable core within it. That modularity paid off immediately: the same engine was integrated into three distinct workflows - the uploaded-file processing pipeline (as a new inference step), a case-simulation endpoint (letting users test hypothetical cases), and a backfill script (reprocessing historical records without duplicating logic). Designing for portability from the start meant zero rework across three very different call sites.

### Resolving Bewertet vs. Unbewertet amounts at runtime

Bewertet Zusatzentgelte have standardized, catalog-fixed amounts. Unbewertet Zusatzentgelte are individually negotiated between each hospital and payer, so there's no universal default. I built CRUD functionality into the admin panel so users could store their own negotiated amounts, and extended the inference engine to resolve the correct amount at runtime - using the user-provided value when available, and falling back to catalog defaults otherwise. Since these amounts are compliance-sensitive, I added RLS policies on the underlying tables to enforce access control at the database level, not just in application code.

### LRU caching on the regex-matching hot path

Rule evaluation relies on regex pattern matching against case attributes, which becomes a bottleneck at scale. Profiling the engine under load showed this as the clear hotspot, so I added LRU caching for the regex lookups. This was a small, targeted change that produced a large performance gain once the schema and parsing logic were already correct.

## Challenges

- **Faithfully modeling the regulation**: the Fallpauschalenkatalog is the spec, and every ambiguous clause had to become an explicit nullable column or constraint rather than an assumption.
- **Parsing both tabular and prose-based rules**: building a parser that could handle structured catalog tables alongside free-text footnote conditions, and store both in a queryable, structured format.
- **Designing for annual catalog changes**: a new Fallpauschalenkatalog is published every year, so the parsing script had to be modular enough to accommodate new or changed rules with minimal rewrites, rather than being rebuilt from scratch each cycle.
- **Keeping the engine genuinely portable**: building to the hexagonal pattern strictly enough that the same core logic could be reused across upload processing, simulation, and backfill without workflow-specific hacks leaking into the engine itself.

## Outcome

The result was a rules-based inference engine that takes a case as input, evaluates it against the full rule set, and outputs every triggered Zusatzentgelt along with its resolved amount. This surfaced an entirely new reimbursement contribution that users previously had no visibility into. In testing, the engine processed 200,000+ cases in approximately 8 minutes - production metrics weren't available to me, but this gives a representative sense of throughput at scale.

## What I learned

This project pushed me deepest into scalable backend design patterns I'd only studied before: hexagonal architecture and ports-and-adapters in practice, unit-of-work patterns for consistent data access, and writing parsers robust enough to survive a changing external spec. Beyond the backend, it also sharpened skills I don't always get to exercise together - translating dense regulatory text into precise requirements, designing admin-facing UI/UX for a non-technical audience, and implementing RLS as a first-class part of schema design rather than an afterthought.