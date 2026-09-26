import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  Leaf, 
  Landmark, 
  Binary, 
  Clock, 
  Layers, 
  Target, 
  CheckCircle2, 
  BookOpen, 
  Printer, 
  Copy, 
  ChevronRight, 
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Plus,
  Flag,
  Edit3,
  Award,
  History,
  Star,
  Users,
  AlertCircle,
  FileCheck2,
  Building2
} from 'lucide-react';
import { ThemeBundle, ThemeCrossSubjectConnection, PeerReview, CommunityFeedback } from '@/types';
import { useWizardIntegratedUnits } from '../useWizardStorage';
import { useThemeBundlesStorage } from '../useThemeBundlesStorage';
import { CreateThemeBundleModal } from '../components/CreateThemeBundleModal';
import { PeerReviewModal } from '../components/PeerReviewModal';
import { SuggestEditModal } from '../components/SuggestEditModal';

const THEME_STYLES: Record<string, { bg: string; border: string; text: string; badge: string; icon: any }> = {
  climate: {
    bg: 'bg-emerald-50/60 dark:bg-emerald-950/20',
    border: 'border-emerald-200 dark:border-emerald-900/60',
    text: 'text-emerald-900 dark:text-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800',
    icon: Leaf
  },
  heritage: {
    bg: 'bg-amber-50/60 dark:bg-amber-950/20',
    border: 'border-amber-200 dark:border-amber-900/60',
    text: 'text-amber-900 dark:text-amber-200',
    badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300 border-amber-300 dark:border-amber-800',
    icon: Landmark
  },
  'data-ethics': {
    bg: 'bg-indigo-50/60 dark:bg-indigo-950/20',
    border: 'border-indigo-200 dark:border-indigo-900/60',
    text: 'text-indigo-900 dark:text-indigo-200',
    badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border-indigo-300 dark:border-indigo-800',
    icon: Binary
  },
  'stem-energy': {
    bg: 'bg-cyan-50/60 dark:bg-cyan-950/20',
    border: 'border-cyan-200 dark:border-cyan-900/60',
    text: 'text-cyan-900 dark:text-cyan-200',
    badge: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300 border-cyan-300 dark:border-cyan-800',
    icon: Sparkles
  },
  'water-security': {
    bg: 'bg-teal-50/60 dark:bg-teal-950/20',
    border: 'border-teal-200 dark:border-teal-900/60',
    text: 'text-teal-900 dark:text-teal-200',
    badge: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300 border-teal-300 dark:border-teal-800',
    icon: Leaf
  }
};

