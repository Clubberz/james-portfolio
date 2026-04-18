/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { ColorSelector } from './components/ColorSelector';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

export default function App() {
  return (
    <Router>
      <div className="relative">
        <ThreeBackground />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
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

        <ColorSelector />
      </div>
    </Router>
  );
}
