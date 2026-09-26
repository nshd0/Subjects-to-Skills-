import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShieldCheck, CheckCircle2, AlertCircle, Award, Star, BookOpen, Clock, Layers, Users } from 'lucide-react';
import { ThemeBundle, PeerReview } from '@/types';

interface PeerReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  bundle: ThemeBundle;
  onSubmit: (review: Omit<PeerReview, 'id' | 'reviewedAt'>) => void;
}

export function PeerReviewModal({ isOpen, onClose, bundle, onSubmit }: PeerReviewModalProps) {
  const [reviewerName, setReviewerName] = useState('');
  const [reviewerDesignation, setReviewerDesignation] = useState('');
  const [reviewerSchool, setReviewerSchool] = useState('');
  const [isVerified, setIsVerified] = useState(true);
  const [curriculumAlignment, setCurriculumAlignment] = useState(5);
  const [classroomUsability, setClassroomUsability] = useState(4);
  const [sourceVerification, setSourceVerification] = useState(5);
  const [accessibility, setAccessibility] = useState(4);
  const [decision, setDecision] = useState<'endorse' | 'request-changes'>('endorse');
  const [comments, setComments] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewerName.trim() || !reviewerDesignation.trim() || !comments.trim()) {
      setErrorMsg('Please enter your name, professional designation, and qualitative review commentary.');
      return;
    }

    onSubmit({
      reviewerId: `usr-${Date.now()}`,
      reviewerName,
      reviewerDesignation,
      reviewerSchool: reviewerSchool.trim() || undefined,
      isVerified,
      ratings: {
        curriculumAlignment,
        classroomUsability,
        sourceVerification,
        accessibility
      },
      decision,
      comments
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2200);
  };

  const renderRatingButtons = (
    label: string, 
    sublabel: string, 
    value: number, 
    setValue: (val: number) => void
  ) => (
    <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 space-y-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
        <div>
          <span className="text-xs font-bold text-slate-800 dark:text-slate-200 block">{label}</span>
          <span className="text-[11px] text-slate-500 block">{sublabel}</span>
        </div>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              onClick={() => setValue(star)}
              className={`p-1 rounded-md transition-colors ${
                star <= value 
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/40' 
                  : 'text-slate-300 dark:text-slate-600 hover:text-amber-300'
              }`}
              aria-label={`Rate ${star} out of 5 for ${label}`}
            >
              <Star className="w-4 h-4 fill-current" />
            </button>
          ))}
          <span className="text-xs font-bold text-slate-700 dark:text-slate-300 ml-1.5 w-6 text-right">
            {value}/5
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-xl relative my-8"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Peer Review Recorded
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto leading-relaxed">
                Thank you, educator. Your evaluation has been logged with cryptographic timestamping. Once 2 verified endorsements are registered, this bundle receives the public "Peer-Reviewed" certification badge.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Verified Peer Educator Review Workflow
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Evaluate: {bundle.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Disciplines: {bundle.disciplines.join(' · ')} · {bundle.gradeBand}
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300">
                  {errorMsg}
                </div>
              )}

              {/* Reviewer Credentials */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Reviewer Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dr. Ramesh Chander"
                    value={reviewerName}
                    onChange={(e) => setReviewerName(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Designation / Subject Specialism <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PGT Physics / DIET Master Trainer"
                    value={reviewerDesignation}
                    onChange={(e) => setReviewerDesignation(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    School / Institution Affiliation
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Kendriya Vidyalaya No. 2, Delhi Cantt"
                    value={reviewerSchool}
                    onChange={(e) => setReviewerSchool(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  />
                </div>
                <div className="flex items-center gap-2 pt-5">
                  <input
                    type="checkbox"
                    id="verifiedCheck"
                    checked={isVerified}
                    onChange={(e) => setIsVerified(e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded-sm border-slate-300"
                  />
                  <label htmlFor="verifiedCheck" className="text-xs text-slate-700 dark:text-slate-300 font-medium cursor-pointer">
                    Verified Educator (School / DIET / SCERT credentials verified)
                  </label>
                </div>
              </div>

              {/* 4 Review Criteria Rubrics */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Four Dimensions of Peer Review (NCF-SE Standard)
                </h3>

                {renderRatingButtons(
                  '1. Curriculum Alignment',
                  'Coherence with NCF-SE 2023, CBSE Subject Learning Outcomes, and Bloom tiers',
                  curriculumAlignment,
                  setCurriculumAlignment
                )}

                {renderRatingButtons(
                  '2. Classroom Usability & Pacing',
                  'Feasibility for 40+ student classrooms, realistic hours, and low-cost materials',
                  classroomUsability,
                  setClassroomUsability
                )}

                {renderRatingButtons(
                  '3. Source Verification',
                  'Accuracy of citations against official NCERT chapters, CBSE circulars, or SCERT editions',
                  sourceVerification,
                  setSourceVerification
                )}

                {renderRatingButtons(
                  '4. Accessibility & Inclusion',
                  'Universal design accommodations, multilingual options, and varied sensory modes',
                  accessibility,
                  setAccessibility
                )}
              </div>

              {/* Decision */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  Editorial Decision <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDecision('endorse')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-colors ${
                      decision === 'endorse'
                        ? 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-200'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${decision === 'endorse' ? 'text-emerald-600' : 'text-slate-400'}`} />
                    <div>
                      <span className="text-xs font-bold block">Endorse for Publication</span>
                      <span className="text-[11px] text-slate-500 block">Counts toward 2-review peer badge</span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setDecision('request-changes')}
                    className={`p-3 rounded-xl border text-left flex items-start gap-2.5 transition-colors ${
                      decision === 'request-changes'
                        ? 'border-amber-500 bg-amber-50/70 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <AlertCircle className={`w-5 h-5 shrink-0 ${decision === 'request-changes' ? 'text-amber-600' : 'text-slate-400'}`} />
                    <div>
                      <span className="text-xs font-bold block">Request Revisions</span>
                      <span className="text-[11px] text-slate-500 block">Needs adjustments before badge</span>
                    </div>
                  </button>
                </div>
              </div>

              {/* Detailed Qualitative Comments */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Peer Reviewer Findings & Recommendations <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="Summarize strengths, verifiable evidence checks, and specific classroom guidance for fellow teachers..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2.5 text-slate-800 dark:text-slate-200 leading-relaxed"
                  required
                />
              </div>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <a 
                  href="/peer-review-guidelines" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Read Peer Review Guidelines ↗
                </a>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Submit Formal Review
                  </button>
                </div>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
