import React, { useEffect, useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github, ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';
import Markdown from 'react-markdown';
import { PROJECTS } from '../constants';

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [dynamicGallery, setDynamicGallery] = useState<string[]>([]);
  const [loadingGallery, setLoadingGallery] = useState(true);
  
  // Fetch dynamic gallery from physical folders
  useEffect(() => {
    if (!slug) return;
    
    // reset
    setCurrentImageIndex(0);
    setLoadingGallery(true);
    setDynamicGallery([]);
    
    fetch(`/api/project-images?slug=${slug}&t=${Date.now()}`)
      .then(res => {
         if (!res.ok) throw new Error("HTTP error " + res.status);
         return res.json();
      })
      .then(files => {
        if (Array.isArray(files) && files.length > 0) {
          setDynamicGallery(files);
        }
      })
      .catch(err => {
        console.error("Failed to fetch custom project photos: ", err);
      })
      .finally(() => {
        setLoadingGallery(false);
      });

    window.scrollTo(0, 0);
  }, [slug]);

  const project = PROJECTS.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const related = project.relatedProjects
    ?.map(relatedSlug => PROJECTS.find(p => p.slug === relatedSlug))
    .filter((p): p is typeof PROJECTS[0] => p !== undefined);

  // Combine fetched dynamic gallery with static gallery if you like, or just prefer dynamic
  // preferring dynamic folder images over hardcoded ones in constants
  const activeGallery = dynamicGallery.length > 0 ? dynamicGallery : (project.gallery || []);

  const nextImage = () => {
    if (activeGallery.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = () => {
    if (activeGallery.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };

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
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Portfolio
          </Link>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6 leading-none">
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

        {/* Media Block (Carousel or Single Content) */}
        <div className="w-full aspect-video bg-zinc-900 overflow-hidden rounded-[2rem] border border-white/5 mb-16 relative group">
          {loadingGallery ? (
            <div className="w-full h-full flex flex-col items-center justify-center relative z-20">
              <ImageIcon className="w-10 h-10 text-white/20 mb-4 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-white/40">Loading Media...</span>
            </div>
          ) : activeGallery.length > 0 ? (
             <div className="w-full h-full relative flex items-center justify-center">
               <img 
                 key={currentImageIndex} // force re-render for clean transition
                 src={activeGallery[currentImageIndex]} 
                 alt={`${project.title} gallery frame ${currentImageIndex + 1}`}
                 className="w-full h-full object-cover animate-in fade-in duration-500"
                 referrerPolicy="no-referrer"
               />
               
               {/* Controls */}
               {activeGallery.length > 1 && (
                 <div className="absolute inset-x-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button 
                      onClick={prevImage} 
                      className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/90 hover:scale-110 transition-all border border-white/10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage} 
                      className="p-3 bg-black/60 backdrop-blur-md rounded-full text-white hover:bg-black/90 hover:scale-110 transition-all border border-white/10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                 </div>
               )}
               
               {/* Indicators */}
               {activeGallery.length > 1 && (
                 <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
                    {activeGallery.map((_, i) => (
                       <button 
                         key={i} 
                         onClick={() => setCurrentImageIndex(i)} 
                         className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentImageIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'}`} 
                         aria-label={`Go to slide ${i + 1}`}
                       />
                    ))}
                 </div>
               )}
            </div>
          ) : project.video ? (
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
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-800">
               <ImageIcon className="w-12 h-12 text-white/10 mb-4" />
               <span className="font-mono text-xs uppercase tracking-widest text-white/30">No Media Available</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Restructure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Sidebar: Meta & Tags */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 border-b border-white/5 pb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 text-[10px] uppercase font-bold rounded-md bg-white/5 border border-white/10 text-white/80">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3 border-b border-white/5 pb-2">Abstract</h3>
              <p className="text-base text-white/80 leading-relaxed font-medium">
                {project.description}
              </p>
            </div>
          </div>

          {/* Right Main Body: Markdown Rendering */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
              prose-p:text-white/70 prose-p:leading-relaxed prose-p:font-medium
              prose-a:text-brand-accent prose-a:no-underline hover:prose-a:text-white prose-a:transition-colors
              prose-strong:text-white prose-strong:font-black
              prose-li:text-white/70 prose-li:font-medium marker:text-white/30
              prose-blockquote:border-l-brand-accent prose-blockquote:bg-white/5 prose-blockquote:px-6 prose-blockquote:py-4 prose-blockquote:not-italic prose-blockquote:rounded-r-xl"
            >
              <Markdown
                components={{
                  img: ({ node, ...props }) => (
                    <figure className="my-16 max-w-5xl mx-auto">
                      <div className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
                        <img 
                          {...props} 
                          className="w-full h-auto mt-0 mb-0 pointer-events-none" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      {props.alt && (
                        <figcaption className="mt-4 text-center text-sm font-mono tracking-wide text-white/40 uppercase">
                          {props.alt}
                        </figcaption>
                      )}
                    </figure>
                  )
                }}
              >
                {project.content}
              </Markdown>
            </div>
          </div>

        </div>

        {/* Related Projects Section */}
        {related && related.length > 0 && (
          <div className="mt-40 pt-20 border-t border-white/10">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-10 text-white/50">
              Related Engineering
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {related.map(r => (
                <Link key={r.id} to={`/project/${r.slug}`} className="group block">
                  <div className="w-full aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 mb-6 relative">
                    {r.image && (
                      <img 
                        src={r.image} 
                        alt={r.title} 
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-brand-accent transition-colors">
                    {r.title}
                  </h3>
                  <p className="text-white/50 font-medium">
                    {r.description.substring(0, 80)}...
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </motion.main>
  );
};