export function ThemeBundlesPage() {
  const navigate = useNavigate();
  const { saveUnit } = useWizardIntegratedUnits();
  const { 
    bundles, 
    createBundle, 
    submitPeerReview, 
    submitCommunityFeedback, 
    getMonthlySubmissionCount, 
    maxSubmissionsPerMonth 
  } = useThemeBundlesStorage();

  const [activeTab, setActiveTab] = useState<'published' | 'queue'>('published');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBundleId, setSelectedBundleId] = useState<string>(bundles[0]?.id || 'theme-climate-resilience');
  const [cloneSuccessMsg, setCloneSuccessMsg] = useState<string | null>(null);

  // Modals state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [feedbackType, setFeedbackType] = useState<'report-issue' | 'suggest-edit'>('suggest-edit');
  const [showVersionHistoryModal, setShowVersionHistoryModal] = useState(false);

  // Filter published vs queue
  const publishedBundles = bundles.filter(b => b.status === 'published' || b.peerReviewedBadge);
  const queueBundles = bundles.filter(b => b.status === 'in-review' || !b.peerReviewedBadge);

  const displayedBundles = activeTab === 'published' ? publishedBundles : queueBundles;

  const categoryFilteredBundles = selectedCategory === 'all'
    ? displayedBundles
    : displayedBundles.filter(b => b.themeCategory === selectedCategory);

  const activeBundle = bundles.find(b => b.id === selectedBundleId) || categoryFilteredBundles[0] || bundles[0];
  const activeStyle = THEME_STYLES[activeBundle?.themeCategory || 'climate'] || THEME_STYLES.climate;
  const ActiveIcon = activeStyle.icon;

  const monthlyUsed = getMonthlySubmissionCount();

  const handleClone = (bundle: ThemeBundle) => {
    const clonedId = `cloned-${bundle.slug}-${Date.now()}`;
    saveUnit({
      id: clonedId,
      title: `${bundle.title} (Draft Unit)`,
      description: bundle.description,
      gradeId: bundle.gradeBand.includes('6–8') ? 'grade-7' : 'grade-9',
      subjectIds: bundle.disciplines,
      skillIds: bundle.unifyingSkills,
      leadTeacherId: 'me',
      collaboratorIds: [],
      status: 'draft',
      bloomsFocus: ['Apply', 'Analyse', 'Create'],
      varkActivities: {},
      timeline: bundle.crossSubjectConnections.map((conn, idx) => ({
        title: `${conn.subject}: ${conn.coreConcepts[0]}`,
        durationMin: 90,
        skillIds: bundle.unifyingSkills,
        bloomsLevel: 'Apply',
        varkType: 'visual'
      })),
      comments: [],
      createdAt: Date.now(),
      updatedAt: Date.now()
    });

    setCloneSuccessMsg(`"${bundle.title}" has been cloned into your Unit Plans!`);
    setTimeout(() => setCloneSuccessMsg(null), 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 print:p-0 print:bg-white">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm print:border-none print:p-0">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-indigo-600" />
                  v0.7 Phase 2 · Co-Create & Peer Review
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Interdisciplinary Inquiry & Open Educational Resources (CC BY-SA 4.0)
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Compass className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Interdisciplinary Theme Bundles
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Connect Science, Mathematics, Social Science, and Technology into coherent inquiry units. Co-create bundles, audit peer submissions, and export print-ready blueprints with verifiable NCF-SE 2023 and NCERT/SCERT outcomes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 print:hidden">
              <button
                onClick={() => setIsCreateModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-colors min-h-[40px]"
              >
                <Plus className="w-4 h-4" />
                <span>Co-Create Theme Bundle</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-2 shadow-xs transition-colors min-h-[40px]"
              >
                <Printer className="w-4 h-4 text-slate-500" />
                <span>Print Blueprint</span>
              </button>
              <Link
                to="/peer-review-guidelines"
                className="px-3 py-2 rounded-xl text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
              >
                Review Guidelines ↗
              </Link>
            </div>
          </div>

          {/* Submissions Limit & Navigation Tabs Bar */}
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 print:hidden">
            <div className="flex items-center gap-2">
              <button
                onClick={() => { setActiveTab('published'); setSelectedBundleId(publishedBundles[0]?.id || ''); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'published'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Published Blueprints ({publishedBundles.length})</span>
              </button>
              <button
                onClick={() => { setActiveTab('queue'); setSelectedBundleId(queueBundles[0]?.id || ''); }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'queue'
                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                <FileCheck2 className="w-4 h-4 text-amber-500" />
                <span>Peer Review Queue ({queueBundles.length})</span>
              </button>
            </div>

            {/* Rate limit quota badge */}
            <div className="text-xs text-slate-500 flex items-center gap-2">
              <span>Monthly Author Quota:</span>
              <span className="font-bold text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {monthlyUsed} / {maxSubmissionsPerMonth} Submissions Used
              </span>
            </div>
          </div>
        </div>

        {/* Clone Notification Toast */}
        {cloneSuccessMsg && (
          <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800 flex items-center justify-between gap-4 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm shadow-md">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{cloneSuccessMsg}</span>
            </div>
            <Link
              to="/planner"
              className="px-3 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-lg transition-colors shrink-0"
            >
              Open Planner →
            </Link>
          </div>
        )}

        {/* Bundle Selector Cards (Horizontal Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
          {displayedBundles.map(bundle => {
            const isSelected = bundle.id === selectedBundleId;
            const bStyle = THEME_STYLES[bundle.themeCategory] || THEME_STYLES.climate;
            const BIcon = bStyle.icon;
            const verifiedReviewsCount = (bundle.peerReviews || []).filter(r => r.isVerified && r.decision === 'endorse').length;

            return (
              <button
                key={bundle.id}
                onClick={() => setSelectedBundleId(bundle.id)}
                className={`text-left p-5 rounded-3xl border transition-all duration-200 flex flex-col justify-between space-y-4 ${
                  isSelected
                    ? `${bStyle.bg} ${bStyle.border} ring-2 ring-indigo-500 shadow-md`
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-1">
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${bStyle.badge}`}>
                      {bundle.gradeBand.split('(')[0]}
                    </span>
                    {bundle.peerReviewedBadge ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Peer-Reviewed
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-700 dark:text-amber-400">
                        <Clock className="w-3.5 h-3.5" />
                        In Review ({verifiedReviewsCount}/2)
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {bundle.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                    {bundle.tagline}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {bundle.recommendedHours} hrs
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                    Inspect Blueprint →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* ACTIVE BUNDLE DEEP DIVE */}
        {activeBundle && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 space-y-8 shadow-sm print:border-none print:p-0">
            
            {/* Banner Header with Author Credit, Badge, & CC BY-SA 4.0 */}
            <div className={`rounded-3xl p-6 sm:p-8 border ${activeStyle.border} ${activeStyle.bg} space-y-4`}>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${activeStyle.badge} flex items-center gap-1.5`}>
                    <ActiveIcon className="w-4 h-4" />
                    {activeBundle.title}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                    {activeBundle.gradeBand}
                  </span>
                  {activeBundle.peerReviewedBadge ? (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      Peer-Reviewed Certified
                    </span>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-900 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 dark:border-amber-800 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-amber-600" />
                      In Peer Review Queue ({(activeBundle.peerReviews || []).filter(r => r.isVerified && r.decision === 'endorse').length} of 2 Endorsements)
                    </span>
                  )}
                </div>

                {/* Attribution & Version */}
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setShowVersionHistoryModal(true)}
                    className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium flex items-center gap-1 hover:bg-white transition-colors"
                  >
                    <History className="w-3.5 h-3.5 text-slate-500" />
                    <span>Version {activeBundle.version || 'v1.0.0'}</span>
                  </button>

                  <a
                    href="https://creativecommons.org/licenses/by-sa/4.0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded-lg bg-white/80 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold flex items-center gap-1 hover:underline"
                  >
                    <span>{activeBundle.license || 'CC BY-SA 4.0'}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  {activeBundle.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium max-w-4xl">
                  {activeBundle.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-4xl pt-1">
                  {activeBundle.description}
                </p>
              </div>

              {/* Author Attribution Card */}
              {activeBundle.author && (
                <div className="pt-3 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-[10px]">
                      {activeBundle.author.name.charAt(0)}
                    </div>
                    <div>
                      <span className="font-bold text-slate-900 dark:text-white">
                        Authored by {activeBundle.author.name}
                      </span>
                      {activeBundle.author.displaySchool && activeBundle.author.schoolName && (
                        <span className="text-slate-500 ml-1">
                          · {activeBundle.author.schoolName}
                        </span>
                      )}
                    </div>
                    {activeBundle.author.isVerifiedEducator && (
                      <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold text-[10px] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified Educator
                      </span>
                    )}
                  </div>

                  {/* Actions on this bundle */}
                  <div className="flex items-center gap-2 print:hidden">
                    <button
                      onClick={() => setIsReviewModalOpen(true)}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
                    >
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Submit Peer Review
                    </button>
                    <button
                      onClick={() => { setFeedbackType('suggest-edit'); setIsFeedbackModalOpen(true); }}
                      className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 text-xs font-semibold flex items-center gap-1"
                    >
                      <Edit3 className="w-3.5 h-3.5" />
                      Suggest Edit
                    </button>
                    <button
                      onClick={() => { setFeedbackType('report-issue'); setIsFeedbackModalOpen(true); }}
                      className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-rose-600 hover:bg-rose-50 text-xs font-semibold flex items-center gap-1"
                      title="Report Issue"
                    >
                      <Flag className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Peer Reviews Verification Panel */}
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Verified Educator Peer Reviews ({activeBundle.peerReviews?.length || 0})
                  </h3>
                </div>
                <div className="text-xs text-slate-500 flex items-center gap-1">
                  <span>Standard: 2 verified endorsements required for publication</span>
                </div>
              </div>

              {activeBundle.peerReviews && activeBundle.peerReviews.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeBundle.peerReviews.map((rev) => (
                    <div 
                      key={rev.id}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2.5 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-slate-900 dark:text-white block">
                            {rev.reviewerName}
                          </span>
                          <span className="text-[11px] text-slate-500 block">
                            {rev.reviewerDesignation} {rev.reviewerSchool && `· ${rev.reviewerSchool}`}
                          </span>
                        </div>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          rev.decision === 'endorse' 
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300' 
                            : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                        }`}>
                          {rev.decision === 'endorse' ? '✓ Endorsed' : 'Revisions Requested'}
                        </span>
                      </div>

                      {/* Criteria ratings row */}
                      <div className="grid grid-cols-4 gap-1 text-center py-1.5 px-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-[10px]">
                        <div>
                          <span className="text-slate-400 block">Align</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{rev.ratings.curriculumAlignment}/5</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Usable</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{rev.ratings.classroomUsability}/5</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Sources</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{rev.ratings.sourceVerification}/5</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block">Access</span>
                          <span className="font-bold text-slate-800 dark:text-slate-200">{rev.ratings.accessibility}/5</span>
                        </div>
                      </div>

                      <p className="text-slate-700 dark:text-slate-300 leading-relaxed italic">
                        "{rev.comments}"
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 space-y-2 text-xs text-slate-500">
                  <p>This community submission is awaiting its first verified peer educator review.</p>
                  <button
                    onClick={() => setIsReviewModalOpen(true)}
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 text-white font-bold"
                  >
                    Be the First to Review This Bundle
                  </button>
                </div>
              )}
            </div>

            {/* Cross-Subject Architecture */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600" />
                    Cross-Subject Learning Connections
                  </h3>
                  <p className="text-xs text-slate-500">
                    Each contributing subject maps to concrete NCF-SE 2023 competencies and classroom activities.
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-400">
                  {activeBundle.crossSubjectConnections.length} Subjects Integrated
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {activeBundle.crossSubjectConnections.map((conn, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between space-y-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900">
                          {conn.subject}
                        </span>
                        <span className="text-[10px] text-slate-400 font-mono">
                          Node #{idx + 1}
                        </span>
                      </div>

                      {/* Concepts */}
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                          Core Concepts
                        </span>
                        <ul className="text-xs text-slate-700 dark:text-slate-300 space-y-1">
                          {conn.coreConcepts.map((concept, cIdx) => (
                            <li key={cIdx} className="flex items-start gap-1.5">
                              <span className="text-indigo-500 mt-1">•</span>
                              <span className="leading-tight">{concept}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Competency */}
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block">
                          Mapped Competency
                        </span>
                        <p className="text-xs text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                          {conn.competencyMapped}
                        </p>
                      </div>

                      {/* Activity */}
                      <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1">
                        <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider block">
                          Classroom / Field Inquiry Activity
                        </span>
                        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                          {conn.classroomActivity}
                        </p>
                      </div>
                    </div>

                    {/* Citation Footer */}
                    <div className="pt-3 border-t border-slate-200/80 dark:border-slate-700/80 text-[11px] text-slate-500 dark:text-slate-400 flex items-start gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                      <span className="leading-tight">
                        <strong>Source:</strong> {conn.ncfCitation}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Flagship Challenge Section */}
            <div className="bg-gradient-to-r from-amber-500/10 via-indigo-500/5 to-transparent dark:from-amber-950/30 dark:via-indigo-950/20 rounded-3xl p-6 sm:p-8 border border-amber-200/80 dark:border-amber-900/60 space-y-4 print:border-slate-400">
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200">
                  <Sparkles className="w-4 h-4" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 dark:text-amber-300">
                  Culminating Flagship Challenge
                </span>
              </div>

              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {activeBundle.flagshipChallenge.title}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Driving Inquiry Question
                  </span>
                  <p className="text-xs sm:text-sm text-slate-900 dark:text-white font-semibold leading-snug">
                    "{activeBundle.flagshipChallenge.drivingQuestion}"
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Student Deliverable
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeBundle.flagshipChallenge.studentDeliverable}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 space-y-1">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    Community Engagement
                  </span>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeBundle.flagshipChallenge.communityEngagement}
                  </p>
                </div>
              </div>
            </div>

            {/* Citations List */}
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700/60 space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold text-slate-800 dark:text-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Curriculum Authority & Policy Sources</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 dark:text-slate-400">
                {activeBundle.sources.map((src, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-slate-400 mt-0.5">•</span>
                    <span>{src}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100 dark:border-slate-800 print:hidden">
              <div className="text-xs text-slate-500 flex items-center gap-2">
                <span>Licensed under Creative Commons CC BY-SA 4.0</span>
                <span>·</span>
                <Link to="/state-alignments" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
                  View State SCERT Alignments →
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleClone(activeBundle)}
                  className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  <span>Clone this Bundle into My Unit Plans</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Co-Create Theme Bundle Modal */}
      <CreateThemeBundleModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        monthlySubmissionsCount={monthlyUsed}
        maxMonthlySubmissions={maxSubmissionsPerMonth}
        onSubmit={(bundle) => createBundle(bundle)}
      />

      {/* Peer Review Modal */}
      {activeBundle && (
        <PeerReviewModal
          isOpen={isReviewModalOpen}
          onClose={() => setIsReviewModalOpen(false)}
          bundle={activeBundle}
          onSubmit={(review) => submitPeerReview(activeBundle.id, review)}
        />
      )}

      {/* Suggest Edit / Report Issue Modal */}
      {activeBundle && (
        <SuggestEditModal
          isOpen={isFeedbackModalOpen}
          onClose={() => setIsFeedbackModalOpen(false)}
          bundle={activeBundle}
          type={feedbackType}
          onSubmit={(feedback) => submitCommunityFeedback(activeBundle.id, feedback)}
        />
      )}

      {/* Version History Modal */}
      {showVersionHistoryModal && activeBundle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <History className="w-4 h-4 text-indigo-600" />
                Version History: {activeBundle.title}
              </h3>
              <button onClick={() => setShowVersionHistoryModal(false)} className="text-slate-400 hover:text-slate-600">
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-[60vh] overflow-y-auto">
              {(activeBundle.versionHistory || [
                { version: 'v1.0.0', date: '2026-06-01', authorName: activeBundle.author?.name || 'Curriculum Author', summary: 'Original verified publication' }
              ]).map((rec, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">{rec.version}</span>
                    <span className="text-[11px] text-slate-400">{rec.date}</span>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300">{rec.summary}</p>
                  <p className="text-[10px] text-slate-400">By {rec.authorName}</p>
                </div>
              ))}
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowVersionHistoryModal(false)}
                className="px-4 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ThemeBundlesPage;
