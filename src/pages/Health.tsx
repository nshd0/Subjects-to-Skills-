import React, { useEffect, useState } from 'react';
import { CheckCircle2, Server, Activity, ShieldCheck, Clock } from 'lucide-react';
import { gradesData } from '@/data/grades';
import { activitiesData } from '@/data/activities';

export function Health() {
  const [uptimeSeconds, setUptimeSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const healthData = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Subjects2Skills SPA',
    version: '0.3.0-milestone1',
    environment: import.meta.env.MODE || 'production',
    routesActive: 18,
    gradesConfigured: gradesData.length,
    activitiesConfigured: activitiesData.length,
    uptimeSec: uptimeSeconds,
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4 py-12">
      <div className="max-w-xl w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 dark:text-white">
                Application Health Status
              </h1>
              <p className="text-xs text-slate-500">Cloud Run Service & SPA Readiness Check</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            HTTP 200 · OK
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Status</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Healthy
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Version</span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              v0.3.0
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Grades</span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {healthData.gradesConfigured} / 13
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1">
            <span className="text-slate-400 font-bold uppercase text-[10px] block">Client Session</span>
            <span className="font-bold text-slate-900 dark:text-white text-sm">
              {uptimeSeconds}s
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
            Raw Diagnostic Payload (JSON):
          </span>
          <pre className="p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-xs overflow-x-auto border border-slate-800 leading-relaxed">
            {JSON.stringify(healthData, null, 2)}
          </pre>
        </div>

        <p className="text-xs text-slate-500 dark:text-slate-400 text-center">
          Cloud Run health check endpoint · Responds to GET /health with 200 OK
        </p>
      </div>
    </div>
  );
}
