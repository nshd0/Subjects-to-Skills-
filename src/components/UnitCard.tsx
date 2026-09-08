import React from 'react';
import { Unit } from '@/types';
import { Calendar, BookOpen, Layers, CheckCircle, Clock, Sparkles } from 'lucide-react';

interface UnitCardProps {
  key?: React.Key;
  unit: Unit;
  onSelect?: (unit: Unit) => void;
  isExpanded?: boolean;
}

export function UnitCard({ unit, onSelect, isExpanded = false }: UnitCardProps) {
  const statusColor = {
    published: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
    draft: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
    archived: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
  }[unit.status];

  return (
    <article
      id={`unit-card-${unit.id}`}
      className={`group rounded-2xl border bg-white dark:bg-slate-900 transition-all shadow-xs hover:shadow-md ${
        isExpanded 
          ? 'border-indigo-500 dark:border-indigo-500 ring-2 ring-indigo-500/20' 
          : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
      }`}
    >
      <div className="p-6 space-y-4">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 dark:bg-indigo-950/40 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800">
              {unit.gradeId.replace('-', ' ').toUpperCase()}
            </span>
            <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md text-xs font-semibold border ${statusColor}`}>
              {unit.status === 'published' ? <CheckCircle className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
              {unit.status.charAt(0).toUpperCase() + unit.status.slice(1)}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{unit.durationWeeks} {unit.durationWeeks === 1 ? 'Week' : 'Weeks'}</span>
          </div>
        </div>

        {/* Title & Description */}
        <div className="space-y-1.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {unit.title}
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
            {unit.description}
          </p>
        </div>

        {/* Learning Areas & Target Skills */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">Areas:</span>
            <span className="truncate">{unit.learningAreas.join(' · ')}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Layers className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
            <span className="font-semibold text-slate-700 dark:text-slate-300">Target Skills:</span>
            <div className="flex flex-wrap gap-1">
              {unit.targetSkillIds.slice(0, 3).map(skill => (
                <span
                  key={skill}
                  className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[11px] font-mono text-slate-700 dark:text-slate-300"
                >
                  {skill}
                </span>
              ))}
              {unit.targetSkillIds.length > 3 && (
                <span className="text-[11px] text-slate-400">+{unit.targetSkillIds.length - 3} more</span>
              )}
            </div>
          </div>
        </div>

        {/* Lessons Count and Projects footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 dark:text-slate-400">
            {unit.lessons ? `${unit.lessons.length} Lessons planned` : 'Lessons in formulation'}
          </span>

          {unit.sampleProjects && unit.sampleProjects.length > 0 && (
            <span className="inline-flex items-center gap-1 text-indigo-600 dark:text-indigo-400 font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              {unit.sampleProjects.length} Flagship Project
            </span>
          )}
        </div>

        {onSelect && (
          <button
            type="button"
            onClick={() => onSelect(unit)}
            className="w-full mt-2 py-2.5 px-3 rounded-xl text-xs font-semibold bg-slate-100 hover:bg-indigo-50 text-slate-800 hover:text-indigo-700 dark:bg-slate-800 dark:hover:bg-indigo-950/60 dark:text-slate-200 dark:hover:text-indigo-300 transition-colors text-center min-h-[44px] focus:ring-2 focus:ring-indigo-500"
          >
            {isExpanded ? 'Collapse Unit' : 'View Unit Lessons & Tasks'}
          </button>
        )}
      </div>
    </article>
  );
}
