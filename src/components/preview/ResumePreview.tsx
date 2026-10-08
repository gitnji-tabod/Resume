import React, { useState } from 'react';
import { Resume, TemplateType, ThemeColor } from '../../types/resume';
import { BentoTemplate } from './templates/BentoTemplate';
import { EditorialTemplate } from './templates/EditorialTemplate';
import { ExecutiveAtsTemplate } from './templates/ExecutiveAtsTemplate';
import { Printer, ZoomIn, ZoomOut, Maximize2, LayoutTemplate, Palette, Check } from 'lucide-react';

interface Props {
  resume: Resume;
  onUpdateTemplate: (template: TemplateType) => void;
  onUpdateThemeColor: (color: ThemeColor) => void;
}

export const ResumePreview: React.FC<Props> = ({
  resume,
  onUpdateTemplate,
  onUpdateThemeColor,
}) => {
  const [zoom, setZoom] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const colors: Array<{ id: ThemeColor; label: string; bg: string }> = [
    { id: 'slate', label: 'Slate', bg: 'bg-slate-800' },
    { id: 'indigo', label: 'Indigo', bg: 'bg-indigo-600' },
    { id: 'emerald', label: 'Emerald', bg: 'bg-emerald-600' },
    { id: 'amber', label: 'Amber', bg: 'bg-amber-600' },
    { id: 'rose', label: 'Rose', bg: 'bg-rose-600' },
    { id: 'neutral', label: 'Monochrome', bg: 'bg-neutral-900' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const renderActiveTemplate = () => {
    switch (resume.template) {
      case 'editorial':
        return <EditorialTemplate resume={resume} />;
      case 'executive':
        return <ExecutiveAtsTemplate resume={resume} />;
      case 'bento':
      default:
        return <BentoTemplate resume={resume} />;
    }
  };

  return (
    <div className={`flex flex-col h-full bg-neutral-100 dark:bg-neutral-900/60 border-l border-neutral-200 dark:border-neutral-800 ${isFullscreen ? 'fixed inset-0 z-50 bg-neutral-100 dark:bg-neutral-950 p-4' : ''}`}>
      {/* Preview Controls Bar */}
      <div className="no-print shrink-0 px-4 py-2.5 bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
        {/* Template Switcher */}
        <div className="flex items-center gap-1.5">
          <span className="text-neutral-500 font-medium flex items-center gap-1">
            <LayoutTemplate className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Layout:</span>
          </span>
          <div className="inline-flex rounded-lg bg-neutral-100 dark:bg-neutral-800 p-0.5">
            <button
              onClick={() => onUpdateTemplate('bento')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${resume.template === 'bento' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
              title="Modern Bento-Box Grid"
            >
              Bento Grid
            </button>
            <button
              onClick={() => onUpdateTemplate('editorial')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${resume.template === 'editorial' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
              title="Clean Editorial Typographic"
            >
              Editorial
            </button>
            <button
              onClick={() => onUpdateTemplate('executive')}
              className={`px-2.5 py-1 rounded-md font-medium transition-all ${resume.template === 'executive' ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-xs' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900'}`}
              title="ATS-Optimized Executive Linear"
            >
              Classic ATS
            </button>
          </div>
        </div>

        {/* Theme Color Picker */}
        <div className="flex items-center gap-1.5">
          <span className="text-neutral-500 font-medium flex items-center gap-1">
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Accent:</span>
          </span>
          <div className="flex items-center gap-1">
            {colors.map((c) => (
              <button
                key={c.id}
                onClick={() => onUpdateThemeColor(c.id)}
                title={c.label}
                className={`w-4.5 h-4.5 rounded-full ${c.bg} flex items-center justify-center transition-transform ${resume.themeColor === c.id ? 'ring-2 ring-offset-1 ring-neutral-400 scale-110' : 'opacity-70 hover:opacity-100'}`}
              >
                {resume.themeColor === c.id && <Check className="w-2.5 h-2.5 text-white" />}
              </button>
            ))}
          </div>
        </div>

        {/* Zoom & Print Actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1 text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-800 rounded-lg p-0.5">
            <button
              onClick={() => setZoom(Math.max(50, zoom - 15))}
              className="p-1 hover:text-neutral-900 dark:hover:text-white rounded"
              title="Zoom Out"
            >
              <ZoomOut className="w-3.5 h-3.5" />
            </button>
            <span className="px-1.5 font-mono text-[11px] tabular-nums select-none min-w-[36px] text-center">
              {zoom}%
            </span>
            <button
              onClick={() => setZoom(Math.min(130, zoom + 15))}
              className="p-1 hover:text-neutral-900 dark:hover:text-white rounded"
              title="Zoom In"
            >
              <ZoomIn className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1.5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title={isFullscreen ? 'Exit Preview' : 'Expand Preview'}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-white text-white dark:text-neutral-900 font-semibold rounded-lg shadow-xs transition-colors"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export ATS PDF</span>
          </button>
        </div>
      </div>

      {/* Sheet Canvas Viewport */}
      <div
        id="resume-preview-container"
        className="flex-1 overflow-auto p-4 sm:p-8 flex justify-center items-start print:p-0 print:overflow-visible"
      >
        <div
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'top center',
            transition: 'transform 0.15s ease-out',
          }}
          className="w-full max-w-[850px] print:transform-none"
        >
          <div
            id="resume-printable-area"
            className="bg-white text-neutral-900 shadow-xl border border-neutral-200/90 rounded-sm overflow-hidden min-h-[1050px] print:shadow-none print:border-none print:min-h-0 print:rounded-none"
          >
            {renderActiveTemplate()}
          </div>
        </div>
      </div>
    </div>
  );
};
