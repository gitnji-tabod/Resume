import React from 'react';
import { ProjectItem } from '../../../types/resume';
import { FolderGit2, Plus, Trash2, ExternalLink, Github } from 'lucide-react';

interface Props {
  projects: ProjectItem[];
  onChange: (updated: ProjectItem[]) => void;
}

export const ProjectsTab: React.FC<Props> = ({ projects, onChange }) => {
  const addProject = () => {
    const newItem: ProjectItem = {
      id: `proj_${Date.now()}`,
      title: '',
      role: '',
      url: '',
      repoUrl: '',
      tags: [],
      description: '',
      highlights: [''],
    };
    onChange([...projects, newItem]);
  };

  const updateProject = (index: number, updated: Partial<ProjectItem>) => {
    const next = [...projects];
    next[index] = { ...next[index], ...updated };
    onChange(next);
  };

  const removeProject = (index: number) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  const handleTagsInput = (index: number, input: string) => {
    const tags = input
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);
    updateProject(index, { tags });
  };

  const updateHighlight = (projIndex: number, hIndex: number, text: string) => {
    const proj = projects[projIndex];
    const nextH = [...proj.highlights];
    nextH[hIndex] = text;
    updateProject(projIndex, { highlights: nextH });
  };

  const addHighlight = (projIndex: number) => {
    const proj = projects[projIndex];
    updateProject(projIndex, { highlights: [...(proj.highlights || []), ''] });
  };

  const removeHighlight = (projIndex: number, hIndex: number) => {
    const proj = projects[projIndex];
    updateProject(projIndex, {
      highlights: proj.highlights.filter((_, i) => i !== hIndex),
    });
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <FolderGit2 className="w-4 h-4 text-neutral-500" />
            <span>Projects & Portfolio ({projects.length})</span>
          </h3>
          <p className="text-[11px] text-neutral-500">
            Showcase notable open-source repositories, client apps, and high-impact systems.
          </p>
        </div>
        <button
          type="button"
          onClick={addProject}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Project</span>
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-6 text-center text-xs text-neutral-500">
          No projects added yet. Click &ldquo;Add Project&rdquo; to showcase your work.
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((proj, index) => (
            <div
              key={proj.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4 shadow-2xs"
            >
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="font-semibold text-xs text-neutral-900 dark:text-white">
                  {proj.title || `Project #${index + 1}`}
                </span>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="p-1 text-rose-500 hover:text-rose-700 rounded"
                  title="Remove Project"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    value={proj.title}
                    onChange={(e) => updateProject(index, { title: e.target.value })}
                    placeholder="e.g. Distributed Task Queue"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Your Role / Capacity
                  </label>
                  <input
                    type="text"
                    value={proj.role || ''}
                    onChange={(e) => updateProject(index, { role: e.target.value })}
                    placeholder="e.g. Lead Architect & Creator"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                    <span>Live URL</span>
                  </label>
                  <input
                    type="url"
                    value={proj.url || ''}
                    onChange={(e) => updateProject(index, { url: e.target.value })}
                    placeholder="https://myproject.app"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1">
                    <Github className="w-3 h-3 text-neutral-400" />
                    <span>Repository URL</span>
                  </label>
                  <input
                    type="url"
                    value={proj.repoUrl || ''}
                    onChange={(e) => updateProject(index, { repoUrl: e.target.value })}
                    placeholder="https://github.com/user/project"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Tech Stack Tags (comma separated)
                  </label>
                  <input
                    type="text"
                    value={proj.tags.join(', ')}
                    onChange={(e) => handleTagsInput(index, e.target.value)}
                    placeholder="e.g. React 19, TypeScript, Laravel 11, SQLite, Tailwind"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Brief Description
                  </label>
                  <textarea
                    rows={2}
                    value={proj.description}
                    onChange={(e) => updateProject(index, { description: e.target.value })}
                    placeholder="Concise overview of purpose, problem solved, and technical architecture..."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white leading-relaxed"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Key Highlights & Metrics
                    </label>
                    <button
                      type="button"
                      onClick={() => addHighlight(index)}
                      className="text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white"
                    >
                      + Add highlight
                    </button>
                  </div>
                  {proj.highlights && proj.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={h}
                        onChange={(e) => updateHighlight(index, hIdx, e.target.value)}
                        placeholder="e.g. Handled 10k concurrent WebSockets with zero frame drop..."
                        className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                      />
                      <button
                        type="button"
                        onClick={() => removeHighlight(index, hIdx)}
                        className="p-1 text-neutral-400 hover:text-rose-500"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
