import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '6',
    slug: 'rr01-fsae-car',
    title: 'RR01 FSAE Race Car',
    description: 'Complete systems integration and dynamic validation for the RR01 Formula SAE race car. Pushing the absolute limits of mechanical grip and tractive performance on the track.',
    tags: ['FSAE', 'Vehicle Dynamics', 'Testing', 'Integration'],
    github: 'https://github.com/clubberz',
    image: '/images/RR01.png',
    video: '/videos/showcase.mp4',
    year: '2025',
    relatedProjects: ['fsae-ev-car', 'fsae-intake-plenum'],
    content: `## The Flagship Platform: RR01

The RR01 represents the culmination of countless hours of design, analysis, and manufacturing. As the flagship vehicle for Rice Racing, this platform integrates our completely custom architecture with aggressive aero and suspension geometries.

### Key Validation Stages
* **Systems Integration**: Harmonizing the high-voltage tractive system with advanced, adjustable suspension geometries in a highly constrained chassis footprint.
* **Track Testing**: Executing extensive on-track dynamic testing to correlate our SIMULINK lap time simulations with actual, real-world suspension telemetry points.

Building a race car in CAD is one thing. Putting it on the asphalt and wringing it out on the skidpad is what actually proves the engineering.
`
  },
  {
    id: '1',
    slug: 'bmw-k100-restomod',
    title: 'BMW K100 Restomod',
    description: 'Custom frame and suspension development. Engineered a cantilever suspension to eliminate stock mount points, significantly improving vehicle dynamics through 3D photogrammetry and FEA.',
    tags: ['Mechanical Design', 'FEA', 'Photogrammetry', 'Fabrication'],
    github: 'https://github.com/clubberz',
    image: '/images/bmw-k100-restomod/bmwk100scanblender.png',
    video: '/videos/bmw-k100.mp4',
    gallery: [
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 133636.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 133645.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 134611.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 135224.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 140212.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 140656.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 144016.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 170800.png',
      '/projects/bmw-k100-restomod/Screenshot 2025-10-12 172236.png'
    ],
    year: '2024',
    content: `## Project Overview

The objective was to take a standard BMW K100 and completely rebuild the suspension architecture to strip weight and lower the center of gravity. 

### Key Engineering Changes
* **Cantilever Suspension**: Redesigned the geometry completely from the ground up using **Solidworks**.
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
    id: '5',
    slug: 'fsae-intake-plenum',
    title: 'FSAE Intake Plenum',
    description: 'Developed an optimized, 3D printed intake restrictor and plenum using extensive CFD. Iterated geometry to meet standard flow restriction guidelines while maximizing volumetric efficiency.',
    tags: ['CFD', 'Fluid Dynamics', 'Rapid Prototyping'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2025',
    relatedProjects: ['fsae-ev-car'],
    content: `## Restrictor Airflow Optimization

FSAE rules strictly limit the engine's air intake via a 20mm restrictor. Our goal was to design a converging-diverging nozzle format that chokes flow as cleanly as possible.

![Internal airflow streamlines mapped in StarCCM+ showing pressure drops at choked flow.](https://placehold.co/1200x800/27272a/white?text=AWAITING+PHOTOS)

### Design & Prototyping
1. **CFD Analysis**: Re-meshed over 14 different geometries pushing the boundaries of the venturi angles.
2. **Fabrication**: Executed the geometry using high-temp carbon-fiber infused nylon in our in-house 3D printing bay.
3. **Dyno Validation**: Mounted the system onto our standalone engine rig and modified ignition timing via MegaSquirt to dial in the AFRs.

The final iteration resulted in a +12% torque increase at our target 6000RPM range over the stock manifold.
`
  },
  {
    id: '7',
    slug: 'fsae-exhaust-manifold',
    title: 'FSAE exhaust manifold',
    description: 'Custom routed exhaust manifold optimized for engine gas flow and packaging constraints.',
    tags: ['FSAE', 'Fluid Dynamics', 'Fabrication'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2025',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '8',
    slug: 'fsae-differential-mount',
    title: 'FSAE Differential Mount',
    description: 'High-stress differential mounting bracket designed and validated using FEA.',
    tags: ['FSAE', 'FEA', 'Mechanical Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2025',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '9',
    slug: 'fsae-drivetrain',
    title: 'FSAE drivetrain',
    description: 'Full drivetrain architecture from accumulator to hubs.',
    tags: ['FSAE', 'Integration', 'Mechanical Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2025',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '10',
    slug: 'big-air-kiteboard-handle',
    title: 'Big Air Kiteboard Handle',
    description: 'Custom machined and carbon-reinforced handle capable of withstanding extreme big-air dynamic loads.',
    tags: ['Composites', 'Fabrication', 'Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2024',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '11',
    slug: 'workshop-apron',
    title: 'Workshop Apron',
    description: 'Heavy-duty workshop apron tailored for custom fabrication and welding protection.',
    tags: ['Fabrication', 'Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2023',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '12',
    slug: 'building-a-crate',
    title: 'Building a Crate',
    description: 'Structural wood architecture and precise measurements for safe cargo transport.',
    tags: ['Fabrication', 'Mechanical Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2023',
    content: `## Project Overview
Awaiting detailed project write-up.`
  },
  {
    id: '13',
    slug: 'bluetooth-tens-device',
    title: 'Bluetooth TENS device',
    description: 'Development of a compact TENS unit controlled via an embedded Bluetooth module.',
    tags: ['Embedded Systems', 'PCB Design'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2024',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
  },
  {
    id: '14',
    slug: 'surfboard',
    title: 'Surfboard',
    description: 'Custom shaped and glassed high-performance surfboard.',
    tags: ['Composites', 'Fluid Dynamics', 'Fabrication'],
    github: 'https://github.com/clubberz',
    image: 'https://placehold.co/1920x1080/27272a/white?text=AWAITING+PHOTOS',
    year: '2024',
    content: `## Project Overview
Awaiting detailed project write-up and telemetry data.`
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
