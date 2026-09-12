import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, ShieldAlert, ArrowRight, CheckCircle2, 
  AlertCircle, Layers, Sparkles, Check, Milestone, 
  Calendar, Flag, Filter, ArrowUpRight
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { gradesData } from '@/data/grades';
import { Breadcrumbs } from '@/components/Breadcrumbs';

interface RoadmapPhase {
  version: string;
  title: string;
  status: 'completed' | 'in-progress' | 'planned';
  timeline: string;
  summary: string;
  deliverables: string[];
  isCurrent?: boolean;
}

const PHASES: RoadmapPhase[] = [
  {
    version: 'v0.1',
    title: 'Foundational Stage Archetypes',
    status: 'completed',
    timeline: 'Q3 2024',
    summary: 'Core pedagogical framework definition aligned to NEP 2020 & NCF 5+3+3+4 stage classifications.',
    deliverables: [
      'Four developmental stage archetypes (Foundational, Preparatory, Middle, Secondary)',
      'Initial subject knowledge vs. skill outcome mapping logic',
      'Basic route architecture and responsive layout scaffolding'
    ]
  },
  {
    version: 'v0.2',
    title: '21 Core Competencies & Activity Bank',
    status: 'completed',
    timeline: 'Q4 2024',
    summary: 'Curriculum-linked observable skills and classroom-tested inquiry activities.',
    deliverables: [
      '21 detailed skill progression guides with indicators',
      'Hands-on classroom activity repository with materials & steps',
      'Pedagogical shift comparative matrices across grade bands'
    ]
  },
  {
    version: 'v0.3',
    title: 'Full Grade-Wise Architecture',
    status: 'completed',
    timeline: 'Q1 2025 · Live',
    summary: 'Universal coverage across all 13 school grades (Pre-school → Grade 12) with transparent content maturity.',
    deliverables: [
      '13 comprehensive Grade Profiles with NCF developmental milestones',
      'Anchor grades (Grade 3, Grade 6, Grade 9, Grade 11) with deep exemplars',
      'Assessment Rubrics Hub (Emerging → Developing → Proficient → Transfer)',
      'Teacher Toolkit with downloadable templates and facilitation guides',
      'Mobile-optimized responsive navigation and breadcrumbs'
    ],
    isCurrent: true
  },
  {
    version: 'v0.4',
    title: 'Planning Tools & Skill Pathways',
    status: 'in-progress',
    timeline: 'Q2 2025 · In Active Prep',
    summary: 'Classroom lesson planners, skill-assessment matrix engines, and vertical learning pathways.',
    deliverables: [
      'Interactive Unit & Lesson Planner with time-block scaffolding',
      'Skill–Assessment Mapper with real-time competency alignment',
      'Deep vertical skill pathways from Foundational to Senior Secondary',
      'Custom rubric builder and classroom print-ready exports'
    ],
    isCurrent: false
  },
  {
    version: 'v0.5',
    title: 'Interdisciplinary Studios & Co-Planning',
    status: 'planned',
    timeline: 'Q3–Q4 2025 · Envisioned',
    summary: 'Collaborative curriculum co-design, community review workflows, and regional language adaptation.',
    deliverables: [
      'Interdisciplinary theme bundles (Climate, Heritage, Data & Ethics)',
      'Peer educator review and feedback validation workflows',
      'NCERT / State SCERT localized textbook alignment modules'
    ]
  }
];

