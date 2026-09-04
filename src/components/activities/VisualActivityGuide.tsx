import React from 'react';
import { Activity } from '../../types';
import { ActivityScenarioVisual } from './ActivityScenarioVisual';
import { ActivityStepVisual } from './ActivityStepVisual';
import { MaterialIconSet } from './MaterialIconSet';
import { LearningEvidenceVisual } from './LearningEvidenceVisual';
import { SafetyInclusionCallout } from './SafetyInclusionCallout';
import { Compass, CheckCircle } from 'lucide-react';

interface VisualActivityGuideProps {
  activity: Activity;
  className?: string;
}

export const VisualActivityGuide: React.FC<VisualActivityGuideProps> = ({ activity, className = "" }) => {
  const visuals = activity.visuals;
  if (!visuals) return null;

  return (
    <div className={`space-y-8 ${className}`}>
      
      {/* 1. Scenario Visual */}
      {visuals.scenarioId && (
        <ActivityScenarioVisual activity={activity} />
      )}

      {/* 2. Materials Icons */}
      {(activity.materials && activity.materials.length > 0) && (
        <MaterialIconSet 
          materials={activity.materials} 
          iconIds={visuals.materialIconIds} 
        />
      )}

      {/* 3. Visual Steps */}
      {activity.steps && activity.steps.length > 0 && (
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-3 print:text-black">
            <Compass className="w-4 h-4 text-indigo-500 print:hidden" />
            Visual Step Guide
          </span>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activity.steps.map((stepInstruction, idx) => {
              const stepVisualId = visuals.stepVisualIds ? visuals.stepVisualIds[idx] : undefined;
              // Extract a short title from the step if possible (e.g. "Part 1: The School Tap Audit (25 min) - ...")
              let title = `Phase ${idx + 1}`;
              let instruction = stepInstruction;
              if (stepInstruction.includes(' - ')) {
                const parts = stepInstruction.split(' - ');
                title = parts[0];
                instruction = parts.slice(1).join(' - ');
              }
              
              return (
                <ActivityStepVisual
                  key={idx}
                  stepNumber={idx + 1}
                  totalSteps={activity.steps.length}
                  title={title}
                  instruction={instruction}
                  visualId={stepVisualId}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* 4. Evidence of Learning */}
      {activity.evidence && activity.evidence.length > 0 && (
        <LearningEvidenceVisual 
          evidenceList={activity.evidence}
          visualId={visuals.evidenceVisualId}
        />
      )}

      {/* 5. Safety, Inclusion and Adaptations */}
      <SafetyInclusionCallout 
        safetyVisualId={visuals.safetyVisualId}
        lowResourceAlternative={activity.lowResourceAlternative}
      />
      
    </div>
  );
};
