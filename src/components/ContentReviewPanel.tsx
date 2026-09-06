import React, { useState } from 'react';
import { ContentStatus, ContentReviewStatus } from '@/types';
import { 
  CheckCircle2, AlertCircle, Clock, FileText, Send, 
  MessageSquare, UserCheck, ShieldAlert, Sparkles, ThumbsUp 
} from 'lucide-react';

interface ContentReviewPanelProps {
  gradeId: string;
  gradeName: string;
  contentStatus: ContentStatus;
  lastUpdated: string;
  sourceTypesUsed?: string[];
  initialReviewStatus?: ContentReviewStatus;
}

export function ContentReviewPanel({
  gradeId,
  gradeName,
  contentStatus,
  lastUpdated,
  sourceTypesUsed = ['Official CBSE/NCERT Curriculum', 'Subjects2Skills Pedagogical Framework', 'Teacher Contributed Feedback'],
  initialReviewStatus = 'teacher-pilot-in-progress'
}: ContentReviewPanelProps) {
  const [reviewStatus, setReviewStatus] = useState<ContentReviewStatus>(initialReviewStatus);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'feedback' | 'correction' | 'resource'>('overview');

  // Feedback form state
  const [role, setRole] = useState('Teacher');
  const [subject, setSubject] = useState('All Subjects');
  const [usefulRating, setUsefulRating] = useState('Yes');
  const [foundActivityQuickly, setFoundActivityQuickly] = useState('Yes');
  const [useInClassroom, setUseInClassroom] = useState('With adaptation');
  const [improvementText, setImprovementText] = useState('');
  const [missingResource, setMissingResource] = useState('');
  const [reviewerEmail, setReviewerEmail] = useState('');
  const [sessionContributions, setSessionContributions] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(`s2s_feedback_count_${gradeId}`);
      return stored ? parseInt(stored, 10) : 0;
    } catch {
      return 0;
    }
  });

  const formatReviewStatus = (status: ContentReviewStatus) => {
    switch (status) {
      case 'not-yet-reviewed': return { label: 'Not Yet Reviewed', badge: 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300' };
      case 'teacher-pilot-in-progress': return { label: 'Teacher Pilot in Progress', badge: 'bg-amber-100 text-amber-900 dark:bg-amber-950/50 dark:text-amber-300 border-amber-300' };
      case 'teacher-reviewed': return { label: 'Teacher Reviewed', badge: 'bg-blue-100 text-blue-900 dark:bg-blue-950/50 dark:text-blue-300 border-blue-300' };
      case 'curriculum-reviewed': return { label: 'Curriculum Reviewed', badge: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-950/50 dark:text-emerald-300 border-emerald-300' };
      case 'requires-update': return { label: 'Requires Update', badge: 'bg-rose-100 text-rose-900 dark:bg-rose-950/50 dark:text-rose-300 border-rose-300' };
      default: return { label: 'In Review', badge: 'bg-slate-100 text-slate-800' };
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFeedbackSubmitted(true);
    const newCount = sessionContributions + 1;
    setSessionContributions(newCount);
    try {
      localStorage.setItem(`s2s_feedback_count_${gradeId}`, newCount.toString());
    } catch (err) {
      console.warn('Could not save feedback count', err);
    }
  };

  const statusConfig = formatReviewStatus(reviewStatus);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
      {/* Panel Banner */}
      <div className="p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                Content Governance & Review
              </span>
              <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${statusConfig.badge}`}>
                {statusConfig.label}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              {gradeName} Content Status & Educator Review
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Last updated: {lastUpdated} · Public review cycle: Version 0.3
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveTab('correction')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                activeTab === 'correction'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              Suggest a Correction
            </button>
            <button
              onClick={() => setActiveTab('resource')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                activeTab === 'resource'
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50'
              }`}
            >
              Suggest a Resource
            </button>
            <button
              onClick={() => setActiveTab(activeTab === 'feedback' ? 'overview' : 'feedback')}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              {activeTab === 'feedback' ? 'Hide Feedback Form' : 'Submit Educator Feedback'}
            </button>
          </div>
        </div>

        {/* Mandatory Transparency & Trust Statement */}
        <div className="mt-4 p-3 rounded-lg bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
          <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Trust & Quality Statement:</strong> Content-status labels describe the maturity of Subjects2Skills material. 
            They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body. 
            Material is an independent educational framework developed to assist educators.
          </p>
        </div>
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-slate-50/40 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-xs">
        <div>
          <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">Content Stage</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200 capitalize">
            {contentStatus.replace('-', ' ')}
          </span>
        </div>
        <div>
          <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">Teacher Review Status</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {statusConfig.label}
          </span>
        </div>
        <div>
          <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">Source Types Used</span>
          <span className="font-semibold text-slate-800 dark:text-slate-200">
            {sourceTypesUsed.length} Curated Streams
          </span>
        </div>
        <div>
          <span className="font-bold text-slate-400 uppercase tracking-wider block mb-1">Educator Review Logs</span>
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {sessionContributions > 0 
              ? `${sessionContributions} local contribution${sessionContributions > 1 ? 's' : ''} recorded` 
              : 'Open for teacher contributions'}
          </span>
        </div>
      </div>

      {/* Feedback / Suggestion Form UI */}
      {(activeTab === 'feedback' || activeTab === 'correction' || activeTab === 'resource') && (
        <div className="p-6 bg-slate-50/60 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800">
          {feedbackSubmitted ? (
            <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200">
                Thank you for contributing to Subjects2Skills!
              </h4>
              <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto">
                Your feedback directly informs our v0.3 grade-wise release iterations. Educator inputs are reviewed weekly.
              </p>
              <button
                onClick={() => setFeedbackSubmitted(false)}
                className="mt-3 text-xs font-semibold text-emerald-700 underline"
              >
                Submit another note
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 max-w-3xl mx-auto">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-indigo-600" />
                  {activeTab === 'correction' 
                    ? 'Suggest a Specific Correction' 
                    : activeTab === 'resource' 
                    ? 'Suggest an Open Resource or Activity' 
                    : 'Educator Review & Usability Questionnaire'}
                </h4>
                <button
                  type="button"
                  onClick={() => setActiveTab('overview')}
                  className="text-xs text-slate-400 hover:text-slate-600"
                >
                  Close
                </button>
              </div>

              {/* 1. User Role */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    1. Your Professional Role *
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  >
                    <option value="Teacher">Classroom Teacher (Primary / Middle / Secondary)</option>
                    <option value="School Leader">School Leader / Principal / Academic Head</option>
                    <option value="Curriculum Designer">Curriculum Designer / Pedagogy Specialist</option>
                    <option value="Parent">Parent</option>
                    <option value="Student">Student</option>
                    <option value="Researcher">Education Researcher</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    2. Grade & Subject Explored
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      disabled
                      value={gradeName}
                      className="w-full text-xs p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-slate-600"
                    />
                    <select
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                    >
                      <option value="All Subjects">All Subjects</option>
                      <option value="Science / EVS">Science / EVS</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Social Science">Social Science</option>
                      <option value="Languages">Languages</option>
                      <option value="Computational Thinking / AI">Computational Thinking / AI</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 3, 4, 5 Usability Matrix */}
              <div className="grid sm:grid-cols-3 gap-3 p-3 bg-white dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Was the content useful?
                  </label>
                  <select
                    value={usefulRating}
                    onChange={(e) => setUsefulRating(e.target.value)}
                    className="w-full p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Yes">Yes, very clear</option>
                    <option value="Somewhat">Somewhat useful</option>
                    <option value="Needs Revision">Needs revision</option>
                    <option value="Not useful">Not useful</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Find usable activity quickly?
                  </label>
                  <select
                    value={foundActivityQuickly}
                    onChange={(e) => setFoundActivityQuickly(e.target.value)}
                    className="w-full p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Yes">Yes, immediately</option>
                    <option value="Took time">Took a few clicks</option>
                    <option value="No">No, couldn't find one</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Would use in classroom?
                  </label>
                  <select
                    value={useInClassroom}
                    onChange={(e) => setUseInClassroom(e.target.value)}
                    className="w-full p-1.5 rounded border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900"
                  >
                    <option value="Definitely">Definitely</option>
                    <option value="With adaptation">With local adaptation</option>
                    <option value="Unlikely">Unlikely</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>

              {/* 6. What should improve? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  What should improve in this grade's mapping or activities? *
                </label>
                <textarea
                  required
                  rows={3}
                  value={improvementText}
                  onChange={(e) => setImprovementText(e.target.value)}
                  placeholder="e.g. The duration of the flagship activity feels too short for a 40-student classroom; need a simpler tally sheet for rural school contexts..."
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              {/* 7. What resource is missing? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  What free resource, template, or guide is missing?
                </label>
                <input
                  type="text"
                  value={missingResource}
                  onChange={(e) => setMissingResource(e.target.value)}
                  placeholder="e.g. Printable A4 Hindi worksheet, NCERT textbook chapter mapping table..."
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              {/* 8. Optional: Interested in reviewing future content? */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                  Interested in piloting or reviewing future v0.3 releases? (Optional email)
                </label>
                <input
                  type="email"
                  value={reviewerEmail}
                  onChange={(e) => setReviewerEmail(e.target.value)}
                  placeholder="educator@school.edu.in"
                  className="w-full text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  Submit Feedback & Contribution
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
