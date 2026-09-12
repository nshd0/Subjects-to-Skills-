import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Save, Users, Target, BookOpen, Clock, CheckCircle } from 'lucide-react';
import { useWizardIntegratedUnits } from '../useWizardStorage';
import { IntegratedUnit } from '../wizardTypes';
import { subjectMaps } from '@/data/subjectMaps';

const BLOOMS_LEVELS = ['Remember', 'Understand', 'Apply', 'Analyse', 'Evaluate', 'Create'];
const SUBJECTS = [
  { id: 'math', name: 'Mathematics' },
  { id: 'science', name: 'Science' },
  { id: 'english', name: 'English' },
  { id: 'social-science', name: 'Social Science' },
  { id: 'second-language', name: 'Second Language' },
];

export function CreateIntegratedUnitWizard() {
  const navigate = useNavigate();
  const { saveUnit } = useWizardIntegratedUnits();
  const [step, setStep] = useState(1);
  const [unit, setUnit] = useState<Partial<IntegratedUnit>>({
    id: Date.now().toString(),
    gradeId: 'grade-8',
    title: '',
    description: '',
    subjectIds: [],
    skillIds: [],
    collaboratorIds: [],
    leadTeacherId: 'me',
    status: 'draft',
    bloomsFocus: [],
    varkActivities: {},
    timeline: [],
    comments: [],
  });
  
  const [collaboratorInput, setCollaboratorInput] = useState('');

  const nextStep = () => setStep(s => Math.min(8, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSave = () => {
    saveUnit({ ...unit, createdAt: Date.now(), updatedAt: Date.now() } as IntegratedUnit);
    navigate('/grade/8/collaborate');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Cross-Subject Collaboration</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Bring two or more subjects together around shared skills. We'll guide you through setting up an integrated unit to co-design with your peers.
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <button onClick={() => navigate('/grade/8')} className="px-6 py-2.5 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Not now
              </button>
              <button onClick={nextStep} className="px-6 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                Start Building
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Unit Details & Subjects</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Name your integrated unit and select at least two contributing subjects.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Unit Title</label>
                <input type="text" className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white" value={unit.title || ''} onChange={e => setUnit({...unit, title: e.target.value})} placeholder="e.g. Sustainable Cities (Science + Social Science)" />
              </div>
              <div>
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Contributing Subjects (Select 2+)</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SUBJECTS.map(sub => (
                    <label key={sub.id} className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-colors ${unit.subjectIds?.includes(sub.id) ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-300' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'}`}>
                      <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded" checked={unit.subjectIds?.includes(sub.id)} onChange={e => {
                        const newIds = e.target.checked ? [...(unit.subjectIds || []), sub.id] : (unit.subjectIds || []).filter(id => id !== sub.id);
                        setUnit({...unit, subjectIds: newIds});
                      }} />
                      <span className="text-sm font-medium text-slate-900 dark:text-white">{sub.name}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Shared Skills</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Select 1-3 core skills per subject that align naturally (e.g. Data Analysis in Math + Scientific Inquiry in Science).</p>
            </div>
            <div className="space-y-4">
              {unit.subjectIds?.length ? unit.subjectIds.map(subId => {
                const subName = SUBJECTS.find(s => s.id === subId)?.name;
                const subjectSkills = subjectMaps.filter(m => (m.grade === 'Grade 8' || m.grade === '8') && m.subject === subName);
                return (
                  <div key={subId} className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                    <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">{subName} Skills</h4>
                    {subjectSkills.length > 0 ? subjectSkills.map(skillMap => (
                      <label key={skillMap.id} className="flex items-start gap-3 mb-3 cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 text-indigo-600 rounded mt-0.5" 
                          checked={unit.skillIds?.includes(skillMap.id)}
                          onChange={e => {
                            const newIds = e.target.checked 
                              ? [...(unit.skillIds || []), skillMap.id] 
                              : (unit.skillIds || []).filter(id => id !== skillMap.id);
                            setUnit({...unit, skillIds: newIds});
                          }} 
                        />
                        <div className="flex-1">
                           <span className="text-sm font-semibold text-slate-900 dark:text-white block">{skillMap.primarySkill.split(':')[0]}</span>
                           <span className="text-xs text-slate-600 dark:text-slate-400 block mt-0.5">{skillMap.primarySkill.split(':')[1]?.trim() || skillMap.primarySkill}</span>
                        </div>
                      </label>
                    )) : (
                      <p className="text-sm text-slate-500">No skills mapped for this subject yet.</p>
                    )}
                  </div>
                );
              }) : (
                <div className="text-sm text-amber-600">Please go back and select contributing subjects first.</div>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Invite Collaborators</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Add other teachers to co-design this unit. They will be able to edit and leave comments.</p>
            </div>
            <div className="space-y-4">
              <div className="flex gap-2">
                <input type="text" className="flex-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2 text-sm text-slate-900 dark:text-white" placeholder="Search by name or subject (e.g. 'Ms. Davis')" value={collaboratorInput} onChange={e => setCollaboratorInput(e.target.value)} />
                <button onClick={() => { if(collaboratorInput) { setUnit({...unit, collaboratorIds: [...(unit.collaboratorIds||[]), collaboratorInput]}); setCollaboratorInput(''); } }} className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl text-sm">Add</button>
              </div>
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center font-bold text-indigo-700 text-xs">ME</div>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white">You (Lead Teacher)</span>
                  </div>
                  <span className="text-xs bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Lead</span>
                </div>
                {unit.collaboratorIds?.map((collab, i) => (
                  <div key={i} className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-xs">{collab.charAt(0).toUpperCase()}</div>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{collab}</span>
                    </div>
                    <button onClick={() => setUnit({...unit, collaboratorIds: unit.collaboratorIds?.filter(c => c !== collab)})} className="text-xs text-red-500 hover:underline">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bloom’s Focus & VARK</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Define the cross-subject thinking levels and differentiated activities.</p>
            </div>
            <div className="space-y-4">
              <div>
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Shared Bloom's Focus</span>
                <div className="flex flex-wrap gap-2">
                  {BLOOMS_LEVELS.map(level => {
                    const isSelected = unit.bloomsFocus?.includes(level);
                    return (
                      <button key={level} onClick={() => {
                        const newLevels = isSelected ? (unit.bloomsFocus || []).filter(l => l !== level) : [...(unit.bloomsFocus || []), level];
                        setUnit({...unit, bloomsFocus: newLevels});
                      }} className={`px-3 py-1.5 rounded-full font-medium text-xs transition-colors border ${isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'}`}>
                        {level}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="pt-2">
                <span className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">VARK Activities</span>
                <div className="grid sm:grid-cols-2 gap-3">
                  {['visual', 'auditory', 'readWrite', 'kinesthetic'].map((type) => {
                    const varkPlan = unit.varkActivities?.[type as keyof typeof unit.varkActivities] || { description: '', included: false };
                    const titles: Record<string, string> = { visual: 'Visual', auditory: 'Auditory', readWrite: 'Read/Write', kinesthetic: 'Kinesthetic' };
                    return (
                      <div key={type} className="bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                        <label className="flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-200 cursor-pointer">
                          <input type="checkbox" className="rounded text-indigo-600" checked={varkPlan.included} onChange={e => setUnit({...unit, varkActivities: {...unit.varkActivities, [type]: { ...varkPlan, included: e.target.checked }}})} />
                          {titles[type]}
                        </label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Shared Timeline</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Block out the unit's timeline, assigning subjects to specific phases.</p>
            </div>
            <div className="space-y-3">
              {(unit.timeline?.length === 0 ? [
                { title: 'Intro / Hook', durationMin: 45, skillIds: [] },
                { title: 'Subject Deep Dives', durationMin: 90, skillIds: [] },
                { title: 'Synthesis Project', durationMin: 60, skillIds: [] }
              ] : unit.timeline)?.map((block, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="w-16 shrink-0">
                    <input type="number" className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-sm text-center" value={block.durationMin} onChange={e => {
                      const newTimeline = [...(unit.timeline || [])];
                      if(!newTimeline[idx]) newTimeline[idx] = block;
                      newTimeline[idx].durationMin = parseInt(e.target.value) || 0;
                      setUnit({...unit, timeline: newTimeline});
                    }}/>
                    <div className="text-center text-[10px] text-slate-500 mt-1 uppercase">mins</div>
                  </div>
                  <div className="flex-1">
                    <input type="text" className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 p-1 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-indigo-500" value={block.title} onChange={e => {
                      const newTimeline = [...(unit.timeline || [])];
                      if(!newTimeline[idx]) newTimeline[idx] = block;
                      newTimeline[idx].title = e.target.value;
                      setUnit({...unit, timeline: newTimeline});
                    }} placeholder="Block title..." />
                    <div className="flex gap-1 mt-2">
                       {unit.subjectIds?.map(subId => (
                         <span key={subId} className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded cursor-pointer hover:bg-indigo-100 hover:text-indigo-700">{subId}</span>
                       ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 7:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Culminating Assessment</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">How will you assess the shared skills across these subjects?</p>
            </div>
            <div className="grid gap-4">
               <button onClick={() => {
                 saveUnit({ ...unit, status: 'draft', id: Math.random().toString(36).substring(7) });
                 navigate('/assess/new');
               }} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors group">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-indigo-600"><Target className="w-4 h-4" /> Save Draft & Create New Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Saves your progress and launches the Assessment Wizard.</div>
               </button>
               <button onClick={() => {
                 setUnit({ ...unit, assessmentId: 'exemplar-assess-math' });
                 alert("Linked to Exemplar Math Assessment.");
                 nextStep();
               }} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left hover:border-indigo-400 transition-colors group">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center gap-2 group-hover:text-indigo-600"><BookOpen className="w-4 h-4" /> Link Exemplar Assessment</div>
                  <div className="text-sm text-slate-500 mt-1">Quickly link an existing exemplar assessment for testing.</div>
               </button>
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Review & Start Collaborating</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Save this unit as a draft. Your invited collaborators will be notified and can start adding their input.</p>
            </div>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800">
               <div className="mb-4">
                  <span className="text-xs font-bold text-slate-500 uppercase">Unit Title</span>
                  <div className="font-semibold text-slate-900 dark:text-white">{unit.title || 'Untitled Unit'}</div>
               </div>
               <div className="grid grid-cols-2 gap-4">
                 <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Subjects</span>
                    <div className="text-sm text-slate-800 dark:text-slate-200 mt-1 capitalize">{unit.subjectIds?.join(', ') || 'None'}</div>
                 </div>
                 <div>
                    <span className="text-xs font-bold text-slate-500 uppercase">Collaborators</span>
                    <div className="text-sm text-slate-800 dark:text-slate-200 mt-1">{unit.collaboratorIds?.length || 0} invited</div>
                 </div>
               </div>
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
            <div className="bg-slate-50 dark:bg-slate-800/50 px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <div className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                Step {step - 1} of 7
              </div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7].map(s => (
                  <div key={s} className={`h-1.5 w-6 rounded-full ${s <= step - 1 ? 'bg-indigo-500' : 'bg-slate-200 dark:bg-slate-700'}`} />
                ))}
              </div>
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
                <button onClick={nextStep} className="px-5 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2 shadow-sm">
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button onClick={handleSave} className="px-6 py-2.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2 shadow-sm">
                  <Save className="w-4 h-4" /> Save & Invite
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
