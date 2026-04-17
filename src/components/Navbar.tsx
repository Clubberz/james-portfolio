/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-5xl glass-nav px-8 py-3 rounded-full flex items-center justify-between"
      >
        <div className="text-sm font-black tracking-tighter text-brand-primary">
          EX/CORE
        </div>
        
        <div className="flex items-center gap-10 text-[10px] font-bold uppercase tracking-widest text-brand-secondary">
          <a href="#projects" className="hover:text-brand-primary transition-colors cursor-pointer">Work</a>
          <a href="#experience" className="hover:text-brand-primary transition-colors cursor-pointer">Exp</a>
          <a href="#stack" className="hover:text-brand-primary transition-colors cursor-pointer">Tech</a>
          <a href="#contact" className="hover:text-brand-primary transition-colors cursor-pointer">Contact</a>
        </div>
      </motion.div>
    </nav>
  );
};
