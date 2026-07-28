import type { Metadata } from "next";
import Link from "next/link";
import {
  EDUCATION,
  EXPERIENCES,
  PROJECTS,
  PROFILE,
  SKILL_GROUPS,
} from "@/lib/profile-data";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Printable résumé for Parag Ingalkar, Full-Stack Software Engineer.",
  robots: { index: false, follow: false },
};

export const dynamic = "force-static";

export default function ResumePage() {
  const deployedProjects = PROJECTS.filter((p) => p.status === "Deployed");

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 print:max-w-none print:px-0 print:pt-0">
      <div className="flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Back to site
        </Link>
        <PrintButton />
      </div>

      <main className="mt-8 print:mt-0">
        {/* Header */}
        <header className="border-b border-border pb-5">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground">
            {PROFILE.name}
          </h1>
          <p className="mt-1 text-sm text-primary">{PROFILE.role}</p>
          <p className="mt-2 max-w-2ch text-sm leading-relaxed text-muted-foreground">
            {PROFILE.positioning}
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            {PROFILE.location} · {PROFILE.email}
          </p>
        </header>

        {/* Experience */}
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Experience
          </h2>
          <div className="mt-3 flex flex-col gap-5">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {exp.role} · {exp.company}
                  </p>
                  <p className="shrink-0 text-xs text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                {exp.location && (
                  <p className="text-xs text-muted-foreground">
                    {exp.location}
                  </p>
                )}
                <ul className="mt-1.5 flex flex-col gap-1">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="text-xs leading-relaxed text-foreground/80"
                    >
                      · {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-1 text-xs text-muted-foreground">
                  {exp.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Deployed projects
          </h2>
          <div className="mt-3 flex flex-col gap-3">
            {deployedProjects.map((p) => (
              <div key={p.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {p.name} - {p.tagline}
                  </p>
                  <span className="shrink-0 text-xs text-primary">
                    Deployed
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-foreground/80">
                  {p.description}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {p.stack.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Skills
          </h2>
          <dl className="mt-3 flex flex-col gap-1.5">
            {SKILL_GROUPS.map((g) => (
              <div key={g.title} className="flex gap-3 text-xs">
                <dt className="w-40 shrink-0 font-medium text-foreground">
                  {g.title}
                </dt>
                <dd className="text-muted-foreground">{g.skills.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Education */}
        <section className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Education
          </h2>
          <div className="mt-3 flex flex-col gap-2">
            {EDUCATION.map((e) => (
              <div key={e.degree}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">
                    {e.degree}
                  </p>
                  {e.period && (
                    <p className="shrink-0 text-xs text-muted-foreground">
                      {e.period}
                    </p>
                  )}
                </div>
                {e.school && (
                  <p className="text-xs text-muted-foreground">{e.school}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
