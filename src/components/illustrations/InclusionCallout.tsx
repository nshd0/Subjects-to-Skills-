import React from 'react';
import { Accessibility, CheckCircle2 } from 'lucide-react';
import { InclusionCalloutData } from '../../types/illustrations';

interface InclusionCalloutProps {
  inclusion?: InclusionCalloutData | InclusionCalloutData[];
  inclusions?: InclusionCalloutData[];
  className?: string;
}

export const InclusionCallout: React.FC<InclusionCalloutProps> = ({ 
  inclusion, 
  inclusions, 
  className = "" 
}) => {
  const items: InclusionCalloutData[] = inclusions 
    ? inclusions 
    : Array.isArray(inclusion) 
      ? inclusion 
      : inclusion 
        ? [inclusion] 
        : [];

  if (items.length === 0) return null;

  return (
    <div className={`p-4 rounded-xl border border-indigo-200 dark:border-indigo-800/60 bg-indigo-50/40 dark:bg-indigo-950/20 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="p-1 rounded-md bg-indigo-600 text-white shadow-2xs">
          <Accessibility className="w-4 h-4" />
        </span>
        <div>
          <h4 className="text-xs font-bold text-indigo-950 dark:text-indigo-200 uppercase tracking-wider">
            Universal Design for Learning & Inclusion Notes
          </h4>
          <p className="text-[11px] text-indigo-800 dark:text-indigo-300">
            Differentiated access pathways ensuring every learner contributes meaningfully.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((inc, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/90 dark:bg-slate-800/90 border border-indigo-100 dark:border-indigo-900/40 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{inc.title}</span>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-800 dark:text-indigo-300 capitalize">
                {inc.type}
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-1.5">{inc.description}</p>
            {inc.actionableTip && (
              <div className="flex items-start gap-1.5 text-[11px] text-indigo-700 dark:text-indigo-300 font-medium bg-indigo-50 dark:bg-indigo-950/50 p-1.5 rounded">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                <span>Tip: {inc.actionableTip}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
