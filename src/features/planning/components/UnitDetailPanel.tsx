import React from 'react';
import { Unit, Lesson } from '@/types';
import { Clock, Target, Printer, LayoutList } from 'lucide-react';
// Minimal inline LessonRow for MVP
// In the future this can be expanded or we can reuse a global component if it fits
const LessonRow: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm print:shadow-none print:border-slate-300 relative pl-6">
      <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl bg-indigo-500 print:bg-slate-400"></div>
      
      <div className="shrink-0 w-16 pt-1">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Lesson</span>
        <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {String(lesson.sequenceIndex).padStart(2, '0')}
        </div>
      </div>
      
      <div className="space-y-2 flex-grow">
        <h4 className="text-base font-bold text-slate-900 dark:text-white">{lesson.title}</h4>
        {lesson.activities && lesson.activities.length > 0 && (
          <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600 dark:text-slate-400">
            {lesson.activities.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        )}
        
        {lesson.resources && lesson.resources.length > 0 && (
          <div className="pt-2 flex flex-wrap gap-2">
            {lesson.resources.map((res, i) => (
              <span key={i} className="inline-flex items-center px-2 py-1 rounded-md text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {res}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

interface UnitDetailPanelProps {
  unit: Unit;
  lessons: Lesson[];
  onPrint: () => void;
  onBack: () => void;
}

export function UnitDetailPanel({ unit, lessons, onPrint, onBack }: UnitDetailPanelProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 print:hidden">
        <button 
          onClick={onBack}
          className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-semibold transition-colors min-h-[44px] focus:ring-2 focus:ring-slate-500 focus:outline-hidden"
        >
          &larr; Back to Units
        </button>
        <div className="flex-1"></div>
        <button 
          onClick={onPrint}
          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold flex items-center gap-2 transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          <Printer className="w-4 h-4" />
          <span>Print Unit Plan</span>
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm print:shadow-none print:border-slate-300 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              unit.status === 'published' 
                ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' 
                : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
            }`}>
              {unit.status}
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {unit.title}
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {unit.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
          <div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Clock className="w-3.5 h-3.5" />
              Duration
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{unit.durationWeeks} Weeks</span>
          </div>
          <div>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
              <Target className="w-3.5 h-3.5" />
              Learning Areas
            </span>
            <span className="font-semibold text-slate-900 dark:text-white">{unit.learningAreas.join(', ') || 'Various'}</span>
          </div>
        </div>

        {unit.targetSkillIds && unit.targetSkillIds.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-3">Target Skills</h3>
            <div className="flex flex-wrap gap-2">
              {unit.targetSkillIds.map(skill => (
                <span key={skill} className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-100 dark:border-indigo-900/40">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <LayoutList className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          Lesson Sequence
        </h3>
        
        {lessons.length === 0 ? (
          <div className="p-8 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 text-center">
            <p className="text-slate-500">No lessons planned for this unit yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {lessons.map(lesson => (
              <LessonRow key={lesson.id} lesson={lesson} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
