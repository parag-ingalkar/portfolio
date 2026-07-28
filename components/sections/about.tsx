import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { EDUCATION, PROFILE } from "@/lib/profile-data";
import { basePath } from "@/lib/utils";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About"
          description="A backend-leaning full-stack engineer who likes owning the whole feature - schema, API, frontend, deploy, and the pipeline that keeps it running."
        />
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-10">
          <img
            src={`${basePath}/profile.png`}
            alt={`Portrait of ${PROFILE.name}`}
            width={208}
            height={277}
            loading="lazy"
            className="w-40 shrink-0 rounded-md border border-border object-cover sm:w-48 lg:w-52"
            style={{ aspectRatio: "3 / 4" }}
          />

          <div className="measure space-y-5 text-base leading-relaxed text-foreground/90">
            <p>
              I&apos;m a full-stack software engineer with a strong backend
              focus and real product-ownership experience. At{" "}
              <span className="font-medium text-foreground">calliora GmbH</span>{" "}
              I owned a rules-based inference engine end to end; requirements
              research, schema, FastAPI backend, React frontend, and tests. At{" "}
              <span className="font-medium text-foreground">
                Dassault Systèmes
              </span>{" "}
              I built an automation testing framework from scratch and tooling
              that gave the team back about 10 hours a week.
            </p>
            <p>
              I value separation of concerns, clean architecture, unit-of-work
              style design, and systems that are scalable and maintainable. I
              write tests alongside features, document decisions in markdown,
              and treat deploys as something to coordinate rather than fear.
            </p>

            {/* Facts - directly under the info, within the same column. */}
            <dl className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6">
              <div>
                <dt className="text-xs text-muted-foreground">Based in</dt>
                <dd className="mt-0.5 text-sm text-foreground">
                  {PROFILE.location}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Languages</dt>
                <dd className="mt-0.5 text-sm text-foreground">
                  English (C1), German (A1)
                </dd>
              </div>
              <div>
                <dt className="text-xs text-muted-foreground">Open to</dt>
                <dd className="mt-0.5 text-sm text-foreground">
                  Full-time roles, relocation
                </dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Education - its own row, full width. */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-medium text-foreground">Education</h3>
          </div>
          <ul className="mt-5 grid gap-x-12 sm:grid-cols-2">
            {EDUCATION.map((edu) => (
              <li
                key={edu.degree}
                className="flex flex-col gap-1 border-t border-border py-5"
              >
                <p className="text-base font-medium text-foreground">
                  {edu.degree}
                </p>
                {edu.school && (
                  <p className="text-sm text-muted-foreground">{edu.school}</p>
                )}
                {edu.period && (
                  <p className="text-xs text-muted-foreground">{edu.period}</p>
                )}
                {edu.note && (
                  <p className="mt-1 text-sm italic text-muted-foreground">
                    {edu.note}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
