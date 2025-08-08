import { motion } from 'framer-motion'
import SectionDivider from './components/SectionDivider'
import ProjectCard from './components/ProjectCard'
import SkillBadge from './components/SkillBadge'

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100 overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center bg-hero-pattern bg-cover bg-center">
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight"
          >
            Your Name Here
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="mt-4 text-lg text-slate-300"
          >
            Aerospace / Mechanical Engineering • CAD • FEA • Prototyping
          </motion.p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-950" />
      </section>

      <SectionDivider flip />

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title">About Me</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Placeholder bio text. You can talk about your background, engineering
          focus, and what drives your passion for aerospace and mechanical design.
          Mention your key skills and the type of work you want to do.
        </p>
      </section>

      <SectionDivider />

      {/* PROJECTS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          <ProjectCard title="Project One" description="Short placeholder description" />
          <ProjectCard title="Project Two" description="Short placeholder description" />
          <ProjectCard title="Project Three" description="Short placeholder description" />
        </div>
      </section>

      <SectionDivider flip />

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="section-title">Skills</h2>
        <div className="flex flex-wrap gap-3 mt-6">
          <SkillBadge label="SolidWorks" />
          <SkillBadge label="ANSYS" />
          <SkillBadge label="MATLAB" />
          <SkillBadge label="Python" />
          <SkillBadge label="Composite Fabrication" />
        </div>
      </section>

      <SectionDivider />

      {/* CONTACT */}
      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="section-title">Get In Touch</h2>
        <p className="mt-4 text-slate-300">
          Placeholder contact message. Invite people to email you or connect on LinkedIn.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="mailto:you@example.com"
            className="btn-primary"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com"
            className="btn-outline"
          >
            LinkedIn
          </a>
        </div>
      </section>
    </div>
  )
}
