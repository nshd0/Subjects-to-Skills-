import React from 'react';
import { AlertCircle } from 'lucide-react';

interface MaterialIconSetProps {
  materials: string[];
  iconIds?: string[];
  className?: string;
}

const getMaterialSvg = (iconId: string) => {
  const commonProps = { viewBox: "0 0 24 24", className: "w-4 h-4 text-slate-600 dark:text-slate-400", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (iconId) {
    case 'bottle':
      return <svg {...commonProps}><path d="M7 10v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V10" /><path d="M7 10l2-6h6l2 6" /><path d="M9 4V2h6v2" /><path d="M7 14h10" /></svg>;
    case 'cloth':
      return <svg {...commonProps}><path d="M4 14a2 2 0 1 0 0-4 2 2 0 1 0 0 4Z" /><path d="M4 10c0-3 2-6 5-6s5 3 5 6" /><path d="M20 14a2 2 0 1 0 0-4 2 2 0 1 0 0 4Z" /><path d="M14 10c0-3 2-6 5-6s5 3 5 6" /><path d="M4 14v6" /><path d="M20 14v6" /><path d="M9 20h6" /></svg>;
    case 'sand':
      return <svg {...commonProps}><circle cx="12" cy="12" r="10" /><path d="M8 12h.01" /><path d="M12 14h.01" /><path d="M16 12h.01" /><path d="M10 8h.01" /><path d="M14 8h.01" /></svg>;
    case 'gravel':
      return <svg {...commonProps}><path d="M12 4a4 4 0 1 0 0 8 4 4 0 1 0 0-8Z" /><path d="M6 12a3 3 0 1 0 0 6 3 3 0 1 0 0-6Z" /><path d="M18 14a3 3 0 1 0 0 6 3 3 0 1 0 0-6Z" /></svg>;
    case 'measuring_cup':
      return <svg {...commonProps}><path d="M5 4h14" /><path d="M6 4v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4" /><path d="M18 8h3v4h-3" /><path d="M10 8h4" /><path d="M10 12h4" /><path d="M10 16h4" /></svg>;
    case 'clipboard':
    case 'observation_sheet':
      return <svg {...commonProps}><rect width="14" height="20" x="5" y="2" rx="2" /><path d="M9 2v4h6V2" /><path d="M9 10h6" /><path d="M9 14h6" /></svg>;
    case 'pencil':
      return <svg {...commonProps}><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" /></svg>;
    case 'chart':
      return <svg {...commonProps}><path d="M3 3v18h18" /><path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" /></svg>;
    case 'safety_alert':
      return <svg {...commonProps}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>;
    default:
      return <span className="w-2 h-2 rounded-full bg-teal-500" />;
  }
};

export const MaterialIconSet: React.FC<MaterialIconSetProps> = ({ materials, iconIds = [], className = "" }) => {
  if (!materials || materials.length === 0) return null;

  return (
    <div className={`space-y-3 ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black">
          Visual Toolkit
        </span>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {materials.map((mat, idx) => {
          const iconId = iconIds[idx] || '';
          return (
            <div 
              key={idx}
              className="flex items-start gap-2 p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700/70 bg-white dark:bg-slate-800/80 print:border-slate-300 hover:border-teal-200 dark:hover:border-teal-800 transition-colors"
            >
              <div className="w-6 h-6 rounded flex items-center justify-center shrink-0 bg-slate-50 dark:bg-slate-700/50">
                {getMaterialSvg(iconId)}
              </div>
              <span className="text-[11px] font-medium text-slate-700 dark:text-slate-300 print:text-black leading-snug">
                {mat}
              </span>
            </div>
          );
        })}
      </div>

      <div className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 print:bg-white border border-emerald-100 dark:border-emerald-900/30 print:border-slate-300">
        <AlertCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <p className="text-[10px] text-emerald-800 dark:text-emerald-300 print:text-black leading-snug">
          Use clean, locally available, teacher-approved materials.
        </p>
      </div>
    </div>
  );
};
