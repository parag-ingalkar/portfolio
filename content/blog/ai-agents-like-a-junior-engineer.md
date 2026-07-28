---
title: "Using AI agents like a junior engineer, not a magic wand"
excerpt: "AI-assisted development works best when you treat the agent like a capable but uncontexted teammate: give it scope, review its work, and never let it ship alone."
date: "2025-12-15"
tags: ["ai", "workflow", "productivity"]
---

I use AI-assisted development every day - GitHub Copilot in the editor, agents
for scaffolding features, models for first-draft docs and tests. After a couple
of years of this workflow, I have a mental model that has held up well.

**Treat the agent like a smart junior engineer who just joined the team.**

That framing solves most of the common failure modes:

- **You would not hand a junior a vague ticket and disappear.** You give them
  scope, point them at the relevant files, and agree on a definition of done.
  The same is true for an agent. The quality of the output is bounded by the
  quality of the brief.
- **You would review a junior's PR.** Every line. Same here. I never let AI
  output ship without a real review. The agent does not know your users, your
  compliance constraints, or your on-call rotation. You do.
- **You would not let a junior make architecture decisions alone.** Agents are
  great at *implementing* a chosen design and bad at *choosing* one. I sketch
  the schema and the module boundaries myself, then let the agent fill in the
  boilerplate and the tests.
- **You would pair with a junior on the scary parts.** Auth, money, migrations,
  RLS policies - these get pair-programmed, not delegated.

Where agents shine for me:

1. **First drafts.** Tests, docstrings, migration scripts, README sections. The
   first draft is the hardest part; the agent gets you 70% there in seconds.
2. **Refactors with clear rules.** "Rename this symbol everywhere and update the
   call sites" is a task humans get wrong in predictable ways.
3. **Cross-file discovery.** "Where is this function used and what calls it?"
   is faster to ask than to grep when the codebase is new to you.
4. **Boilerplate-heavy features.** CRUD endpoints, form validation, type
   generation - work that is necessary but not novel.

Where they struggle:

- Anything that requires knowing *why* a decision was made.
- Anything that touches compliance, security, or money without a human in the
  loop.
- Anything where the "right" answer depends on a tradeoff the agent cannot see.

The headline: **AI-assisted development is a multiplier on a clear mind, and a
confuser on a fuzzy one.** Spend the time you save on the brief and the review,
not on hoping the agent will figure it out.
