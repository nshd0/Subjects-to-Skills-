import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  Plus, 
  Trash2, 
  Sparkles, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Compass, 
  BookOpen,
  Info
} from 'lucide-react';
import { ThemeBundle, ThemeCrossSubjectConnection } from '@/types';

interface CreateThemeBundleModalProps {
  isOpen: boolean;
  onClose: () => void;
  monthlySubmissionsCount: number;
  maxMonthlySubmissions: number;
  onSubmit: (bundle: ThemeBundle) => { success: boolean; error?: string };
}

// Preset verified AI curriculum suggestions that teachers can inspect and confirm
const AI_SUGGESTIONS_PRESETS: Record<string, {
  tagline: string;
  recommendedHours: number;
  unifyingSkills: string[];
  connections: ThemeCrossSubjectConnection[];
  sources: string[];
  flagship: { title: string; drivingQuestion: string; studentDeliverable: string; communityEngagement: string };
}> = {
  'water-security': {
    tagline: 'Analyzing watershed balances, local ground water depletion, and community conservation mechanisms.',
    recommendedHours: 24,
    unifyingSkills: ['Watershed Hydrology Sampling', 'Aquifer Depletion Graphing', 'Panchayat Water Budgeting', 'Community Surveying'],
    connections: [
      {
        subject: 'Science',
        coreConcepts: ['Water table permeability', 'Percolation rates in diverse soils', 'Bacterial water contamination testing'],
        competencyMapped: 'Analyze geological percolation differences between sand, clay, and loam soils to model groundwater recharge.',
        ncfCitation: 'NCF-SE 2023, Part C, Middle Stage Science, Ch. Water: A Precious Resource & NCERT Class 7 Science Ch. 16.',
        classroomActivity: 'Measure percolation rates in mL/minute using cut plastic bottles and local school ground soil samples.'
      },
      {
        subject: 'Mathematics',
        coreConcepts: ['Liters-per-capita daily consumption calculation', 'Linear rate equations', 'Volume integration of wells'],
        competencyMapped: 'Calculate the total daily water footprint of 50 student households and determine required recharge pit dimensions.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.3: Real-World Numerical Problem Solving.',
        classroomActivity: 'Model a cylindrical rainwater harvesting tank calculation using volume = πr²h formulas.'
      },
      {
        subject: 'Social Science',
        coreConcepts: ['Traditional Indian water bodies (Johads, Baolis, Talabs)', 'Inter-state water sharing treaties', 'Right to clean water'],
        competencyMapped: 'Evaluate historical indigenous community water governance systems compared to centralized municipal piped supply.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.5: Social Science & NCERT Class 8 Geography Ch. 2.',
        classroomActivity: 'Construct a historical timeline of regional stepwells and conduct an interview with water tanker drivers.'
      }
    ],
    sources: [
      'NCF-SE 2023, Part C: Science, Social Science & Mathematics Curricula',
      'NCERT Class 7 Science: Chapter 16 (Water: A Precious Resource)',
      'NCERT Class 8 Geography: Chapter 2 (Land, Soil, Water Resources)',
      'Jal Shakti Ministry: National Water Mission Framework for Schools'
    ],
    flagship: {
      title: 'The Neighborhood Water Balance Audit & Action Charter',
      drivingQuestion: 'How can our ward transition from reliance on private water tankers to self-sustaining rainwater recharge?',
      studentDeliverable: 'A scale map of neighborhood recharge pits with soil percolation tests and an oral petition to the local Ward Counselor.',
      communityEngagement: 'Presenting findings at the local Resident Welfare Association (RWA) or Gram Sabha.'
    }
  },
  'stem-energy': {
    tagline: 'Investigating solar irradiation, domestic energy dissipation, and renewable microgrids.',
    recommendedHours: 20,
    unifyingSkills: ['Photovoltaic Watt-Hour Yield Calculations', 'Thermal Insulation Auditing', 'Life-Cycle Cost Modeling'],
    connections: [
      {
        subject: 'Science',
        coreConcepts: ['Photovoltaic effect', 'Heat convection and radiative transfer', 'Energy conservation law'],
        competencyMapped: 'Demonstrate how solar thermal collectors capture and retain solar energy using varied absorber surfaces.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.4: Middle Stage Science & NCERT Class 7 Science Ch. 4 (Heat).',
        classroomActivity: 'Build cardboard solar ovens with black foil linings and measure temperature rise over 60 minutes.'
      },
      {
        subject: 'Mathematics',
        coreConcepts: ['Kilowatt-hour multiplication', 'Percentage efficiency', 'Electricity tariff slab computations'],
        competencyMapped: 'Compute household monthly electrical energy consumption across seasonal peak loads using actual utility bills.',
        ncfCitation: 'NCF-SE 2023, Part C, Section 4.3: Mathematics, Data Handling & Proportions.',
        classroomActivity: 'Audit 5 domestic appliances to calculate payback period for replacing incandescent lamps with 9W LEDs.'
      }
    ],
    sources: [
      'NCF-SE 2023, Part C: Sections 4.3 (Mathematics) & 4.4 (Science)',
      'NCERT Class 7 Science: Chapter 4 (Heat)',
      'NCERT Class 8 Science: Chapter 14 (Chemical Effects of Electric Current)'
    ],
    flagship: {
      title: 'The Net-Zero Classroom Energy Challenge',
      drivingQuestion: 'How can our classroom reduce its peak electricity consumption by 35% using passive solar architecture?',
      studentDeliverable: 'A physical cardboard passive cooling prototype with architectural airflow analysis.',
      communityEngagement: 'Sharing energy-saving audit checklists with parents and school administration.'
    }
  }
};

