import React, { useState } from 'react';
import { evidenceItemsData, sampleRubricsData } from '@/data/rubrics';
import { SkillRubric } from '@/components/SkillRubric';
import { 
  Award, CheckCircle2, BookOpen, Layers, Target, 
  HelpCircle, Sparkles, Filter, FileText 
} from 'lucide-react';
import { EvidenceCategory } from '@/types';

export function AssessmentHub() {
  const [selectedCategory, setSelectedCategory] = useState<EvidenceCategory>('knowledge');
  const [selectedRubricId, setSelectedRubricId] = useState(sampleRubricsData[0]?.id || '');

  const activeRubric = sampleRubricsData.find(r => r.id === selectedRubricId) || sampleRubricsData[0];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Award className="w-3.5 h-3.5" />
            Assessment & Evidence Architecture
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Evidence and Assessment Hub
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Shift from high-stakes rote testing to ongoing observable evidence: Knowledge, Performance, and Reflection.
          </p>
        </div>

        {/* Core Principles Banner */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Observable Evidence
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Assess Performance, Not Personality</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              We eliminate subjective value judgments like "good child" or "smart learner." Assessments measure concrete, verifiable actions and products.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Four Observable Levels
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Emerging → Transfer</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Progression reflects independent execution and context transfer, rather than arbitrary percentage marks or bell-curve sorting.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Low-Paperwork Routine
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Built for Real Classrooms</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Formative checkpoints integrate into standard 40-minute Indian school periods via exit slips, 2-minute spot checks, and peer reviews.
            </p>
          </div>
        </div>

        {/* SECTION 1: THE THREE EVIDENCE TYPES */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Three Distinct Evidence Types
              </h2>
              <p className="text-xs text-slate-500">
                A triangulated evidence model ensuring comprehensive evaluation of student capability
              </p>
            </div>

            {/* Category Switcher Tabs */}
            <div className="flex border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden p-1 bg-slate-50 dark:bg-slate-800 text-xs font-semibold">
              <button
                onClick={() => setSelectedCategory('knowledge')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === 'knowledge'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                1. Knowledge Evidence
              </button>
              <button
                onClick={() => setSelectedCategory('performance')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === 'performance'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                2. Performance Evidence
              </button>
              <button
                onClick={() => setSelectedCategory('reflection')}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  selectedCategory === 'reflection'
                    ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                3. Reflection Evidence
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {evidenceItemsData
              .filter(item => item.category === selectedCategory)
              .map(item => (
                <div key={item.id} className="p-5 rounded-xl bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                      {item.categoryName}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  
                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
                    <strong className="text-slate-700 dark:text-slate-300 block">Classroom Examples:</strong>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                      {item.examples.map((ex, i) => <li key={i}>{ex}</li>)}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <strong className="text-slate-700 dark:text-slate-300">How Teachers Assess: </strong>
                    <span className="text-slate-600 dark:text-slate-400">{item.howToAssess}</span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* SECTION 2: INTERACTIVE SKILL RUBRIC GALLERY */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Grade-Wise Skill Progression Rubrics
              </h2>
              <p className="text-xs text-slate-500">
                Click any cell to score or highlight student observable progress levels
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Select Rubric:</span>
              <select
                value={selectedRubricId}
                onChange={(e) => setSelectedRubricId(e.target.value)}
                className="text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium"
              >
                {sampleRubricsData.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.grade} · {r.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {activeRubric && (
            <SkillRubric rubric={activeRubric} />
          )}
        </div>

      </div>
    </div>
  );
}
