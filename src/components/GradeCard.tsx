import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Sparkles, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { GradeProfile } from '@/types';

interface GradeCardProps {
  grade: GradeProfile & {
    name?: string;
    flagshipProject?: { title: string; description: string };
  };
  isAnchor?: boolean;
}

export function GradeCard({ grade, isAnchor }: GradeCardProps) {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return {
          label: 'Published',
          classes: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          icon: CheckCircle2,
        };
      case 'reviewed':
        return {
          label: 'Reviewed',
          classes: 'bg-teal-50 text-teal-700 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800',
          icon: CheckCircle2,
        };
      case 'teacher-pilot':
        return {
          label: 'Teacher Pilot',
          classes: 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          icon: Sparkles,
        };
      case 'in-development':
        return {
          label: 'In Development',
          classes: 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
          icon: Clock,
        };
      case 'needs-update':
        return {
          label: 'Needs Update',
          classes: 'bg-rose-50 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800',
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

  const getStageBadgeColor = (stage: string) => {
    const s = stage?.toLowerCase() || '';
    if (s.includes('foundational')) return 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-900/60';
    if (s.includes('preparatory')) return 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-900/60';
    if (s.includes('middle')) return 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/50 dark:text-indigo-300 dark:border-indigo-900/60';
    return 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-900/60';
  };

  const statusInfo = getStatusBadge(grade.status);
  const StatusIcon = statusInfo.icon;
  const gradeDisplayName = grade.name || grade.grade;

  return (
    <div
      id={`grade-card-${grade.id}`}
      className={`group bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full focus-within:ring-2 focus-within:ring-indigo-500/50 ${
        isAnchor
          ? 'border-indigo-300 dark:border-indigo-800 ring-1 ring-indigo-500/20'
          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
      }`}
    >
      <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between space-y-4">
        <div>
          {/* Top Row: Grade label + Age Range */}
          <div className="flex items-start justify-between gap-2 mb-2.5">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {gradeDisplayName}
                </h3>
                {isAnchor && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Anchor
                  </span>
                )}
              </div>
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400 block mt-0.5">
                Ages {grade.ageRange}
              </span>
            </div>
            <span
              title={`Status: ${statusInfo.label} — Subjects2Skills content maturity`}
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border flex items-center gap-1 shrink-0 ${statusInfo.classes}`}
            >
              <StatusIcon className="w-3 h-3" />
              {statusInfo.label}
            </span>
          </div>

          {/* Middle: Stage badge & Pedagogical Purpose */}
          <div className="space-y-2 mb-3">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide border ${getStageBadgeColor(grade.stage)}`}>
              {grade.stage} Stage
            </span>
            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm line-clamp-2 leading-relaxed">
              {grade.learningPurpose}
            </p>
          </div>

          {/* Priority Skills as Tags */}
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
              Priority Skills
            </span>
            <div className="flex flex-wrap gap-1.5">
              {grade.prioritySkills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-lg border border-slate-200 dark:border-slate-700/60 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Focus areas count + Primary Action Button */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>{grade.developmentalFocus.length} Focus Areas</span>
            </div>
            <span className="text-[11px] font-medium text-slate-400">
              NCF 5+3+3+4
            </span>
          </div>

          <Link
            to={`/grade/${grade.id}`}
            className={`w-full text-center font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
              isAnchor
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40'
            }`}
          >
            <span>Explore {gradeDisplayName} Profile</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
