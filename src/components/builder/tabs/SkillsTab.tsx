import React, { useState } from 'react';
import { SkillGroup, SkillProficiency } from '../../../types/resume';
import { Wrench, Plus, Trash2, X } from 'lucide-react';

interface Props {
  skillGroups: SkillGroup[];
  onChange: (updated: SkillGroup[]) => void;
}

const PROFICIENCIES: SkillProficiency[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

export const SkillsTab: React.FC<Props> = ({ skillGroups, onChange }) => {
  const [newSkillNames, setNewSkillNames] = useState<{ [groupId: string]: string }>({});

  const addGroup = () => {
    const newGroup: SkillGroup = {
      id: `sk_group_${Date.now()}`,
      category: 'New Domain Category',
      skills: [
        { name: 'Core Skill', level: 'Advanced' }
      ]
    };
    onChange([...skillGroups, newGroup]);
  };

  const updateCategory = (groupIndex: number, category: string) => {
    const next = [...skillGroups];
    next[groupIndex] = { ...next[groupIndex], category };
    onChange(next);
  };

  const removeGroup = (groupIndex: number) => {
    onChange(skillGroups.filter((_, i) => i !== groupIndex));
  };

  const addSkillToGroup = (groupId: string, groupIndex: number) => {
    const skillName = (newSkillNames[groupId] || '').trim();
    if (!skillName) return;

    const group = skillGroups[groupIndex];
    const updatedSkills = [...group.skills, { name: skillName, level: 'Advanced' as SkillProficiency }];
    const next = [...skillGroups];
    next[groupIndex] = { ...group, skills: updatedSkills };
    onChange(next);

    setNewSkillNames({ ...newSkillNames, [groupId]: '' });
  };

  const updateSkillLevel = (groupIndex: number, skillIndex: number, level: SkillProficiency) => {
    const group = skillGroups[groupIndex];
    const updatedSkills = [...group.skills];
    updatedSkills[skillIndex] = { ...updatedSkills[skillIndex], level };
    const next = [...skillGroups];
    next[groupIndex] = { ...group, skills: updatedSkills };
    onChange(next);
  };

  const removeSkillFromGroup = (groupIndex: number, skillIndex: number) => {
    const group = skillGroups[groupIndex];
    const updatedSkills = group.skills.filter((_, i) => i !== skillIndex);
    const next = [...skillGroups];
    next[groupIndex] = { ...group, skills: updatedSkills };
    onChange(next);
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
            <Wrench className="w-4 h-4 text-neutral-500" />
            <span>Grouped Skills & Tools ({skillGroups.length} categories)</span>
          </h3>
          <p className="text-[11px] text-neutral-500">
            Organized categories with clear competency ratings.
          </p>
        </div>
        <button
          type="button"
          onClick={addGroup}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add Skill Group</span>
        </button>
      </div>

      <div className="space-y-4">
        {skillGroups.map((group, groupIndex) => (
          <div
            key={group.id}
            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4 shadow-2xs"
          >
            <div className="flex items-center justify-between gap-3">
              <input
                type="text"
                value={group.category}
                onChange={(e) => updateCategory(groupIndex, e.target.value)}
                placeholder="Category Name (e.g. Languages & Frameworks)"
                className="font-bold text-xs text-neutral-900 dark:text-white bg-transparent border-b border-transparent hover:border-neutral-300 focus:border-neutral-900 dark:focus:border-white focus:outline-none py-1 flex-1"
              />
              <button
                type="button"
                onClick={() => removeGroup(groupIndex)}
                className="p-1 text-neutral-400 hover:text-rose-500 rounded"
                title="Remove Group"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Existing Skills List */}
            <div className="space-y-2">
              {group.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex items-center justify-between gap-3 px-3 py-2 bg-neutral-50 dark:bg-neutral-800/60 rounded-lg text-xs"
                >
                  <span className="font-semibold text-neutral-800 dark:text-neutral-200 flex-1">
                    {skill.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <select
                      value={skill.level}
                      onChange={(e) => updateSkillLevel(groupIndex, skillIndex, e.target.value as SkillProficiency)}
                      className="text-[11px] font-mono px-2 py-1 rounded bg-white dark:bg-neutral-700 border border-neutral-200 dark:border-neutral-600 text-neutral-700 dark:text-neutral-300 focus:outline-none"
                    >
                      {PROFICIENCIES.map((prof) => (
                        <option key={prof} value={prof}>
                          {prof}
                        </option>
                      ))}
                    </select>
                    <button
                      type="button"
                      onClick={() => removeSkillFromGroup(groupIndex, skillIndex)}
                      className="p-1 text-neutral-400 hover:text-rose-500 rounded"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Add Skill Input */}
            <div className="flex items-center gap-2 pt-1">
              <input
                type="text"
                value={newSkillNames[group.id] || ''}
                onChange={(e) => setNewSkillNames({ ...newSkillNames, [group.id]: e.target.value })}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    addSkillToGroup(group.id, groupIndex);
                  }
                }}
                placeholder="Add tool/skill and press Enter..."
                className="flex-1 px-3 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-neutral-900"
              />
              <button
                type="button"
                onClick={() => addSkillToGroup(group.id, groupIndex)}
                className="px-3 py-1.5 text-xs bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 font-medium rounded-lg"
              >
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
