import React from 'react';
import { AssessmentTask } from '@/types';
import { Clock, BookOpen, Target, CheckCircle2, Award, FileText } from 'lucide-react';

interface AssessmentTaskCardProps {
  key?: React.Key;
  task: AssessmentTask;
  onViewRubric?: (task: AssessmentTask) => void;
  className?: string;
}

export function AssessmentTaskCard({
  task,
  onViewRubric,
  className = ''
}: AssessmentTaskCardProps) {
  const typeBadgeColor = {
    'performance task': 'bg-purple-50 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 border-purple-200 dark:border-purple-800',
    'project': 'bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border-blue-200 dark:border-blue-800',
    'question set': 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    'investigation': 'bg-amber-50 text-amber-700 dark:bg-amber-950/50 dark:text-amber-300 border-amber-200 dark:border-amber-800'
  }[task.type.toLowerCase()] || 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';

  return (
    <div
      id={`task-card-${task.id}`}
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-xs ${className}`}
    >
      {/* Header Badges */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {task.gradeId.replace('-', ' ').toUpperCase()}
          </span>
          <span className={`px-2.5 py-0.5 rounded-md text-xs font-semibold capitalize border ${typeBadgeColor}`}>
            {task.type}
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
          <Clock className="w-3.5 h-3.5" />
          <span>{task.timeRequired}</span>
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-1.5">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          {task.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {task.description}
        </p>
      </div>

      {/* Meta: Subject Area & Target Skill */}
      <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <BookOpen className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">Subject Area:</span>
          <span>{task.subjectArea}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
          <Target className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span className="font-semibold text-slate-700 dark:text-slate-300">Assessed Skill:</span>
          <code className="font-mono text-[11px] bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-indigo-600 dark:text-indigo-400">
            {task.skillId}
          </code>
        </div>
      </div>

      {/* Evidence Produced Checklist */}
      {task.evidenceProduced && task.evidenceProduced.length > 0 && (
        <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
            Verifiable Observable Evidence:
          </span>
          <ul className="space-y-1 pl-5 list-disc text-slate-600 dark:text-slate-300 leading-relaxed">
            {task.evidenceProduced.map((ev, idx) => (
              <li key={idx}>{ev}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Action CTA */}
      {onViewRubric && (
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onViewRubric(task)}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500"
          >
            <Award className="w-3.5 h-3.5" />
            <span>View Mapped Rubric Indicators</span>
          </button>
        </div>
      )}
    </div>
  );
}
