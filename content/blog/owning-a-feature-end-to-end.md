---
title: "Owning a feature end-to-end is the fastest way to grow"
excerpt: "Designing the schema, building the API, wiring the frontend, and shipping the deploy taught me more in months than years of ticket-shaped work."
date: "2026-02-10"
tags: ["engineering", "product", "career"]
---

There is a particular kind of learning that only happens when you own a feature
from the first whiteboard sketch to the production deploy. It is different from
picking up a well-scoped ticket, and it is different from reviewing someone
else's pull request.

When I joined Calliora to build the inference engine for the DRG grouper, I
naively thought the hard part would be the Python. It was not. The hard part
was the **shape of the problem**: the official Fallpauschalenkatalog is a
regulation masquerading as a catalog, and every inclusion / exclusion rule
branches on a different combination of OPS codes, ICD codes, age, hospital days,
and edge-case clauses that exist mostly to be footnotes.

The lessons I keep coming back to:

- **Model the decision tree, not the rules.** Once I stopped trying to encode
  rules as data rows and started modeling them as decision nodes, the schema
  became honest about the complexity instead of hiding it.
- **The schema is the spec.** Every ambiguity in the regulation showed up as a
  nullable column or a missing constraint. Fixing those at the schema level
  removed a whole class of bugs the frontend never had to know about.
- **Tests are the only way to trust a rules engine.** I wrote unit tests for
  individual rules and integration tests for full case scenarios. The day a
  regression slipped through, the tests caught it before staging did.
- **Performance is a feature.** Adding an LRU cache to the inference path took
  the pipeline from "acceptable" to ~200,000 cases in ~8 minutes. Caching is
  unsexy but it compounds.

If you get the chance to own something end to end - schema, API, frontend,
deploy, monitoring - take it. It is uncomfortable and slow at first, but the
mental model you build is the asset you carry into every future role.
