import React from 'react';
import { Maximize2, MapPin, Users, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { activityVisuals } from '../../data/activityVisuals';
import { Activity } from '../../types';

interface ActivityScenarioVisualProps {
  activity: Activity;
  className?: string;
}

export const ActivityScenarioVisual: React.FC<ActivityScenarioVisualProps> = ({ activity, className = "" }) => {
  const visualData = activity.visuals?.scenarioId ? activityVisuals[activity.visuals.scenarioId] : null;

  if (!visualData) return null;

  return (
    <figure 
      className={`rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 overflow-hidden shadow-sm ${className}`}
      aria-label={visualData.title || activity.title}
    >
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0F2A43] text-white">
            <Sparkles className="w-3 h-3 text-teal-300" />
            Learning Scene
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <MapPin className="w-3 h-3 text-teal-600 dark:text-teal-400" />
            {activity.setup}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
            <Users className="w-3 h-3 text-teal-600 dark:text-teal-400" />
            {activity.groupSize || 'Flexible'}
          </span>
        </div>
      </div>

      <div className="relative group bg-slate-50/40 dark:bg-slate-900/40 p-3 sm:p-5 flex items-center justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900" role="img" aria-label={visualData.altText}>
          {visualData.svg}
        </div>
      </div>

      <figcaption className="px-5 py-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-850 space-y-3">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
            {visualData.title || activity.title}
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
            {visualData.description || activity.learningObjective}
          </p>
        </div>
      </figcaption>
    </figure>
  );
};
