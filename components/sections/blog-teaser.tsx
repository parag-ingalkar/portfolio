import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts, formatDate } from "@/lib/blog";

export function BlogTeaser() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section
      id="blog"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            title="Field notes"
            description="Short posts on engineering, automation, and AI-assisted workflows. The lessons that don't fit on a resume."
          />
          <Link
            href="/blog"
            className="group inline-flex w-fit items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
          >
            All posts
            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <ul className="mt-10 flex flex-col">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-border py-6 first:border-t-0 first:pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-1.5 sm:grid-cols-12 sm:gap-8"
              >
                <div className="text-sm text-muted-foreground sm:col-span-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.readingTime && (
                    <span className="block text-xs">{post.readingTime}</span>
                  )}
                </div>
                <div className="sm:col-span-9">
                  <h3 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="measure mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
