import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { PROFILE } from "@/lib/profile-data";
import { Github, LinkedIn } from "@/components/icons/brand-icons";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-background">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <div className="flex flex-col items-center gap-1 text-center sm:items-start sm:text-left">
          <p className="text-sm font-medium text-foreground">{PROFILE.name}</p>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {PROFILE.location}
          </p>
        </div>

        <div className="flex items-center gap-1">
          <Link
            href={PROFILE.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4 fill-muted-foreground" />
          </Link>
          <Link
            href={PROFILE.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <LinkedIn className="h-4 w-4 fill-muted-foreground" />
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email"
            className="flex h-11 w-11 items-center justify-center rounded-md text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {year} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
