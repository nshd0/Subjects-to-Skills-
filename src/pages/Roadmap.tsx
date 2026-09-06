import React from 'react';
import { motion } from 'motion/react';
import { Clock, ShieldAlert, ArrowRight, CheckCircle2, AlertCircle, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gradesData } from '@/data/grades';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function Roadmap() {
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
          classes: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-4">
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <Breadcrumbs items={[{ label: 'v0.3 Content Roadmap' }]} />
      </div>

      <div className="container mx-auto px-4 max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Clock className="w-3.5 h-3.5" />
            Public Curriculum Roadmap
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            v0.3 Content Roadmap
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            v0.3 expands through quality-checked grade-wise learning maps, beginning with anchor grades and improving through educator feedback.
          </p>
        </div>

        {/* Mandatory Trust Statement & Disclaimer */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Content-status labels describe the maturity of Subjects2Skills material. They do not represent approval, endorsement or certification by CBSE, NCERT or any government body.
          </p>
        </div>

        {/* ROADMAP MATRIX SECTION */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Grade-wise Curriculum Progression
              </h2>
              <p className="text-xs text-slate-500">
                Transparent development status, focus areas and next milestones across all 15 grades.
              </p>
            </div>
            <Link
              to="/grades"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto min-h-[44px]"
            >
              <span>Explore All Grades</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* DESKTOP TABLE (hidden on mobile, visible md+) */}
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
                  {gradesData.map((item) => {
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
                            className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline min-h-[36px]"
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

          {/* MOBILE STACKED CARDS (visible on mobile, hidden md+) */}
          <div className="block md:hidden space-y-4">
            {gradesData.map((item) => {
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
                      className="w-full text-center font-bold text-xs py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 flex items-center justify-center gap-1.5 min-h-[44px]"
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

        {/* Informational Callout */}
        <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-indigo-950 dark:text-indigo-200 space-y-2">
          <h3 className="text-sm font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Curriculum Continuity Framework
          </h3>
          <p className="text-xs leading-relaxed">
            Subjects organize knowledge. Skills organize capability. Subjects2Skills preserves subject knowledge and connects it to competencies, observable skills, pedagogy, activities, evidence and assessment. Grade maps will continue to expand through transparent educator and community review.
          </p>
        </div>
      </div>
    </div>
  );
}
