import { cn } from "@/lib/utils";

/**
 * SectionHeading - heading-led, no uppercase eyebrow chip.
 * Per the craft floor: "A tracked uppercase eyebrow over every section" is slop.
 * A heading alone, with more space above than below, carries the hierarchy.
 */
export function SectionHeading({
  title,
  description,
  align = "left",
  className,
}: {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <h2 className="text-pretty text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="measure max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}
