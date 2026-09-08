import React from 'react';
import { Lesson } from '@/types';
import { CheckSquare, ExternalLink, Lightbulb, ListOrdered } from 'lucide-react';

interface LessonRowProps {
  key?: React.Key;
  lesson: Lesson;
  className?: string;
}

export function LessonRow({ lesson, className = '' }: LessonRowProps) {
  return (
    <div
      id={`lesson-row-${lesson.id}`}
      className={`p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-3.5 ${className}`}
    >
      {/* Header: Sequence & Title */}
      <div className="flex items-start gap-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 text-xs font-bold shrink-0">
          L{lesson.sequenceIndex}
        </span>
        <div className="space-y-0.5">
          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
            {lesson.title}
          </h4>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            Sequence Index: #{lesson.sequenceIndex}
          </span>
        </div>
      </div>

      {/* Classroom Activities */}
      {lesson.activities && lesson.activities.length > 0 && (
        <div className="space-y-1.5 text-xs">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Classroom Activities:
          </span>
          <ul className="space-y-1 pl-5 list-disc text-slate-600 dark:text-slate-300 leading-relaxed">
            {lesson.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Resources & Materials */}
      {lesson.resources && lesson.resources.length > 0 && (
        <div className="space-y-1 text-xs pt-2 border-t border-slate-100 dark:border-slate-800">
          <span className="font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
            <ExternalLink className="w-3.5 h-3.5 text-indigo-500" />
            Curriculum Resources:
          </span>
          <div className="flex flex-wrap gap-1.5 pl-5">
            {lesson.resources.map((res, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px]"
              >
                {res}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Assessment Hints */}
      {lesson.assessmentHints && lesson.assessmentHints.length > 0 && (
        <div className="p-2.5 rounded-lg bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/30 text-xs space-y-1">
          <span className="font-semibold text-amber-900 dark:text-amber-200 flex items-center gap-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            Formative Assessment Hint:
          </span>
          <ul className="space-y-0.5 pl-5 list-disc text-amber-900/80 dark:text-amber-300/80 leading-relaxed">
            {lesson.assessmentHints.map((hint, i) => (
              <li key={i}>{hint}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
