/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { BuilderWorkspace } from './components/builder/BuilderWorkspace';
import { LaravelArchitectureModal } from './components/laravel/LaravelArchitectureModal';
import { storageService } from './services/storageService';
import { Resume, TemplateType } from './types/resume';

export default function App() {
  const [resumes, setResumes] = useState<Resume[]>(() => storageService.getResumes());
  const [activeResumeId, setActiveResumeId] = useState<string>(() => storageService.getActiveResumeId());
  const [currentView, setCurrentView] = useState<'dashboard' | 'builder'>('dashboard');
  const [isLaravelModalOpen, setIsLaravelModalOpen] = useState<boolean>(false);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('foliocraft_dark_mode') === 'true' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Dark mode effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('foliocraft_dark_mode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('foliocraft_dark_mode', 'false');
    }
  }, [isDarkMode]);

  // Keep active resume in sync
  const activeResume = resumes.find((r) => r.id === activeResumeId) || resumes[0];

  const handleSelectResume = (id: string) => {
    setActiveResumeId(id);
    storageService.setActiveResumeId(id);
    setCurrentView('builder');
  };

  const handleCreateResume = (template: TemplateType) => {
    const created = storageService.createResume(template);
    setResumes(storageService.getResumes());
    setActiveResumeId(created.id);
    storageService.setActiveResumeId(created.id);
    setCurrentView('builder');
  };

  const handleCloneResume = (id: string) => {
    const cloned = storageService.cloneResume(id);
    if (cloned) {
      setResumes(storageService.getResumes());
    }
  };

  const handleDeleteResume = (id: string) => {
    const success = storageService.deleteResume(id);
    if (success) {
      const remaining = storageService.getResumes();
      setResumes(remaining);
      if (activeResumeId === id && remaining.length > 0) {
        setActiveResumeId(remaining[0].id);
        storageService.setActiveResumeId(remaining[0].id);
      }
    }
  };

  const handleResetSeedData = () => {
    const seeded = storageService.resetToSeedData();
    setResumes(seeded);
    setActiveResumeId(seeded[0].id);
    storageService.setActiveResumeId(seeded[0].id);
  };

  const handleUpdateActiveResume = (updated: Resume) => {
    storageService.saveResume(updated);
    setResumes(storageService.getResumes());
  };

  const handleExportJson = (resumeToExport?: Resume) => {
    const target = resumeToExport || activeResume;
    if (target) {
      storageService.exportResumeJson(target);
    }
  };

  const handleImportJson = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const imported = storageService.importResumeJson(text);
        setResumes(storageService.getResumes());
        setActiveResumeId(imported.id);
        storageService.setActiveResumeId(imported.id);
        setCurrentView('builder');
      } catch (err) {
        alert('Invalid resume JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <Header
        currentView={currentView}
        onNavigate={(view) => setCurrentView(view)}
        onOpenLaravelModal={() => setIsLaravelModalOpen(true)}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
      />

      <main className="flex-1 overflow-hidden">
        {currentView === 'dashboard' ? (
          <Dashboard
            resumes={resumes}
            onSelectResume={handleSelectResume}
            onCreateResume={handleCreateResume}
            onCloneResume={handleCloneResume}
            onDeleteResume={handleDeleteResume}
            onResetSeedData={handleResetSeedData}
            onExportJson={handleExportJson}
            onImportJson={handleImportJson}
          />
        ) : (
          activeResume && (
            <BuilderWorkspace
              resume={activeResume}
              onChange={handleUpdateActiveResume}
              onBackToDashboard={() => setCurrentView('dashboard')}
              onExportJson={() => handleExportJson(activeResume)}
            />
          )
        )}
      </main>

      <LaravelArchitectureModal
        isOpen={isLaravelModalOpen}
        onClose={() => setIsLaravelModalOpen(false)}
      />
    </div>
  );
}
