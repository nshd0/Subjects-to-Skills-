import React from 'react';
import { ContentStatus } from '@/types';

interface StatusBadgeProps {
  status: ContentStatus | string;
  size?: 'sm' | 'md' | 'lg';
  showSubtext?: boolean;
  className?: string;
}

export function StatusBadge({ 
  status, 
  size = 'md', 
  showSubtext = false,
  className = '' 
}: StatusBadgeProps) {
  const getStatusConfig = (s: string) => {
    switch (s) {
      case 'published':
        return {
          label: 'Published & Verified',
          subtext: 'Reviewed and validated against curriculum frameworks',
          styles: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800'
        };
      case 'reviewed':
        return {
          label: 'Curriculum Reviewed',
          subtext: 'Pedagogy and subject alignment verified by team',
          styles: 'bg-teal-100 text-teal-800 dark:bg-teal-950/50 dark:text-teal-300 border-teal-300 dark:border-teal-800'
        };
      case 'teacher-pilot':
        return {
          label: 'Teacher Pilot Ready',
          subtext: 'Active pilot activities ready for classroom feedback',
          styles: 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300 border-amber-300 dark:border-amber-800'
        };
      case 'in-development':
        return {
          label: 'In Development · Anchor Grade',
          subtext: 'Starter maps and lesson plans active for review',
          styles: 'bg-indigo-100 text-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800'
        };
      case 'needs-update':
        return {
          label: 'Requires Revision',
          subtext: 'Pending alignment update with current guidelines',
          styles: 'bg-rose-100 text-rose-900 dark:bg-rose-950/50 dark:text-rose-300 border-rose-300 dark:border-rose-800'
        };
      case 'planned':
      default:
        return {
          label: 'Planned for v0.3',
          subtext: 'Scheduled for starter drafting in v0.3 release cycle',
          styles: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300 dark:border-slate-700'
        };
    }
  };

  const config = getStatusConfig(status);

  const sizeClasses = {
    sm: 'text-[11px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3.5 py-1.5'
  };

  return (
    <div className={`inline-flex flex-col ${className}`}>
      <span 
        className={`inline-flex items-center font-bold uppercase tracking-wider rounded-full border ${sizeClasses[size]} ${config.styles} shadow-2xs`}
        title={config.subtext}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5 opacity-75 shrink-0" />
        {config.label}
      </span>
      {showSubtext && (
        <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
          {config.subtext}
        </span>
      )}
    </div>
  );
}
