import React, { useState } from 'react';
import { Resume, TemplateType, ThemeColor } from '../../types/resume';
import { PersonalInfoTab } from './tabs/PersonalInfoTab';
import { ExperienceTab } from './tabs/ExperienceTab';
import { EducationTab } from './tabs/EducationTab';
import { SkillsTab } from './tabs/SkillsTab';
import { ProjectsTab } from './tabs/ProjectsTab';
import { ResumePreview } from '../preview/ResumePreview';
import {
  User,
  Briefcase,
  GraduationCap,
  Wrench,
  FolderGit2,
  ArrowLeft,
  Save,
  CheckCircle2,
  FileDown
} from 'lucide-react';

interface Props {
  resume: Resume;
  onChange: (updatedResume: Resume) => void;
  onBackToDashboard: () => void;
  onExportJson: () => void;
}

type TabKey = 'personal' | 'experience' | 'education' | 'skills' | 'projects';

export const BuilderWorkspace: React.FC<Props> = ({
  resume,
  onChange,
  onBackToDashboard,
  onExportJson,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>('personal');
  const [savedPing, setSavedPing] = useState<boolean>(false);

  const tabs: Array<{ id: TabKey; label: string; icon: React.FC<{ className?: string }> }> = [
    { id: 'personal', label: 'Personal Info', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education & Certs', icon: GraduationCap },
    { id: 'skills', label: 'Skills & Tools', icon: Wrench },
    { id: 'projects', label: 'Projects & Work', icon: FolderGit2 },
  ];

  const handleUpdateTemplate = (template: TemplateType) => {
    onChange({ ...resume, template });
  };

  const handleUpdateThemeColor = (themeColor: ThemeColor) => {
    onChange({ ...resume, themeColor });
  };

  const triggerSaveNotification = () => {
    setSavedPing(true);
    setTimeout(() => setSavedPing(false), 2000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-65px)] overflow-hidden bg-neutral-100 dark:bg-neutral-950">
      {/* Top Workspace Action Bar */}
      <div className="no-print shrink-0 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <button
            type="button"
            onClick={onBackToDashboard}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </button>
          <span className="text-neutral-300 dark:text-neutral-700 hidden sm:inline" aria-hidden="true">|</span>
          <input
            type="text"
            value={resume.title}
            onChange={(e) => onChange({ ...resume, title: e.target.value })}
            placeholder="Resume Document Title"
            className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white bg-transparent border-b border-transparent hover:border-neutral-300 focus:border-neutral-900 dark:focus:border-white focus:outline-none py-0.5 truncate max-w-[260px] sm:max-w-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1 text-[11px] text-neutral-400 tabular-nums">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Reactive State Active</span>
          </div>

          <button
            type="button"
            onClick={onExportJson}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-xs font-medium rounded-lg transition-colors"
            title="Download portable JSON"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">JSON</span>
          </button>

          <button
            type="button"
            onClick={triggerSaveNotification}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 text-xs font-semibold rounded-lg transition-colors shadow-2xs"
          >
            <Save className="w-3.5 h-3.5" />
            <span>{savedPing ? 'Saved!' : 'Save Local'}</span>
          </button>
        </div>
      </div>

      {/* Split-Screen Workspace */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Left Column: Form Editor (5 of 12 cols on desktop) */}
        <div className="no-print lg:col-span-5 xl:col-span-5 flex flex-col h-full bg-neutral-50 dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800 overflow-hidden">
          {/* Tabs Bar */}
          <div className="shrink-0 flex items-center gap-1 overflow-x-auto p-2 bg-neutral-100 dark:bg-neutral-950/70 border-b border-neutral-200 dark:border-neutral-800">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-200/50 dark:hover:bg-neutral-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {activeTab === 'personal' && (
              <PersonalInfoTab
                info={resume.personalInfo}
                onChange={(personalInfo) => onChange({ ...resume, personalInfo })}
              />
            )}

            {activeTab === 'experience' && (
              <ExperienceTab
                experiences={resume.experiences}
                onChange={(experiences) => onChange({ ...resume, experiences })}
              />
            )}

            {activeTab === 'education' && (
              <EducationTab
                educations={resume.educations}
                certifications={resume.certifications}
                onChangeEducations={(educations) => onChange({ ...resume, educations })}
                onChangeCertifications={(certifications) => onChange({ ...resume, certifications })}
              />
            )}

            {activeTab === 'skills' && (
              <SkillsTab
                skillGroups={resume.skillGroups}
                onChange={(skillGroups) => onChange({ ...resume, skillGroups })}
              />
            )}

            {activeTab === 'projects' && (
              <ProjectsTab
                projects={resume.projects}
                onChange={(projects) => onChange({ ...resume, projects })}
              />
            )}
          </div>
        </div>

        {/* Right Column: Reactive Live Preview (7 of 12 cols on desktop) */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col h-full overflow-hidden">
          <ResumePreview
            resume={resume}
            onUpdateTemplate={handleUpdateTemplate}
            onUpdateThemeColor={handleUpdateThemeColor}
          />
        </div>
      </div>
    </div>
  );
};
