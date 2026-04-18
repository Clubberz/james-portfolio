import React, { useState, useMemo } from 'react';
import { Hero } from '../components/Hero';
import { ProjectCard } from '../components/ProjectCard';
import { ExperienceTimeline } from '../components/ExperienceTimeline';
import { TechStack } from '../components/TechStack';
import { PROJECTS, EXPERIENCES, SKILLS } from '../constants';
import { motion } from 'motion/react';

export const Home: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(proj => proj.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Sort projects so matched ones render first
  const sortedProjects = useMemo(() => {
    if (!selectedTag) return PROJECTS;
    return [...PROJECTS].sort((a, b) => {
      const aMatch = a.tags.includes(selectedTag);
      const bMatch = b.tags.includes(selectedTag);
      if (aMatch && !bMatch) return -1;
      if (!aMatch && bMatch) return 1;
      return 0;
    });
  }, [selectedTag]);

  return (
    <main>
      <Hero />

      {/* PROJECTS - THE MEAT OF THE PORTFOLIO */}
      <section id="projects" className="py-16 bg-zinc-900/20 backdrop-blur-sm border-y border-white/5 shadow-2col">
        <div className="container-tight mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">Selected Projects.</h2>
          <p className="text-lg text-white/40 font-medium mb-8">From custom vehicle restomods to aerospace-grade simulations.</p>
          
          {/* Tag Filter UI */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-colors border ${
                selectedTag === null ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full transition-colors border ${
                  selectedTag === tag ? 'bg-brand-accent text-black border-brand-accent' : 'bg-transparent text-white/40 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 max-w-7xl mx-auto align-top">
          {sortedProjects.map((project, i) => {
            const isFaded = selectedTag && !project.tags.includes(selectedTag);
            return (
              <div key={project.id} className={`transition-opacity duration-700 ${isFaded ? 'opacity-30 grayscale saturate-0 pointer-events-none' : 'opacity-100'}`}>
                <ProjectCard project={project} index={i} />
              </div>
            );
          })}
        </div>
      </section>

      {/* TECH STACK - DIRECT VISIBILITY */}
      <section id="stack" className="py-24 relative z-10">
        <div className="container-tight">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase">The <br/> Stack.</h2>
            <p className="text-base text-white/40 max-w-sm font-medium leading-relaxed">
              A toolkit optimized for precision engineering, high-fidelity simulation, and rapid prototyping.
            </p>
          </div>
          <TechStack skills={SKILLS} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative z-10">
        <div className="container-tight">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-16 uppercase text-center md:text-left">The Journey.</h2>
          <ExperienceTimeline experiences={EXPERIENCES} />
        </div>
      </section>

      {/* Contact/CTA - Minimalist Conclusion */}
      <section id="contact" className="py-32 bg-black text-white border-t border-white/5">
        <div className="container-tight flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              LET'S BUILD <br/> THE FUTURE.
            </h2>
            <p className="text-lg opacity-60 max-w-xl mx-auto mb-12 font-medium">
              Currently available for senior systems architecture and distributed systems consultation.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8">
              <a href="mailto:jamestjclubley@gmail.com" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">EMAIL</a>
              <a href="https://jamesclubley.com" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">WEBSITE</a>
              <a href="https://github.com/clubberz" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">GITHUB</a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
