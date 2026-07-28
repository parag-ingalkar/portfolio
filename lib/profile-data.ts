/**
 * Central portfolio data for Parag Ingalkar.
 * Sourced from the profile knowledge base - edit values here to update the site.
 *
 * Design note: the accent system was reduced from six pastel colors to a single
 * committed sage accent. "Featured" projects get more space; prototypes are
 * shown quietly. Copy is distilled to active voice, short.
 *
 * TODO for the user (marked inline):
 *  - Replace placeholder demo URLs with the real deployed URLs.
 *  - Replace the placeholder cover images in /public/projects with real
 *    screenshots of the running apps.
 *  - Replace the placeholder testimonial quote with a real one from a manager.
 *  - Replace the placeholder resume PDF with the real file.
 */

export const PROFILE = {
  name: "Parag Ingalkar",
  role: "Full-Stack Software Engineer",
  // One decisive positioning line, with the strongest proof woven in.
  positioning:
    "I build the backend, the schema, the API, and deploy; then keep it running. My inference engine for a German DRG grouper (hospital billing classification system) automatically flags which extra charges apply per patient case and computes the payout amount, handling 200,000+ cases in roughly 8 minutes.",
  location: "Erlangen, Bavaria, Germany",
  status: "Open to full-time software engineering roles",
  email: "ingalkarparag@gmail.com",
  // The Résumé button links to a print-optimized page at /resume/ where a
  // reviewer can save as PDF. To ship a direct PDF download instead, drop a
  // real file at /public/resume.pdf and set this to "/resume.pdf".
  resumeUrl: "/resume/",
  socials: {
    github: "https://github.com/parag-ingalkar",
    linkedin: "https://www.linkedin.com/in/parag-ingalkar-b08818160/",
  },
};

export const EDUCATION = [
  {
    degree: "M.Sc. Computational Engineering",
    school: "FAU Erlangen-Nürnberg, Germany",
    period: "Oct 2023 - Jun 2026",
    note: "Strong foundation in Data Structures & Algorithms, Advanced Programming Techniques, and Applied Software Engineering, complemented by Deep Learning and Pattern Recognition coursework - directly relevant to backend and AI-driven software engineering roles.",
  },
  {
    degree: "B.Eng. Mechanical Engineering",
    school: "Savitribai Phule Pune University, India",
    period: "Aug 2016 - Nov 2020",
    note: "Mechanical Engineering degree grounded in programming, numerical methods, and computational modeling - later transitioned into software engineering.",
  },
];

export type Experience = {
  company: string;
  role: string;
  location?: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Optional case-study slug. When present, the entry shows a "Read the case study" link. */
  caseStudySlug?: string;
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Calliora GmbH, Munich, Germany",
    role: "Working Student, Full-Stack Developer",
    location: "Munich, Germany",
    period: "Sep 2025 - Mar 2026",
    summary:
      "Owned a rules-based inference engine end to end for a DRG grouper used by German hospitals. Designed the schema, wrote the FastAPI backend, built the React integration, and tested for deployment.",
    highlights: [
      "Parsed official Fallpauschalenkatalog and modeled inclusion/exclusion rules as decision nodes in PostgreSQL, enabling automated rule-based classification.",
      "Built FastAPI backend and React + TypeScript frontend, integrating uploaded-file and ad-hoc case processing pipelines end-to-end.",
      "Implemented Row-Level Security policies for compliance-sensitive hospital data and admin-scoped CRUD for unpriced surcharge payments (unbewertet Zusatzentgelte).",
      "Processed 200,000+ hospital billing cases in approximately 8 minutes through the integrated pipeline.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Alembic",
      "Docker",
      "GitHub Actions",
    ],
    caseStudySlug: "zusatzentgelte-inference-engine",
  },
  {
    company: "Dassault Systèmes, Pune, India",
    role: "QA Engineer & Software Developer",
    period: "Feb 2021 - Sep 2023",
    summary:
      "Built an automation testing framework from scratch and tooling that cut manual workload across releases of internal employee planning software.",
    highlights: [
      "Built automation framework using Python, Selenium, and pytest, cutting testing time by approximately 60%.",
      "Automated SQL connector creation, reducing SLA turnaround by approximately 80% and nearly eliminating manual errors.",
      "Reduced manual workload by roughly 10 hours per week through custom tooling and RPA integration.",
      "Coordinated deployment timelines, smoke testing, and Go/No-Go decisions across release cycles.",
      "Mentored a team of 3 engineers during a management transition, ensuring continuity of delivery standards.",
    ],
    stack: ["Python", "Selenium", "pytest", "SQL", "RPA", "ISTQB Certification"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  status: "Deployed" | "Prototype";
  featured: boolean;
  stack: string[];
  /** Live demo URL - proof the project is real and running. */
  demoUrl?: string;
  repo?: string;
  /** Cover image path under /public. */
  cover?: string;
  highlights: string[];
  /** Optional case-study slug. */
  caseStudySlug?: string;
};

export const PROJECTS: Project[] = [
  {
    name: "Abhipraay",
    tagline: "Audio feedback for small businesses",
    description:
      "Customers scan a QR code, record audio, and submit. Sarvam AI transcribes and summarizes. No login, no long text form. Deployed on Google Cloud Run with real users.",
    status: "Deployed",
    featured: true,
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Sarvam AI",
      "S3",
      "Cloud Run",
    ],
    // TODO: replace with the real deployed URL.
    demoUrl: "https://abhipraay-service-398084727840.asia-south1.run.app",
    repo: "https://github.com/parag-ingalkar/abhipraay",
    cover: "/projects/abhipraay.png",
    highlights: [
      "Deployed and used by real businesses.",
      "AI transcription and summarization in the loop.",
      "S3-compatible file handling and Cloud Run deploy.",
    ],
    caseStudySlug: "abhipraay",
  },
  {
    name: "Pomokan",
    tagline: "Todos, kanban, Eisenhower, Pomodoro in one",
    description:
      "A productivity app that links a todo manager with a kanban board, an Eisenhower matrix, and Pomodoro timers. Built with an AI-agent-assisted workflow. Deployed with real users.",
    status: "Deployed",
    featured: true,
    stack: [
      "TypeScript",
      "Next.js",
      "React",
      "PostgreSQL",
      "Better-auth",
      "Vercel",
    ],
    // TODO: replace with the real deployed URL.
    demoUrl: "https://pomokan-v2.vercel.app/",
    repo: "https://github.com/parag-ingalkar/pomokan_v2",
    cover: "/projects/pomokan.png",
    highlights: [
      "Deployed and used by real users.",
      "Built end to end with an AI-agent-assisted workflow.",
      "Linked kanban, Eisenhower matrix, and Pomodoro timers.",
    ],
    caseStudySlug: "pomokan",
  },
  {
    name: "VaultLog",
    tagline: "Secrets management with audit logs",
    description:
      "Security-first secrets sharing with JWT auth, CSRF, RBAC, and least-privilege access. Prototype exploring compliance-grade design.",
    status: "Prototype",
    featured: false,
    stack: ["FastAPI", "React"],
    repo: "https://github.com/paragingalkar/vaultlog",
    highlights: [
      "JWT auth, CSRF protection, RBAC.",
      "Audit logs for every shared secret.",
    ],
  },
  {
    name: "Easy Payroll",
    tagline: "One-click attendance and payroll",
    description:
      "A payroll and attendance tool for small businesses still running on spreadsheets. Simplifies the workflow to a single action. Prototype.",
    status: "Prototype",
    featured: false,
    stack: ["FastAPI", "React", "PostgreSQL"],
    repo: "https://github.com/paragingalkar/easy-payroll",
    highlights: [
      "Strong business logic and product thinking.",
      "Workflow simplification for non-technical owners.",
    ],
  },
];
/**
 * Case studies are now markdown-driven - see content/case-studies/*.md and
 * src/lib/case-studies.ts. To add or edit one, edit a .md file; no TypeScript
 * changes needed. The `caseStudySlug` fields on PROJECTS / EXPERIENCES above
 * just link a card to a case-study slug.
 */


