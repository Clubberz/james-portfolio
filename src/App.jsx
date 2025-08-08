import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom'
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react'

/** ---------------------------
 *  Project data (uses /public/img/*)
 *  --------------------------*/
const PROJECTS = {
  'bracket-stress-validation': {
    title: 'Bracket — Stress Validation',
    eyebrow: 'Case Study',
    hero: '/img/project1.png',
    summary:
      'Von Mises stress map, mesh convergence, and safety factor verification against hand calculations.',
    bullets: [
      'Linear static analysis in ANSYS',
      'Mesh independence study',
      'σmax vs. hand calc correlation within 4%',
      'Documented SF assumptions and constraints',
    ],
    // Use other images you have as a simple gallery
    gallery: ['/img/project2.png', '/img/project3.png'],
    tags: ['FEA', 'Stress', 'Validation'],
  },
  'eigenvalue-buckling': {
    title: 'Eigenvalue Buckling Modes',
    eyebrow: 'Study',
    hero: '/img/project2.png',
    summary:
      'Mode shape extraction and critical load factors for a slender frame under axial compression.',
    bullets: [
      'Top 5 modes extracted',
      'Boundary condition sensitivity',
      'Critical load vs. slenderness ratio',
    ],
    gallery: ['/img/project4.png', '/img/project5.png'],
    tags: ['FEA', 'Modal/Buckling'],
  },
  'lightweight-truss': {
    title: 'Lightweight Truss',
    eyebrow: 'Optimization',
    hero: '/img/project3.png',
    summary:
      'Section sizing and topology tweaks to reduce mass while maintaining stiffness targets.',
    bullets: [
      '15% mass reduction @ same deflection',
      'Constraint-driven sizing',
      'Manufacturing-aware geometry',
    ],
    gallery: ['/img/project1.png', '/img/project2.png'],
    tags: ['Optimization', 'Structures'],
  },
}

/** ---------------------------
 *  Root App with Router
 *  --------------------------*/
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

/** ---------------------------
 *  Home (Porsche-inspired)
 *  --------------------------*/
