import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Clock, Users, ArrowRight, ShieldCheck, Calculator, FlaskConical, Languages, Globe, Leaf, BrainCircuit, Cpu, Sparkles, AlertCircle, Award } from 'lucide-react';
import { FEATURES } from '@/config/features';
import { subjectMaps } from '@/data/subjectMaps';
import { gradesData } from '@/data/grades';

const iconMap: Record<string, any> = {
  'Mathematics': Calculator,
  'Science': FlaskConical,
  'Social Science': Globe,
  'English': BookOpen,
  'Second Language': Languages,
  'Hindi': Languages,
  'Third Language': Languages,
  'EVS': Leaf
};

const colorMap: Record<string, { color: string, bg: string }> = {
  'Mathematics': { color: 'text-blue-500', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  'Science': { color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  'EVS': { color: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
  'English': { color: 'text-indigo-500', bg: 'bg-indigo-100 dark:bg-indigo-900/30' },
  'Social Science': { color: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30' },
  'Second Language': { color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  'Hindi': { color: 'text-rose-500', bg: 'bg-rose-100 dark:bg-rose-900/30' },
  'Third Language': { color: 'text-purple-500', bg: 'bg-purple-100 dark:bg-purple-900/30' },
};

export function GenericGradeHub({ gradeId }: { gradeId: string }) {
  const profile = gradesData.find(g => g.id === `grade-${gradeId}`);
  if (!profile) return <div>Grade not found</div>;

  const subjects = profile.cbseSubjects || [];
  
  const getSubjectStats = (subjectName: string) => {
    const sLow = subjectName.toLowerCase();
    const maps = subjectMaps.filter(m => {
      const gMatch = m.grade === `Grade ${gradeId}` || m.grade === gradeId;
      if (!gMatch) return false;
      const mLow = m.subject.toLowerCase();
      return mLow.includes(sLow) || sLow.includes(mLow) || 
        (sLow === 'evs' && (mLow.includes('environmental') || mLow.includes('evs'))) ||
        (sLow === 'science' && (mLow.includes('science') || mLow.includes('physics') || mLow.includes('chemistry') || mLow.includes('biology')));
    });
    return {
      skillCount: maps.length,
      isFullyMapped: maps.length >= 2 
    };
  };

  const getStatusIndicator = () => {
    if (profile.curriculumFramework === 'pre-NCF-2023') {
      return (
        <div className="bg-amber-50 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 p-4 rounded-xl text-sm text-amber-800 dark:text-amber-200 mb-6">
          <span className="font-bold block mb-1">Current syllabus, pre-NCF</span>
          Grade {gradeId} will move to new NCERT textbooks and NCF-2023 curriculum from the 2027-28 session. This content reflects the current syllabus in use for {profile.academicSession || '2026-27'}.
        </div>
      );
    }
    if (profile.textbookStatus === 'new-ncert-rolling-out') {
      return (
        <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-xl text-sm text-blue-800 dark:text-blue-200 mb-6">
          <span className="font-bold block mb-1">New curriculum rolling out</span>
          This grade uses the NCF-SE-2023 framework. Textbook chapters are still being finalized by NCERT for {profile.academicSession || '2026-27'}, so mappings here represent the official released curriculum framework.
        </div>
      );
    }
    if (profile.curriculumFramework === 'NCF-SE-2023') {
      return (
        <div className="bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-800 p-4 rounded-xl text-sm text-emerald-800 dark:text-emerald-200 mb-6">
          <span className="font-bold block mb-1">NCF-SE 2023 aligned</span>
          Content is mapped to the newly published NCERT textbooks for {profile.academicSession || '2026-27'}.
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        
        {/* Header */}
        <header className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Grade {gradeId}</span>
            {profile.thirdLanguageRequired && (
              <span className="bg-purple-100 text-purple-700 dark:bg-purple-900/50 dark:text-purple-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">3-Language Formula Active</span>
            )}
            {profile.advancedTrackAvailable && (
              <span className="bg-rose-100 text-rose-700 dark:bg-rose-900/50 dark:text-rose-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">Advanced Tracks Available</span>
            )}
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Grade {gradeId} Subject Hub
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            Explore skill progressions, plan lessons, and build assessments across all Grade {gradeId} subjects.
          </p>
          
          {getStatusIndicator()}

          <div className="flex flex-wrap gap-3 pt-2">
            <Link to={`/roadmap?grade=grade-${gradeId}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               <Target className="w-4 h-4" /> Skill Map
            </Link>
            <Link to={`/planner?grade=grade-${gradeId}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
               <BookOpen className="w-4 h-4" /> Planner
            </Link>
            <Link to={`/assessment-mapper?grade=grade-${gradeId}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
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
            {subjects.map(sub => {
              const stats = getSubjectStats(sub);
              const Icon = iconMap[sub] || BookOpen;
              const style = colorMap[sub] || { color: 'text-slate-500', bg: 'bg-slate-100 dark:bg-slate-800' };
              
              return (
                <div key={sub} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col hover:border-indigo-300 transition-colors group shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl ${style.bg} ${style.color}`}>
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
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{sub}</h3>
                  {stats.skillCount === 0 ? (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1 italic">
                      Skill mapping for this unit is in progress &mdash; you can still create a plan manually.
                    </p>
                  ) : (
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 flex-1">See how {sub} skills grow through Grade {gradeId}</p>
                  )}
                  
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-slate-500">{stats.skillCount} core skills</span>
                    <Link to={`/roadmap?grade=grade-${gradeId}&subject=${sub.toLowerCase().replace(' ', '-')}`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:underline">
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
                  CBSE AI & Computational Thinking Curriculum
                </h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {['3', '4', '5'].includes(gradeId) && "Grade " + gradeId + " features Track A: Compulsory Embedded Computational Thinking (50 hrs/yr)."}
                  {['6', '7'].includes(gradeId) && "Grade " + gradeId + " features two distinct tracks: compulsory embedded CT&AI (Track A) and the optional skill module (Track B)."}
                  {['9', '10', '11', '12'].includes(gradeId) && "Grade " + gradeId + " features Track C: Artificial Intelligence Skill Subject (Code 417, 100 Marks)."}
                </p>
              </div>
            </div>

            {/* PREPARATORY: GRADES 3–5 (Track A Only) */}
            {['3', '4', '5'].includes(gradeId) && (
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/50 p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Track A • Compulsory Embedded
                    </span>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Computational Thinking (Preparatory)</h3>
                    <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">50 Hours/Year • Embedded in Mathematics & EVS</span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    Embedded into core subjects. Explicitly focused on Computational Thinking foundational strands without AI component: <strong>Abstract Thinking</strong>, <strong>Pattern Recognition</strong>, <strong>Decomposition</strong>, and <strong>Algorithmic Thinking</strong>.
                  </p>
                  
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <strong className="block text-slate-900 dark:text-white mb-1">Abstract Thinking</strong>
                      <span className="text-slate-500 dark:text-slate-400">Filtering noise & schematic representations</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <strong className="block text-slate-900 dark:text-white mb-1">Pattern Recognition</strong>
                      <span className="text-slate-500 dark:text-slate-400">Rule finding & sequence prediction</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <strong className="block text-slate-900 dark:text-white mb-1">Decomposition</strong>
                      <span className="text-slate-500 dark:text-slate-400">Routine breakdown into sub-tasks</span>
                    </div>
                    <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                      <strong className="block text-slate-900 dark:text-white mb-1">Algorithmic Thinking</strong>
                      <span className="text-slate-500 dark:text-slate-400">Unambiguous steps & decision trees</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Source: CBSE CT&AI Curriculum, Classes 3-8, 2026-27</span>
                    <Link to={`/roadmap?grade=grade-${gradeId}&subject=computational-thinking`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
                      Explore CT Skills <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800/60 rounded-xl p-4 text-xs text-indigo-900 dark:text-indigo-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Curriculum Scope Note:</strong> Per CBSE 2026-27 preparatory guidelines, Grades 3–5 receive ONLY Computational Thinking content (no AI labeling or machine learning models), building spatial and procedural logic through play, movement, and concrete classroom activities.
                  </div>
                </div>
              </div>
            )}

            {/* MIDDLE: GRADES 6–7 (Track A & Track B) */}
            {['6', '7'].includes(gradeId) && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Track A */}
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
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">Computational Thinking & AI</h3>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">100 Hours/Year Compulsory Curriculum</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Embedded into existing subjects. Split into: Advanced CT Skills (40 hrs), Introductory AI Concepts (20 hrs), and Interdisciplinary Projects (40 hrs).
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between">
                        <span>Advanced CT Skills:</span>
                        <strong className="text-slate-900 dark:text-white">40 hrs</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Introductory AI Concepts:</span>
                        <strong className="text-slate-900 dark:text-white">20 hrs</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Interdisciplinary Projects:</span>
                        <strong className="text-slate-900 dark:text-white">40 hrs</strong>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold text-slate-500">Source: CBSE CTAI_Pri_2026-27</span>
                      <Link to={`/roadmap?grade=grade-${gradeId}&subject=computational-thinking-&-ai`} className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline">
                        View Track A Skills <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Track B */}
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
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        AI Skill Module (Code {gradeId === '6' ? '901A' : '901B'})
                      </h3>
                      <span className="text-xs font-semibold text-amber-600 dark:text-amber-400">15 Hours Standalone Short Course</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                      Offered at school discretion as a vocational elective. Standalone short course introducing AI in everyday life, three domains, and dataset bias.
                    </p>
                    
                    <div className="bg-slate-50 dark:bg-slate-950 rounded-xl p-3 mb-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-400 border border-slate-100 dark:border-slate-800">
                      <div className="flex justify-between">
                        <span>Course Type:</span>
                        <strong className="text-slate-900 dark:text-white">Standalone Skill Module</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>Total Duration:</span>
                        <strong className="text-slate-900 dark:text-white">~15 Hours</strong>
                      </div>
                      <div className="flex justify-between">
                        <span>School Offering:</span>
                        <strong className="text-slate-900 dark:text-white">Discretionary Elective</strong>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mt-auto">
                      <span className="text-xs font-semibold text-slate-500">Source: CBSE Skill Module {gradeId === '6' ? '901A' : '901B'}</span>
                      <Link to={`/roadmap?grade=grade-${gradeId}&subject=ai-skill-module-(901)`} className="text-sm font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1 hover:underline">
                        View Track B Skills <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-xs text-blue-900 dark:text-blue-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Track Relationship:</strong> Track A is compulsory and embedded into Mathematics, Science, and Social Science for all students (100 hrs/yr). Track B (Skill Module 901) is an optional standalone elective that schools may offer alongside, and is not a prerequisite for secondary studies.
                  </div>
                </div>
              </div>
            )}

            {/* SECONDARY: GRADES 9–12 (Track C) */}
            {['9', '10', '11', '12'].includes(gradeId) && (
              <div className="space-y-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl border-2 border-emerald-200 dark:border-emerald-900/50 p-6 shadow-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      Track C • CBSE Skill Subject (Code 417)
                    </span>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Artificial Intelligence (Subject Code 417)</h3>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      100 Marks (50 Theory + 50 Practical) • 200 Hours/Year
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                    Established CBSE secondary board skill subject. Features rigorous assessment covering Part A (Employability Skills) and Part B (Subject Specific Skills including Python, Computer Vision, NLP, and Evaluation Metrics).
                  </p>
                  
                  {['11', '12'].includes(gradeId) ? (
                    <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/50 p-4 rounded-xl text-xs text-amber-800 dark:text-amber-200 mb-4">
                      <strong>Status: Skill Mapping Pending Verification</strong> &mdash; Detailed unit competencies for Class {gradeId} are pending official CBSE publication and release of 2026-27 senior secondary documentation.
                    </div>
                  ) : (
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-xs">
                      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Part B Unit 1/2</strong>
                        <span className="text-slate-500 dark:text-slate-400">AI Concepts & 5-Stage Project Cycle</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Part B Unit 3</strong>
                        <span className="text-slate-500 dark:text-slate-400">Python Programming & Lab Work</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Part B Unit 4/5/6</strong>
                        <span className="text-slate-500 dark:text-slate-400">Data Science, Computer Vision & NLP</span>
                      </div>
                      <div className="bg-slate-50 dark:bg-slate-950 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-white mb-1">Part B Unit 7</strong>
                        <span className="text-slate-500 dark:text-slate-400">Confusion Matrix & Evaluation Metrics</span>
                      </div>
                    </div>
                  )}

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">Source: CBSE Skill Education Curriculum 417-AI-{gradeId === '9' ? 'IX' : gradeId === '10' ? 'X' : gradeId}</span>
                    <Link to={`/roadmap?grade=grade-${gradeId}&subject=artificial-intelligence-(code-417)`} className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 hover:underline">
                      View Subject 417 Skills <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 rounded-xl p-4 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Curriculum Progression & Transition Note:</strong> Grade 8 Track A prepares learners conceptually for this elective track. Under NEP 2020 / NCF-SE 2023 rollout plans, CT&AI is slated to transition into a compulsory Class 9 subject starting from the 2027–28 session; currently, Code 417 operates as the established CBSE Board elective with 50 theory and 50 practical marks.
                  </div>
                </div>
              </div>
            )}
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
                  Bring two or more subjects together around shared skills. Co-design integrated units with other Grade {gradeId} teachers to create richer learning experiences.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to={`/plan/integrated/new?grade=grade-${gradeId}`} className="px-6 py-3 rounded-xl bg-white text-indigo-600 font-bold hover:bg-slate-50 transition-colors shadow-sm inline-flex items-center gap-2">
                    Start a cross-subject unit <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link to={`/grade/8/collaborate`} className="px-6 py-3 rounded-xl bg-indigo-500/50 hover:bg-indigo-500/70 text-white font-bold transition-colors inline-flex items-center gap-2">
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
