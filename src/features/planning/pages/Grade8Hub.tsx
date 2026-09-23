import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Clock, Users, ArrowRight, ShieldCheck, Calculator, FlaskConical, Languages, Globe, BrainCircuit, Cpu, Sparkles, AlertCircle } from 'lucide-react';
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

        {/* CBSE Artificial Intelligence & Computational Thinking Tracks */}
        {FEATURES.ENABLE_AI_SUBJECT && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <BrainCircuit className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  CBSE AI & Computational Thinking Tracks
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Grade 8 features two distinct CBSE tracks: compulsory embedded CT&AI (Track A) and the optional skill module (Track B).
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Track A: CT&AI */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 p-6 flex flex-col shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Track A • Compulsory Embedded
                  </span>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">Computational Thinking & AI (CT&AI)</h3>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">100 Hours/Year Compulsory Curriculum</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Embedded into Mathematics, Science, and Social Science. Covers Advanced CT (Sorting & Graphs, 40 hrs), Introductory AI Concepts (5-Stage Project Cycle & Ethics, 20 hrs), and Interdisciplinary Capstone Projects (40 hrs).
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 mb-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between font-medium">
                    <span>Advanced CT Skills (Sorting & Networks):</span>
                    <strong className="text-slate-900 dark:text-white">40 hrs</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Introductory AI (Project Cycle & Ethics):</span>
                    <strong className="text-slate-900 dark:text-white">20 hrs</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Capstone Interdisciplinary Project:</span>
                    <strong className="text-slate-900 dark:text-white">40 hrs</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-500">Source: CBSE CTAI_Pri_2026-27</span>
                  <Link to="/roadmap?grade=grade-8&subject=computational-thinking-&-ai" className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
                    View Track A Skills <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Track B: Skill Module 901C */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-amber-200 dark:border-amber-900/50 p-6 flex flex-col shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="bg-amber-100 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Track B • Optional Skill Module
                  </span>
                </div>
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">AI Skill Module (Code 901C)</h3>
                  <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">15 Hours Standalone Short Course</span>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  Offered strictly at school discretion as a vocational skill module. Focuses on practical 4Ws Problem Scoping, Rule-based vs Learning-based Modelling, and Testing & AI Ethical Dilemmas.
                </p>
                
                <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 mb-4 space-y-2 text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                  <div className="flex justify-between font-medium">
                    <span>Unit 1: 4Ws Problem Scoping Canvas</span>
                    <strong className="text-slate-900 dark:text-white">5 hrs</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Unit 2: Decision Trees & Machine Learning</span>
                    <strong className="text-slate-900 dark:text-white">5 hrs</strong>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Unit 3: Testing Accuracy & Biometric Ethics</span>
                    <strong className="text-slate-900 dark:text-white">5 hrs</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                  <span className="text-xs font-semibold text-slate-500">Source: CBSE Skill Module 901C</span>
                  <Link to="/roadmap?grade=grade-8&subject=ai-skill-module-(901)" className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 hover:underline">
                    View Track B Skills <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Curriculum Relationship & Transition Note */}
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-2xl p-5 text-sm text-blue-900 dark:text-blue-200 space-y-2">
              <div className="flex items-center gap-2 font-bold text-base">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                Track Relationship & Grade 9 Transition Note
              </div>
              <p className="leading-relaxed">
                <strong>Track A (CT&AI, 100 hrs)</strong> is compulsory and embedded into existing subjects for all Grade 8 students. It provides the essential conceptual foundation (5-stage project lifecycle, algorithmic logic, and ethics) that bridges into <strong>Track C (CBSE Skill Subject 417)</strong> in Grade 9. <strong>Track B (901C, 15 hrs)</strong> is an optional standalone short course offered at school discretion; it does not replace Track A and is not a prerequisite for Grade 9.
              </p>
            </div>
          </section>
        )}

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
