/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6 md:p-10 pointer-events-none">
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-7xl glass-nav px-8 py-4 rounded-full flex items-center justify-between pointer-events-auto"
      >
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-white flex items-center justify-center">
            <span className="text-black font-black text-xs">JC</span>
          </div>
          <div className="hidden md:block">
            <div className="text-[10px] font-black tracking-tighter text-white leading-none">JAMES_CLUBLEY</div>
            <div className="text-[8px] font-mono text-white/30 tracking-widest leading-none">AERO_MECH_ENG</div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 md:gap-10 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">
          <a href="#projects" className="hover:text-white transition-colors cursor-pointer">/WORK</a>
          <a href="#experience" className="hover:text-white transition-colors cursor-pointer">/ARCHIVE</a>
          <a href="#contact" className="hover:text-white transition-colors cursor-pointer underline decoration-white/20 underline-offset-4">/INIT_CONTACT</a>
        </div>
      </motion.div>
    </nav>
  );
};
