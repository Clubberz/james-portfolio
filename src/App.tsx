/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { Photography } from './pages/Photography';
import { AllProjects } from './pages/AllProjects';

export default function App() {
  return (
    <Router>
      <div className="relative pt-8"> {/* added pt-8 to account for the sticky banner */}
        {/* Global WIP Banner */}
        <div className="fixed top-0 left-0 w-full z-[100] bg-zinc-900 border-b border-white/5 text-center py-1.5 flex justify-center items-center gap-3 backdrop-blur-md">
           <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse" />
           <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-white/50">
             Warning: Layout under construction // Work in progress
           </span>
        </div>

        <ThreeBackground />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/photography" element={<Photography />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Routes>

        <footer className="py-20 bg-black text-white/30 border-t border-white/5 relative z-10">
          <div className="container-tight flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-[10px] font-black uppercase tracking-[0.3em]">
              JAMES CLUBLEY // MECH_ENG @ RICE UNIVERSITY
            </div>
            <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em]">
              <span>© 2026</span>
              <span className="text-white/10 italic">OPTIMIZED_BY_DESIGN</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
