import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Map, Target, Layers, ArrowRight, Activity, Filter, FileText } from 'lucide-react';
import { subjectMaps } from '@/data/subjectMaps';
import { SubjectSkillMap } from '@/types';
import { FEATURES } from '@/config/features';

const STAGES = ['Foundational', 'Preparatory', 'Middle', 'Secondary'];

export function SkillMapPage() {
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [selectedNode, setSelectedNode] = useState<SubjectSkillMap | null>(null);

  const subjects = useMemo(() => Array.from(new Set(subjectMaps.map(s => s.subject))).sort(), []);

  const mapData = useMemo(() => {
    return STAGES.map(stage => ({
      stage,
      items: subjectMaps.filter(s => s.subject === selectedSubject && s.stage === stage)
    }));
  }, [selectedSubject]);

  if (!FEATURES.ENABLE_SKILL_VISUALS) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skill Map
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Follow a skill from early grades to secondary. See how competencies build across stages.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Filter by Subject
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => {
                setSelectedSubject(e.target.value);
                setSelectedNode(null);
              }}
              className="w-full md:w-64 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-4 py-2.5 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none"
            >
              {subjects.map(sub => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Diagram Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Progression Nodes */}
          <div className="lg:col-span-2 space-y-6">
            {mapData.every(stage => stage.items.length === 0) ? (
              <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-12 text-center">
                 <Filter className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto mb-4" />
                 <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No mappings found</h3>
                 <p className="text-sm text-slate-500">Pick another subject to see its skill pathway.</p>
              </div>
            ) : (
              <div className="relative">
                {/* Connecting Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-indigo-100 dark:bg-indigo-900/50 hidden md:block"></div>
                
                <div className="space-y-8">
                  {mapData.filter(d => d.items.length > 0).map((stageGroup, i) => (
                    <div key={stageGroup.stage} className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-12">
                      {/* Stage Label */}
                      <div className="md:w-32 shrink-0 pt-4 md:text-right">
                        <span className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 font-bold text-[11px] uppercase tracking-wider px-3 py-1 rounded-full">
                          {stageGroup.stage}
                        </span>
                      </div>
                      
                      {/* Nodes */}
                      <div className="flex-1 space-y-4">
                        {stageGroup.items.map(item => (
                          <button
                            key={item.id}
                            onClick={() => setSelectedNode(item)}
                            className={`w-full text-left p-5 rounded-2xl border-2 transition-all group shadow-sm ${
                              selectedNode?.id === item.id 
                                ? 'bg-white dark:bg-slate-900 border-indigo-500 shadow-indigo-100 dark:shadow-none' 
                                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div>
                                <div className="text-xs font-bold text-slate-500 mb-1">{item.grade} • {item.keyConcepts?.[0] || item.learningArea}</div>
                                <h3 className="font-bold text-slate-900 dark:text-white leading-tight group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                  {item.primarySkill || item.competency}
                                </h3>
                              </div>
                              <ArrowRight className={`w-5 h-5 shrink-0 transition-colors ${selectedNode?.id === item.id ? 'text-indigo-500' : 'text-slate-300 dark:text-slate-700'}`} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Detail Panel */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                {selectedNode ? (
                  <motion.div
                    key={selectedNode.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col gap-6"
                  >
                    <div>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 mb-3 inline-block">
                        Skill Profile
                      </span>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white leading-tight">
                        {selectedNode.primarySkill || selectedNode.competency}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                        {selectedNode.learningOutcome}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider mb-2">
                          <Activity className="w-4 h-4" /> Sample Task
                        </div>
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                          {selectedNode.studentOutput || 'A collaborative activity producing tangible evidence.'}
                        </p>
                        {selectedNode.pedagogy && selectedNode.pedagogy.length > 0 && (
                           <p className="text-xs text-slate-500 mt-2">
                             Via: {selectedNode.pedagogy.join(', ')}
                           </p>
                        )}
                      </div>

                      <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-100 dark:border-slate-800/60">
                         <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                           <FileText className="w-4 h-4" /> Evidence & Rubrics
                         </div>
                         <ul className="list-disc list-inside text-xs text-slate-700 dark:text-slate-300 space-y-1">
                           {selectedNode.evidence?.slice(0, 2).map((ev, idx) => (
                             <li key={idx}>{ev.split(':')[0]}</li>
                           )) || <li>Formative observations</li>}
                         </ul>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 border-dashed p-8 text-center flex flex-col items-center justify-center min-h-[300px]"
                  >
                    <Target className="w-10 h-10 text-slate-300 dark:text-slate-700 mb-4" />
                    <h3 className="font-bold text-slate-900 dark:text-white mb-2">Select a skill</h3>
                    <p className="text-sm text-slate-500">Click a node on the left to see its descriptor, sample tasks, and resources.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
