import React from 'react';
import { Resume } from '../../../types/resume';

interface Props {
  resume: Resume;
}

export const ExecutiveAtsTemplate: React.FC<Props> = ({ resume }) => {
  const { personalInfo, experiences, educations, certifications, skillGroups, projects } = resume;

  return (
    <div className="text-neutral-900 bg-white font-sans text-[12.5px] leading-relaxed p-8 sm:p-12 space-y-5 max-w-[850px] mx-auto print:p-0 print:text-[11.5px] print:leading-snug">
      {/* ATS Header: Center aligned, high clarity */}
      <header className="text-center space-y-1.5 border-b border-neutral-300 pb-4 print:pb-3">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 uppercase">
          {personalInfo.fullName || 'Full Name'}
        </h1>
        <div className="text-sm font-semibold text-neutral-700">
          {personalInfo.jobTitle || 'Professional Title'}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs text-neutral-600 tabular-nums">
          {personalInfo.location && <span>{personalInfo.location}</span>}
          {personalInfo.phone && (
            <>
              <span className="text-neutral-400" aria-hidden="true">|</span>
              <span>{personalInfo.phone}</span>
            </>
          )}
          {personalInfo.email && (
            <>
              <span className="text-neutral-400" aria-hidden="true">|</span>
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-neutral-400" aria-hidden="true">|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="text-neutral-400" aria-hidden="true">|</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
            </>
          )}
          {personalInfo.website && (
            <>
              <span className="text-neutral-400" aria-hidden="true">|</span>
              <a href={personalInfo.website} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
            </>
          )}
        </div>
      </header>

      {/* Professional Summary */}
      {personalInfo.summary && (
        <section className="space-y-1 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Professional Summary
          </h2>
          <p className="text-neutral-800 text-xs sm:text-[12.5px] leading-relaxed pt-1">
            {personalInfo.summary}
          </p>
        </section>
      )}

      {/* Technical Skills */}
      {skillGroups.length > 0 && (
        <section className="space-y-1.5 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Technical & Professional Skills
          </h2>
          <div className="space-y-1 text-xs pt-1">
            {skillGroups.map((group) => (
              <div key={group.id} className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                <span className="font-semibold text-neutral-900 min-w-[170px] shrink-0">
                  {group.category}:
                </span>
                <span className="text-neutral-700">
                  {group.skills.map((s) => s.name).join(', ')}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Professional Experience */}
      {experiences.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Professional Experience
          </h2>

          <div className="space-y-4 pt-1">
            {experiences.map((exp) => (
              <div key={exp.id} className="space-y-1.5 print-break-inside-avoid">
                <div className="flex justify-between items-baseline gap-2">
                  <div className="font-bold text-neutral-900 text-xs sm:text-sm">
                    {exp.role} <span className="font-semibold text-neutral-700">| {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-neutral-600 tabular-nums shrink-0">
                    {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                  </div>
                </div>
                {exp.location && (
                  <div className="text-[11px] text-neutral-500 italic">
                    {exp.location}
                  </div>
                )}
                {exp.bullets.length > 0 && (
                  <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-neutral-600">
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

      {/* Projects */}
      {projects.length > 0 && (
        <section className="space-y-2.5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Key Projects
          </h2>

          <div className="space-y-3 pt-1">
            {projects.map((proj) => (
              <div key={proj.id} className="space-y-1 print-break-inside-avoid">
                <div className="flex justify-between items-baseline gap-2">
                  <div className="font-bold text-neutral-900 text-xs">
                    {proj.title}
                    {proj.role && <span className="font-normal text-neutral-600"> — {proj.role}</span>}
                  </div>
                  {proj.url && (
                    <a href={proj.url} target="_blank" rel="noreferrer" className="text-xs text-neutral-600 underline font-mono">
                      {proj.url.replace(/^https?:\/\//, '')}
                    </a>
                  )}
                </div>
                <p className="text-xs text-neutral-700">{proj.description}</p>
                {proj.tags.length > 0 && (
                  <div className="text-[11px] text-neutral-500 font-mono">
                    Technologies: {proj.tags.join(', ')}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {educations.length > 0 && (
        <section className="space-y-2 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Education
          </h2>

          <div className="space-y-2 pt-1">
            {educations.map((edu) => (
              <div key={edu.id} className="space-y-0.5">
                <div className="flex justify-between items-baseline gap-2">
                  <div className="font-bold text-neutral-900 text-xs">
                    {edu.degree} {edu.fieldOfStudy && `— ${edu.fieldOfStudy}`}
                  </div>
                  <div className="text-xs font-mono text-neutral-600 tabular-nums">
                    {edu.startDate} – {edu.current ? 'Present' : edu.endDate}
                  </div>
                </div>
                <div className="text-xs text-neutral-700 flex items-center justify-between">
                  <span>{edu.institution} {edu.location && `(${edu.location})`}</span>
                  {edu.gpaOrHonors && <span className="text-[11px] text-neutral-600 italic">{edu.gpaOrHonors}</span>}
                </div>
                {edu.description && (
                  <p className="text-[11.5px] text-neutral-600">{edu.description}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certifications */}
      {certifications.length > 0 && (
        <section className="space-y-1.5 print-break-inside-avoid">
          <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-800 pb-0.5">
            Certifications & Credentials
          </h2>
          <div className="space-y-1 pt-1 text-xs">
            {certifications.map((cert) => (
              <div key={cert.id} className="flex justify-between items-baseline">
                <span className="font-semibold text-neutral-900">
                  {cert.name} <span className="font-normal text-neutral-600">({cert.issuer})</span>
                </span>
                <span className="font-mono text-neutral-500 text-[11px] tabular-nums">
                  {cert.issueDate}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
