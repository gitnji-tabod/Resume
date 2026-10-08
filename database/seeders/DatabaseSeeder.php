<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Resume;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database with sample ATS-optimized resumes.
     */
    public function run(): void
    {
        // 1. Alex Rivera - Principal Systems Architect (Bento Template)
        Resume::updateOrCreate(
            ['slug' => 'alex-rivera-systems-architect'],
            [
                'title' => 'Alex Rivera — Principal Full-Stack & Systems Architect',
                'template' => 'bento',
                'theme_color' => 'slate',
                'personal_info' => [
                    'fullName' => 'Alex Rivera',
                    'jobTitle' => 'Principal Full-Stack Engineer & Systems Architect',
                    'avatarUrl' => '/storage/avatars/avatar_alex.jpg',
                    'email' => 'alex.rivera@example.com',
                    'phone' => '+1 (415) 890-4421',
                    'location' => 'San Francisco, CA',
                    'website' => 'https://alexrivera.dev',
                    'linkedin' => 'https://linkedin.com/in/alexrivera-dev',
                    'github' => 'https://github.com/alexrivera-codes',
                    'summary' => 'Systems-focused software engineer with 9+ years building high-throughput distributed microservices, low-latency React architectures, and robust Laravel applications. Scaled infrastructure to 12M+ monthly active users with 99.99% uptime.'
                ],
                'experiences' => [
                    [
                        'id' => 'exp_01',
                        'company' => 'Vanguard Systems',
                        'role' => 'Principal Software Engineer',
                        'location' => 'San Francisco, CA',
                        'startDate' => '2022-04',
                        'endDate' => '',
                        'current' => true,
                        'bullets' => [
                            'Spearheaded architectural migration of monolithic backend to event-driven services handling 45,000 requests/sec, reducing p99 latency from 420ms to 68ms.',
                            'Designed enterprise design system and real-time collaborative workspace using React 19, TypeScript, and WebSockets, cutting frontend bundle size by 38%.',
                            'Mentored 14 engineers across 3 squads, instituted automated testing standards elevating test coverage from 64% to 94% across all core modules.'
                        ]
                    ],
                    [
                        'id' => 'exp_02',
                        'company' => 'Apex Cloud Solutions',
                        'role' => 'Senior Full-Stack Engineer',
                        'location' => 'Seattle, WA',
                        'startDate' => '2019-06',
                        'endDate' => '2022-03',
                        'current' => false,
                        'bullets' => [
                            'Developed multi-tenant billing engine integrated with Stripe API and automated tax remittance, generating $42M in annual transactional throughput.',
                            'Built custom Vite & Inertia.js pipeline bridging Laravel REST APIs with responsive React frontends, accelerating feature deployment velocity by 40%.'
                        ]
                    ]
                ],
                'educations' => [
                    [
                        'id' => 'edu_01',
                        'institution' => 'University of California, Berkeley',
                        'degree' => 'Bachelor of Science',
                        'fieldOfStudy' => 'Computer Science & Engineering',
                        'location' => 'Berkeley, CA',
                        'startDate' => '2013-09',
                        'endDate' => '2017-05',
                        'current' => false,
                        'gpaOrHonors' => 'Magna Cum Laude · GPA 3.89/4.0',
                        'description' => 'Focus on Distributed Systems, Algorithmic Analysis, and Operating Systems Architecture.'
                    ]
                ],
                'certifications' => [
                    [
                        'id' => 'cert_01',
                        'name' => 'AWS Certified Solutions Architect – Professional',
                        'issuer' => 'Amazon Web Services',
                        'issueDate' => '2024-05',
                        'credentialUrl' => 'https://aws.amazon.com/verification'
                    ]
                ],
                'skill_groups' => [
                    [
                        'id' => 'sk_01',
                        'category' => 'Languages & Core',
                        'skills' => [
                            ['name' => 'TypeScript', 'level' => 'Expert'],
                            ['name' => 'PHP 8.3 / Laravel 11', 'level' => 'Expert'],
                            ['name' => 'Python', 'level' => 'Advanced'],
                            ['name' => 'SQL / SQLite', 'level' => 'Expert']
                        ]
                    ],
                    [
                        'id' => 'sk_02',
                        'category' => 'Frontend & Systems',
                        'skills' => [
                            ['name' => 'React 19 & Inertia.js', 'level' => 'Expert'],
                            ['name' => 'Tailwind CSS', 'level' => 'Expert'],
                            ['name' => 'Docker & Kubernetes', 'level' => 'Advanced']
                        ]
                    ]
                ],
                'projects' => [
                    [
                        'id' => 'proj_01',
                        'title' => 'FolioCraft Engine',
                        'role' => 'Creator & Lead Architect',
                        'url' => 'https://foliocraft.dev',
                        'repoUrl' => 'https://github.com/foliocraft/engine',
                        'tags' => ['Laravel 11', 'React', 'Vite', 'SQLite', 'Tailwind CSS'],
                        'description' => 'Zero-config local resume generation suite with instant split-screen reactive preview and pixel-perfect ATS document exports.',
                        'highlights' => [
                            'Engineered reactive preview synchronization with zero input latency.',
                            'Built dual-engine print and server-side PDF generator compliant with strict ATS parsers.'
                        ]
                    ]
                ]
            ]
        );

        // 2. Elena Vance - Product Designer (Editorial Template)
        Resume::updateOrCreate(
            ['slug' => 'elena-vance-product-designer'],
            [
                'title' => 'Elena Vance — Senior Product Designer & Design Technologist',
                'template' => 'editorial',
                'theme_color' => 'indigo',
                'personal_info' => [
                    'fullName' => 'Elena Vance',
                    'jobTitle' => 'Senior Product Designer & Design Technologist',
                    'email' => 'elena.vance@designcraft.co',
                    'phone' => '+1 (206) 555-0182',
                    'location' => 'Seattle, WA',
                    'website' => 'https://elenavance.design',
                    'linkedin' => 'https://linkedin.com/in/elenavance-design',
                    'github' => 'https://github.com/elenavance',
                    'summary' => 'Product designer with 7+ years bridging design systems and front-end engineering. Specializes in building accessible, high-conversion SaaS workflows and typographic editorial interfaces.'
                ],
                'experiences' => [
                    [
                        'id' => 'exp_201',
                        'company' => 'Stratos Software',
                        'role' => 'Lead Design Systems Specialist',
                        'location' => 'Seattle, WA',
                        'startDate' => '2022-01',
                        'endDate' => '',
                        'current' => true,
                        'bullets' => [
                            'Unified design token system across web and mobile surfaces, reducing handoff cycle times by 45%.',
                            'Established WCAG 2.1 AA accessibility standards across 60+ core components.'
                        ]
                    ]
                ],
                'educations' => [
                    [
                        'id' => 'edu_201',
                        'institution' => 'University of Washington',
                        'degree' => 'Bachelor of Design',
                        'fieldOfStudy' => 'Interaction Design',
                        'location' => 'Seattle, WA',
                        'startDate' => '2015-09',
                        'endDate' => '2019-06',
                        'current' => false,
                        'gpaOrHonors' => 'Departmental Honors',
                        'description' => 'Coursework in Design Systems and Usability Evaluation.'
                    ]
                ],
                'certifications' => [],
                'skill_groups' => [
                    [
                        'id' => 'sk_201',
                        'category' => 'Design & Prototyping',
                        'skills' => [
                            ['name' => 'Figma & Design Systems', 'level' => 'Expert'],
                            ['name' => 'Design Tokens', 'level' => 'Expert'],
                            ['name' => 'Tailwind CSS', 'level' => 'Expert']
                        ]
                    ]
                ],
                'projects' => [
                    [
                        'id' => 'proj_201',
                        'title' => 'Prism Token Engine',
                        'role' => 'Lead Designer',
                        'url' => 'https://prismtokens.design',
                        'tags' => ['Figma API', 'Design Tokens', 'Tailwind CSS'],
                        'description' => 'Automated design token synchronization transforming Figma variables into production-ready Tailwind configs.',
                        'highlights' => ['Adopted by 8 open-source design systems.']
                    ]
                ]
            ]
        );

        // 3. Marcus Thorne - DevOps Lead (Executive ATS Template)
        Resume::updateOrCreate(
            ['slug' => 'marcus-thorne-devops-lead'],
            [
                'title' => 'Marcus Thorne — Senior DevOps & Cloud Infrastructure Lead',
                'template' => 'executive',
                'theme_color' => 'emerald',
                'personal_info' => [
                    'fullName' => 'Marcus Thorne',
                    'jobTitle' => 'Senior DevOps & Cloud Infrastructure Lead',
                    'email' => 'marcus.thorne@cloudops.net',
                    'phone' => '+1 (312) 449-8812',
                    'location' => 'Chicago, IL',
                    'website' => 'https://marcusthorne.io',
                    'linkedin' => 'https://linkedin.com/in/marcus-thorne-ops',
                    'github' => 'https://github.com/mthorne-infra',
                    'summary' => 'Cloud infrastructure leader with 8+ years architecting secure cloud solutions on AWS and GCP. Expert in Terraform IaC, Kubernetes, GitOps deployment pipelines, and zero-trust security postures.'
                ],
                'experiences' => [
                    [
                        'id' => 'exp_301',
                        'company' => 'Meridian Cloud Platform',
                        'role' => 'Lead Infrastructure Engineer',
                        'location' => 'Chicago, IL',
                        'startDate' => '2021-08',
                        'endDate' => '',
                        'current' => true,
                        'bullets' => [
                            'Architected multi-region Kubernetes platform across AWS EKS supporting 200+ microservices.',
                            'Reduced monthly cloud infrastructure spend by $180,000 (28%) via dynamic spot instance orchestration.'
                        ]
                    ]
                ],
                'educations' => [
                    [
                        'id' => 'edu_301',
                        'institution' => 'University of Illinois Urbana-Champaign',
                        'degree' => 'Bachelor of Science',
                        'fieldOfStudy' => 'Information Technology',
                        'location' => 'Champaign, IL',
                        'startDate' => '2014-08',
                        'endDate' => '2018-05',
                        'current' => false,
                        'gpaOrHonors' => 'Dean’s List',
                        'description' => 'Focus on Distributed Systems and Security.'
                    ]
                ],
                'certifications' => [],
                'skill_groups' => [
                    [
                        'id' => 'sk_301',
                        'category' => 'Cloud Infrastructure',
                        'skills' => [
                            ['name' => 'AWS & GCP', 'level' => 'Expert'],
                            ['name' => 'Terraform', 'level' => 'Expert'],
                            ['name' => 'Kubernetes', 'level' => 'Expert']
                        ]
                    ]
                ],
                'projects' => [
                    [
                        'id' => 'proj_301',
                        'title' => 'KubeSentinel',
                        'role' => 'Creator',
                        'url' => 'https://github.com/mthorne-infra/kubesentinel',
                        'tags' => ['Go', 'Kubernetes', 'Prometheus'],
                        'description' => 'Lightweight Kubernetes controller monitoring resource over-provisioning.',
                        'highlights' => ['Over 800 stars on GitHub.']
                    ]
                ]
            ]
        );
    }
}
