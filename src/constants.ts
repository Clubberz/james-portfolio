import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Distributed Compute Engine',
    description: 'A high-performance task scheduler for heterogeneous clusters, written in Rust. Features dynamic load balancing and fault tolerance.',
    tags: ['Rust', 'gRPC', 'Distributed Systems'],
    github: 'https://github.com/example/compute-engine',
    image: 'https://picsum.photos/seed/compute/800/600',
    year: '2024'
  },
  {
    id: '2',
    title: 'Real-time Signal Processor',
    description: 'Embedded software for FPGA-accelerated digital signal processing. Reduced latency by 45% using custom memory management.',
    tags: ['C++', 'Verilog', 'DSP'],
    github: 'https://github.com/example/signal-proc',
    image: 'https://picsum.photos/seed/dsp/800/600',
    year: '2023'
  },
  {
    id: '3',
    title: 'Cloud-Native Pipeline',
    description: 'Automated CI/CD infrastructure with Kubernetes and Terraform. Managed 500+ microservices deployments daily.',
    tags: ['Go', 'Kubernetes', 'Terraform'],
    github: 'https://github.com/example/pipeline',
    image: 'https://picsum.photos/seed/k8s/800/600',
    year: '2023'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    company: 'TechFlow Systems',
    role: 'Senior Systems Engineer',
    period: '2022 - Present',
    description: [
      'Architected core middleware for autonomous vehicle telemetry.',
      'Optimized binary serialization, reducing data overhead by 30%.',
      'Led a team of 5 engineers on cross-functional infrastructure projects.'
    ]
  },
  {
    id: 'exp2',
    company: 'Binary Bloom',
    role: 'Software Engineer II',
    period: '2020 - 2022',
    description: [
      'Developed low-latency trading APIs for digital assets.',
      'Implemented robust monitoring using Prometheus and Grafana.',
      'Improved test coverage from 40% to 95% across critical services.'
    ]
  }
];

export const SKILLS: Skill[] = [
  {
    category: 'Languages',
    items: ['Rust', 'C++', 'Go', 'TypeScript', 'Python']
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Nginx']
  },
  {
    category: 'Tools',
    items: ['Git', 'Linux', 'gRPC', 'PostgreSQL', 'Redis']
  }
];
