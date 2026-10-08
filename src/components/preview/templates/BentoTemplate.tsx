import React from 'react';
import { Resume } from '../../../types/resume';
import { getThemeClasses } from '../../../utils/themeUtils';
import { Mail, Phone, MapPin, Globe, Linkedin, Github, ExternalLink } from 'lucide-react';

interface Props {
  resume: Resume;
}

export const BentoTemplate: React.FC<Props> = ({ resume }) => {
  const { personalInfo, experiences, educations, certifications, skillGroups, projects, themeColor } = resume;
  const theme = getThemeClasses(themeColor);

  return (
    <div className="text-neutral-900 bg-white font-sans text-[13px] leading-relaxed p-8 sm:p-10 space-y-6 max-w-[850px] mx-auto print:p-0 print:text-[12px] print:leading-snug">
      {/* Bento Header */}
      <div className="border border-neutral-200/80 rounded-xl p-6 bg-neutral-50/50 print:border-neutral-300 print:bg-transparent print:p-4 print:rounded-none">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="space-y-2 flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 print:text-2xl">
              {personalInfo.fullName || 'Full Name'}
            </h1>
            <p className={`text-base font-semibold ${theme.accentText}`}>
              {personalInfo.jobTitle || 'Professional Title'}
            </p>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-600 tabular-nums pt-1">
              {personalInfo.email && (
                <span className="inline-flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:text-neutral-900">{personalInfo.email}</a>
                </span>
              )}
              {personalInfo.phone && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{personalInfo.phone}</span>
                  </span>
                </>
              )}
              {personalInfo.location && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span>{personalInfo.location}</span>
                  </span>
                </>
              )}
              {personalInfo.website && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <a href={personalInfo.website} target="_blank" rel="noreferrer" className="hover:text-neutral-900 underline underline-offset-2">Portfolio</a>
                  </span>
                </>
              )}
              {personalInfo.linkedin && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Linkedin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-neutral-900">LinkedIn</a>
                  </span>
                </>
              )}
              {personalInfo.github && (
                <>
                  <span className="text-neutral-300" aria-hidden="true">·</span>
                  <span className="inline-flex items-center gap-1">
                    <Github className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-neutral-900">GitHub</a>
                  </span>
                </>
              )}
            </div>
          </div>
          {personalInfo.avatarUrl && (
            <div className="shrink-0 w-20 h-20 rounded-lg overflow-hidden border border-neutral-200 bg-neutral-100 print:w-16 print:h-16">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {personalInfo.summary && (
          <div className="mt-4 pt-4 border-t border-neutral-200/60 text-neutral-700 text-xs sm:text-[13px] leading-relaxed">
            {personalInfo.summary}
          </div>
        )}
      </div>

      {/* Bento Grid: 2 Columns for Experience and Skills */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 print:grid-cols-12 print:gap-4">
        {/* Left Column: Experience & Projects (7 cols) */}
        <div className="lg:col-span-8 space-y-6 print:col-span-8 print:space-y-4">
          {/* Experience Section */}
          {experiences.length > 0 && (
            <section className="border border-neutral-200/80 rounded-xl p-6 bg-white space-y-4 print:border-neutral-300 print:p-0 print:rounded-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Work Experience
                </h2>
                <span className="text-xs text-neutral-400 font-mono">01</span>
              </div>

              <div className="space-y-5 print:space-y-3">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2 print-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h3 className="font-semibold text-neutral-900 text-sm">
                          {exp.role}
                        </h3>
                        <div className="text-xs text-neutral-600 font-medium">
                          {exp.company}
                          {exp.location && <span> · {exp.location}</span>}
                        </div>
                      </div>
                      <div className="text-xs font-mono text-neutral-500 tabular-nums">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.bullets.length > 0 && (
                      <ul className="space-y-1.5 text-xs text-neutral-700 pl-4 list-disc marker:text-neutral-400">
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} className="leading-relaxed">{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Featured Projects Section */}
          {projects.length > 0 && (
            <section className="border border-neutral-200/80 rounded-xl p-6 bg-white space-y-4 print:border-neutral-300 print:p-0 print:rounded-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Key Projects & Portfolio
                </h2>
                <span className="text-xs text-neutral-400 font-mono">02</span>
              </div>

              <div className="space-y-4 print:space-y-3">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1.5 print-break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-neutral-900 text-sm">{proj.title}</h3>
                        {proj.role && <span className="text-xs text-neutral-500">({proj.role})</span>}
                      </div>
                      {proj.url && (
                        <a
                          href={proj.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-neutral-500 hover:text-neutral-900 underline underline-offset-2 shrink-0"
                        >
                          <span>Visit</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-neutral-700 leading-relaxed">{proj.description}</p>
                    {proj.tags.length > 0 && (
                      <div className="text-[11px] text-neutral-500 font-mono">
                        Tech stack: {proj.tags.join(' · ')}
                      </div>
                    )}
                    {proj.highlights && proj.highlights.length > 0 && (
                      <ul className="space-y-1 text-xs text-neutral-600 pl-4 list-disc marker:text-neutral-300 pt-1">
                        {proj.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column: Skills, Education, Certifications (4 cols) */}
        <div className="lg:col-span-4 space-y-6 print:col-span-4 print:space-y-4">
          {/* Skills Tile */}
          {skillGroups.length > 0 && (
            <section className="border border-neutral-200/80 rounded-xl p-6 bg-neutral-50/40 space-y-4 print:border-neutral-300 print:p-0 print:bg-transparent print:rounded-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Skills & Tools
                </h2>
                <span className="text-xs text-neutral-400 font-mono">03</span>
              </div>

              <div className="space-y-4">
                {skillGroups.map((group) => (
                  <div key={group.id} className="space-y-1.5 print-break-inside-avoid">
                    <h3 className="text-xs font-semibold text-neutral-800 tracking-wide">
                      {group.category}
                    </h3>
                    <div className="space-y-1 text-xs text-neutral-700">
                      {group.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center justify-between py-0.5 border-b border-neutral-100 last:border-none">
                          <span className="font-medium text-neutral-800">{skill.name}</span>
                          <span className="text-[11px] text-neutral-500 font-mono">{skill.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education Tile */}
          {educations.length > 0 && (
            <section className="border border-neutral-200/80 rounded-xl p-6 bg-white space-y-4 print:border-neutral-300 print:p-0 print:rounded-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Education
                </h2>
                <span className="text-xs text-neutral-400 font-mono">04</span>
              </div>

              <div className="space-y-3">
                {educations.map((edu) => (
                  <div key={edu.id} className="space-y-1 print-break-inside-avoid">
                    <h3 className="font-semibold text-neutral-900 text-xs sm:text-sm">
                      {edu.degree}
                    </h3>
                    <div className="text-xs text-neutral-600 font-medium">
                      {edu.institution}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-500 tabular-nums">
                      {edu.startDate} – {edu.current ? 'Present' : edu.endDate}
                    </div>
                    {edu.gpaOrHonors && (
                      <div className="text-xs text-neutral-600 italic">
                        {edu.gpaOrHonors}
                      </div>
                    )}
                    {edu.description && (
                      <p className="text-xs text-neutral-600 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications Tile */}
          {certifications.length > 0 && (
            <section className="border border-neutral-200/80 rounded-xl p-6 bg-white space-y-4 print:border-neutral-300 print:p-0 print:rounded-none">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-200/70">
                <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                  Certifications
                </h2>
                <span className="text-xs text-neutral-400 font-mono">05</span>
              </div>

              <div className="space-y-2.5">
                {certifications.map((cert) => (
                  <div key={cert.id} className="space-y-0.5 print-break-inside-avoid text-xs">
                    <div className="font-semibold text-neutral-900">{cert.name}</div>
                    <div className="text-neutral-600 flex items-center justify-between">
                      <span>{cert.issuer}</span>
                      <span className="font-mono text-neutral-400 tabular-nums">{cert.issueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};
