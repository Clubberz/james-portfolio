export const PROJECTS = [
  {
    slug: 'bracket-stress-validation',
    title: 'Bracket — Stress Validation',
    stack: 'FEA • Static',
    hero: '/img/project1.png',
    summary:
      'Von Mises stress map, mesh convergence, and safety factor verification against hand calculations.',
    bullets: [
      'Linear static analysis in ANSYS',
      'Mesh independence study',
      'σmax vs. hand calc correlation within 4%',
      'Documented SF assumptions and constraints',
    ],
    gallery: ['/img/project2.png', '/img/project3.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'eigenvalue-buckling',
    title: 'Eigenvalue Buckling Modes',
    stack: 'FEA • Buckling',
    hero: '/img/project2.png',
    summary:
      'Mode shape extraction and critical load factors for a slender frame under axial compression.',
    bullets: ['Top 5 modes extracted', 'BC sensitivity', 'Critical load vs. slenderness'],
    gallery: ['/img/project4.png', '/img/project5.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'lightweight-truss',
    title: 'Lightweight Truss Optimization',
    stack: 'Structures • Opt',
    hero: '/img/project3.png',
    summary:
      'Section sizing and topology tweaks to reduce mass while maintaining stiffness targets.',
    bullets: ['15% mass reduction', 'Constraint-driven sizing', 'Manufacturing-aware geometry'],
    gallery: ['/img/project1.png', '/img/project2.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'clevis-link-study',
    title: 'Clevis Link Study',
    stack: 'Fatigue • SF',
    hero: '/img/project4.png',
    summary:
      'Evaluated fatigue life under cyclic loading conditions and verified safety factors.',
    bullets: ['Alt stress ranges', 'Mean stress corrections'],
    gallery: ['/img/project5.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
  {
    slug: 'assembly-and-fixtures',
    title: 'Assembly & Fixtures',
    stack: 'CAD • DFM',
    hero: '/img/project5.png',
    summary:
      'Fixtures and assembly CAD with drawings, BOMs, and manufacturing notes.',
    bullets: ['Tolerance/fit', 'BOM & drawings', 'Print fixtures'],
    gallery: ['/img/project3.png'],
    links: { view: '#', code: 'https://github.com/Clubberz' },
  },
];

// quick helpers
export const bySlug = (slug) => PROJECTS.find(p => p.slug === slug);
