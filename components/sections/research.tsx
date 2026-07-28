import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { RESEARCH } from "@/lib/profile-data";

export function Research() {
  return (
    <section
      id="research"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Research"
          description="My Master's thesis and a follow-up pre-print - physics-constrained neural networks for identifying microstructural parameters in cardiac tissue."
        />

        <ul className="mt-12 flex flex-col">
          {RESEARCH.map((item, i) => (
            <li
              key={item.title}
              className={i === 0 ? "pb-10" : "border-t border-border pt-10"}
            >
              <article className="grid gap-2 sm:grid-cols-12 sm:gap-8">
                <div className="text-sm text-muted-foreground sm:col-span-3">
                  <p className="font-medium text-foreground">{item.year}</p>
                  <p className="mt-0.5">{item.venue}</p>
                </div>
                <div className="sm:col-span-9">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.authors}
                  </p>
                  <p className="measure mt-3 text-pretty text-base leading-relaxed text-foreground/90">
                    {item.summary}
                  </p>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground underline-offset-4 hover:underline"
                  >
                    {item.linkLabel}
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
