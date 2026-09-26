import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  FileText, 
  Presentation, 
  Video, 
  Sparkles, 
  CheckCircle2, 
  Download, 
  Star, 
  Filter, 
  Search, 
  Plus, 
  ShieldCheck, 
  Languages, 
  Layers, 
  ExternalLink, 
  Eye, 
  HelpCircle, 
  Sliders, 
  UserCheck, 
  Cpu, 
  Award,
  X,
  Share2,
  Printer
} from 'lucide-react';
import { useClassroomResourcesStorage } from '@/features/planning/useClassroomResourcesStorage';
import { ClassroomResource, ClassroomResourceType, UDLMode, PeerReview } from '@/types';
import { STATE_BOARD_OPTIONS } from '@/data/stateAlignments';
import { useLanguage } from '@/contexts/LanguageContext';

export function ClassroomResourcesHub() {
  const { 
    resources, 
    submitNewResource, 
    submitPeerReview, 
    incrementDownloadCount, 
    submissionsThisMonth, 
    monthlyLimit, 
    remainingSubmissions 
  } = useClassroomResourcesStorage();

  const { t, currentLanguage } = useLanguage();

  // Filters
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedBoard, setSelectedBoard] = useState<string>('all');
  const [selectedLang, setSelectedLang] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Active resource detail modal
  const [selectedResource, setSelectedResource] = useState<ClassroomResource | null>(null);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState<boolean>(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState<boolean>(false);

  // New Resource Form State
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newType, setNewType] = useState<ClassroomResourceType>('worksheet');
  const [newGrade, setNewGrade] = useState('Grade 8');
  const [newSubject, setNewSubject] = useState('General Science');
  const [newSimplify, setNewSimplify] = useState('');
  const [newExtend, setNewExtend] = useState('');
  const [newSourceCitation, setNewSourceCitation] = useState('');
  const [newUdlModes, setNewUdlModes] = useState<UDLMode[]>(['visual', 'reading-writing']);

  // Peer Review Form State
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerDesignation, setReviewerDesignation] = useState('');
  const [reviewComments, setReviewComments] = useState('');
  const [scoreCurriculum, setScoreCurriculum] = useState(5);
  const [scoreUsability, setScoreUsability] = useState(5);
  const [scoreSource, setScoreSource] = useState(5);
  const [scoreAccessibility, setScoreAccessibility] = useState(5);

  const resourceTypes: { id: string; label: string; icon: any }[] = [
    { id: 'all', label: 'All Resources', icon: Layers },
    { id: 'worksheet', label: 'Worksheets & Handouts', icon: FileText },
    { id: 'slides', label: 'Slide Decks', icon: Presentation },
    { id: 'video', label: 'Curated Video Playlists', icon: Video },
    { id: 'activity-kit', label: 'Hands-On Kits', icon: Sparkles },
    { id: 'exit-ticket', label: 'Exit Tickets & Checks', icon: CheckCircle2 }
  ];

  const grades = [
    'All Grades',
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5',
    'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'
  ];

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      if (selectedType !== 'all' && res.resourceType !== selectedType) return false;
      if (selectedGrade !== 'all' && selectedGrade !== 'All Grades' && res.grade !== selectedGrade) return false;
      if (selectedSubject !== 'all' && !res.subject.toLowerCase().includes(selectedSubject.toLowerCase())) return false;
      if (selectedBoard !== 'all' && !res.stateBoards.includes(selectedBoard)) return false;
      if (selectedLang !== 'all' && !res.languages.includes(selectedLang)) return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matches = 
          res.title.toLowerCase().includes(query) ||
          res.description.toLowerCase().includes(query) ||
          res.skillsMapped.some(s => s.toLowerCase().includes(query)) ||
          res.competencyCodes.some(c => c.toLowerCase().includes(query));
        if (!matches) return false;
      }
      return true;
    });
  }, [resources, selectedType, selectedGrade, selectedSubject, selectedBoard, selectedLang, searchQuery]);

  const handleCreateResource = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim()) return;

    submitNewResource({
      title: newTitle,
      description: newDescription,
      resourceType: newType,
      grade: newGrade,
      stage: 'middle',
      subject: newSubject,
      stateBoards: [selectedBoard !== 'all' ? selectedBoard : 'cbse-ncert'],
      languages: ['en', 'hi'],
      skillsMapped: ['Critical Inquiry', 'Curriculum Practice', 'Multimodal Communication'],
      competencyCodes: ['NCERT-SE-2023'],
      udlModes: newUdlModes,
      iepGoals: ['Cognitive structuring', 'Visual comprehension'],
      scaffolding: {
        simplify: newSimplify || 'Provide concrete examples and reduce text density.',
        extend: newExtend || 'Invite student-designed investigative extensions.'
      },
      multilingualVocab: [],
      content: {
        printablePdfPreview: 'Community Created Resource · In Peer Review',
        estimatedMinutes: 30
      },
      author: {
        id: 'auth-current-user',
        name: 'You (Lead Educator)',
        schoolName: 'Public Educational Institution',
        displaySchool: true,
        isVerifiedEducator: true,
        verificationType: 'school-email'
      },
      license: 'CC BY-SA 4.0',
      sourceCitation: newSourceCitation || 'NCERT / State SCERT Prescribed Standard Curriculum'
    });

    setIsSubmitModalOpen(false);
    setNewTitle('');
    setNewDescription('');
    setNewSimplify('');
    setNewExtend('');
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedResource || !reviewerName.trim()) return;

    submitPeerReview(selectedResource.id, {
      reviewerId: `rev-${Date.now()}`,
      reviewerName,
      reviewerDesignation,
      isVerified: true,
      ratings: {
        curriculumAlignment: scoreCurriculum,
        classroomUsability: scoreUsability,
        sourceVerification: scoreSource,
        accessibility: scoreAccessibility
      },
      decision: 'endorse',
      comments: reviewComments || 'Verified alignment to official curriculum learning goals.'
    });

    setIsReviewModalOpen(false);
    setSelectedResource(null);
    setReviewerName('');
    setReviewComments('');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Activity Bank 2.0 · Ready-to-Use Classroom Tools
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  CC BY-SA 4.0 Verified
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                {t.classroomResources}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Vetted, peer-reviewed educational artifacts designed for immediate classroom instruction: competency-aligned worksheets with answer keys, editable slide decks, curated video playlists, low-cost activity kits, and 5-minute exit tickets.
              </p>
            </div>

            {/* Submission Quota Counter & Action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Monthly Submission Quota
                </span>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400">{remainingSubmissions} of {monthlyLimit}</span> remaining
                </div>
                <div className="w-32 h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-indigo-600 rounded-full" 
                    style={{ width: `${(submissionsThisMonth / monthlyLimit) * 100}%` }}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsSubmitModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Plus className="w-4 h-4" /> Submit Resource
              </button>
            </div>
          </div>

          {/* Resource Type Category Buttons */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
            {resourceTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setSelectedType(type.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills, topics, titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Grade */}
          <div>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            >
              {grades.map(g => (
                <option key={g} value={g === 'All Grades' ? 'all' : g}>{g}</option>
              ))}
            </select>
          </div>

          {/* State Board */}
          <div>
            <select
              value={selectedBoard}
              onChange={(e) => setSelectedBoard(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            >
              {STATE_BOARD_OPTIONS.map(b => (
                <option key={b.code} value={b.code}>{b.name}</option>
              ))}
            </select>
          </div>

          {/* Language */}
          <div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            >
              <option value="all">All Languages (10 Regional)</option>
              <option value="en">English</option>
              <option value="hi">हिन्दी (Hindi)</option>
              <option value="ta">தமிழ் (Tamil)</option>
              <option value="te">తెలుగు (Telugu)</option>
              <option value="kn">ಕನ್ನಡ (Kannada)</option>
              <option value="ml">മലയാളം (Malayalam)</option>
              <option value="gu">ગુજરાતી (Gujarati)</option>
              <option value="bn">বাংলা (Bengali)</option>
              <option value="mr">मराठी (Marathi)</option>
              <option value="pa">ਪੰਜਾਬੀ (Punjabi)</option>
            </select>
          </div>

          {/* Reset button */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSelectedType('all');
                setSelectedGrade('all');
                setSelectedBoard('all');
                setSelectedLang('all');
                setSearchQuery('');
              }}
              className="w-full py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold transition-colors"
            >
              Reset Filters
            </button>
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-indigo-300 dark:hover:border-indigo-800 transition-all group"
            >
              <div className="space-y-4">
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 flex items-center gap-1.5">
                    {res.resourceType === 'worksheet' && <FileText className="w-3.5 h-3.5" />}
                    {res.resourceType === 'slides' && <Presentation className="w-3.5 h-3.5" />}
                    {res.resourceType === 'video' && <Video className="w-3.5 h-3.5" />}
                    {res.resourceType === 'activity-kit' && <Sparkles className="w-3.5 h-3.5" />}
                    {res.resourceType === 'exit-ticket' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {res.resourceType.toUpperCase()}
                  </span>

                  {res.peerReviewedBadge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3" /> Peer-Reviewed
                    </span>
                  )}
                </div>

                {/* Title & Desc */}
                <div className="space-y-1.5">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug group-hover:text-indigo-600 transition-colors">
                    {res.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {res.description}
                  </p>
                </div>

                {/* Subject & Grade Badges */}
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                    {res.grade}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
                    {res.subject}
                  </span>
                </div>

                {/* UDL & Differentiation Pills */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Sliders className="w-3 h-3 text-indigo-500" /> UDL Modes:
                    </span>
                    <div className="flex items-center gap-1">
                      {res.udlModes.map(m => (
                        <span key={m} className="px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-[10px] font-bold uppercase">
                          {m.slice(0, 3)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <span className="flex items-center gap-1 font-medium">
                      <Languages className="w-3 h-3 text-emerald-500" /> Languages:
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {res.languages.length} Available
                    </span>
                  </div>
                </div>

                {/* Ratings & Downloads */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{res.rating}</span>
                    <span className="text-slate-400 font-normal">({res.ratingCount})</span>
                  </div>
                  <div>
                    Used by <strong>{res.downloadsCount}</strong> teachers
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedResource(res)}
                  className="grow py-2 rounded-xl bg-slate-100 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-indigo-950 text-slate-800 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-300 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" /> View & Differentiate
                </button>

                <button
                  type="button"
                  title="Print / Save for Classroom Use"
                  onClick={() => {
                    incrementDownloadCount(res.id);
                    setSelectedResource(res);
                  }}
                  className="p-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center justify-center transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL 1: RESOURCE DETAIL, DIFFERENTIATION & SCAFFOLDING DRAWER */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-3xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl my-8 space-y-6"
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300">
                        {selectedResource.resourceType}
                      </span>
                      {selectedResource.peerReviewedBadge && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3" /> Peer-Reviewed
                        </span>
                      )}
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                      {selectedResource.title}
                    </h2>
                    <p className="text-xs text-slate-500">
                      Author: {selectedResource.author.name} · {selectedResource.author.schoolName}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedResource(null)}
                    className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Resource Content Preview Area */}
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    Classroom Artifact Preview & Answer Key
                  </h4>

                  {/* Worksheet View */}
                  {selectedResource.resourceType === 'worksheet' && selectedResource.content.answerKey && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                      <span className="font-bold text-slate-500 uppercase text-[10px]">Verified Educator Answer Key:</span>
                      <p className="text-slate-800 dark:text-slate-200 leading-relaxed font-mono">
                        {selectedResource.content.answerKey}
                      </p>
                    </div>
                  )}

                  {/* Slide Deck View */}
                  {selectedResource.resourceType === 'slides' && selectedResource.content.slidesOutline && (
                    <div className="space-y-2">
                      {selectedResource.content.slidesOutline.map(s => (
                        <div key={s.slideNumber} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                          <div className="font-bold text-indigo-600 dark:text-indigo-400">
                            Slide {s.slideNumber}: {s.title}
                          </div>
                          <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 text-[11px]">
                            {s.bullets.map((b, i) => <li key={i}>{b}</li>)}
                          </ul>
                          <div className="text-[10px] text-slate-400 italic pt-1">
                            Teacher notes: {s.teacherNotes}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Hands-On Kit Steps */}
                  {selectedResource.resourceType === 'activity-kit' && selectedResource.content.kitSteps && (
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-3">
                      <div className="font-bold text-slate-800 dark:text-slate-200">Required Low-Cost Materials:</div>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedResource.content.kitMaterials?.map((m, i) => (
                          <span key={i} className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px]">
                            {m}
                          </span>
                        ))}
                      </div>
                      <div className="font-bold text-slate-800 dark:text-slate-200 pt-2">Step-by-Step Procedure:</div>
                      <ol className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px] list-decimal list-inside">
                        {selectedResource.content.kitSteps.map((step, idx) => (
                          <li key={idx}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Exit Tickets */}
                  {selectedResource.resourceType === 'exit-ticket' && selectedResource.content.exitTicketPrompts && (
                    <div className="space-y-3">
                      {selectedResource.content.exitTicketPrompts.map(p => (
                        <div key={p.id} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                          <div className="font-bold text-slate-900 dark:text-white">{p.question}</div>
                          {p.options && (
                            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-600 dark:text-slate-300">
                              {p.options.map((opt, i) => <div key={i}>{opt}</div>)}
                            </div>
                          )}
                          <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-[11px]">
                            <strong>Exemplar:</strong> {p.exemplarAnswer}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* DIFFERENTIATION & INCLUSION TOOLS (Scope 4) */}
                <div className="p-5 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-4">
                  <h4 className="font-bold text-indigo-900 dark:text-indigo-200 text-sm flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-600" />
                    Differentiation & Inclusive Classroom Scaffolding
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 space-y-1">
                      <span className="font-bold text-emerald-600 uppercase text-[10px] block">
                        Simplify for Struggling Learners
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedResource.scaffolding.simplify}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-indigo-100 dark:border-indigo-900 space-y-1">
                      <span className="font-bold text-indigo-600 uppercase text-[10px] block">
                        Extend for Advanced Learners
                      </span>
                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        {selectedResource.scaffolding.extend}
                      </p>
                    </div>
                  </div>

                  {/* IEP Alignments */}
                  {selectedResource.iepGoals.length > 0 && (
                    <div className="space-y-1 text-xs">
                      <span className="font-bold text-slate-700 dark:text-slate-300 text-[11px] block">
                        Individualized Education Plan (IEP) Alignments:
                      </span>
                      <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-[11px] space-y-0.5">
                        {selectedResource.iepGoals.map((g, i) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Multilingual Bridges */}
                  {selectedResource.multilingualVocab.length > 0 && (
                    <div className="space-y-2 pt-2 border-t border-indigo-100 dark:border-indigo-900 text-xs">
                      <span className="font-bold text-indigo-900 dark:text-indigo-200 text-[11px] flex items-center gap-1.5">
                        <Languages className="w-3.5 h-3.5" /> Multilingual Classroom Vocabulary Bridges
                      </span>
                      {selectedResource.multilingualVocab.map((vocab, idx) => (
                        <div key={idx} className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] space-y-1">
                          <div className="font-bold text-slate-900 dark:text-white">
                            {vocab.term} {vocab.transliteration && <span className="text-slate-400 font-normal">({vocab.transliteration})</span>}
                          </div>
                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-slate-600 dark:text-slate-300">
                            {Object.entries(vocab.translations).map(([langKey, transVal]) => (
                              <div key={langKey}>
                                <span className="uppercase text-[9px] text-slate-400 mr-1">{langKey}:</span>
                                <span>{transVal}</span>
                              </div>
                            ))}
                          </div>
                          <div className="text-[10px] text-indigo-600 dark:text-indigo-400 italic pt-0.5">
                            Teacher prompt: {vocab.classroomPrompt}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Peer Review Summary */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-emerald-600" />
                      Peer Educator Endorsements ({selectedResource.peerReviews.length})
                    </h4>
                    <button
                      type="button"
                      onClick={() => setIsReviewModalOpen(true)}
                      className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold"
                    >
                      Endorse / Review
                    </button>
                  </div>

                  <div className="space-y-2">
                    {selectedResource.peerReviews.map(r => (
                      <div key={r.id} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-slate-900 dark:text-white">{r.reviewerName}</span>
                          <span className="text-emerald-600 font-semibold uppercase text-[10px]">{r.decision}</span>
                        </div>
                        <div className="text-[10px] text-slate-400">{r.reviewerDesignation}</div>
                        <p className="text-slate-600 dark:text-slate-300 text-[11px] pt-1">
                          "{r.comments}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    type="button"
                    onClick={() => setSelectedResource(null)}
                    className="px-4 py-2 text-xs font-bold text-slate-600 hover:text-slate-800 dark:text-slate-300"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      incrementDownloadCount(selectedResource.id);
                      window.print();
                    }}
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs"
                  >
                    <Printer className="w-4 h-4" /> Print / Save PDF
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL 2: SUBMIT RESOURCE MODAL */}
        <AnimatePresence>
          {isSubmitModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-5"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Submit Classroom Resource
                    </h3>
                    <p className="text-xs text-slate-500">
                      Rate limit: {remainingSubmissions} of {monthlyLimit} submissions remaining this month.
                    </p>
                  </div>
                  <button type="button" onClick={() => setIsSubmitModalOpen(false)} className="text-slate-400 hover:text-slate-600">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleCreateResource} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Resource Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chemical Equation Balancing Diagnostic Exit Slip"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Type</label>
                      <select
                        value={newType}
                        onChange={(e) => setNewType(e.target.value as ClassroomResourceType)}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      >
                        <option value="worksheet">Worksheet / Handout</option>
                        <option value="slides">Slide Deck</option>
                        <option value="video">Curated Video Playlist</option>
                        <option value="activity-kit">Hands-On Activity Kit</option>
                        <option value="exit-ticket">Exit Ticket / Quick Check</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-slate-700 dark:text-slate-300">Grade</label>
                      <select
                        value={newGrade}
                        onChange={(e) => setNewGrade(e.target.value)}
                        className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      >
                        {grades.filter(g => g !== 'All Grades').map(g => <option key={g} value={g}>{g}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Description</label>
                    <textarea
                      rows={2}
                      required
                      placeholder="Brief 1-2 sentence overview of classroom usage..."
                      value={newDescription}
                      onChange={(e) => setNewDescription(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="font-bold text-emerald-600">Simplify for Struggling Learners</label>
                      <textarea
                        rows={2}
                        placeholder="Reduced cognitive load scaffold..."
                        value={newSimplify}
                        onChange={(e) => setNewSimplify(e.target.value)}
                        className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="font-bold text-indigo-600">Extend for Advanced Learners</label>
                      <textarea
                        rows={2}
                        placeholder="Higher-order Bloom's extension..."
                        value={newExtend}
                        onChange={(e) => setNewExtend(e.target.value)}
                        className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Curriculum Source Citation</label>
                    <input
                      type="text"
                      placeholder="e.g. NCERT Class 8 Science Ch 11 or Maharashtra Balbharati Ch 3"
                      value={newSourceCitation}
                      onChange={(e) => setNewSourceCitation(e.target.value)}
                      className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl text-[11px] text-slate-500 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Resource will be released under <strong>CC BY-SA 4.0</strong> and queued for double peer educator audit.</span>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitModalOpen(false)}
                      className="px-4 py-2 font-bold text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-xs"
                    >
                      Submit for Peer Review
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* MODAL 3: PEER REVIEW MODAL */}
        <AnimatePresence>
          {isReviewModalOpen && selectedResource && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 text-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    Peer Educator Review Rubric
                  </h3>
                  <button type="button" onClick={() => setIsReviewModalOpen(false)} className="text-slate-400">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Your Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Meera Nambiar"
                      value={reviewerName}
                      onChange={(e) => setReviewerName(e.target.value)}
                      className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Designation / School</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. PGT Physics, Kendriya Vidyalaya"
                      value={reviewerDesignation}
                      onChange={(e) => setReviewerDesignation(e.target.value)}
                      className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  {/* 4-Dimension Rubric */}
                  <div className="space-y-2 p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl">
                    <span className="font-bold text-slate-800 dark:text-slate-200 block text-[11px]">
                      4-Dimension Quality Rubric (1-5 Stars)
                    </span>

                    <div className="flex items-center justify-between">
                      <span>Curriculum Alignment:</span>
                      <select value={scoreCurriculum} onChange={(e) => setScoreCurriculum(Number(e.target.value))} className="p-1 rounded bg-white dark:bg-slate-900">
                        <option value={5}>5 - Full NCF-SE / SCERT Mapped</option>
                        <option value={4}>4 - Solid Alignment</option>
                        <option value={3}>3 - Acceptable</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Classroom Usability:</span>
                      <select value={scoreUsability} onChange={(e) => setScoreUsability(Number(e.target.value))} className="p-1 rounded bg-white dark:bg-slate-900">
                        <option value={5}>5 - Immediately Print/Use Ready</option>
                        <option value={4}>4 - High Usability</option>
                        <option value={3}>3 - Needs Minor Setup</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Source Verification:</span>
                      <select value={scoreSource} onChange={(e) => setScoreSource(Number(e.target.value))} className="p-1 rounded bg-white dark:bg-slate-900">
                        <option value={5}>5 - Cites Official SCERT/NCERT</option>
                        <option value={4}>4 - Verified Baseline</option>
                      </select>
                    </div>

                    <div className="flex items-center justify-between">
                      <span>Accessibility & UDL:</span>
                      <select value={scoreAccessibility} onChange={(e) => setScoreAccessibility(Number(e.target.value))} className="p-1 rounded bg-white dark:bg-slate-900">
                        <option value={5}>5 - Exemplary Scaffolding & UDL</option>
                        <option value={4}>4 - Strong Inclusion</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700 dark:text-slate-300">Auditor Endorsement Notes</label>
                    <textarea
                      rows={2}
                      placeholder="Comment on pedagogical strengths, accuracy, and classroom feedback..."
                      value={reviewComments}
                      onChange={(e) => setReviewComments(e.target.value)}
                      className="w-full p-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                    />
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button type="button" onClick={() => setIsReviewModalOpen(false)} className="px-4 py-2 font-bold text-slate-600">
                      Cancel
                    </button>
                    <button type="submit" className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-xs">
                      Submit Verified Endorsement
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
