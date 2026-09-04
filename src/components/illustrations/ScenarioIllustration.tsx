import React, { useState } from 'react';
import { Maximize2, MapPin, Users, Sparkles, UserCheck, ShieldCheck, Target } from 'lucide-react';
import { ActivitySceneConfig } from '../../types/illustrations';
import { 
  Grade3ScenarioSVG, 
  Grade6ScenarioSVG, 
  Grade7ScenarioSVG, 
  Grade8ScenarioSVG, 
  Grade9ScenarioSVG 
} from './svg/ScenarioSVGs';
import { IllustrationModal } from './IllustrationModal';

interface ScenarioIllustrationProps {
  scene: ActivitySceneConfig;
  className?: string;
}

export const ScenarioIllustration: React.FC<ScenarioIllustrationProps> = ({ scene, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderScenarioSVG = () => {
    const id = (scene.activityId || '').toLowerCase();
    if (id.includes('g3') || id.includes('neighbourhood') || id.includes('data-walk')) {
      return <Grade3ScenarioSVG />;
    }
    if (id.includes('g6') || id.includes('community') || id.includes('problem-tree')) {
      return <Grade6ScenarioSVG />;
    }
    if (id.includes('g7') || id.includes('water')) {
      return <Grade7ScenarioSVG />;
    }
    if (id.includes('g8') || id.includes('ai')) {
      return <Grade8ScenarioSVG />;
    }
    if (id.includes('g9') || id.includes('policy')) {
      return <Grade9ScenarioSVG />;
    }
    return <Grade3ScenarioSVG />;
  };

  const scenario = scene.scenario;
  const grouping = (scenario as any).learnerGrouping || scenario.collaborationMode || 'Collaborative Task';
  const descriptionText = (scenario as any).description || scenario.challengeTask || '';
  const keyVisuals: string[] = (scenario as any).keyVisualElements || [];

  return (
    <figure 
      className={`rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white dark:bg-slate-850 overflow-hidden shadow-xs ${className}`}
      aria-label={scenario.title}
    >
      {/* Top Banner with Setting & Group Arrangement Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/50">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#0F2A43] text-white">
            <Sparkles className="w-3 h-3 text-teal-300" />
            Learning Scene
          </span>
          {scenario.setting && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <MapPin className="w-3 h-3 text-teal-600 dark:text-teal-400" />
              {scenario.setting}
            </span>
          )}
          {grouping && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              <Users className="w-3 h-3 text-teal-600 dark:text-teal-400" />
              {grouping}
            </span>
          )}
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-teal-800 dark:hover:text-teal-300 hover:bg-teal-50/60 dark:hover:bg-teal-950/40 rounded-md transition-colors"
          title="Zoom and inspect scenario illustration"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Enlarge Scene</span>
        </button>
      </div>

      {/* Main Illustration Viewport */}
      <div className="relative group bg-slate-50/40 dark:bg-slate-900/40 p-3 sm:p-5 flex items-center justify-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-xl border border-slate-200/70 dark:border-slate-700 shadow-xs bg-white dark:bg-slate-900">
          {renderScenarioSVG()}
        </div>
      </div>

      {/* Figcaption: Context, Narrative & Key Visual Elements */}
      <figcaption className="px-5 py-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-850 space-y-3">
        <div>
          <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1.5">
            {scenario.title}
          </h4>
          {descriptionText && (
            <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
              {descriptionText}
            </p>
          )}
        </div>

        {/* Highlighted Pedagogical Roles & Elements Grid */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
            Pedagogical Roles & Classroom Dynamics
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {scenario.teacherRole && (
              <div className="p-2.5 rounded-lg bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  <UserCheck className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0" />
                  Teacher Facilitation
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-snug">{scenario.teacherRole}</p>
              </div>
            )}

            {scenario.studentRoles && (
              <div className="p-2.5 rounded-lg bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  <Users className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  Student Working Roles
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-snug">{scenario.studentRoles}</p>
              </div>
            )}

            {scenario.expectedBehaviour && (
              <div className="p-2.5 rounded-lg bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1.5 mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  Expected Conduct
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-snug">{scenario.expectedBehaviour}</p>
              </div>
            )}

            {keyVisuals.map((elem, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-2 p-2 rounded-md bg-slate-50/80 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-700 dark:text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5 shrink-0" />
                <span className="leading-snug">{elem}</span>
              </div>
            ))}
          </div>
        </div>
      </figcaption>

      {/* Modal for full projection */}
      <IllustrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={scenario.title}
        caption={descriptionText}
      >
        <div className="w-full max-w-3xl mx-auto">
          {renderScenarioSVG()}
        </div>
      </IllustrationModal>
    </figure>
  );
};
