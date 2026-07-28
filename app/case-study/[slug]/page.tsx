import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { getAllCaseStudySlugs, getCaseStudyBySlug } from "@/lib/case-studies";
import { CaseStudyDiagram } from "@/components/case-study-diagram";
import { Github } from "@/components/icons/brand-icons";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) return { title: "Case study not found" };
  return {
    title: cs.title,
    description: cs.outcome,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = await getCaseStudyBySlug(slug);
  if (!cs) notFound();

  return (
    <article className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to work
      </Link>

      <header className="mt-10 flex flex-col gap-4">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {cs.title}
        </h1>
        <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
          {cs.subtitle}
        </p>
        <p className="text-pretty text-base font-medium text-primary">
          {cs.outcome}
        </p>

        <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-4">
          {cs.meta.map((m) => (
            <div key={m.label} className="flex flex-col gap-0.5">
              <dt className="text-xs text-muted-foreground">{m.label}</dt>
              <dd className="text-sm text-foreground">{m.value}</dd>
            </div>
          ))}
        </dl>
        {cs.links && cs.links.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-border py-4">
            {cs.links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
              >
                {l.label === "Source" ? (
                  <Github className="h-4 w-4 fill-muted-foreground" />
                ) : (
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                )}
                {l.label}
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Optional embedded diagram (from frontmatter `diagram` key). */}
      {cs.diagram && (
        <div className="mt-8">
          <CaseStudyDiagram name={cs.diagram} />
        </div>
      )}

      {/* Markdown body - edit the .md file in content/case-studies/. */}
      <div
        className="prose-quiet mt-10"
        dangerouslySetInnerHTML={{ __html: cs.contentHtml }}
      />

     
    </article>
  );
}
