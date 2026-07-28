import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { PROJECTS, type Project } from "@/lib/profile-data";
import { Github } from "@/components/icons/brand-icons";
import { basePath } from "@/lib/utils";

function FeaturedProject({ project }: { project: Project }) {
  return (
    <article className="grid gap-6 sm:grid-cols-12 sm:gap-8">
      <div className="sm:col-span-5">
        <div className="flex items-baseline gap-2.5">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {project.name}
          </h3>
          <span className="text-xs text-primary">{project.status}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.tagline}</p>

        {/* Cover image - placeholder until real screenshots are supplied.
            TODO: replace /public/projects/<name>.png with a real screenshot. */}
        {project.cover && (
          <img
            src={`${basePath}${project.cover}`}
            alt={`Illustrative cover for ${project.name}`}
            width={672}
            height={384}
            loading="lazy"
            className="mt-4 w-full rounded-md border border-border object-cover"
          />
        )}
      </div>

      <div className="sm:col-span-7">
        <p className="measure text-pretty text-base leading-relaxed text-foreground/90">
          {project.description}
        </p>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
          {project.stack.map((tech) => (
            <li key={tech} className="text-xs text-muted-foreground">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {project.demoUrl && (
            <Link
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
              Live demo
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
          {project.repo && (
            <Link
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              <Github className="h-4 w-4 fill-current" />
              Source
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
          {project.caseStudySlug && (
            <Link
              href={`/case-study/${project.caseStudySlug}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Read the case study
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

function PrototypeRow({ project }: { project: Project }) {
  return (
    <li className="flex flex-col gap-1 border-t border-border py-5 first:border-t-0 first:pt-0 sm:flex-row sm:items-baseline sm:gap-6">
      <div className="sm:w-56 shrink-0">
        <div className="flex items-baseline gap-2">
          <h4 className="text-base font-medium text-foreground">
            {project.name}
          </h4>
          <span className="text-xs text-muted-foreground">
            {project.status}
          </span>
        </div>
        <p className="text-sm text-muted-foreground">{project.tagline}</p>
      </div>
      <div className="flex-1">
        <p className="text-pretty text-sm leading-relaxed text-foreground/80">
          {project.description}
        </p>
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-1 text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            <Github className="h-4 w-4 fill-current" />
            Source
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        )}
      </div>
    </li>
  );
}

export function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const prototypes = PROJECTS.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          description="A mix of production apps with real users and prototypes that explore an idea. Each one taught me something I now bring to client and employer work."
        />

        <div className="mt-12 flex flex-col gap-14">
          {featured.map((p) => (
            <FeaturedProject key={p.name} project={p} />
          ))}
        </div>

        {prototypes.length > 0 && (
          <div className="mt-16">
            <h3 className="text-sm font-medium text-muted-foreground">
              Prototypes
            </h3>
            <ul className="mt-5">
              {prototypes.map((p) => (
                <PrototypeRow key={p.name} project={p} />
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
