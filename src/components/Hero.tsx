/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

export const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center pt-24 pb-12 px-6">
      <div className="container-tight w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
        
        {/* Profile and Intro */}
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-white/10 rounded-full bg-white/5">
            <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/50">SYSTEM_ONLINE // PROTOCOL_V1.1</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-mono font-bold tracking-tight text-white mb-6 uppercase">
            Hi, I'm <br className="md:hidden" />
            <span className="text-brand-secondary">James</span>
            <span className="animate-pulse text-brand-accent ml-2">_</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 font-medium max-w-xl leading-relaxed mb-8">
            A Mechanical & Aerospace Engineer at Rice University, spending my time at the intersection of high-fidelity analysis and hands-on fabrication.
          </p>
          
          <div className="flex flex-wrap gap-8 items-center mt-10 pt-8 border-t border-white/5">
            <a 
              href="mailto:jamestjclubley@gmail.com"
              className="px-6 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              Get In Touch
            </a>
            <a 
              href="#projects"
              className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              / VIEW_ARCHIVE
            </a>
          </div>
        </motion.div>

        {/* Profile Image Container */}
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="aspect-square bg-zinc-900 border border-white/10 p-3 relative group">
            <div className="absolute top-0 right-0 p-4 z-20">
                <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">ID_JC_9921</div>
            </div>
            <div className="w-full h-full bg-zinc-800 relative overflow-hidden">
               <img 
                 src="/images/james.png" 
                 alt="James Clubley"
                 className="w-full h-full object-cover filter contrast-125 brightness-75 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" 
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            </div>
            
            {/* Geometric accents */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-white/40" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-white/40" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
