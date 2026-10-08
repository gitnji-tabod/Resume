import React from 'react';
import { Resume } from '../../../types/resume';
import { getThemeClasses } from '../../../utils/themeUtils';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface Props {
  resume: Resume;
}

export const EditorialTemplate: React.FC<Props> = ({ resume }) => {
  const { personalInfo, experiences, educations, certifications, skillGroups, projects, themeColor } = resume;
  const theme = getThemeClasses(themeColor);

  return (
    <div className="text-neutral-900 bg-white font-sans text-[13px] leading-relaxed p-8 sm:p-12 space-y-8 max-w-[850px] mx-auto print:p-0 print:text-[12px] print:leading-snug">
      {/* Editorial Header */}
      <header className="border-b border-neutral-900 pb-6 print:pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-950 uppercase print:text-3xl">
              {personalInfo.fullName || 'Full Name'}
            </h1>
            <p className={`text-base font-semibold tracking-wide uppercase ${theme.accentText}`}>
              {personalInfo.jobTitle || 'Professional Title'}
            </p>
          </div>
          {personalInfo.avatarUrl && (
            <div className="w-16 h-16 rounded overflow-hidden border border-neutral-300 shrink-0">
              <img
                src={personalInfo.avatarUrl}
                alt={personalInfo.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Contact Strip */}
        <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-600 font-medium">
          {personalInfo.email && (
            <span className="inline-flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-neutral-500" />
              <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
            </span>
          )}
          {personalInfo.phone && (
            <>
              <span className="text-neutral-300" aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-500" />
                <span>{personalInfo.phone}</span>
              </span>
            </>
          )}
          {personalInfo.location && (
            <>
              <span className="text-neutral-300" aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                <span>{personalInfo.location}</span>
              </span>
            </>
          )}
          {personalInfo.website && (
            <>
              <span className="text-neutral-300" aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-neutral-500" />
                <a href={personalInfo.website} target="_blank" rel="noreferrer" className="hover:underline">Portfolio</a>
              </span>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="text-neutral-300" aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <Linkedin className="w-3.5 h-3.5 text-neutral-500" />
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              </span>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="text-neutral-300" aria-hidden="true">/</span>
              <span className="inline-flex items-center gap-1.5">
                <Github className="w-3.5 h-3.5 text-neutral-500" />
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </span>
            </>
          )}
        </div>
      </header>

      {/* Summary Lead */}
      {personalInfo.summary && (
        <section className="text-neutral-800 text-[13.5px] leading-relaxed border-l-2 border-neutral-900 pl-4 py-1 italic">
          {personalInfo.summary}
        </section>
      )}

      {/* Two-Column Editorial Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12 print:gap-6">
        {/* Main Column (8 cols): Experience & Projects */}
        <main className="md:col-span-8 space-y-7 print:col-span-8 print:space-y-5">
          {/* Work Experience */}
          {experiences.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-950 border-b border-neutral-200 pb-1.5">
                Professional Experience
              </h2>

              <div className="space-y-5">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-1.5 print-break-inside-avoid">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <span className="font-bold text-neutral-900 text-sm">{exp.role}</span>
                        <span className="text-neutral-600 font-medium text-xs"> — {exp.company}</span>
                        {exp.location && <span className="text-neutral-400 text-xs"> ({exp.location})</span>}
                      </div>
                      <span className="text-xs font-mono text-neutral-500 tabular-nums shrink-0">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>

                    {exp.bullets.length > 0 && (
                      <ul className="space-y-1 text-xs text-neutral-700 pl-4 list-disc marker:text-neutral-400">
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

          {/* Selected Projects */}
          {projects.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-950 border-b border-neutral-200 pb-1.5">
                Featured Projects
              </h2>

              <div className="space-y-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-1 print-break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-bold text-neutral-900 text-xs sm:text-sm">
                        {proj.title}
                        {proj.role && <span className="font-normal text-neutral-500 text-xs"> · {proj.role}</span>}
                      </span>
                      {proj.url && (
                        <a href={proj.url} target="_blank" rel="noreferrer" className="text-xs text-neutral-600 hover:text-neutral-900 underline underline-offset-2">
                          Project Link
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-neutral-700">{proj.description}</p>
                    {proj.tags.length > 0 && (
                      <div className="text-[11px] text-neutral-500 font-mono">
                        {proj.tags.join(' / ')}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}
        </main>

        {/* Sidebar Column (4 cols): Skills, Education, Certs */}
        <aside className="md:col-span-4 space-y-7 print:col-span-4 print:space-y-5">
          {/* Skills */}
          {skillGroups.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-950 border-b border-neutral-200 pb-1.5">
                Expertise & Skills
              </h2>

              <div className="space-y-3">
                {skillGroups.map((group) => (
                  <div key={group.id} className="space-y-1 print-break-inside-avoid">
                    <div className="text-xs font-bold text-neutral-900">{group.category}</div>
                    <div className="text-xs text-neutral-700 leading-normal">
                      {group.skills.map((s) => s.name).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {educations.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-950 border-b border-neutral-200 pb-1.5">
                Education
              </h2>

              <div className="space-y-3">
                {educations.map((edu) => (
                  <div key={edu.id} className="space-y-0.5 print-break-inside-avoid">
                    <div className="font-bold text-neutral-900 text-xs">{edu.degree}</div>
                    <div className="text-xs text-neutral-700">{edu.institution}</div>
                    <div className="text-[11px] font-mono text-neutral-500 tabular-nums">
                      {edu.startDate} – {edu.current ? 'Present' : edu.endDate}
                    </div>
                    {edu.gpaOrHonors && (
                      <div className="text-xs text-neutral-600 italic">{edu.gpaOrHonors}</div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-950 border-b border-neutral-200 pb-1.5">
                Certifications
              </h2>

              <div className="space-y-2">
                {certifications.map((cert) => (
                  <div key={cert.id} className="text-xs space-y-0.5 print-break-inside-avoid">
                    <div className="font-semibold text-neutral-900">{cert.name}</div>
                    <div className="text-neutral-600 font-mono text-[11px] tabular-nums">
                      {cert.issuer} · {cert.issueDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
};
