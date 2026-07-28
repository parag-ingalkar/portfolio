import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { BlogTeaser } from "@/components/sections/blog-teaser";
import { Contact } from "@/components/sections/contact";
import { Research } from "@/components/sections/research";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <BlogTeaser />
      <Contact />
    </>
  );
}
