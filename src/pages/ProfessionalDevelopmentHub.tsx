import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, 
  Award, 
  Clock, 
  CheckCircle2, 
  ExternalLink, 
  Plus, 
  Download, 
  BookOpen, 
  PlayCircle, 
  Layers, 
  ShieldCheck, 
  Printer, 
  Sparkles,
  FileCheck
} from 'lucide-react';
import { DIKSHA_NISHTHA_COURSES, INITIAL_TEACHER_PD_LOG } from '@/data/dikshaNishthaData';
import { TeacherPDRecord, DikshaNishthaCourse } from '@/types';

export function ProfessionalDevelopmentHub() {
  const [pdLogs, setPdLogs] = useState<TeacherPDRecord[]>(() => {
    try {
      const saved = localStorage.getItem('s2s_teacher_pd_logs');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    return INITIAL_TEACHER_PD_LOG;
  });

  const [activePhase, setActivePhase] = useState<string>('all');
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [selectedTutorial, setSelectedTutorial] = useState<DikshaNishthaCourse | null>(null);

  // New PD Entry form state
  const [newTitle, setNewTitle] = useState('');
  const [newHours, setNewHours] = useState(3);
  const [newType, setNewType] = useState<TeacherPDRecord['activityType']>('bundle-creation');

  const totalHoursLogged = pdLogs.reduce((acc, log) => acc + log.hours, 0);
  const NEP_TARGET_HOURS = 50; // NEP 2020: 50 hours of Continuous Professional Development per year
  const percentComplete = Math.min(100, Math.round((totalHoursLogged / NEP_TARGET_HOURS) * 100));

  const handleAddPdLog = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newRecord: TeacherPDRecord = {
      id: `pd-${Date.now()}`,
      title: newTitle,
      hours: Number(newHours),
      activityType: newType,
      date: new Date().toISOString().slice(0, 10),
      verified: true,
      certificateRef: `S2S-PD-2026-${Math.floor(1000 + Math.random() * 9000)}`
    };

    const updated = [newRecord, ...pdLogs];
    setPdLogs(updated);
    try {
      localStorage.setItem('s2s_teacher_pd_logs', JSON.stringify(updated));
    } catch (e) {
      // ignore
    }

    setIsLogModalOpen(false);
    setNewTitle('');
  };

  const filteredCourses = activePhase === 'all'
    ? DIKSHA_NISHTHA_COURSES
    : DIKSHA_NISHTHA_COURSES.filter(c => c.nishthaPhase === activePhase);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Top Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5" />
                  NEP 2020 Mandated 50 Hours CPD
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  DIKSHA & NISHTHA Aligned
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Professional Development & NISHTHA Integration
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Connect your curriculum development and peer review contributions to national teacher training benchmarks. Earn verifiable Continuous Professional Development (CPD) credit hours across NISHTHA 1.0 (Elementary), 2.0 (Secondary), 3.0 (FLN), and 4.0 (ECCE).
              </p>
            </div>

            {/* Annual CPD Progress Tracker */}
            <div className="bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-2 min-w-[280px]">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  Annual CPD Hours Tracker
                </span>
                <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400">
                  {totalHoursLogged} / {NEP_TARGET_HOURS} Hours ({percentComplete}%)
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${percentComplete}%` }}
                />
              </div>
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  onClick={() => setIsLogModalOpen(true)}
                  className="px-3 py-1 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold flex items-center gap-1 shadow-xs"
                >
                  <Plus className="w-3.5 h-3.5" /> Log Hours
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Printer className="w-3.5 h-3.5" /> Certificate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Phase Filter Buttons */}
        <div className="flex flex-wrap gap-2">
          {['all', 'NISHTHA 1.0 (Elementary)', 'NISHTHA 2.0 (Secondary)', 'NISHTHA 3.0 (FLN)', 'NISHTHA 4.0 (ECCE)'].map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setActivePhase(p)}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all ${
                activePhase === p
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              {p === 'all' ? 'All NISHTHA Courses' : p}
            </button>
          ))}
        </div>

        {/* Courses & Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((c) => (
            <div
              key={c.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between space-y-4 hover:border-indigo-300 dark:hover:border-indigo-800 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                    {c.nishthaPhase} · Module {c.moduleNumber}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {c.pdHoursAccredited} CPD Hours
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">
                  {c.courseTitle}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {c.description}
                </p>
                <div className="text-[11px] text-slate-400">
                  Official Code: <strong>{c.courseCode}</strong>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(c)}
                  className="grow py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 dark:bg-indigo-950 dark:hover:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <PlayCircle className="w-3.5 h-3.5" /> Interactive Walkthrough
                </button>
                <a
                  href={c.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold flex items-center justify-center"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CPD Hours Log Table */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-emerald-600" />
                Verified CPD Activity Logbook ({pdLogs.length} entries)
              </h3>
              <p className="text-xs text-slate-500">Official log of hours ready for school appraisal or state teacher portal audit.</p>
            </div>
            <button
              type="button"
              onClick={() => setIsLogModalOpen(true)}
              className="px-3.5 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" /> Log Activity
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400 font-bold uppercase text-[10px]">
                  <th className="py-2.5">Date</th>
                  <th className="py-2.5">Activity Description</th>
                  <th className="py-2.5">Category</th>
                  <th className="py-2.5">CPD Hours</th>
                  <th className="py-2.5">Verification Ref</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                {pdLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/40">
                    <td className="py-3 font-mono text-[11px] text-slate-400">{log.date}</td>
                    <td className="py-3 font-semibold text-slate-900 dark:text-white">{log.title}</td>
                    <td className="py-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {log.activityType.replace('-', ' ')}
                      </span>
                    </td>
                    <td className="py-3 font-bold text-indigo-600 dark:text-indigo-400">{log.hours} hrs</td>
                    <td className="py-3 font-mono text-[11px] text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> {log.certificateRef}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* LOG HOURS MODAL */}
        {isLogModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                Log Continuous Professional Development (CPD) Hours
              </h3>
              <form onSubmit={handleAddPdLog} className="space-y-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700 dark:text-slate-300">Activity Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Authored Interdisciplinary Unit on Climate"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Category</label>
                    <select
                      value={newType}
                      onChange={(e) => setNewType(e.target.value as any)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    >
                      <option value="bundle-creation">Theme Bundle Authoring</option>
                      <option value="resource-creation">Classroom Resource</option>
                      <option value="peer-review">Peer Educator Audit</option>
                      <option value="nishtha-module">NISHTHA Module Study</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Hours Accredited</label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      value={newHours}
                      onChange={(e) => setNewHours(Number(e.target.value))}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsLogModalOpen(false)}
                    className="px-4 py-2 font-bold text-slate-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xs"
                  >
                    Save to CPD Logbook
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* EMBEDDED TUTORIAL MODAL */}
        {selectedTutorial && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="font-bold text-indigo-600 dark:text-indigo-400 uppercase text-[10px]">
                  {selectedTutorial.courseCode} · Tutorial Walkthrough
                </span>
                <button type="button" onClick={() => setSelectedTutorial(null)} className="text-slate-400 font-bold">
                  ✕
                </button>
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white text-base">
                {selectedTutorial.courseTitle}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                This embedded module guides educators through implementing the pedagogical concepts inside Subjects2Skills. Review the step-by-step checklist below:
              </p>

              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl space-y-2 text-slate-700 dark:text-slate-300">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Step 1: Map your local watershed or community ecosystem to NCF-SE Middle Stage competencies.
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Step 2: Differentiate activities using Universal Design for Learning (UDL) multiple representation modes.
                </div>
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  Step 3: Conduct double peer educator review before publishing to the statewide resource library.
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedTutorial(null)}
                  className="px-4 py-2 font-bold text-slate-600"
                >
                  Close
                </button>
                <a
                  href={selectedTutorial.directLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-bold flex items-center gap-1.5"
                >
                  Open in DIKSHA Portal <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
