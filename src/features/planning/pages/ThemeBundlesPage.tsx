import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Leaf, 
  Landmark, 
  Binary, 
  Clock, 
  Layers, 
  Target, 
  CheckCircle2, 
  BookOpen, 
  Printer, 
  Copy, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { themeBundles } from '@/data/themeBundles';
import { ThemeBundle, ThemeCrossSubjectConnection } from '@/types';
import { useWizardIntegratedUnits } from '../useWizardStorage';

const THEME_STYLES: Record<string, { bg: string; border: string; text: string; badge: string; icon: any }> = {
  climate: {
    bg: 'bg-emerald-50/60 dark:bg-emerald-950/20',
    border: 'border-emerald-200 dark:border-emerald-900/60',
    text: 'text-emerald-900 dark:text-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    icon: Leaf
  },
  heritage: {
    bg: 'bg-amber-50/60 dark:bg-amber-950/20',
    border: 'border-amber-200 dark:border-amber-900/60',
    text: 'text-amber-900 dark:text-amber-200',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    icon: Landmark
  },
  'data-ethics': {
    bg: 'bg-indigo-50/60 dark:bg-indigo-950/20',
    border: 'border-indigo-200 dark:border-indigo-900/60',
    text: 'text-indigo-900 dark:text-indigo-200',
    badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    icon: Binary
  }
};

