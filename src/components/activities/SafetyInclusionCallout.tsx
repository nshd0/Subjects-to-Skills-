import React from 'react';
import { ShieldAlert, Users, Recycle } from 'lucide-react';
import { activityVisuals } from '../../data/activityVisuals';

interface SafetyInclusionCalloutProps {
  safetyVisualId?: string;
  lowResourceAlternative?: string;
  className?: string;
}

export const SafetyInclusionCallout: React.FC<SafetyInclusionCalloutProps> = ({ 
  safetyVisualId, 
  lowResourceAlternative,
  className = "" 
}) => {
  const visualData = safetyVisualId ? activityVisuals[safetyVisualId] : null;

  return (
    <div className={`p-4 rounded-xl border border-slate-200 dark:border-slate-800 print:border-slate-300 bg-slate-50 dark:bg-slate-800/40 print:bg-white shadow-sm ${className}`}>
      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 print:text-black block mb-3">
        Safety, Inclusion & Adaptations
      </span>
      
      <div className="grid md:grid-cols-[auto_1fr] gap-4 items-start">
        {visualData && (
          <div className="w-20 h-20 rounded-full border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 p-2 shrink-0 hidden md:block" role="img" aria-label={visualData.altText}>
            {visualData.svg}
          </div>
        )}
        
        <div className="space-y-3 w-full">
          {/* Safety */}
          <div className="flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 print:text-black block mb-0.5">Safety Precaution</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 print:text-black leading-snug">
                Use only clean, teacher-approved materials. Do not drink filtered water.
              </p>
            </div>
          </div>
          
          {/* Inclusion */}
          <div className="flex items-start gap-2.5">
            <Users className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Inclusive Participation</span>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                Offer flexible roles such as observer, recorder, materials manager, tester, presenter, or reflection lead.
              </p>
            </div>
          </div>

          {/* Low Resource */}
          {lowResourceAlternative && (
            <div className="flex items-start gap-2.5">
              <Recycle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block mb-0.5">Low-Resource Adaptation</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                  {lowResourceAlternative}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
