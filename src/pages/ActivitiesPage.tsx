import React, { useState, useMemo } from 'react';
import { activitiesData } from '@/data/activities';
import { ActivityCard } from '@/components/ActivityCard';
import { Search, Filter, Sparkles, BookOpen, Layers, CheckCircle } from 'lucide-react';

export function ActivitiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('all');
  const [selectedStage, setSelectedStage] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [lowResourceOnly, setLowResourceOnly] = useState(false);

  const filteredActivities = useMemo(() => {
    return activitiesData.filter(act => {
      const matchesSearch = 
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.primarySkill.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.subject.some(s => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        act.learningObjective.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGrade = selectedGrade === 'all' || act.grade === selectedGrade;
      const matchesStage = selectedStage === 'all' || act.stage === selectedStage;
      const matchesType = selectedType === 'all' || act.activityType === selectedType;
      const matchesLowResource = !lowResourceOnly || act.lowResourceSuitable;

      return matchesSearch && matchesGrade && matchesStage && matchesType && matchesLowResource;
    });
  }, [searchQuery, selectedGrade, selectedStage, selectedType, lowResourceOnly]);

  const grades = ['Grade 3', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'];
  const stages = ['Preparatory', 'Middle', 'Secondary'];
  const activityTypes = [
    'Inquiry or investigation',
    'Project',
    'Digital or AI literacy',
    'Group task',
    'Low-preparation activity'
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            Classroom Activity Bank
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Classroom Activities & Flagship Projects
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Subject-rooted, grade-appropriate lesson plans and investigations mapped directly to observable student capabilities.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search activities by subject, skill, keyword (e.g. data walk, water audit, AI)..."
                className="w-full text-xs md:text-sm pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="all">All Grades</option>
                {grades.map(g => <option key={g} value={g}>{g}</option>)}
              </select>

              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="all">All Stages</option>
                {stages.map(s => <option key={s} value={s}>{s}</option>)}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
              >
                <option value="all">All Activity Types</option>
                {activityTypes.map(t => <option key={t} value={t}>{t}</option>)}
              </select>

              <label className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 p-2.5 border border-slate-200 dark:border-slate-700 rounded-xl cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800">
                <input
                  type="checkbox"
                  checked={lowResourceOnly}
                  onChange={(e) => setLowResourceOnly(e.target.checked)}
                  className="rounded text-indigo-600"
                />
                <span>Low-Resource Only</span>
              </label>
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
            <span>Showing <strong>{filteredActivities.length}</strong> lesson plans</span>
            {(searchQuery || selectedGrade !== 'all' || selectedStage !== 'all' || selectedType !== 'all' || lowResourceOnly) && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedGrade('all');
                  setSelectedStage('all');
                  setSelectedType('all');
                  setLowResourceOnly(false);
                }}
                className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-6">
          {filteredActivities.length > 0 ? (
            filteredActivities.map((act, idx) => (
              <ActivityCard 
                key={act.id} 
                activity={act} 
                isFlagship={idx === 0 && selectedGrade !== 'all'} 
              />
            ))
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-8 space-y-2">
              <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching activities found</h3>
              <p className="text-xs text-slate-500">Try loosening your search terms or filters above.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
