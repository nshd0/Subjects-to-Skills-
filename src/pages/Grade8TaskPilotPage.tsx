import React, { useState, useMemo } from 'react';
import { 
  CheckCircle2, 
  Search, 
  Filter, 
  Download, 
  Award, 
  Flame, 
  AlertTriangle, 
  Layers, 
  BookOpen, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Users, 
  Cpu, 
  Atom, 
  Calculator, 
  Landmark, 
  Globe, 
  Clock, 
  BarChart2, 
  CheckSquare, 
  HelpCircle,
  ExternalLink,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { 
  GRADE_8_TASKS, 
  GRADE_8_COMPETENCIES, 
  SAFE_SCHOOL_ZONE_PROJECT, 
  TaskItem,
  CompetencySummary 
} from '@/data/grade8Tasks';

export const Grade8TaskPilotPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'library' | 'student-dashboard' | 'teacher-dashboard' | 'project-blueprint' | 'architecture'>('library');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<string>('all');
  const [selectedSkillType, setSelectedSkillType] = useState<string>('all');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  // Simulated Student State
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(new Set([
    'SCI-8-FORCE-1.1', 'SCI-8-FORCE-1.2', 'SCI-8-FORCE-2.1', 'SCI-8-FORCE-3.1',
    'MATH-8-LINEQ-1.1', 'MATH-8-LINEQ-1.2', 'MATH-8-LINEQ-2.1',
    'AI-8-SCOPE-1.1', 'AI-8-SCOPE-1.2', 'AI-8-SCOPE-2.1',
    'SOC-8-CONST-1.1', 'SOC-8-CONST-2.1',
    'INT-8-RESDV-1.1', 'INT-8-RESDV-2.1'
  ]));

  const toggleTaskCompletion = (taskId: string) => {
    setCompletedTaskIds(prev => {
      const next = new Set(prev);
      if (next.has(taskId)) {
        next.delete(taskId);
      } else {
        next.add(taskId);
      }
      return next;
    });
  };

  const filteredTasks = useMemo(() => {
    return GRADE_8_TASKS.filter(task => {
      const matchesSubject = selectedSubject === 'all' || task.subject.toLowerCase() === selectedSubject.toLowerCase();
      const matchesResource = selectedResource === 'all' || task.resourceLevel.toLowerCase() === selectedResource.toLowerCase();
      const matchesSkill = selectedSkillType === 'all' || task.skillType.toLowerCase() === selectedSkillType.toLowerCase();
      const matchesSearch = searchQuery === '' || 
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.taskId.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.competency.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.subCompetency.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSubject && matchesResource && matchesSkill && matchesSearch;
    });
  }, [selectedSubject, selectedResource, selectedSkillType, searchQuery]);

  const subjectIcons: Record<string, React.ReactNode> = {
    'Science': <Atom className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    'Mathematics': <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    'AI': <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    'Social Science': <Landmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    'Interdisciplinary': <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
  };

  const exportTasksJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(GRADE_8_TASKS, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "grade-8-tasks-library.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
      {/* Top Banner / Hero */}
      <section className="bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded bg-indigo-800/80 border border-indigo-700/50">Task-Based Learning (TBL) Architecture</span>
              <span>•</span>
              <span>Grade 8 Flagship Pilot</span>
              <span>•</span>
              <span>NCF-SE 2023 & NEP 2020 Aligned</span>
            </div>
            <button
              onClick={exportTasksJson}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Export Task Library (JSON)
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4">
            Grade 8 Competency Decomposition Pilot
          </h1>
          <p className="text-base sm:text-lg text-indigo-200 max-w-4xl leading-relaxed mb-8">
            Transforming abstract curriculum goals into observable, measurable, low-resource classroom tasks.
            Covering 5 foundational competencies across Science, Mathematics, Artificial Intelligence, Social Science, and Interdisciplinary Sustainability with 62 classroom-ready tasks.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-indigo-300">62</div>
              <div className="text-xs text-indigo-300/80 font-medium">Decomposed Tasks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-blue-300">5</div>
              <div className="text-xs text-blue-300/80 font-medium">Core Competencies</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-300">20</div>
              <div className="text-xs text-emerald-300/80 font-medium">Sub-Competencies</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-purple-300">100%</div>
              <div className="text-xs text-purple-300/80 font-medium">Low-Resource Feasible</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm col-span-2 sm:col-span-1">
              <div className="text-2xl font-black text-amber-300">1</div>
              <div className="text-xs text-amber-300/80 font-medium">Multi-Subject Blueprint</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-4 overflow-x-auto py-3 no-scrollbar" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'library'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Task Library ({GRADE_8_TASKS.length})
            </button>

            <button
              onClick={() => setActiveTab('student-dashboard')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'student-dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Award className="w-4 h-4" />
              Student Progress View
            </button>

            <button
              onClick={() => setActiveTab('teacher-dashboard')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'teacher-dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Users className="w-4 h-4" />
              Teacher Orchestrator
            </button>

            <button
              onClick={() => setActiveTab('project-blueprint')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'project-blueprint'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              Safe School Zone Project
            </button>

            <button
              onClick={() => setActiveTab('architecture')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'architecture'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <FileText className="w-4 h-4" />
              Competency Docs
            </button>
          </nav>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* ========================================================= */}
        {/* TAB 1: TASK LIBRARY EXPLORER */}
        {/* ========================================================= */}
        {activeTab === 'library' && (
          <div className="space-y-6">
            {/* Filter Bar */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 absolute left-3.5 top-3 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by title, taskId, verb, or competency keywords..."
                    className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-slate-100"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Subjects (5)</option>
                    <option value="science">Science</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="ai">AI</option>
                    <option value="social science">Social Science</option>
                    <option value="interdisciplinary">Interdisciplinary</option>
                  </select>

                  <select
                    value={selectedResource}
                    onChange={(e) => setSelectedResource(e.target.value)}
                    className="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">Resource Level: All</option>
                    <option value="low">Low (Classroom)</option>
                    <option value="medium">Medium (Lab / Device)</option>
                  </select>

                  <select
                    value={selectedSkillType}
                    onChange={(e) => setSelectedSkillType(e.target.value)}
                    className="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">Skill: All</option>
                    <option value="conceptual understanding">Conceptual</option>
                    <option value="procedural skill">Procedural</option>
                    <option value="critical thinking">Critical Thinking</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="communication">Communication</option>
                  </select>
                </div>
              </div>

              {/* Active Filter Chips */}
              <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div>
                  Showing <span className="font-bold text-slate-900 dark:text-slate-100">{filteredTasks.length}</span> of {GRADE_8_TASKS.length} tasks
                </div>
                {(selectedSubject !== 'all' || selectedResource !== 'all' || selectedSkillType !== 'all' || searchQuery !== '') && (
                  <button
                    onClick={() => {
                      setSelectedSubject('all');
                      setSelectedResource('all');
                      setSelectedSkillType('all');
                      setSearchQuery('');
                    }}
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium"
                  >
                    Reset all filters
                  </button>
                )}
              </div>
            </div>

            {/* Task Card List */}
            <div className="space-y-4">
              {filteredTasks.map((task) => {
                const isExpanded = expandedTaskId === task.taskId;
                const isCompleted = completedTaskIds.has(task.taskId);

                return (
                  <div
                    key={task.taskId}
                    className={`bg-white dark:bg-slate-900 rounded-xl border transition-all ${
                      isCompleted 
                        ? 'border-emerald-300 dark:border-emerald-800/80 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {/* Header Row */}
                    <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => toggleTaskCompletion(task.taskId)}
                          title={isCompleted ? "Mark incomplete" : "Mark completed in pilot"}
                          className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-colors ${
                            isCompleted
                              ? 'bg-emerald-600 text-white'
                              : 'border border-slate-300 dark:border-slate-600 hover:border-indigo-500'
                          }`}
                        >
                          {isCompleted && <CheckCircle2 className="w-4 h-4" />}
                        </button>

                        <div className="space-y-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {task.taskId}
                            </span>
                            <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300">
                              {subjectIcons[task.subject]}
                              {task.subject}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              • {task.timeEstimate}
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400">
                              • {task.skillType}
                            </span>
                          </div>

                          <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                            {task.title}
                          </h3>

                          <div className="text-xs text-slate-600 dark:text-slate-400">
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Sub-Competency:</span> {task.subCompetency}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-end sm:self-start">
                        <button
                          onClick={() => setExpandedTaskId(isExpanded ? null : task.taskId)}
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                        >
                          {isExpanded ? (
                            <><span>Hide Details</span><ChevronUp className="w-3.5 h-3.5" /></>
                          ) : (
                            <><span>View Scaffold & Criteria</span><ChevronDown className="w-3.5 h-3.5" /></>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expandable Deep Content */}
                    {isExpanded && (
                      <div className="px-4 pb-5 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs bg-slate-50/50 dark:bg-slate-900/50 rounded-b-xl">
                        {/* Success Criteria */}
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-2 flex items-center gap-1.5">
                            <CheckSquare className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                            Success Criteria (Observable Evidence):
                          </h4>
                          <ul className="space-y-1.5 pl-5 list-disc text-slate-700 dark:text-slate-300">
                            {task.successCriteria.map((criterion, idx) => (
                              <li key={idx} className="leading-relaxed">{criterion}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Differentiation Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                          <div className="p-3 rounded-lg bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40">
                            <div className="font-bold text-blue-900 dark:text-blue-300 flex items-center gap-1 mb-1">
                              <HelpCircle className="w-3.5 h-3.5" />
                              Scaffold Support (For Struggling Learners):
                            </div>
                            <p className="text-blue-800 dark:text-blue-200 leading-relaxed">
                              {task.scaffoldSupport}
                            </p>
                          </div>

                          <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40">
                            <div className="font-bold text-amber-900 dark:text-amber-300 flex items-center gap-1 mb-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              Extension Challenge (For Advanced Students):
                            </div>
                            <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                              {task.extensionChallenge}
                            </p>
                          </div>
                        </div>

                        {/* Citation & Metadata */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-slate-500 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-800">
                          <div>
                            <span className="font-semibold text-slate-700 dark:text-slate-300">Official Citation:</span> {task.sourceCitation}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 font-mono text-[11px]">
                              {task.trackAlignment}
                            </span>
                            <span className="px-2 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-[11px]">
                              {task.assessmentMode}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: STUDENT DASHBOARD MOCKUP & DEMO */}
        {/* ========================================================= */}
        {activeTab === 'student-dashboard' && (
          <div className="space-y-8">
            {/* Student Profile Card */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-indigo-600/20">
                  A
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">Aarav Sharma</h2>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">Class 8-B</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Middle Stage Learning Expedition • Delhi Public School Pilot Group
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/40 text-amber-800 dark:text-amber-200">
                  <Flame className="w-5 h-5 text-amber-500 animate-pulse" />
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">Momentum</div>
                    <div className="text-sm font-black">7-Day Streak</div>
                  </div>
                </div>

                <div className="px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/40 text-indigo-800 dark:text-indigo-200">
                  <div className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Total Completed</div>
                  <div className="text-sm font-black">{completedTaskIds.size} / {GRADE_8_TASKS.length} Tasks</div>
                </div>
              </div>
            </div>

            {/* Competency Progress Bars */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">Competency Mastery Bars</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Real-time completion across the 5 Grade 8 pilot domains</p>
                </div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-md">
                  Observable Mastery Tracking
                </span>
              </div>

              <div className="space-y-4">
                {GRADE_8_COMPETENCIES.map((comp) => {
                  const subjectTasks = GRADE_8_TASKS.filter(t => t.subject === comp.subject);
                  const completedInSubject = subjectTasks.filter(t => completedTaskIds.has(t.taskId)).length;
                  const pct = Math.round((completedInSubject / subjectTasks.length) * 100);

                  return (
                    <div key={comp.id} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-800 dark:text-slate-200 flex items-center gap-2">
                          {subjectIcons[comp.subject]}
                          {comp.subject}: {comp.title}
                        </span>
                        <span className="font-mono font-bold text-slate-600 dark:text-slate-400">
                          {completedInSubject} / {subjectTasks.length} ({pct}%)
                        </span>
                      </div>
                      <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${comp.colorScheme.progressBar} transition-all duration-500`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Earned Badges & Crests Showcase */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  Sub-Competency Mastery Crests
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Unlocked upon achieving 100% completion within a sub-competency cluster</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {GRADE_8_COMPETENCIES.map((comp, idx) => {
                  const isUnlocked = idx < 3; // Simulated badge lock state

                  return (
                    <div
                      key={comp.id}
                      className={`p-4 rounded-xl border flex items-start gap-3.5 transition-all ${
                        isUnlocked
                          ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/50 shadow-sm'
                          : 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 opacity-60'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                        isUnlocked
                          ? 'bg-amber-500 text-white shadow-sm'
                          : 'bg-slate-300 dark:bg-slate-700 text-slate-500'
                      }`}>
                        {isUnlocked ? '🏅' : '🔒'}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100">{comp.badgeName}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400">{comp.subject} • Sub-Comp C1</div>
                        <div className="text-[11px] font-semibold text-amber-600 dark:text-amber-400">
                          {isUnlocked ? 'Verified & Awarded' : '2 tasks remaining'}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: TEACHER CLASSROOM ORCHESTRATOR */}
        {/* ========================================================= */}
        {activeTab === 'teacher-dashboard' && (
          <div className="space-y-8">
            {/* Class Aggregate Summary Bar */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Pilot Classroom</div>
                <div className="text-xl font-black text-slate-900 dark:text-slate-100 mt-1">Class 8-B (34 Students)</div>
                <div className="text-xs text-slate-500">Middle Stage Cohort</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Class Completion Rate</div>
                <div className="text-xl font-black text-emerald-600 dark:text-emerald-400 mt-1">68.4% Average</div>
                <div className="text-xs text-slate-500">1,446 Total Tasks Logged</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Peer Reviews Verified</div>
                <div className="text-xl font-black text-indigo-600 dark:text-indigo-400 mt-1">142 Evaluations</div>
                <div className="text-xs text-slate-500">Double-blind grading</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase text-slate-500 dark:text-slate-400">Intervention Flags</div>
                <div className="text-xl font-black text-rose-600 dark:text-rose-400 mt-1">4 Active ⚠️</div>
                <div className="text-xs text-slate-500">Scaffolds required</div>
              </div>
            </div>

            {/* Proactive Intervention Alert Box */}
            <div className="bg-rose-50/70 dark:bg-rose-950/30 p-6 rounded-2xl border border-rose-200 dark:border-rose-900/50 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-black text-rose-900 dark:text-rose-200 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-rose-600 dark:text-rose-400" />
                  Active Intervention Flags (Students Stuck on Specific Tasks)
                </h3>
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-rose-200 dark:bg-rose-900/60 text-rose-900 dark:text-rose-200">
                  Priority Action Required
                </span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">Rohan Verma (Roll #14)</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 font-mono text-slate-600 dark:text-slate-400">MATH-8-LINEQ-3.1</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Stuck &gt;48h: Repeated algebraic sign slip when distributing negative multiplier across brackets.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">
                      Deploy Scaffold Support
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300">
                      Assign Peer Buddy (Aarav)
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-slate-900 dark:text-slate-100">Kavya Iyer (Roll #22)</span>
                      <span className="px-2 py-0.5 text-xs rounded bg-slate-100 dark:bg-slate-800 font-mono text-slate-600 dark:text-slate-400">SCI-8-FORCE-3.3</span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                      Resource issue: Missing ruler incline ramp for surface friction trials.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 text-xs font-bold rounded-lg bg-indigo-600 text-white hover:bg-indigo-500">
                      Provide Lab Substitute
                    </button>
                    <button className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300">
                      Dismiss Flag
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Task Completion Heatmap Table */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100">Class-Wide Completion Rates</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Monitoring drop-offs and mastery bottlenecks across the pilot cohort</p>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-600 dark:text-emerald-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> &gt;80% Mastered
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-amber-600 dark:text-amber-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> 50–80% In Progress
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-rose-600 dark:text-rose-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span> &lt;50% Reteach
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-800">
                    <tr>
                      <th className="py-3 px-4">Task ID</th>
                      <th className="py-3 px-4">Task Title</th>
                      <th className="py-3 px-4">Subject</th>
                      <th className="py-3 px-4">Est. Time</th>
                      <th className="py-3 px-4">Completed</th>
                      <th className="py-3 px-4">Completion %</th>
                      <th className="py-3 px-4">Class Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {GRADE_8_TASKS.slice(0, 10).map((t, idx) => {
                      const completedCount = [34, 32, 29, 31, 30, 27, 28, 18, 33, 24][idx % 10];
                      const pct = Math.round((completedCount / 34) * 100);

                      return (
                        <tr key={t.taskId} className="hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-slate-800 dark:text-slate-200">{t.taskId}</td>
                          <td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-100 max-w-xs truncate">{t.title}</td>
                          <td className="py-3 px-4 font-semibold text-slate-600 dark:text-slate-400">{t.subject}</td>
                          <td className="py-3 px-4 text-slate-500">{t.timeEstimate}</td>
                          <td className="py-3 px-4 font-mono font-semibold">{completedCount} / 34</td>
                          <td className="py-3 px-4 font-mono font-bold">
                            <span className={pct >= 80 ? 'text-emerald-600 dark:text-emerald-400' : pct >= 50 ? 'text-amber-600 dark:text-amber-400' : 'text-rose-600 dark:text-rose-400'}>
                              {pct}%
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                              pct >= 80 
                                ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-200' 
                                : pct >= 50 
                                ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200' 
                                : 'bg-rose-100 dark:bg-rose-950/60 text-rose-800 dark:text-rose-200'
                            }`}>
                              {pct >= 80 ? 'High Mastery' : pct >= 50 ? 'In Progress' : 'Needs Reteach'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: MULTIDISCIPLINARY PROJECT BLUEPRINT */}
        {/* ========================================================= */}
        {activeTab === 'project-blueprint' && (
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200">
                      Capstoned Multi-Subject Project
                    </span>
                    <span className="text-xs text-slate-500 font-medium">3–4 Weeks Duration</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-slate-100">
                    {SAFE_SCHOOL_ZONE_PROJECT.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
                    4 Integrated Subjects
                  </span>
                </div>
              </div>

              {/* Challenge Statement Banner */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-teal-500/10 border border-amber-300/40 dark:border-amber-700/40">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-400 mb-1">
                  Project Challenge Statement:
                </div>
                <p className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-200 italic leading-relaxed">
                  "{SAFE_SCHOOL_ZONE_PROJECT.challengeStatement}"
                </p>
              </div>

              {/* Required Tasks Sequence Matrix */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Required Task Sequence Across Disciplines:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {SAFE_SCHOOL_ZONE_PROJECT.requiredTasks.map((req, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 text-white font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div className="space-y-0.5 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-indigo-600 dark:text-indigo-400">{req.taskId}</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">({req.subject})</span>
                        </div>
                        <div className="text-slate-600 dark:text-slate-400">{req.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Final Deliverables Breakdown */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                  Assembled Project Deliverables:
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SAFE_SCHOOL_ZONE_PROJECT.deliverables.map((deliv, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-2">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-black text-sm flex items-center justify-center">
                        #{idx + 1}
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm">{deliv.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{deliv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Assessment Rubric Link */}
              <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-between">
                <div>
                  <div className="font-bold text-xs text-slate-900 dark:text-slate-100">Comprehensive 4-Tier Assessment Rubric</div>
                  <div className="text-xs text-slate-500">Evaluates Force Physics (25%), Algebraic Equations (25%), Civics & Article 21 (25%), and AI Scoping (25%)</div>
                </div>
                <button
                  onClick={() => setActiveTab('architecture')}
                  className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 text-white hover:bg-indigo-500"
                >
                  View Full Rubric
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: COMPETENCY ARCHITECTURE DOCS */}
        {/* ========================================================= */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h2 className="text-xl font-black text-slate-900 dark:text-slate-100 mb-2">
                Curriculum Decomposition Architecture Documents
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Complete, peer-review ready markdown specifications grounded in official NCERT, CBSE, and NCF-SE 2023 frameworks.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <Atom className="w-5 h-5 text-blue-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Science: Force & Motion</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    NCERT Grade 8 Science, Chapters 11 & 12 • 4 Sub-Competencies • 13 Actionable Tasks
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/grade-8-science-force-motion.md
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Mathematics: Linear Equations</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    NCERT Grade 8 Mathematics, Chapter 2 • 4 Sub-Competencies • 13 Actionable Tasks
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/grade-8-math-linear-equations.md
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-purple-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">AI: Problem Scoping & 4Ws Canvas</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    CBSE AI Skill Module 901A, Unit 1 • 4 Sub-Competencies • 12 Actionable Tasks
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/grade-8-ai-problem-scoping.md
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-amber-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Social Science: Indian Constitution</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    NCERT Grade 8 Civics, Chapters 1 & 2 • 4 Sub-Competencies • 12 Actionable Tasks
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/grade-8-social-science-constitution.md
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-teal-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Interdisciplinary: Resources & Sustainability</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    NCERT Grade 8 Geography Ch 1 + Science Ch 5/18 • 4 Sub-Competencies • 12 Actionable Tasks
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/grade-8-interdisciplinary-resources-development.md
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5 text-rose-600" />
                    <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Project Blueprint: Safe School Zone</h3>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400">
                    Complete 4-subject project with challenge statement, task matrix, and assessment rubric
                  </p>
                  <div className="font-mono text-[11px] text-slate-500">
                    Path: docs/tasks/multidisciplinary-project-safe-school-zone.md
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
