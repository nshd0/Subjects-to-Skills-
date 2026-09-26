import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Map, Target, Layers, ArrowRight, Activity, Filter, FileText, Building2, Plus, ShieldCheck, ExternalLink } from 'lucide-react';
import { subjectMaps } from '@/data/subjectMaps';
import { SceneCanvas } from '@/components/3d/SceneCanvas';
import { SkillMap3D } from '@/components/3d/SkillMap3D';
import { SubjectSkillMap } from '@/types';
import { FEATURES } from '@/config/features';
import { STATE_BOARD_OPTIONS } from '@/data/stateAlignments';
import { useThemeBundlesStorage } from '@/features/planning/useThemeBundlesStorage';
import { SuggestAlignmentModal } from '@/features/planning/components/SuggestAlignmentModal';
import { Link } from 'react-router-dom';

const STAGES = ['Foundational', 'Preparatory', 'Middle', 'Secondary'];

const getTrackBadgeStyle = (trackType?: string) => {
  switch (trackType) {
    case 'compulsory-embedded':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 border-blue-200 dark:border-blue-800';
    case 'optional-skill-module':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200 border-amber-200 dark:border-amber-800';
    case 'elective-skill-subject':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200 border-emerald-200 dark:border-emerald-800';
    default:
      return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700';
  }
};

