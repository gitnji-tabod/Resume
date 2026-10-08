import React, { useState } from 'react';
import { Resume, TemplateType } from '../types/resume';
import {
  Plus,
  Copy,
  Trash2,
  Edit3,
  FileDown,
  Printer,
  Search,
  RotateCcw,
  Sparkles,
  LayoutGrid
} from 'lucide-react';

interface Props {
  resumes: Resume[];
  onSelectResume: (id: string) => void;
  onCreateResume: (template: TemplateType) => void;
  onCloneResume: (id: string) => void;
  onDeleteResume: (id: string) => void;
  onResetSeedData: () => void;
  onExportJson: (resume: Resume) => void;
  onImportJson: (file: File) => void;
}

export const Dashboard: React.FC<Props> = ({
  resumes,
  onSelectResume,
  onCreateResume,
  onCloneResume,
  onDeleteResume,
  onResetSeedData,
  onExportJson,
  onImportJson,
}) => {
  const [search, setSearch] = useState<string>('');
  const [templateFilter, setTemplateFilter] = useState<string>('all');
  const [showCreateModal, setShowCreateModal] = useState<boolean>(false);

  const filteredResumes = resumes.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.personalInfo.fullName.toLowerCase().includes(search.toLowerCase()) ||
      r.personalInfo.jobTitle.toLowerCase().includes(search.toLowerCase());

    const matchesTemplate =
      templateFilter === 'all' || r.template === templateFilter;

    return matchesSearch && matchesTemplate;
  });

  const formatDate = (isoStr: string) => {
    try {
      const date = new Date(isoStr);
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch {
      return 'Recently';
    }
  };

  const handlePrintResume = (resume: Resume) => {
    onSelectResume(resume.id);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Dashboard Top Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Resume Workspace
          </h1>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Build, iterate, clone, and export localized ATS-compliant professional resumes.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={onResetSeedData}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 transition-colors shadow-2xs"
            title="Reset to DatabaseSeeder sample resumes"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Seeders</span>
          </button>

          <label className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-neutral-700 dark:text-neutral-300 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer transition-colors shadow-2xs">
            <FileDown className="w-3.5 h-3.5" />
            <span>Import JSON</span>
            <input
              type="file"
              accept=".json"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) onImportJson(file);
              }}
            />
          </label>

          <button
            type="button"
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100 rounded-lg transition-colors shadow-xs"
          >
            <Plus className="w-4 h-4" />
            <span>New Resume</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-neutral-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, name, or role..."
            className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
          />
        </div>

        {/* Template Segmented Control */}
        <div className="flex items-center gap-1 bg-neutral-100 dark:bg-neutral-800/80 p-1 rounded-lg text-xs w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setTemplateFilter('all')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${templateFilter === 'all' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
          >
            All Layouts
          </button>
          <button
            type="button"
            onClick={() => setTemplateFilter('bento')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${templateFilter === 'bento' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
          >
            Bento Grid
          </button>
          <button
            type="button"
            onClick={() => setTemplateFilter('editorial')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${templateFilter === 'editorial' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
          >
            Editorial
          </button>
          <button
            type="button"
            onClick={() => setTemplateFilter('executive')}
            className={`px-3 py-1.5 rounded-md font-medium transition-all ${templateFilter === 'executive' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
          >
            Classic ATS
          </button>
        </div>
      </div>

      {/* Resumes Grid */}
      {filteredResumes.length === 0 ? (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-2xl p-12 text-center space-y-4">
          <LayoutGrid className="w-10 h-10 text-neutral-400 mx-auto" />
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">
            No resumes match your filter
          </h3>
          <p className="text-xs text-neutral-500 max-w-sm mx-auto">
            Try adjusting your search query, selecting another layout category, or create a new resume from scratch.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearch('');
              setTemplateFilter('all');
            }}
            className="px-3 py-1.5 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-lg hover:bg-neutral-200 font-medium"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResumes.map((resume) => (
            <div
              key={resume.id}
              className="group bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-300 dark:hover:border-neutral-700 transition-all flex flex-col shadow-xs"
            >
              {/* Card Header & Preview Snapshot */}
              <div
                onClick={() => onSelectResume(resume.id)}
                className="p-5 cursor-pointer bg-neutral-50/50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-800/80 space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <h2 className="font-bold text-sm text-neutral-900 dark:text-white group-hover:text-neutral-600 dark:group-hover:text-neutral-300 transition-colors truncate">
                      {resume.title}
                    </h2>
                    <p className="text-xs text-neutral-500 truncate">
                      {resume.personalInfo.fullName} · {resume.personalInfo.jobTitle}
                    </p>
                  </div>

                  <div className="shrink-0 flex items-center gap-1.5">
                    <span className="text-[11px] font-mono text-neutral-400 capitalize bg-white dark:bg-neutral-800 px-2 py-0.5 rounded border border-neutral-200/80 dark:border-neutral-700">
                      {resume.template}
                    </span>
                  </div>
                </div>

                {/* Metadata row */}
                <div className="flex items-center gap-3 text-[11px] text-neutral-500 tabular-nums font-mono pt-1">
                  <span>Updated: {formatDate(resume.updatedAt)}</span>
                  <span>·</span>
                  <span>{resume.experiences.length} roles</span>
                  <span>·</span>
                  <span>{resume.projects.length} projects</span>
                </div>
              </div>

              {/* Card Summary Preview Snippet */}
              <div
                onClick={() => onSelectResume(resume.id)}
                className="p-5 flex-1 cursor-pointer text-xs text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed"
              >
                {resume.personalInfo.summary || 'Click to edit personal info, employment history, and projects...'}
              </div>

              {/* Card Footer Actions */}
              <div className="px-5 py-3 bg-neutral-50 dark:bg-neutral-950/60 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => onSelectResume(resume.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 dark:text-white hover:underline"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Open Builder</span>
                </button>

                <div className="flex items-center gap-1 text-neutral-500">
                  <button
                    type="button"
                    onClick={() => handlePrintResume(resume)}
                    className="p-1.5 hover:text-neutral-900 dark:hover:text-white rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
                    title="Export ATS PDF"
                  >
                    <Printer className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onExportJson(resume)}
                    className="p-1.5 hover:text-neutral-900 dark:hover:text-white rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
                    title="Download JSON format"
                  >
                    <FileDown className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onCloneResume(resume.id)}
                    className="p-1.5 hover:text-neutral-900 dark:hover:text-white rounded hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors"
                    title="Duplicate Resume"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>

                  {resumes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => onDeleteResume(resume.id)}
                      className="p-1.5 text-rose-500 hover:text-rose-700 rounded hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
                      title="Delete Resume"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create New Resume Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 bg-neutral-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-2xl max-w-md w-full p-6 space-y-5 shadow-2xl">
            <div className="space-y-1">
              <h3 className="text-base font-bold text-neutral-900 dark:text-white">
                Choose Starting Template
              </h3>
              <p className="text-xs text-neutral-500">
                Pick a foundational framework. You can change themes or customize fields anytime in the live preview.
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => {
                  onCreateResume('bento');
                  setShowCreateModal(false);
                }}
                className="w-full text-left p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all bg-neutral-50/50 dark:bg-neutral-800/40 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-neutral-900 dark:text-white">Bento Grid Layout</span>
                  <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Modular cards, clean hairline partitions, ideal for modern tech & engineering roles.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onCreateResume('editorial');
                  setShowCreateModal(false);
                }}
                className="w-full text-left p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all bg-neutral-50/50 dark:bg-neutral-800/40 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-neutral-900 dark:text-white">Clean Editorial</span>
                  <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Timeless two-column typographic rhythm with sophisticated asymmetric margins.
                </p>
              </button>

              <button
                type="button"
                onClick={() => {
                  onCreateResume('executive');
                  setShowCreateModal(false);
                }}
                className="w-full text-left p-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-white transition-all bg-neutral-50/50 dark:bg-neutral-800/40 space-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-neutral-900 dark:text-white">Classic Executive ATS</span>
                  <Sparkles className="w-3.5 h-3.5 text-neutral-500" />
                </div>
                <p className="text-[11px] text-neutral-500">
                  Single-column streamlined format engineered for strict corporate ATS parser machines.
                </p>
              </button>
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-xs font-semibold text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
