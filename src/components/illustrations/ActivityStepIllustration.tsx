import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Lightbulb, 
  Maximize2,
  Sparkles
} from 'lucide-react';
import { ActivityStepData } from '../../types/illustrations';
import { StepSVG } from './svg/StepSVGs';
import { IllustrationModal } from './IllustrationModal';

interface ActivityStepIllustrationProps {
  step: ActivityStepData | any;
  totalSteps?: number;
  className?: string;
}

export const ActivityStepIllustration: React.FC<ActivityStepIllustrationProps> = ({ 
  step, 
  totalSteps,
  className = "" 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const stepNumber = step.stepNumber || step.number || 1;
  const title = step.title || step.label || `Step ${stepNumber}`;
  const actionLabel = step.actionLabel || step.actionVerb || 'Action';
  const instruction = step.instruction || step.description || '';
  const duration = step.duration;
  const visualSummary = step.visualSummary;
  const svgKey = step.svgKey || step.stepKey || '';
  const actionCues: string[] = Array.isArray(step.actionCues) ? step.actionCues : [];
  const teacherCheckpoint = step.teacherCheckpoint;
  const misconceptionAlert = step.misconceptionAlert;

  return (
    <div 
      className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 overflow-hidden shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all ${className}`}
      id={`step-visual-${stepNumber}`}
    >
      {/* Step Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/50">
        <div className="flex items-center gap-2.5">
          <span className="flex items-center justify-center w-6 h-6 rounded-md bg-[#0F2A43] text-white text-xs font-bold tracking-tight">
            {stepNumber}
          </span>
          <div>
            <span className="text-xs font-bold text-slate-900 dark:text-white leading-none block">
              {title}
            </span>
            {totalSteps && (
              <span className="text-[10px] text-slate-400 dark:text-slate-500">
                Phase {stepNumber} of {totalSteps}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          {duration && (
            <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 font-medium">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {duration}
            </span>
          )}
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="p-1 text-slate-400 hover:text-teal-700 dark:hover:text-teal-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors"
            title="Enlarge step visual"
            aria-label={`Enlarge Step ${stepNumber} visual`}
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Canvas Area */}
      <div className="p-3 bg-slate-50/30 dark:bg-slate-900/30 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        <div className="w-full max-w-[280px] sm:max-w-xs rounded-lg overflow-hidden border border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-2xs">
          <StepSVG stepKey={svgKey} />
        </div>
      </div>

      {/* Step Instructional Body */}
      <div className="p-4 space-y-3">
        {/* Action Verb & Instruction */}
        <div>
          <span className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-teal-50 dark:bg-teal-950/40 text-teal-800 dark:text-teal-300 border border-teal-200 dark:border-teal-800 mb-1.5">
            Action: {actionLabel}
          </span>
          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
            {instruction}
          </p>
        </div>

        {/* Visual Summary Focus */}
        {visualSummary && (
          <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex items-start gap-2 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-slate-600 dark:text-slate-300 leading-relaxed">
              <span className="font-semibold text-slate-800 dark:text-slate-200 block mb-0.5">Visual Focus in Classroom:</span>
              {visualSummary}
            </div>
          </div>
        )}

        {/* Action Cues Checklist if present */}
        {actionCues.length > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1.5">
              Key Observable Behaviors
            </span>
            <ul className="space-y-1">
              {actionCues.map((cue, i) => (
                <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400 shrink-0 mt-0.5" />
                  <span className="leading-snug">{cue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Teacher Checkpoint Tip Box if present */}
        {teacherCheckpoint && (
          <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-900/40 flex items-start gap-2 text-xs">
            <Lightbulb className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-amber-950 dark:text-amber-200 leading-relaxed">
              <span className="font-bold text-amber-900 dark:text-amber-300 block mb-0.5">Teacher Facilitation Tip:</span>
              {teacherCheckpoint}
            </div>
          </div>
        )}

        {/* Misconception Alert if Present */}
        {misconceptionAlert && (
          <div className="p-2.5 rounded-lg bg-rose-50/70 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/40 flex items-start gap-2 text-xs">
            <AlertTriangle className="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0 mt-0.5" />
            <div className="text-[11px] text-rose-950 dark:text-rose-200 leading-relaxed">
              <span className="font-bold text-rose-900 dark:text-rose-300 block mb-0.5">Common Misconception Alert:</span>
              {misconceptionAlert}
            </div>
          </div>
        )}
      </div>

      {/* Modal for full projection */}
      <IllustrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Step ${stepNumber}: ${title}`}
        caption={instruction}
      >
        <div className="w-full max-w-md mx-auto">
          <StepSVG stepKey={svgKey} />
        </div>
      </IllustrationModal>
    </div>
  );
};
