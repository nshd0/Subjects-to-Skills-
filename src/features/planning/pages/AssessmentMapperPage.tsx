import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GitMerge } from 'lucide-react';

export function AssessmentMapperPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/60 rounded-2xl flex items-center justify-center mx-auto text-purple-600 dark:text-purple-400">
          <GitMerge className="w-8 h-8" />
        </div>
        
        <div className="space-y-2">
          <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-bold uppercase tracking-wider rounded-full">
            v0.4.2 Preview
          </span>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            Assessment Mapper
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            Automatically generate summative and formative assessment tools linked directly to grade-level rubrics. Coming soon.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
          <Link 
            to="/planner" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold transition-colors min-h-[44px] w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Planner</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
