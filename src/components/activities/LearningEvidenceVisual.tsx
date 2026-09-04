import React from 'react';
import { activityVisuals } from '../../data/activityVisuals';

interface LearningEvidenceVisualProps {
  evidenceList: string[];
  visualId?: string;
  className?: string;
}

export const LearningEvidenceVisual: React.FC<LearningEvidenceVisualProps> = ({ evidenceList, visualId, className = "" }) => {
  const visualData = visualId ? activityVisuals[visualId] : null;

  return (
    <div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-white dark:bg-slate-850 print:bg-white shadow-sm ${className}`}>
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black block mb-3">
        Learning Evidence
      </span>
      
      <div className="grid md:grid-cols-2 gap-4 items-center">
        {visualData && (
          <div className="rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 print:bg-slate-50 p-4" role="img" aria-label={visualData.altText}>
            {visualData.svg}
            <p className="text-center text-[10px] text-slate-500 dark:text-slate-400 print:text-black mt-2">
              {visualData.description}
            </p>
          </div>
        )}
        
        <ul className="space-y-2">
          {evidenceList.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 print:text-black bg-slate-50 dark:bg-slate-800/60 print:bg-white p-2.5 rounded-lg border border-slate-200/70 dark:border-slate-700/60 print:border-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5 shrink-0" />
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
