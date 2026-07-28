import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-32 sm:px-8">
      <p className="text-sm text-muted-foreground">404</p>
      <h1 className="mt-2 text-pretty text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        That page isn&apos;t here.
      </h1>
      <p className="measure mt-3 text-pretty text-base leading-relaxed text-muted-foreground">
        The link may be broken, or the page may have moved. Try the home page,
        the work history, or the blog.
      </p>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <Link
          href="/blog"
          className="text-sm font-medium text-foreground underline-offset-4 hover:underline"
        >
          Read the blog
        </Link>
      </div>
    </div>
  );
}
