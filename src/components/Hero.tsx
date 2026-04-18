/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="/images/aibanner.png" 
          alt="Racecar driver background overlay" 
          className="w-full h-full object-cover filter contrast-110 brightness-[0.70] mix-blend-luminosity opacity-70 scale-105"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to blend it heavily into the dark theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#171717] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#171717] via-[#171717]/40 to-transparent" />
      </div>

      <div className="container-tight w-full relative z-10 text-left flex justify-start">
        
        {/* Intro Text */}
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/70">SYSTEM_ONLINE // PROTOCOL_V1.1</span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-6 uppercase leading-[0.85] drop-shadow-2xl italic transform -skew-x-6 pr-4">
            Hi, I'm <br className="md:hidden" />
            <span className="text-brand-secondary drop-shadow-2xl">James</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed mb-8 backdrop-blur-sm">
            A Mechanical & Aerospace Engineer at Rice University, spending my time at the intersection of high-fidelity analysis and hands-on fabrication.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center mt-10 pt-8 border-t border-white/10">
            <a 
              href="mailto:jamestjclubley@gmail.com"
              className="px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              Get In Touch
            </a>
            <a 
              href="#projects"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors"
            >
              / VIEW_ARCHIVE
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
