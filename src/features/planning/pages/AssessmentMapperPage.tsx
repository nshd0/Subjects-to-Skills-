import React, { useState } from 'react';
import { gradesData } from '@/data/grades';
import { AssessmentTaskCard } from '@/components/AssessmentTaskCard';
import { RubricTable } from '@/components/RubricTable';
import { useAllSkillsForGrade, useAssessmentsForSkill } from '../useAssessments';
import { Target, AlertCircle, Wand2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FEATURES } from '@/config/features';

export function AssessmentMapperPage() {
  const [selectedGradeId, setSelectedGradeId] = useState<string | null>(null);
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(null);

  const { skills } = useAllSkillsForGrade(selectedGradeId);
  const { tasks, rubric } = useAssessmentsForSkill(selectedGradeId, selectedSkillId);

  // Grades with sample assessments currently
  const supportedGrades = ['grade-3', 'grade-6', 'grade-7', 'grade-8'];

  const handleGradeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGradeId(e.target.value);
    setSelectedSkillId(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header Section */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300">
                v0.4.2 MVP
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
              <Target className="w-8 h-8 text-indigo-500" />
              Skill–Assessment Mapper
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
              Map grade-specific competencies to standardized rubrics and actionable assessment tasks. Select a grade and a target skill to view associated assessments.
            </p>
          </div>
          {FEATURES.ENABLE_ASSESSMENT_WIZARD && (
            <Link
              to="/assess/new"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px] shadow-sm whitespace-nowrap"
            >
              <Wand2 className="w-4 h-4" />
              <span>Create an assessment</span>
            </Link>
          )}
        </div>

        {/* Selectors */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex-1 max-w-xs">
            <label htmlFor="gradeSelector" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Grade Level
            </label>
            <select 
              id="gradeSelector"
              value={selectedGradeId || ''} 
              onChange={handleGradeChange}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden appearance-none min-h-[44px]"
            >
              <option value="" disabled>Choose a grade...</option>
              {gradesData.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>

          <div className="flex-1 max-w-xs">
            <label htmlFor="skillSelector" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Skill
            </label>
            <select 
              id="skillSelector"
              value={selectedSkillId || ''} 
              onChange={(e) => setSelectedSkillId(e.target.value)}
              disabled={!selectedGradeId || skills.length === 0}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden appearance-none min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <option value="" disabled>Choose a skill...</option>
              {skills.map(skill => (
                <option key={skill.id} value={skill.id}>{skill.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Area */}
        {selectedGradeId && !supportedGrades.includes(selectedGradeId) && (
          <div className="bg-slate-100 dark:bg-slate-800/50 rounded-2xl p-12 text-center border-2 border-dashed border-slate-300 dark:border-slate-700">
            <AlertCircle className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No assessments available yet</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Sample assessment tasks are currently available for Grade 3, Grade 6, Grade 7, and Grade 8. Select one of these grades to view the mapped assessments.
            </p>
          </div>
        )}

        {selectedGradeId && supportedGrades.includes(selectedGradeId) && selectedSkillId && (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Assessment Tasks */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Assessment Tasks
              </h2>
              {tasks.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {tasks.map(task => (
                    <AssessmentTaskCard key={task.id} task={task} />
                  ))}
                </div>
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">No tasks mapped to this skill yet.</p>
              )}
            </div>

            {/* Rubric */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-2">
                Graduated Rubric
              </h2>
              {rubric ? (
                <RubricTable rubric={rubric} />
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">No rubric mapped to this skill yet.</p>
              )}
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
