import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Save, Target, CheckCircle } from 'lucide-react';
import { useWizardAssessments } from '../useWizardStorage';
import { WizardAssessment } from '../wizardTypes';
import { gradesData } from '@/data/grades';
import { units } from '@/data/units';
import { subjectMaps } from '@/data/subjectMaps';
import { FEATURES } from '@/config/features';
import { TeacherTipsPopover } from './TeacherTipsPopover';

const BLOOMS_LEVELS = ['Remember', 'Understand', 'Apply', 'Analyse', 'Evaluate', 'Create'];

export function CreateAssessmentWizard() {
  const navigate = useNavigate();
  const { saveAssessment } = useWizardAssessments();
  const [step, setStep] = useState(1);
  const [assessment, setAssessment] = useState<Partial<WizardAssessment>>({
    id: Date.now().toString(),
    skillIds: [],
    bloomsFocus: [],
    tasks: [],
    rubric: { skillId: '', levels: [] },
    logistics: { grouping: 'individual', markingApproach: '' }
  });

  // Dynamic subjects based on selected grade and AI tracks
  const selectedGradeProfile = gradesData.find(g => g.id === assessment.gradeId);
  const availableSubjects = React.useMemo(() => {
    const base = selectedGradeProfile ? [...selectedGradeProfile.cbseSubjects] : [];
    if (FEATURES.ENABLE_AI_SUBJECT && assessment.gradeId) {
      const gNum = assessment.gradeId.replace('grade-', '');
      if (['3', '4', '5'].includes(gNum)) {
        if (!base.includes('Computational Thinking')) base.push('Computational Thinking');
      } else if (['6', '7', '8'].includes(gNum)) {
        if (!base.includes('Computational Thinking & AI')) base.push('Computational Thinking & AI');
        if (!base.includes('AI Skill Module (901)')) base.push('AI Skill Module (901)');
      } else if (['9', '10', '11', '12'].includes(gNum)) {
        if (!base.includes('Artificial Intelligence (Code 417)')) base.push('Artificial Intelligence (Code 417)');
      }
    }
    return base;
  }, [selectedGradeProfile, assessment.gradeId]);

  // Filtered units based on selected grade and subject
  const availableUnits = units.filter(u => {
    if (assessment.gradeId && u.gradeId !== assessment.gradeId) return false;
    if (assessment.subjectId) {
      const sLow = assessment.subjectId.toLowerCase();
      return u.learningAreas.some(la => {
        const laLow = la.toLowerCase();
        return laLow.includes(sLow) || sLow.includes(laLow) || (sLow === 'evs' && laLow.includes('environmental'));
      });
    }
    return true;
  });

  // Dynamically derived skills from subjectMaps based on grade, subject, unit
  const availableSkills = React.useMemo(() => {
    if (!assessment.gradeId) return [];
    const gradeNum = assessment.gradeId.replace('grade-', '');
    const gradeStr = `Grade ${gradeNum}`;

    let matchedMaps = subjectMaps.filter(m => m.grade === gradeStr || m.grade === gradeNum);
    if (assessment.subjectId) {
      const sLow = assessment.subjectId.toLowerCase();
      matchedMaps = matchedMaps.filter(m => {
        const mLow = m.subject.toLowerCase();
        return mLow.includes(sLow) || sLow.includes(mLow) || (sLow === 'evs' && mLow.includes('evs'));
      });
    }

    if (assessment.unitId) {
      const directMap = matchedMaps.find(m => `unit-${m.id}` === assessment.unitId || m.id === assessment.unitId.replace('unit-', ''));
      if (directMap) {
        matchedMaps = [directMap, ...matchedMaps.filter(m => m.id !== directMap.id)];
      }
    }

    const skillsList: { id: string; label: string; desc: string }[] = [];
    const seenLabels = new Set<string>();

    matchedMaps.forEach(m => {
      if (m.primarySkill && !seenLabels.has(m.primarySkill)) {
        seenLabels.add(m.primarySkill);
        skillsList.push({
          id: `skill-${m.id}`,
          label: m.primarySkill,
          desc: m.competency || m.learningOutcome
        });
      }
      m.supportingSkills?.forEach((sup, idx) => {
        if (sup && !seenLabels.has(sup)) {
          seenLabels.add(sup);
          skillsList.push({
            id: `skill-${m.id}-sup-${idx}`,
            label: sup,
            desc: `Supporting skill for ${m.subject} (${m.grade})`
          });
        }
      });
    });

    return skillsList;
  }, [assessment.gradeId, assessment.subjectId, assessment.unitId]);

  const nextStep = () => setStep(s => Math.min(8, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSave = () => {
    saveAssessment({ ...assessment, createdAt: Date.now(), updatedAt: Date.now() } as WizardAssessment);
    navigate('/assessment-mapper');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Assess Meaningfully</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Let’s create tasks and rubrics that match your skills and work for different types of learners in a large class.
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <button onClick={() => navigate('/assessment-mapper')} className="px-6 py-2.5 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Not now
              </button>
              <button onClick={nextStep} className="px-6 py-2.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors">
                Start Building
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Grade, Subject & Unit</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Assessments should match the skills you care about most. Start small: 2–4 skills per assessment.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Grade</label>
                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" value={assessment.gradeId || ''} onChange={e => setAssessment({...assessment, gradeId: e.target.value, subjectId: '', unitId: '', skillIds: []})}>
                  <option value="">Select Grade</option>
                  {gradesData.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" value={assessment.subjectId || ''} onChange={e => setAssessment({...assessment, subjectId: e.target.value, unitId: '', skillIds: []})}>
                  <option value="">Select Subject</option>
                  {availableSubjects.map(subj => {
                    let badge = '';
                    if (subj === 'Computational Thinking') badge = ' (Track A • Compulsory Embedded)';
                    else if (subj === 'Computational Thinking & AI') badge = ' (Track A • Compulsory Embedded)';
                    else if (subj === 'AI Skill Module (901)') badge = ' (Track B • Optional Skill Module)';
                    else if (subj === 'Artificial Intelligence (Code 417)') badge = ' (Track C • CBSE Elective 417)';
                    return (
                      <option key={subj} value={subj}>
                        {subj}{badge}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Unit (Optional)</label>
                <select 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" 
                  value={assessment.unitId || ''} 
                  onChange={e => setAssessment({...assessment, unitId: e.target.value, skillIds: []})}
                >
                  <option value="">{availableUnits.length ? "All Units / Select Specific Unit" : "No units found (Select Subject)"}</option>
                  {availableUnits.map(u => <option key={u.id} value={u.id}>{u.title}</option>)}
                </select>
              </div>
              <div className="pt-2">
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                  Focus Skills {assessment.skillIds?.length ? `(${assessment.skillIds.length} selected)` : ''}
                </span>
                <div className="space-y-2 max-h-[260px] overflow-y-auto pr-1">
                  {availableSkills.length === 0 ? (
                    <div className="p-4 text-center text-sm text-slate-500 dark:text-slate-400 border border-dashed rounded-xl">
                      Select Grade and Subject to choose real curriculum-aligned skills.
                    </div>
                  ) : (
                    availableSkills.map(skill => (
                      <label key={skill.id} className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer hover:border-emerald-300 transition-colors">
                        <input type="checkbox" className="mt-1 w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-600" checked={assessment.skillIds?.includes(skill.id)} onChange={(e) => {
                          const newIds = e.target.checked ? [...(assessment.skillIds || []), skill.id] : (assessment.skillIds || []).filter(id => id !== skill.id);
                          setAssessment({...assessment, skillIds: newIds});
                        }}/>
                        <div>
                          <div className="text-sm font-medium text-slate-900 dark:text-white">{skill.label}</div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{skill.desc}</div>
                        </div>
                      </label>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Assessment Type</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Pick the main type. For 40+ students, mix quick formative checks with one bigger task.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {['formative', 'summative', 'performance', 'portfolio'].map(type => (
                <button
                  key={type}
                  onClick={() => setAssessment({...assessment, assessmentType: type as any})}
                  className={`p-4 rounded-xl border text-left transition-colors ${assessment.assessmentType === type ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-500' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-emerald-300'}`}
                >
                  <div className="font-bold text-slate-900 dark:text-white capitalize">{type}</div>
                </button>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bloom’s Alignment</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Match the thinking level you taught. If your lesson focused on Apply and Analyse, your assessment should too.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {BLOOMS_LEVELS.map(level => {
                const isSelected = assessment.bloomsFocus?.includes(level);
                return (
                  <button
                    key={level}
                    onClick={() => {
                      const newLevels = isSelected ? (assessment.bloomsFocus || []).filter(l => l !== level) : [...(assessment.bloomsFocus || []), level];
                      setAssessment({...assessment, bloomsFocus: newLevels});
                    }}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors border ${isSelected ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}
                  >
                    {level}
                  </button>
                );
              })}
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Tasks for Different Learners</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">In a large class, you can use one core task for all, with different entry points (VARK), or run stations where each group does a different style, then share.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
               {['visual', 'auditory', 'readWrite', 'kinesthetic'].map((type) => {
                const titles: Record<string, string> = { visual: 'Visual', auditory: 'Auditory', readWrite: 'Read/Write', kinesthetic: 'Kinesthetic' };
                const isIncluded = assessment.tasks?.some(t => t.varkType === type);
                return (
                  <div key={type} className={`bg-white dark:bg-slate-900 p-4 rounded-xl border ${isIncluded ? 'border-emerald-300 dark:border-emerald-700/50' : 'border-slate-200 dark:border-slate-800'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">{titles[type]}</h4>
                      <input type="checkbox" className="rounded text-emerald-600 w-4 h-4" checked={isIncluded} onChange={(e) => {
                        if (e.target.checked) {
                          setAssessment({...assessment, tasks: [...(assessment.tasks||[]), { id: Date.now().toString(), description: '', varkType: type as any, skillIds: [] }]});
                        } else {
                          setAssessment({...assessment, tasks: (assessment.tasks||[]).filter(t => t.varkType !== type)});
                        }
                      }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Skill-Based Rubric</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Keep rubrics skill-focused, not just content-focused. Example: ‘Analyses data with some support’ vs ‘Analyses data independently’.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
               <div className="grid grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 text-xs font-bold text-slate-500 uppercase text-center py-2">
                 <div>Emerging</div>
                 <div>Developing</div>
                 <div>Secure</div>
                 <div>Extending</div>
               </div>
               <div className="grid grid-cols-4 divide-x divide-slate-200 dark:divide-slate-800">
                 {[1,2,3,4].map(l => (
                   <div key={l} className="p-2">
                     <textarea className="w-full h-24 bg-transparent resize-none outline-none text-xs text-slate-700 dark:text-slate-300" placeholder="Descriptor..." />
                   </div>
                 ))}
               </div>
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Logistics for a Large Class</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">For 40+ students, consider short formative checks you can scan quickly, and peer assessment for some tasks.</p>
            </div>
            <div className="space-y-4">
               <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Grouping</label>
                  <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" value={assessment.logistics?.grouping} onChange={e => setAssessment({...assessment, logistics: {...assessment.logistics!, grouping: e.target.value as any}})}>
                    <option value="individual">Individual</option>
                    <option value="pairs">Pairs</option>
                    <option value="groups">Small groups (4-5)</option>
                  </select>
               </div>
               <div>
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Marking Approach</label>
                  <select className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" value={assessment.logistics?.markingApproach} onChange={e => setAssessment({...assessment, logistics: {...assessment.logistics!, markingApproach: e.target.value}})}>
                    <option value="full">Full Rubric (Teacher)</option>
                    <option value="checklist">Quick Checklist</option>
                    <option value="peer">Peer Assessment</option>
                    <option value="self">Self Assessment</option>
                  </select>
               </div>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Review & Save</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Reuse this assessment structure for other units. Change the content, keep the skill focus and rubric pattern.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-slate-50 dark:bg-slate-950 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col min-h-[600px]">
          
          {step > 1 && (
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-3.5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center gap-3">
              <div className="flex items-center gap-3">
                <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Step {step - 1} of 7
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7].map(s => (
                    <div key={s} className={`h-1.5 w-6 rounded-full ${s <= step - 1 ? 'bg-emerald-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
                  ))}
                </div>
              </div>
              <TeacherTipsPopover 
                gradeId={assessment.gradeId} 
                subjectId={assessment.subjectId} 
                align="right" 
              />
            </div>
          )}

          <div className="flex-1 p-6 sm:p-8 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {step > 1 && (
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 flex justify-between">
              <button onClick={prevStep} className="px-5 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2">
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              
              {step < 8 ? (
                <button onClick={nextStep} className="px-5 py-2.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2 shadow-sm">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSave} className="px-6 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2 shadow-sm">
                  <Save className="w-4 h-4" /> Save to My Assessments
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
