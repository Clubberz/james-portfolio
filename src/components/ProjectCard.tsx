/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Auto-play the video on load
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-[60vh] w-full apple-card overflow-hidden block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <Link to={`/project/${project.slug}`} className="absolute inset-0 z-20" aria-label={`View ${project.title} project details`} />
      
      <div className="absolute inset-0">
        {project.video ? (
          <video 
            ref={videoRef}
            src={project.video}
            {...(project.image ? { poster: project.image } : {})}
            muted
            loop
            playsInline
            autoPlay
            className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        ) : project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-zinc-800 transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105" />
        )}
        {/* Subtle persistent gradient for the resting title */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-500" />
        {/* Deep hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
      </div>

      {/* Resting State: Minimal Title (Disappears on Hover) */}
      <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none flex justify-between items-end transition-opacity duration-500 group-hover:opacity-0 text-white">
         <h3 className="text-xl font-bold tracking-tight uppercase shadow-sm">
           {project.title}
         </h3>
         <span className="text-[9px] font-mono tracking-widest uppercase opacity-50 border border-white/20 px-2 py-1 rounded bg-black/40 backdrop-blur-sm">
           0{index + 1}
         </span>
      </div>

      {/* Hover State: Full Description (Appears on Hover) */}
      <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col items-start text-white pointer-events-none z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-3 opacity-80">
          Case Study 0{index + 1}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight uppercase">
          {project.title}
        </h3>
        <p className="text-sm md:text-base max-w-xl opacity-90 leading-relaxed font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-2.5 py-1 text-[9px] uppercase tracking-widest font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
