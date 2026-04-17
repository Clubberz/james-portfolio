/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Skill } from '../types';

interface TechStackProps {
  skills: Skill[];
}

export const TechStack: React.FC<TechStackProps> = ({ skills }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col"
        >
          <h4 className="text-xl font-bold mb-8 text-brand-primary">
            {skill.category}
          </h4>
          
          <ul className="space-y-6">
            {skill.items.map(item => (
              <li key={item} className="flex flex-col gap-1 border-b border-black/5 pb-4 last:border-0 hover:border-brand-accent/30 transition-colors">
                <span className="text-lg font-medium tracking-tight text-brand-primary">
                  {item}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-secondary opacity-50">
                  Ready to deploy
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
};
