import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Markdown from 'react-markdown';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-32 pb-24 relative z-10"
    >
      <div className="container-tight">
        {/* Navigation / Header */}
        <div className="mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap gap-4 items-center border-b border-white/10 pb-12 mb-12">
            <span className="mono-label px-3 py-1 bg-white/5 border border-white/10 uppercase">
              {project.year}
            </span>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                <Github className="w-4 h-4" /> Source Code
              </a>
            )}
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Media Block */}
        <div className="w-full aspect-video bg-zinc-900 overflow-hidden rounded-[2rem] border border-white/5 mb-16 relative group">
          {project.video ? (
            <video 
              src={project.video}
              {...(project.image ? { poster: project.image } : {})}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-zinc-800" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Restructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Sidebar: Meta & Tags */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/5 pb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1.5 text-xs font-bold rounded-md bg-white/5 border border-white/10 text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4 border-b border-white/5 pb-2">Abstract</h3>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Main Body: Markdown Rendering */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-2xl max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:font-medium
              prose-a:text-brand-accent prose-a:no-underline hover:prose-a:text-white prose-a:transition-colors
              prose-strong:text-white prose-strong:font-black
              prose-li:text-white/70 prose-li:font-medium marker:text-white/30
              prose-blockquote:border-l-brand-accent prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:rounded-r-xl"
            >
              <Markdown>{project.content}</Markdown>
            </div>
          </div>

        </div>
      </div>
    </motion.main>
  );
};
