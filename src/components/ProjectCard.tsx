/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { HoverImageSequence } from './HoverImageSequence';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="group relative h-[70vh] w-full apple-card overflow-hidden"
    >
      <div className="absolute inset-0">
        {project.id === '1' ? (
          <HoverImageSequence basePath="/render/Frame" extension="png" />
        ) : (
          <img 
            src={project.image} 
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-[2s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/80 pointer-events-none" />
      </div>

      <div className="absolute bottom-16 left-16 right-16 flex flex-col items-start text-white pointer-events-none">
        <span className="text-sm font-bold uppercase tracking-widest mb-4 opacity-80">
          Case Study 0{index + 1}
        </span>
        <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-lg md:text-xl max-w-xl opacity-90 leading-relaxed font-medium">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-8">
          {project.tags.map(tag => (
            <span 
              key={tag}
              className="px-4 py-2 text-xs font-bold rounded-full bg-white/10 backdrop-blur-md border border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
