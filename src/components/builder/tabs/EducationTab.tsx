import React from 'react';
import { EducationItem, CertificationItem } from '../../../types/resume';
import { GraduationCap, Award, Plus, Trash2 } from 'lucide-react';

interface Props {
  educations: EducationItem[];
  certifications: CertificationItem[];
  onChangeEducations: (updated: EducationItem[]) => void;
  onChangeCertifications: (updated: CertificationItem[]) => void;
}

export const EducationTab: React.FC<Props> = ({
  educations,
  certifications,
  onChangeEducations,
  onChangeCertifications,
}) => {
  const addEducation = () => {
    const newItem: EducationItem = {
      id: `edu_${Date.now()}`,
      institution: '',
      degree: '',
      fieldOfStudy: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      gpaOrHonors: '',
      description: '',
    };
    onChangeEducations([newItem, ...educations]);
  };

  const updateEducation = (index: number, updated: Partial<EducationItem>) => {
    const next = [...educations];
    next[index] = { ...next[index], ...updated };
    onChangeEducations(next);
  };

  const removeEducation = (index: number) => {
    onChangeEducations(educations.filter((_, i) => i !== index));
  };

  const addCertification = () => {
    const newItem: CertificationItem = {
      id: `cert_${Date.now()}`,
      name: '',
      issuer: '',
      issueDate: '',
      credentialUrl: '',
    };
    onChangeCertifications([...certifications, newItem]);
  };

  const updateCertification = (index: number, updated: Partial<CertificationItem>) => {
    const next = [...certifications];
    next[index] = { ...next[index], ...updated };
    onChangeCertifications(next);
  };

  const removeCertification = (index: number) => {
    onChangeCertifications(certifications.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-6">
      {/* Education Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-neutral-500" />
              <span>Academic Education ({educations.length})</span>
            </h3>
            <p className="text-[11px] text-neutral-500">
              Degrees, universities, honors, and key study concentrations.
            </p>
          </div>
          <button
            type="button"
            onClick={addEducation}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Degree</span>
          </button>
        </div>

        {educations.length === 0 ? (
          <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-6 text-center text-xs text-neutral-500">
            No academic background entered yet.
          </div>
        ) : (
          <div className="space-y-4">
            {educations.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 space-y-4"
              >
                <div className="flex items-center justify-between pb-2 border-b border-neutral-200/60 dark:border-neutral-800">
                  <span className="font-semibold text-xs text-neutral-900 dark:text-white">
                    {edu.degree || edu.institution ? `${edu.degree || 'Degree'} at ${edu.institution || 'University'}` : `Education #${index + 1}`}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeEducation(index)}
                    className="p-1 text-rose-500 hover:text-rose-700 rounded"
                    title="Remove Degree"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Degree / Program *
                    </label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => updateEducation(index, { degree: e.target.value })}
                      placeholder="e.g. Bachelor of Science"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Institution / University *
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => updateEducation(index, { institution: e.target.value })}
                      placeholder="e.g. UC Berkeley"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Field of Study / Major
                    </label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy || ''}
                      onChange={(e) => updateEducation(index, { fieldOfStudy: e.target.value })}
                      placeholder="e.g. Computer Science"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Honors / GPA
                    </label>
                    <input
                      type="text"
                      value={edu.gpaOrHonors || ''}
                      onChange={(e) => updateEducation(index, { gpaOrHonors: e.target.value })}
                      placeholder="e.g. Magna Cum Laude · GPA 3.9/4.0"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Dates Attended
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={edu.startDate}
                        onChange={(e) => updateEducation(index, { startDate: e.target.value })}
                        placeholder="YYYY-MM (Start)"
                        className="w-1/2 px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                      />
                      <span className="text-neutral-400 text-xs">to</span>
                      <input
                        type="text"
                        value={edu.endDate}
                        onChange={(e) => updateEducation(index, { endDate: e.target.value })}
                        placeholder="YYYY-MM (Graduation)"
                        className="w-1/2 px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                      Additional Details / Coursework
                    </label>
                    <textarea
                      rows={2}
                      value={edu.description || ''}
                      onChange={(e) => updateEducation(index, { description: e.target.value })}
                      placeholder="Specialization in distributed computing, thesis on microservices, leadership roles..."
                      className="w-full px-3 py-2 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-neutral-900 leading-relaxed"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Certifications Section */}
      <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 flex items-center gap-2">
              <Award className="w-4 h-4 text-neutral-500" />
              <span>Certifications & Credentials ({certifications.length})</span>
            </h3>
            <p className="text-[11px] text-neutral-500">
              Industry credentials (AWS, CKA, PMP, Scrum) validating expertise.
            </p>
          </div>
          <button
            type="button"
            onClick={addCertification}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Certificate</span>
          </button>
        </div>

        {certifications.length === 0 ? (
          <div className="border border-dashed border-neutral-300 dark:border-neutral-700 rounded-xl p-4 text-center text-xs text-neutral-500">
            No certifications added yet.
          </div>
        ) : (
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-4 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-xs text-neutral-900 dark:text-white">
                    {cert.name || `Certificate #${index + 1}`}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeCertification(index)}
                    className="p-1 text-rose-500 hover:text-rose-700 rounded"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                      Certificate Name *
                    </label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => updateCertification(index, { name: e.target.value })}
                      placeholder="e.g. AWS Solutions Architect"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                      Issuing Authority *
                    </label>
                    <input
                      type="text"
                      value={cert.issuer}
                      onChange={(e) => updateCertification(index, { issuer: e.target.value })}
                      placeholder="e.g. Amazon Web Services"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                      Issue Date (YYYY-MM)
                    </label>
                    <input
                      type="text"
                      value={cert.issueDate}
                      onChange={(e) => updateCertification(index, { issueDate: e.target.value })}
                      placeholder="e.g. 2024-05"
                      className="w-full px-2.5 py-1.5 text-xs rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
