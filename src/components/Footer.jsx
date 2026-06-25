import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const links = [
  { label: "GitHub", href: "https://github.com/parag-ingalkar" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/parag-ingalkar-b08818160/" },
  { label: "Email", href: "mailto:ingalkarparag@gmail.com" },
  { label: "Research paper", href: "https://www.biorxiv.org/content/10.64898/2026.05.11.724139v1" },
];

const Footer = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <footer
      id="contact"
      ref={ref}
      style={{
        borderTop: "1px solid var(--border)",
        paddingBlock: "clamp(4rem, 8vw, 6rem)",
      }}
    >
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "end",
        }}>

          {/* Left: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label">Get in touch</span>
            <h2
              className="display-lg"
              style={{ marginBottom: "1.25rem", maxWidth: "16ch" }}
            >
              Open to the right opportunity.
            </h2>
            <p className="body" style={{ maxWidth: "40ch", marginBottom: "2rem" }}>
              I'm actively looking for full-stack roles in Germany or India.
              If you're building something interesting, I'd love to hear from you.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
              <a href="mailto:ingalkarparag@gmail.com" className="btn-primary">
                ingalkarparag@gmail.com
              </a>
              <a href="/cv.pdf" download className="btn-outline">
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: links + copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2rem" }}
          >
            <nav aria-label="Social links" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.625rem" }}>
              {links.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? "_self" : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.8125rem",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                    letterSpacing: "0.02em",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div style={{ textAlign: "right" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                © {new Date().getFullYear()} Parag Ingalkar
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--text-muted)" }}>
                Built with React · Deployed via GitHub Pages
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          footer .container > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          footer .container div[style*="align-items: flex-end"] {
            align-items: flex-start !important;
          }
          footer .container div[style*="text-align: right"] {
            text-align: left !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