export function CreateThemeBundleModal({ 
  isOpen, 
  onClose, 
  monthlySubmissionsCount, 
  maxMonthlySubmissions, 
  onSubmit 
}: CreateThemeBundleModalProps) {
  const [step, setStep] = useState<number>(1);
  const [title, setTitle] = useState('');
  const [themeCategory, setThemeCategory] = useState<string>('climate');
  const [gradeBand, setGradeBand] = useState<string>('Grades 6–8 (Middle Stage)');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [recommendedHours, setRecommendedHours] = useState<number>(24);
  const [disciplines, setDisciplines] = useState<string[]>(['Science', 'Mathematics']);
  const [newDisciplineInput, setNewDisciplineInput] = useState('');

  // Connections (at least 2 required)
  const [connections, setConnections] = useState<ThemeCrossSubjectConnection[]>([
    {
      subject: 'Science',
      coreConcepts: ['Biological ecosystems', 'Matter cycles'],
      competencyMapped: 'Analyze ecological relationships using observable field sampling.',
      ncfCitation: 'NCF-SE 2023, Part C, Section 4.4: Middle Stage Science.',
      classroomActivity: 'Conduct local quadrat sampling across native soil patches.'
    },
    {
      subject: 'Mathematics',
      coreConcepts: ['Frequency distribution', 'Ratio and proportions'],
      competencyMapped: 'Formulate mathematical models to quantify environmental indicators.',
      ncfCitation: 'NCF-SE 2023, Part C, Section 4.3: Mathematics Data Handling.',
      classroomActivity: 'Construct frequency histograms of collected field specimens.'
    }
  ]);

  // Flagship Challenge
  const [flagshipTitle, setFlagshipTitle] = useState('');
  const [drivingQuestion, setDrivingQuestion] = useState('');
  const [studentDeliverable, setStudentDeliverable] = useState('');
  const [communityEngagement, setCommunityEngagement] = useState('');

  // Unifying Skills & Sources
  const [unifyingSkillsText, setUnifyingSkillsText] = useState('Empirical Field Sampling, Quantitative Modeling, Interdisciplinary Inquiry');
  const [sourcesText, setSourcesText] = useState('NCF-SE 2023, Part C: Middle Stage Curricula\nNCERT Class 7 Science & Class 8 Mathematics');

  // Author & Attribution
  const [authorName, setAuthorName] = useState('');
  const [schoolName, setSchoolName] = useState('');
  const [displaySchool, setDisplaySchool] = useState(true);
  const [authorEmail, setAuthorEmail] = useState('');
  const [isVerifiedEducator, setIsVerifiedEducator] = useState(true);
  const [agreeToCcBySa, setAgreeToCcBySa] = useState(false);

  // AI Assist State
  const [showAiAssist, setShowAiAssist] = useState(false);
  const [pendingAiPresetKey, setPendingAiPresetKey] = useState<'water-security' | 'stem-energy'>('water-security');
  const [aiAppliedNotification, setAiAppliedNotification] = useState<string | null>(null);

  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const isRateLimited = monthlySubmissionsCount >= maxMonthlySubmissions;

  const handleAddDiscipline = () => {
    if (newDisciplineInput.trim() && !disciplines.includes(newDisciplineInput.trim())) {
      setDisciplines([...disciplines, newDisciplineInput.trim()]);
      setNewDisciplineInput('');
    }
  };

  const handleRemoveDiscipline = (disc: string) => {
    if (disciplines.length > 2) {
      setDisciplines(disciplines.filter(d => d !== disc));
    }
  };

  const handleUpdateConnection = (index: number, field: keyof ThemeCrossSubjectConnection, val: any) => {
    const updated = [...connections];
    updated[index] = { ...updated[index], [field]: val };
    setConnections(updated);
  };

  const handleAddConnection = () => {
    setConnections([
      ...connections,
      {
        subject: disciplines[connections.length % disciplines.length] || 'Social Science',
        coreConcepts: ['Concept 1', 'Concept 2'],
        competencyMapped: 'NCF-SE competency description...',
        ncfCitation: 'NCF-SE 2023, Part C citation...',
        classroomActivity: 'Collaborative inquiry activity...'
      }
    ]);
  };

  const handleRemoveConnection = (index: number) => {
    if (connections.length > 2) {
      setConnections(connections.filter((_, idx) => idx !== index));
    }
  };

  // AI Curriculum Assist: Applies suggestions but clearly marks them as Suggested requiring teacher confirmation
  const handleApplyAiSuggestion = () => {
    const preset = AI_SUGGESTIONS_PRESETS[pendingAiPresetKey];
    if (!preset) return;

    if (!title) {
      setTitle(pendingAiPresetKey === 'water-security' ? 'Watershed Stewardship & Groundwater Resilience' : 'Clean Energy Transitions & Solar Microgrids');
    }
    setThemeCategory(pendingAiPresetKey);
    setTagline(preset.tagline);
    setRecommendedHours(preset.recommendedHours);
    setUnifyingSkillsText(preset.unifyingSkills.join(', '));
    setConnections(preset.connections);
    setSourcesText(preset.sources.join('\n'));
    setFlagshipTitle(preset.flagship.title);
    setDrivingQuestion(preset.flagship.drivingQuestion);
    setStudentDeliverable(preset.flagship.studentDeliverable);
    setCommunityEngagement(preset.flagship.communityEngagement);
    setShowAiAssist(false);
    setAiAppliedNotification('Curriculum Assist suggestions loaded! Please review, modify, and confirm before saving.');
    setTimeout(() => setAiAppliedNotification(null), 5000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !tagline.trim() || !description.trim()) {
      setErrorMsg('Please complete the title, tagline, and overview description.');
      return;
    }
    if (disciplines.length < 2) {
      setErrorMsg('Theme bundles must span at least 2 distinct subjects.');
      return;
    }
    if (connections.length < 2) {
      setErrorMsg('Please provide at least 2 cross-subject curriculum connections with verifiable citations.');
      return;
    }
    for (const conn of connections) {
      if (!conn.ncfCitation || conn.ncfCitation.trim().length < 5) {
        setErrorMsg(`Citation required for ${conn.subject}: All claims must cite official NCF-SE, NCERT, or SCERT documents.`);
        return;
      }
    }
    if (!authorName.trim()) {
      setErrorMsg('Author name is required for CC BY-SA 4.0 attribution.');
      return;
    }
    if (!agreeToCcBySa) {
      setErrorMsg('You must agree to publish this interdisciplinary blueprint under Creative Commons Attribution-ShareAlike 4.0 (CC BY-SA 4.0).');
      return;
    }

    const unifyingSkills = unifyingSkillsText.split(',').map(s => s.trim()).filter(Boolean);
    const sources = sourcesText.split('\n').map(s => s.trim()).filter(Boolean);

    const newBundle: ThemeBundle = {
      id: `theme-custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      title: title.trim(),
      themeCategory,
      tagline: tagline.trim(),
      description: description.trim(),
      gradeBand,
      recommendedHours,
      disciplines,
      unifyingSkills,
      crossSubjectConnections: connections,
      flagshipChallenge: {
        title: flagshipTitle.trim() || 'Culminating Interdisciplinary Challenge',
        drivingQuestion: drivingQuestion.trim() || 'How can multi-subject inquiry solve this real-world dilemma?',
        studentDeliverable: studentDeliverable.trim() || 'A student-created blueprint and public presentation.',
        communityEngagement: communityEngagement.trim() || 'Showcase with local community stakeholders.'
      },
      sources,
      status: 'in-review',
      author: {
        id: `usr-${Date.now()}`,
        name: authorName.trim(),
        schoolName: schoolName.trim() || undefined,
        displaySchool,
        isVerifiedEducator,
        verificationType: 'school-email',
        email: authorEmail.trim() || undefined
      },
      license: 'CC BY-SA 4.0',
      version: 'v1.0.0-rc1',
      versionHistory: [
        {
          version: 'v1.0.0-rc1',
          date: new Date().toISOString().split('T')[0],
          authorName: authorName.trim(),
          summary: 'Initial community submission submitted for peer educator review.'
        }
      ],
      peerReviews: [],
      peerReviewedBadge: false,
      communityFeedback: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    const res = onSubmit(newBundle);
    if (!res.success) {
      setErrorMsg(res.error || 'Failed to submit bundle.');
      return;
    }

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 2400);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSuccess ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Theme Bundle Submitted to Peer Review!
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-lg mx-auto leading-relaxed">
                Your interdisciplinary blueprint has entered the verified educator review queue. It will undergo review against Curriculum Alignment, Classroom Usability, Source Verification, and Accessibility standards.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Header */}
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300">
                      Co-Create & Share (Phase 2)
                    </span>
                    <span className="text-xs text-slate-500">
                      CC BY-SA 4.0 Attribution
                    </span>
                  </div>
                  {/* Rate Limit Indicator */}
                  <div className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    Monthly Quota: <span className="font-bold text-indigo-600 dark:text-indigo-400">{monthlySubmissionsCount} / {maxMonthlySubmissions}</span> used
                  </div>
                </div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-2 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-indigo-600" />
                  Co-Create Interdisciplinary Theme Bundle
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  Connect 2+ subjects around authentic inquiries. All claims must cite official NCF-SE 2023 or NCERT learning outcomes.
                </p>
              </div>

              {/* AI Curriculum Assist Notification */}
              {aiAppliedNotification && (
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{aiAppliedNotification}</span>
                </div>
              )}

              {/* AI Curriculum Assist Drawer Button */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/30 border border-indigo-200/80 dark:border-indigo-900/60">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-indigo-950 dark:text-indigo-200 block">
                      Curriculum Assist (AI-Assisted Suggestions)
                    </span>
                    <span className="text-[11px] text-indigo-800/80 dark:text-indigo-300/80">
                      Need inspiration? Pre-populate with verified NCF-SE Middle Stage inquiry templates.
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowAiAssist(!showAiAssist)}
                  className="px-3 py-1 rounded-lg bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-700 transition-colors shadow-xs"
                >
                  {showAiAssist ? 'Hide Assist' : 'View Suggestions'}
                </button>
              </div>

              {showAiAssist && (
                <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-dashed border-indigo-300 dark:border-indigo-800 space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                    Choose Curriculum Template:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPendingAiPresetKey('water-security')}
                      className={`p-3 rounded-xl text-left border transition-colors ${
                        pendingAiPresetKey === 'water-security'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Watershed & Groundwater Resilience</span>
                      <span className="text-[11px] text-slate-500 block mt-1">Science (Hydrology) + Math (Linear Rates) + Social Science (Panchayat water rights)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPendingAiPresetKey('stem-energy')}
                      className={`p-3 rounded-xl text-left border transition-colors ${
                        pendingAiPresetKey === 'stem-energy'
                          ? 'border-indigo-600 bg-indigo-50 dark:bg-indigo-950/60'
                          : 'border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold text-slate-900 dark:text-white block">Clean Energy Transitions & Solar Tech</span>
                      <span className="text-[11px] text-slate-500 block mt-1">Science (Heat/Solar) + Math (kWh calculations) + Vocational</span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-amber-700 dark:text-amber-300 font-medium">
                      Note: You must review and confirm all suggested outcomes before saving.
                    </span>
                    <button
                      type="button"
                      onClick={handleApplyAiSuggestion}
                      className="px-3.5 py-1.5 rounded-lg bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      Apply Template to Form
                    </button>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {isRateLimited && (
                <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-xs text-amber-800 dark:text-amber-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>
                    Monthly rate limit reached (5 of 5 submitted this month). You cannot submit additional bundles until next month.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Core Metadata */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    1. Core Theme Blueprint
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Theme Title <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Watershed Stewardship & Rural Groundwater Action"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        required
                        disabled={isRateLimited}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Theme Category
                      </label>
                      <select
                        value={themeCategory}
                        onChange={(e) => setThemeCategory(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      >
                        <option value="climate">Climate & Ecology</option>
                        <option value="heritage">Heritage & Lok Vidya</option>
                        <option value="data-ethics">Data, AI & Civic Ethics</option>
                        <option value="water-security">Water Security & Watersheds</option>
                        <option value="stem-energy">Clean Energy & Microgrids</option>
                        <option value="health-wellness">Public Health & Nutrition</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Grade Band
                      </label>
                      <select
                        value={gradeBand}
                        onChange={(e) => setGradeBand(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      >
                        <option value="Grades 6–8 (Middle Stage)">Grades 6–8 (Middle Stage)</option>
                        <option value="Grades 3–5 (Preparatory Stage)">Grades 3–5 (Preparatory Stage)</option>
                        <option value="Grades 9–10 (Secondary Stage)">Grades 9–10 (Secondary Stage)</option>
                        <option value="Grades 11–12 (Higher Secondary)">Grades 11–12 (Higher Secondary)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Recommended Duration (Hours)
                      </label>
                      <input
                        type="number"
                        min={10}
                        max={60}
                        value={recommendedHours}
                        onChange={(e) => setRecommendedHours(Number(e.target.value))}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Tagline (One-sentence hook) <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Investigating aquifer depletion, rainwater recharge geometry, and panchayat water rights."
                      value={tagline}
                      onChange={(e) => setTagline(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                      required
                      disabled={isRateLimited}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Description <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Detailed overview of how this unit connects multiple subjects into a coherent real-world inquiry..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                      required
                      disabled={isRateLimited}
                    />
                  </div>

                  {/* Disciplines */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Contributing Disciplines (Minimum 2 required) <span className="text-rose-500">*</span>
                    </label>
                    <div className="flex flex-wrap items-center gap-1.5 mb-2">
                      {disciplines.map((d) => (
                        <span 
                          key={d}
                          className="px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 text-xs font-medium border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5"
                        >
                          {d}
                          {disciplines.length > 2 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveDiscipline(d)}
                              className="text-indigo-400 hover:text-indigo-600"
                              disabled={isRateLimited}
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Add subject (e.g. Social Science, Art, Technology)"
                        value={newDisciplineInput}
                        onChange={(e) => setNewDisciplineInput(e.target.value)}
                        className="text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200 flex-1"
                        disabled={isRateLimited}
                      />
                      <button
                        type="button"
                        onClick={handleAddDiscipline}
                        className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-semibold hover:bg-slate-100 dark:hover:bg-slate-800"
                        disabled={isRateLimited}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                {/* 2. Cross-Subject Connections with Source Citations */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    <div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        2. Cross-Subject Connections (Citations Required)
                      </h3>
                      <p className="text-[11px] text-slate-500">Each connection must cite specific NCF-SE or NCERT/SCERT outcomes</p>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddConnection}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 hover:underline"
                      disabled={isRateLimited}
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Subject Connection
                    </button>
                  </div>

                  {connections.map((conn, idx) => (
                    <div 
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300">
                          Subject #{idx + 1}:
                        </span>
                        {connections.length > 2 && (
                          <button
                            type="button"
                            onClick={() => handleRemoveConnection(idx)}
                            className="text-xs text-rose-500 hover:underline flex items-center gap-1"
                            disabled={isRateLimited}
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        )}
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Subject
                          </label>
                          <input
                            type="text"
                            value={conn.subject}
                            onChange={(e) => handleUpdateConnection(idx, 'subject', e.target.value)}
                            className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                            required
                            disabled={isRateLimited}
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Core Concepts (Comma separated)
                          </label>
                          <input
                            type="text"
                            value={conn.coreConcepts.join(', ')}
                            onChange={(e) => handleUpdateConnection(idx, 'coreConcepts', e.target.value.split(',').map(s => s.trim()))}
                            className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                            required
                            disabled={isRateLimited}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Mapped Competency
                        </label>
                        <input
                          type="text"
                          value={conn.competencyMapped}
                          onChange={(e) => handleUpdateConnection(idx, 'competencyMapped', e.target.value)}
                          className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                          required
                          disabled={isRateLimited}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Official Curriculum Source Citation <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. NCF-SE 2023, Part C, Section 4.4 & NCERT Class 7 Science Ch. 16, p. 197"
                          value={conn.ncfCitation}
                          onChange={(e) => handleUpdateConnection(idx, 'ncfCitation', e.target.value)}
                          className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                          required
                          disabled={isRateLimited}
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Classroom / Field Activity
                        </label>
                        <input
                          type="text"
                          value={conn.classroomActivity}
                          onChange={(e) => handleUpdateConnection(idx, 'classroomActivity', e.target.value)}
                          className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                          required
                          disabled={isRateLimited}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* 3. Flagship Challenge */}
                <div className="space-y-3">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-100 dark:border-slate-800 pb-1.5">
                    3. Culminating Flagship Challenge
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Challenge Title
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. The Campus Water Resilience Blueprint"
                        value={flagshipTitle}
                        onChange={(e) => setFlagshipTitle(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Driving Inquiry Question
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. How can our school harvest 100% of its rooftop monsoon runoff?"
                        value={drivingQuestion}
                        onChange={(e) => setDrivingQuestion(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Tangible Student Deliverable
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Architectural catchment blueprint and calibrated precipitation charts"
                        value={studentDeliverable}
                        onChange={(e) => setStudentDeliverable(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Community / Audience Engagement
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Presentation to local water board engineers or Gram Panchayat"
                        value={communityEngagement}
                        onChange={(e) => setCommunityEngagement(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Author Attribution & CC BY-SA 4.0 Licensing */}
                <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    4. Author Attribution & Open Licensing (Mandatory)
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Author Name (for public credit) <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dr. Sudha Raman"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        required
                        disabled={isRateLimited}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        School / Institution (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Kendriya Vidyalaya No. 1, Kochi"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        School Email (for verified educator badge)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. teacher@kvsedu.in"
                        value={authorEmail}
                        onChange={(e) => setAuthorEmail(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                        disabled={isRateLimited}
                      />
                    </div>
                    <div className="space-y-2 pt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={displaySchool}
                          onChange={(e) => setDisplaySchool(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 rounded-sm"
                          disabled={isRateLimited}
                        />
                        <span className="text-xs text-slate-700 dark:text-slate-300">
                          Display school name publicly on published bundle
                        </span>
                      </label>

                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={isVerifiedEducator}
                          onChange={(e) => setIsVerifiedEducator(e.target.checked)}
                          className="w-4 h-4 text-indigo-600 rounded-sm"
                          disabled={isRateLimited}
                        />
                        <span className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                          Request "Verified Educator" badge (verified via institutional email)
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Mandatory CC BY-SA 4.0 */}
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700/60">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreeToCcBySa}
                        onChange={(e) => setAgreeToCcBySa(e.target.checked)}
                        className="w-4 h-4 text-indigo-600 rounded-sm mt-0.5"
                        required
                        disabled={isRateLimited}
                      />
                      <div className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong>Open Educational Resource Licensing:</strong> I agree to license this theme bundle under{' '}
                        <span className="text-indigo-600 dark:text-indigo-400 font-semibold underline">
                          Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
                        </span>. I affirm that all curriculum statements cite verifiable public educational documents and that I have right to share this co-created work.
                      </div>
                    </label>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Will be queued for 2-educator peer review
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isRateLimited}
                      className={`px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm transition-colors ${
                        isRateLimited
                          ? 'bg-slate-300 dark:bg-slate-800 text-slate-500 cursor-not-allowed'
                          : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}
                    >
                      <Send className="w-4 h-4" />
                      Submit to Peer Review Queue
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
