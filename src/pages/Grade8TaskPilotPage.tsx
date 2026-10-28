import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  ChevronUp,
  Compass,
  Zap,
  Target
} from 'lucide-react';
import { 
  ALL_TASKS,
  TASKS_BY_GRADE,
  GRADE_INFOS,
  COMPETENCIES_BY_GRADE,
  PROJECTS_BY_GRADE,
  TaskItem,
  CompetencySummary,
  ProjectBlueprint
} from '@/data/taskLibrary';
import { TeacherFastTrack } from '@/features/teacher/TeacherFastTrack';

export const Grade8TaskPilotPage: React.FC = () => {
  const { gradeId } = useParams<{ gradeId?: string }>();
  const navigate = useNavigate();

  // Parse grade from URL parameter or default to 8 (flagship pilot)
  const initialGrade = useMemo<number | 'all'>(() => {
    if (!gradeId) return 8;
    const clean = gradeId.toLowerCase().replace('grade-', '').replace('grade', '');
    if (clean === 'all') return 'all';
    const num = parseInt(clean, 10);
    if ([6, 7, 8, 9, 10].includes(num)) return num;
    return 8;
  }, [gradeId]);

  const [selectedGrade, setSelectedGrade] = useState<number | 'all'>(initialGrade);
  const [activeTab, setActiveTab] = useState<'fast-track' | 'library' | 'student-dashboard' | 'teacher-dashboard' | 'project-blueprint' | 'architecture'>('fast-track');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedResource, setSelectedResource] = useState<string>('all');
  const [selectedSkillType, setSelectedSkillType] = useState<string>('all');
  const [expandedTaskId, setExpandedTaskId] = useState<string | null>(null);

  // Sync state when URL parameter changes
  useEffect(() => {
    if (gradeId) {
      const clean = gradeId.toLowerCase().replace('grade-', '').replace('grade', '');
      if (clean === 'all') {
        setSelectedGrade('all');
      } else {
        const num = parseInt(clean, 10);
        if ([6, 7, 8, 9, 10].includes(num)) {
          setSelectedGrade(num);
        }
      }
    }
  }, [gradeId]);

  // Handle grade change and update URL
  const handleGradeChange = (newGrade: number | 'all') => {
    setSelectedGrade(newGrade);
    setSelectedSubject('all');
    if (newGrade === 'all') {
      navigate('/tasks/all');
    } else {
      navigate(`/tasks/grade-${newGrade}`);
    }
  };

  // Student progress state (stored locally)
  const [completedTaskIds, setCompletedTaskIds] = useState<Set<string>>(() => {
    return new Set([
      'SCI-8-FORCE-1.1', 'SCI-8-FORCE-1.2', 'SCI-8-FORCE-2.1', 'SCI-8-FORCE-3.1',
      'MATH-8-LINEQ-1.1', 'MATH-8-LINEQ-1.2', 'MATH-8-LINEQ-2.1',
      'AI-8-SCOPE-1.1', 'AI-8-SCOPE-1.2', 'AI-8-SCOPE-2.1',
      'SOC-8-CONST-1.1', 'SOC-8-CONST-2.1',
      'INT-8-RESDV-1.1', 'INT-8-RESDV-2.1',
      'MATH-6-RATIO-1.1', 'SCI-6-WATER-1.1', 'AI-6-DATA-1.1', 'SOC-6-GOV-1.1',
      'MATH-7-INT-1.1', 'SCI-7-TIME-1.1', 'AI-7-PATT-1.1', 'SOC-7-MED-1.1',
      'MATH-9-POLY-1.1', 'SCI-9-MATT-1.1', 'AI-9-BIAS-1.1', 'SOC-9-DEM-1.1',
      'MATH-10-QUAD-1.1', 'SCI-10-CHEM-1.1', 'AI-10-SCOPE-1.1', 'SOC-10-HIST-1.1'
    ]);
  });

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

  // Tasks in current scope (either specific grade or all)
  const currentGradeTasks = useMemo(() => {
    if (selectedGrade === 'all') {
      return ALL_TASKS;
    }
    return TASKS_BY_GRADE[selectedGrade] || [];
  }, [selectedGrade]);

  // Available subjects for the current grade scope
  const availableSubjects = useMemo(() => {
    const subjects = new Set<string>();
    currentGradeTasks.forEach(t => subjects.add(t.subject));
    return Array.from(subjects);
  }, [currentGradeTasks]);

  // Filtered tasks for library view
  const filteredTasks = useMemo(() => {
    return currentGradeTasks.filter(task => {
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
  }, [currentGradeTasks, selectedSubject, selectedResource, selectedSkillType, searchQuery]);

  // Current grade competencies and project blueprint
  const currentGradeNum = typeof selectedGrade === 'number' ? selectedGrade : 8;
  const currentCompetencies: CompetencySummary[] = COMPETENCIES_BY_GRADE[currentGradeNum] || [];
  const currentProject: ProjectBlueprint = PROJECTS_BY_GRADE[currentGradeNum] || PROJECTS_BY_GRADE[8];
  const currentGradeInfo = GRADE_INFOS.find(g => g.grade === currentGradeNum) || GRADE_INFOS[2];

  const subjectIcons: Record<string, React.ReactNode> = {
    'Science': <Atom className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    'Mathematics': <Calculator className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    'AI': <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    'Social Science': <Landmark className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
    'Interdisciplinary': <Globe className="w-4 h-4 text-teal-600 dark:text-teal-400" />
  };

  const exportTasksJson = () => {
    const filename = selectedGrade === 'all' ? 'tasks-library-all-grades.json' : `grade-${selectedGrade}-tasks.json`;
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentGradeTasks, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 pb-16">
      {/* Top Banner / Hero */}
      <section className="bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-950 text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8 border-b border-indigo-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex flex-wrap items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
              <span className="px-2.5 py-1 rounded bg-indigo-800/80 border border-indigo-700/50">Task-Based Learning (TBL) Architecture</span>
              <span>•</span>
              <span>Middle & Secondary Stage Pilot</span>
              <span>•</span>
              <span>NCF-SE 2023 & NEP 2020 Aligned</span>
            </div>
            <button
              onClick={exportTasksJson}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              Export {selectedGrade === 'all' ? 'All Tasks (302)' : `Grade ${selectedGrade} Tasks (${currentGradeTasks.length})`}
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3">
            {selectedGrade === 'all' ? 'All Grades Task-Based Learning Library' : currentGradeInfo.title}
          </h1>
          <p className="text-base sm:text-lg text-indigo-200 max-w-4xl leading-relaxed mb-6">
            {selectedGrade === 'all' 
              ? 'Complete multi-grade library of 302 discrete, actionable, classroom-ready tasks spanning Grades 6, 7, 8, 9, and 10 across Science, Mathematics, AI, and Social Science.'
              : `${currentGradeInfo.focus} Grounded in official NCERT, CBSE, and NCF-SE 2023 middle and secondary stage competencies.`
            }
          </p>

          {/* Grade Selector Strip */}
          <div className="mb-6 p-2 rounded-2xl bg-indigo-950/80 border border-indigo-800/60 backdrop-blur-md">
            <div className="text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2 px-2 flex items-center gap-2">
              <Compass className="w-3.5 h-3.5" />
              Select Grade Band (Grades 6, 7, 8, 9, 10):
            </div>
            <div className="flex flex-wrap gap-2">
              {GRADE_INFOS.map(info => (
                <button
                  key={info.grade}
                  onClick={() => handleGradeChange(info.grade)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                    selectedGrade === info.grade
                      ? 'bg-white text-indigo-950 shadow-md ring-2 ring-indigo-400'
                      : 'bg-indigo-900/40 hover:bg-indigo-900/70 text-indigo-200 border border-indigo-800/50'
                  }`}
                >
                  <span>Grade {info.grade}</span>
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                    selectedGrade === info.grade ? 'bg-indigo-100 text-indigo-900' : 'bg-indigo-800/60 text-indigo-200'
                  }`}>
                    {info.taskCount} tasks
                  </span>
                </button>
              ))}
              <button
                onClick={() => handleGradeChange('all')}
                className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedGrade === 'all'
                    ? 'bg-white text-indigo-950 shadow-md ring-2 ring-indigo-400'
                    : 'bg-indigo-900/40 hover:bg-indigo-900/70 text-indigo-200 border border-indigo-800/50'
                }`}
              >
                <span>All Grades (6–10)</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] font-mono ${
                  selectedGrade === 'all' ? 'bg-indigo-100 text-indigo-900' : 'bg-indigo-800/60 text-indigo-200'
                }`}>
                  {ALL_TASKS.length} tasks
                </span>
              </button>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-indigo-300">{currentGradeTasks.length}</div>
              <div className="text-xs text-indigo-300/80 font-medium">Classroom Tasks</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-blue-300">{selectedGrade === 'all' ? 22 : currentCompetencies.length}</div>
              <div className="text-xs text-blue-300/80 font-medium">Core Competencies</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-emerald-300">{selectedGrade === 'all' ? 88 : currentCompetencies.length * 4}</div>
              <div className="text-xs text-emerald-300/80 font-medium">Sub-Competencies</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm">
              <div className="text-2xl font-black text-purple-300">100%</div>
              <div className="text-xs text-purple-300/80 font-medium">Low-Resource Feasible</div>
            </div>
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-indigo-900/60 backdrop-blur-sm col-span-2 sm:col-span-1">
              <div className="text-2xl font-black text-amber-300">{selectedGrade === 'all' ? 5 : 1}</div>
              <div className="text-xs text-amber-300/80 font-medium">Project Blueprint(s)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-1 sm:space-x-3 overflow-x-auto py-3 no-scrollbar" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('fast-track')}
              className={`flex items-center gap-2 px-3.5 py-2 text-sm font-bold whitespace-nowrap rounded-lg transition-all ${
                activeTab === 'fast-track'
                  ? 'bg-amber-400 text-slate-950 font-black shadow-md ring-2 ring-amber-300'
                  : 'bg-amber-100/70 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 hover:bg-amber-200 border border-amber-300 dark:border-amber-800'
              }`}
            >
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span>Teacher Fast-Track (5-Min Flow)</span>
            </button>

            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-3 py-2 text-sm font-semibold whitespace-nowrap rounded-lg transition-colors ${
                activeTab === 'library'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              Task Library ({currentGradeTasks.length})
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
              Project Blueprint {typeof selectedGrade === 'number' && `(Gr ${selectedGrade})`}
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
        {/* TAB 0: ZERO-TRAINING 5-MINUTE TEACHER FAST-TRACK */}
        {/* ========================================================= */}
        {activeTab === 'fast-track' && (
          <TeacherFastTrack />
        )}

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
                    <option value="all">All Subjects ({availableSubjects.length})</option>
                    {availableSubjects.map(sub => (
                      <option key={sub} value={sub.toLowerCase()}>{sub}</option>
                    ))}
                  </select>

                  <select
                    value={selectedResource}
                    onChange={(e) => setSelectedResource(e.target.value)}
                    className="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Resource Levels</option>
                    <option value="low">Low (Standard Classroom)</option>
                    <option value="medium">Medium (Basic Lab / Apparatus)</option>
                    <option value="high">High (Specialized Optics / Microscope)</option>
                  </select>

                  <select
                    value={selectedSkillType}
                    onChange={(e) => setSelectedSkillType(e.target.value)}
                    className="px-3 py-2 text-xs font-medium bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="all">All Skill Types</option>
                    <option value="conceptual understanding">Conceptual Understanding</option>
                    <option value="procedural skill">Procedural Skill</option>
                    <option value="critical thinking">Critical Thinking</option>
                    <option value="applied design">Applied Design / Modeling</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-800">
                <div>
                  Showing <span className="font-bold text-indigo-600 dark:text-indigo-400">{filteredTasks.length}</span> of {currentGradeTasks.length} tasks
                  {selectedGrade !== 'all' && ` in Grade ${selectedGrade}`}
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    Low-Resource
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                    Medium-Resource
                  </span>
                </div>
              </div>
            </div>

            {/* Task Card Grid */}
            <div className="grid grid-cols-1 gap-4">
              {filteredTasks.map((task) => {
                const isCompleted = completedTaskIds.has(task.taskId);
                const isExpanded = expandedTaskId === task.taskId;

                return (
                  <div
                    key={task.taskId}
                    className={`rounded-xl border transition-all duration-200 bg-white dark:bg-slate-900 ${
                      isCompleted 
                        ? 'border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/20 dark:bg-emerald-950/10'
                        : 'border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-800 shadow-sm'
                    }`}
                  >
                    {/* Main Row Header */}
                    <div className="p-4 sm:p-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <button
                            onClick={() => toggleTaskCompletion(task.taskId)}
                            className={`mt-0.5 w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                              isCompleted 
                                ? 'bg-emerald-600 border-emerald-600 text-white' 
                                : 'border-slate-300 dark:border-slate-700 hover:border-indigo-500 text-transparent'
                            }`}
                            title={isCompleted ? "Mark incomplete" : "Mark completed"}
                          >
                            <CheckCircle2 className="w-4 h-4 fill-current" />
                          </button>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-indigo-700 dark:text-indigo-300 border border-slate-200 dark:border-slate-700">
                                {task.taskId}
                              </span>
                              {task.grade && (
                                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800">
                                  Grade {task.grade}
                                </span>
                              )}
                              <span className="flex items-center gap-1.5 text-xs font-medium text-slate-600 dark:text-slate-400">
                                {subjectIcons[task.subject] || <BookOpen className="w-4 h-4" />}
                                {task.subject}
                              </span>
                              <span className="text-slate-300 dark:text-slate-700">•</span>
                              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                                {task.subCompetency}
                              </span>
                            </div>

                            <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                              {task.title}
                            </h3>
                          </div>
                        </div>

                        {/* Badges / Meta */}
                        <div className="flex flex-wrap items-center sm:flex-col sm:items-end gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 dark:border-slate-800">
                          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>{task.timeEstimate}</span>
                          </div>

                          <div className="flex items-center gap-1.5">
                            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                              task.resourceLevel.toLowerCase() === 'low'
                                ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                                : 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                            }`}>
                              {task.resourceLevel} Resource
                            </span>

                            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                              {task.skillType}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Expand/Collapse Action */}
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Assessment:</span>
                          <span>{task.assessmentMode}</span>
                          <span className="text-slate-300 dark:text-slate-700">•</span>
                          <span className="font-semibold text-slate-700 dark:text-slate-300">Track:</span>
                          <span>{task.trackAlignment}</span>
                        </div>

                        <button
                          onClick={() => setExpandedTaskId(isExpanded ? null : task.taskId)}
                          className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700"
                        >
                          {isExpanded ? (
                            <><span>Hide Details</span><ChevronUp className="w-3.5 h-3.5" /></>
                          ) : (
                            <><span>Scaffolds & Criteria</span><ChevronDown className="w-3.5 h-3.5" /></>
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Expanded Drawer */}
                    {isExpanded && (
                      <div className="px-5 pb-5 pt-2 bg-slate-50/70 dark:bg-slate-900/70 border-t border-slate-100 dark:border-slate-800 rounded-b-xl space-y-4 text-xs">
                        {/* Success Criteria */}
                        <div>
                          <div className="font-bold text-slate-800 dark:text-slate-200 mb-1.5 flex items-center gap-1.5">
                            <CheckSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                            Observable Success Criteria:
                          </div>
                          <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 pl-1">
                            {task.successCriteria.map((criterion, idx) => (
                              <li key={idx} className="leading-relaxed">{criterion}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Differentiation Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="p-3 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-1">
                            <div className="font-bold text-indigo-700 dark:text-indigo-300 flex items-center gap-1">
                              <Sparkles className="w-3.5 h-3.5" />
                              Scaffold Support (Remediation):
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {task.scaffoldSupport}
                            </p>
                          </div>

                          <div className="p-3 rounded-lg bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 space-y-1">
                            <div className="font-bold text-amber-700 dark:text-amber-300 flex items-center gap-1">
                              <Target className="w-3.5 h-3.5" />
                              Extension Challenge (High Achievers):
                            </div>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                              {task.extensionChallenge}
                            </p>
                          </div>
                        </div>

                        {/* Citation & Curricular Grounding */}
                        <div className="p-2.5 rounded-lg bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/60 text-indigo-900 dark:text-indigo-200 flex items-start gap-2">
                          <FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Official Curricular Source Grounding: </span>
                            <span className="font-mono text-[11px]">{task.sourceCitation}</span>
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
        {/* TAB 2: STUDENT DASHBOARD MOCKUP */}
        {/* ========================================================= */}
        {activeTab === 'student-dashboard' && (
          <div className="space-y-8">
            {/* Student Hero Header */}
            <div className="bg-gradient-to-r from-indigo-700 via-purple-700 to-indigo-900 text-white p-6 sm:p-8 rounded-2xl shadow-lg relative overflow-hidden">
              <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-indigo-200 text-xs font-semibold uppercase tracking-wider">
                    <span>Student Learning Portfolio</span>
                    <span>•</span>
                    <span>Grade {currentGradeNum} Active Track</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black mb-1">
                    Ananya Sharma
                  </h2>
                  <p className="text-sm text-indigo-100">
                    Roll No: 8B-14 • Kendriya Vidyalaya IIT Powai • 2026 Academic Session
                  </p>
                </div>

                <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-5 py-3.5 rounded-xl border border-white/20">
                  <div className="flex items-center gap-2">
                    <Flame className="w-6 h-6 text-amber-300 animate-pulse" />
                    <div>
                      <div className="text-xl font-black text-white">7 Days</div>
                      <div className="text-[10px] text-indigo-200 uppercase tracking-wider font-bold">Daily Streak</div>
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/20"></div>
                  <div className="flex items-center gap-2">
                    <Award className="w-6 h-6 text-yellow-300" />
                    <div>
                      <div className="text-xl font-black text-white">
                        {currentCompetencies.length > 0 ? '3 Badges' : '0 Badges'}
                      </div>
                      <div className="text-[10px] text-indigo-200 uppercase tracking-wider font-bold">Unlocked</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competency Mastery Progress Bars */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    Grade {currentGradeNum} Competency Mastery
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Earn official micro-credential badges upon completing all discrete sub-tasks.
                  </p>
                </div>
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400">
                  Active Tasks: {currentGradeTasks.length}
                </div>
              </div>

              <div className="space-y-5">
                {currentCompetencies.map((comp) => {
                  const compTasks = currentGradeTasks.filter(t => t.competency === comp.title || t.subject === comp.subject);
                  const totalCount = compTasks.length || comp.taskCount;
                  const completedInComp = compTasks.filter(t => completedTaskIds.has(t.taskId)).length;
                  const percent = totalCount > 0 ? Math.round((completedInComp / totalCount) * 100) : 0;
                  const isUnlocked = percent === 100;

                  return (
                    <div key={comp.id} className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/40 space-y-3">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                              {comp.subject}
                            </span>
                            <span className="text-slate-300 dark:text-slate-700">•</span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                              {comp.chapterSource}
                            </span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                            {comp.title}
                          </h4>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 ${
                            isUnlocked
                              ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 ring-1 ring-amber-400'
                              : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'
                          }`}>
                            <Award className={`w-3.5 h-3.5 ${isUnlocked ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}`} />
                            {comp.badgeName}
                          </span>
                          <span className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300">
                            {completedInComp}/{totalCount} ({percent}%)
                          </span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-3 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <div
                          className={`h-full transition-all duration-500 ${comp.colorScheme.progressBar}`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>

                      {/* Sub-Competency Checklist Badges */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 pt-1">
                        {comp.subCompetencies.map((sub, idx) => (
                          <div key={idx} className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/80 text-[11px] flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span className="text-slate-700 dark:text-slate-300 leading-tight">{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Badges Showcase Gallery */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                Earned Competency Badges
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {currentCompetencies.map((comp) => (
                  <div key={comp.id} className="p-4 rounded-xl text-center border border-slate-200 dark:border-slate-800 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 space-y-2 hover:border-indigo-400 transition-colors">
                    <div className="w-12 h-12 mx-auto rounded-full bg-indigo-100 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400 shadow-inner">
                      <Award className="w-6 h-6" />
                    </div>
                    <div className="font-bold text-xs text-slate-900 dark:text-slate-100 leading-tight">
                      {comp.badgeName}
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      {comp.subject}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: TEACHER ORCHESTRATION VIEW */}
        {/* ========================================================= */}
        {activeTab === 'teacher-dashboard' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wide">
                    <span>Teacher Cohort Analytics</span>
                    <span>•</span>
                    <span>Section 8-B (32 Students)</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">
                    Grade {currentGradeNum} Real-Time Task Completion Matrix
                  </h2>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    4 Intervention Flags
                  </span>
                </div>
              </div>

              {/* Class-wide Completion Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 space-y-1">
                  <div className="text-xs font-semibold text-slate-500">Average Class Completion</div>
                  <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">68.4%</div>
                  <div className="text-xs text-slate-500">22 of 32 students on schedule</div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 space-y-1">
                  <div className="text-xs font-semibold text-slate-500">Highest Bottleneck Task</div>
                  <div className="text-2xl font-black text-rose-600 dark:text-rose-400">
                    {currentGradeTasks[0]?.taskId || 'TASK-01'}
                  </div>
                  <div className="text-xs text-slate-500">Only 8/32 students passed verification</div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 space-y-1">
                  <div className="text-xs font-semibold text-slate-500">Next Action Recommendation</div>
                  <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Deploy Concrete Manipulative Scaffold
                  </div>
                  <div className="text-xs text-slate-500">Recommended for tabletop peer review</div>
                </div>
              </div>

              {/* Automated Intervention Flags Table */}
              <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
                <div className="p-3.5 bg-slate-100 dark:bg-slate-800 font-bold text-xs text-slate-700 dark:text-slate-300">
                  Struggling Student Intervention Queue (Automated TBL Flags)
                </div>
                <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs">
                  <div className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 font-bold flex items-center justify-center">
                        RK
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">Rohit Kumar</div>
                        <div className="text-slate-500">Stuck on {currentGradeTasks[1]?.taskId || 'Task 1.2'} for 3 consecutive class periods</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold">
                      Flag: Procedural Block
                    </span>
                  </div>

                  <div className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">
                        PS
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">Pooja Singh</div>
                        <div className="text-slate-500">Misidentified variable substitution in linear modeling</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 font-bold">
                      Flag: Variable Reversal
                    </span>
                  </div>

                  <div className="p-3 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center">
                        AM
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100">Aman Mishra</div>
                        <div className="text-slate-500">Skipped extension challenge during peer review session</div>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300 font-bold">
                      Flag: Low Engagement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: MULTIDISCIPLINARY PROJECT BLUEPRINT */}
        {/* ========================================================= */}
        {activeTab === 'project-blueprint' && (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-2xl border border-indigo-800/60 shadow-lg space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                <span className="px-2.5 py-1 rounded bg-indigo-800/80 border border-indigo-700/50">
                  Multidisciplinary TBL Project Blueprint
                </span>
                <span>•</span>
                <span>{currentProject.gradeBand}</span>
                <span>•</span>
                <span>Duration: {currentProject.duration}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black">
                {currentProject.title}
              </h2>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm sm:text-base text-indigo-100 leading-relaxed italic">
                "{currentProject.challengeStatement}"
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {currentProject.participatingDisciplines.map((disc, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-900/80 text-indigo-200 border border-indigo-700/60">
                    {disc}
                  </span>
                ))}
              </div>
            </div>

            {/* Integrated Task Matrix */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                Integrated Task Decomposition Matrix
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Tasks selected from core subject libraries to culminate in the unified project masterplan.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 font-bold">
                      <th className="p-3">Subject</th>
                      <th className="p-3">Task ID</th>
                      <th className="p-3">Role & Output in Masterplan</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                    {currentProject.requiredTasks.map((rt, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                        <td className="p-3 font-semibold text-slate-900 dark:text-slate-100">{rt.subject}</td>
                        <td className="p-3 font-mono font-bold text-indigo-600 dark:text-indigo-400">{rt.taskId}</td>
                        <td className="p-3 leading-relaxed">{rt.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {currentProject.deliverables.map((del, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h4 className="font-bold text-sm text-slate-900 dark:text-slate-100">{del.title}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{del.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 5: COMPETENCY ARCHITECTURE DOCS */}
        {/* ========================================================= */}
        {activeTab === 'architecture' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <div>
                  <h2 className="text-xl font-black text-slate-900 dark:text-slate-100">
                    Curriculum Decomposition Architecture Documents
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Complete, peer-review ready markdown specifications grounded in official NCERT, CBSE, and NCF-SE 2023 frameworks.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {GRADE_INFOS.map(info => (
                    <button
                      key={info.grade}
                      onClick={() => handleGradeChange(info.grade)}
                      className={`px-2.5 py-1 rounded text-xs font-bold transition-colors ${
                        selectedGrade === info.grade
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      Gr {info.grade}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* GRADE 6 DOCS */}
                {(selectedGrade === 6 || selectedGrade === 'all') && (
                  <>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 6 Math: Ratios, Integers & Geometry</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 6 Math Ch 4, 6, 12 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-6-math-ratios-integers-geometry.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 6 Science: Water, Air, Motion & Simple Machines</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 6 Science Ch 10, 11, 14, 15 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-6-science-water-air-motion-machines.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 6 AI: Data Basics & Algorithmic Foundations</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        CBSE Class 6 AI Skill Curriculum Units 1-3 • 4 Sub-Competencies • 12 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-6-ai-data-basics.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 6 Social Science: Governance & Early Empires</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 6 Our Pasts Ch 3/7 + Civics Ch 5/7 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-6-social-science-governance-empires.md
                      </div>
                    </div>
                  </>
                )}

                {/* GRADE 7 DOCS */}
                {(selectedGrade === 7 || selectedGrade === 'all') && (
                  <>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 7 Math: Integers, Fractions & Equations</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 7 Math Ch 1, 2, 4 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-7-math-integers-fractions-equations.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 7 Science: Motion, Heat & Acids/Bases</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 7 Science Ch 4, 5, 13 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-7-science-motion-heat-acids.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 7 AI: Pattern Recognition & Rule Systems</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        CBSE Class 7 AI Curriculum Units 1-3 • 4 Sub-Competencies • 12 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-7-ai-patterns-rule-systems.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 7 Social Science: Medieval Trade & Mughals</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 7 Our Pasts Ch 2, 4, 6 • 4 Sub-Competencies • 12 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-7-social-science-medieval-trade-mughal.md
                      </div>
                    </div>
                  </>
                )}

                {/* GRADE 8 DOCS */}
                {(selectedGrade === 8 || selectedGrade === 'all') && (
                  <>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 8 Science: Force & Motion</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 8 Science Ch 11, 12 • 4 Sub-Competencies • 13 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-8-science-force-motion.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 8 Math: Linear Equations</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 8 Math Ch 2 • 4 Sub-Competencies • 13 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-8-math-linear-equations.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 8 AI: Problem Scoping & 4Ws Canvas</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        CBSE AI Skill Module 901A • 4 Sub-Competencies • 12 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-8-ai-problem-scoping.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 8 Social Science: Constitution</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 8 Civics Ch 1, 2 • 4 Sub-Competencies • 12 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-8-social-science-constitution.md
                      </div>
                    </div>
                  </>
                )}

                {/* GRADE 9 DOCS */}
                {(selectedGrade === 9 || selectedGrade === 'all') && (
                  <>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 9 Math: Polynomials, Geometry & Statistics</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 9 Math Ch 2, 3, 14 • 4 Sub-Competencies • 16 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-9-math-polynomials-geometry-statistics.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 9 Science: Matter, Cells & Laws of Motion</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 9 Science Ch 1, 5, 9 • 4 Sub-Competencies • 16 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-9-science-matter-cells-laws-of-motion.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 9 AI: Ethics, Privacy & Bias</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        CBSE Class 9 AI Subject Code 417 • 4 Sub-Competencies • 14 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-9-ai-ethics-privacy-bias.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 9 Social Science: Democracy & Poverty</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 9 Civics Ch 1/2 + Economics Ch 3 • 4 Sub-Competencies • 16 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-9-social-science-democracy-constitution-poverty.md
                      </div>
                    </div>
                  </>
                )}

                {/* GRADE 10 DOCS */}
                {(selectedGrade === 10 || selectedGrade === 'all') && (
                  <>
                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Calculator className="w-5 h-5 text-emerald-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 10 Math: Quadratics, Triangles & Probability</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 10 Math Ch 4, 6, 15 • 4 Sub-Competencies • 19 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-10-math-quadratics-triangles-probability.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Atom className="w-5 h-5 text-blue-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 10 Science: Electricity, Reactions & Life Processes</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 10 Science Ch 1, 6, 12 • 4 Sub-Competencies • 19 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-10-science-electricity-reactions-life-processes.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-5 h-5 text-purple-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 10 AI: The AI Project Cycle</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        CBSE Class 10 AI Subject Code 417 • 4 Sub-Competencies • 18 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-10-ai-project-cycle.md
                      </div>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500 transition-colors space-y-2">
                      <div className="flex items-center gap-2">
                        <Landmark className="w-5 h-5 text-amber-600" />
                        <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100">Grade 10 Social Science: Nationalism & Globalization</h3>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        NCERT Grade 10 History Ch 1/2 + Geog Ch 1 + Econ Ch 4 • 4 Sub-Competencies • 16 Actionable Tasks
                      </p>
                      <div className="font-mono text-[11px] text-slate-500">
                        Path: docs/tasks/grade-10-social-science-nationalism-globalization-resources.md
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
