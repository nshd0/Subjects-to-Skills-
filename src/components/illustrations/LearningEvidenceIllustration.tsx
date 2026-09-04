import React, { useState } from 'react';
import { 
  FileCheck2, 
  Maximize2, 
  CheckSquare, 
  Award, 
  Sparkles,
  Layers
} from 'lucide-react';
import { LearningEvidenceData } from '../../types/illustrations';
import { EvidenceSVG } from './svg/EvidenceSVGs';
import { IllustrationModal } from './IllustrationModal';

interface LearningEvidenceIllustrationProps {
  evidence: LearningEvidenceData;
  activityId: string;
  className?: string;
}

export const LearningEvidenceIllustration: React.FC<LearningEvidenceIllustrationProps> = ({
  evidence,
  activityId,
  className = "",
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`rounded-2xl border border-teal-200/90 dark:border-teal-800/60 bg-white dark:bg-slate-850 overflow-hidden shadow-xs ${className}`}>
      {/* Evidence Banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-5 py-3.5 border-b border-teal-100 dark:border-teal-900/40 bg-teal-50/50 dark:bg-teal-950/30">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-teal-600 text-white shadow-2xs">
            <FileCheck2 className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 dark:text-teal-300 block">
              Observable Evidence of Learning · Benchmark Output
            </span>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
              {evidence.title}
            </h4>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-300 capitalize border border-teal-200 dark:border-teal-800">
            {evidence.artifactType.replace('-', ' ')}
          </span>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-900 dark:text-teal-200 bg-teal-100/80 hover:bg-teal-200/80 dark:bg-teal-900/50 dark:hover:bg-teal-800/60 rounded-lg transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            Inspect Benchmark Artifact
          </button>
        </div>
      </div>

      {/* Artifact Visual Canvas */}
      <div className="p-4 sm:p-6 bg-slate-50/40 dark:bg-slate-900/40 flex items-center justify-center border-b border-slate-100 dark:border-slate-800">
        <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs overflow-hidden">
          <EvidenceSVG activityId={activityId} />
        </div>
      </div>

      {/* Artifact Pedagogical Checklist & Description */}
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white dark:bg-slate-850">
        {/* Observable Criteria Checklist */}
        <div>
          <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
            <CheckSquare className="w-4 h-4 text-teal-600 dark:text-teal-400" />
            Visible Benchmark Criteria (Observable Indicators)
          </h5>
          <ul className="space-y-2">
            {(evidence.observableIndicators || []).map((ind, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/60 p-2 rounded-lg border border-slate-200/70 dark:border-slate-700/60">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-600 dark:bg-teal-400 mt-1.5 shrink-0" />
                <span className="leading-snug">{ind}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Artifact Description & Mastery Benchmark */}
        <div>
          <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
            <Award className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            Artifact Context & Diagnostic Purpose
          </h5>
          <div className="p-3 rounded-lg bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/40 text-xs space-y-2">
            <p className="text-amber-900 dark:text-amber-200 leading-relaxed font-medium">
              {evidence.description}
            </p>
            <div className="pt-2 border-t border-amber-200/60 dark:border-amber-900/40 text-[11px] text-amber-800 dark:text-amber-300">
              Teachers evaluate this benchmark artifact to assess conceptual understanding before summative grading.
            </div>
          </div>
        </div>
      </div>

      {/* Modal for full inspection */}
      <IllustrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={evidence.title}
        caption={`Benchmark evidence sample for ${activityId}. This illustration exhibits all observable criteria for student mastery.`}
      >
        <div className="w-full max-w-2xl mx-auto">
          <EvidenceSVG activityId={activityId} />
        </div>
      </IllustrationModal>
    </div>
  );
};
