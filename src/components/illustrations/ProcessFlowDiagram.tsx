import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ProcessStepNode } from '../../types/illustrations';

export interface FlowStepItem {
  id?: string;
  stepNumber?: number;
  number?: number;
  title?: string;
  label?: string;
  actionVerb?: string;
  subLabel?: string;
  duration?: string;
  description?: string;
}

interface ProcessFlowDiagramProps {
  steps: (ProcessStepNode | FlowStepItem)[];
  activeStep?: number;
  onStepClick?: (stepNumber: number) => void;
  className?: string;
}

export const ProcessFlowDiagram: React.FC<ProcessFlowDiagramProps> = ({
  steps,
  activeStep,
  onStepClick,
  className = "",
}) => {
  return (
    <div className={`p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          Pedagogical Workflow Sequence
        </span>
        <span className="text-[11px] text-slate-400 font-medium">
          {steps.length} Sequenced Phases
        </span>
      </div>

      {/* Horizontal Flow Strip */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
        {steps.map((rawStep, idx) => {
          const num = 'stepNumber' in rawStep && rawStep.stepNumber !== undefined 
            ? rawStep.stepNumber 
            : 'number' in rawStep && rawStep.number !== undefined 
              ? rawStep.number 
              : idx + 1;

          const action = 'actionVerb' in rawStep && rawStep.actionVerb 
            ? rawStep.actionVerb 
            : 'label' in rawStep && rawStep.label 
              ? rawStep.label 
              : `Phase ${num}`;

          const sub = 'title' in rawStep && rawStep.title 
            ? rawStep.title 
            : 'subLabel' in rawStep && rawStep.subLabel 
              ? rawStep.subLabel 
              : '';

          const duration = 'duration' in rawStep ? rawStep.duration : undefined;

          const isActive = activeStep === num;

          return (
            <React.Fragment key={rawStep.id || `step-${num}`}>
              <button
                type="button"
                onClick={() => onStepClick && onStepClick(num)}
                className={`flex-1 min-w-[130px] p-2.5 rounded-lg border text-left transition-all ${
                  isActive
                    ? 'bg-[#0F2A43] text-white border-[#0F2A43] shadow-xs ring-2 ring-teal-500/20'
                    : 'bg-white dark:bg-slate-800 hover:bg-slate-100/80 dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                      isActive
                        ? 'bg-teal-400 text-slate-950'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {num}
                  </span>
                  {duration && (
                    <span
                      className={`text-[10px] font-medium ${
                        isActive ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {duration}
                    </span>
                  )}
                </div>
                <div
                  className={`text-[11px] font-bold truncate ${
                    isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {action}
                </div>
                {sub && (
                  <div
                    className={`text-[10px] truncate ${
                      isActive ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    {sub}
                  </div>
                )}
              </button>

              {idx < steps.length - 1 && (
                <ArrowRight className="w-3.5 h-3.5 text-slate-300 dark:text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
