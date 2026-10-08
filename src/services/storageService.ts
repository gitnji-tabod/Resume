import { Resume, TemplateType } from '../types/resume';
import { SEED_RESUMES } from '../data/seedResumes';

const STORAGE_KEY = 'foliocraft_resumes_v1';
const ACTIVE_RESUME_ID_KEY = 'foliocraft_active_id';

export const storageService = {
  getResumes(): Resume[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_RESUMES));
        return SEED_RESUMES;
      }
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed) || parsed.length === 0) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_RESUMES));
        return SEED_RESUMES;
      }
      return parsed;
    } catch {
      return SEED_RESUMES;
    }
  },

  getResumeById(id: string): Resume | undefined {
    const list = this.getResumes();
    return list.find(r => r.id === id);
  },

  saveResume(resume: Resume): Resume {
    const list = this.getResumes();
    const updatedResume: Resume = {
      ...resume,
      updatedAt: new Date().toISOString(),
    };
    const index = list.findIndex(r => r.id === resume.id);
    let updatedList: Resume[];
    if (index >= 0) {
      updatedList = [...list];
      updatedList[index] = updatedResume;
    } else {
      updatedList = [updatedResume, ...list];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedList));
    return updatedResume;
  },

  createResume(template: TemplateType = 'bento'): Resume {
    const id = `res_${Date.now()}`;
    const newResume: Resume = {
      id,
      title: 'Untitled Resume',
      slug: `untitled-resume-${Date.now()}`,
      template,
      themeColor: 'slate',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      personalInfo: {
        fullName: 'Jane Doe',
        jobTitle: 'Software Engineer',
        avatarUrl: '',
        email: 'jane.doe@example.com',
        phone: '+1 (555) 019-2834',
        location: 'New York, NY',
        website: 'https://janedoe.dev',
        linkedin: 'https://linkedin.com/in/janedoe',
        github: 'https://github.com/janedoe',
        summary: 'Driven software engineer with expertise in modern web technologies, responsive user interfaces, and robust backend systems.'
      },
      experiences: [
        {
          id: `exp_${Date.now()}_1`,
          company: 'Acme Corporation',
          role: 'Full-Stack Developer',
          location: 'New York, NY',
          startDate: '2023-01',
          endDate: '',
          current: true,
          bullets: [
            'Architected client-facing modules utilizing React and modern REST endpoints.',
            'Collaborated with cross-functional teams to deliver bi-weekly sprint features on schedule.'
          ]
        }
      ],
      educations: [
        {
          id: `edu_${Date.now()}_1`,
          institution: 'State University',
          degree: 'B.S. in Computer Science',
          fieldOfStudy: 'Computer Science',
          location: 'New York, NY',
          startDate: '2019-09',
          endDate: '2023-05',
          current: false,
          gpaOrHonors: 'GPA 3.8/4.0',
          description: 'Specialization in Software Engineering and Distributed Computing.'
        }
      ],
      certifications: [],
      skillGroups: [
        {
          id: `sk_${Date.now()}_1`,
          category: 'Core Technologies',
          skills: [
            { name: 'TypeScript', level: 'Advanced' },
            { name: 'React', level: 'Advanced' },
            { name: 'PHP / Laravel', level: 'Intermediate' },
            { name: 'Tailwind CSS', level: 'Advanced' }
          ]
        }
      ],
      projects: [
        {
          id: `proj_${Date.now()}_1`,
          title: 'Personal Portfolio & Project Hub',
          role: 'Sole Developer',
          url: 'https://janedoe.dev/projects',
          tags: ['React', 'TypeScript', 'Tailwind'],
          description: 'High-performance portfolio demonstrating interactive web apps and engineering articles.',
          highlights: ['Optimized for sub-second page loads and accessible navigation.']
        }
      ]
    };

    this.saveResume(newResume);
    return newResume;
  },

  cloneResume(id: string): Resume | undefined {
    const original = this.getResumeById(id);
    if (!original) return undefined;

    const clonedId = `res_${Date.now()}`;
    const cloned: Resume = {
      ...JSON.parse(JSON.stringify(original)),
      id: clonedId,
      title: `${original.title} (Copy)`,
      slug: `${original.slug}-copy-${Date.now().toString().slice(-4)}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.saveResume(cloned);
    return cloned;
  },

  deleteResume(id: string): boolean {
    const list = this.getResumes();
    const filtered = list.filter(r => r.id !== id);
    if (filtered.length === list.length) return false;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
  },

  resetToSeedData(): Resume[] {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_RESUMES));
    return SEED_RESUMES;
  },

  getActiveResumeId(): string {
    const saved = localStorage.getItem(ACTIVE_RESUME_ID_KEY);
    if (saved && this.getResumeById(saved)) {
      return saved;
    }
    const resumes = this.getResumes();
    const defaultId = resumes[0]?.id || SEED_RESUMES[0].id;
    localStorage.setItem(ACTIVE_RESUME_ID_KEY, defaultId);
    return defaultId;
  },

  setActiveResumeId(id: string): void {
    localStorage.setItem(ACTIVE_RESUME_ID_KEY, id);
  },

  exportResumeJson(resume: Resume): void {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(resume, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', `${resume.slug || 'resume'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  },

  importResumeJson(jsonStr: string): Resume {
    const parsed = JSON.parse(jsonStr) as Resume;
    if (!parsed.personalInfo || !parsed.title) {
      throw new Error('Invalid resume JSON format');
    }
    parsed.id = `res_${Date.now()}`;
    parsed.updatedAt = new Date().toISOString();
    return this.saveResume(parsed);
  }
};
