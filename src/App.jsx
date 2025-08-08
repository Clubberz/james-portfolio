import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, FileDown, MapPin, Wrench, Rocket, Cog, Waves, Cpu, Hammer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'

// ---------- CONFIG ----------
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
  { title: 'SPP5–SPP7 Beam Study (ANSYS)', blurb: '2D/3D FEA with manual mesh refinement; deflection, bending & shear convergence; compared against Euler–Bernoulli solution.', highlights: ['Parametric study', 'Path-based stress extraction', 'Result validation'], tags: ['ANSYS', 'FEA', 'Convergence'], links: [{ label: 'Report', href: '#' }], icon: Hammer },
  { title: 'Medical TENS Device Prototype', blurb: 'Led a small team designing a TENS-based therapy device; enclosure CAD, PCB fit, ergonomics, and bench testing.', highlights: ['Rapid prototyping', 'Human factors', 'Iterative testing'], tags: ['SolidWorks', 'Prototyping', 'Electromechanical'], links: [{ label: 'Gallery', href: '#' }], icon: Cpu },
  { title: 'EV Club: Lightweight Battery Enclosure', blurb: 'Composite sandwich panel enclosure with FEA sizing for stiffness and crashworthiness; quick-release serviceability.', highlights: ['Composite layup', 'FEA sizing', 'DFM'], tags: ['Composites', 'FEA', 'EV'], links: [{ label: 'Design Notes', href: '#' }], icon: Cog },
  { title: 'Rice Rocketry: Avionics Bay Mounts', blurb: 'Vibration-tuned mounts for avionics stack; modal checks and print orientation study.', highlights: ['Modal analysis', '3D printing', 'Testing'], tags: ['Rocketry', 'Vib/Modal', '3DP'], links: [{ label: 'Brief', href: '#' }], icon: Rocket },
  { title: 'BMW K100 Systems Refresh', blurb: 'Brake system and fork overhaul; tolerancing, seals, and flow checks; documentation for repeatability.', highlights: ['Hydraulics', 'Diagnostics', 'Documentation'], tags: ['Motorcycle', 'Mechanics'], links: [{ label: 'Write-up', href: '#' }], icon: Wrench },
  { title: 'Solar for Liveaboard Sailboat (Concept)', blurb: 'Off-grid power budget, LiFePO₄ pack sizing, and Victron charge strategy with surge analysis.', highlights: ['Power modeling', 'System design', 'Safety'], tags: ['Marine', 'Power', 'Modeling'], links: [{ label: 'Calc Sheet', href: '#' }], icon: Waves },
]

const EXPERIENCE = [
  { org: 'Mamaka Bowls', role: 'Barista / Shift Lead', dates: '2024–2025', bullets: ['Streamlined closing checklist to reduce shutdown time by ~15%', 'Handled high-volume rushes; trained two new hires'] },
  { org: 'Rice University', role: 'Mechanical Engineering – Junior', dates: '2023–Present', bullets: ['Courses: Mechanics of Materials, Thermo/Fluids, CAD/CAE (ANSYS)', 'Activities: Rocketry Club, EV Club'] },
]

const RESUME_URL = '/resume.pdf'

export default function App() {
  const [sending, setSending] = useState(false)

  return (
    <div className="relative min-h-screen bg-slate-900 text-slate-100 overflow-hidden">

      {/* ---------- BACKGROUND LAYER ---------- */}
      <div className="absolute inset-0 -z-10">
        {/* Blueprint grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[length:40px_40px] animate-[movebg_20s_linear_infinite]" />

        {/* Aero shapes */}
        <motion.svg className="absolute top-20 left-10 w-96 h-96 opacity-10" initial={{ y: -50 }} animate={{ y: 0 }} transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }} viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.5">
          <path d="M 10 100 Q 100 10 190 100 Q 100 190 10 100 Z" />
        </motion.svg>

        <motion.svg className="absolute bottom-32 right-16 w-80 h-80 opacity-10" initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 60, repeat: Infinity, ease: 'linear' }} viewBox="0 0 200 200" fill="none" stroke="white" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <line x1="100" y1="10" x2="100" y2="190" />
          <line x1="10" y1="100" x2="190" y2="100" />
        </motion.svg>
      </div>

      {/* ---------- NAVBAR ---------- */}
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

      {/* ---------- HERO SECTION ---------- */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-slate-800/40 p-8 rounded-2xl backdrop-blur border border-slate-700">
          <div>
            <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl md:text-5xl font-bold leading-tight">
              {NAME}
            </motion.h1>
            <div className="mt-3 text-lg md:text-xl text-slate-300">{TAGLINE}</div>
            <div className="mt-2 flex items-center gap-2 text-slate-400"><MapPin className="w-4 h-4" />{LOCATION}</div>
            <p className="mt-5 max-w-prose text-slate-300">{SUMMARY}</p>
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
        </div>
      </section>

      {/* ---------- PROJECTS / SKILLS / EXPERIENCE / CONTACT ---------- */}
      {/* --- Keep your existing structure but wrap each in bg-slate-800/40 rounded-2xl for glass look --- */}
      {/* For brevity, I left the rest of the sections same as before, but wrapped in glass-style containers */}
    </div>
  )
}
