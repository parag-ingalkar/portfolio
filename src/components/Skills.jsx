const skillCategories = [
  {
    title: "Frontend",
    skills: [
      ["react.svg", "React"],
      ["TypeScript.svg", "TypeScript"],
      ["javascript.svg", "JavaScript"],
      ["tailwind.svg", "Tailwind"],
      ["html.svg", "HTML"],
      ["css.svg", "CSS"],
    ],
  },
  {
    title: "Backend",
    skills: [
      ["python.svg", "Python"],
      ["FastAPI.svg", "FastAPI"],
      ["flask-white.svg", "Flask"],
      ["nodejs.svg", "Node.js"],
      ["Express.svg", "Express"],
    ],
  },
  {
    title: "Data & AI",
    skills: [
      ["PostgresSQL.svg", "PostgreSQL"],
      ["SQLite.svg", "SQLite"],
      ["sql.svg", "SQL"],
      ["pytorch.svg", "PyTorch"],
      ["tensorflow.svg", "TensorFlow"],
      ["Matplotlib.svg", "Matplotlib"],
    ],
  },
  {
    title: "Tooling",
    skills: [
      ["docker.svg", "Docker"],
      ["git.svg", "Git"],
      ["github-white.svg", "GitHub"],
      ["Postman.svg", "Postman"],
      ["cpp.svg", "C++"],
      ["uipath.svg", "UiPath"],
    ],
  },
];

const Skills = () => (
  <div>
    <span className="section-label" style={{ marginBottom: "1.5rem" }}>Skills &amp; Technologies</span>

    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "1px",
      background: "var(--border)",
      border: "1px solid var(--border)",
      borderRadius: "8px",
      overflow: "hidden",
    }}>
      {skillCategories.map((cat) => (
        <div
          key={cat.title}
          style={{
            background: "var(--bg-surface)",
            padding: "1.5rem",
          }}
        >
          <p style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.625rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "1.25rem",
          }}>
            {cat.title}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.25rem" }}>
            {cat.skills.map(([icon, name]) => (
              <div key={name} className="skill-cell">
                <img src={`./icons/${icon}`} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    <style>{`
      @media (max-width: 900px) {
        div[style*="repeat(4, 1fr)"] {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      }
      @media (max-width: 500px) {
        div[style*="repeat(4, 1fr)"] {
          grid-template-columns: 1fr !important;
        }
      }
    `}</style>
  </div>
);

export default Skills;
