---
title: "The 80% SLA cut came from a boring script, not a smart algorithm"
excerpt: "The biggest measurable win of my career came from automating a manual, error-prone SQL connector workflow. No ML, no clever architecture - just Python and empathy for the next operator."
date: "2026-01-22"
tags: ["automation", "qa", "impact"]
---

At Dassault Systèmes I helped maintain a SQL connector service that powered an
internal employee planning tool. Every time a new connector was needed, someone
on the team would manually assemble the configuration, run a series of checks,
file a few tickets, and hand it off. The process took hours and depended on
whoever happened to be on shift.

We replaced it with a Python script.

I want to be honest about how unglamorous that sounds. There was no machine
learning. There was no fancy orchestration framework. There was `argparse`, a
template, a config validator, and a logging line that told you exactly what it
did. The script ran in seconds, and it did the same thing every time.

The impact was disproportionate:

- **SLA time dropped ~80%.** Not because the work was faster, but because the
  work was *decided* - no more back-and-forth about which fields to fill in.
- **Errors nearly disappeared.** The script validated inputs up front. The few
  errors that remained were data errors, not process errors, and they were
  easy to triage.
- **The team got ~10 hours a week back.** That time went into actual incident
  response and into the kind of careful regression testing that we had been
  postponing for months.

What I learned from this is that **boring automation beats clever architecture
for most internal tools**. If a human is doing the same sequence of steps more
than twice a week, a script will usually outperform a redesign. The script does
not need to be elegant. It needs to be reliable, observable, and easy to change
when the process changes.

The other lesson: **measure before and after**. "We automated it" is a feeling.
"SLA dropped 80%" is a fact you can put on a resume and defend in an interview.
