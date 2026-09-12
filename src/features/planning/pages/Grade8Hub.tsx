import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Clock, Users, ArrowRight, ShieldCheck, Calculator, FlaskConical, Languages, Globe } from 'lucide-react';
import { FEATURES } from '@/config/features';
import { subjectMaps } from '@/data/subjectMaps';

const subjectConfig = [
  { id: 'math', name: 'Mathematics', icon: Calculator, color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30', statement: "See how Mathematics skills grow through Grade 8" },
  { id: 'science', name: 'Science', icon: FlaskConical, color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30', statement: "See how Science skills grow through Grade 8" },
  { id: 'english', name: 'English', icon: BookOpen, color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30', statement: "See how English skills grow through Grade 8" },
  { id: 'social-science', name: 'Social Science', icon: Globe, color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30', statement: "See how Social Science skills grow through Grade 8" },
  { id: 'second-language', name: 'Second Language', icon: Languages, color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30', statement: "See how Language skills grow through Grade 8" },
];

export function Grade8Hub() {
  const [filter, setFilter] = useState('all');

  const getSubjectStats = (subjectName: string) => {
    const maps = subjectMaps.filter(m => m.grade === 'Grade 8' && m.subject === subjectName);
    return {
      skillCount: maps.length,
      isFullyMapped: maps.length >= 1 // simplified for this demo
    };
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Grade 8</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Grade 8 Subject Hub
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Explore skill progressions, plan lessons, and build assessments across all Grade 8 subjects.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/roadmap?grade=grade-8" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               <Target className="w-4 h-4" /> Skill Map
            </Link>
            <Link to="/planner?grade=grade-8" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               <BookOpen className="w-4 h-4" /> Planner
            </Link>
            <Link to="/assessment-mapper?grade=grade-8" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               <ShieldCheck className="w-4 h-4" /> Assessment Mapper
            </Link>
          </div>
        </header>

        {/* Subjects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Subjects</h2>
            <button className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">Suggest an edit</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectConfig.map(sub => {
              const stats = getSubjectStats(sub.name);
              const Icon = sub.icon;
              return (
                <div key={sub.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-indigo-300 transition-colors group shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${sub.bg} ${sub.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    {stats.isFullyMapped ? (
                       <span className="bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Fully Mapped</span>
                    ) : stats.skillCount === 0 ? (
                       <span className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Unmapped</span>
                    ) : (
                       <span className="bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">Partially Mapped</span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{sub.name}</h3>
                  {stats.skillCount === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1 italic">
                      Skill mapping for this unit is in progress &mdash; you can still create a plan manually.
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">{sub.statement}</p>
                  )}
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500">{stats.skillCount} core skills</span>
                    <Link to={`/roadmap?grade=grade-8&subject=${sub.id}`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:underline">
                      Explore <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cross-Subject Collaboration */}
        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && (
          <section className="space-y-6">
            <div className="bg-indigo-600 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Users className="w-48 h-48" />
              </div>
              <div className="relative z-10 max-w-2xl">
                <span className="bg-indigo-500 text-white text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">New Feature</span>
                <h2 className="text-3xl font-bold mb-3">Cross-Subject Collaboration</h2>
                <p className="text-indigo-100 mb-8 text-lg">
                  Bring two or more subjects together around shared skills. Co-design integrated units with other Grade 8 teachers to create richer learning experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/plan/integrated/new" className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-bold hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2">
                    Start a cross-subject unit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to="/grade/8/collaborate" className="px-6 py-3 rounded-xl bg-indigo-500/50 hover:bg-indigo-500/70 text-white font-bold transition-colors inline-flex items-center gap-2">
                    View active collaborations
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
