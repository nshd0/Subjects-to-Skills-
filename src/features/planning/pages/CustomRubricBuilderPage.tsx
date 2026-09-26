import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Target, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  Printer, 
  Trash2, 
  Layers, 
  Sparkles, 
  ArrowLeft, 
  FileText, 
  Copy, 
  ExternalLink,
  HelpCircle,
  RotateCcw,
  BookOpen
} from 'lucide-react';
import { gradesData } from '@/data/grades';
import { subjectMaps } from '@/data/subjectMaps';
import { useCustomRubrics, DEFAULT_MATURITY_LEVELS } from '../useCustomRubrics';
import { CustomRubric, CustomRubricLevels } from '@/types';

export function CustomRubricBuilderPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { rubrics, saveRubric, deleteRubric, resetToSeeds } = useCustomRubrics();

  const prefillSkill = searchParams.get('skill') || '';
  const prefillGrade = searchParams.get('grade') || '';

  // Form State
  const [title, setTitle] = useState('');
  const [gradeId, setGradeId] = useState(prefillGrade);
  const [subjectId, setSubjectId] = useState('');
  const [skillId, setSkillId] = useState('');
  const [skillName, setSkillName] = useState(prefillSkill);
  const [unitTitle, setUnitTitle] = useState('');
  const [assessmentType, setAssessmentType] = useState('Formative Performance Task');
  const [sourceNote, setSourceNote] = useState('');
  const [levels, setLevels] = useState<CustomRubricLevels>({ ...DEFAULT_MATURITY_LEVELS });
  
  // UI & Feedback State
  const [validationError, setValidationError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'builder' | 'saved'>('builder');
  const [selectedPreviewRubric, setSelectedPreviewRubric] = useState<CustomRubric | null>(null);

  // Available subjects based on grade
  const selectedGradeProfile = gradesData.find(g => g.id === gradeId);
  const availableSubjects = selectedGradeProfile ? selectedGradeProfile.cbseSubjects : [];

  // Available skills based on grade and subject
  const availableSkills = React.useMemo(() => {
    if (!gradeId) return [];
    const gradeNum = gradeId.replace('grade-', '');
    const gradeStr = `Grade ${gradeNum}`;
    
    let matched = subjectMaps.filter(m => m.grade === gradeStr || m.grade === gradeNum);
    if (subjectId) {
      const sLow = subjectId.toLowerCase();
      matched = matched.filter(m => {
        const mLow = m.subject.toLowerCase();
        return mLow.includes(sLow) || sLow.includes(mLow);
      });
    }

    const skills: { id: string; label: string; outcome?: string }[] = [];
    const seen = new Set<string>();

    matched.forEach(m => {
      if (m.primarySkill && !seen.has(m.primarySkill)) {
        seen.add(m.primarySkill);
        skills.push({ id: `skill-${m.id}`, label: m.primarySkill, outcome: m.competency });
      }
      m.supportingSkills?.forEach((sup, idx) => {
        if (sup && !seen.has(sup)) {
          seen.add(sup);
          skills.push({ id: `skill-${m.id}-sup-${idx}`, label: sup, outcome: `Supporting skill for ${m.subject}` });
        }
      });
    });

    return skills;
  }, [gradeId, subjectId]);

  // Handle skill selection
  const handleSkillSelect = (selectedId: string) => {
    setSkillId(selectedId);
    const found = availableSkills.find(s => s.id === selectedId);
    if (found) {
      setSkillName(found.label);
      if (!title) {
        setTitle(`${found.label.slice(0, 40)} Rubric`);
      }
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validation
    if (!title.trim()) {
      setValidationError('Please enter a descriptive Rubric Title.');
      return;
    }
    if (!gradeId) {
      setValidationError('You must select a Grade Band to ensure this rubric is curriculum-aligned.');
      return;
    }
    if (!skillName.trim()) {
      setValidationError('You must select or specify a target curriculum skill to prevent unaligned rubrics.');
      return;
    }
    if (
      !levels.emerging.descriptor.trim() ||
      !levels.developing.descriptor.trim() ||
      !levels.proficient.descriptor.trim() ||
      !levels.transfer.descriptor.trim()
    ) {
      setValidationError('All 4 maturity levels (Emerging, Developing, Proficient, Transfer) require descriptive criteria.');
      return;
    }

    const result = saveRubric({
      title: title.trim(),
      skillId: skillId || `custom-skill-${Date.now()}`,
      skillName: skillName.trim(),
      gradeId,
      subjectId: subjectId || 'Cross-Disciplinary',
      unitTitle: unitTitle.trim() || undefined,
      assessmentType,
      sourceNote: sourceNote.trim() || `Teacher-created rubric mapped to ${selectedGradeProfile?.name || 'CBSE Grade'} • 4-Level Maturity Framework`,
      levels
    });

    if (result.success && result.rubric) {
      setSaveSuccess(true);
      setSelectedPreviewRubric(result.rubric);
      setTimeout(() => setSaveSuccess(false), 3000);
    } else {
      setValidationError(result.error || 'Failed to save rubric.');
    }
  };

  const handleResetTemplate = () => {
    setLevels({ ...DEFAULT_MATURITY_LEVELS });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Top Navigation & Breadcrumb */}
        <div className="flex items-center justify-between gap-4 print:hidden">
          <Link
            to="/assess"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Assessment Hub</span>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('builder')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'builder'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              Rubric Builder
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5 ${
                activeTab === 'saved'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
              }`}
            >
              <span>Saved Rubrics</span>
              <span className="px-1.5 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 text-[10px]">
                {rubrics.length}
              </span>
            </button>
          </div>
        </div>

        {/* Header Hero */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm print:border-none print:p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                  Competency Assessment Rubrics
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  4-Level Maturity Scale: Emerging → Transfer
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Target className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Custom Rubric Builder
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Create standardized assessment rubrics beyond pre-built sets. To maintain pedagogical validity, every rubric must map to at least one verified curriculum skill and grade band to prevent orphaned criteria.
              </p>
            </div>

            {selectedPreviewRubric && (
              <button
                onClick={() => window.print()}
                className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 text-slate-700 dark:text-slate-200 font-bold text-xs flex items-center gap-2 transition-colors print:hidden"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Rubric (B&W Optimized)</span>
              </button>
            )}
          </div>
        </div>

        {/* TAB 1: BUILDER */}
        {activeTab === 'builder' && (
          <form onSubmit={handleSave} className="space-y-6">

            {/* Alignment Validator & Status Box */}
            <div className="bg-slate-100 dark:bg-slate-900/60 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  Curriculum Alignment Checks:
                </span>
                <span className={`flex items-center gap-1 font-semibold ${gradeId ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Grade Band Mapped
                </span>
                <span className={`flex items-center gap-1 font-semibold ${skillName.trim() ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Target Skill Mapped
                </span>
                <span className={`flex items-center gap-1 font-semibold ${title.trim() ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Title Defined
                </span>
              </div>
              <span className="text-[11px] text-slate-500">
                Prevents orphaned assessments per NCF-SE guidelines
              </span>
            </div>

            {/* Error Message */}
            {validationError && (
              <div className="p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/60 flex items-start gap-3 text-rose-800 dark:text-rose-200 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">Validation Error:</strong>
                  <span>{validationError}</span>
                </div>
              </div>
            )}

            {/* Success Message */}
            {saveSuccess && (
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-center gap-3 text-emerald-800 dark:text-emerald-200 text-xs sm:text-sm">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Rubric successfully saved! You can now print, export, or attach it to lesson plans.</span>
              </div>
            )}

            {/* Section 1: Curriculum Anchoring */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  1. Curriculum Anchoring & Skill Mapping
                </h3>
                <span className="text-xs text-rose-500 font-semibold">* Required fields</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                
                {/* Rubric Title */}
                <div className="space-y-1.5 md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Rubric Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Algorithmic Flowcharting & Edge-Case Stress Testing"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                {/* Grade Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Target Grade Band <span className="text-rose-500">*</span>
                  </label>
                  <select
                    required
                    value={gradeId}
                    onChange={(e) => {
                      setGradeId(e.target.value);
                      setSubjectId('');
                      setSkillId('');
                      setSkillName('');
                    }}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  >
                    <option value="">Select Grade Level...</option>
                    {gradesData.map(g => (
                      <option key={g.id} value={g.id}>{g.name} ({g.stage} Stage)</option>
                    ))}
                  </select>
                </div>

                {/* Subject Selection */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Subject / Discipline
                  </label>
                  <select
                    value={subjectId}
                    onChange={(e) => {
                      setSubjectId(e.target.value);
                      setSkillId('');
                      setSkillName('');
                    }}
                    disabled={!gradeId}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden disabled:opacity-50"
                  >
                    <option value="">Select Subject (Optional)...</option>
                    {availableSubjects.map(subj => (
                      <option key={subj} value={subj}>{subj}</option>
                    ))}
                    <option value="Computational Thinking & AI">Computational Thinking & AI</option>
                    <option value="Artificial Intelligence (Code 417)">Artificial Intelligence (Code 417)</option>
                    <option value="Cross-Disciplinary">Cross-Disciplinary / Theme</option>
                  </select>
                </div>

                {/* Curriculum Skill Picker */}
                <div className="space-y-1.5 md:col-span-2">
                  <div className="flex items-center justify-between">
                    <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                      Curriculum-Defined Skill <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-[11px] text-slate-500">
                      {availableSkills.length > 0 ? `${availableSkills.length} curriculum skills found` : 'Choose grade to load skills'}
                    </span>
                  </div>

                  {availableSkills.length > 0 ? (
                    <select
                      value={skillId}
                      onChange={(e) => handleSkillSelect(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                    >
                      <option value="">Select a verified curriculum skill...</option>
                      {availableSkills.map(s => (
                        <option key={s.id} value={s.id}>{s.label}</option>
                      ))}
                    </select>
                  ) : null}

                  {/* Or Manual Custom Skill Name */}
                  <input
                    type="text"
                    required
                    placeholder="Or enter specific skill competency (e.g. Statistical Confusion Matrix Analysis)"
                    value={skillName}
                    onChange={(e) => {
                      setSkillName(e.target.value);
                      if (!skillId) setSkillId(`skill-custom-${Date.now()}`);
                    }}
                    className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs mt-2 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>

                {/* Assessment Type & Unit */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Assessment Format
                  </label>
                  <select
                    value={assessmentType}
                    onChange={(e) => setAssessmentType(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  >
                    <option value="Formative Performance Task">Formative Performance Task</option>
                    <option value="CBSE Practical Board Lab Task">CBSE Practical Board Lab Task (50 Marks)</option>
                    <option value="Project Viva & Portfolio">Project Viva & Portfolio</option>
                    <option value="Authentic Inquiry / Field Audit">Authentic Inquiry / Field Audit</option>
                    <option value="Peer Review / Restorative Assessment">Peer Review / Restorative Assessment</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Associated Curriculum Unit (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Unit 3: Machine Perception and Logic Gates"
                    value={unitTitle}
                    onChange={(e) => setUnitTitle(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Four-Level Maturity Matrix */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    2. Four-Level Maturity Scale Criteria
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Define observable student behaviors for each stage of mastery.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleResetTemplate}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset to Standard Template
                </button>
              </div>

              <div className="space-y-5">
                
                {/* Level 1: Emerging */}
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border border-amber-300">
                      Level 1 · Emerging
                    </span>
                    <span className="text-xs text-slate-500 font-mono">1 Point</span>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe behavior when student recalls fragments with heavy scaffolding..."
                    value={levels.emerging.descriptor}
                    onChange={(e) => setLevels({
                      ...levels,
                      emerging: { ...levels.emerging, descriptor: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:outline-hidden"
                  />
                </div>

                {/* Level 2: Developing */}
                <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-900/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 border border-blue-300">
                      Level 2 · Developing
                    </span>
                    <span className="text-xs text-slate-500 font-mono">2 Points</span>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe behavior in routine familiar contexts with minor procedural errors..."
                    value={levels.developing.descriptor}
                    onChange={(e) => setLevels({
                      ...levels,
                      developing: { ...levels.developing, descriptor: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-hidden"
                  />
                </div>

                {/* Level 3: Proficient */}
                <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200/80 dark:border-indigo-900/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-300">
                      Level 3 · Proficient (CBSE Target Benchmark)
                    </span>
                    <span className="text-xs text-slate-500 font-mono">3 Points</span>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe expected grade-level mastery: executes accurately and independently..."
                    value={levels.proficient.descriptor}
                    onChange={(e) => setLevels({
                      ...levels,
                      proficient: { ...levels.proficient, descriptor: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden font-medium"
                  />
                </div>

                {/* Level 4: Transfer */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-300">
                      Level 4 · Transfer (Synthesis & Extension)
                    </span>
                    <span className="text-xs text-slate-500 font-mono">4 Points</span>
                  </div>
                  <textarea
                    rows={2}
                    required
                    placeholder="Describe advanced transfer: applies concept to novel scenarios, audits edge cases, coaches peers..."
                    value={levels.transfer.descriptor}
                    onChange={(e) => setLevels({
                      ...levels,
                      transfer: { ...levels.transfer, descriptor: e.target.value }
                    })}
                    className="w-full p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>

              </div>

              {/* Source Note */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1">
                  Pedagogical Citation / Source Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Derived from CBSE Middle Stage CT&AI Strand 1 and NCF-SE 2023 C-7.2"
                  value={sourceNote}
                  onChange={(e) => setSourceNote(e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-between gap-4 pt-2">
              <button
                type="button"
                onClick={() => navigate('/assess')}
                className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Aligned Rubric</span>
              </button>
            </div>
          </form>
        )}

        {/* TAB 2: SAVED RUBRICS */}
        {activeTab === 'saved' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                All Custom & Seed Rubrics ({rubrics.length})
              </h3>
              <button
                onClick={resetToSeeds}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Reset sample rubrics
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rubrics.map(rubric => {
                const gradeName = gradesData.find(g => g.id === rubric.gradeId)?.name || rubric.gradeId;
                return (
                  <div
                    key={rubric.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200">
                          {gradeName}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                          {rubric.subjectId}
                        </span>
                        <span className="text-[11px] text-slate-400 ml-auto">
                          {rubric.assessmentType}
                        </span>
                      </div>

                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {rubric.title}
                      </h4>

                      <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-1">
                        <Target className="w-3.5 h-3.5 shrink-0" />
                        <span>Mapped Skill: {rubric.skillName}</span>
                      </div>

                      {/* Proficient descriptor snippet */}
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                          Benchmark (Level 3 Proficient):
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 line-clamp-3">
                          {rubric.levels.proficient.descriptor}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedPreviewRubric(rubric)}
                        className="px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Full Matrix</span>
                      </button>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => {
                            setSelectedPreviewRubric(rubric);
                            setTimeout(() => window.print(), 100);
                          }}
                          className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                          title="Print Rubric"
                        >
                          <Printer className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => deleteRubric(rubric.id)}
                          className="p-1.5 text-rose-500 hover:text-rose-700 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/40"
                          title="Delete Rubric"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MODAL / PRINT PREVIEW: FULL 4-LEVEL RUBRIC TABLE */}
        {selectedPreviewRubric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs print:static print:p-0 print:bg-white">
            <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-4xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl print:border-none print:shadow-none print:max-w-full print:p-0">
              
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-100 text-indigo-800 border border-indigo-200">
                      {gradesData.find(g => g.id === selectedPreviewRubric.gradeId)?.name || selectedPreviewRubric.gradeId}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {selectedPreviewRubric.subjectId}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedPreviewRubric.title}
                  </h3>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                    Mapped Skill: {selectedPreviewRubric.skillName}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 print:hidden">
                  <button
                    onClick={() => window.print()}
                    className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span>Print</span>
                  </button>
                  <button
                    onClick={() => setSelectedPreviewRubric(null)}
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Four-Column Maturity Table (Print-Optimized with clear borders for B&W) */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border border-slate-300 dark:border-slate-700 border-collapse">
                  <thead>
                    <tr className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-b border-slate-300 dark:border-slate-700">
                      <th className="p-3.5 w-1/4 border-r border-slate-300 dark:border-slate-700">
                        <div className="font-extrabold text-sm">Level 1: Emerging</div>
                        <div className="text-[10px] text-slate-500">Foundational support needed</div>
                      </th>
                      <th className="p-3.5 w-1/4 border-r border-slate-300 dark:border-slate-700">
                        <div className="font-extrabold text-sm">Level 2: Developing</div>
                        <div className="text-[10px] text-slate-500">Routine execution with minor errors</div>
                      </th>
                      <th className="p-3.5 w-1/4 border-r border-slate-300 dark:border-slate-700 bg-indigo-50/60 dark:bg-indigo-950/40">
                        <div className="font-extrabold text-sm text-indigo-900 dark:text-indigo-300">Level 3: Proficient</div>
                        <div className="text-[10px] text-indigo-700 dark:text-indigo-400 font-semibold">CBSE Target Benchmark</div>
                      </th>
                      <th className="p-3.5 w-1/4">
                        <div className="font-extrabold text-sm">Level 4: Transfer</div>
                        <div className="text-[10px] text-slate-500">Novel synthesis & extension</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700 dark:text-slate-300">
                    <tr className="align-top">
                      <td className="p-3.5 border-r border-slate-300 dark:border-slate-700 leading-relaxed">
                        {selectedPreviewRubric.levels.emerging.descriptor}
                      </td>
                      <td className="p-3.5 border-r border-slate-300 dark:border-slate-700 leading-relaxed">
                        {selectedPreviewRubric.levels.developing.descriptor}
                      </td>
                      <td className="p-3.5 border-r border-slate-300 dark:border-slate-700 leading-relaxed bg-indigo-50/20 dark:bg-indigo-950/20 font-medium">
                        {selectedPreviewRubric.levels.proficient.descriptor}
                      </td>
                      <td className="p-3.5 leading-relaxed">
                        {selectedPreviewRubric.levels.transfer.descriptor}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Source & Citation Footer */}
              <div className="pt-2 text-[11px] text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800">
                <p><strong>Pedagogical Source & Policy Alignment:</strong> {selectedPreviewRubric.sourceNote || 'Custom rubric constructed using Subjects2Skills 4-Level Competency Scale aligned to NCF-SE 2023.'}</p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default CustomRubricBuilderPage;
