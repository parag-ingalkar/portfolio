import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { PROFILE } from "@/lib/profile-data";
import { Github, LinkedIn } from "@/components/icons/brand-icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-8 sm:grid-cols-12 sm:gap-12">
          <div className="sm:col-span-8">
            <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Looking for an engineer who ships end to end?
            </h2>
            <p className="measure mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              I&apos;m open to full-time software engineering roles -
              full-stack, backend-leaning, or product-focused. I can start soon
              and I&apos;m happy to relocate.
            </p>
          </div>

          <div className="sm:col-span-4 sm:pt-1">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              Send an email
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="mt-4 flex items-center gap-4">
              <Link
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 fill-current" />
                GitHub
              </Link>
              <Link
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <LinkedIn className="h-4 w-4 fill-current" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