export type ResearchItem = {
  title: string;
  authors?: string;
  venue: string;
  year: string;
  summary: string;
  /** Link to the PDF / pre-print. */
  href: string;
  /** Label for the link, e.g. "Thesis PDF", "Pre-print". */
  linkLabel: string;
};

export const RESEARCH: ResearchItem[] = [
  {
    title:
      "Discovering fiber dispersion in myocardial tissue: A comparison of constitutive neural network predictions with experimental data",
    authors: "Parag Ingalkar",
    venue: "M.Sc. Thesis, FAU Erlangen-Nürnberg",
    year: "2026",
    summary:
      "Extended a physics-constrained neural network architecture with a custom rotated basis to model fiber dispersion in cardiac tissue, engineering a full parameter-inference pipeline (data preprocessing, model training, validation against histology ground truth) - demonstrating applied skills in scientific computing, numerical optimization, and building end-to-end ML pipelines transferable to production software systems.",
    href: "/thesis.pdf",
    linkLabel: "Thesis PDF",
  },
  {
    // TODO: replace with the real pre-print title, authors, and link (arXiv /
    // bioRxiv / OSF) once posted. Summary below is a placeholder.
    title:
      "Data-driven identification of fiber dispersion in myocardial tissue with constitutive neural networks",
    venue: "Biorxiv pre-print",
    year: "2026",
    summary:
      "A pre-print extending the thesis work: evaluating whether dispersion-aware constitutive neural networks can recover physically meaningful microstructural parameters from mechanical test data across loading scenarios.",
    href: "https://www.biorxiv.org/content/10.64898/2026.05.11.724139v1",
    linkLabel: "Pre-print",
  },
];

/**
 * Testimonial - PLACEHOLDER.
 * TODO: Replace this with a real, attributed quote from a manager or colleague
 * at Calliora. A real quote from a named person is far more credible than any
 * self-reported bullet. Remove this comment once replaced.
 */
export const TESTIMONIAL = {
  quote:
    "Parag picked up the Fallpauschalenkatalog faster than anyone I expected and owned the inference engine from schema to deploy. He shipped it with tests and a backfill, and it ran 200,000 cases in minutes.",
  author: "Engineering Manager",
  context: "Calliora GmbH",
};

export type SkillGroup = {
  title: string;
  depth: "primary" | "supporting";
  skills: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Backend",
    depth: "primary",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "REST",
      "Alembic",
      "Celery",
      "Redis"
    ],
  },
  {
    title: "Frontend",
    depth: "supporting",
    skills: ["React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "DevOps & Infra",
    depth: "supporting",
    skills: [
      "Docker",
      "GitHub Actions",
      "GitLab CI/CD",
      "Cloud Run",
      "VPS",
      "Linux",
      "Cloudflare R2",
      "S3",
    ],
  },
  {
    title: "QA & Reliability",
    depth: "supporting",
    skills: [
      "ISTQB Certified",
      "pytest",
      "Selenium",
      "Unit testing",
      "Integration testing",
      "Incident tracking",
    ],
  },
  {
    title: "Security & Compliance",
    depth: "supporting",
    skills: [
      "JWT Auth",
      "2FA",
      "CSRF",
      "RBAC",
      "RLS policies",
    ],
  },
];
