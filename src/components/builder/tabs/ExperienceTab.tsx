import React from 'react';
import { ExperienceItem } from '../../../types/resume';
import { Briefcase, Plus, Trash2, ArrowUp, ArrowDown, Sparkles } from 'lucide-react';

interface Props {
  experiences: ExperienceItem[];
  onChange: (updated: ExperienceItem[]) => void;
}

export const ExperienceTab: React.FC<Props> = ({ experiences, onChange }) => {
  const addExperience = () => {
    const newItem: ExperienceItem = {
      id: `exp_${Date.now()}`,
      company: '',
      role: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      bullets: [''],
    };
    onChange([newItem, ...experiences]);
  };

  const updateItem = (index: number, updated: Partial<ExperienceItem>) => {
    const next = [...experiences];
    next[index] = { ...next[index], ...updated };
    onChange(next);
  };

  const removeItem = (index: number) => {
    onChange(experiences.filter((_, i) => i !== index));
  };

  const moveItem = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= experiences.length) return;
    const next = [...experiences];
    const [moved] = next.splice(index, 1);
    next.splice(targetIndex, 0, moved);
    onChange(next);
  };

  const updateBullet = (expIndex: number, bulletIndex: number, text: string) => {
    const exp = experiences[expIndex];
    const nextBullets = [...exp.bullets];
    nextBullets[bulletIndex] = text;
    updateItem(expIndex, { bullets: nextBullets });
  };

  const addBullet = (expIndex: number) => {
    const exp = experiences[expIndex];
    updateItem(expIndex, { bullets: [...exp.bullets, ''] });
  };

  const removeBullet = (expIndex: number, bulletIndex: number) => {
    const exp = experiences[expIndex];
    updateItem(expIndex, {
      bullets: exp.bullets.filter((_, i) => i !== bulletIndex),
    });
  };

  const insertActionVerb = (expIndex: number, bulletIndex: number, verb: string) => {
    const current = experiences[expIndex].bullets[bulletIndex] || '';
    updateBullet(expIndex, bulletIndex, `${verb} ${current}`.trim());
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-neutral-500" />
            <span>Work Experience ({experiences.length})</span>
          </h3>
          <p className="text-[11px] text-neutral-500">
            Chronological career history with metric-driven bullet points.
          </p>
        </div>
        <button
          type="button"
          onClick={addExperience}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Position</span>
        </button>
      </div>

      {experiences.length === 0 ? (
        <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-8 text-center space-y-3">
          <Briefcase className="w-8 h-8 text-neutral-400 mx-auto" />
          <p className="text-xs text-neutral-600 dark:text-neutral-400">
            No work experience added yet. Add your past companies, responsibilities, and achievements.
          </p>
          <button
            type="button"
            onClick={addExperience}
            className="px-3 py-1.5 text-xs bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 text-neutral-800 dark:text-neutral-200 font-medium rounded-lg"
          >
            Add First Role
          </button>
        </div>
      ) : (
        <div className="space-y-5">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4 shadow-2xs"
            >
              {/* Header bar */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-200/60 dark:border-neutral-800">
                <span className="font-semibold text-xs text-neutral-900 dark:text-white truncate max-w-[240px]">
                  {exp.role || exp.company ? `${exp.role || 'Role'} at ${exp.company || 'Company'}` : `Position #${index + 1}`}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    disabled={index === 0}
                    onClick={() => moveItem(index, 'up')}
                    className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-30 rounded"
                    title="Move Up"
                  >
                    <ArrowUp className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    disabled={index === experiences.length - 1}
                    onClick={() => moveItem(index, 'down')}
                    className="p-1 text-neutral-400 hover:text-neutral-700 disabled:opacity-30 rounded"
                    title="Move Down"
                  >
                    <ArrowDown className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="p-1 text-rose-500 hover:text-rose-700 rounded ml-1"
                    title="Delete Position"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Form Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Job Title / Role *
                  </label>
                  <input
                    type="text"
                    value={exp.role}
                    onChange={(e) => updateItem(index, { role: e.target.value })}
                    placeholder="e.g. Lead Full-Stack Architect"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={exp.company}
                    onChange={(e) => updateItem(index, { company: e.target.value })}
                    placeholder="e.g. Acme Tech Corp"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    value={exp.location || ''}
                    onChange={(e) => updateItem(index, { location: e.target.value })}
                    placeholder="e.g. New York, NY (or Remote)"
                    className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                  />
                </div>
                <div className="space-y-1">
                  <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Employment Dates
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={exp.startDate}
                      onChange={(e) => updateItem(index, { startDate: e.target.value })}
                      placeholder="YYYY-MM"
                      className="w-1/2 px-2.5 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                    />
                    <span className="text-neutral-400 text-xs">to</span>
                    {exp.current ? (
                      <span className="w-1/2 py-2 text-xs text-neutral-500 font-medium px-2">
                        Present
                      </span>
                    ) : (
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => updateItem(index, { endDate: e.target.value })}
                        placeholder="YYYY-MM"
                        className="w-1/2 px-2.5 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                      />
                    )}
                  </div>
                  <label className="flex items-center gap-1.5 pt-1 text-[11px] text-neutral-600 dark:text-neutral-400 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={exp.current}
                      onChange={(e) => updateItem(index, { current: e.target.checked })}
                      className="rounded border-neutral-300"
                    />
                    <span>I currently work here</span>
                  </label>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Responsibilities & Quantifiable Achievements
                  </label>
                  <button
                    type="button"
                    onClick={() => addBullet(index)}
                    className="inline-flex items-center gap-1 text-[11px] text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white font-medium"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add Bullet</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="space-y-1">
                      <div className="flex items-start gap-2">
                        <span className="text-xs text-neutral-400 pt-2 font-mono">
                          {bIdx + 1}.
                        </span>
                        <textarea
                          rows={2}
                          value={bullet}
                          onChange={(e) => updateBullet(index, bIdx, e.target.value)}
                          placeholder="e.g. Architected high-throughput message pipeline reducing p99 latency by 45%..."
                          className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 leading-relaxed"
                        />
                        <button
                          type="button"
                          onClick={() => removeBullet(index, bIdx)}
                          className="p-1 text-neutral-400 hover:text-rose-500 pt-2"
                          title="Remove bullet"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Action Verb Helper */}
                      <div className="flex items-center gap-1 text-[10px] text-neutral-400 pl-6">
                        <Sparkles className="w-2.5 h-2.5 text-amber-500" />
                        <span>Action verbs:</span>
                        {['Spearheaded', 'Engineered', 'Optimized', 'Scaled'].map((verb) => (
                          <button
                            key={verb}
                            type="button"
                            onClick={() => insertActionVerb(index, bIdx, verb)}
                            className="hover:underline text-neutral-600 dark:text-neutral-300"
                          >
                            +{verb}
                          </button>
                        ))}
                      </div>
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
