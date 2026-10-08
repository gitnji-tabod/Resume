export type TemplateType = 'bento' | 'editorial' | 'executive';

export type ThemeColor = 'slate' | 'indigo' | 'emerald' | 'amber' | 'rose' | 'neutral';

export type SkillProficiency = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  avatarUrl?: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
  github?: string;
  summary: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  bullets: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  fieldOfStudy?: string;
  location?: string;
  startDate: string;
  endDate: string;
  current: boolean;
  gpaOrHonors?: string;
  description?: string;
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
}

export interface SkillItem {
  name: string;
  level: SkillProficiency;
}

export interface SkillGroup {
  id: string;
  category: string;
  skills: SkillItem[];
}

export interface ProjectItem {
  id: string;
  title: string;
  role?: string;
  url?: string;
  repoUrl?: string;
  tags: string[];
  description: string;
  highlights: string[];
}

export interface Resume {
  id: string;
  title: string;
  slug: string;
  template: TemplateType;
  themeColor: ThemeColor;
  updatedAt: string;
  createdAt: string;
  personalInfo: PersonalInfo;
  experiences: ExperienceItem[];
  educations: EducationItem[];
  certifications: CertificationItem[];
  skillGroups: SkillGroup[];
  projects: ProjectItem[];
}
