import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { gradesData } from '@/data/grades';
import { BookOpen, Users, CheckCircle, FileText, Compass, ArrowRight, Sparkles } from 'lucide-react';

export function ExploreByGrade() {
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  const stages = [
    { id: 'foundational', name: 'Foundational Stage', anchor: 'Grade 1' },
    { id: 'preparatory', name: 'Preparatory Stage', anchor: 'Grade 3' },
    { id: 'middle', name: 'Middle Stage', anchor: 'Grade 6' },
    { id: 'secondary', name: 'Secondary Stage', anchor: 'Grade 9' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-200';
      case 'reviewed': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border-teal-200';
      case 'teacher-pilot': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-200';
      case 'in-development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-200';
      case 'planned': return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200';
      case 'needs-update': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-200';
      default: return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-200';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const filteredStages = selectedStage === 'all' 
    ? stages 
    : stages.filter(s => s.id === selectedStage);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-8">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12 max-w-6xl mx-auto">
          
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 inline-block">
              Stages 5+3+3+4 Pedagogical Structure
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore by Grade
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Transparent curriculum navigation from Pre-school to Grade 12. Full 21-level hierarchies and flagship classroom lesson plans are anchored across each key developmental phase.
            </p>

            {/* Stage Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                onClick={() => setSelectedStage('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                  selectedStage === 'all'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                }`}
              >
                All Stages (K–12)
              </button>
              {stages.map(st => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStage(st.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] ${
                    selectedStage === st.id
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>
          </div>

          {filteredStages.map(stage => {
            const stageGrades = gradesData.filter(g => g.stageId === stage.id);
            if (stageGrades.length === 0) return null;

            return (
              <div key={stage.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {stage.name}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Anchor Grade for testing: <strong className="text-indigo-600 dark:text-indigo-400">{stage.anchor}</strong>
                    </p>
                  </div>
                  <Link 
                    to={`/stage/${stage.id}`}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto"
                  >
                    View Stage Philosophy <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stageGrades.map(grade => {
                    const isAnchor = grade.name === stage.anchor || (grade as any).flagshipProject;
                    const isPlanned = grade.status === 'planned';

                    return (
                      <motion.div 
                        key={grade.id} 
                        variants={itemVariants} 
                        className={`bg-white dark:bg-slate-900 border rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col h-full ${
                          isAnchor 
                            ? 'border-indigo-300 dark:border-indigo-800 ring-2 ring-indigo-500/20' 
                            : 'border-slate-200 dark:border-slate-800'
                        }`}
                      >
                        <div className="p-6 flex-grow flex flex-col justify-between">
                          <div>
                            <div className="flex justify-between items-start gap-2 mb-3">
                              <div>
                                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-0.5">
                                  Ages {grade.ageRange}
                                </span>
                                <div className="flex items-center gap-2">
                                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                    {grade.name}
                                  </h3>
                                  {isAnchor && (
                                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 flex items-center gap-1">
                                      <Sparkles className="w-3 h-3" /> Anchor
                                    </span>
                                  )}
                                </div>
                              </div>
                              <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider border ${getStatusColor(grade.status)}`}>
                                {formatStatus(grade.status)}
                              </span>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm mb-5 line-clamp-3 leading-relaxed">
                              {grade.learningPurpose}
                            </p>

                            <div className="mb-5">
                              <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                                Priority Observable Skills
                              </h4>
                              <div className="flex flex-wrap gap-1.5">
                                {grade.prioritySkills.slice(0, 3).map(skill => (
                                  <span key={skill} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 font-medium">
                                    {skill}
                                  </span>
                                ))}
                                {grade.prioritySkills.length > 3 && (
                                  <span className="bg-slate-100 dark:bg-slate-800 text-slate-500 text-xs px-2 py-1 rounded-md border border-slate-200 dark:border-slate-700">
                                    +{grade.prioritySkills.length - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>

                          <div>
                            <div className="grid grid-cols-2 gap-2 mb-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400">
                              <div className="flex items-center gap-1.5">
                                <BookOpen className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                                <span className="truncate">{grade.developmentalFocus.length} Focus Areas</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <FileText className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                <span className="truncate font-medium">
                                  {isAnchor ? 'Flagship Activities' : isPlanned ? 'Planned for v0.3' : 'Starter Plans'}
                                </span>
                              </div>
                            </div>
                            
                            <Link 
                              to={`/grade/${grade.id}`} 
                              className={`w-full text-center font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5 min-h-[44px] ${
                                isAnchor 
                                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-xs' 
                                  : 'bg-indigo-50 hover:bg-indigo-100 text-indigo-700 dark:bg-indigo-950/40 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200/50 dark:border-indigo-800/40'
                              }`}
                            >
                              <span>Explore {grade.name}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
