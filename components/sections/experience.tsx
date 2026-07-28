import { SectionHeading } from "@/components/section-heading";
import { EXPERIENCES, TESTIMONIAL, type Experience } from "@/lib/profile-data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ZusatzentgeltPipelineDiagram } from "@/components/zusatzentgelte-pipeline-diagram";

function ExperienceEntry({ exp, index }: { exp: Experience; index: number }) {
  return (
    <article className="grid gap-6 sm:grid-cols-12 sm:gap-8">
      {/* Period + location - the metadata column */}
      <div className="sm:col-span-3">
        <p className="text-sm font-medium text-foreground">{exp.period}</p>
        {exp.location && (
          <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
        )}
      </div>

      {/* The work - prose, achievements, stack */}
      <div className="sm:col-span-9">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {exp.role}
        </h3>
        <p className="mt-0.5 text-sm text-primary">{exp.company}</p>

        <p className="measure mt-3 text-pretty text-base leading-relaxed text-foreground/90">
          {exp.summary}
        </p>

        <ul className="mt-4 flex flex-col gap-2.5">
          {exp.highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span
                aria-hidden
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground"
              />
              <span className="text-pretty leading-relaxed text-foreground/90">
                {h}
              </span>
            </li>
          ))}
        </ul>

        {/* Architecture diagram on the Calliora (DRG) entry */}
        {index === 0 && <ZusatzentgeltPipelineDiagram />}

        <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-1.5">
          {exp.stack.map((tech) => (
            <li key={tech} className="text-xs text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>

        {exp.caseStudySlug && (
          <Link
            href={`/case-study/${exp.caseStudySlug}`}
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Read the case study
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </article>
  );
}

function Testimonial() {
  return (
    <figure className="mt-16 border-l-2 border-primary pl-5">
      <blockquote className="measure text-pretty text-lg leading-relaxed text-foreground/90">
        “{TESTIMONIAL.quote}”
      </blockquote>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">
          {TESTIMONIAL.author}
        </span>
        , {TESTIMONIAL.context}
      </figcaption>
    </figure>
  );
}

export function Experience() {
  return (
    <section
      id="work"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Work"
          description="Two roles, different shapes. One where I owned a feature end to end, one where I built the automation that let the whole team move faster."
        />

        <div className="mt-12 flex flex-col">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className={i === 0 ? "pb-12" : "border-t border-border pt-12"}
            >
              <ExperienceEntry exp={exp} index={i} />
            </div>
          ))}
        </div>

        {/* Third-party credibility - see profile-data.ts for the placeholder note. */}
        {/* <Testimonial /> */}
      </div>
    </section>
  );
}
