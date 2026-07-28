import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";

/**
 * Case-study loader - markdown-driven, mirroring src/lib/blog.ts.
 *
 * Each case study is a .md file in content/case-studies/. The frontmatter
 * carries structured fields (title, subtitle, outcome, stack, meta, links,
 * and an optional `diagram` key); the markdown body carries the prose
 * sections (## The problem, ## My role, ## Key technical decisions, etc.).
 *
 * To add or edit a case study, just edit a markdown file - no TypeScript.
 */

export type CaseStudyLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CaseStudyMeta = {
  label: string;
  value: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  outcome: string;
  /** Optional diagram key, e.g. "zusatzentgelte-pipeline". Rendered after the intro. */
  diagram?: string;
  stack: string[];
  meta: CaseStudyMeta[];
  links: CaseStudyLink[];
  contentHtml: string;
};

const DIR = path.join(process.cwd(), "content", "case-studies");

function listFiles(): string[] {
  try {
    return fs.readdirSync(DIR).filter((f) => f.endsWith(".md"));
  } catch {
    return [];
  }
}

/** Returns the slugs for static generation. */
export function getAllCaseStudySlugs(): string[] {
  return listFiles().map((f) => f.replace(/\.md$/, ""));
}

/** Returns a single case study with rendered HTML body. */
export async function getCaseStudyBySlug(
  slug: string
): Promise<CaseStudy | null> {
  const fullPath = path.join(DIR, `${slug}.md`);
  try {
    fs.accessSync(fullPath);
  } catch {
    return null;
  }

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkHtml, { sanitize: false })
    .process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    title: (data.title as string) ?? slug,
    subtitle: (data.subtitle as string) ?? "",
    outcome: (data.outcome as string) ?? "",
    diagram: typeof data.diagram === "string" ? data.diagram : undefined,
    stack: Array.isArray(data.stack) ? (data.stack as string[]) : [],
    meta: Array.isArray(data.meta)
      ? (data.meta as CaseStudyMeta[])
      : [],
    links: Array.isArray(data.links) ? (data.links as CaseStudyLink[]) : [],
    contentHtml,
  };
}
