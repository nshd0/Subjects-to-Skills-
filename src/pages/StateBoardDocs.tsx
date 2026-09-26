import React from 'react';
import { 
  Building2, 
  MapPin, 
  Languages, 
  BookOpen, 
  ShieldCheck, 
  CheckCircle2, 
  Globe 
} from 'lucide-react';
import { STATE_BOARD_OPTIONS } from '@/data/stateAlignments';
import { SUPPORTED_LANGUAGES } from '@/data/translations';

export function StateBoardDocs() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-200">
              State Board Expansion Documentation
            </span>
            <span className="text-xs text-slate-500">Version 0.8 Verified</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <Building2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Supported State Boards, Grade Spans & Languages
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Subjects2Skills covers 12 major state SCERT educational boards alongside the national CBSE/NCERT baseline, spanning all 4 stages of NCF 5+3+3+4 (Pre-K through Grade 12) with support across 10 regional Indian languages.
          </p>
        </div>

        {/* State Boards Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <MapPin className="w-5 h-5 text-indigo-600" />
            12 State SCERT Boards & Competency Frameworks
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-2.5">State / Jurisdiction</th>
                  <th className="py-2.5">Authority & Portal</th>
                  <th className="py-2.5">Stages Covered</th>
                  <th className="py-2.5">Primary Languages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {STATE_BOARD_OPTIONS.filter(b => b.code !== 'all').map((b) => (
                  <tr key={b.code} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3 font-bold text-slate-900 dark:text-white">{b.name}</td>
                    <td className="py-3 text-slate-500 font-mono text-[11px]">{b.badge}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                        Pre-K to Gr 12
                      </span>
                    </td>
                    <td className="py-3 font-medium text-emerald-600 dark:text-emerald-400">
                      {b.language || 'English & Hindi'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Supported Languages Matrix */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 text-xs">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-5 h-5 text-emerald-600" />
            10 Regional Indian Languages Matrix
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUPPORTED_LANGUAGES.map((lang) => (
              <div key={lang.code} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">{lang.nativeName}</span>
                  <span className="text-[10px] font-bold uppercase text-slate-400">{lang.code}</span>
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400">
                  {lang.name} · Script: {lang.script}
                </div>
                <div className="text-[10px] text-indigo-600 dark:text-indigo-400 pt-1">
                  Reference: {lang.scertReference}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
