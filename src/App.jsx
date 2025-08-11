import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Wrench, Cpu } from "lucide-react";

// Official blocks you pulled via jsrepo
import Dock from "./components/Dock/Dock.jsx";
import TextType from "./TextAnimations/TextType/TextType.jsx";

// Lazy-load Dither and normalize export so a mismatch won't blank the site
const Dither = React.lazy(async () => {
  const mod = await import("./Backgrounds/Dither/Dither.jsx");
  return {
    default:
      mod.default ||
      mod.Dither ||
      mod.DitherBackground ||
      (({ className, children }) => <div className={className}>{children}</div>),
  };
});

// Data
import { PROJECTS } from "./data/projects.js";

// Toggle this to false if you want to quickly disable the heavy background
const USE_DITHER = true;

const SKILLS = [
  { name: "FEA", meta: "ANSYS • Linear/Modal" },
  { name: "CAD", meta: "SolidWorks • DFM" },
  { name: "Python", meta: "NumPy • Scripts" },
  { name: "MATLAB", meta: "Analysis • Plots" },
  { name: "Prototyping", meta: "3D print • Composites" },
  { name: "Docs", meta: "BOM • Drawings" },
];

// Build items for Dock (ReactBits Dock expects an array and maps over it)
const dockItems = [
  {
    icon: <Wrench size={18} />,
    label: "Projects",
    href: "#projects",
    onClick: () =>
      document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Cpu size={18} />,
    label: "Skills",
    href: "#skills",
    onClick: () =>
      document.querySelector("#skills")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Mail size={18} />,
    label: "Contact",
    href: "#contact",
    onClick: () =>
      document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    href: "https://github.com/Clubberz",
    onClick: () => window.open("https://github.com/Clubberz", "_blank", "noopener"),
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR-LINKEDIN",
    onClick: () =>
      window.open("https://www.linkedin.com/in/YOUR-LINKEDIN", "_blank", "noopener"),
  },
];

// Simple error boundary so Dither can never blank the page
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error("Background error:", err);
  }
  render() {
    if (this.state.hasError) {
      return <div className="container py-6 text-sm text-rose-300">Background failed to load — continuing without it.</div>;
    }
    return this.props.children;
  }
}

export default function App() {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="border-b border-white/10 sticky top-0 z-40 bg-black/50 backdrop-blur">
        <div className="container h-[64px] flex items-center justify-between">
          <a
            href="/"
            className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition"
          >
            JAMES CLUBLEY
          </a>

          {/* Pass data as both `items` and `links` to satisfy different Dock block APIs */}
          <Dock
            className="bg-white/5 border-white/10 px-2 py-1 rounded-2xl"
            items={dockItems}
            links={dockItems}
          />
        </div>
      </nav>

      {/* HERO — guarded Dither */}
      <header className="border-b border-white/10">
        <ErrorBoundary>
          {USE_DITHER ? (
            <Suspense fallback={<div className="container py-12">Loading background…</div>}>
              <Dither className="[--pattern-opacity:0.14] [--bg:theme(colors.black)] [--color:theme(colors.emerald.300)]">
                <HeroContent />
              </Dither>
            </Suspense>
          ) : (
            <div className="[--pattern-opacity:0.14]">
              <HeroContent />
            </div>
          )}
        </ErrorBoundary>
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
            <Link key={p.slug} to={`/projects/${encodeURIComponent(p.slug)}`} className="card block">
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
                    // prevent nested <a> inside <Link>
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
                <a
                  className="btn"
                  href="https://github.com/Clubberz"
                  target="_blank"
                  rel="noreferrer"
                >
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
  );
}

/** ---------- Extracted hero content ---------- */
function HeroContent() {
  return (
    <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
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
          Houston-based ME focused on structural analysis, design for
          manufacturability, and rapid prototyping.
        </p>

        <div className="flex gap-3 mt-8">
          <a className="btn primary" href="mailto:you@example.com">
            <Mail size={16} className="mr-2" />
            Contact me
          </a>
          <a className="btn" href="#projects">
            See projects
          </a>
        </div>
      </div>

      <div className="panel overflow-hidden lift">
        <div className="ratio-16x9">
          <img src="/img/portrait.jpg" alt="Portrait" className="img-cover" />
        </div>
      </div>
    </div>
  );
}
