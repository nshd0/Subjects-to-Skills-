import React, { useState } from 'react';
import { gradesData } from '@/data/grades';
import { Unit } from '@/types';
import { useUnitsForGrade, useCreateUnit } from '../useUnits';
import { useLessonsForUnit } from '../useLessons';
import { UnitDetailPanel } from '../components/UnitDetailPanel';
import { CreateUnitForm } from '../components/CreateUnitForm';
import { PlusCircle, Target, Clock, ArrowRight } from 'lucide-react';

function UnitCard({ unit, onClick }: { unit: Unit, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-md cursor-pointer transition-all flex flex-col h-full group"
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          unit.status === 'published' 
            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300' 
            : 'bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-300'
        }`}>
          {unit.status}
        </span>
        <span className="flex items-center gap-1 text-[10px] font-bold text-slate-400">
          <Clock className="w-3.5 h-3.5" />
          {unit.durationWeeks} Wks
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
        {unit.title}
      </h3>
      
      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
        {unit.description}
      </p>
      
      <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-slate-500">
          <Target className="w-3.5 h-3.5" />
          <span className="font-medium">{unit.targetSkillIds?.length || 0} Skills</span>
        </div>
        <span className="font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:underline">
          View Plan <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </div>
  );
}

export function PlannerPage() {
  const [selectedGradeId, setSelectedGradeId] = useState<string | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  const { units, loading } = useUnitsForGrade(selectedGradeId);
  const { lessons } = useLessonsForUnit(selectedUnit?.id || null);
  const createUnit = useCreateUnit();

  const handleCreateSubmit = (newUnit: Unit) => {
    createUnit(newUnit);
    setShowCreateForm(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pt-8 pb-24">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        <header className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Unit & Lesson Planner (v0.4)
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Build and map competency-based curricular units directly to skills.
          </p>
        </header>

        {showCreateForm ? (
          <CreateUnitForm 
            gradeId={selectedGradeId!} 
            onSubmit={handleCreateSubmit} 
            onCancel={() => setShowCreateForm(false)} 
          />
        ) : selectedUnit ? (
          <UnitDetailPanel 
            unit={selectedUnit} 
            lessons={lessons} 
            onBack={() => setSelectedUnit(null)}
            onPrint={() => window.print()}
          />
        ) : (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Select Grade Level
                </label>
                <select 
                  value={selectedGradeId || ''} 
                  onChange={e => setSelectedGradeId(e.target.value)}
                  className="w-full sm:w-64 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-indigo-500 focus:outline-hidden appearance-none"
                >
                  <option value="" disabled>Choose a grade...</option>
                  {gradesData.map(g => (
                    <option key={g.id} value={g.id}>{g.name} - {g.stage} Stage</option>
                  ))}
                </select>
              </div>

              {selectedGradeId && (
                <button
                  onClick={() => setShowCreateForm(true)}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors min-h-[44px]"
                >
                  <PlusCircle className="w-4 h-4" />
                  <span>Create New Unit</span>
                </button>
              )}
            </div>

            {!selectedGradeId ? (
              <div className="py-20 text-center space-y-3">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-slate-400 mb-4">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Ready to plan?</h3>
                <p className="text-slate-500 dark:text-slate-400">Select a grade from the dropdown above to view or create units.</p>
              </div>
            ) : loading ? (
              <div className="py-20 text-center">
                <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
                <p className="text-slate-500 mt-4 font-medium">Loading units...</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Available Units
                </h3>
                {units.length === 0 ? (
                  <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-10 text-center">
                    <p className="text-slate-600 dark:text-slate-400">No units planned for this grade yet.</p>
                    <button 
                      onClick={() => setShowCreateForm(true)}
                      className="mt-4 text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                    >
                      Create the first unit &rarr;
                    </button>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {units.map(unit => (
                      <UnitCard key={unit.id} unit={unit} onClick={() => setSelectedUnit(unit)} />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
