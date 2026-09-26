import React from 'react';
import { 
  Building2, 
  ShieldCheck, 
  Lock, 
  CheckCircle2, 
  EyeOff, 
  FileText, 
  Users 
} from 'lucide-react';

export function SchoolDashboardDocs() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200">
              Institutional Privacy & Data Governance
            </span>
            <span className="text-xs text-slate-500">Version 0.8 Standard</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            School & District Dashboard: Privacy Safeguards & Metrics
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Detailed overview of metrics collected by Subjects2Skills, explaining our commitment to educator privacy, anonymization-by-default, and adherence to the Digital Personal Data Protection (DPDP) Act 2023.
          </p>
        </div>

        {/* What Metrics Are Tracked */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            Tracked Aggregate Metrics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-sm block">1. Active Teacher Adoption Rate</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Calculates the proportion of registered teachers who actively plan lessons, adapt worksheets, or participate in peer reviews during a 30-day window.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-sm block">2. Subject & Grade Distribution</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Identifies which academic departments and grade cohorts are actively utilizing competency-based planning, helping academic coordinators allocate support.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-sm block">3. Resource Adaptation Index</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Measures how often verified theme bundles, slide decks, and worksheets are cloned and tailored for local classroom demographics.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
              <span className="font-bold text-slate-900 dark:text-white text-sm block">4. NCF-SE Competency Coverage</span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Tracks progression toward annual learning standards defined by NCERT and State SCERTs across Foundational, Preparatory, Middle, and Secondary stages.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Safeguards */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Core Privacy Safeguards
          </h2>

          <div className="space-y-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <EyeOff className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">Anonymized by Default:</strong>
                Individual teacher performance metrics are never exposed in district reports or administrative scorecards. Teacher identity is preserved strictly in personal workspaces.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <Lock className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">School-Level Opt-In:</strong>
                School leadership can toggle participation in district-level benchmarking on or off at any time. When opted out, school data is entirely excluded from cluster computations.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
              <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 dark:text-white block mb-0.5">DPDP Act 2023 Compliance:</strong>
                No student personally identifiable information (PII) is ever collected, processed, or stored. All classroom tools operate purely at the curriculum design and instructional planning layer.
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
