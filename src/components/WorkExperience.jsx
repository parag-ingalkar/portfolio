import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Calliora",
    location: "Germany (Remote)",
    role: "Working Student — Full-Stack Engineer",
    period: "2023 – 2025",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker"],
    summary:
      "Led end-to-end feature development on a SaaS platform for German hospital billing — from requirements research through data modelling, REST API design, and frontend integration.",
    highlights: [
      "Engineered a rules-based inference & billing engine processing the official DRG catalog to infer additional costs per case. Validated across 200k+ historical cases for 15+ client hospitals; inference completes in under 3 minutes before production rollout.",
      "Extended billing logic to support r-DRG and Vorhalte formats alongside ag-DRG, with a frontend toggle allowing real-time comparison of reimbursement views.",
      "Built admin panel REST APIs and UI (full CRUD via FastAPI) enabling hospital staff to self-manage individually agreed reimbursement rates.",
      "Developed automated backfill data pipelines to reprocess historical billing cases, enabling retrospective billing data availability.",
      "Reduced frontend dependency bloat and maintained a clean, production-grade React/TypeScript codebase across agile sprints.",
    ],
  },
  {
    company: "Dassault Systèmes Solutions Lab",
    location: "Pune, India",
    role: "Quality Assurance Engineer & Software Developer",
    period: "Feb 2021 – Sep 2023",
    stack: ["Python", "JavaScript", "UiPath", "3DEXPERIENCE"],
    summary:
      "Worked on the 3DEXPERIENCE platform, building automated QA frameworks and contributing to software development for enterprise applications.",
    highlights: [
      "Developed automated testing frameworks that improved software quality metrics by 40%.",
      "Led cross-functional team initiatives and contributed to release cycles for enterprise-scale applications.",
    ],
  },
];

const WorkExperience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container" ref={ref}>

        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.span>

        <motion.h2
          className="display-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3rem", maxWidth: "20ch" }}
        >
          Where I've built things
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)", borderRadius: i === 0 ? "8px 8px 0 0" : i === jobs.length - 1 ? "0 0 8px 8px" : "0" }}
            >
              {/* Header row */}
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "0.75rem",
                marginBottom: "0.75rem",
              }}>
                <div>
                  <h3 className="heading">{job.company}</h3>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", marginTop: "0.2rem", letterSpacing: "0.02em" }}>
                    {job.role}
                  </p>
                </div>
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <span className="caption">{job.period}</span>
                  <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", marginTop: "0.15rem" }}>{job.location}</p>
                </div>
              </div>

              {/* Summary */}
              <p className="body" style={{ marginBottom: "1.25rem" }}>{job.summary}</p>

              {/* Highlights */}
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {job.highlights.map((h) => (
                  <li key={h} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: "var(--accent)", flexShrink: 0, marginTop: "0.15em", fontSize: "0.75rem" }}>→</span>
                    <span className="body" style={{ fontSize: "0.875rem" }}>{h}</span>
                  </li>
                ))}
              </ul>

              {/* Stack tags */}
              <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginTop: "1.5rem" }}>
                {job.stack.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
