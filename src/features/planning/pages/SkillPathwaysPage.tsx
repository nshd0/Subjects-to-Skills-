import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Network, 
  ArrowRight, 
  ChevronRight, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Target, 
  CheckCircle2, 
  Compass, 
  Printer, 
  Wand2, 
  PlusCircle, 
  FileText,
  HelpCircle,
  TrendingUp,
  Bookmark
} from 'lucide-react';
import { verticalSkillPathways } from '@/data/verticalSkillPathways';
import { VerticalSkillPathway, PathwayStageIndicator } from '@/types';

const STAGE_COLORS: Record<string, { bg: string; text: string; border: string; accent: string; badge: string }> = {
  Foundational: {
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    text: 'text-amber-900 dark:text-amber-200',
    border: 'border-amber-200 dark:border-amber-900/60',
    accent: 'bg-amber-500',
    badge: 'bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/50 dark:text-amber-300 dark:border-amber-800'
  },
  Preparatory: {
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    text: 'text-blue-900 dark:text-blue-200',
    border: 'border-blue-200 dark:border-blue-900/60',
    accent: 'bg-blue-500',
    badge: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-800'
  },
  Middle: {
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
    text: 'text-indigo-900 dark:text-indigo-200',
    border: 'border-indigo-200 dark:border-indigo-900/60',
    accent: 'bg-indigo-500',
    badge: 'bg-indigo-100 text-indigo-800 border-indigo-300 dark:bg-indigo-900/50 dark:text-indigo-300 dark:border-indigo-800'
  },
  Secondary: {
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    text: 'text-emerald-900 dark:text-emerald-200',
    border: 'border-emerald-200 dark:border-emerald-900/60',
    accent: 'bg-emerald-500',
    badge: 'bg-emerald-100 text-emerald-800 border-emerald-300 dark:bg-emerald-900/50 dark:text-emerald-300 dark:border-emerald-800'
  }
};

