import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, FileDown } from "lucide-react";

// ===== PLACEHOLDERS (edit anytime) =====
const NAME = "James Clubley";
const TAGLINE = "Mechanical Engineering @ Rice — FEA · CAD · Prototyping";
const LOCATION = "Houston, TX";
const SUMMARY =
  "Simulation-driven mechanical engineer specializing in structural FEA, CAD design, and rapid prototyping. Skilled in ANSYS, SolidWorks, MATLAB, and Python. Interests in aerospace, motorsport, and marine engineering.";

const PROJECTS = [
  {
    src: "/img/project1.png",
    title: "Eigenvalue Buckling Analysis",
    desc: "Calculated critical load factors and mode shapes for a structural frame under axial compression.",
    tags: ["FEA", "ANSYS", "Buckling"],
  },
  {
    src: "/img/project2.png",
    title: "Bracket von Mises Stress",
    desc: "Static structural analysis to identify peak stresses and validate safety factors.",
    tags: ["FEA", "Stress Analysis"],
  },
  {
    src: "/img/project3.png",
    title: "Lightweight Truss Optimization",
    desc: "Beam-based topology optimization for weight reduction while maintaining stiffness.",
    tags: ["Optimization", "Structural"],
  },
  {
    src: "/img/project4.png",
    title: "Clevis Link Fatigue Study",
    desc: "Evaluated fatigue life under cyclic loading conditions with alternating stress ranges.",
    tags: ["Fatigue", "FEA"],
  },
  {
    src: "/img/project5.png",
    title: "BMW K100 Systems Refresh",
    desc: "Mechanical overhaul including hydraulic brakes, suspension, and drivetrain inspection.",
    tags: ["Mechanics", "Hydraulics"],
  },
];

const SKILLS = [
  ["ANSYS Workbench", "Modal/Buckling Analysis", "Mesh Convergence"],
  ["SolidWorks", "DFM/DFA", "3D Printing & Composites"],
  ["Python", "MATLAB", "Git", "LaTeX"],
];

const EXPERIENCE = [
  {
    org: "Mamaka Bowls",
    role: "Barista / Shift Lead",
    dates: "2024–2025",
    bullets: [
      "Reduced shutdown time by ~15% with a re-engineered closing process",
      "Trained two hires; maintained throughput under rush conditions",
    ],
  },
  {
    org: "Rice University",
    role: "Mechanical Engineering — Junior",
    dates: "2023–Present",
    bullets: [
      "Mechanics of Materials, Thermo/Fluids, CAD/CAE (ANSYS)",
      "Rocketry Club, EV Club",
    ],
  },
];

const LINKS = [
  { label: "GitHub", href: "https://github.com/Clubberz", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR-LINKEDIN", icon: Linkedin },
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
];

const RESUME_URL = "/resume.pdf";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative overflow-x-hidden">
      {/* Background (blueprint grid + angled planes) */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.12)_1px,transparent_1px)] bg-[length:44px_44px] opacity-50" />
        <div className="angle-bg angle-1" />
        <div className="angle-bg angle-2" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-cyan-400/40 backdrop-blur bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold tracking-tight">{NAME}</div>
          <nav className="flex gap-4 text-sm">
            {["Projects", "Skills", "Experience", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-cyan-400 transition">
                {s}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-medium transition"
            >
              <FileDown className="w-4 h-4 inline mr-1" /> Resume
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-10">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/60 backdrop-blur p-8 md:p-12 shadow-xl glow-border">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Engineering with precision.
          </motion.h1>
          <div className="mt-3 text-lg md:text-xl text-cyan-400">{TAGLINE}</div>
          <div className="mt-2 flex items-center gap-2 text-slate-400">
            <MapPin className="w-4 h-4" /> {LOCATION}
          </div>
          <p className="mt-5 max-w-3xl text-slate-200">{SUMMARY}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-600 hover:bg-white/5 transition"
              >
                <Icon className="w-4 h-4" /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              whileHover={{ y: -4 }}
              className="group project-card overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur hover:border-cyan-400/60 transition glow-border"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-100">{p.title}</h3>
                <p className="text-sm text-slate-400 mt-1">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((col, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur p-5 glow-border"
            >
              <div className="flex flex-wrap gap-2">
                {col.map((s) => (
                  <span key={s} className="tag-chip alt">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/60 to-cyan-600/60" />
          <div className="space-y-6">
            {EXPERIENCE.map((e) => (
              <div key={e.org} className="relative ml-2">
                <div className="absolute -left-[11px] mt-1 h-3 w-3 rotate-45 bg-cyan-500 shadow-[0_0_0_3px] shadow-slate-950" />
                <div className="rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur p-5 glow-border">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-100">
                      {e.role} — {e.org}
                    </h3>
                    <span className="text-xs text-slate-400">{e.dates}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                    {e.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-4 pb-14">
        <div className="rounded-2xl border border-cyan-400/40 bg-slate-900/60 backdrop-blur p-8 md:p-10 glow-border">
          <h2 className="text-2xl md:text-3xl font-bold">Let’s work on your next big project.</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            Available for internships, part-time, and contract roles. I move from concept → analysis → validated prototype fast.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="btn-cta" href="mailto:you@example.com">
              <Mail className="w-4 h-4" /> Email
            </a>
            <a className="btn-ghost" href="https://github.com/Clubberz" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a className="btn-ghost" href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-400/20">
        <div className="max-w-6xl mx-auto px-4 py-6 text-sm text-slate-400 flex justify-between">
          <span>© {new Date().getFullYear()} {NAME}</span>
          <span>Built with React + Tailwind</span>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-cyan-400">
        {children}
      </h2>
    </div>
  );
}
