import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from 'react-router-dom'
import { PROJECTS } from './projects' // fixed path (was ./data/projects)
import { DitherBackground, Dock, Marquee } from 'reactbits' // real reactbits

const SKILLS = [
  { name: "FEA", meta: "ANSYS • Linear/Modal" },
  { name: "CAD", meta: "SolidWorks • DFM" },
  { name: "Python", meta: "NumPy • Scripts" },
  { name: "MATLAB", meta: "Analysis • Plots" },
  { name: "Prototyping", meta: "3D print • Composites" },
  { name: "Docs", meta: "BOM • Drawings" },
];

function Sanity() {
  const assertions = [
    { name: 'Projects non-empty', pass: Array.isArray(PROJECTS) && PROJECTS.length >= 4 },
    { name: 'All slugs URL-safe', pass: PROJECTS.every(p => /^[a-z0-9-]+$/.test(p.slug)) },
    { name: 'Hero images present', pass: PROJECTS.every(p => typeof p.hero === 'string' && p.hero.length>0) },
  ];
  const ok = assertions.every(a=>a.pass);
  return (
    <div className={`mt-4 text-xs inline-flex items-center gap-2 rounded-full px-3 py-1 border ${ok? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10':'border-rose-500/40 text-rose-300 bg-rose-500/10'}`}>
      {ok? 'Sanity: all checks passed' : `Sanity: ${assertions.filter(a=>!a.pass).length} failed`}
    </div>
  )
}