export function SkillPathwaysPage() {
  const navigate = useNavigate();
  const [selectedPathwayId, setSelectedPathwayId] = useState<string>(verticalSkillPathways[0].id);
  const [activeStageTab, setActiveStageTab] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'stepper' | 'table'>('stepper');

  const currentPathway = verticalSkillPathways.find(p => p.id === selectedPathwayId) || verticalSkillPathways[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm print:border-none print:shadow-none print:p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  NCF 5+3+3+4 Architecture · Longitudinal Progression
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Verified Curriculum Pathways
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Network className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                Vertical Skill Pathways
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Track how a single competency matures across the four developmental stages of the National Curriculum Framework:
                <strong> Foundational (Ages 3–8)</strong>, <strong>Preparatory (Ages 8–11)</strong>, <strong>Middle (Ages 11–14)</strong>, and <strong>Secondary (Ages 14–18)</strong>. Every stage cites official NCERT/CBSE indicators with transparent "what changes" progressions.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 print:hidden">
              <button
                onClick={handlePrint}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-2 shadow-sm transition-colors min-h-[40px]"
                title="Print-friendly black & white output"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Pathway</span>
              </button>
              <Link
                to="/rubric/new"
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs flex items-center gap-2 shadow-sm transition-colors min-h-[40px]"
              >
                <Wand2 className="w-4 h-4" />
                <span>Build Custom Rubric</span>
              </Link>
            </div>
          </div>

          {/* Pathway Selector Pills */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2.5 print:hidden">
            {verticalSkillPathways.map(pathway => {
              const isSelected = pathway.id === selectedPathwayId;
              return (
                <button
                  key={pathway.id}
                  onClick={() => setSelectedPathwayId(pathway.id)}
                  className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-slate-900 dark:border-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-400'
                  }`}
                >
                  <TrendingUp className={`w-3.5 h-3.5 ${isSelected ? 'text-emerald-400 dark:text-emerald-600' : 'text-slate-400'}`} />
                  <span>{pathway.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Pathway Overview Card */}
        <div className="bg-gradient-to-r from-emerald-500/10 via-indigo-500/5 to-transparent dark:from-emerald-950/40 dark:via-indigo-950/20 rounded-3xl p-6 sm:p-8 border border-emerald-200/80 dark:border-emerald-900/60 shadow-sm print:border-slate-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-900/70 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  {currentPathway.domain}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                {currentPathway.name}
              </h2>
              <p className="text-slate-700 dark:text-slate-300 text-sm max-w-4xl leading-relaxed">
                {currentPathway.description}
              </p>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-1.5 p-1 bg-white/80 dark:bg-slate-900/80 rounded-2xl border border-slate-200 dark:border-slate-700 shrink-0 print:hidden">
              <button
                onClick={() => setViewMode('stepper')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  viewMode === 'stepper' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Stage Timeline
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                  viewMode === 'table' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                Comparative Table
              </button>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-emerald-200/60 dark:border-emerald-900/60 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300 font-medium">
            <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
            <span><strong>Developmental Progression:</strong> {currentPathway.progressionOverview}</span>
          </div>
        </div>

        {/* View 1: 4-Stage Stepper & Cards */}
        {viewMode === 'stepper' && (
          <div className="space-y-6">
            
            {/* Stage Filter Buttons (Print Hidden) */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 print:hidden">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setActiveStageTab('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                    activeStageTab === 'all'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-300'
                  }`}
                >
                  All 4 Stages (Full Span)
                </button>
                {['Foundational', 'Preparatory', 'Middle', 'Secondary'].map(st => (
                  <button
                    key={st}
                    onClick={() => setActiveStageTab(st)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-colors ${
                      activeStageTab === st
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-indigo-300'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
                4 developmental milestones aligned to NEP 2020
              </span>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:grid-cols-1 print:gap-8">
              {currentPathway.stages
                .filter(st => activeStageTab === 'all' || activeStageTab === st.stage)
                .map((stage, idx) => {
                  const style = STAGE_COLORS[stage.stage] || STAGE_COLORS.Middle;
                  return (
                    <div 
                      key={stage.stage}
                      className={`rounded-3xl border ${style.border} ${style.bg} p-6 sm:p-7 space-y-4 shadow-sm relative overflow-hidden print:bg-white print:border-slate-300 print:page-break-inside-avoid`}
                    >
                      {/* Stage Badge & Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <span className={`px-2.5 py-0.5 rounded-full text-xs font-extrabold border ${style.badge}`}>
                              {stage.stage} Stage · {stage.grades}
                            </span>
                            <span className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                              {stage.ageRange}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                            Stage Milestone: {stage.ncfCompetencyCode}
                          </h3>
                        </div>

                        {/* Step index badge */}
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-slate-700 dark:text-slate-200 shrink-0 shadow-xs print:border-slate-800">
                          0{idx + 1}
                        </div>
                      </div>

                      {/* What Changes: Cognitive Shift Banner */}
                      <div className="p-3.5 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1 shadow-xs print:border-slate-300">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                          <Sparkles className="w-3.5 h-3.5 text-indigo-500 shrink-0" />
                          <span>What Changes (Developmental Leap)</span>
                        </div>
                        <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-semibold leading-relaxed">
                          {stage.whatChanges}
                        </p>
                      </div>

                      {/* What Students Learn */}
                      <div className="space-y-1.5">
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider block">
                          Core Competency & Knowledge
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-white/60 dark:bg-slate-900/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-800/60">
                          {stage.whatStudentsLearn}
                        </p>
                      </div>

                      {/* Observable Artifact & Benchmark */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <Layers className="w-3 h-3 text-emerald-500" />
                            Observable Artifact
                          </span>
                          <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                            {stage.observableArtifact}
                          </p>
                        </div>
                        <div className="p-3 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-1">
                          <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-blue-500" />
                            Sample Benchmark
                          </span>
                          <p className="text-xs text-slate-800 dark:text-slate-200 leading-snug">
                            {stage.sampleBenchmark}
                          </p>
                        </div>
                      </div>

                      {/* Source Citation Footer */}
                      <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 flex items-start gap-1.5 text-[11px] text-slate-500 dark:text-slate-400">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">
                          <strong>Official Source:</strong> {stage.sourceCitation}
                        </span>
                      </div>

                      {/* Quick Action */}
                      <div className="pt-2 flex items-center justify-between gap-2 print:hidden">
                        <Link
                          to={`/rubric/new?skill=${encodeURIComponent(currentPathway.name)}&grade=${stage.stage === 'Preparatory' ? 'grade-3' : stage.stage === 'Middle' ? 'grade-6' : stage.stage === 'Secondary' ? 'grade-9' : 'grade-3'}`}
                          className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center gap-1"
                        >
                          <span>Generate rubric for {stage.stage}</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          to={`/plan/lesson/new`}
                          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                        >
                          Plan lesson →
                        </Link>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* View 2: Side-by-Side Comparative Table */}
        {viewMode === 'table' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Comparative Progression Matrix: {currentPathway.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Side-by-side progression across the 4 NCF developmental stages
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 uppercase tracking-wider font-bold">
                    <th className="p-4 w-44">Stage & Grades</th>
                    <th className="p-4 w-40">NCF Code</th>
                    <th className="p-4 min-w-[200px]">What Changes (Cognitive Leap)</th>
                    <th className="p-4 min-w-[240px]">Competency & Practices</th>
                    <th className="p-4 min-w-[200px]">Observable Artifact</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {currentPathway.stages.map((stage) => {
                    const style = STAGE_COLORS[stage.stage] || STAGE_COLORS.Middle;
                    return (
                      <tr key={stage.stage} className="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                        <td className="p-4 align-top">
                          <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-bold border mb-1 ${style.badge}`}>
                            {stage.stage}
                          </span>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                            {stage.grades} ({stage.ageRange})
                          </div>
                        </td>
                        <td className="p-4 align-top font-mono font-bold text-slate-900 dark:text-white">
                          {stage.ncfCompetencyCode}
                          <div className="text-[10px] text-slate-400 font-sans mt-1">
                            {stage.sourceCitation.split(',')[0]}
                          </div>
                        </td>
                        <td className="p-4 align-top font-medium text-indigo-900 dark:text-indigo-300 bg-indigo-50/40 dark:bg-indigo-950/20">
                          {stage.whatChanges}
                        </td>
                        <td className="p-4 align-top leading-relaxed">
                          {stage.whatStudentsLearn}
                        </td>
                        <td className="p-4 align-top text-slate-600 dark:text-slate-400">
                          {stage.observableArtifact}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Bottom Banner with Actions */}
        <div className="bg-slate-100 dark:bg-slate-900/60 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ready to assess or teach this pathway?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Create an aligned rubric on our 4-level maturity scale or embed this progression directly into your lesson plan.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/rubric/new"
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
            >
              <Wand2 className="w-4 h-4" />
              <span>Launch Custom Rubric Builder</span>
            </Link>
            <Link
              to="/theme-bundles"
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-xs shadow-sm transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Browse Theme Bundles</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SkillPathwaysPage;
