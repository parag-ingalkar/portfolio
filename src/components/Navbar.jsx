import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { to: "about",         label: "About" },
  { to: "work",          label: "Work" },
  { to: "projects",      label: "Projects" },
  { to: "education",     label: "Education" },
  { to: "contact",       label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.35s, border-color 0.35s, backdrop-filter 0.35s",
      }}
    >
      <div className="container" style={{ paddingBlock: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Wordmark */}
        <Link to="hero" smooth duration={500} style={{ cursor: "pointer", textDecoration: "none" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "1.1rem", color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
            Parag Ingalkar
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main navigation" style={{ display: "flex", gap: "2rem" }} className="hidden-mobile">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} smooth duration={500} offset={-80} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CV button — desktop */}
        <a
          href="/cv.pdf"
          download
          className="btn-outline hidden-mobile"
          style={{ padding: "0.45rem 1rem", fontSize: "0.8125rem" }}
          aria-label="Download CV"
        >
          CV ↓
        </a>

        {/* Hamburger — mobile */}
        <button
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            padding: "0.25rem",
          }}
          className="show-mobile"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="19" y2="6" />
                <line x1="3" y1="11" x2="19" y2="11" />
                <line x1="3" y1="16" x2="19" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              borderTop: "1px solid var(--border)",
              background: "var(--bg)",
              overflow: "hidden",
            }}
          >
            <div className="container" style={{ paddingBlock: "1.25rem", display: "flex", flexDirection: "column", gap: "0.25rem" }}>
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.6rem 0",
                    color: "var(--text-secondary)",
                    fontSize: "1rem",
                    textDecoration: "none",
                    borderBottom: "1px solid var(--border)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--text-primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-secondary)"}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="/cv.pdf"
                download
                className="btn-outline"
                style={{ marginTop: "1rem", justifyContent: "center", fontSize: "0.875rem" }}
              >
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile   { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; align-items: center; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
