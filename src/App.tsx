/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GridBackground } from './components/GridBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStack } from './components/TechStack';
import { ImageSequence } from './components/ImageSequence';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { Mail, Linkedin, Github } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative">
      <GridBackground />
      <Navbar />

      <main>
        <Hero />

        {/* 3D Scroll-Rotation Reveal Section */}
        <div className="relative">
          <ImageSequence 
            frameCount={60} 
            basePath="/render/frame_" 
            extension="png" 
          />
          
          {/* Overlay Text during rotation */}
          <div className="absolute inset-0 pointer-events-none sticky top-0 h-screen flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 1 }}
              whileInView={{ opacity: 0 }}
              viewport={{ margin: "-40% 0px -40% 0px" }}
              className="text-center"
            >
              <h2 className="text-white text-3xl md:text-5xl font-black tracking-tighter opacity-20">
                PRECISION ARCHITECTURE.
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Work Section - Full Screen Immersive */}
        <section id="projects" className="py-24">
          <div className="container-tight mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">SELECTED WORK</h2>
            <p className="text-xl text-brand-secondary font-medium">Deep dives into systems, performance, and architecture.</p>
          </div>
          
          <div className="flex flex-col gap-12 px-6 max-w-7xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Tech Section - Clean Minimal */}
        <section id="stack" className="py-40 bg-surface">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE CORE <br/> STACK.</h2>
              <p className="text-xl text-brand-secondary max-w-sm font-medium leading-relaxed">
                Expertise built on years of debugging, optimizing, and deploying production systems.
              </p>
            </div>
            <TechStack skills={SKILLS} />
          </div>
        </section>

        {/* Experience Section - Horizontal Narrative */}
        <section id="experience" className="py-40">
          <div className="container-tight">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24">EVOLUTION.</h2>
            <ExperienceTimeline experiences={EXPERIENCES} />
          </div>
        </section>

        {/* Contact/CTA - Minimalist Conclusion */}
        <section id="contact" className="py-40 bg-black text-white">
          <div className="container-tight flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-10">
                LET'S BUILD <br/> THE FUTURE.
              </h2>
              <p className="text-xl md:text-2xl opacity-60 max-w-xl mx-auto mb-16 font-medium">
                Currently available for senior systems architecture and distributed systems consultation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <a href="mailto:contact@nexus-sys.io" className="text-xl font-bold hover:text-brand-accent transition-colors">EMAIL</a>
                <a href="#" className="text-xl font-bold hover:text-brand-accent transition-colors">LINKEDIN</a>
                <a href="#" className="text-xl font-bold hover:text-brand-accent transition-colors">GITHUB</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-black text-white/30">
        <div className="container-tight flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            NEXUS ENGINEERING // BUILT ON CLOUD INFRASTRUCTURE
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <span>© 2026</span>
            <span className="text-white/10 italic">OPTIMIZED_FOR_PERFORMANCE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
