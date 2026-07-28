import { SectionHeading } from "@/components/section-heading";
import { SKILL_GROUPS } from "@/lib/profile-data";

export function Skills() {
  const primary = SKILL_GROUPS.filter((g) => g.depth === "primary");
  const supporting = SKILL_GROUPS.filter((g) => g.depth === "supporting");

  return (
    <section
      id="skills"
      className="scroll-mt-20 border-t border-border px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Skills"
          description="A T-shaped toolkit. Deepest on the backend, data, and the pipeline that gets a feature to production safely."
        />

        <div className="mt-12">
          {/* Primary depth - leads, with room to breathe */}
          {primary.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 sm:grid-cols-12 sm:gap-8"
            >
              <h3 className="text-sm font-medium text-muted-foreground sm:col-span-3">
                {group.title}
              </h3>
              <ul className="flex flex-wrap gap-x-3 gap-y-2 sm:col-span-9">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-base text-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Supporting skills - denser, separated by hairline rules */}
          <div className="mt-12 flex flex-col">
            {supporting.map((group) => (
              <div
                key={group.title}
                className="grid gap-2 border-t border-border py-6 sm:grid-cols-12 sm:gap-8"
              >
                <h3 className="text-sm font-medium text-muted-foreground sm:col-span-3">
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-x-3 gap-y-1.5 sm:col-span-9">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/80">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
