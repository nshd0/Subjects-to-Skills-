import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  MessageSquare, 
  Edit3, 
  GitPullRequest, 
  History, 
  ShieldCheck, 
  Lock, 
  Unlock, 
  CheckCircle2, 
  XCircle, 
  Send, 
  RefreshCw, 
  Layers, 
  CornerDownRight, 
  Eye, 
  FileText, 
  AlertCircle,
  Clock,
  Laptop
} from 'lucide-react';
import { useRealtimeCoPlanning } from '../useRealtimeCoPlanning';
import { CollaboratorRole, CollaborativeLessonPlan } from '@/types';

export function RealtimeCoPlanningWorkspace() {
  const {
    unitPlan,
    updateField,
    updateLesson,
    addComment,
    addReply,
    toggleResolveComment,
    submitSuggestion,
    resolveSuggestion,
    setUserRole,
    runConcurrentConflictTest,
    lastConflictResult,
    isSuggestMode,
    setIsSuggestMode,
    activeTab,
    setActiveTab,
    syncStatus,
    pendingSuggestionsCount,
    activeCommentsCount
  } = useRealtimeCoPlanning();

  const [activeCommentSection, setActiveCommentSection] = useState<string | null>(null);
  const [commentInput, setCommentInput] = useState<string>('');
  const [replyInput, setReplyInput] = useState<{ [commentId: string]: string }>({});
  
  // Suggestion modal state for quick field proposals
  const [suggestModalField, setSuggestModalField] = useState<{ section: string; field: string; originalText: string } | null>(null);
  const [suggestTextValue, setSuggestTextValue] = useState<string>('');

  const isViewer = unitPlan.currentUserRole === 'viewer';
  const isOwner = unitPlan.currentUserRole === 'owner';

  const handleFieldChange = (field: string, newValue: string, originalValue: string, sectionName: string) => {
    if (isViewer) return;
    if (isSuggestMode) {
      setSuggestModalField({ section: sectionName, field, originalText: originalValue });
      setSuggestTextValue(newValue);
    } else {
      updateField(field, newValue);
    }
  };

  const handleLessonFieldChange = (
    lesson: CollaborativeLessonPlan, 
    field: keyof CollaborativeLessonPlan, 
    newValue: string
  ) => {
    if (isViewer) return;
    const originalValue = String(lesson[field] || '');
    const sectionName = `Lesson ${lesson.lessonNumber}`;
    if (isSuggestMode) {
      setSuggestModalField({ section: sectionName, field: String(field), originalText: originalValue });
      setSuggestTextValue(newValue);
    } else {
      updateLesson(lesson.id, { [field]: newValue });
    }
  };

  const handleConfirmSuggestion = () => {
    if (!suggestModalField || !suggestTextValue.trim()) return;
    submitSuggestion(
      suggestModalField.section,
      suggestModalField.field,
      suggestModalField.originalText,
      suggestTextValue
    );
    setSuggestModalField(null);
    setSuggestTextValue('');
    setActiveTab('suggestions');
  };

  const handlePostComment = (section: string, lessonId?: string) => {
    if (!commentInput.trim()) return;
    addComment(section, commentInput.trim(), lessonId);
    setCommentInput('');
    setActiveCommentSection(null);
  };

  const handlePostReply = (commentId: string) => {
    const text = replyInput[commentId];
    if (!text || !text.trim()) return;
    addReply(commentId, text.trim());
    setReplyInput(prev => ({ ...prev, [commentId]: '' }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-6">

        {/* Top Header Card */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Yjs CRDT Real-Time Co-Planning Engine
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  Google Docs-Style Co-Creation
                </span>
                <span className="text-xs text-slate-500">
                  Sync Status: <strong className="text-emerald-600 dark:text-emerald-400 capitalize">{syncStatus}</strong>
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
                <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Collaborative Unit Planning Workspace
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
                Simultaneous multi-teacher editing with real-time cursor presence, suggestion mode, threaded commentary, and conflict-free CRDT data convergence.
              </p>
            </div>

            {/* Active Collaborators Presence Bar & Role Switcher */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Active Educators ({unitPlan.collaborators.length})
                </span>
                <div className="flex items-center -space-x-2">
                  {unitPlan.collaborators.map((c) => (
                    <div
                      key={c.id}
                      title={`${c.name} (${c.role}) — in ${c.currentSection}`}
                      style={{ backgroundColor: c.avatarColor }}
                      className="w-9 h-9 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center text-white text-xs font-bold shadow-xs relative group cursor-pointer"
                    >
                      {c.name.charAt(0)}
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full" />
                      
                      {/* Tooltip */}
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-30 w-max px-2.5 py-1 bg-slate-900 text-white text-[11px] rounded shadow-lg">
                        <div className="font-bold">{c.name}</div>
                        <div className="text-slate-300 text-[10px]">Editing: {c.currentSection}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 hidden sm:block" />

              {/* Role Toggle for Testing */}
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                  Your Role
                </span>
                <select
                  value={unitPlan.currentUserRole}
                  onChange={(e) => setUserRole(e.target.value as CollaboratorRole)}
                  className="text-xs font-semibold px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                >
                  <option value="owner">Owner (Full Edit & Approval)</option>
                  <option value="editor">Editor (Direct Edit & Suggest)</option>
                  <option value="viewer">Viewer (Read-Only & Comment)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Mode & Workspace Navigation Controls */}
          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
            {/* Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('editor')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'editor'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <Edit3 className="w-3.5 h-3.5" />
                Unit Plan Canvas
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('comments')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 relative ${
                  activeTab === 'comments'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Discussions & Comments
                {activeCommentsCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                    {activeCommentsCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('suggestions')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 relative ${
                  activeTab === 'suggestions'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <GitPullRequest className="w-3.5 h-3.5" />
                Suggestions & Merges
                {pendingSuggestionsCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                    {pendingSuggestionsCount}
                  </span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('activity')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'activity'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <History className="w-3.5 h-3.5" />
                Activity Log ({unitPlan.activityLog.length})
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('crdt-demo')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  activeTab === 'crdt-demo'
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 border border-emerald-200 dark:border-emerald-800'
                }`}
              >
                <RefreshCw className="w-3.5 h-3.5" />
                CRDT Conflict Resolution Demo
              </button>
            </div>

            {/* Editing vs Suggesting Toggle */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">Mode:</span>
              <div className="flex rounded-xl bg-slate-100 dark:bg-slate-800 p-1 border border-slate-200 dark:border-slate-700">
                <button
                  type="button"
                  disabled={isViewer}
                  onClick={() => setIsSuggestMode(false)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    !isSuggestMode
                      ? 'bg-white dark:bg-slate-900 text-indigo-600 dark:text-indigo-400 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Edit3 className="w-3 h-3" />
                  Direct Editing
                </button>
                <button
                  type="button"
                  disabled={isViewer}
                  onClick={() => setIsSuggestMode(true)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    isSuggestMode
                      ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <GitPullRequest className="w-3 h-3" />
                  Suggesting
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Live Presence Notice Pill */}
        <div className="bg-indigo-50/70 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800/60 rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-3 text-xs text-indigo-900 dark:text-indigo-300">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <span>
              <strong>Riya Sen</strong> is actively working in <em>Lesson 2</em> · <strong>Amitabh Verma</strong> is reviewing <em>Summative Assessment</em>
            </span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <span>Last saved: {new Date(unitPlan.lastModifiedAt).toLocaleTimeString()}</span>
            <span>Version: #{unitPlan.version}</span>
          </div>
        </div>

        {/* TAB 1: UNIT PLAN EDITOR CANVAS */}
        {activeTab === 'editor' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Document Body (2 Columns) */}
            <div className="lg:col-span-2 space-y-6">

              {/* Unit Meta Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {unitPlan.grade} · {unitPlan.stage}
                    </span>
                    <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      CC BY-SA 4.0
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCommentSection('Unit Overview')}
                    className="p-2 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs flex items-center gap-1 font-semibold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Comment
                  </button>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Unit Plan Title
                  </label>
                  <input
                    type="text"
                    disabled={isViewer}
                    value={unitPlan.title}
                    onChange={(e) => handleFieldChange('title', e.target.value, unitPlan.title, 'Unit Title')}
                    className="w-full text-xl sm:text-2xl font-bold bg-transparent border-b border-dashed border-slate-300 dark:border-slate-700 pb-2 focus:outline-hidden focus:border-indigo-600 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Integrated Disciplines
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {unitPlan.disciplines.map((d) => (
                      <span key={d} className="px-3 py-1 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold border border-indigo-100 dark:border-indigo-900">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Essential Driving Question
                  </label>
                  <textarea
                    rows={2}
                    disabled={isViewer}
                    value={unitPlan.essentialQuestion}
                    onChange={(e) => handleFieldChange('essentialQuestion', e.target.value, unitPlan.essentialQuestion, 'Essential Question')}
                    className="w-full text-sm font-medium p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 focus:outline-hidden focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    Curriculum Standards & NCF-SE Goal
                  </label>
                  <input
                    type="text"
                    disabled={isViewer}
                    value={unitPlan.curriculumGoal}
                    onChange={(e) => handleFieldChange('curriculumGoal', e.target.value, unitPlan.curriculumGoal, 'Curriculum Goal')}
                    className="w-full text-xs font-medium p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  />
                </div>
              </div>

              {/* Lessons Container */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    Structured Lessons Sequence ({unitPlan.lessons.length})
                  </h2>
                  <span className="text-xs text-slate-500">Live multi-user cursor sync</span>
                </div>

                {unitPlan.lessons.map((lesson) => (
                  <div
                    key={lesson.id}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 relative"
                  >
                    {/* Live Presence indicator badge if collaborator is in this lesson */}
                    {lesson.lessonNumber === 2 && (
                      <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 text-[11px] font-semibold border border-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        Riya Sen is editing this lesson…
                      </div>
                    )}

                    <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-extrabold flex items-center justify-center text-sm">
                          {lesson.lessonNumber}
                        </span>
                        <div>
                          <input
                            type="text"
                            disabled={isViewer}
                            value={lesson.title}
                            onChange={(e) => handleLessonFieldChange(lesson, 'title', e.target.value)}
                            className="font-bold text-slate-900 dark:text-white text-base bg-transparent focus:outline-hidden border-b border-transparent focus:border-indigo-500"
                          />
                          <span className="text-xs text-slate-400 block">{lesson.durationMinutes} minutes recommended</span>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => setActiveCommentSection(`Lesson ${lesson.lessonNumber}`)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs flex items-center gap-1 font-semibold"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Comment
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div className="space-y-1">
                        <label className="font-bold text-slate-500">Learning Outcomes</label>
                        <textarea
                          rows={2}
                          disabled={isViewer}
                          value={lesson.learningOutcomes}
                          onChange={(e) => handleLessonFieldChange(lesson, 'learningOutcomes', e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-500">Teacher Action / Pedagogy</label>
                        <textarea
                          rows={2}
                          disabled={isViewer}
                          value={lesson.teacherAction}
                          onChange={(e) => handleLessonFieldChange(lesson, 'teacherAction', e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-500">Student Experiential Activity</label>
                        <textarea
                          rows={2}
                          disabled={isViewer}
                          value={lesson.studentActivity}
                          onChange={(e) => handleLessonFieldChange(lesson, 'studentActivity', e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
                          <Sparkles className="w-3.5 h-3.5" />
                          Differentiation & Inclusion Scaffolds
                        </label>
                        <textarea
                          rows={2}
                          disabled={isViewer}
                          value={lesson.differentiationNotes}
                          onChange={(e) => handleLessonFieldChange(lesson, 'differentiationNotes', e.target.value)}
                          className="w-full p-2.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-200 dark:border-indigo-900 text-slate-800 dark:text-slate-200"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Summative Assessment Section */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-bold text-slate-900 dark:text-white">Summative Capstone Assessment</h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveCommentSection('Summative Assessment')}
                    className="p-1.5 text-slate-400 hover:text-indigo-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-xs flex items-center gap-1 font-semibold"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Comment
                  </button>
                </div>

                <textarea
                  rows={3}
                  disabled={isViewer}
                  value={unitPlan.summativeAssessment}
                  onChange={(e) => handleFieldChange('summativeAssessment', e.target.value, unitPlan.summativeAssessment, 'Summative Assessment')}
                  className="w-full p-3 text-sm rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

            </div>

            {/* Sidebar Column: Comments & Suggestions Panel */}
            <div className="space-y-6">

              {/* Quick Inline Comment Composer Drawer */}
              {activeCommentSection && (
                <div className="bg-indigo-50 dark:bg-indigo-950/50 rounded-3xl p-5 border border-indigo-200 dark:border-indigo-800 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5" />
                      Add comment on: <strong>{activeCommentSection}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActiveCommentSection(null)}
                      className="text-slate-400 hover:text-slate-600 text-xs font-bold"
                    >
                      Cancel
                    </button>
                  </div>
                  <textarea
                    rows={3}
                    placeholder="Type your feedback or question for co-teachers..."
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 text-xs text-slate-900 dark:text-white focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => handlePostComment(activeCommentSection)}
                    className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" /> Post Comment
                  </button>
                </div>
              )}

              {/* Active Collaborators Box */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Live Collaborator Presence
                </h3>

                <div className="space-y-3 text-xs">
                  {unitPlan.collaborators.map((c) => (
                    <div key={c.id} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800">
                      <div className="flex items-center gap-2.5">
                        <div
                          style={{ backgroundColor: c.avatarColor }}
                          className="w-7 h-7 rounded-full text-white text-[11px] font-bold flex items-center justify-center"
                        >
                          {c.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white">{c.name}</div>
                          <div className="text-[11px] text-slate-500">Editing: {c.currentSection}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                        {c.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pending Suggestions Snapshot */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <GitPullRequest className="w-4 h-4 text-amber-500" />
                    Pending Suggestions ({pendingSuggestionsCount})
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('suggestions')}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View All
                  </button>
                </div>

                {pendingSuggestionsCount === 0 ? (
                  <p className="text-xs text-slate-400 py-3 text-center">No pending suggestions. All edits merged!</p>
                ) : (
                  <div className="space-y-3">
                    {unitPlan.suggestions.filter(s => s.status === 'pending').map((s) => (
                      <div key={s.id} className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/60 text-xs space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-amber-900 dark:text-amber-300">
                            {s.authorName} on {s.section}
                          </span>
                          <span className="text-[10px] text-slate-400">
                            {new Date(s.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-300 line-through text-[11px]">
                          {s.originalText}
                        </div>
                        <div className="text-emerald-700 dark:text-emerald-400 font-medium">
                          {s.suggestedText}
                        </div>

                        {(isOwner || unitPlan.currentUserRole === 'editor') && (
                          <div className="flex items-center gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => resolveSuggestion(s.id, 'accept')}
                              className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-[11px] font-bold flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-3 h-3" /> Accept
                            </button>
                            <button
                              type="button"
                              onClick={() => resolveSuggestion(s.id, 'reject')}
                              className="px-2.5 py-1 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 text-slate-700 dark:text-slate-200 rounded-lg text-[11px] font-semibold flex items-center gap-1"
                            >
                              <XCircle className="w-3 h-3" /> Decline
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Recent Comments Mini Stream */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    Open Threads ({activeCommentsCount})
                  </h3>
                  <button
                    type="button"
                    onClick={() => setActiveTab('comments')}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Open Drawer
                  </button>
                </div>

                <div className="space-y-3">
                  {unitPlan.comments.slice(0, 2).map((c) => (
                    <div key={c.id} className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 dark:text-slate-200">{c.authorName}</span>
                        <span className="text-[10px] text-slate-400">{c.section}</span>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: COMMENTS & DISCUSSION THREADS */}
        {activeTab === 'comments' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Teacher Co-Planning Discussion Threads
                </h2>
                <p className="text-xs text-slate-500">Inline dialogue directly anchored to unit modules and rubrics.</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCommentSection('General Discussion')}
                  className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> New Comment
                </button>
              </div>
            </div>

            {/* Comment Composer */}
            {activeCommentSection && (
              <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl border border-indigo-200 dark:border-indigo-800 space-y-3">
                <div className="text-xs font-bold text-indigo-900 dark:text-indigo-300">
                  Posting comment to: {activeCommentSection}
                </div>
                <textarea
                  rows={3}
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                  placeholder="Share pedagogical recommendations, local context, or inquiry ideas..."
                  className="w-full p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                />
                <div className="flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveCommentSection(null)}
                    className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePostComment(activeCommentSection)}
                    className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5" /> Post Thread
                  </button>
                </div>
              </div>
            )}

            {/* Threads List */}
            <div className="space-y-4">
              {unitPlan.comments.map((comm) => (
                <div
                  key={comm.id}
                  className={`p-5 rounded-2xl border transition-all ${
                    comm.resolved
                      ? 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-75'
                      : 'bg-white dark:bg-slate-800/40 border-slate-200 dark:border-slate-700 shadow-xs'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                        {comm.authorName.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-white text-sm">
                          {comm.authorName}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          Section: <strong>{comm.section}</strong> · {new Date(comm.timestamp).toLocaleString()}
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => toggleResolveComment(comm.id)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 ${
                        comm.resolved
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      {comm.resolved ? 'Resolved' : 'Mark Resolved'}
                    </button>
                  </div>

                  <p className="mt-3 text-sm text-slate-700 dark:text-slate-300 pl-11">
                    {comm.text}
                  </p>

                  {/* Replies */}
                  {comm.replies.length > 0 && (
                    <div className="mt-4 pl-11 space-y-2 border-l-2 border-slate-200 dark:border-slate-700 ml-4">
                      {comm.replies.map((rep) => (
                        <div key={rep.id} className="p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl text-xs space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900 dark:text-white">{rep.authorName}</span>
                            <span className="text-[10px] text-slate-400">{new Date(rep.timestamp).toLocaleTimeString()}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-300">{rep.text}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Reply Input */}
                  <div className="mt-3 pl-11 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Write a reply..."
                      value={replyInput[comm.id] || ''}
                      onChange={(e) => setReplyInput(prev => ({ ...prev, [comm.id]: e.target.value }))}
                      className="grow px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
                      onKeyDown={(e) => e.key === 'Enter' && handlePostReply(comm.id)}
                    />
                    <button
                      type="button"
                      onClick={() => handlePostReply(comm.id)}
                      className="px-3 py-1.5 bg-slate-900 text-white dark:bg-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-800"
                    >
                      Reply
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: SUGGESTIONS & PENDING MERGES */}
        {activeTab === 'suggestions' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <GitPullRequest className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Collaborative Suggestion Mode & Proposed Edits
              </h2>
              <p className="text-xs text-slate-500">
                In Suggestion Mode, edits are non-destructive proposals requiring review from the unit plan lead before applying to the master curriculum document.
              </p>
            </div>

            <div className="space-y-4">
              {unitPlan.suggestions.map((sug) => (
                <div
                  key={sug.id}
                  className={`p-6 rounded-2xl border space-y-4 ${
                    sug.status === 'accepted'
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900'
                      : sug.status === 'rejected'
                      ? 'bg-rose-50/40 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900 opacity-70'
                      : 'bg-white dark:bg-slate-800/50 border-amber-200 dark:border-amber-900 shadow-xs'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        sug.status === 'pending'
                          ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                          : sug.status === 'accepted'
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                      }`}>
                        {sug.status}
                      </span>
                      <span className="text-xs font-bold text-slate-900 dark:text-white">
                        Proposed by <strong>{sug.authorName}</strong> on <em>{sug.section} · {sug.field}</em>
                      </span>
                    </div>

                    <span className="text-xs text-slate-400">
                      {new Date(sug.timestamp).toLocaleString()}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/60 dark:bg-rose-950/30 border border-rose-100 dark:border-rose-900 space-y-1">
                      <span className="font-bold text-rose-700 dark:text-rose-400 uppercase text-[10px]">Original Text</span>
                      <p className="line-through text-slate-700 dark:text-slate-300 leading-relaxed">
                        {sug.originalText}
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900 space-y-1">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 uppercase text-[10px]">Proposed Amendment</span>
                      <p className="text-slate-900 dark:text-slate-100 font-medium leading-relaxed">
                        {sug.suggestedText}
                      </p>
                    </div>
                  </div>

                  {sug.status === 'pending' && (isOwner || unitPlan.currentUserRole === 'editor') && (
                    <div className="flex items-center justify-end gap-3 pt-2">
                      <button
                        type="button"
                        onClick={() => resolveSuggestion(sug.id, 'reject')}
                        className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5"
                      >
                        <XCircle className="w-3.5 h-3.5" /> Decline Suggestion
                      </button>
                      <button
                        type="button"
                        onClick={() => resolveSuggestion(sug.id, 'accept')}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" /> Accept & Merge Change
                      </button>
                    </div>
                  )}

                  {sug.reviewedBy && (
                    <div className="text-[11px] text-slate-400 italic">
                      Reviewed by {sug.reviewedBy} at {new Date(sug.reviewedAt || Date.now()).toLocaleTimeString()}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: ACTIVITY LOG */}
        {activeTab === 'activity' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <History className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Real-Time Co-Planning Audit Trail
              </h2>
              <p className="text-xs text-slate-500">Every keystroke, edit, comment, and endorsement is recorded with precise author attribution.</p>
            </div>

            <div className="space-y-3">
              {unitPlan.activityLog.map((log) => (
                <div key={log.id} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 text-xs">
                  <div className="w-7 h-7 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center shrink-0">
                    {log.authorName.charAt(0)}
                  </div>
                  <div className="grow">
                    <span className="font-bold text-slate-900 dark:text-white">{log.authorName}</span>{' '}
                    <span className="text-slate-600 dark:text-slate-300">{log.action}</span>
                    <div className="text-[10px] text-slate-400 mt-0.5">
                      {new Date(log.timestamp).toLocaleString()} · Section: {log.section}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: CRDT CONFLICT RESOLUTION LAB */}
        {activeTab === 'crdt-demo' && (
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <span className="px-3 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 mb-2 inline-block">
                Conflict-Free Replicated Data Types (CRDT) Verified
              </span>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Real-Time CRDT Multi-User Synchronization Test
              </h2>
              <p className="text-xs text-slate-500 max-w-3xl leading-relaxed mt-1">
                Subjects2Skills employs <strong>Yjs CRDT</strong> to deliver seamless offline-first, Google Docs-style collaboration. Test what happens when two educators on separate devices edit the exact same lesson plan simultaneously.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 space-y-3">
                <div className="flex items-center gap-2 text-indigo-900 dark:text-indigo-300 font-bold text-sm">
                  <Laptop className="w-4 h-4" />
                  Educator A Device (Desktop)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Modifies Lesson 1 materials to add a <em>Digital Dissolved Oxygen Sensor</em> while working in the school biology lab.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 space-y-3">
                <div className="flex items-center gap-2 text-amber-900 dark:text-amber-300 font-bold text-sm">
                  <Laptop className="w-4 h-4" />
                  Educator B Device (Mobile/Offline)
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Concurrently modifies Lesson 1 differentiation notes to insert <em>Bilingual audio guide scaffolding</em> on a mobile bus commute.
                </p>
              </div>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-slate-800/60 rounded-2xl border border-slate-200 dark:border-slate-700 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                    Execute Concurrent Conflict Simulation
                  </h4>
                  <p className="text-xs text-slate-500">
                    Creates two disconnected Yjs sub-documents, executes parallel non-atomic edits, and merges state vectors.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={runConcurrentConflictTest}
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-xs transition-colors shrink-0"
                >
                  <RefreshCw className="w-4 h-4" />
                  Run Concurrent Simulation
                </button>
              </div>

              {lastConflictResult && (
                <div className="p-4 rounded-xl bg-emerald-100/70 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 text-xs font-mono leading-relaxed space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-emerald-800 dark:text-emerald-300">
                    <CheckCircle2 className="w-4 h-4" />
                    CRDT State Vector Convergence Success:
                  </div>
                  <div>{lastConflictResult}</div>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
