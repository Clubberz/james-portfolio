/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStack } from './components/TechStack';
import { ImageSequence } from './components/ImageSequence';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative">
      <ThreeBackground />
      <Navbar />

      <main>
        <Hero />

        {/* TECHNICAL SHOWCASE / ROTATING MODEL */}
        <section className="relative z-10 w-full mb-32">
           <div className="container-tight pt-12 pb-6 flex justify-between items-end border-b border-white/5">
              <div>
                <span className="mono-label mb-2 text-brand-secondary">SHOWCASE_01</span>
                <h2 className="text-3xl font-black tracking-tighter text-white uppercase italic">Interactive_Prototype</h2>
              </div>
              <div className="text-right hidden md:block">
                 <p className="font-mono text-[9px] text-white/20 uppercase tracking-widest">SOLIDWORKS_RENDER // 120_FRAME_SEQUENCE</p>
              </div>
           </div>

           <ImageSequence 
             frameCount={120} 
             basePath="/render/Frame" 
             extension="png" 
           />
        </section>

        {/* TECH STACK - DIRECT VISIBILITY */}
        <section id="stack" className="py-32 relative z-10">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">The <br/> Stack.</h2>
              <p className="text-lg text-white/40 max-w-sm font-medium leading-relaxed">
                A toolkit optimized for precision engineering, high-fidelity simulation, and rapid prototyping.
              </p>
            </div>
            <TechStack skills={SKILLS} />
          </div>
        </section>

        {/* PROJECTS - THE MEAT OF THE PORTFOLIO */}
        <section id="projects" className="py-32 bg-zinc-900/20 backdrop-blur-sm border-y border-white/5">
          <div className="container-tight mb-20 text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">Selected Projects.</h2>
            <p className="text-xl text-white/40 font-medium">From custom vehicle restomods to aerospace-grade simulations.</p>
          </div>
          
          <div className="flex flex-col gap-12 px-6 max-w-7xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 relative z-10">
          <div className="container-tight">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 uppercase text-center md:text-left">The Journey.</h2>
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
                <a href="mailto:jamestjclubley@gmail.com" className="text-xl font-bold hover:text-brand-accent transition-colors">EMAIL</a>
                <a href="https://jamesclubley.com" className="text-xl font-bold hover:text-brand-accent transition-colors">WEBSITE</a>
                <a href="https://github.com/clubberz" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-brand-accent transition-colors">GITHUB</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-black text-white/30">
        <div className="container-tight flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            JAMES CLUBLEY // MECH_ENG @ RICE UNIVERSITY
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <span>© 2026</span>
            <span className="text-white/10 italic">OPTIMIZED_BY_DESIGN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
