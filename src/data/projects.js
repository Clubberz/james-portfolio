// Keep all data here; imports read-only in components.
export const PROJECTS = [
  {
    slug: "bmw-k100-build",
    title: "BMW K100 Build",
    stack: "FEA • CAD • Fabrication",
    hero: "/img/k100frame.png",
    summary:
      "Redesigned and fabricated a custom subframe and front-end conversion for a BMW K100, with stress checks and geometry review.",
    bullets: [
      "Tube frame modeling in SolidWorks",
      "Static stress checks via FEA",
      "Fixturing and weld sequence planning",
      "Rake/trail and suspension review",
    ],
    gallery: ["/img/K100_frame_assembly.png", "/img/K100dixer.jpg"],
    links: { view: "#", code: "https://github.com/Clubberz" },
  },
  {
    slug: "bracket-stress-validation",
    title: "Bracket — Stress Validation",
    stack: "FEA • Static",
    hero: "/img/project1.png",
    summary:
      "Von Mises stress map, mesh convergence, and safety factor verification against hand calculations.",
    bullets: [
      "Linear static in ANSYS",
      "Mesh independence study",
      "σ_max within 4% of hand calc",
      "SF assumptions documented",
    ],
    gallery: ["/img/project2.png", "/img/project3.png"],
    links: { view: "#", code: "https://github.com/Clubberz" },
  },
  {
    slug: "eigenvalue-buckling",
    title: "Eigenvalue Buckling Modes",
    stack: "FEA • Buckling",
    hero: "/img/project2.png",
    summary:
      "Mode shapes and critical load factors for a slender frame under axial compression.",
    bullets: ["Top 5 modes extracted", "BC sensitivity", "Slenderness check"],
    gallery: ["/img/project4.png", "/img/project5.png"],
    links: { view: "#", code: "https://github.com/Clubberz" },
  },
  {
    slug: "lightweight-truss",
    title: "Lightweight Truss Optimization",
    stack: "Structures • Opt",
    hero: "/img/project3.png",
    summary:
      "Section sizing to reduce mass while maintaining stiffness targets.",
    bullets: ["15% mass reduction", "Constraint-driven sizing", "DFM-aware"],
    gallery: ["/img/project1.png", "/img/project2.png"],
    links: { view: "#", code: "https://github.com/Clubberz" },
  },
];

export const bySlug = (slug) => PROJECTS.find((p) => p.slug === slug);
