import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO string
  tags: string[];
  readingTime?: string;
};

export type BlogPost = BlogPostMeta & {
  contentHtml: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

function ensureDir(dir: string) {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

/** Rough reading-time estimate from plain text. */
function estimateReadingTime(markdown: string): string {
  const words = markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_`~\-]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

/** Returns all posts, newest first. */
export function getAllPosts(): BlogPostMeta[] {
  const files = ensureDir(POSTS_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: (data.title as string) ?? slug,
      excerpt: (data.excerpt as string) ?? "",
      date: (data.date as string) ?? new Date().toISOString(),
      tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
      readingTime: estimateReadingTime(raw),
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Returns the slugs for static generation. */
export function getAllSlugs(): string[] {
  return ensureDir(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** Returns a single post with rendered HTML. */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  try {
    fs.accessSync(fullPath);
  } catch {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark().use(remarkHtml, { sanitize: false }).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: (data.title as string) ?? slug,
    excerpt: (data.excerpt as string) ?? "",
    date: (data.date as string) ?? new Date().toISOString(),
    tags: Array.isArray(data.tags) ? (data.tags as string[]) : [],
    readingTime: estimateReadingTime(raw),
    contentHtml,
  };
}

/** Format an ISO date into a calm, human-readable label. */
export function formatDate(iso: string): string {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}
