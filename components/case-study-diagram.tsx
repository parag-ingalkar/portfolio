import { ZusatzentgeltPipelineDiagram } from "@/components/zusatzentgelte-pipeline-diagram";

/**
 * Diagram registry - maps a frontmatter `diagram` key to a component.
 *
 * To make a new diagram available inside case studies:
 *   1. Create the diagram component (e.g. src/components/foo-diagram.tsx).
 *   2. Add it to this registry with a short key.
 *   3. In a case study's frontmatter, set `diagram: <key>`.
 *
 * To add a diagram to a NEW case study with a brand-new diagram, you author
 * the small diagram component once and register it here. To reuse an existing
 * diagram, just reference its key - no component work needed.
 */
const REGISTRY: Record<string, () => React.ReactElement> = {
  "zusatzentgelte-pipeline": ZusatzentgeltPipelineDiagram,
};

export function CaseStudyDiagram({ name }: { name: string }) {
  const Comp = REGISTRY[name];
  if (!Comp) return null;
  return <Comp />;
}
