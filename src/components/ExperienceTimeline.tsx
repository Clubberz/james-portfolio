/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Experience } from '../types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ experiences }) => {
  return (
    <div className="flex flex-col gap-20">
      {experiences.map((exp, index) => (
        <motion.div
          key={exp.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="md:col-span-1">
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-brand-secondary">
              {exp.period}
            </span>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-2xl font-bold text-brand-primary mb-2 tracking-tight group-hover:text-brand-accent transition-colors">
              {exp.role}
            </h4>
            <p className="text-lg font-semibold text-brand-accent mb-6">
              {exp.company}
            </p>
            
            <ul className="space-y-4">
              {exp.description.map((item, i) => (
                <li key={i} className="text-brand-secondary text-lg leading-relaxed font-normal flex gap-4">
                  <span className="text-brand-primary opacity-20">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