export default function App() {
  return (
    <div>

      {/* NAV (reactbits Dock) */}
      <nav className="border-b border-white/10 sticky top-0 z-40 bg-black/50 backdrop-blur">
        <div className="container h-[64px] flex items-center justify-between">
          <a
            href="/"
            className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition"
          >
            JAMES CLUBLEY
          </a>
          <Dock className="bg-white/5 border-white/10 px-2 py-1 rounded-2xl">
            <a className="nav-link hidden md:inline px-3" href="#projects">Projects</a>
            <a className="nav-link hidden md:inline px-3" href="#skills">Skills</a>
            <a className="nav-link hidden md:inline px-3" href="#contact">Contact</a>
            <a className="nav-link px-2" href="https://github.com/Clubberz" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="nav-link px-2" href="https://www.linkedin.com/in/YOUR-LINKEDIN" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </Dock>
        </div>
      </nav>

      {/* HERO (reactbits DitherBackground) */}
      <header className="border-b border-white/10">
        <DitherBackground
          className="[--pattern-opacity:0.14] [--bg:theme(colors.black)] [--color:theme(colors.emerald.300)]"
          // You can tweak density/scale via CSS vars in className
        >
          <div className="container py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="eyebrow">Mechanical Engineering Portfolio</p>
              <h1 className="h1 mt-2">James Clubley</h1>
              <p className="text-neutral-300 mt-5 max-w-[560px]">
                Houston-based ME focused on structural FEA, CAD for manufacturability, and rapid prototyping.
              </p>
              <div className="flex gap-3 mt-8">
                <a className="btn primary" href="mailto:you@example.com">Contact me</a>
                <a className="btn" href="#projects">See projects</a>
                <Sanity />
              </div>
            </div>

            {/* Portrait panel */}
            <div className="panel overflow-hidden lift">
              <div className="ratio-16x9">
                <img src="/img/portrait.jpg" alt="Portrait" className="img-cover" />
              </div>
            </div>
          </div>
        </DitherBackground>
      </header>

      {/* SKILLS STRIP with Marquee on small screens */}
      <section id="skills" className="container section">
        <div className="hr mb-8"></div>
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6">
          {SKILLS.map((s) => (
            <div key={s.name} className="pr-4">
              <div className="text-xl font-semibold tracking-[-0.01em]">{s.name}</div>
              <div className="text-sm text-neutral-400 mt-1">{s.meta}</div>
            </div>
          ))}
        </div>
        <div className="md:hidden border border-white/10 rounded-xl p-3 overflow-hidden">
          <Marquee pauseOnHover>
            {SKILLS.map(s => (
              <span key={s.name} className="mx-4 text-sm">{s.name} — <span className="text-neutral-400">{s.meta}</span></span>
            ))}
          </Marquee>
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
            <Link key={p.slug} to={`/projects/${p.slug}`} className="card block">
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
                    <a className="link" href={p.links.code} onClick={e => e.stopPropagation()} target="_blank" rel="noreferrer">
                      View code
                    </a>
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
                <a className="btn primary" href="mailto:you@example.com">Email</a>
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

/***********************
 * FILE: projects.js (was projects.js at repo root)
 ***********************/
// Normalized, URL-safe slugs. Keep titles the same.
export const PROJECTS = [
  {
    slug: 'bmw-k100-build', // was 'BMW K100 Build' (spaces)
    title: 'BMW K100 Build',
    stack: 'FEA • CAD • Fabrication',
    hero: '/img/k100frame.png',
    summary:
      'Redesigned and fabricated a custom frame and subframe for a BMW K100 motorcycle conversion, including FEA validation and fabrication considerations.',
    bullets: [
      'Tube frame design in SolidWorks',
      'Force and stress analysis using FEA',
      'Welded jig and fixture design',
      'Suspension review and geometry optimization',
    ],
    gallery: ['/img/K100_frame_assembly.png', '/img/K100dixer.jpg'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'bracket-stress-validation',
    title: 'Bracket — Stress Validation',
    stack: 'FEA • Static',
    hero: '/img/project1.png',
    summary:
      'Von Mises stress map, mesh convergence, and safety factor verification against hand calculations.',
    bullets: [
      'Linear static analysis in ANSYS',
      'Mesh independence study',
      'σmax vs. hand calc correlation within 4%',
      'Documented SF assumptions and constraints',
    ],
    gallery: ['/img/project2.png', '/img/project3.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'eigenvalue-buckling',
    title: 'Eigenvalue Buckling Modes',
    stack: 'FEA • Buckling',
    hero: '/img/project2.png',
    summary:
      'Mode shape extraction and critical load factors for a slender frame under axial compression.',
    bullets: ['Top 5 modes extracted', 'BC sensitivity', 'Critical load vs. slenderness'],
    gallery: ['/img/project4.png', '/img/project5.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'lightweight-truss',
    title: 'Lightweight Truss Optimization',
    stack: 'Structures • Opt',
    hero: '/img/project3.png',
    summary:
      'Section sizing and topology tweaks to reduce mass while maintaining stiffness targets.',
    bullets: ['15% mass reduction', 'Constraint-driven sizing', 'Manufacturing-aware geometry'],
    gallery: ['/img/project1.png', '/img/project2.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'clevis-link-study',
    title: 'Clevis Link Study',
    stack: 'Fatigue • SF',
    hero: '/img/project4.png',
    summary:
      'Evaluated fatigue life under cyclic loading conditions and verified safety factors.',
    bullets: ['Alt stress ranges', 'Mean stress corrections'],
    gallery: ['/img/project5.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'assembly-and-fixtures',
    title: 'Assembly & Fixtures',
    stack: 'CAD • DFM',
    hero: '/img/project5.png',
    summary:
      'Fixtures and assembly CAD with drawings, BOMs, and manufacturing notes.',
    bullets: ['Tolerance/fit', 'BOM & drawings', 'Print fixtures'],
    gallery: ['/img/project3.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
];

export const bySlug = (slug) => PROJECTS.find(p => p.slug === slug);

/***********************
 * FILE: ProjectDetail.jsx (was at repo root)
 ***********************/
import { Link, useParams } from 'react-router-dom';
import { bySlug } from './projects'; // fixed path (was ../data/projects)

export default function ProjectDetail() {
  const { id } = useParams();
  const p = bySlug(id);

  if (!p) {
    return (
      <div className="container py-24">
        <h1 className="h1">Project not found</h1>
        <p className="text-neutral-300 mt-3">
          The page you’re looking for doesn’t exist. <Link to="/" className="link">Go home</Link>.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="ratio-16x9">
        <img src={p.hero} alt={p.title} className="img-cover" />
      </div>

      <div className="container section">
        <Link to="/" className="text-neutral-400 hover:text-white">&larr; Back</Link>
        <p className="eyebrow mt-6">Case Study</p>
        <h1 className="h1 mt-2">{p.title}</h1>
        <div className="text-neutral-400 mt-1">{p.stack}</div>

        <p className="text-neutral-300 mt-5 max-w-[820px]">{p.summary}</p>

        <ul className="list-disc list-inside mt-6 text-neutral-300 space-y-1">
          {p.bullets?.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <div className="flex flex-wrap gap-4 mt-6">
          {p.links?.view && <a className="btn" href={p.links.view}>View project</a>}
          {p.links?.code && (
            <a className="btn" href={p.links.code} target="_blank" rel="noreferrer">View code</a>
          )}
        </div>

        {p.gallery?.length > 0 && (
          <>
            <div className="hr my-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {p.gallery.map((src) => (
                <img key={src} src={src} alt="detail" className="rounded-xl lift" />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}