import React from 'react';
import { SkillRubric, RubricLevel } from '@/types';
import { Award, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

interface RubricTableProps {
  rubric?: SkillRubric;
  levels?: RubricLevel[];
  skillTitle?: string;
  gradeId?: string;
  className?: string;
}

export function RubricTable({
  rubric,
  levels: propLevels,
  skillTitle,
  gradeId,
  className = ''
}: RubricTableProps) {
  const levels = rubric?.levels || propLevels || [];
  const displayGrade = rubric?.gradeId || gradeId;
  const displaySkill = rubric?.skillId || skillTitle;

  const levelColorMap: Record<string, { bg: string; text: string; border: string; pill: string }> = {
    Emerging: {
      bg: 'bg-amber-50/50 dark:bg-amber-950/20',
      text: 'text-amber-900 dark:text-amber-200',
      border: 'border-amber-200 dark:border-amber-900/40',
      pill: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200'
    },
    Developing: {
      bg: 'bg-blue-50/50 dark:bg-blue-950/20',
      text: 'text-blue-900 dark:text-blue-200',
      border: 'border-blue-200 dark:border-blue-900/40',
      pill: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200'
    },
    Proficient: {
      bg: 'bg-emerald-50/50 dark:bg-emerald-950/20',
      text: 'text-emerald-900 dark:text-emerald-200',
      border: 'border-emerald-200 dark:border-emerald-900/40',
      pill: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200'
    },
    Transfer: {
      bg: 'bg-purple-50/50 dark:bg-purple-950/20',
      text: 'text-purple-900 dark:text-purple-200',
      border: 'border-purple-200 dark:border-purple-900/40',
      pill: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200'
    }
  };

  return (
    <div
      className={`rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs ${className}`}
    >
      {/* Header Bar */}
      {(displaySkill || displayGrade) && (
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Skill Evaluation Rubric Matrix
            </h4>
          </div>
          <div className="flex items-center gap-2">
            {displayGrade && (
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                {displayGrade.replace('-', ' ').toUpperCase()}
              </span>
            )}
            {displaySkill && (
              <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
                {displaySkill}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Grid of Graduated Levels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-800">
        {levels.map((lvl, index) => {
          const style = levelColorMap[lvl.level] || {
            bg: 'bg-slate-50 dark:bg-slate-800/50',
            text: 'text-slate-900 dark:text-slate-100',
            border: 'border-slate-200 dark:border-slate-800',
            pill: 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-200'
          };

          return (
            <div key={index} className={`p-4 sm:p-5 space-y-3 ${style.bg}`}>
              <div className="flex items-center justify-between">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${style.pill}`}>
                  {lvl.level}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400">
                  Level {index + 1}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <span className="font-semibold text-slate-700 dark:text-slate-300 block">
                  Observable Criteria:
                </span>
                <ul className="space-y-1.5 list-disc pl-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lvl.criteria.map((crit, cIdx) => (
                    <li key={cIdx}>{crit}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
