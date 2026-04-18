import React from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { TechStack } from '../components/TechStack';
import { PROJECTS, EXPERIENCES, SKILLS } from '../constants';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  return (
    <main>
      <Hero />

      {/* PROJECTS - THE MEAT OF THE PORTFOLIO */}
      <section id="projects" className="py-24 bg-zinc-900/20 backdrop-blur-sm border-y border-white/5 shadow-2col">
        <div className="container-tight mb-20 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-4">Selected Projects.</h2>
          <p className="text-xl text-white/40 font-medium">From custom vehicle restomods to aerospace-grade simulations.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
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

      {/* Experience Section */}
      <section id="experience" className="py-32 relative z-10">
        <div className="container-tight">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24 uppercase text-center md:text-left">The Journey.</h2>
          <ExperienceTimeline experiences={EXPERIENCES} />
        </div>
      </section>

      {/* Contact/CTA - Minimalist Conclusion */}
      <section id="contact" className="py-40 bg-black text-white border-t border-white/5">
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
  );
};
