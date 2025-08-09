import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const SKILLS = [
  { name: "FEA", meta: "ANSYS • Linear/Modal" },
  { name: "CAD", meta: "SolidWorks • DFM" },
  { name: "Python", meta: "NumPy • Scripts" },
  { name: "MATLAB", meta: "Analysis • Plots" },
  { name: "Prototyping", meta: "3D print • Composites" },
  { name: "Docs", meta: "BOM • Drawings" },
];

const PROJECTS = [
  {
    img: "/img/k100frame.png",
    title: "BMW K100 Build",
    stack: "Solidworks • FEA • Fabrication",
    view: "#",
    code: "https://github.com/Clubberz",
  },
  {
    img: "/img/project1.png",
    title: "Bracket — Stress Validation",
    stack: "FEA • Static",
    view: "#",
    code: "https://github.com/Clubberz",
  },
  {
    img: "/img/project2.png",
    title: "Eigenvalue Buckling Modes",
    stack: "FEA • Buckling",
    view: "#",
    code: "https://github.com/Clubberz",
  },
  {
    img: "/img/project3.png",
    title: "Lightweight Truss Optimization",
    stack: "Structures • Opt",
    view: "#",
    code: "https://github.com/Clubberz",
  },
  {
    img: "/img/project4.png",
    title: "Clevis Link Study",
    stack: "Fatigue • SF",
    view: "#",
    code: "https://github.com/Clubberz",
  },
  {
    img: "/img/project5.png",
    title: "Assembly & Fixtures",
    stack: "CAD • DFM",
    view: "#",
    code: "https://github.com/Clubberz",
  },
];

export default function App() {
  return (
    <div>

      {/* NAV */}
      <nav className="border-b border-white/10 sticky top-0 z-40 bg-black/50 backdrop-blur">
        <div className="container h-[64px] flex items-center justify-between">
          <a
            href="/"
            className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition"
          >
            JAMES CLUBLEY
          </a>
          <div className="flex items-center gap-5">
            <a className="nav-link hidden md:inline" href="#projects">Projects</a>
            <a className="nav-link hidden md:inline" href="#skills">Skills</a>
            <a className="nav-link hidden md:inline" href="#contact">Contact</a>
            <a
              className="nav-link"
              href="https://github.com/Clubberz"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              className="nav-link"
              href="https://www.linkedin.com/in/YOUR-LINKEDIN"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </nav>

      {/* HERO — split like the reference: headline left, portrait right */}
      <header className="border-b border-white/10">
        <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="eyebrow">Mechanical Engineering Portfolio</p>
            <h1 className="h1 mt-2">
              Nice to meet you!
              <br />
              I’m <span className="text-neutral-200">James</span>.
            </h1>
            <p className="text-neutral-300 mt-5 max-w-[560px]">
              Based in Houston, focused on structural FEA, CAD for manufacturability,
              and rapid prototyping. I build clean, documented solutions and ship fast.
            </p>
            <div className="flex gap-3 mt-8">
              <a className="btn primary" href="mailto:you@example.com">
                Contact me
              </a>
              <a className="btn" href="#projects">
                See projects
              </a>
            </div>
          </div>

          {/* Portrait panel */}
          <div className="panel overflow-hidden lift">
            <div className="ratio-21x9 md:ratio-21x9">
              <img src="/img/portrait.jpg" alt="Portrait" className="img-cover" />
            </div>
          </div>
        </div>
      </header>

      {/* SKILLS STRIP — horizontal tiles with hairline divider, like the example */}
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
          <a className="btn mx-auto md:mx-0" href="mailto:you@example.com">Contact me</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {PROJECTS.map((p) => (
            <article key={p.title} className="card">
              <div className="card-media ratio-16x9">
                <img src={p.img} alt={p.title} className="img-cover" />
                <div className="img-overlay" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.title}</h3>
                <div className="card-meta">{p.stack}</div>
                <div className="card-actions">
                  <a className="link" href={p.view}>View project</a>
                  <a className="link" href={p.code} target="_blank" rel="noreferrer">View code</a>
                </div>
              </div>
            </article>
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
                  Email
                </a>
                <a className="btn" href="https://github.com/Clubberz" target="_blank" rel="noreferrer">
                  <Github size={18} className="mr-2" /> GitHub
                </a>
                <a className="btn" href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer">
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
            <a className="hover:text-neutral-300 transition" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
