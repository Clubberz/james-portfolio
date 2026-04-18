import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    slug: 'bmw-k100-restomod',
    title: 'BMW K100 Restomod',
    description: 'Custom frame and suspension development. Engineered a cantilever suspension to eliminate stock mount points, significantly improving vehicle dynamics through 3D photogrammetry and FEA.',
    tags: ['Mechanical Design', 'FEA', 'Photogrammetry', 'Fabrication'],
    github: 'https://github.com/clubberz',
    image: '/images/bmw-k100.jpg',
    video: '/videos/bmw-k100.mp4',
    year: '2024',
    content: `## Project Overview

The objective was to take a standard BMW K100 and completely rebuild the suspension architecture to strip weight and lower the center of gravity. 

### Key Engineering Changes
* **Cantilever Suspension**: Redesigned the geometry completely from the ground up using **Siemens NX**.
* **Photogrammetry Interface**: Used 3D scanning to perfectly map the original engine casing and frame mounts to trace attachment points within a 0.5mm tolerance.
* **FEA Analysis**: Simulated 5G bump loads on the suspension linkages in software before CNC machining the structural links.

### The Build Process
The frame was chopped and tig-welded. It's one thing to design parts, but seeing it come off the mill and perfectly mate with the raw engine block is another.

> "A huge exercise in bridging the gap between digital ideation and physical fabrication."
`
  },
  {
    id: '2',
    slug: '944-turbo-rebuild',
    title: '944 Turbo Race Rebuild',
    description: 'Complete powertrain modernization. Integrated a MegaSquirt ECU for modern fuel/ignition control and designed a high-downforce aerodynamic package including a custom splitter and rear wing.',
    tags: ['ECU Tuning', 'Aerodynamics', 'Engine Building'],
    github: 'https://github.com/clubberz',
    image: '/images/porsche-944.jpg',
    year: '2024',
    content: `## The 944 Journey

Converting an analog car to a modern tuned track monster.

### Powertrain Modernization
* Replaced the factory wiring harness.
* Integrated a digital **MegaSquirt ECU**.
* Built a custom tuning map from scratch, iterating over dozens of dyno sessions to smooth out the torque curve.

### Aerodynamics package
The mechanical grip wasn't going to be enough. I utilized **StarCCM+** to optimize a complete aero package:
* Bespoke front splitter extending 4 inches.
* Angle-adjustable rear wing generating up to 300lbs of downforce at 120mph.
`
  },
  {
    id: '3',
    slug: 'liquid-fuel-engine',
    title: 'Liquid Fuel Engine',
    description: 'Critical component design for Rice Eclipse’s liquid fuel rocket project. Utilized extensive CFD, FEA, and thermal analysis to optimize thrust and system reliability.',
    tags: ['Aerospace', 'CFD', 'Thermal Analysis'],
    github: 'https://github.com/clubberz',
    image: '/images/rocket-engine.jpg',
    year: '2023',
    content: `## The Engine Core

Designed structural and thermal components for the **Rice Eclipse** liquid rocket team.

### Focus Areas
* **Thermal Analysis**: Modeled the heat flux through the combustion chamber wall. Used regenerative cooling channels to keep the aluminum safely below its yield temperature during the 5-second hot-fire.
* **Structural Safety**: Applied rigorous FEA targeting a factor of safety of 1.5x during maximum chamber pressure events.

Working on a rocket teaches you that there are no small mistakes. Every calculation must be double and triple-checked.
`
  },
  {
    id: '4',
    slug: 'solar-powered-race-car',
    title: 'Solar Powered Race Car',
    description: 'Retrofitted an ICE go-kart with an electric powertrain and solar array. Improved total system efficiency by ~20% through aggressive weight reduction and redesign.',
    tags: ['EV Architecture', 'Solar', 'Efficiency'],
    github: 'https://github.com/clubberz',
    image: '/images/solar-car.jpg',
    year: '2022',
    content: `## EV Conversion & Solar Architecture

Took an old combustion-engine kart and turned it into an ultra-efficient electric prototype.

### Key Milestones
* Designed and welded a custom aluminum rack for the solar array to keep weight absolute minimum while preventing flex.
* Rewired the motor controller to accept input directly from the MPPT charge controller and battery array inline.
* Achieved a continuous driving state under ideal sun where power generated matched power consumed at 15mph.
`
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
