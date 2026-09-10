import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, Save, FileText, CheckCircle } from 'lucide-react';
import { useWizardLessonPlans } from '../useWizardStorage';
import { LessonPlan } from '../wizardTypes';
import { gradesData } from '@/data/grades';
import { units } from '@/data/units';

const BLOOMS_LEVELS = ['Remember', 'Understand', 'Apply', 'Analyse', 'Evaluate', 'Create'];
const SKILLS_MOCK = [
  { id: 's1', label: 'Proportional Reasoning', desc: 'Solve real-world problems involving ratios' },
  { id: 's2', label: 'Critical Analysis', desc: 'Evaluate arguments based on evidence' },
  { id: 's3', label: 'Data Interpretation', desc: 'Extract meaning from charts and graphs' },
  { id: 's4', label: 'Creative Expression', desc: 'Communicate ideas through various mediums' }
];

export function CreateLessonPlanWizard() {
  const navigate = useNavigate();
  const { savePlan } = useWizardLessonPlans();
  const [step, setStep] = useState(1);
  const [plan, setPlan] = useState<Partial<LessonPlan>>({
    id: Date.now().toString(),
    skillIds: [],
    bloomsFocus: [],
    varkActivities: {},
    timeline: [],
    resourceIds: []
  });

  const nextStep = () => setStep(s => Math.min(8, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleSave = () => {
    savePlan({ ...plan, createdAt: Date.now(), updatedAt: Date.now() } as LessonPlan);
    navigate('/planner');
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 text-center py-8">
            <div className="w-16 h-16 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Plan with Purpose</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
              Let’s build a lesson that focuses on clear skills, uses Bloom’s levels for thinking, and VARK styles so all 40+ learners can engage.
            </p>
            <div className="flex justify-center gap-3 pt-4">
              <button onClick={() => navigate('/planner')} className="px-6 py-2.5 rounded-xl font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                Not now
              </button>
              <button onClick={nextStep} className="px-6 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors">
                Start Planning
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Grade, Subject, Unit</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Pick the unit you’re teaching next. We’ll map it to skills and suggest Bloom’s levels and activities.</p>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Grade</label>
                <select 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white"
                  value={plan.gradeId || ''}
                  onChange={e => setPlan({...plan, gradeId: e.target.value})}
                >
                  <option value="">Select Grade</option>
                  {gradesData.map(g => <option key={g.id} value={g.id}>{g.name}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Subject</label>
                <select 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white"
                  value={plan.subjectId || ''}
                  onChange={e => setPlan({...plan, subjectId: e.target.value})}
                >
                  <option value="">Select Subject</option>
                  <option value="math">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="english">English</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Unit</label>
                <select 
                  className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-slate-900 dark:text-white"
                  value={plan.unitId || ''}
                  onChange={e => setPlan({...plan, unitId: e.target.value})}
                >
                  <option value="">Select Unit</option>
                  {units.map(u => <option key={u.id} value={u.id}>{u.title}</option>)}
                </select>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Select Focus Skills</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Choose 2–4 skills you want this lesson to focus on. You can always add more later.</p>
            </div>
            <div className="space-y-3">
              {SKILLS_MOCK.map(skill => (
                <label key={skill.id} className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition-colors ${plan.skillIds?.includes(skill.id) ? 'bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-indigo-200 dark:hover:border-indigo-800'}`}>
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-600"
                    checked={plan.skillIds?.includes(skill.id)}
                    onChange={(e) => {
                      const newIds = e.target.checked 
                        ? [...(plan.skillIds || []), skill.id]
                        : (plan.skillIds || []).filter(id => id !== skill.id);
                      setPlan({...plan, skillIds: newIds});
                    }}
                  />
                  <div>
                    <div className="font-semibold text-slate-900 dark:text-white">{skill.label}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{skill.desc}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Bloom’s Taxonomy Focus</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Decide what kind of thinking you want students to do most. For example, ‘Apply’ for problem-solving, ‘Create’ for projects.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {BLOOMS_LEVELS.map(level => {
                const isSelected = plan.bloomsFocus?.includes(level);
                return (
                  <button
                    key={level}
                    onClick={() => {
                      const newLevels = isSelected
                        ? (plan.bloomsFocus || []).filter(l => l !== level)
                        : [...(plan.bloomsFocus || []), level];
                      setPlan({...plan, bloomsFocus: newLevels});
                    }}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-colors border ${isSelected ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700'}`}
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">VARK Differentiated Activities</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Design at least one way for each learning style. For 40+ students, consider 4 stations (one per VARK style) or 2 styles with two groups each, rotating halfway.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {['visual', 'auditory', 'readWrite', 'kinesthetic'].map((type) => {
                const varkPlan = plan.varkActivities?.[type as keyof typeof plan.varkActivities] || { description: '', included: false };
                const titles: Record<string, string> = { visual: 'Visual', auditory: 'Auditory', readWrite: 'Read/Write', kinesthetic: 'Kinesthetic' };
                return (
                  <div key={type} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-slate-800 dark:text-slate-200">{titles[type]}</h4>
                      <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 cursor-pointer">
                        <input 
                          type="checkbox"
                          className="rounded text-indigo-600"
                          checked={varkPlan.included}
                          onChange={e => setPlan({
                            ...plan, 
                            varkActivities: {
                              ...plan.varkActivities,
                              [type]: { ...varkPlan, included: e.target.checked }
                            }
                          })}
                        />
                        Include
                      </label>
                    </div>
                    {varkPlan.included && (
                      <textarea
                        placeholder={`Describe ${titles[type].toLowerCase()} activity...`}
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-3 text-sm text-slate-900 dark:text-white h-24 resize-none focus:ring-2 focus:ring-indigo-500 outline-none"
                        value={varkPlan.description}
                        onChange={e => setPlan({
                          ...plan,
                          varkActivities: {
                            ...plan.varkActivities,
                            [type]: { ...varkPlan, description: e.target.value }
                          }
                        })}
                      />
                    )}
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Class Structure & Timing</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Sketch how the 40–45 minutes will flow. Aim for short, clear blocks with one main skill focus each.</p>
            </div>
            
            <div className="space-y-3">
              {(plan.timeline?.length === 0 ? [
                { title: 'Starter', durationMin: 10, skillIds: [] },
                { title: 'Core Activity', durationMin: 25, skillIds: [] },
                { title: 'Plenary', durationMin: 10, skillIds: [] }
              ] : plan.timeline)?.map((block, idx) => (
                <div key={idx} className="flex gap-4 items-center bg-white dark:bg-slate-900 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="w-20 shrink-0">
                    <input 
                      type="number"
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-2 text-sm text-center"
                      value={block.durationMin}
                      onChange={e => {
                        const newTimeline = [...(plan.timeline || [])];
                        if(!newTimeline[idx]) newTimeline[idx] = block;
                        newTimeline[idx].durationMin = parseInt(e.target.value) || 0;
                        setPlan({...plan, timeline: newTimeline});
                      }}
                    />
                    <div className="text-center text-xs text-slate-500 mt-1">mins</div>
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text"
                      className="w-full bg-transparent border-b border-slate-200 dark:border-slate-800 p-1 text-sm font-semibold text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                      value={block.title}
                      onChange={e => {
                        const newTimeline = [...(plan.timeline || [])];
                        if(!newTimeline[idx]) newTimeline[idx] = block;
                        newTimeline[idx].title = e.target.value;
                        setPlan({...plan, timeline: newTimeline});
                      }}
                      placeholder="Block title..."
                    />
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
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Resources & Materials</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">Pick 2–4 resources max for one lesson. Too many links can overwhelm both you and the class.</p>
            </div>
            <div className="space-y-3">
              {['DIKSHA: Fractions Interactive Module', 'PhET: Build a Fraction', 'NCERT PDF Worksheet'].map((res, i) => (
                 <label key={i} className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-indigo-600 rounded border-slate-300" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{res}</span>
                 </label>
              ))}
            </div>
          </div>
        );
      case 8:
        return (
          <div className="space-y-6">
            <div className="text-center py-4">
              <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Review & Save</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">You can reuse this structure for other units. Next time, start from this plan and tweak.</p>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Focus Skills</span>
                <div className="text-sm text-slate-800 dark:text-slate-200 mt-1">{plan.skillIds?.length || 0} skills selected</div>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">Bloom's Levels</span>
                <div className="flex gap-2 mt-1">
                  {plan.bloomsFocus?.map(b => <span key={b} className="px-2 py-0.5 bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-400 rounded-md text-xs font-medium">{b}</span>)}
                </div>
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">VARK Activities</span>
                <div className="text-sm text-slate-800 dark:text-slate-200 mt-1">
                  {Object.values(plan.varkActivities || {}).filter(v => (v as any).included).length} included
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
              <button 
                onClick={prevStep}
                className="px-5 py-2.5 rounded-xl font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors flex items-center gap-2"
              >
                <ChevronLeft className="w-4 h-4" /> Back
              </button>
              
              {step < 8 ? (
                <button 
                  onClick={nextStep}
                  className="px-5 py-2.5 rounded-xl font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors flex items-center gap-2 shadow-sm"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  onClick={handleSave}
                  className="px-6 py-2.5 rounded-xl font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center gap-2 shadow-sm"
                >
                  <Save className="w-4 h-4" /> Save to My Plans
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
