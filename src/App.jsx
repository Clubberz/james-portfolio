import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

/**  Porsche-like feel: stark layouts, big imagery, calm spacing, crisp type  **/
export default function App() {
  return (
    <div>

      {/* ---- NAV ---- */}
      <nav className="border-b border-white/10">
        <div className="container h-[68px] flex items-center justify-between">
          <a href="/" className="text-[13px] tracking-[0.28em] uppercase text-neutral-300 hover:text-white transition">
            JAMES CLUBLEY
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#work" className="nav-link">Work</a>
            <a href="#capabilities" className="nav-link">Capabilities</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>
        </div>
      </nav>

      {/* ---- HERO ---- */}
      <header className="border-b border-white/10">
        <div className="container py-12 md:py-16">
          <p className="eyebrow">Mechanical Engineering Portfolio</p>
          <h1 className="h1 mt-2">
            Engineering that blends <span className="text-neutral-400">precision</span> and <span className="text-neutral-400">performance</span>.
          </h1>
          <p className="max-w-[720px] text-neutral-300 mt-5">
            Simulation-driven design, fast iteration, and validated results. Focus on structural FEA,
            CAD for manufacturability, and rigorous documentation.
          </p>

          <div className="flex items-center gap-3 mt-8">
            <a className="btn primary" href="mailto:you@example.com">Start a conversation</a>
            <a className="btn" href="#work">See the work</a>
          </div>
        </div>

        {/* hero image strip */}
        <div className="ratio-21x9">
          {/* Put a wide hero image at public/hero.jpg */}
          <img src="/hero.jpg" alt="Hero" className="img-cover" />
        </div>
      </header>

      {/* ---- FEATURE STRIP ---- */}
      <section className="container section" id="work">
        <div className="grid-12">
          {/* Lead card */}
          <article className="lift panel col-span-12 md:col-span-7 overflow-hidden">
            <div className="ratio-21x9">
              <img src="/img/fea-hero.jpg" alt="FEA Lead" className="img-cover" />
            </div>
            <div className="p-6 md:p-8">
              <p className="eyebrow">Case Study</p>
              <h2 className="h2 mt-1">Bracket — Stress Validation</h2>
              <p className="text-neutral-300 mt-3">
                Von Mises stress map, mesh convergence, and safety factor verification against hand calcs.
              </p>
              <div className="flex items-center gap-2 mt-5">
                <a className="link" href="#">View case <ArrowUpRight size={16} className="inline ml-1" /></a>
                <span className="chip dot">FEA</span>
              </div>
            </div>
          </article>

          {/* Two secondary cards */}
          <article className="lift panel col-span-12 md:col-span-5 overflow-hidden">
            <div className="ratio-21x9">
              <img src="/img/buckling.jpg" alt="Buckling" className="img-cover" />
            </div>
            <div className="p-6 md:p-7">
              <p className="eyebrow">Study</p>
              <h3 className="text-xl font-semibold tracking-[-0.01em]">Eigenvalue Buckling Modes</h3>
              <p className="text-neutral-300 mt-2">Critical loads and mode shapes for a frame under axial compression.</p>
            </div>
          </article>

          <article className="lift panel col-span-12 md:col-span-5 overflow-hidden">
            <div className="ratio-21x9">
              <img src="/img/truss.jpg" alt="Truss" className="img-cover" />
            </div>
            <div className="p-6 md:p-7">
              <p className="eyebrow">Optimization</p>
              <h3 className="text-xl font-semibold tracking-[-0.01em]">Lightweight Truss</h3>
              <p className="text-neutral-300 mt-2">Topology and section sizing to reduce mass while maintaining stiffness.</p>
            </div>
          </article>
        </div>

        <div className="hr my-10"></div>

        {/* Gallery row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <img src="/img/detail-1.jpg" className="rounded-xl lift" alt="detail 1" />
          <img src="/img/detail-2.jpg" className="rounded-xl lift" alt="detail 2" />
          <img src="/img/detail-3.jpg" className="rounded-xl lift" alt="detail 3" />
          <img src="/img/detail-4.jpg" className="rounded-xl lift" alt="detail 4" />
        </div>
      </section>

      {/* ---- CAPABILITIES ---- */}
      <section className="border-t border-white/10 bg-black/20" id="capabilities">
        <div className="container section">
          <p className="eyebrow">Capabilities</p>
          <h2 className="h2 mt-2">From concept to validated prototype.</h2>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <Capability
              title="Structural FEA"
              items={["Linear static", "Modal / buckling", "Mesh studies", "SF verification"]}
            />
            <Capability
              title="CAD & DFM"
              items={["SolidWorks", "Tolerance/fit", "BOMs", "Drawings"]}
            />
            <Capability
              title="Prototyping"
              items={["3D printing", "Composites", "Fixture design", "Test plans"]}
            />
          </div>
        </div>
      </section>

      {/* ---- ABOUT ---- */}
      <section className="container section" id="about">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="h2 mt-2">Methodical. Fast. Documented.</h2>
            <p className="text-neutral-300 mt-4">
              Placeholder bio. Focus on crisp communication, pragmatic trade-offs, and engineering
              decisions that stand up to scrutiny.
            </p>
          </div>
          <div className="panel overflow-hidden lift">
            <div className="ratio-21x9">
              <img src="/portrait.jpg" className="img-cover" alt="Portrait" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- CONTACT ---- */}
      <footer className="border-t border-white/10" id="contact">
        <div className="container section">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="h2 mt-2">Let’s build something ambitious.</h2>
              <p className="text-neutral-300 mt-3">Email for roles, collaborations, or questions.</p>
              <div className="flex gap-3 mt-6">
                <a className="btn primary" href="mailto:you@example.com">Email</a>
                <a className="btn" target="_blank" rel="noreferrer" href="https://github.com/Clubberz">
                  <Github size={18} className="mr-2" /> GitHub
                </a>
                <a className="btn" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/YOUR-LINKEDIN">
                  <Linkedin size={18} className="mr-2" /> LinkedIn
                </a>
              </div>
            </div>
            <a className="text-sm text-neutral-400 hover:text-white transition flex items-center gap-1" href="#">
              Download résumé <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hr my-8"></div>
          <div className="text-xs text-neutral-500 flex items-center justify-between">
            <span>© {new Date().getFullYear()} James Clubley</span>
            <a className="hover:text-neutral-300 transition" href="#top">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Capability({ title, items }) {
  return (
    <div className="panel p-6">
      <h3 className="text-lg font-semibold tracking-[-0.01em]">{title}</h3>
      <ul className="mt-3 space-y-1 text-neutral-300">
        {items.map((it) => <li key={it}>• {it}</li>)}
      </ul>
    </div>
  );
}
