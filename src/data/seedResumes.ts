import { Resume } from '../types/resume';

export const SEED_RESUMES: Resume[] = [
  {
    id: 'res_seed_01',
    title: 'Alex Rivera — Principal Full-Stack & Systems Architect',
    slug: 'alex-rivera-systems-architect',
    template: 'bento',
    themeColor: 'slate',
    createdAt: '2026-01-15T09:00:00.000Z',
    updatedAt: '2026-03-28T14:30:00.000Z',
    personalInfo: {
      fullName: 'Alex Rivera',
      jobTitle: 'Principal Full-Stack Engineer & Systems Architect',
      avatarUrl: '/src/assets/images/avatar_engineer_alex_1791453621675.jpg',
      email: 'alex.rivera@example.com',
      phone: '+1 (415) 890-4421',
      location: 'San Francisco, CA',
      website: 'https://alexrivera.dev',
      linkedin: 'https://linkedin.com/in/alexrivera-dev',
      github: 'https://github.com/alexrivera-codes',
      summary: 'Systems-focused software engineer with 9+ years building high-throughput distributed microservices, low-latency React architectures, and robust Laravel applications. Proven record leading multi-disciplinary teams in scaling infrastructure to 12M+ monthly active users with 99.99% uptime.'
    },
    experiences: [
      {
        id: 'exp_01',
        company: 'Vanguard Systems',
        role: 'Principal Software Engineer',
        location: 'San Francisco, CA',
        startDate: '2022-04',
        endDate: '',
        current: true,
        bullets: [
          'Spearheaded architectural migration of monolithic backend to event-driven services handling 45,000 requests/sec, reducing p99 latency from 420ms to 68ms.',
          'Designed enterprise design system and real-time collaborative workspace using React 19, TypeScript, and WebSockets, cutting frontend bundle size by 38%.',
          'Mentored 14 engineers across 3 squads, instituted rigorous automated testing standards, elevating test coverage from 64% to 94% across all core modules.'
        ]
      },
      {
        id: 'exp_02',
        company: 'Apex Cloud Solutions',
        role: 'Senior Full-Stack Engineer',
        location: 'Seattle, WA',
        startDate: '2019-06',
        endDate: '2022-03',
        current: false,
        bullets: [
          'Developed multi-tenant billing engine integrated with Stripe API and automated tax remittance, generating $42M in annual transactional throughput.',
          'Built custom Vite & Inertia.js pipeline bridging Laravel REST APIs with responsive React frontends, accelerating feature deployment velocity by 40%.',
          'Orchestrated zero-downtime PostgreSQL and SQLite migrations across distributed multi-region database clusters.'
        ]
      },
      {
        id: 'exp_03',
        company: 'Hyperion Interactive',
        role: 'Software Engineer',
        location: 'Austin, TX',
        startDate: '2017-02',
        endDate: '2019-05',
        current: false,
        bullets: [
          'Implemented responsive customer dashboards and data visualization tools utilizing React, D3.js, and Redis caching layers.',
          'Automated CI/CD pipelines via GitHub Actions and Docker, reducing build failure rates by 55%.'
        ]
      }
    ],
    educations: [
      {
        id: 'edu_01',
        institution: 'University of California, Berkeley',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science & Engineering',
        location: 'Berkeley, CA',
        startDate: '2013-09',
        endDate: '2017-05',
        current: false,
        gpaOrHonors: 'Magna Cum Laude · GPA 3.89/4.0',
        description: 'Focus on Distributed Systems, Algorithmic Analysis, and Operating Systems Architecture.'
      }
    ],
    certifications: [
      {
        id: 'cert_01',
        name: 'AWS Certified Solutions Architect – Professional',
        issuer: 'Amazon Web Services',
        issueDate: '2024-05',
        credentialUrl: 'https://aws.amazon.com/verification'
      },
      {
        id: 'cert_02',
        name: 'Certified Kubernetes Administrator (CKA)',
        issuer: 'Cloud Native Computing Foundation',
        issueDate: '2023-08',
        credentialUrl: 'https://cncf.io/verify'
      }
    ],
    skillGroups: [
      {
        id: 'sk_01',
        category: 'Languages & Core',
        skills: [
          { name: 'TypeScript', level: 'Expert' },
          { name: 'PHP 8.3 / Laravel 11', level: 'Expert' },
          { name: 'Python', level: 'Advanced' },
          { name: 'Go', level: 'Intermediate' },
          { name: 'SQL / PostgreSQL', level: 'Expert' }
        ]
      },
      {
        id: 'sk_02',
        category: 'Frontend & UI Engineering',
        skills: [
          { name: 'React 19', level: 'Expert' },
          { name: 'Next.js & Inertia.js', level: 'Advanced' },
          { name: 'Tailwind CSS', level: 'Expert' },
          { name: 'Vite & Webpack', level: 'Advanced' },
          { name: 'Design Systems', level: 'Expert' }
        ]
      },
      {
        id: 'sk_03',
        category: 'Architecture & DevOps',
        skills: [
          { name: 'Docker & Kubernetes', level: 'Advanced' },
          { name: 'AWS & Cloud Architecture', level: 'Advanced' },
          { name: 'Redis & Message Queues', level: 'Advanced' },
          { name: 'CI/CD & GitHub Actions', level: 'Expert' },
          { name: 'SQLite & ORMs', level: 'Expert' }
        ]
      }
    ],
    projects: [
      {
        id: 'proj_01',
        title: 'FolioCraft Engine',
        role: 'Creator & Lead Architect',
        url: 'https://foliocraft.dev',
        repoUrl: 'https://github.com/foliocraft/engine',
        tags: ['Laravel 11', 'React', 'Vite', 'SQLite', 'Tailwind CSS'],
        description: 'Zero-config local resume generation suite with instant split-screen reactive preview and pixel-perfect ATS document exports.',
        highlights: [
          'Engineered reactive preview synchronization with zero input latency.',
          'Built dual-engine print and server-side PDF generator compliant with strict ATS parsers.'
        ]
      },
      {
        id: 'proj_02',
        title: 'Chronos Distributed Queue',
        role: 'Core Contributor',
        url: 'https://github.com/chronos-queue',
        tags: ['Go', 'Redis', 'gRPC', 'Distributed Systems'],
        description: 'High-reliability persistent message queue capable of sub-millisecond job distribution with at-least-once delivery guarantees.',
        highlights: [
          'Benchmarked at 180,000 ops/second on standard 4-core worker nodes.'
        ]
      }
    ]
  },
  {
    id: 'res_seed_02',
    title: 'Elena Vance — Senior Product Designer & Design Technologist',
    slug: 'elena-vance-product-designer',
    template: 'editorial',
    themeColor: 'indigo',
    createdAt: '2026-02-10T11:00:00.000Z',
    updatedAt: '2026-03-30T16:15:00.000Z',
    personalInfo: {
      fullName: 'Elena Vance',
      jobTitle: 'Senior Product Designer & Design Technologist',
      avatarUrl: '',
      email: 'elena.vance@designcraft.co',
      phone: '+1 (206) 555-0182',
      location: 'Seattle, WA',
      website: 'https://elenavance.design',
      linkedin: 'https://linkedin.com/in/elenavance-design',
      github: 'https://github.com/elenavance',
      summary: 'Product designer with 7+ years bridging design systems and front-end engineering. Specializes in building accessible, high-conversion SaaS workflows, design token architectures, and typographic editorial interfaces that delight users.'
    },
    experiences: [
      {
        id: 'exp_201',
        company: 'Stratos Software',
        role: 'Lead Design Systems Specialist',
        location: 'Seattle, WA',
        startDate: '2022-01',
        endDate: '',
        current: true,
        bullets: [
          'Unified design token system across web and mobile surfaces, reducing design-to-development handoff cycle times by 45%.',
          'Established WCAG 2.1 AA accessibility standards for 60+ core reusable components, mitigating compliance risk across 4 enterprise products.',
          'Partnered with product managers and engineers to conduct 50+ qualitative user research sessions, boosting user activation rate by 24%.'
        ]
      },
      {
        id: 'exp_202',
        company: 'Foundry Creative',
        role: 'Senior Product Designer',
        location: 'Portland, OR',
        startDate: '2019-03',
        endDate: '2021-12',
        current: false,
        bullets: [
          'Led end-to-end UX/UI redesign of B2B fintech analytics dashboard, driving 31% increase in daily active user engagement.',
          'Built rapid interactive React prototypes validating key user journeys before production development.'
        ]
      }
    ],
    educations: [
      {
        id: 'edu_201',
        institution: 'University of Washington',
        degree: 'Bachelor of Design',
        fieldOfStudy: 'Interaction Design & Human-Computer Interaction',
        location: 'Seattle, WA',
        startDate: '2015-09',
        endDate: '2019-06',
        current: false,
        gpaOrHonors: 'Departmental Honors',
        description: 'Coursework in Design Systems, Usability Evaluation, and Information Architecture.'
      }
    ],
    certifications: [
      {
        id: 'cert_201',
        name: 'Nielsen Norman Group UX Master Certified',
        issuer: 'Nielsen Norman Group',
        issueDate: '2023-04',
        credentialUrl: 'https://nngroup.com/ux-certification'
      }
    ],
    skillGroups: [
      {
        id: 'sk_201',
        category: 'Design & Prototyping',
        skills: [
          { name: 'Figma & Design Systems', level: 'Expert' },
          { name: 'User Research & Wireframing', level: 'Expert' },
          { name: 'Design Tokens & Variables', level: 'Expert' },
          { name: 'Information Architecture', level: 'Advanced' }
        ]
      },
      {
        id: 'sk_202',
        category: 'Frontend Integration',
        skills: [
          { name: 'HTML5 & Semantic Web', level: 'Expert' },
          { name: 'Tailwind CSS', level: 'Expert' },
          { name: 'React UI Components', level: 'Advanced' },
          { name: 'CSS Grid & Flexbox', level: 'Expert' }
        ]
      }
    ],
    projects: [
      {
        id: 'proj_201',
        title: 'Prism Token Engine',
        role: 'Lead Designer & Author',
        url: 'https://prismtokens.design',
        tags: ['Figma API', 'Design Tokens', 'Tailwind CSS', 'Style Dictionary'],
        description: 'Automated multi-brand design token synchronization tool transforming Figma variables into production-ready Tailwind configurations.',
        highlights: [
          'Adopted by 8 open-source design systems with over 1,200 stars on GitHub.'
        ]
      }
    ]
  },
  {
    id: 'res_seed_03',
    title: 'Marcus Thorne — Senior DevOps & Cloud Infrastructure Lead',
    slug: 'marcus-thorne-devops-lead',
    template: 'executive',
    themeColor: 'emerald',
    createdAt: '2026-01-20T14:00:00.000Z',
    updatedAt: '2026-03-25T18:45:00.000Z',
    personalInfo: {
      fullName: 'Marcus Thorne',
      jobTitle: 'Senior DevOps & Cloud Infrastructure Lead',
      avatarUrl: '',
      email: 'marcus.thorne@cloudops.net',
      phone: '+1 (312) 449-8812',
      location: 'Chicago, IL',
      website: 'https://marcusthorne.io',
      linkedin: 'https://linkedin.com/in/marcus-thorne-ops',
      github: 'https://github.com/mthorne-infra',
      summary: 'Cloud infrastructure leader with 8+ years architecting secure, resilient cloud solutions on AWS and GCP. Expert in Terraform infrastructure-as-code, Kubernetes orchestration, automated GitOps deployment pipelines, and zero-trust security postures.'
    },
    experiences: [
      {
        id: 'exp_301',
        company: 'Meridian Cloud Platform',
        role: 'Lead Infrastructure Engineer',
        location: 'Chicago, IL',
        startDate: '2021-08',
        endDate: '',
        current: true,
        bullets: [
          'Architected multi-region Kubernetes platform across AWS EKS supporting 200+ containerized microservices.',
          'Reduced monthly cloud infrastructure expenditures by $180,000 (28%) via dynamic spot instance orchestration and cluster auto-scaling.',
          'Achieved SOC 2 Type II compliance by establishing automated CIS benchmark auditing and vulnerability scanners.'
        ]
      },
      {
        id: 'exp_302',
        company: 'Centrix Logistics',
        role: 'DevOps Engineer',
        location: 'Chicago, IL',
        startDate: '2018-05',
        endDate: '2021-07',
        current: false,
        bullets: [
          'Engineered end-to-end GitOps pipelines using ArgoCD and GitHub Actions, enabling 40+ daily production releases.',
          'Migrated legacy on-premise hardware to immutable Terraform configurations with automated state locking.'
        ]
      }
    ],
    educations: [
      {
        id: 'edu_301',
        institution: 'University of Illinois Urbana-Champaign',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Information Technology & Systems Administration',
        location: 'Champaign, IL',
        startDate: '2014-08',
        endDate: '2018-05',
        current: false,
        gpaOrHonors: 'Dean’s List Honors',
        description: 'Specialization in Network Security, Operating Systems, and Distributed Computing.'
      }
    ],
    certifications: [
      {
        id: 'cert_301',
        name: 'AWS Solutions Architect Professional',
        issuer: 'Amazon Web Services',
        issueDate: '2024-02',
        credentialUrl: 'https://aws.amazon.com/verification'
      },
      {
        id: 'cert_302',
        name: 'HashiCorp Certified: Terraform Associate',
        issuer: 'HashiCorp',
        issueDate: '2023-09',
        credentialUrl: 'https://hashicorp.com'
      }
    ],
    skillGroups: [
      {
        id: 'sk_301',
        category: 'Cloud & Infrastructure',
        skills: [
          { name: 'AWS & GCP', level: 'Expert' },
          { name: 'Terraform & Pulumi', level: 'Expert' },
          { name: 'Kubernetes & Docker', level: 'Expert' },
          { name: 'Linux / Unix Internals', level: 'Expert' }
        ]
      },
      {
        id: 'sk_302',
        category: 'CI/CD & Observability',
        skills: [
          { name: 'GitHub Actions & GitLab CI', level: 'Expert' },
          { name: 'Prometheus & Grafana', level: 'Advanced' },
          { name: 'ArgoCD & GitOps', level: 'Advanced' },
          { name: 'Datadog & ELK Stack', level: 'Advanced' }
        ]
      }
    ],
    projects: [
      {
        id: 'proj_301',
        title: 'KubeSentinel',
        role: 'Creator & Maintainer',
        url: 'https://github.com/mthorne-infra/kubesentinel',
        tags: ['Go', 'Kubernetes Operator', 'Prometheus', 'Helm'],
        description: 'Lightweight Kubernetes controller monitoring resource over-provisioning and automatically generating right-sizing recommendations.',
        highlights: [
          'Over 800 GitHub stars and deployed in 120+ production clusters.'
        ]
      }
    ]
  }
];