export function SkillMapPage() {
  const { alignments, submitAlignmentSuggestion } = useThemeBundlesStorage();
  const [selectedSubject, setSelectedSubject] = useState<string>('Mathematics');
  const [selectedStateBoard, setSelectedStateBoard] = useState<string>('all');
  const [selectedNode, setSelectedNode] = useState<SubjectSkillMap | null>(null);
  const [viewMode, setViewMode] = useState<'2d' | '3d'>('2d');
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);

  const subjects = useMemo(() => Array.from(new Set(subjectMaps.map(s => s.subject))).sort(), []);

  const mapData = useMemo(() => {
    return STAGES.map(stage => ({
      stage,
      items: subjectMaps.filter(s => s.subject === selectedSubject && s.stage === stage)
    }));
  }, [selectedSubject]);

  // Find state textbook alignments for the selected node
  const activeAlignments = useMemo(() => {
    if (!selectedNode) return [];
    return alignments.filter(a => {
      const matchSkill = a.skillId === selectedNode.id || a.subject.toLowerCase().includes(selectedNode.subject.toLowerCase());
      const matchState = selectedStateBoard === 'all' || a.stateCode === selectedStateBoard;
      return matchSkill && matchState;
    });
  }, [selectedNode, alignments, selectedStateBoard]);

  if (!FEATURES.ENABLE_SKILL_VISUALS) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                v0.7 State SCERT Localized
              </span>
              <span className="text-xs text-slate-500">
                National Competency Progression
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skill Map & State Alignments
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-2xl">
              Follow a skill from early grades to secondary. Filter by your state board (Kerala SCERT, Maharashtra Balbharati, or CBSE/NCERT) to see exact textbook chapter citations.
            </p>
          </div>
          
          <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-end gap-4">
            {/* My State Board Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                My State Board
              </label>
              <select
                value={selectedStateBoard}
                onChange={(e) => setSelectedStateBoard(e.target.value)}
                className="w-full sm:w-56 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-3.5 py-2 text-xs font-medium outline-none focus:border-indigo-500 transition-colors"
              >
                {STATE_BOARD_OPTIONS.map(opt => (
                  <option key={opt.code} value={opt.code}>{opt.name}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Filter by Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedNode(null);
                }}
                className="w-full sm:w-52 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl px-3.5 py-2 text-xs font-medium outline-none focus:border-indigo-500 transition-colors"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>{subject}</option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                View Mode
              </label>
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => setViewMode('2d')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === '2d' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500'}`}
                >
                  2D Grid
                </button>
                <button
                  onClick={() => setViewMode('3d')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${viewMode === '3d' ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs' : 'text-slate-500'}`}
                >
                  3D Orbit
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Diagram Area */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Progression Nodes */}
          <div className="lg:col-span-2 space-y-6">
            {viewMode === '3d' && (
              <div className="w-full h-[500px]">
                <SceneCanvas>
                  <SkillMap3D 
                    skills={mapData.flatMap(stage => stage.items)} 
                    onNodeClick={(skill) => setSelectedNode(skill)} 
                  />
                </SceneCanvas>
              </div>
            )}
            
            {viewMode === '2d' && (
              <>
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
                                <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                                  <span className="text-xs font-bold text-slate-500">{item.grade} • {item.keyConcepts?.[0] || item.learningArea}</span>
                                  {item.trackBadge && (
                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${getTrackBadgeStyle(item.trackType)}`}>
                                      {item.trackBadge}
                                    </span>
                                  )}
                                  {item.hoursPerYear && (
                                    <span className="text-[10px] text-slate-400 font-medium">({item.hoursPerYear})</span>
                                  )}
                                </div>
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
              </>
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
                      {selectedNode.trackType && (
                        <div className={`p-4 rounded-2xl border ${getTrackBadgeStyle(selectedNode.trackType)}`}>
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="text-xs font-bold uppercase tracking-wider">
                              {selectedNode.trackBadge || selectedNode.trackType}
                            </span>
                            {selectedNode.hoursPerYear && (
                              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white/60 dark:bg-black/30">
                                {selectedNode.hoursPerYear}
                              </span>
                            )}
                          </div>
                          <p className="text-xs opacity-90 leading-relaxed">
                            {selectedNode.trackType === 'compulsory-embedded' && 'Track A: Compulsory curriculum embedded into core subjects (Mathematics, EVS, Science, Social Science).'}
                            {selectedNode.trackType === 'optional-skill-module' && 'Track B: Optional skill module (~15 hours) offered standalone at school discretion.'}
                            {selectedNode.trackType === 'elective-skill-subject' && 'Track C: Formal CBSE Board elective skill subject assessed for 100 marks (50 theory + 50 practical).'}
                          </p>
                        </div>
                      )}

                      {/* V0.7 State SCERT Textbook Alignments */}
                      <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/60 space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-900 dark:text-emerald-200 uppercase tracking-wider">
                            <Building2 className="w-4 h-4 text-emerald-600" />
                            <span>State SCERT Textbooks ({activeAlignments.length})</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setIsSuggestModalOpen(true)}
                            className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 hover:underline flex items-center gap-1"
                          >
                            <Plus className="w-3 h-3" />
                            Suggest
                          </button>
                        </div>

                        {activeAlignments.length > 0 ? (
                          <div className="space-y-2">
                            {activeAlignments.slice(0, 2).map((align) => (
                              <div 
                                key={align.id}
                                className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-800 text-xs space-y-1"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-bold text-slate-900 dark:text-white text-[11px]">
                                    {align.stateName}
                                  </span>
                                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 font-semibold">
                                    {align.pageRange}
                                  </span>
                                </div>
                                <p className="text-slate-700 dark:text-slate-300 text-[11px] font-medium">
                                  {align.chapterTitle}
                                </p>
                                <p className="text-slate-500 text-[10px] leading-tight">
                                  {align.bridgingNote}
                                </p>
                              </div>
                            ))}
                            <div className="pt-1 text-center">
                              <Link
                                to="/state-alignments"
                                className="text-[11px] text-emerald-700 dark:text-emerald-300 font-bold hover:underline inline-flex items-center gap-1"
                              >
                                View all state SCERT mappings
                                <ArrowRight className="w-3 h-3" />
                              </Link>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center py-2 text-xs text-slate-500 space-y-1.5">
                            <p className="text-[11px]">No specific textbook chapter mapped yet for this node.</p>
                            <button
                              type="button"
                              onClick={() => setIsSuggestModalOpen(true)}
                              className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-semibold text-[11px] hover:bg-emerald-700"
                            >
                              Suggest SCERT Chapter Alignment
                            </button>
                          </div>
                        )}
                      </div>

                      {selectedNode.progression?.notes && (
                        <div className="bg-amber-50 dark:bg-amber-900/30 p-4 rounded-2xl border border-amber-200 dark:border-amber-800">
                          <p className="text-xs text-amber-800 dark:text-amber-200 font-bold mb-1">Curriculum Transition Note</p>
                          <p className="text-sm text-amber-700 dark:text-amber-300">{selectedNode.progression.notes}</p>
                        </div>
                      )}
                      {selectedNode.sourceReference && (
                        <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
                          <p className="text-xs text-slate-500 font-bold mb-1">Source Reference</p>
                          <p className="text-sm text-slate-700 dark:text-slate-300">
                            {selectedNode.sourceReference}
                            {selectedNode.sourceReference.includes('Pending Validation') && (
                              <span className="ml-2 inline-block px-2 py-0.5 bg-rose-100 text-rose-700 rounded-full text-[10px] font-bold uppercase">Pending</span>
                            )}
                          </p>
                        </div>
                      )}
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

      <SuggestAlignmentModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
        skill={selectedNode}
        onSubmit={(sugg) => submitAlignmentSuggestion(sugg)}
      />
    </div>
  );
}
