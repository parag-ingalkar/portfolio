import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "PomoKan",
    subtitle: "Productivity Tool",
    description:
      "Manage tasks with the Pomodoro technique, an integrated Kanban board, and an Eisenhower priority matrix. Built as a full-stack application with a FastAPI backend and React/TypeScript frontend.",
    image: "./projects/pomokan.jpg",
    stack: ["Python", "TypeScript", "FastAPI", "React", "TailwindCSS", "JWT"],
    github: "https://github.com/parag-ingalkar/PomoKan",
    live: "https://pomokan-five.vercel.app/",
    featured: true,
  },
  {
    title: "Spotify Playlist Manager",
    subtitle: "OAuth2 Web App",
    description:
      "Manage collaborative Spotify playlists — remove songs added by specific collaborators. Uses Spotify's OAuth2 API with a Flask backend and React frontend.",
    image: "./projects/spotify-flask.jpg",
    stack: ["Python", "JavaScript", "Flask", "React", "TailwindCSS", "OAuth2"],
    github: "https://github.com/parag-ingalkar/spotify-playlist-manager-app",
    live: "https://spotify-playlist-manager-app.vercel.app/",
    featured: true,
  },
  {
    title: "EasyPayroll",
    subtitle: "Payroll Management for Micro-SMEs",
    description:
      "Full-stack payroll application for Indian micro-businesses (< 10 employees). Handles employee management, salary structure configuration, and automated monthly payroll with variable elements like paid leave, overtime, and festival bonuses. Addresses a real gap identified on Razorpay's Fix My Itch.",
    image: "./projects/pomokan.jpg",
    stack: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "Docker", "Clerk", "GitHub Actions"],
    github: "https://github.com/parag-ingalkar/payroll-app",
    live: null,
    featured: true,
  },
  {
    title: "Missing Migrants Visualization",
    subtitle: "Data Visualization",
    description:
      "Interactive world map visualizing missing migrant data over multiple years. Built with D3.js and React for rich data interaction.",
    image: "./projects/missing-migrants.jpg",
    stack: ["JavaScript", "React", "D3.js"],
    github: "https://github.com/parag-ingalkar/missing-migrants-visualization",
    live: "https://parag-ingalkar.github.io/missing-migrants-visualization/",
  },
  {
    title: "MNIST Neural Network",
    subtitle: "Deep Learning from Scratch",
    description:
      "Neural network package built in Python and NumPy from scratch — no ML frameworks — to classify MNIST handwritten digits.",
    image: "./projects/mnist-nn-python.png",
    stack: ["Python", "NumPy", "Deep Learning"],
    github: "https://github.com/parag-ingalkar/python_NN_MNIST_from_scratch",
  },
  {
    title: "Neural Network in C++",
    subtitle: "Logic Gates",
    description:
      "Custom neural network built from scratch in C++ with a custom tensor implementation. Trains, saves, and loads models for XOR and XNOR gates via a CLI.",
    image: "./projects/nn-cpp.jpg",
    stack: ["C++", "Deep Learning", "Custom Tensor"],
    github: "https://github.com/parag-ingalkar/nn_logic_gates",
  },
];

const ProjectCard = ({ project, index, inView }) => (
  <motion.div
    initial={{ opacity: 0, y: 28 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    className="card"
    style={{
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      position: "relative",
    }}
  >
    {/* Featured label */}
    {project.featured && (
      <span
        className="caption"
        style={{
          position: "absolute",
          top: "0.75rem",
          left: "0.75rem",
          background: "var(--accent-dim)",
          border: "1px solid var(--accent-border)",
          color: "var(--accent)",
          padding: "0.2rem 0.5rem",
          borderRadius: "3px",
          zIndex: 1,
        }}
      >
        Featured
      </span>
    )}

    {/* Image */}
    <div style={{ overflow: "hidden", borderRadius: "7px 7px 0 0" }}>
      <img
        src={project.image}
        alt={project.title}
        className="project-img"
      />
    </div>

    {/* Content */}
    <div style={{ padding: "1.25rem 1.375rem 1.375rem", display: "flex", flexDirection: "column", gap: "0.625rem", flex: 1 }}>
      <div>
        <h3 className="heading" style={{ fontSize: "1rem" }}>{project.title}</h3>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6875rem", color: "var(--accent)", marginTop: "0.15rem", letterSpacing: "0.04em" }}>
          {project.subtitle}
        </p>
      </div>

      <p className="body" style={{ fontSize: "0.875rem", flex: 1 }}>{project.description}</p>

      {/* Stack */}
      <div style={{ display: "flex", gap: "0.3rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
        {project.stack.map((t) => <span key={t} className="tag">{t}</span>)}
      </div>

      {/* Action links */}
      <div style={{ display: "flex", gap: "0.625rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          style={{ padding: "0.45rem 0.875rem", fontSize: "0.8rem", gap: "0.375rem" }}
          aria-label={`View ${project.title} source on GitHub`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          Source
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "0.45rem 0.875rem", fontSize: "0.8rem" }}
            aria-label={`View ${project.title} live demo`}
          >
            Live ↗
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="section" style={{ borderBottom: "1px solid var(--border)" }}>
      <div className="container" ref={ref}>

        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.span>

        <motion.h2
          className="display-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: "0.75rem", maxWidth: "22ch" }}
        >
          Things I've shipped
        </motion.h2>
        <motion.p
          className="body"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ marginBottom: "2.5rem", maxWidth: "55ch" }}
        >
          A mix of full-stack applications, data tools, and low-level ML work.
        </motion.p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          overflow: "hidden",
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          #projects div[style*="repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #projects div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
