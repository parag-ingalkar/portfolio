import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Skills from "./Skills";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container" ref={ref}>

        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.span>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "clamp(2rem, 6vw, 5rem)",
          alignItems: "start",
        }}>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ maxWidth: "380px" }}
          >
            <div className="profile-img-wrap">
              <img src="./profile/me2.jpg" alt="Parag Ingalkar" />
            </div>
            {/* Caption */}
            <p style={{ marginTop: "0.75rem", fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", letterSpacing: "0.06em" }}>
              Erlangen, Germany · EU work rights
            </p>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <h2 className="display-lg">
              Building systems<br />
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>that hold up.</em>
            </h2>

            <p className="body-lg" style={{ marginTop: "0.5rem" }}>
              I'm a full-stack engineer who enjoys the whole stack — from data modelling
              and API design to the React interface that ties it together. I'm quick to
              own ambiguous problems and comfortable shipping features in small, agile teams.
            </p>

            <p className="body">
              Outside engineering, my Master's thesis explored{" "}
              <span style={{ color: "var(--text-primary)" }}>constitutive neural networks</span>{" "}
              for discovering fiber dispersion in cardiac tissue — a project that sharpened
              my instinct for rigorous evaluation and scientific writing. A research paper
              based on the thesis is currently under peer review.
            </p>

            <p className="body">
              When I'm not coding I'm usually playing puzzle or obstacle games, following
              space news, or going down rabbit holes on new tools.
            </p>

            {/* Links */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "0.5rem" }}>
              {[
                { label: "GitHub", href: "https://github.com/parag-ingalkar" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/parag-ingalkar-b08818160/" },
                { label: "Research paper ↗", href: "https://www.biorxiv.org/content/10.64898/2026.05.11.724139v1" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.75rem",
                    color: "var(--accent)",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--accent-border)",
                    paddingBottom: "1px",
                    transition: "border-color 0.2s, opacity 0.2s",
                    letterSpacing: "0.04em",
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = "0.7"}
                  onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginTop: "clamp(3rem, 6vw, 5rem)" }}
        >
          <Skills />
        </motion.div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
