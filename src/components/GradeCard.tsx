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
      case 'planned':
      default:
        return {
          label: 'Planned',
          classes: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
          icon: AlertCircle,
        };
    }
  };

  const statusInfo = getStatusBadge(grade.status);
  const StatusIcon = statusInfo.icon;
  const gradeDisplayName = grade.name || grade.grade;

  return (
    <div
      className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col h-full ${
        isAnchor
          ? 'border-indigo-300 dark:border-indigo-800/80 ring-1 ring-indigo-500/20'
          : 'border-slate-200 dark:border-slate-800'
      }`}
    >
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Header row: Age Band + Status Badge */}
          <div className="flex justify-between items-start gap-2 mb-3">
            <div>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block mb-0.5">
                Age {grade.ageRange}
              </span>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {gradeDisplayName}
                </h3>
                {isAnchor && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-indigo-600 dark:text-indigo-400" /> Anchor
                  </span>
                )}
              </div>
            </div>
            <span
              className={`px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide border flex items-center gap-1 shrink-0 ${statusInfo.classes}`}
            >
              <StatusIcon className="w-3 h-3" />
              {statusInfo.label}
            </span>
          </div>

          {/* Learning Purpose */}
          <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed">
            {grade.learningPurpose}
          </p>

          {/* Priority Skills */}
          <div className="mb-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block mb-1.5">
              Priority Skills
            </span>
            <div className="flex flex-wrap gap-1.5">
              {grade.prioritySkills.slice(0, 3).map((skill) => (
                <span
                  key={skill}
                  className="bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700/60 font-medium"
                >
                  {skill}
                </span>
              ))}
              {grade.prioritySkills.length > 3 && (
                <span className="bg-slate-50 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                  +{grade.prioritySkills.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Footer info & CTA */}
        <div>
          <div className="flex items-center justify-between py-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <div className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-indigo-500" />
              <span>{grade.developmentalFocus.length} Focus Areas</span>
            </div>
            <span className="text-[11px] font-medium">
              {grade.status === 'in-development'
                ? 'Curriculum In Development'
                : 'Roadmap Target: v0.3'}
            </span>
          </div>

          <Link
            to={`/grade/${grade.id}`}
            className={`w-full text-center font-bold text-xs py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 min-h-[42px] ${
              isAnchor
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs'
                : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/50 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40'
            }`}
          >
            <span>Explore {gradeDisplayName}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
