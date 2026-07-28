---
title: "Pomokan - Todos, Kanban, Eisenhower, Pomodoro"
subtitle: "Personal project - deployed, real users"
outcome: "Deployed and used by real users; built with an AI-agent workflow."
stack:
  - Next.js
  - React
  - TypeScript
  - PostgreSQL
  - Supabase
  - Better-Auth
meta:
  - label: "Type"
    value: "Productivity app, personal project"
  - label: "Status"
    value: "Deployed, real users"
  - label: "Stack"
    value: "Next.js, TypeScript, Supabase, Better-Auth"
  - label: "Deploy"
    value: "Vercel"
links:
  - label: "Live demo"
    href: "https://pomokan-v2.vercel.app"
    external: true
  - label: "Source"
    href: "https://github.com/parag-ingalkar/pomokan_v2"
    external: true
---

## The problem

Productivity apps usually solve one thing well - a todo list, a kanban board, a Pomodoro timer - and force you to context-switch between them. The switching cost eats the focus the tools were supposed to protect.

## My role

I designed and built the whole app end to end, using an AI-agent-assisted workflow to move faster on the boilerplate-heavy parts while keeping every architectural decision my own.

## Key technical decisions

### One surface, four views linked by shared state

Todos, the kanban board, the Eisenhower matrix, and the Pomodoro timer all read and write the same task model. Moving a card updates the matrix; finishing a Pomodoro logs time against the active task. The views are lenses on one dataset, not four separate lists.

### Next.js + Supabase for a small, honest backend

The app is small. Next.js with prisma ORM connects with Supabase PostgreSQL instance, keeping the backend simple and avoiding over-engineering a simple CRUD-plus-auth surface.

### Better-Auth for authentication

I used Better-Auth as a dedicated auth service provider. It is well documented and works well with Prisma ORM. Unlike Clerk it allows to manage our own auth related tables which is good when you want to have control.

## Challenges

- Keeping the four views consistent when they share state - a single source of truth and careful event handling beat syncing separate stores.
- Making the Pomodoro timer trustworthy across tab-backgrounding and sleep, where naive timers drift.
- Resisting feature creep - the whole point was fewer surfaces, not more.

## Outcome

Pomokan is deployed and used by real users. Linking the four productivity views over one task model removes the context-switching tax, and the AI-agent-assisted build let me ship it faster without handing over architecture.
