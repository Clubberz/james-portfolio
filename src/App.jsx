import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ExternalLink, FileDown, MapPin, Wrench, Rocket, Cog, Waves, Cpu, Hammer } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Textarea } from './components/ui/textarea'

const NAME = 'James Clubley'
const TAGLINE = 'Mechanical Engineering @ Rice • FEA • CAD • Prototyping'
const LOCATION = 'Houston, TX'
const SUMMARY =
  'Junior Mechanical Engineering student focused on simulation-driven design and hands-on prototyping. Experience with ANSYS, SolidWorks, MATLAB/Python. Interests in motorsport, aerospace, and marine systems.'

const LINKS = [
  { label: 'GitHub', href: 'https://github.com/', Icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
  { label: 'Email', href: 'mailto:you@example.com', Icon: Mail },
]

const SKILLS = [
  { group: 'CAD & FEA', items: ['SolidWorks', 'ANSYS Workbench', 'FEA', 'Mesh convergence', 'DFM/DFA'] },
  { group: 'Programming', items: ['Python', 'MATLAB', 'C', 'LaTeX', 'Git'] },
  { group: 'Fabrication', items: ['CNC', '3D printing (FDM/SLA)', 'Composites', 'Machining', 'Welding'] },
]

const PROJECTS = [
  {
    title: 'SPP5–SPP7 Beam Study (ANSYS)',
    blurb:
      '2D/3D FEA with manual mesh refinement; deflection, bending & shear convergence; compared against Euler–Bernoulli solution.',
    highlights: ['Parametric study', 'Path-based stress extraction', 'Result validation'],
    tags: ['ANSYS', 'FEA', 'Convergence'],
    links: [{ label: 'Report', href: '#' }],
    icon: Hammer,
  },
  {
    title: 'Medical TENS Device Prototype',
    blurb:
      'Led a small team designing a TENS-based therapy device; enclosure CAD, PCB fit, ergonomics, and bench testing.',
    highlights: ['Rapid prototyping', 'Human factors', 'Iterative testing'],
    tags: ['SolidWorks', 'Prototyping', 'Electromechanical'],
    links: [{ label: 'Gallery', href: '#' }],
    icon: Cpu,
  },
  {
    title: 'EV Club: Lightweight Battery Enclosure',
    blurb:
      'Composite sandwich panel enclosure with FEA sizing for stiffness and crashworthiness; quick-release serviceability.',
    highlights: ['Composite layup', 'FEA sizing', 'DFM'],
    tags: ['Composites', 'FEA', 'EV'],
    links: [{ label: 'Design Notes', href: '#' }],
    icon: Cog,
  },
  {
    title: 'Rice Rocketry: Avionics Bay Mounts',
    blurb:
      'Vibration-tuned mounts for avionics stack; modal checks and print orientation study.',
    highlights: ['Modal analysis', '3D printing', 'Testing'],
    tags: ['Rocketry', 'Vib/Modal', '3DP'],
    links: [{ label: 'Brief', href: '#' }],
    icon: Rocket,
  },
  {
    title: 'BMW K100 Systems Refresh',
    blurb:
      'Brake system and fork overhaul; tolerancing, seals, and flow checks; documentation for repeatability.',
    highlights: ['Hydraulics', 'Diagnostics', 'Documentation'],
    tags: ['Motorcycle', 'Mechanics'],
    links: [{ label: 'Write‑up', href: '#' }],
    icon: Wrench,
  },
  {
    title: 'Solar for Liveaboard Sailboat (Concept)',
    blurb:
      'Off‑grid power budget, LiFePO₄ pack sizing, and Victron charge strategy with surge analysis.',
    highlights: ['Power modeling', 'System design', 'Safety'],
    tags: ['Marine', 'Power', 'Modeling'],
    links: [{ label: 'Calc Sheet', href: '#' }],
    icon: Waves,
  },
]

const EXPERIENCE = [
  {
    org: 'Mamaka Bowls',
    role: 'Barista / Shift Lead',
    dates: '2024–2025',
    bullets: [
      'Streamlined closing checklist to reduce shutdown time by ~15%',
      'Handled high-volume rushes; trained two new hires',
    ],
  },
  {
    org: 'Rice University',
    role: 'Mechanical Engineering – Junior',
    dates: '2023–Present',
    bullets: [
      'Courses: Mechanics of Materials, Thermo/Fluids, CAD/CAE (ANSYS)',
      'Activities: Rocketry Club, EV Club',
    ],
  },
]

const RESUME_URL = '#'

export default function App() {
  const [sending, setSending] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="font-semibold tracking-tight">{NAME}</div>
          <nav className="flex items-center gap-2">
            <a href="#projects" className="px-3 py-1 rounded-xl hover:bg-slate-100">Projects</a>
            <a href="#skills" className="px-3 py-1 rounded-xl hover:bg-slate-100">Skills</a>
            <a href="#experience" className="px-3 py-1 rounded-xl hover:bg-slate-100">Experience</a>
            <a href="#contact" className="px-3 py-1 rounded-xl hover:bg-slate-100">Contact</a>
            <Button asChild variant="secondary" className="rounded-xl">
              <a href={RESUME_URL} target="_blank" rel="noreferrer"><FileDown className="w-4 h-4 mr-2"/>Resume</a>
            </Button>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 pt-10 pb-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{duration:0.5}} className="text-3xl md:text-5xl font-bold leading-tight">
              {NAME}
            </motion.h1>
            <div className="mt-3 text-lg md:text-xl text-slate-600">{TAGLINE}</div>
            <div className="mt-2 flex items-center gap-2 text-slate-500"><MapPin className="w-4 h-4"/>{LOCATION}</div>
            <p className="mt-5 max-w-prose text-slate-700">{SUMMARY}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {LINKS.map(({label, href, Icon}) => (
                <Button key={label} asChild variant="outline" className="rounded-xl">
                  <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    <Icon className="w-4 h-4"/> {label}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <motion.div initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} transition={{duration:0.5, delay:0.1}} className="bg-white rounded-2xl shadow p-6">
            <div className="grid grid-cols-3 gap-4">
              {[
                { k: 'ANSYS', v: 'FEA' },
                { k: 'SolidWorks', v: 'CAD' },
                { k: 'Python', v: 'Scripting' },
                { k: 'MATLAB', v: 'Analysis' },
                { k: 'Composites', v: 'DFM' },
                { k: '3D Print', v: 'Proto' },
              ].map(({k,v}) => (
                <div key={k} className="rounded-xl border p-4 text-center">
                  <div className="text-sm text-slate-500">{k}</div>
                  <div className="text-lg font-semibold">{v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-2xl md:text-3xl font-bold">Projects</h2>
          <span className="text-sm text-slate-500">Selected work</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} initial={{opacity:0, y:8}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.05}}>
              <Card className="rounded-2xl h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <p.icon className="w-5 h-5"/>
                    <CardTitle className="text-lg">{p.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-slate-600">{p.blurb}</p>
                  <ul className="text-sm list-disc pl-5 space-y-1">
                    {p.highlights.map(h => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(t => <Badge key={t} variant="secondary" className="rounded-xl">{t}</Badge>)}
                  </div>
                  <div className="pt-1">
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} className="inline-flex items-center text-sm underline underline-offset-4 hover:no-underline">
                        {l.label} <ExternalLink className="w-3.5 h-3.5 ml-1"/>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Skills</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {SKILLS.map(s => (
            <Card key={s.group} className="rounded-2xl">
              <CardHeader className="pb-2"><CardTitle className="text-lg">{s.group}</CardTitle></CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {s.items.map(i => <Badge key={i} variant="outline" className="rounded-xl">{i}</Badge>)}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience</h2>
        <div className="space-y-4">
          {EXPERIENCE.map((e, idx) => (
            <div key={idx} className="grid md:grid-cols-[220px_1fr] gap-4 items-start">
              <div className="text-sm text-slate-500">{e.dates}</div>
              <Card className="rounded-2xl">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{e.role} • {e.org}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-slate-700">
                    {e.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Get in touch</h2>
            <p className="text-slate-600">Have a project or internship in mind? I'm open to contract, internship, or part‑time opportunities.</p>
            <div className="mt-4 flex gap-3">
              {LINKS.map(({label, href, Icon}) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-slate-50">
                  <Icon className="w-4 h-4"/> {label}
                </a>
              ))}
            </div>
          </div>
          <Card className="rounded-2xl">
            <CardHeader className="pb-2"><CardTitle className="text-lg">Send a message</CardTitle></CardHeader>
            <CardContent>
              <form
                onSubmit={(e) => { e.preventDefault(); setSending(true); setTimeout(()=>setSending(false), 1000); }}
                className="space-y-3"
              >
                <Input placeholder="Your name" required className="rounded-xl"/>
                <Input placeholder="Email" type="email" required className="rounded-xl"/>
                <Textarea placeholder="How can I help?" rows={5} required className="rounded-xl"/>
                <Button type="submit" disabled={sending} className="rounded-xl w-full">
                  {sending ? 'Sending…' : 'Send'}
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-2">(This demo form just fakes a send. I can wire it to Formspree/Resend on request.)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-6 mt-8">
        <div className="max-w-6xl mx-auto px-4 text-sm text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} {NAME}. All rights reserved.</span>
          <span>Built with React + Vite + Tailwind</span>
        </div>
      </footer>
    </div>
  )
}
