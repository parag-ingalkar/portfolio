---
title: "The 80% SLA cut came from a boring script, not a smart algorithm"
excerpt: "The biggest measurable win of my career came from automating a manual, error-prone SQL connector workflow. No ML, no clever architecture - just Python and empathy for the next operator."
date: "2026-01-22"
tags: ["automation", "qa", "impact"]
---

At Dassault Systèmes I helped maintain a SQL connector service that powered internal 
services. Users across the world who wanted a new connector would raise a ticket with
details of the required configuration. We had to first create it in the dev environment,
followed by pre-production environment after validation. Finally, on the day of production
deployment in each month, we had to again manually create the connector with the same configuration
in production. The entire process took a long time. Even more on the production drop day,
the entire process could take hours along with drafting the communication mails.

We replaced it with a Python script.

I want to be honest about how unglamorous that sounds. There was no machine
learning. There was no fancy orchestration framework. I created a simple GUI interface 
using `pyqt`, which would take in all the configuration details and the environment for 
which we want to create the connector. The script would then use selenium to pull up a 
browser and would follow the entire process of creating the connector, along with drafting 
the email; ready to send. I still kept human in the loop who had the final authority of finalizing 
the connector configuration. The script ran in seconds, and it did the same thing every time.

The impact was disproportionate:

- **SLA time dropped ~80%.** Not only because the work was faster, but also because the
  work was *decided* - no more back-and-forth about which fields to fill in.
- **Errors nearly disappeared.** The script took in the configuration as given by the users.
  The main problem of misconfiguration by a silly mistake was gone. Drafting the information 
  mail for each connector became virtually error proof.
- **The production drop day simplified.** The tool drasstically sped up the process of 
  creating the connector on production deployment day when one person had to handle around 20
  connector creations, drafting mail for each.

What I learned from this is that **boring automation beats clever architecture
for most internal tools**. If a human is doing the same sequence of steps more
than twice a week, a script will usually outperform a redesign. The script does
not need to be elegant. It needs to be reliable, observable, and easy to change
when the process changes.

The other lesson: **measure before and after**. "We automated it" is a feeling.
"SLA dropped 80%" is a fact you can put on a resume and defend in an interview.