export function Roadmap() {
  const [filter, setFilter] = useState<'all' | 'in-development' | 'planned'>('all');
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subjectParam = searchParams.get('subject');

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return {
          label: 'Published',
          classes: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          icon: CheckCircle2,
        };
      case 'reviewed':
        return {
          label: 'Reviewed',
          classes: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800',
          icon: CheckCircle2,
        };
      case 'teacher-pilot':
        return {
          label: 'Teacher Pilot',
          classes: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          icon: Sparkles,
        };
      case 'in-development':
        return {
          label: 'In Development',
          classes: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
          icon: Clock,
        };
      case 'needs-update':
        return {
          label: 'Needs Update',
          classes: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800',
          icon: AlertCircle,
        };
      case 'planned':
      default:
        return {
          label: 'Planned',
          classes: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
          icon: AlertCircle,
        };
    }
  };

  const filteredGrades = gradesData.filter((g) => {
    if (filter === 'all') return true;
    if (filter === 'in-development') return g.status === 'in-development';
    if (filter === 'planned') return g.status === 'planned';
    return true;
  });

  // Calculate coverage stats
  const totalGrades = gradesData.length;
  const inDevCount = gradesData.filter(g => g.status === 'in-development').length;
  const plannedCount = gradesData.filter(g => g.status === 'planned').length;
  const publishedCount = gradesData.filter(g => g.status === 'published' || g.status === 'reviewed').length;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-4">
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <Breadcrumbs items={[{ label: 'Content Roadmap' }]} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900/50">
            <Milestone className="w-3.5 h-3.5" />
            <span>Public Curriculum Release Roadmap</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curriculum Evolution & Roadmap
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Transparent milestones tracing the progression of Subjects2Skills from foundational research to lesson planners, skill-assessment mappers, and classroom toolkits.
          </p>
        </div>

        {/* Mandatory Trust Statement & Disclaimer */}
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3 shadow-2xs">
          <ShieldAlert className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Content-status labels describe the editorial and pedagogical maturity of Subjects2Skills open-source material. They do not represent formal endorsement, approval, or certification by CBSE, NCERT, or any government body.
          </p>
        </div>

        {/* TIMELINE PHASES SECTION */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Version Timeline & Deliverables</span>
              </h2>
              <p className="text-xs text-slate-500">
                Phase-by-phase rollout of pedagogical features and classroom planning components.
              </p>
            </div>
            <div className="text-xs font-bold text-slate-500">
              Current Release: <span className="text-indigo-600 dark:text-indigo-400">v0.3 Live (v0.4 Scaffolding)</span>
            </div>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid lg:grid-cols-3 gap-6">
            {PHASES.map((phase) => {
              const isCompleted = phase.status === 'completed';
              const isInProgress = phase.status === 'in-progress';

              return (
                <div
                  key={phase.version}
                  className={`relative rounded-2xl p-6 bg-white dark:bg-slate-900 border transition-all flex flex-col justify-between space-y-4 shadow-xs ${
                    phase.isCurrent
                      ? 'border-indigo-400 dark:border-indigo-600 ring-2 ring-indigo-500/20 shadow-md'
                      : isInProgress
                      ? 'border-indigo-300 dark:border-indigo-800'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {/* Top Status Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                        {phase.version}
                      </span>
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                          <Check className="w-3 h-3" />
                          Completed
                        </span>
                      ) : isInProgress ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded-full border border-indigo-200 dark:border-indigo-800 animate-pulse">
                          <Sparkles className="w-3 h-3" />
                          In Development
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                          Planned
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      {phase.title}
                    </h3>

                    <div className="flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500 font-medium">
                      <Calendar className="w-3 h-3" />
                      <span>{phase.timeline}</span>
                    </div>

                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                      {phase.summary}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[10px] ${
                            isCompleted 
                              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 font-bold' 
                              : isInProgress
                              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300 font-bold'
                              : 'bg-slate-100 text-slate-500 dark:bg-slate-800'
                          }`}>
                            {isCompleted ? '✓' : '•'}
                          </span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* GRADE COVERAGE OVERVIEW & PROGRESS */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                <span>Grade Coverage & Content Maturity</span>
              </h2>
              <p className="text-xs text-slate-500">
                13 total school grades mapped from Pre-school (Anganwadi / Nursery) to Senior Secondary (Grade 12).
              </p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 p-1.5 rounded-xl self-start sm:self-auto">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
                  filter === 'all'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                All ({totalGrades})
              </button>
              <button
                onClick={() => setFilter('in-development')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
                  filter === 'in-development'
                    ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                In Dev / Anchors ({inDevCount})
              </button>
              <button
                onClick={() => setFilter('planned')}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
                  filter === 'planned'
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Planned ({plannedCount})
              </button>
            </div>
          </div>

          {/* Progress Bar Breakdown */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
              <span className="font-medium">Maturity Spectrum:</span>
              <span>{inDevCount} Anchor Profiles Active · {plannedCount} Scoped Frameworks</span>
            </div>
            <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
              <div 
                style={{ width: `${(inDevCount / totalGrades) * 100}%` }} 
                className="bg-indigo-600 dark:bg-indigo-500 h-full" 
                title={`In Development / Anchor Grades: ${inDevCount}`}
              ></div>
              <div 
                style={{ width: `${(plannedCount / totalGrades) * 100}%` }} 
                className="bg-slate-300 dark:bg-slate-700 h-full" 
                title={`Planned Frameworks: ${plannedCount}`}
              ></div>
            </div>
            <div className="flex items-center gap-4 text-[11px] text-slate-500 pt-1">
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600"></span>
                <span>Anchor Exemplars ({inDevCount})</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700"></span>
                <span>Planned Frameworks ({plannedCount})</span>
              </span>
            </div>
          </div>
        </div>

        {/* ROADMAP PROGRESSION TABLE / CARDS */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Grade Progression Matrix
            </h2>
            <Link
              to="/grades"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden rounded-lg px-2 py-1"
            >
              <span>Explore All Grade Profiles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* DESKTOP TABLE */}
          <div className="hidden md:block bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                    <th className="p-3.5 font-bold">Stage</th>
                    <th className="p-3.5 font-bold">Grade</th>
                    <th className="p-3.5 font-bold">Content Status</th>
                    <th className="p-3.5 font-bold min-w-[220px]">Current Focus</th>
                    <th className="p-3.5 font-bold min-w-[160px]">Next Milestone</th>
                    <th className="p-3.5 font-bold">Review Status</th>
                    <th className="p-3.5 font-bold text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {filteredGrades.map((item) => {
                    const statusInfo = getStatusBadge(item.status);
                    const StatusIcon = statusInfo.icon;
                    const isDev = item.status === 'in-development';

                    return (
                      <tr 
                        key={item.id} 
                        className={`hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors ${
                          isDev ? 'bg-indigo-50/20 dark:bg-indigo-950/10' : ''
                        }`}
                      >
                        <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">
                          {item.stage}
                        </td>
                        <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                          <Link 
                            to={`/grade/${item.id}`} 
                            className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1.5"
                          >
                            <span>{item.name}</span>
                            {isDev && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300">
                                Anchor
                              </span>
                            )}
                          </Link>
                        </td>
                        <td className="p-3.5">
                          <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border inline-flex items-center gap-1 ${statusInfo.classes}`}>
                            <StatusIcon className="w-3 h-3" />
                            {statusInfo.label}
                          </span>
                        </td>
                        <td className="p-3.5 text-slate-700 dark:text-slate-300 leading-relaxed">
                          {item.currentFocus}
                        </td>
                        <td className="p-3.5 text-slate-600 dark:text-slate-400">
                          {item.nextMilestone}
                        </td>
                        <td className="p-3.5 font-medium text-slate-700 dark:text-slate-300">
                          {item.reviewStatus}
                        </td>
                        <td className="p-3.5 text-right">
                          <Link
                            to={`/grade/${item.id}`}
                            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden rounded-lg px-2 py-1"
                          >
                            <span>View</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* MOBILE STACKED CARDS */}
          <div className="block md:hidden space-y-4">
            {filteredGrades.map((item) => {
              const statusInfo = getStatusBadge(item.status);
              const StatusIcon = statusInfo.icon;
              const isDev = item.status === 'in-development';

              return (
                <div
                  key={item.id}
                  className={`bg-white dark:bg-slate-900 border rounded-2xl p-5 shadow-xs space-y-3 ${
                    isDev
                      ? 'border-indigo-300 dark:border-indigo-800/80 ring-1 ring-indigo-500/20'
                      : 'border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                        {item.stage} Stage
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        {item.name}
                        {isDev && (
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 font-bold">
                            Anchor
                          </span>
                        )}
                      </h3>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-[11px] font-bold border inline-flex items-center gap-1 ${statusInfo.classes}`}>
                      <StatusIcon className="w-3 h-3" />
                      {statusInfo.label}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
                        Current Focus
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 font-medium">
                        {item.currentFocus}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100 dark:border-slate-800">
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
                          Next Milestone
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {item.nextMilestone}
                        </span>
                      </div>
                      <div>
                        <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold block">
                          Review Status
                        </span>
                        <span className="text-slate-600 dark:text-slate-400">
                          {item.reviewStatus}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                    <Link
                      to={`/grade/${item.id}`}
                      className="w-full text-center font-bold text-xs py-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <span>Explore {item.name}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
        {/* Fallback for unmapped subject/unit from Grade8Hub */}
        {subjectParam && (
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-2xl p-4 mb-6 flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-500 shrink-0" />
            <p className="text-sm font-medium text-amber-800 dark:text-amber-300">
              Skill mapping for this unit is in progress &mdash; you can still create a plan manually.
            </p>
          </div>
        )}
        
        {/* Informational Callout */}
        <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-indigo-950 dark:text-indigo-200 space-y-2">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Curriculum Continuity Framework
          </h3>
          <p className="text-xs leading-relaxed">
            Subjects organize knowledge. Skills organize capability. Subjects2Skills preserves subject knowledge and connects it to competencies, observable skills, pedagogy, activities, evidence, and assessment. Grade maps will continue to expand through transparent educator and community review.
          </p>
        </div>
      </div>
    </div>
  );
}
