import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  Filter, 
  Plus, 
  Search, 
  Layers, 
  CheckCircle2, 
  Compass, 
  FileText,
  Building2,
  ChevronRight,
  Info,
  Languages,
  HardDrive,
  Download
} from 'lucide-react';
import { useThemeBundlesStorage } from '@/features/planning/useThemeBundlesStorage';
import { STATE_BOARD_OPTIONS } from '@/data/stateAlignments';
import { SuggestAlignmentModal } from '@/features/planning/components/SuggestAlignmentModal';
import { subjectMaps } from '@/data/subjectMaps';
import { SubjectSkillMap, StateTextbookAlignment } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';
import { useOfflineVault } from '@/features/offline/useOfflineVault';

export function StateAlignmentsPage() {
  const { alignments, submitAlignmentSuggestion } = useThemeBundlesStorage();
  const { currentLanguage, setLanguage, languages, t } = useLanguage();
  const { saveToOfflineVault, isSavedInVault } = useOfflineVault();

  const [selectedState, setSelectedState] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedStage, setSelectedStage] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Suggest Alignment Modal State
  const [isSuggestModalOpen, setIsSuggestModalOpen] = useState(false);
  const [selectedSkillForSuggest, setSelectedSkillForSuggest] = useState<SubjectSkillMap | null>(null);

  // Available grade options covering all stages Pre-K to Grade 12
  const grades = [
    'All Grades',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  const stages = [
    { id: 'all', label: 'All NCF Stages' },
    { id: 'foundational', label: 'Foundational (Pre-K–2)' },
    { id: 'preparatory', label: 'Preparatory (Gr 3–5)' },
    { id: 'middle', label: 'Middle (Gr 6–8)' },
    { id: 'secondary', label: 'Secondary (Gr 9–12)' }
  ];

  const subjects = [
    'All Subjects',
    'Mathematics',
    'Science',
    'General Science',
    'Basic Science',
    'Physical Science',
    'Biological Science',
    'Environmental Studies',
    'Social Science',
    'Language / Literacy'
  ];

  const filteredAlignments = useMemo(() => {
    return alignments.filter(align => {
      if (selectedState !== 'all' && align.stateCode !== selectedState) return false;
      if (selectedGrade !== 'all' && selectedGrade !== 'All Grades' && align.grade !== selectedGrade) return false;
      if (selectedStage !== 'all' && align.stageId && align.stageId !== selectedStage) return false;
      if (selectedSubject !== 'all' && selectedSubject !== 'All Subjects') {
        const matchesSubject = align.subject.toLowerCase().includes(selectedSubject.toLowerCase());
        if (!matchesSubject) return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesQuery = 
          align.chapterTitle.toLowerCase().includes(query) ||
          align.textbookTitle.toLowerCase().includes(query) ||
          align.bridgingNote.toLowerCase().includes(query) ||
          align.sourceCitation.toLowerCase().includes(query) ||
          (align.stateCompetencyCode && align.stateCompetencyCode.toLowerCase().includes(query)) ||
          (align.stateLearningOutcome && align.stateLearningOutcome.toLowerCase().includes(query));
        if (!matchesQuery) return false;
      }
      return true;
    });
  }, [alignments, selectedState, selectedGrade, selectedStage, selectedSubject, searchQuery]);

  const handleOpenSuggestModal = (skillId?: string) => {
    const targetSkill = skillId 
      ? subjectMaps.find(s => s.id === skillId) || subjectMaps[0]
      : subjectMaps.find(s => s.grade === 'Grade 8' && s.subject === 'Science') || subjectMaps[0];
    setSelectedSkillForSuggest(targetSkill);
    setIsSuggestModalOpen(true);
  };

  const handleSaveToVault = (item: StateTextbookAlignment) => {
    saveToOfflineVault({
      id: `vault-align-${item.id}`,
      type: 'state-alignment',
      title: `${item.stateName}: ${item.chapterTitle} (${item.grade})`,
      grade: item.grade,
      subject: item.subject,
      payload: item
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Version 0.8: Full State Board Expansion
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                  12 State SCERTs + National CBSE Baseline
                </span>
                <span className="text-xs text-slate-500">
                  Pre-School through Grade 12 (NCF 5+3+3+4)
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Building2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                {t.stateAlignments}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Connect national NCF-SE 2023 competency nodes directly to state board textbooks and learning outcomes across <strong>Karnataka (DSERT), Tamil Nadu (Samacheer Kalvi), Delhi (SCERT Delhi / DBSE), Rajasthan (RSCERT), Uttar Pradesh (SCERT UP), West Bengal (WBBSE), Gujarat (GCERT), Andhra Pradesh (SCERT AP), Telangana (SCERT TG), Punjab (PSEB), Kerala (Samagra)</strong>, and <strong>Maharashtra (Balbharati)</strong>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Regional Language Switcher Pill */}
              <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <Languages className="w-4 h-4 text-indigo-600 dark:text-indigo-400 ml-1.5" />
                <select
                  value={currentLanguage}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="bg-transparent text-xs font-bold text-slate-800 dark:text-slate-200 focus:outline-hidden pr-2 cursor-pointer"
                >
                  {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                      {lang.nativeName} ({lang.name})
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                onClick={() => handleOpenSuggestModal()}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" />
                Suggest State Alignment
              </button>
            </div>
          </div>

          {/* Quick stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 font-bold uppercase text-[10px] block">Verified Alignments</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 block">{alignments.length} Textbook Chapters</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 font-bold uppercase text-[10px] block">Supported States</span>
              <span className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5 block">12 Major States</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 font-bold uppercase text-[10px] block">Stages Covered</span>
              <span className="text-lg font-bold text-slate-900 dark:text-white mt-0.5 block">Foundational to Sec (1–12)</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800">
              <span className="text-slate-400 font-bold uppercase text-[10px] block">Languages Supported</span>
              <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-0.5 block">10 Regional Languages</span>
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* State Board Dropdown */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.filterByState}
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200"
              >
                {STATE_BOARD_OPTIONS.map(opt => (
                  <option key={opt.code} value={opt.code}>{opt.name}</option>
                ))}
              </select>
            </div>

            {/* Pedagogical Stage Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.stage}
              </label>
              <select
                value={selectedStage}
                onChange={(e) => setSelectedStage(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200"
              >
                {stages.map(s => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Grade Band Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.filterByGrade}
              </label>
              <select
                value={selectedGrade}
                onChange={(e) => setSelectedGrade(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200"
              >
                {grades.map(g => (
                  <option key={g} value={g === 'All Grades' ? 'all' : g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Subject Filter */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                {t.filterBySubject}
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="w-full text-xs font-medium rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200"
              >
                {subjects.map(s => (
                  <option key={s} value={s === 'All Subjects' ? 'all' : s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Search Input */}
            <div>
              <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1.5">
                Search Chapters / Outcomes
              </label>
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="e.g. Life Processes, Fraction..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 pl-9 pr-3 py-2 text-slate-800 dark:text-slate-200"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Alignments Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Showing {filteredAlignments.length} State Textbook Chapters & Framework Outlines
            </span>
            <span className="text-xs text-slate-400">
              Prescribed State Syllabi (2024–2026 Editions)
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAlignments.map((item) => {
              const isSaved = isSavedInVault(`vault-align-${item.id}`);
              return (
                <div 
                  key={item.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs flex flex-col justify-between space-y-4 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full border bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800">
                        {item.stateName}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {item.grade} · {item.subject}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                        {item.chapterTitle}
                      </h3>
                      <p className="text-xs font-medium text-slate-600 dark:text-slate-300 mt-1">
                        {item.textbookTitle} · <span className="font-bold text-slate-900 dark:text-white">{item.pageRange}</span>
                      </p>
                    </div>

                    {/* State Competency Code & Learning Outcome */}
                    {item.stateCompetencyCode && (
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 space-y-1 text-[11px]">
                        <div className="font-bold text-emerald-600 dark:text-emerald-400 uppercase text-[10px]">
                          State Learning Standard ({item.stateCompetencyCode}):
                        </div>
                        <p className="text-slate-700 dark:text-slate-300">
                          {item.stateLearningOutcome}
                        </p>
                      </div>
                    )}

                    {item.qrOrPortalCode && (
                      <div className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 font-mono">
                        {item.qrOrPortalCode}
                      </div>
                    )}

                    {/* Pedagogical Bridging Note */}
                    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/80 space-y-1">
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                        Pedagogical Bridging Note:
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                        {item.bridgingNote}
                      </p>
                    </div>
                  </div>

                  {/* Footer Citation & Attribution & Offline Save */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{item.verifiedStatus === 'official-scert' ? 'Official SCERT' : 'Peer Verified'}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleSaveToVault(item)}
                        className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                          isSaved
                            ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/60'
                            : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                        title={isSaved ? 'Saved in Offline Vault' : 'Save for Offline Classroom Use'}
                      >
                        <HardDrive className="w-3.5 h-3.5" />
                        {isSaved ? 'Cached' : 'Offline'}
                      </button>

                      <button
                        type="button"
                        onClick={() => handleOpenSuggestModal(item.skillId)}
                        className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline"
                      >
                        Suggest Edit
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* State Board Alignment Documentation / Pilot Methodology */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Info className="w-4 h-4" />
            V0.8 State SCERT Grounding Methodology
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Full State Board Expansion Architecture & Citation Rigor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600 dark:text-slate-400">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                1. Multi-Stage Scope (1–12)
              </span>
              <p className="leading-relaxed">
                Expanded from middle school pilot to all 4 curricular stages: Foundational (Ages 3–8), Preparatory (Ages 8–11), Middle (Ages 11–14), and Secondary (Ages 14–18), reflecting NCF 5+3+3+4.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                2. 12 Major State SCERTs
              </span>
              <p className="leading-relaxed">
                Full textbook mappings and chapter citations across Karnataka, Tamil Nadu, Delhi, Rajasthan, Uttar Pradesh, West Bengal, Gujarat, Andhra Pradesh, Telangana, Punjab, Kerala, and Maharashtra.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                3. Multilingual Bridging
              </span>
              <p className="leading-relaxed">
                Every chapter includes specific bridging notes translating local state contexts into national NCF-SE learning outcomes, supported by 10 regional language interfaces.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Suggest Alignment Modal */}
      <SuggestAlignmentModal
        isOpen={isSuggestModalOpen}
        onClose={() => setIsSuggestModalOpen(false)}
        skill={selectedSkillForSuggest}
        onSubmit={(sugg) => submitAlignmentSuggestion(sugg)}
      />
    </div>
  );
}