function Home() {
  return (
    <div>
      {/* NAV */}
      <nav className="border-b border-white/10">
        <div className="container h-[68px] flex items-center justify-between">
          <a href="/" className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition">
            JAMES CLUBLEY
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#work" className="nav-link">Work</a>
            <a href="#capabilities" className="nav-link">Capabilities</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="border-b border-white/10">
        <div className="container py-12 md:py-16">
          <p className="eyebrow">Mechanical Engineering Portfolio</p>
          <h1 className="h1 mt-2">
            Engineering that blends <span className="text-neutral-400">precision</span> and <span className="text-neutral-400">performance</span>.
          </h1>
          <p className="max-w-[720px] text-neutral-300 mt-5">
            Simulation-driven design, fast iteration, and validated results. Focus on structural FEA,
            CAD for manufacturability, and rigorous documentation.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <a className="btn primary" href="mailto:you@example.com">Start a conversation</a>
            <a className="btn" href="#work">See the work</a>
          </div>
        </div>

        {/* Wide hero image — now /img/hero.jpg */}
        <div className="ratio-21x9">
          <img src="/img/hero.jpg" alt="Hero" className="img-cover" />
        </div>
      </header>

      {/* WORK STRIP */}
      <section className="container section" id="work">
        <div className="grid-12">
          <WorkCard
            to="/projects/bracket-stress-validation"
            size="lead"
            eyebrow="Case Study"
            title="Bracket — Stress Validation"
            img="/img/project1.png"
            desc="Von Mises stress map, mesh convergence, and safety factor verification against hand calcs."
            chip="FEA"
          />
          <WorkCard
            to="/projects/eigenvalue-buckling"
            eyebrow="Study"
            title="Eigenvalue Buckling Modes"
            img="/img/project2.png"
            desc="Critical loads and mode shapes for a frame under axial compression."
          />
          <WorkCard
            to="/projects/lightweight-truss"
            eyebrow="Optimization"
            title="Lightweight Truss"
            img="/img/project3.png"
            desc="Topology and section sizing to reduce mass while maintaining stiffness."
          />
        </div>

        <div className="hr my-10"></div>

        {/* Gallery row — use any remaining images */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img src="/img/project2.png" className="rounded-xl lift" alt="detail 1" />
          <img src="/img/project4.png" className="rounded-xl lift" alt="detail 2" />
          <img src="/img/project5.png" className="rounded-xl lift" alt="detail 3" />
          <img src="/img/project1.png" className="rounded-xl lift" alt="detail 4" />
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="border-t border-white/10 bg-black/20" id="capabilities">
        <div className="container section">
          <p className="eyebrow">Capabilities</p>
          <h2 className="h2 mt-2">From concept to validated prototype.</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Capability title="Structural FEA" items={['Linear static','Modal / buckling','Mesh studies','SF verification']} />
            <Capability title="CAD & DFM" items={['SolidWorks','Tolerance/fit','BOMs','Drawings']} />
            <Capability title="Prototyping" items={['3D printing','Composites','Fixture design','Test plans']} />
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="container section" id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2 mt-2">Methodical. Fast. Documented.</h2>
            <p className="text-neutral-300 mt-4">
              Placeholder bio. Focus on crisp communication, pragmatic trade-offs, and engineering
              decisions that stand up to scrutiny.
            </p>
          </div>
          <div className="panel overflow-hidden lift">
            <div className="ratio-21x9">
              {/* portrait now /img/portrait.jpg */}
              <img src="/img/portrait.jpg" className="img-cover" alt="Portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT / FOOTER */}
      <footer className="border-t border-white/10" id="contact">
        <div className="container section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2 mt-2">Let’s build something ambitious.</h2>
              <p className="text-neutral-300 mt-3">Email for roles, collaborations, or questions.</p>
              <div className="flex gap-3 mt-6">
                <a className="btn primary" href="mailto:you@example.com">Email</a>
                <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/Clubberz">
                  <Github size={18} className="mr-2" /> GitHub
                </a>
                <a className="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/YOUR-LINKEDIN">
                  <Linkedin size={18} className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <a className="text-sm text-neutral-400 hover:text-white transition flex items-center gap-1" href="#">
              Download résumé <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hr my-8"></div>
          <div className="text-xs text-neutral-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} James Clubley</span>
            <a className="hover:text-neutral-300 transition" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

/** Components */
function WorkCard({ to, size, eyebrow, title, img, desc, chip }) {
  const sizeClasses =
    size === 'lead'
      ? 'col-span-12 md:col-span-7'
      : 'col-span-12 md:col-span-5'

  return (
    <Link to={to} className={`lift panel ${sizeClasses} overflow-hidden block`}>
      <div className="ratio-21x9">
        <img src={img} alt={title} className="img-cover" />
      </div>
      <div className="p-6 md:p-8">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h3 className="h2 mt-1">{title}</h3>
        {desc && <p className="text-neutral-300 mt-3">{desc}</p>}
        <div className="flex items-center gap-2 mt-5">
          <span className="link">View case <ArrowUpRight size={16} className="inline ml-1" /></span>
          {chip && <span className="chip dot">{chip}</span>}
        </div>
      </div>
    </Link>
  )
}

function Capability({ title, items }) {
  return (
    <div className="panel p-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em]">{title}</h3>
      <ul className="mt-3 space-y-1 text-neutral-300">
        {items.map((it) => <li key={it}>• {it}</li>)}
      </ul>
    </div>
  )
}

/** Detail Page */
function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS[id]

  if (!project) {
    return (
      <div className="container py-20">
        <Link to="/" className="text-neutral-400 hover:text-white">&larr; Back</Link>
        <h1 className="h1 mt-4">Project not found</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="ratio-21x9">
        <img src={project.hero} alt={project.title} className="img-cover" />
      </div>

      <div className="container py-12">
        <Link to="/" className="text-neutral-400 hover:text-white">&larr; Back</Link>
        <p className="eyebrow mt-6">{project.eyebrow}</p>
        <h1 className="h1 mt-2">{project.title}</h1>
        <p className="text-neutral-300 mt-5 max-w-[820px]">{project.summary}</p>

        <ul className="list-disc list-inside mt-6 text-neutral-300 space-y-1">
          {project.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>

        <div className="flex gap-2 mt-6">
          {project.tags?.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        {project.gallery?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {project.gallery.map((src) => (
              <img key={src} src={src} alt="detail" className="rounded-xl lift" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

/** 404 */
function NotFound() {
  return (
    <div className="container py-24">
      <h1 className="h1">Not found</h1>
      <p className="text-neutral-300 mt-3">
        The page you’re looking for doesn’t exist. <Link to="/" className="link">Go home</Link>.
      </p>
    </div>
  )
}
