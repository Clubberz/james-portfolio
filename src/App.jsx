import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, MapPin } from 'lucide-react'

const NAME = 'James Clubley'
const TAGLINE = 'Mechanical Engineering @ Rice — FEA · CAD · Prototyping'
const LOCATION = 'Houston, TX'
const SUMMARY =
  'Simulation-driven mechanical engineer. I design, analyze, and ship hardware—fast. ANSYS, SolidWorks, MATLAB/Python. Interests: aerospace, motorsport, marine systems.'

// Image files go in /public/img (see Projects)
const PROJECT_IMAGES = [
  { src: '/img/project1.png', title: 'Eigenvalue Buckling Study', tags: ['ANSYS', 'FEA', 'Modal'] },
  { src: '/img/project2.png', title: 'Bracket Stress (von Mises)', tags: ['ANSYS', 'Static', 'Validation'] },
  { src: '/img/project3.png', title: 'Lightweight Truss', tags: ['Optimization', 'Beam Tool'] },
  { src: '/img/project5.png', title: 'Clevis Link Analysis', tags: ['Stress', 'Safety Factor'] },
  { src: '/img/project4.png', title: 'BMW K100 Systems Refresh', tags: ['Mechanics', 'Hydraulics'] },
]

const SKILLS = [
  ['ANSYS Workbench', 'FEA', 'Mesh Convergence', 'Modal/Vib'],
  ['SolidWorks', 'DFM/DFA', '3D Printing', 'Composites'],
  ['Python', 'MATLAB', 'Git', 'LaTeX'],
]

const EXPERIENCE = [
  {
    org: 'Mamaka Bowls',
    role: 'Barista / Shift Lead',
    dates: '2024–2025',
    bullets: [
      'Reduced shutdown time by ~15% with a re-engineered closing process',
      'Trained two hires; maintained throughput under rush conditions',
    ],
  },
  {
    org: 'Rice University',
    role: 'Mechanical Engineering — Junior',
    dates: '2023–Present',
    bullets: [
      'Mechanics of Materials, Thermo/Fluids, CAD/CAE (ANSYS)',
      'Rocketry Club, EV Club',
    ],
  },
]

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Clubberz', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR-LINKEDIN', icon: Linkedin },
  { label: 'Email', href: 'mailto:you@example.com', icon: Mail },
]

const RESUME_URL = '/resume.pdf'

export default function App() {
  const [sending, setSending] = useState(false)

  return (
    <div className="min-h-screen text-slate-100 bg-slate-950 overflow-x-hidden relative">
      {/* ANGULAR BACKDROP */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        {/* Cyan grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,.14)_1px,transparent_1px)] bg-[length:44px_44px] opacity-60" />
        {/* Angled color planes */}
        <div className="angle-bg angle-1" />
        <div className="angle-bg angle-2" />
      </div>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b border-cyan-400/40 backdrop-blur bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{NAME}</div>
          <nav className="flex items-center gap-2 text-sm">
            {['Projects','Skills','Experience','Contact'].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`}
                 className="px-3 py-1 rounded-md hover:bg-white/5 transition">
                {s}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank" rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-white bg-red-600 hover:bg-red-500 transition glow-border"
            >
              <FileDown className="w-4 h-4" /> Resume
            </a>
          </nav>
        </div>
      </header>

      {/* HERO — angular, high contrast */}
      <section className="mx-auto max-w-6xl px-4 pt-14 pb-6">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/60 backdrop-blur shadow-xl glow-border">
          <div className="clip-hero p-8 md:p-12">
            <motion.h1
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .5 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              <span className="text-cyan-400">Engineering</span> at speed.
            </motion.h1>
            <div className="mt-3 text-lg md:text-xl text-red-400">{TAGLINE}</div>
            <div className="mt-2 flex items-center gap-2 text-slate-400">
              <MapPin className="w-4 h-4" /> {LOCATION}
            </div>
            <p className="mt-5 max-w-3xl text-slate-200">{SUMMARY}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              {LINKS.map(({label, href, icon: Icon}) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                   className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-slate-600 hover:bg-white/5 transition">
                  <Icon className="w-4 h-4" /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Angular accent strip */}
          <div className="absolute -bottom-6 -right-6 w-72 h-24 rotate-6 bg-gradient-to-r from-red-600 to-cyan-500 opacity-70 blur-xl" />
        </div>
      </section>

      {/* PROJECTS — angular cards with image focus */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECT_IMAGES.map((p, i) => (
            <motion.article
              key={p.src}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur hover:border-cyan-400/60 transition glow-border"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.src} alt={p.title}
                     className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.04]" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-100">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="tag-chip">{t}</span>
                  ))}
                </div>
              </div>
              {/* angular shine */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-40 w-40 rotate-12 bg-gradient-to-br from-red-500/30 to-cyan-400/30 blur-2xl" />
            </motion.article>
          ))}
        </div>
      </section>

      {/* SKILLS — split grids with angled header stripe */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle>Skills</SectionTitle>
        <div className="grid gap-6 md:grid-cols-3">
          {SKILLS.map((col, idx) => (
            <div key={idx} className="rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur p-5 glow-border">
              <div className="h-1 w-16 bg-gradient-to-r from-red-600 to-cyan-400 skew-x-[-15deg] rounded mb-4" />
              <div className="flex flex-wrap gap-2">
                {col.map((s) => <span key={s} className="tag-chip alt">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE — angular timeline blocks */}
      <section id="experience" className="mx-auto max-w-6xl px-4 py-8">
        <SectionTitle>Experience</SectionTitle>
        <div className="relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400/60 to-red-500/60" />
          <div className="space-y-6">
            {EXPERIENCE.map((e, i) => (
              <div key={i} className="relative ml-2">
                <div className="absolute -left-[11px] mt-1 h-3 w-3 rotate-45 bg-red-500 shadow-[0_0_0_3px] shadow-slate-950" />
                <div className="rounded-xl border border-cyan-400/30 bg-slate-900/60 backdrop-blur p-5 glow-border">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-100">{e.role} — {e.org}</h3>
                    <span className="text-xs text-slate-400">{e.dates}</span>
                  </div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-300 space-y-1">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT — decisive CTA */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-14 pt-6">
        <div className="relative overflow-hidden rounded-2xl border border-cyan-400/40 bg-slate-900/60 backdrop-blur p-8 md:p-10 glow-border">
          <h2 className="text-2xl md:text-3xl font-bold">
            Let’s build something ambitious.
          </h2>
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

          {/* angular motion accent */}
          <motion.div
            initial={{ x: 60, opacity: 0 }}
            whileInView={{ x: 0, opacity: .9 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-72 rotate-[10deg] bg-gradient-to-r from-red-600 to-cyan-400 blur-2xl"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-400/20">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400 flex items-center justify-between">
          <span>© {new Date().getFullYear()} {NAME}</span>
          <span className="opacity-80">Built with React + Vite + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}

/* ---------- Small component for section titles ---------- */
function SectionTitle({ children }) {
  return (
    <div className="mb-5">
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        <span className="inline-block skew-x-[-8deg] bg-gradient-to-r from-red-600 to-cyan-400 bg-clip-text text-transparent">
          {children}
        </span>
      </h2>
    </div>
  )
}