export function ThemeBundlesPage() {
  const navigate = useNavigate();
  const { saveUnit } = useWizardIntegratedUnits();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBundleId, setSelectedBundleId] = useState<string>(themeBundles[0].id);
  const [cloneSuccessMsg, setCloneSuccessMsg] = useState<string | null>(null);

  const filteredBundles = selectedCategory === 'all' 
    ? themeBundles 
    : themeBundles.filter(b => b.themeCategory === selectedCategory);

  const activeBundle = themeBundles.find(b => b.id === selectedBundleId) || filteredBundles[0] || themeBundles[0];
  const activeStyle = THEME_STYLES[activeBundle.themeCategory] || THEME_STYLES.climate;
  const ActiveIcon = activeStyle.icon;

  const handleClone = (bundle: ThemeBundle) => {
    const clonedId = `cloned-${bundle.slug}-${Date.now()}`;
    saveUnit({
      id: clonedId,
      title: `${bundle.title} (Draft Unit)`,
      description: bundle.description,
      gradeId: bundle.gradeBand.includes('6–8') ? 'grade-7' : 'grade-9',
      subjectIds: bundle.disciplines,
      skillIds: bundle.unifyingSkills,
      leadTeacherId: 'me',
      collaboratorIds: [],
      status: 'draft',
      bloomsFocus: ['Apply', 'Analyse', 'Create'],
      varkActivities: {},
      timeline: bundle.crossSubjectConnections.map((conn, idx) => ({
        title: `${conn.subject}: ${conn.coreConcepts[0]}`,
        durationMin: 90,
        skillIds: bundle.unifyingSkills,
        bloomsLevel: 'Apply',
        varkType: 'visual'
      })),
      comments: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    setCloneSuccessMsg(`"${bundle.title}" has been cloned into your Unit Plans!`);
    setTimeout(() => setCloneSuccessMsg(null), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm print:border-none print:p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  v0.6 Phase 1 · Browse Only
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Multi-Disciplinary Inquiry Blueprints
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Compass className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Interdisciplinary Theme Bundles
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Connect Science, Mathematics, Social Science, and Technology into coherent inquiry units. Every cross-subject connection cites verifiable NCF-SE 2023 chapters and NCERT learning outcomes. Browse and clone these blueprints directly into your unit plans.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-2 shadow-sm transition-colors min-h-[40px]"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Bundle (B&W Ready)</span>
              </button>
              <button
                onClick={() => handleClone(activeBundle)}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors min-h-[40px]"
              >
                <Copy className="w-4 h-4" />
                <span>Clone into My Plans</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2.5 print:hidden">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              All Bundles (3)
            </button>
            <button
              onClick={() => setSelectedCategory('climate')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'climate'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Leaf className="w-3.5 h-3.5" />
              <span>Climate & Ecological Resilience</span>
            </button>
            <button
              onClick={() => setSelectedCategory('heritage')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'heritage'
                  ? 'bg-amber-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Heritage & Living Traditions</span>
            </button>
            <button
              onClick={() => setSelectedCategory('data-ethics')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                selectedCategory === 'data-ethics'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              <Binary className="w-3.5 h-3.5" />
              <span>Data, AI & Digital Ethics</span>
            </button>
          </div>
        </div>

        {/* Clone Notification Toast */}
        {cloneSuccessMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-4 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{cloneSuccessMsg}</span>
            </div>
            <Link
              to="/planner"
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors shrink-0"
            >
              Open Planner →
            </Link>
          </div>
        )}

        {/* Bundle Selector Cards (Horizontal Carousel / Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 print:hidden">
          {themeBundles.map(bundle => {
            const isSelected = bundle.id === selectedBundleId;
            const bStyle = THEME_STYLES[bundle.themeCategory];
            const BIcon = bStyle.icon;
            return (
              <button
                key={bundle.id}
                onClick={() => setSelectedBundleId(bundle.id)}
                className={`text-left p-6 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? `${bStyle.bg} ${bStyle.border} ring-2 ring-indigo-500 shadow-md`
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${bStyle.badge}`}>
                      {bundle.gradeBand}
                    </span>
                    <BIcon className="w-5 h-5 text-slate-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {bundle.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {bundle.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {bundle.recommendedHours} hrs
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 flex items-center gap-0.5">
                    Explore Blueprint →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE BUNDLE DEEP DIVE */}
        <div className={`bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-sm print:border-none print:p-0`}>
          
          {/* Bundle Banner */}
          <div className={`rounded-3xl p-6 sm:p-8 border ${activeStyle.border} ${activeStyle.bg} space-y-4`}>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${activeStyle.badge} flex items-center gap-1.5`}>
                  <ActiveIcon className="w-4 h-4" />
                  {activeBundle.title}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                  {activeBundle.gradeBand}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {activeBundle.recommendedHours} Guided Hours
                </span>
              </div>

              <div className="text-xs text-slate-500 font-medium">
                Disciplines: {activeBundle.disciplines.join(' • ')}
              </div>
            </div>

            <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 leading-relaxed font-medium">
              {activeBundle.description}
            </p>

            {/* Unifying Skills Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                Unifying Cross-Subject Skills:
              </span>
              {activeBundle.unifyingSkills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Cross-Subject Matrix Section */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Cross-Subject Connections & Curriculum Matrix
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Every connection is grounded in official NCF-SE chapters and NCERT learning outcomes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeBundle.crossSubjectConnections.map((conn, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 border border-slate-200 dark:border-slate-700/80 space-y-4 flex flex-col justify-between print:bg-white print:border-slate-400"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-xl bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 font-extrabold text-xs">
                        {conn.subject}
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        Strand 0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Core Concepts
                      </span>
                      <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                        {conn.coreConcepts.map((cc, i) => (
                          <li key={i} className="leading-snug">{cc}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
                        Competency Mapped
                      </span>
                      <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed bg-white/80 dark:bg-slate-900/80 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
                        {conn.competencyMapped}
                      </p>
                    </div>

                    <div className="space-y-1 pt-1">
                      <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                        Classroom Activity
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {conn.classroomActivity}
                      </p>
                    </div>
                  </div>

                  {/* Citation Footer */}
                  <div className="pt-3 border-t border-slate-200/80 dark:border-slate-700/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="leading-tight">
                      <strong>Source:</strong> {conn.ncfCitation}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Challenge Section */}
          <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/5 to-transparent dark:from-amber-950/30 dark:via-indigo-950/20 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-900/60 space-y-4 print:border-slate-400">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                <Sparkles className="w-4 h-4" />
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                Flagship Interdisciplinary Challenge
              </span>
            </div>

            <h4 className="text-xl font-bold text-slate-900 dark:text-white">
              {activeBundle.flagshipChallenge.title}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Driving Question
                </span>
                <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold leading-snug">
                  "{activeBundle.flagshipChallenge.drivingQuestion}"
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Student Deliverable
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeBundle.flagshipChallenge.studentDeliverable}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Community Engagement
                </span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {activeBundle.flagshipChallenge.communityEngagement}
                </p>
              </div>
            </div>
          </div>

          {/* Official Verification Sources List */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>Curriculum Authority Citations</span>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 dark:text-slate-400">
              {activeBundle.sources.map((src, i) => (
                <li key={i} className="flex items-start gap-1.5">
                  <span className="text-slate-400 mt-0.5">•</span>
                  <span>{src}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 print:hidden">
            <div className="text-xs text-slate-500">
              Phase 1 Browse Mode · Phase 2 Collaborative Co-Creation scheduled for v0.7
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => handleClone(activeBundle)}
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Clone this Bundle into My Plans</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ThemeBundlesPage;
