import React from 'react';
import { ShieldAlert, AlertTriangle } from 'lucide-react';
import { SafetyCalloutData } from '../../types/illustrations';

interface SafetyCalloutProps {
  safety?: SafetyCalloutData | SafetyCalloutData[];
  className?: string;
}

export const SafetyCallout: React.FC<SafetyCalloutProps> = ({ safety, className = "" }) => {
  const items: SafetyCalloutData[] = Array.isArray(safety) 
    ? safety 
    : safety 
      ? [safety] 
      : [];

  if (items.length === 0) return null;

  return (
    <div className={`p-4 rounded-xl border border-rose-200 dark:border-rose-900/60 bg-rose-50/40 dark:bg-rose-950/20 ${className}`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="p-1 rounded-md bg-rose-600 text-white shadow-2xs">
          <ShieldAlert className="w-4 h-4" />
        </span>
        <div>
          <h4 className="text-xs font-bold text-rose-950 dark:text-rose-200 uppercase tracking-wider">
            Classroom & Field Safety Protocols
          </h4>
          <p className="text-[11px] text-rose-800 dark:text-rose-300">
            Mandatory supervision boundaries, chemical cautions, and risk mitigations.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <div key={i} className="p-3 rounded-lg bg-white/90 dark:bg-slate-800/90 border border-rose-100 dark:border-rose-900/40 shadow-2xs">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs font-bold text-slate-900 dark:text-white">{item.title}</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200">
                Safety Rule
              </span>
            </div>
            <p className="text-xs text-rose-800 dark:text-rose-300 font-medium mb-1.5">{item.warningText}</p>
            {item.precaution && (
              <div className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 p-1.5 rounded border border-slate-200/60 dark:border-slate-800">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                <span>Precaution: {item.precaution}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
