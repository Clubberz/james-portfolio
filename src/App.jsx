import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, FileDown, MapPin } from 'lucide-react'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'

// -------- CONFIG --------
const NAME = 'James Clubley'
const TAGLINE = 'Mechanical Engineering @ Rice • FEA • CAD • Prototyping'
const LOCATION = 'Houston, TX'
const SUMMARY =
  'Junior Mechanical Engineering student focused on simulation-driven design and hands-on prototyping. Experience with ANSYS, SolidWorks, MATLAB/Python. Interests in motorsport, aerospace, and marine systems.'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/Clubberz', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/YOUR-LINKEDIN', Icon: Linkedin },
  { label: 'Email', href: 'mailto:you@example.com', Icon: Mail },
]

const SKILLS = [
  { group: 'CAD & FEA', items: ['SolidWorks', 'ANSYS Workbench', 'FEA', 'Mesh convergence', 'DFM/DFA'] },
  { group: 'Programming', items: ['Python', 'MATLAB', 'C', 'LaTeX', 'Git'] },
  { group: 'Fabrication', items: ['CNC', '3D printing (FDM/SLA)', 'Composites', 'Machining', 'Welding'] },
]

const PROJECTS = [
  { title: 'Supersonic Intake Flow Simulation', blurb: 'CFD study of supersonic inlet diffuser for aerospace propulsion.', tags: ['CFD', 'Aerospace', 'ANSYS Fluent'] },
  { title: 'Rocket Payload Avionics Bay', blurb: 'Vibration-tuned mounts for avionics stack; modal checks and print orientation study.', tags: ['Rocketry', 'FEA', 'CAD'] },
  { title: 'Composite Wing Section Prototype', blurb: 'Built and tested composite wing sections for UAVs; analyzed stiffness vs. weight trade-offs.', tags: ['Composites', 'UAV', 'Testing'] },
]

const EXPERIENCE = [
  { org: 'Mamaka Bowls', role: 'Barista / Shift Lead', dates: '2024–2025', bullets: ['Streamlined closing checklist', 'Handled high-volume rushes; trained new hires'] },
  { org: 'Rice University', role: 'Mechanical Engineering – Junior', dates: '2023–Present', bullets: ['Courses: Mechanics of Materials, Thermo/Fluids, CAD/CAE (ANSYS)', 'Activities: Rocketry Club, EV Club'] },
]

const RESUME_URL = '/resume.pdf'

// -------- COMPONENT --------
export default function App() {
  const [sending] = useState(false)

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">

      {/* -------- BACKGROUND LAYER -------- */}
      <div className="absolute inset-0 -z-10">
        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] animate-[movebg_20s_linear_infinite]" />

        {/* Airfoil shape */}
        <motion.svg className="absolute top-24 left-12 w-72 h-72 opacity-10" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }} viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.5">
          <path d="M 10 100 Q 140 10 190 100 Q 140 190 10 100 Z" />
        </motion.svg>

        {/* Turbine outline */}
        <motion.svg className="absolute bottom-32 right-16 w-64 h-64 opacity-10" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
        </motion.svg>
      </div>

      {/* -------- NAV -------- */}
      <header className="sticky top-0 z-40 backdrop-blur bg-slate-900/50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{NAME}</div>
          <nav className="flex items-center gap-2">
            <a href="#projects" className="px-3 py-1 rounded-xl hover:bg-slate-800">Projects</a>
            <a href="#skills" className="px-3 py-1 rounded-xl hover:bg-slate-800">Skills</a>
            <a href="#experience" className="px-3 py-1 rounded-xl hover:bg-slate-800">Experience</a>
            <a href="#contact" className="px-3 py-1 rounded-xl hover:bg-slate-800">Contact</a>
            <Button asChild variant="secondary" className="rounded-xl bg-sky-600 hover:bg-sky-500 text-white">
              <a href={RESUME_URL} target="_blank" rel="noreferrer">
                <FileDown className="w-4 h-4 mr-2" />Resume
              </a>
            </Button>
          </nav>
        </div>
      </header>

      {/* -------- HERO -------- */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-8">
        <div className="bg-slate-800/40 p-8 rounded-2xl backdrop-blur border border-slate-700">
          <h1 className="text-4xl md:text-5xl font-bold">{NAME}</h1>
          <div className="mt-2 text-lg text-slate-300">{TAGLINE}</div>
          <div className="mt-1 flex items-center gap-2 text-slate-400"><MapPin className="w-4 h-4" />{LOCATION}</div>
          <p className="mt-4 text-slate-300">{SUMMARY}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {LINKS.map(({ label, href, Icon }) => (
              <Button key={label} asChild variant="outline" className="rounded-xl border-slate-600 text-slate-200 hover:bg-slate-700">
                <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Icon className="w-4 h-4" /> {label}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* -------- PROJECTS -------- */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 backdrop-blur">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t, j) => <Badge key={j} variant="outline" className="border-sky-500 text-sky-400">{t}</Badge>)}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -------- SKILLS -------- */}
      <section id="skills" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((s, i) => (
            <div key={i} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 backdrop-blur">
              <h3 className="font-semibold mb-4">{s.group}</h3>
              <div className="flex flex-wrap gap-2">
                {s.items.map((item, j) => (
                  <Badge key={j} variant="outline" className="border-sky-500 text-sky-400">{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* -------- EXPERIENCE -------- */}
      <section id="experience" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 backdrop-blur">
              <h3 className="text-xl font-semibold">{exp.role} – {exp.org}</h3>
              <div className="text-slate-400 text-sm">{exp.dates}</div>
              <ul className="list-disc list-inside mt-2 text-slate-300">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* -------- CONTACT -------- */}
      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="bg-slate-800/40 p-8 rounded-2xl border border-slate-700 backdrop-blur text-center">
          <p className="text-slate-300 mb-4">I’m always open to discussing engineering projects or opportunities.</p>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <a href="mailto:you@example.com"><Mail className="w-4 h-4 mr-2" /> Email Me</a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/YOUR-LINKEDIN"><Linkedin className="w-4 h-4 mr-2" /> LinkedIn</a>
            </Button>
          </div>
        </div>
      </section>

    </div>
  )
}
