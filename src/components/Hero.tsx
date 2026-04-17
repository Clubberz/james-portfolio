/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col items-center justify-center text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl w-full"
      >
        <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 border border-white/10 rounded-full">
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">SYSTEM_STATUS: OPTIMIZED</span>
        </div>

        <h1 className="text-6xl md:text-[9vw] font-black tracking-tighter leading-[0.85] uppercase mb-12 text-white italic transform -skew-x-6">
          Design <br />
          <span className="opacity-40">At Speed.</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-start text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="border-l border-white/10 pl-6 py-2"
          >
            <span className="block font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">01. FOCUS</span>
            <p className="text-sm font-medium text-white/70 leading-relaxed uppercase">Mechanical Design & Aerospace Systems</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="md:col-span-1 border-l border-white/10 pl-6 py-2"
          >
            <span className="block font-mono text-[10px] uppercase tracking-widest text-white/30 mb-2">02. STATUS</span>
            <p className="text-sm font-medium text-white/70 leading-relaxed uppercase">MECH @ Rice University // FSAE Team Lead</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col gap-4"
          >
            <a 
              href="#projects"
              className="bg-white text-black px-6 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white/90 transition-all text-center"
            >
              View Log_026
            </a>
            <div className="flex justify-between items-center px-2">
              <span className="font-mono text-[9px] text-white/20">COORD: 45.32 / -122.67</span>
              <span className="font-mono text-[9px] text-white/20">ID: JC_9921</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
