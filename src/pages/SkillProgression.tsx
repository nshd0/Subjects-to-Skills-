import React from 'react';
import { skillProgression } from '@/data/curriculum';

export function SkillProgression() {
  return (
    <div className="pb-16">
      <div className="bg-slate-900 text-white pt-16 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Skill Progression Across Stages</h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            A comprehensive matrix showing how core competencies evolve from simple foundational actions to complex, independent applications over a learner's journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mt-[-2rem]">
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-200 dark:border-slate-800">
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 sticky left-0 bg-slate-50 dark:bg-slate-950 z-10 border-r border-slate-200 dark:border-slate-800 w-1/6">Core Skill</th>
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 w-1/6">Grades 1–2</th>
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 w-1/6">Grades 3–5</th>
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 w-1/6">Grades 6–8</th>
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 w-1/6">Grades 9–10</th>
                <th className="p-4 font-semibold text-slate-900 dark:text-slate-100 w-1/6">Grades 11–12</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {skillProgression.map((row, i) => (
                <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-900/50 transition-colors">
                  <td className="p-4 font-medium text-slate-900 dark:text-slate-100 sticky left-0 bg-white dark:bg-slate-900 z-10 border-r border-slate-100 dark:border-slate-800 group-hover:bg-slate-50/50 dark:group-hover:bg-slate-900/50">
                    {row.skill}
                  </td>
                  {row.progression.map((step, j) => (
                    <td key={j} className="p-4 text-sm text-slate-700 dark:text-slate-300 align-top">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        {step}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
