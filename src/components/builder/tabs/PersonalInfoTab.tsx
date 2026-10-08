import React, { useRef } from 'react';
import { PersonalInfo } from '../../../types/resume';
import { User, Mail, Phone, MapPin, Globe, Linkedin, Github, Upload, Trash2, Sparkles } from 'lucide-react';

interface Props {
  info: PersonalInfo;
  onChange: (updated: PersonalInfo) => void;
}

export const PersonalInfoTab: React.FC<Props> = ({ info, onChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFieldChange = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...info,
      [field]: value,
    });
  };

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (loadEvent) => {
        const base64 = loadEvent.target?.result as string;
        onChange({
          ...info,
          avatarUrl: base64,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const removeAvatar = () => {
    onChange({
      ...info,
      avatarUrl: '',
    });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleApplyPresetSummary = () => {
    handleFieldChange(
      'summary',
      `Forward-thinking ${info.jobTitle || 'software professional'} with proven experience designing, testing, and shipping robust systems. Committed to code quality, cross-functional collaboration, and measurable business performance.`
    );
  };

  return (
    <div className="space-y-6">
      {/* Avatar & Core Identity */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <User className="w-4 h-4 text-neutral-500" />
          <span>Identity & Avatar</span>
        </h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="relative group shrink-0">
            <div className="w-20 h-20 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-100 dark:bg-neutral-800 overflow-hidden flex items-center justify-center">
              {info.avatarUrl ? (
                <img
                  src={info.avatarUrl}
                  alt={info.fullName}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <User className="w-8 h-8 text-neutral-400" />
              )}
            </div>
            {info.avatarUrl && (
              <button
                type="button"
                onClick={removeAvatar}
                className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white p-1 rounded-full hover:bg-rose-600 transition-colors shadow-xs"
                title="Remove Avatar"
              >
                <Trash2 className="w-3 h-3" />
              </button>
            )}
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex items-center gap-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleAvatarUpload}
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold rounded-lg cursor-pointer transition-colors"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Upload Photo</span>
              </label>
              <span className="text-[11px] text-neutral-400">
                Stored locally via Laravel storage driver
              </span>
            </div>
            <p className="text-[11px] text-neutral-500">
              Optimal size: 400x400 JPG or PNG. Displays neatly across modern templates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Full Legal Name *
            </label>
            <input
              type="text"
              value={info.fullName}
              onChange={(e) => handleFieldChange('fullName', e.target.value)}
              placeholder="e.g. Alexandra Rivera"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Professional Title *
            </label>
            <input
              type="text"
              value={info.jobTitle}
              onChange={(e) => handleFieldChange('jobTitle', e.target.value)}
              placeholder="e.g. Principal Full-Stack Engineer"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* Contact Channels */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
          <Mail className="w-4 h-4 text-neutral-500" />
          <span>Contact & Social Presence</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neutral-400" />
              <span>Email Address</span>
            </label>
            <input
              type="email"
              value={info.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              placeholder="alex@domain.com"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-neutral-400" />
              <span>Phone Number</span>
            </label>
            <input
              type="text"
              value={info.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              placeholder="+1 (555) 234-5678"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Location (City, Country/State)</span>
            </label>
            <input
              type="text"
              value={info.location}
              onChange={(e) => handleFieldChange('location', e.target.value)}
              placeholder="San Francisco, CA"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-neutral-400" />
              <span>Portfolio / Website URL</span>
            </label>
            <input
              type="url"
              value={info.website || ''}
              onChange={(e) => handleFieldChange('website', e.target.value)}
              placeholder="https://portfolio.me"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <Linkedin className="w-3.5 h-3.5 text-neutral-400" />
              <span>LinkedIn Profile</span>
            </label>
            <input
              type="url"
              value={info.linkedin || ''}
              onChange={(e) => handleFieldChange('linkedin', e.target.value)}
              placeholder="https://linkedin.com/in/username"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1 flex items-center gap-1.5">
              <Github className="w-3.5 h-3.5 text-neutral-400" />
              <span>GitHub Profile</span>
            </label>
            <input
              type="url"
              value={info.github || ''}
              onChange={(e) => handleFieldChange('github', e.target.value)}
              placeholder="https://github.com/username"
              className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100">
            Professional Summary & Bio
          </label>
          <button
            type="button"
            onClick={handleApplyPresetSummary}
            className="inline-flex items-center gap-1 text-[11px] text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>Generate Draft</span>
          </button>
        </div>
        <textarea
          rows={4}
          value={info.summary}
          onChange={(e) => handleFieldChange('summary', e.target.value)}
          placeholder="Brief 2-4 sentence narrative highlighting your core specializations, track record, and technical philosophy..."
          className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 dark:focus:ring-white leading-relaxed"
        />
        <div className="text-[11px] text-neutral-400">
          Tip: ATS algorithms scan summaries for high-value domain keywords and quantitative achievements.
        </div>
      </div>
    </div>
  );
};
