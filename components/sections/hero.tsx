"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PROFILE } from "@/lib/profile-data";
import { HeroEntrance } from "@/components/reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-24 sm:pb-28"
    >
      <div className="mx-auto max-w-5xl">
        <HeroEntrance>
          <p className="text-sm text-muted-foreground">{PROFILE.status}</p>

          <h1 className="mt-5 text-pretty text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {PROFILE.name}.
            <br />
            <span className="text-muted-foreground">{PROFILE.role}</span>
          </h1>

          <p className="measure mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {PROFILE.positioning}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Link
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1 text-sm font-medium text-foreground underline-offset-4 hover:underline"
            >
              Read the blog
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </HeroEntrance>
      </div>
    </section>
  );
}
