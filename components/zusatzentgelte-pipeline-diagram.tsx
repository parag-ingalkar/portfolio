/**
 * ZusatzentgeltPipelineDiagram - schematic of the DRG surcharge inference pipeline.
 * Responsive HTML/CSS (not a fixed SVG): horizontal on desktop, vertical on
 * mobile. Accessible via a visually-hidden description.
 *
 * Flow: Case input → FastAPI inference engine → PostgreSQL (rules + results)
 *       → React dashboard, with RLS guarding data access at every step.
 */
const NODES = [
  { title: "Case input", sub: "File Upload / Simulation" },
  { title: "Catalog rules", sub: "Parsed once in PostgreSQL" },
  { title: "FastAPI", sub: "Inference engine" },
  { title: "PostgreSQL", sub: "Inference results" },
  { title: "React", sub: "Dashboard" },
];

export function ZusatzentgeltPipelineDiagram() {
  return (
    <figure className="mt-6">
      <p className="sr-only">
        Hospital case data - either uploaded or simulated - is sent to the
        FastAPI inference engine, which matches it against Fallpauschalenkatalog
        rules stored in PostgreSQL to determine applicable surcharge payments.
        Results are written back to PostgreSQL and rendered in the React
        dashboard. Row-level security guards hospital data access at every step.
      </p>

      {/* Horizontal flow on desktop */}
      <ol className="hidden items-stretch gap-2 sm:flex justify-center">
        {NODES.map((node, i) => (
          <li key={node.title} className="flex items-center gap-2">
            <div className="flex min-w-0 flex-1 flex-col justify-center rounded-lg border border-border bg-card/60 px-3 py-3 text-center">
              <span className="text-sm font-semibold text-foreground">
                {node.title}
              </span>
              <span className="mt-0.5 text-xs text-muted-foreground">
                {node.sub}
              </span>
            </div>
            {i < NODES.length - 1 && (
              <span aria-hidden className="shrink-0 text-muted-foreground">
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Vertical flow on mobile */}
      <ol className="flex flex-col gap-2 sm:hidden">
        {NODES.map((node, i) => (
          <li key={node.title} className="flex flex-col items-center gap-2">
            <div className="w-full rounded-lg border border-border bg-card/60 px-3 py-3 text-center">
              <span className="text-sm font-semibold text-foreground">
                {node.title}
              </span>
              <span className="mt-0.5 block text-xs text-muted-foreground">
                {node.sub}
              </span>
            </div>
            {i < NODES.length - 1 && (
              <span aria-hidden className="text-muted-foreground">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <figcaption className="mt-3 text-xs text-muted-foreground text-center">
        Schematic of the inference pipeline.
      </figcaption>
    </figure>
  );
}
