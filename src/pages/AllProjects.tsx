import React, { useState, useMemo } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../constants';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AllProjects: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(proj => proj.tags.forEach(t => tags.add(t)));
    return Array.from(tags).sort();
  }, []);

  // Filter projects (in the dedicated page, we might just hide non-matching ones completely instead of fading them, or fade them. Let's keep the fading effect for consistency, or since it's the "all" page, strictly filtering them might be better! Let's strictly filter here for a true 'filter' experience).
  // Actually, consistency with the home page is nice. Let's sort them like Home.
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
    <main className="min-h-screen pt-40 pb-24 relative z-10 bg-black">
      <div className="container-tight">
        
        <div className="mb-16">
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest mb-8">
            <ArrowLeft className="w-4 h-4" /> Return to Base
          </Link>

          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4 leading-none">
            All Projects.
          </h1>
          <p className="text-lg text-white/40 font-medium mb-12 max-w-2xl">
            A comprehensive archive of engineering design, analysis, and fabrication work.
          </p>

          {/* Tag Filter UI */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-4 py-2 cursor-pointer text-xs font-bold uppercase tracking-widest rounded-full transition-colors border ${
                selectedTag === null ? 'bg-white text-black border-white' : 'bg-transparent text-white/40 border-white/10 lg:hover:border-white/30'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-4 py-2 cursor-pointer text-xs font-bold uppercase tracking-widest rounded-full transition-colors border ${
                  selectedTag === tag ? 'bg-brand-accent text-black border-brand-accent' : 'bg-transparent text-white/40 border-white/10 lg:hover:border-white/30 lg:hover:text-white'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 align-top">
          <AnimatePresence mode="popLayout">
            {sortedProjects.map((project, i) => {
              const isFaded = selectedTag && !project.tags.includes(selectedTag);
              return (
                <motion.div 
                  layout
                  key={project.id} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className={`transition-opacity duration-700 ${isFaded ? 'opacity-30 grayscale saturate-0 pointer-events-none' : 'opacity-100'}`}
                >
                  <ProjectCard project={project} index={i} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </main>
  );
};
