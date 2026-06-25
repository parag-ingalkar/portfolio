import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const entries = [
  {
    institution: "Friedrich-Alexander-Universität Erlangen-Nürnberg",
    degree: "M.Sc. Computational Engineering",
    period: "Oct 2023 – Jun 2026",
    grade: "Overall: 2.1",
    note: "Thesis: Discovering fiber dispersion in myocardial tissue — constitutive neural networks vs. experimental data",
    link: {
      label: "Preprint ↗",
      href: "https://www.biorxiv.org/content/10.64898/2026.05.11.724139v1",
    },
  },
  {
    institution: "Pimpri Chinchwad College of Engineering, Pune",
    degree: "B.E. Mechanical Engineering",
    period: "Jun 2016 – Sep 2020",
    grade: "CGPA: 9.02 / 10",
    note: null,
    link: null,
  },
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container" ref={ref}>

        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.span>

        <motion.h2
          className="display-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "3rem", maxWidth: "20ch" }}
        >
          Academic background
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {entries.map((e, i) => (
            <motion.div
              key={e.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{
                padding: "clamp(1.5rem, 3vw, 2rem)",
                borderRadius: i === 0 ? "8px 8px 0 0" : i === entries.length - 1 ? "0 0 8px 8px" : "0",
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "1rem",
                alignItems: "start",
              }}
            >
              <div>
                <h3 className="heading">{e.institution}</h3>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--accent)", marginTop: "0.25rem", letterSpacing: "0.02em" }}>
                  {e.degree}
                </p>
                {e.note && (
                  <p className="body" style={{ marginTop: "0.75rem", fontSize: "0.875rem", fontStyle: "italic", maxWidth: "56ch" }}>
                    {e.note}
                    {e.link && (
                      <>
                        {" "}
                        <a
                          href={e.link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            color: "var(--accent)",
                            textDecoration: "none",
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.6875rem",
                            borderBottom: "1px solid var(--accent-border)",
                            paddingBottom: "1px",
                            letterSpacing: "0.04em",
                          }}
                        >
                          {e.link.label}
                        </a>
                      </>
                    )}
                  </p>
                )}
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <span className="caption">{e.period}</span>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>{e.grade}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: "1.5rem",
            padding: "1.25rem 1.5rem",
            border: "1px solid var(--accent-border)",
            borderRadius: "8px",
            background: "var(--accent-dim)",
            display: "flex",
            alignItems: "flex-start",
            gap: "1rem",
          }}
        >
          <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "0.05rem" }}>📄</span>
          <div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.4rem" }}>
              Research paper · under peer review
            </p>
            <p className="body" style={{ fontSize: "0.875rem" }}>
              <em>Discovering fiber dispersion in myocardial tissue: A comparison of constitutive neural network predictions with experimental data</em>
              {" — "}
              <a
                href="https://www.biorxiv.org/content/10.64898/2026.05.11.724139v1"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--accent)", textDecoration: "none", borderBottom: "1px solid var(--accent-border)" }}
              >
                Read preprint ↗
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #education .card[style*="grid-template-columns: 1fr auto"] {
            grid-template-columns: 1fr !important;
          }
          #education .card [style*="text-align: right"] {
            text-align: left !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
