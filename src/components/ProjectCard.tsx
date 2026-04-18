/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Ignore play interruption errors when hovering quickly
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none" />
      </div>

      <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 md:right-12 flex flex-col items-start text-white pointer-events-none z-10">
        <span className="text-xs font-bold uppercase tracking-widest mb-3 opacity-80">
          Case Study 0{index + 1}
        </span>
        <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-tight">
          {project.title}
        </h3>
        <p className="text-base md:text-lg max-w-xl opacity-90 leading-relaxed font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-3 py-1.5 text-[10px] md:text-xs font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
