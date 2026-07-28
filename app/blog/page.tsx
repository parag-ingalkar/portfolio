import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Short insights and experiences on full-stack engineering, automation, AI-assisted development, and shipping product.",
};

export const dynamic = "force-static";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-5 pb-24 pt-12 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Home
      </Link>

      <header className="mt-10 flex flex-col gap-3">
        <h1 className="text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Field notes
        </h1>
        <p className="measure text-pretty text-base leading-relaxed text-muted-foreground">
          Short posts on full-stack engineering, automation, AI-assisted
          workflows, and shipping product that holds up in production.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted-foreground">No posts yet.</p>
      ) : (
        <ul className="mt-12 flex flex-col">
          {posts.map((post) => (
            <li key={post.slug} className="border-t border-border py-7 first:border-t-0 first:pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid gap-2 sm:grid-cols-12 sm:gap-8"
              >
                <div className="text-sm text-muted-foreground sm:col-span-3">
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.readingTime && (
                    <span className="block text-xs">{post.readingTime}</span>
                  )}
                </div>
                <div className="sm:col-span-9">
                  <h2 className="text-lg font-medium tracking-tight text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="measure mt-1.5 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1">
                      {post.tags.map((tag) => (
                        <li key={tag} className="text-xs text-muted-foreground">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="sr-only">Read post</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
