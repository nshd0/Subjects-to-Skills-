import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, Send, ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { SubjectSkillMap } from '@/types';

interface SuggestAlignmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  skill: SubjectSkillMap | null;
  onSubmit: (suggestion: {
    skillId: string;
    skillName: string;
    stateCode: string;
    stateName: string;
    grade: string;
    subject: string;
    textbookTitle: string;
    chapterNumber: string;
    chapterTitle: string;
    pageRange: string;
    rationale: string;
    contributorName: string;
    contributorEmail: string;
  }) => void;
}

export function SuggestAlignmentModal({ isOpen, onClose, skill, onSubmit }: SuggestAlignmentModalProps) {
  const [stateCode, setStateCode] = useState<'kerala-scert' | 'maharashtra-scert' | 'cbse-ncert' | 'other'>('kerala-scert');
  const [customStateName, setCustomStateName] = useState('');
  const [textbookTitle, setTextbookTitle] = useState('');
  const [chapterNumber, setChapterNumber] = useState('');
  const [chapterTitle, setChapterTitle] = useState('');
  const [pageRange, setPageRange] = useState('');
  const [rationale, setRationale] = useState('');
  const [contributorName, setContributorName] = useState('');
  const [contributorEmail, setContributorEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  if (!isOpen || !skill) return null;

  const stateNameMap: Record<string, string> = {
    'kerala-scert': 'Kerala SCERT (Samagra)',
    'maharashtra-scert': 'Maharashtra SCERT (Balbharati)',
    'cbse-ncert': 'National (CBSE / NCERT)',
    'other': customStateName || 'Other State SCERT'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textbookTitle.trim() || !chapterTitle.trim() || !pageRange.trim() || !rationale.trim() || !contributorName.trim()) {
      setErrorMsg('Please complete all required fields including textbook title, chapter, pages, and pedagogical bridging rationale.');
      return;
    }

    onSubmit({
      skillId: skill.id,
      skillName: skill.primarySkill || skill.competency,
      stateCode,
      stateName: stateNameMap[stateCode],
      grade: skill.grade,
      subject: skill.subject,
      textbookTitle,
      chapterNumber,
      chapterTitle,
      pageRange,
      rationale,
      contributorName,
      contributorEmail: contributorEmail || 'teacher@school.edu.in'
    });

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 2200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-xl w-full p-6 shadow-xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1 rounded-lg"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Alignment Submitted for Peer Review
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                Thank you! Your proposed state textbook alignment has been placed into the verified educator review queue. Once verified by 2 educators, it will be published in the framework.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  State SCERT Alignment Suggestion
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  Connect Skill to State Textbook
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Target Skill: <strong className="text-slate-700 dark:text-slate-300">{skill.primarySkill || skill.competency}</strong> ({skill.grade} · {skill.subject})
                </p>
              </div>

              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    State Board / SCERT <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={stateCode}
                    onChange={(e) => setStateCode(e.target.value as any)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  >
                    <option value="kerala-scert">Kerala SCERT (Samagra)</option>
                    <option value="maharashtra-scert">Maharashtra SCERT (Balbharati)</option>
                    <option value="cbse-ncert">National (CBSE / NCERT)</option>
                    <option value="other">Other State SCERT</option>
                  </select>
                </div>

                {stateCode === 'other' ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Specify State Board <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Karnataka DSERT"
                      value={customStateName}
                      onChange={(e) => setCustomStateName(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Textbook Title <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Mathematics Part 1 (2024 Edition)"
                      value={textbookTitle}
                      onChange={(e) => setTextbookTitle(e.target.value)}
                      className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                      required
                    />
                  </div>
                )}
              </div>

              {stateCode === 'other' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Textbook Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Science Part 1"
                    value={textbookTitle}
                    onChange={(e) => setTextbookTitle(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    required
                  />
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Chapter Number
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Chapter 4"
                    value={chapterNumber}
                    onChange={(e) => setChapterNumber(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Chapter Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Repeated Multiplication"
                    value={chapterTitle}
                    onChange={(e) => setChapterTitle(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Specific Page Range <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. pp. 78–89"
                  value={pageRange}
                  onChange={(e) => setPageRange(e.target.value)}
                  className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Pedagogical Bridging Note (How chapter maps to this competency) <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={3}
                  placeholder="Explain how the state chapter's activities, exercises, or examples develop the target NCF-SE competency..."
                  value={rationale}
                  onChange={(e) => setRationale(e.target.value)}
                  className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 border-t border-slate-100 dark:border-slate-800">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Name & Designation <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Anita George, TGT Science"
                    value={contributorName}
                    onChange={(e) => setContributorName(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    School / State Email (Verification)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. anita.g@keralaeducation.gov.in"
                    value={contributorEmail}
                    onChange={(e) => setContributorEmail(e.target.value)}
                    className="w-full text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 p-2 text-slate-800 dark:text-slate-200"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-indigo-500" />
                  <span>Citations undergo 2-teacher peer verification</span>
                </div>
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
                    className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Alignment
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
