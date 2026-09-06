import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Compass, ArrowLeft, Search, HelpCircle } from 'lucide-react';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-16">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 shadow-xs">
          <HelpCircle className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
            404 Error · Page Not Found
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Learning Pathway Not Found
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
            The path <code className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-xs font-mono text-slate-800 dark:text-slate-200">{location.pathname}</code> does not correspond to an active curriculum map or resource in Subjects2Skills.
          </p>
        </div>

        <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-left space-y-3 shadow-xs">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
            Suggested Destinations:
          </span>
          <div className="grid sm:grid-cols-2 gap-2 text-xs">
            <Link
              to="/grades"
              className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2 border border-slate-100 dark:border-slate-800"
            >
              <Compass className="w-4 h-4" />
              <span>Explore by Grade</span>
            </Link>
            <Link
              to="/roadmap"
              className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2 border border-slate-100 dark:border-slate-800"
            >
              <Search className="w-4 h-4" />
              <span>v0.3 Content Roadmap</span>
            </Link>
            <Link
              to="/activities"
              className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2 border border-slate-100 dark:border-slate-800"
            >
              <Compass className="w-4 h-4" />
              <span>Classroom Activities</span>
            </Link>
            <Link
              to="/resources"
              className="p-2.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2 border border-slate-100 dark:border-slate-800"
            >
              <HelpCircle className="w-4 h-4" />
              <span>Teacher Resource Hub</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            to="/"
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-2 min-h-[44px] shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Framework Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-xs transition-colors flex items-center gap-2 min-h-[44px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  );
}
