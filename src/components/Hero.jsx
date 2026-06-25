import { motion } from "framer-motion";
import { Link } from "react-scroll";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
});

const Hero = () => (
  <section
    id="hero"
    style={{
      minHeight: "100svh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingBlock: "8rem 5rem",
      borderBottom: "1px solid var(--border)",
    }}
  >
    <div className="container">

      {/* Available badge */}
      <motion.div {...fadeUp(0.1)} style={{ marginBottom: "2.5rem" }}>
        <span className="badge-available">
          <span className="dot" aria-hidden="true" />
          Available for work · EU &amp; India
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1 {...fadeUp(0.2)} className="display-xl" style={{ maxWidth: "18ch" }}>
        Engineer who ships
        <em style={{
          fontStyle: "italic",
          fontWeight: 300,
          color: "var(--accent)",
          display: "block",
        }}>
          end-to-end.
        </em>
      </motion.h1>

      {/* Sub-headline */}
      <motion.p
        {...fadeUp(0.35)}
        className="body-lg"
        style={{ maxWidth: "54ch", marginTop: "1.75rem", lineHeight: 1.65 }}
      >
        Full-stack engineer with 3+ years building production billing systems,
        internal tooling, and automation — using Python, FastAPI, React/TypeScript,
        and PostgreSQL. Based in Erlangen, Germany.
      </motion.p>

      {/* Key proof points */}
      <motion.ul
        {...fadeUp(0.45)}
        style={{
          marginTop: "2rem",
          paddingLeft: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          listStyle: "none",
          padding: 0,
        }}
      >
        {[
          "Billing engine used across 15+ German hospitals · validated on 200k+ cases",
          "QA automation at Dassault Systèmes · 3DEXPERIENCE platform",
          "M.Sc. Computational Engineering, FAU Erlangen-Nürnberg · 2.1",
        ].map((line) => (
          <li
            key={line}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "0.625rem",
              fontSize: "0.875rem",
              color: "var(--text-muted)",
              lineHeight: 1.55,
            }}
          >
            <span style={{ color: "var(--accent)", marginTop: "0.1em", flexShrink: 0 }}>—</span>
            {line}
          </li>
        ))}
      </motion.ul>

      {/* CTAs */}
      <motion.div
        {...fadeUp(0.55)}
        style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", marginTop: "2.5rem" }}
      >
        <Link to="projects" smooth duration={500} offset={-80}>
          <button className="btn-primary" style={{ cursor: "pointer" }}>
            View projects
          </button>
        </Link>
        <a href="/cv.pdf" download className="btn-outline">
          Download CV
        </a>
        <a
          href="mailto:ingalkarparag@gmail.com"
          className="btn-outline"
          style={{ color: "var(--text-muted)", borderColor: "var(--border)" }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-muted)"; }}
        >
          ingalkarparag@gmail.com
        </a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{ marginTop: "4rem" }}
      >
        <Link to="about" smooth duration={500} offset={-80} style={{ cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" strokeLinecap="round">
            <line x1="7" y1="2" x2="7" y2="12" />
            <polyline points="3,8 7,12 11,8" />
          </svg>
        </Link>
      </motion.div>

    </div>
  </section>
);

export default Hero;
