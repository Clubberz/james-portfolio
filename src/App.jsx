import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Wrench, Cpu } from "lucide-react";

// Official blocks you pulled via jsrepo
import Dock from "./components/Dock/Dock.jsx";
import TextType from "./TextAnimations/TextType/TextType.jsx";

// Data
import { PROJECTS } from "./data/projects.js";

/* ---------------- Error boundary so background can't nuke the app ---------------- */
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err, info) {
    console.error("Background error:", err, info);
  }
  render() {
    if (this.state.hasError) {
      return null; // silent fail = background off, site still renders
    }
    return this.props.children;
  }
}

/* ---------------- Lazy-load Dither; tolerate any export name ---------------- */
const LazyDither = React.lazy(async () => {
  const mod = await import("./Backgrounds/Dither/Dither.jsx");
  return {
    default:
      mod.default ||
      mod.Dither ||
      mod.DitherBackground ||
      // Fallback no-op background if export shape changes
      (({ className }) => <div className={className} />),
  };
});

/* ---------------- Dock items (official Dock expects an array to .map()) ---------------- */
const dockItems = [
  {
    icon: <Wrench size={18} />,
    label: "Projects",
    onClick: () =>
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Cpu size={18} />,
    label: "Skills",
    onClick: () =>
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Mail size={18} />,
    label: "Contact",
    onClick: () =>
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    onClick: () => window.open("https://github.com/Clubberz", "_blank", "noopener"),
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    onClick: () =>
      window.open("https://www.linkedin.com/in/YOUR-LINKEDIN", "_blank", "noopener"),
  },
];

/* ---------------- Skills ---------------- */
const SKILLS = [
  { name: "FEA", meta: "ANSYS • Linear/Modal" },
  { name: "CAD", meta: "SolidWorks • DFM" },
  { name: "Python", meta: "NumPy • Scripts" },
  { name: "MATLAB", meta: "Analysis • Plots" },
  { name: "Prototyping", meta: "3D print • Composites" },
  { name: "Docs", meta: "BOM • Drawings" },
];

export default function App() {
  return (
    <div className="min-h-screen relative">
      {/* FULL-PAGE DITHER BACKGROUND LAYER */}
      <ErrorBoundary>
        <Suspense fallback={null}>
          <div className="fixed inset-0 -z-10">
            <LazyDither className="h-full w-full [--pattern-opacity:0.14] [--bg:theme(colors.black)] [--color:theme(colors.emerald.300)]" />
          </div>
        </Suspense>
      </ErrorBoundary>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="border-b border-white/10 sticky top-0 z-40 bg-black/50 backdrop-blur">
          <div className="container h-[64px] flex items-center justify-between">
            <a
              href="/"
              className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition"
            >
              JAMES CLUBLEY
            </a>
            {/* Pass both `items` and `links` to cover different Dock block APIs */}
            <Dock
              className="bg-white/5 border-white/10 px-2 py-1 rounded-2xl"
              items={dockItems}
              links={dockItems}
            />
          </div>
        </nav>

        {/* HERO — intro text + profile picture (finally visible) */}
        <header id="home" className="border-b border-white/10">
          <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
            {/* Intro */}
            <div>
              <p className="eyebrow">Mechanical Engineering Portfolio</p>
              <h1 className="h1 mt-2">James Clubley</h1>

              <div className="mt-3 text-neutral-300 text-lg">
                <TextType
                  words={[
                    "Structural FEA • CAD • Prototyping",
                    "Mechanics of Materials • Manufacturing",
                    "Motorsport • Aerospace • R&D",
                  ]}
                  loop
                  delay={1200}
                  speed={35}
                />
              </div>

              <p className="text-neutral-300 mt-4 max-w-[560px]">
                Houston-based ME focused on structural analysis, design for manufacturability,
                and rapid prototyping. I design things that go fast, go far, or just refuse to break.
              </p>

              <div className="flex gap-3 mt-8">
                <a className="btn primary" href="mailto:you@example.com">
                  <Mail size={16} className="mr-2" />
                  Contact me
                </a>
                <a className="btn" href="/James_Clubley_Resume.pdf" target="_blank" rel="noreferrer">
                  Résumé
                </a>
              </div>
            </div>

            {/* Profile photo */}
            <div className="justify-self-end w-full max-w-[520px]">
              <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl lift">
                <img
                  src="/img/portrait.jpg"   /* you also have /img/hero.jpg if you prefer */
                  alt="James Clubley portrait"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* subtle gradient at bottom for contrast */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </header>

        {/* SKILLS */}
        <section id="skills" className="container section">
          <div className="hr mb-8"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
            {SKILLS.map((s) => (
              <div key={s.name} className="pr-4">
                <div className="text-xl font-semibold tracking-[-0.01em]">{s.name}</div>
                <div className="text-sm text-neutral-400 mt-1">{s.meta}</div>
              </div>
            ))}
          </div>
          <div className="hr mt-8"></div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="container section">
          <div className="flex flex-col items-center md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="h2 text-center md:text-left">Projects</h2>
            <a className="btn mx-auto md:mx-0" href="mailto:you@example.com">
              Contact me
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {PROJECTS.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${encodeURIComponent(p.slug)}`}
                className="card block"
              >
                <div className="card-media ratio-16x9">
                  <img src={p.hero} alt={p.title} className="img-cover" />
                  <div className="img-overlay" />
                </div>
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <div className="card-meta">{p.stack}</div>
                  <div className="card-actions">
                    <span className="link">View project</span>
                    {p.links?.code && (
                      <button
                        className="link"
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          window.open(p.links.code, "_blank", "noopener");
                        }}
                      >
                        View code
                      </button>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CONTACT FOOTER */}
        <footer id="contact" className="border-t border-white/10">
          <div className="container section">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="eyebrow">Contact</p>
                <h2 className="h2 mt-2">Let’s build something ambitious.</h2>
                <p className="text-neutral-300 mt-3">
                  Email for roles, collaborations, or questions. I’ll reply quickly.
                </p>
                <div className="flex gap-3 mt-6">
                  <a className="btn primary" href="mailto:you@example.com">
                    <Mail size={18} className="mr-2" /> Email
                  </a>
                  <a className="btn" href="https://github.com/Clubberz" target="_blank" rel="noreferrer">
                    <Github size={18} className="mr-2" /> GitHub
                  </a>
                  <a
                    className="btn"
                    href="https://www.linkedin.com/in/YOUR-LINKEDIN"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={18} className="mr-2" /> LinkedIn
                  </a>
                </div>
              </div>
              <div className="panel p-6">
                <h3 className="text-lg font-semibold">Availability</h3>
                <ul className="text-neutral-300 mt-3 space-y-1">
                  <li>• Internships / part-time</li>
                  <li>• Contract FEA & CAD work</li>
                  <li>• Rapid prototypes & documentation</li>
                </ul>
              </div>
            </div>
            <div className="hr my-8" />
            <div className="text-xs text-neutral-500 flex items-center justify-between">
              <span>© {new Date().getFullYear()} James Clubley</span>
              <a className="hover:text-neutral-300 transition" href="#top">
                Back to top
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
