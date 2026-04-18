import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'BMW K100 Restomod',
    description: 'Custom frame and suspension development. Engineered a cantilever suspension to eliminate stock mount points, significantly improving vehicle dynamics through 3D photogrammetry and FEA.',
    tags: ['Mechanical Design', 'FEA', 'Photogrammetry', 'Fabrication'],
    github: 'https://github.com/clubberz',
    image: '/images/bmwk100.jpg',
    video: '/videos/showcase.mp4',
    year: '2024'
  },
  {
    id: '2',
    title: '944 Turbo Race Rebuild',
    description: 'Complete powertrain modernization. Integrated a MegaSquirt ECU for modern fuel/ignition control and designed a high-downforce aerodynamic package including a custom splitter and rear wing.',
    tags: ['ECU Tuning', 'Aerodynamics', 'Engine Building'],
    github: 'https://github.com/clubberz',
    image: '/images/porsche-944.jpg',
    year: '2024'
  },
  {
    id: '3',
    title: 'Liquid Fuel Engine',
    description: 'Critical component design for Rice Eclipse’s liquid fuel rocket project. Utilized extensive CFD, FEA, and thermal analysis to optimize thrust and system reliability.',
    tags: ['Aerospace', 'CFD', 'Thermal Analysis'],
    github: 'https://github.com/clubberz',
    image: '/images/rocket-engine.jpg',
    year: '2023'
  },
  {
    id: '4',
    title: 'Solar Powered Race Car',
    description: 'Retrofitted an ICE go-kart with an electric powertrain and solar array. Improved total system efficiency by ~20% through aggressive weight reduction and redesign.',
    tags: ['EV Architecture', 'Solar', 'Efficiency'],
    github: 'https://github.com/clubberz',
    image: '/images/solar-car.jpg',
    year: '2022'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'Rice Racing (FSAE)',
    role: 'Founding Powertrain Team Lead',
    period: '2025 - Present',
    description: [
      'Leading end-to-end design of the powertrain for Rice University’s first-ever FSAE vehicle.',
      'Validated custom 3D-printed intake plenum using CFD/1D simulation to optimize airflow.',
      'Designed high-stress rear axle mounts verified through FEA analysis.',
      'Managing integration of fuel systems, axle geometry, and ECU tuning.'
    ]
  },
  {
    id: 'exp2',
    company: 'Clubley Surfboards',
    role: 'Founder & Builder',
    period: '2019 - 2025',
    description: [
      'Established a specialized surfboard repair and customization service.',
      'Managed all technical design and composite fabrication for high-performance boards.',
      'Executed precise color matching and specialized hydro-dynamic repairs.'
    ]
  },
  {
    id: 'exp3',
    company: 'Surf Naples',
    role: 'Surf Instructor - Manager',
    period: '2021 - 2025',
    description: [
      'Managed daily operations and instructor scheduling for a high-traffic surf school.',
      'Led safety-focused surf lessons for groups of up to 20 clients.',
      'Maintained all rental and instruction equipment to professional standards.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Design & CAD',
    items: ['Solidworks', 'Siemens NX', 'Fusion360', 'Inventor', 'AutoCAD', 'Blender']
  },
  {
    category: 'Analysis',
    items: ['ANSYS Mechanical', 'StarCCM+', 'MATLAB', 'Simulink', 'CFD', 'FEA']
  },
  {
    category: 'Computation',
    items: ['Python', 'C++', 'Arduino', 'Embedded Systems', 'PCB Design']
  },
  {
    category: 'Fabrication',
    items: ['CNC Machining', '3D Print Optimization', 'MIG Welding', 'Composites']
  }
];
