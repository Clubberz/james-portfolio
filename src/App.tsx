/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { TechStack } from './components/TechStack';
import { ImageSequence } from './components/ImageSequence';
import { PROJECTS, EXPERIENCES, SKILLS } from './constants';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative">
      <ThreeBackground />
      <Navbar />

      <main>
        <Hero />

        {/* 3D INTERACTIVE SEQUENCE - SOLIDWORKS RENDER */}
        <section className="relative z-10 w-full">
           <div className="container-tight pt-24 pb-12 flex justify-between items-end border-b border-white/5">
              <div>
                <span className="mono-label mb-2">INTERFACE_SEQUENCE_01</span>
                <h2 className="text-4xl font-black tracking-tighter text-white">INTERACTIVE_RENDER</h2>
              </div>
              <div className="text-right hidden md:block">
                 <p className="font-mono text-[9px] text-white/20 uppercase tracking-widest">SOURCE: SOLIDWORKS_VISUALIZE</p>
                 <p className="font-mono text-[9px] text-white/20 uppercase tracking-widest">SAMPLING: 1000_PAS_DENOISE</p>
              </div>
           </div>

           <ImageSequence 
             frameCount={120} 
             basePath="/render/Frame" 
             extension="png" 
           />
        </section>

        {/* System Breakdown Bento Section */}
        <section className="py-24 relative z-10">
          <div className="container-tight grid grid-cols-1 md:grid-cols-12 gap-6 px-6">
            <div className="md:col-span-8 bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-12 overflow-hidden relative group">
              <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                <span className="font-mono text-[10px] uppercase tracking-widest leading-relaxed">SYSTEM_VISUALIZATION_A_01</span>
              </div>
              <h3 className="text-3xl font-black tracking-tighter text-white mb-6">UNIFIED_SYSTEMS_CONTROL</h3>
              <p className="text-white/40 max-w-md font-medium leading-relaxed mb-8">
                Visualizing data flow and latency across globally distributed nodes in real-time. 
                Our architecture ensures 99.999% reliability under peak load.
              </p>
              <div className="aspect-video bg-black/40 border border-white/10 rounded overflow-hidden relative">
                 <img 
                   src="https://picsum.photos/seed/engineering/1920/1080?blur=2" 
                   className="w-full h-full object-cover opacity-50 contrast-125 grayscale" 
                   referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-8 border border-white/10 backdrop-blur-md rounded-full animate-ping opacity-20" />
                 </div>
              </div>
            </div>

            <div className="md:col-span-4 flex flex-col gap-6">
              <div className="flex-1 bg-zinc-900/50 backdrop-blur-xl border border-white/5 p-8 flex flex-col justify-between">
                <div>
                   <span className="block font-mono text-[9px] text-white/20 mb-4 uppercase tracking-[0.2em]">NODE_INFO</span>
                   <h4 className="text-xl font-black tracking-tighter text-white mb-2 underline decoration-white/10 offset-4">LATENCY_MINIMIZATION</h4>
                   <p className="text-xs text-white/50 font-medium leading-relaxed">Edges cached. Traffic routed. Performance optimized at the packet level.</p>
                </div>
                <div className="h-20 flex items-end gap-1">
                  {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                      className="flex-1 bg-white/20"
                    />
                  ))}
                </div>
              </div>

              <div className="flex-1 bg-white text-black p-8 flex flex-col justify-between">
                <h4 className="text-4xl font-black tracking-tighter leading-none">CONNECT_ <br/> GLOBALLY.</h4>
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Ready for scale.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section - Full Screen Immersive */}
        <section id="projects" className="py-24">
          <div className="container-tight mb-20">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4">SELECTED WORK</h2>
            <p className="text-xl text-brand-secondary font-medium">Deep dives into systems, performance, and architecture.</p>
          </div>
          
          <div className="flex flex-col gap-12 px-6 max-w-7xl mx-auto">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </section>

        {/* Tech Section - Clean Minimal */}
        <section id="stack" className="py-40 bg-surface">
          <div className="container-tight">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter">THE CORE <br/> STACK.</h2>
              <p className="text-xl text-brand-secondary max-w-sm font-medium leading-relaxed">
                Expertise built on years of debugging, optimizing, and deploying production systems.
              </p>
            </div>
            <TechStack skills={SKILLS} />
          </div>
        </section>

        {/* Experience Section - Horizontal Narrative */}
        <section id="experience" className="py-40">
          <div className="container-tight">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-24">EVOLUTION.</h2>
            <ExperienceTimeline experiences={EXPERIENCES} />
          </div>
        </section>

        {/* Contact/CTA - Minimalist Conclusion */}
        <section id="contact" className="py-40 bg-black text-white">
          <div className="container-tight flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="mb-12"
            >
              <h2 className="text-6xl md:text-[8rem] font-black tracking-tighter leading-none mb-10">
                LET'S BUILD <br/> THE FUTURE.
              </h2>
              <p className="text-xl md:text-2xl opacity-60 max-w-xl mx-auto mb-16 font-medium">
                Currently available for senior systems architecture and distributed systems consultation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-12">
                <a href="mailto:contact@nexus-sys.io" className="text-xl font-bold hover:text-brand-accent transition-colors">EMAIL</a>
                <a href="#" className="text-xl font-bold hover:text-brand-accent transition-colors">LINKEDIN</a>
                <a href="#" className="text-xl font-bold hover:text-brand-accent transition-colors">GITHUB</a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-20 bg-black text-white/30">
        <div className="container-tight flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-[10px] font-black uppercase tracking-[0.3em]">
            NEXUS ENGINEERING // BUILT ON CLOUD INFRASTRUCTURE
          </div>
          <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
            <span>© 2026</span>
            <span className="text-white/10 italic">OPTIMIZED_FOR_PERFORMANCE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
