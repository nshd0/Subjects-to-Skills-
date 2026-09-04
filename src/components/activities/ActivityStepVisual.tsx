import React from 'react';
import { Clock } from 'lucide-react';
import { activityVisuals } from '../../data/activityVisuals';

interface ActivityStepVisualProps {
  stepNumber: number;
  totalSteps: number;
  title: string;
  instruction: string;
  visualId?: string;
  className?: string;
}

export const ActivityStepVisual: React.FC<ActivityStepVisualProps> = ({ 
  stepNumber, 
  totalSteps, 
  title, 
  instruction, 
  visualId, 
  className = "" 
}) => {
  const visualData = visualId ? activityVisuals[visualId] : null;

  return (
    <div className={`rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-white dark:bg-slate-850 print:bg-white overflow-hidden shadow-sm transition-all ${className}`} id={`step-visual-${stepNumber}`}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50 print:bg-slate-50">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#0F2A43] text-white text-xs font-bold tracking-tight">
            {stepNumber}
          </span>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white print:text-black leading-none block">
              {title}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500">
              Phase {stepNumber} of {totalSteps}
            </span>
          </div>
        </div>
      </div>

      {visualData && (
        <div className="p-3 bg-slate-50/30 dark:bg-slate-900/30 print:bg-white flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
          <div className="w-full max-w-[280px] sm:max-w-xs rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-sm" role="img" aria-label={visualData.altText}>
            {visualData.svg}
          </div>
        </div>
      )}

      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs text-slate-700 dark:text-slate-300 print:text-black leading-relaxed font-normal">
            {instruction}
          </p>
        </div>
      </div>
    </div>
  );
};
