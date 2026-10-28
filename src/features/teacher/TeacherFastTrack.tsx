import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  FileText, 
  Printer, 
  Share2, 
  Copy, 
  Check, 
  QrCode, 
  HelpCircle, 
  ChevronRight, 
  Layers, 
  Atom, 
  Calculator, 
  Cpu, 
  Landmark, 
  Globe, 
  X, 
  Eye, 
  PlayCircle, 
  Flame, 
  Send, 
  RefreshCw,
  Lightbulb,
  Radio,
  BookOpen,
  Compass,
  Download
} from 'lucide-react';
import { 
  ALL_TASKS, 
  TASKS_BY_GRADE, 
  GRADE_INFOS, 
  TaskItem 
} from '@/data/taskLibrary';

// Student Model for Live Classroom Heatmap
interface StudentRecord {
  id: string;
  rollNo: number;
  name: string;
  status: 'completed' | 'stuck' | 'working' | 'not-started';
  step: string;
  score?: number;
  timeSpentMinutes: number;
  lastActive: string;
  notes?: string;
}

const INITIAL_STUDENTS: StudentRecord[] = [
  { id: 'st-01', rollNo: 1, name: 'Aarav Kumar', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '5m ago' },
  { id: 'st-02', rollNo: 2, name: 'Aditi Mishra', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 14, lastActive: '1m ago' },
  { id: 'st-03', rollNo: 3, name: 'Ananya Sharma', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 12, lastActive: 'Just now' },
  { id: 'st-04', rollNo: 4, name: 'Arjun Patel', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 16, lastActive: '2m ago' },
  { id: 'st-05', rollNo: 5, name: 'Bhavya Nair', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 15, lastActive: '3m ago' },
  { id: 'st-06', rollNo: 6, name: 'Chetan Rao', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 18, lastActive: '1m ago' },
  { id: 'st-07', rollNo: 7, name: 'Deepak Verma', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 11, lastActive: '4m ago' },
  { id: 'st-08', rollNo: 8, name: 'Divya Tiwari', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '8m ago' },
  { id: 'st-09', rollNo: 9, name: 'Farhan Ahmed', status: 'stuck', step: 'Step 2: Friction vs Pull', timeSpentMinutes: 9, lastActive: '30s ago', notes: 'Confused whether friction pulling backward counts as a pull.' },
  { id: 'st-10', rollNo: 10, name: 'Gayatri Singh', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 13, lastActive: 'Just now' },
  { id: 'st-11', rollNo: 11, name: 'Harsh Mehta', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 17, lastActive: '2m ago' },
  { id: 'st-12', rollNo: 12, name: 'Ishaan Bhat', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 14, lastActive: '4m ago' },
  { id: 'st-13', rollNo: 13, name: 'Jaya Roy', status: 'stuck', step: 'Step 2: Table drawer push', timeSpentMinutes: 8, lastActive: '1m ago', notes: 'Unsure about closing vs opening direction.' },
  { id: 'st-14', rollNo: 14, name: 'Kabir Das', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '6m ago' },
  { id: 'st-15', rollNo: 15, name: 'Kavita Negi', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 10, lastActive: 'Just now' },
  { id: 'st-16', rollNo: 16, name: 'Manish Prasad', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 15, lastActive: '3m ago' },
  { id: 'st-17', rollNo: 17, name: 'Meera Kulkarni', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 13, lastActive: 'Just now' },
  { id: 'st-18', rollNo: 18, name: 'Neha Gupta', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 12, lastActive: '2m ago' },
  { id: 'st-19', rollNo: 19, name: 'Omkar Joshi', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 16, lastActive: '4m ago' },
  { id: 'st-20', rollNo: 20, name: 'Pooja Reddy', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '9m ago' },
  { id: 'st-21', rollNo: 21, name: 'Pranav Sen', status: 'stuck', step: 'Step 2: Magnet pull', timeSpentMinutes: 11, lastActive: '45s ago', notes: 'Wrote magnet attracts iron without touching; is it push or pull?' },
  { id: 'st-22', rollNo: 22, name: 'Priya Iyer', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 11, lastActive: '1m ago' },
  { id: 'st-23', rollNo: 23, name: 'Rahul Choudhary', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 14, lastActive: 'Just now' },
  { id: 'st-24', rollNo: 24, name: 'Riya Mukherjee', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 19, lastActive: '2m ago' },
  { id: 'st-25', rollNo: 25, name: 'Rohan Deshmukh', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '7m ago' },
  { id: 'st-26', rollNo: 26, name: 'Sakshi Jain', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 12, lastActive: '3m ago' },
  { id: 'st-27', rollNo: 27, name: 'Sameer Khan', status: 'stuck', step: 'Step 2: Cricket bat hit', timeSpentMinutes: 10, lastActive: '1m ago', notes: 'Is hitting a ball a push or impact force?' },
  { id: 'st-28', rollNo: 28, name: 'Sanjay Yadav', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 15, lastActive: '4m ago' },
  { id: 'st-29', rollNo: 29, name: 'Sanjana Pillai', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 13, lastActive: 'Just now' },
  { id: 'st-30', rollNo: 30, name: 'Shreya Sen', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '5m ago' },
  { id: 'st-31', rollNo: 31, name: 'Siddharth Bose', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 14, lastActive: '1m ago' },
  { id: 'st-32', rollNo: 32, name: 'Sneha Pandey', status: 'stuck', step: 'Step 2: Bicycle brakes', timeSpentMinutes: 9, lastActive: '2m ago', notes: 'Asking how friction stops motion without pushing.' },
  { id: 'st-33', rollNo: 33, name: 'Tanvi Saxena', status: 'not-started', step: 'Not started', timeSpentMinutes: 0, lastActive: '10m ago' },
  { id: 'st-34', rollNo: 34, name: 'Tarun Mathur', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 11, lastActive: 'Just now' },
  { id: 'st-35', rollNo: 35, name: 'Utkarsh Bajpai', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 16, lastActive: '3m ago' },
  { id: 'st-36', rollNo: 36, name: 'Varun Swaminathan', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 12, lastActive: '2m ago' },
  { id: 'st-37', rollNo: 37, name: 'Vidya Narayanan', status: 'completed', step: 'Finished all 5 examples', score: 5, timeSpentMinutes: 13, lastActive: 'Just now' },
  { id: 'st-38', rollNo: 38, name: 'Yashvardhan K.', status: 'completed', step: 'Finished all 5 examples', score: 4, timeSpentMinutes: 17, lastActive: '1m ago' }
];

export const TeacherFastTrack: React.FC = () => {
  // Navigation & View state
  const [currentScreen, setCurrentScreen] = useState<'home' | 'preview' | 'dashboard'>('home');
  const [selectedGrade, setSelectedGrade] = useState<number>(8);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [timeFilter, setTimeFilter] = useState<'all' | 'quick' | 'standard'>('all');
  const [lowResourceMode, setLowResourceMode] = useState<boolean>(false);
  const [language, setLanguage] = useState<'en' | 'hi'>('en');
  const [showMeHowOpen, setShowMeHowOpen] = useState<boolean>(false);

  // Assignment modal & state
  const [isAssignModalOpen, setIsAssignModalOpen] = useState<boolean>(false);
  const [assignStep, setAssignStep] = useState<1 | 2 | 3 | 'success'>(1);
  const [targetClass, setTargetClass] = useState<string>('Class 8-B (38 Students)');
  const [dueWindow, setDueWindow] = useState<'today' | 'tomorrow'>('today');
  const [codeCopied, setCodeCopied] = useState<boolean>(false);
  const [isWorksheetModalOpen, setIsWorksheetModalOpen] = useState<boolean>(false);

  // Live classroom state
  const [students, setStudents] = useState<StudentRecord[]>(INITIAL_STUDENTS);
  const [studentFilter, setStudentFilter] = useState<'all' | 'stuck' | 'not-started' | 'completed'>('all');
  const [selectedStudent, setSelectedStudent] = useState<StudentRecord | null>(null);
  const [feedbackInput, setFeedbackInput] = useState<string>('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Active assignment
  const [activeTask, setActiveTask] = useState<TaskItem>(() => {
    return ALL_TASKS.find(t => t.taskId === 'SCI-8-FORCE-1.1') || ALL_TASKS[0];
  });
  const [selectedPreviewTask, setSelectedPreviewTask] = useState<TaskItem>(() => {
    return ALL_TASKS.find(t => t.taskId === 'SCI-8-FORCE-1.1') || ALL_TASKS[0];
  });

  // Recommended task for the selected grade
  const recommendedTask = useMemo<TaskItem>(() => {
    const gradeTasks = TASKS_BY_GRADE[selectedGrade] || [];
    return gradeTasks[0] || ALL_TASKS[0];
  }, [selectedGrade]);

  // Filtered task bank for secondary browsing
  const filteredTasks = useMemo(() => {
    const list = TASKS_BY_GRADE[selectedGrade] || [];
    return list.filter(t => {
      const matchSubject = selectedSubject === 'all' || t.subject.toLowerCase() === selectedSubject.toLowerCase();
      let matchTime = true;
      if (timeFilter === 'quick') matchTime = t.timeEstimate.includes('15') || t.timeEstimate.includes('20');
      if (timeFilter === 'standard') matchTime = t.timeEstimate.includes('30') || t.timeEstimate.includes('40') || t.timeEstimate.includes('45');
      return matchSubject && matchTime;
    });
  }, [selectedGrade, selectedSubject, timeFilter]);

  // Metrics for above-the-fold dashboard
  const completedCount = students.filter(s => s.status === 'completed').length;
  const stuckCount = students.filter(s => s.status === 'stuck').length;
  const notStartedCount = students.filter(s => s.status === 'not-started').length;
  const workingCount = students.filter(s => s.status === 'working').length;
  const totalCount = students.length;
  const masteryPercent = Math.round((completedCount / totalCount) * 100);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const copyClassCode = () => {
    navigator.clipboard.writeText('S2S-8B');
    setCodeCopied(true);
    showToast('Class Code S2S-8B copied to clipboard!');
    setTimeout(() => setCodeCopied(false), 2000);
  };

  // Intervention Actions
  const handleBroadcastHook = () => {
    setStudents(prev => prev.map(s => {
      if (s.status === 'not-started') {
        return { ...s, status: 'working', step: 'Step 1: Reading hook & prompt', timeSpentMinutes: 1, lastActive: 'Just now' };
      }
      return s;
    }));
    showToast('📢 3-Minute Hook prompt broadcasted to board and mobile devices!');
  };

  const handlePushScaffoldClue = () => {
    setStudents(prev => prev.map(s => {
      if (s.status === 'stuck') {
        return { ...s, status: 'working', step: 'Applying scaffold hint: Friction opposes motion', timeSpentMinutes: s.timeSpentMinutes + 2, lastActive: 'Just now' };
      }
      return s;
    }));
    showToast('💡 Scaffold Hint pushed to 5 stuck students!');
  };

  const handleUnlockExtension = () => {
    showToast('🚀 Extension Challenge unlocked for all 26 completed students!');
  };

  const handleSendFeedback = () => {
    if (!selectedStudent || !feedbackInput.trim()) return;
    showToast(`Feedback sent to ${selectedStudent.name}!`);
    setFeedbackInput('');
    setSelectedStudent(null);
  };

  const subjectIcon = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'science': return <Atom className="w-4 h-4 text-blue-600" />;
      case 'mathematics': return <Calculator className="w-4 h-4 text-emerald-600" />;
      case 'ai': return <Cpu className="w-4 h-4 text-purple-600" />;
      case 'social science': return <Landmark className="w-4 h-4 text-amber-600" />;
      default: return <Globe className="w-4 h-4 text-teal-600" />;
    }
  };

  const handleOpenPreview = (task: TaskItem) => {
    setSelectedPreviewTask(task);
    setCurrentScreen('preview');
  };

  const handleTriggerAssign = (task: TaskItem) => {
    setActiveTask(task);
    setAssignStep(1);
    setIsAssignModalOpen(true);
  };

  const filteredStudents = useMemo(() => {
    if (studentFilter === 'all') return students;
    return students.filter(s => s.status === studentFilter);
  }, [students, studentFilter]);

  return (
    <div className={`min-h-screen ${lowResourceMode ? 'bg-white text-black' : 'bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100'} transition-colors pb-16`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 text-slate-400 hover:text-white">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Top Application Header: Teacher Fast-Track Bar */}
      <header className={`sticky top-0 z-40 ${lowResourceMode ? 'bg-black text-white border-b-2 border-black' : 'bg-slate-900 text-white border-b border-slate-800'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentScreen('home')}
              className="text-left font-black tracking-tight text-lg sm:text-xl text-white hover:text-indigo-300 transition-colors flex items-center gap-2"
            >
              <span>Subjects2Skills</span>
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-indigo-600/80 uppercase tracking-wider text-white">
                Teacher Fast-Track
              </span>
            </button>
            <span className="text-slate-600 hidden md:inline">|</span>
            <div className="text-xs text-slate-300 font-medium hidden md:flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>{targetClass}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Bilingual Switcher */}
            <div className="flex items-center rounded-lg bg-slate-800 p-0.5 border border-slate-700 text-xs font-bold">
              <button
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 rounded transition-colors ${language === 'en' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'}`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLanguage('hi')}
                className={`px-2 py-1 rounded transition-colors ${language === 'hi' ? 'bg-indigo-600 text-white' : 'text-slate-300 hover:text-white'}`}
                title="हिंदी में देखें"
              >
                हिन्दी
              </button>
            </div>

            {/* Low Resource Mode Toggle */}
            <button
              onClick={() => setLowResourceMode(!lowResourceMode)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                lowResourceMode 
                  ? 'bg-amber-400 text-black border-amber-500 shadow-sm' 
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title="Toggle Low-Bandwidth / High Contrast Mode for Low-Resource Environments"
            >
              {lowResourceMode ? '⚡ Low-Resource: ON' : '⚡ Low-Resource Mode'}
            </button>

            {/* Show Me How Help Button */}
            <button
              onClick={() => setShowMeHowOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-white transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-indigo-400" />
              <span>Show Me How</span>
            </button>
          </div>
        </div>
      </header>

      {/* Screen Navigator Strip */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between overflow-x-auto gap-4 no-scrollbar">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentScreen('home')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
                currentScreen === 'home'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              1. Teacher Home
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setCurrentScreen('preview')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
                currentScreen === 'preview'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              2. Task Preview & Run Sheet
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <button
              onClick={() => setCurrentScreen('dashboard')}
              className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-colors ${
                currentScreen === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              3. Live Classroom Monitor ({completedCount}/{totalCount})
            </button>
          </div>

          <div className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
            Current Grade: <span className="font-bold text-indigo-600 dark:text-indigo-400">Grade {selectedGrade}</span>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {/* ========================================================= */}
        {/* SCREEN 1: TEACHER HOME (ZERO BLANK SCREEN) */}
        {/* ========================================================= */}
        {currentScreen === 'home' && (
          <div className="space-y-6">
            {/* Urgent Classroom Pulse Flag */}
            <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-amber-800 dark:text-amber-300 uppercase tracking-wider mb-0.5">
                    Classroom Pulse · Action Required
                  </div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {notStartedCount} students have not started today's active task.
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    Suggested Next Action: Broadcast the 3-minute video hook or send a WhatsApp nudge.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={handleBroadcastHook}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-sm min-h-[44px] flex items-center gap-2"
                >
                  <Radio className="w-4 h-4" />
                  <span>Broadcast 3-Min Hook</span>
                </button>
                <button
                  onClick={() => setCurrentScreen('dashboard')}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors min-h-[44px] flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>View Heatmap</span>
                </button>
              </div>
            </div>

            {/* PRIMARY HERO: RECOMMENDED TASK (NEVER BLANK) */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-900 text-white shadow-xl relative overflow-hidden border border-indigo-800/80">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>Today's Recommended Task for {targetClass}</span>
                  <span>•</span>
                  <span>Ready in 1 Click</span>
                </div>
                <div className="text-xs text-indigo-200 font-mono">
                  {recommendedTask.taskId}
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                  {recommendedTask.title}
                </h2>
                {/* Zero-Pill Typographic Metadata */}
                <div className="text-xs sm:text-sm text-indigo-200 flex flex-wrap items-center gap-x-3 gap-y-1 font-medium">
                  <span className="font-bold text-white">{recommendedTask.subject}</span>
                  <span>·</span>
                  <span>Grade {selectedGrade}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 inline" /> {recommendedTask.timeEstimate}</span>
                  <span>·</span>
                  <span>{recommendedTask.resourceLevel} Resource</span>
                  <span>·</span>
                  <span className="text-indigo-300">{recommendedTask.assessmentMode}</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 mb-6 text-xs sm:text-sm text-indigo-100 space-y-1.5 leading-relaxed">
                <div>
                  <span className="font-bold text-white">Target Learning Outcome: </span>
                  {recommendedTask.subCompetency} ({recommendedTask.competency})
                </div>
                <div>
                  <span className="font-bold text-white">Success Criteria: </span>
                  {recommendedTask.successCriteria}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleTriggerAssign(recommendedTask)}
                  className="px-6 py-3.5 rounded-xl font-black text-sm sm:text-base bg-amber-400 hover:bg-amber-300 text-slate-950 transition-transform active:scale-95 shadow-lg flex items-center gap-2 min-h-[48px]"
                >
                  <span>Assign Your First Task (3 Clicks)</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </button>
                <button
                  onClick={() => handleOpenPreview(recommendedTask)}
                  className="px-5 py-3.5 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 text-white transition-colors border border-white/20 min-h-[48px] flex items-center gap-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview & Teacher Run Sheet (30 sec)</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedPreviewTask(recommendedTask);
                    setIsWorksheetModalOpen(true);
                  }}
                  className="px-4 py-3.5 rounded-xl font-bold text-sm bg-white/10 hover:bg-white/20 text-indigo-200 hover:text-white transition-colors border border-white/15 min-h-[48px] flex items-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Worksheet PDF</span>
                </button>
              </div>
            </div>

            {/* Active Assignment Monitor Strip */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
                    Currently Active in Classroom
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <span>{activeTask.title}</span>
                    <span className="text-xs font-mono font-normal text-slate-500">({activeTask.taskId})</span>
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                  <span>Class Code:</span>
                  <button 
                    onClick={copyClassCode}
                    className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-indigo-600 dark:text-indigo-400 font-bold hover:bg-slate-200 flex items-center gap-1.5"
                    title="Click to copy code"
                  >
                    <span>S2S-8B</span>
                    {codeCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Progress Bar & Breakdown */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="text-slate-700 dark:text-slate-300">
                    Completion Status: {completedCount} of {totalCount} students ({masteryPercent}%)
                  </span>
                  <span className="text-indigo-600 dark:text-indigo-400">
                    Average Time: 14 min
                  </span>
                </div>
                <div className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex">
                  <div style={{ width: `${(completedCount / totalCount) * 100}%` }} className="bg-emerald-500 h-full transition-all duration-500" title={`${completedCount} Completed`} />
                  <div style={{ width: `${(workingCount / totalCount) * 100}%` }} className="bg-blue-500 h-full transition-all duration-500" title={`${workingCount} Working`} />
                  <div style={{ width: `${(stuckCount / totalCount) * 100}%` }} className="bg-amber-500 h-full transition-all duration-500" title={`${stuckCount} Stuck`} />
                  <div style={{ width: `${(notStartedCount / totalCount) * 100}%` }} className="bg-slate-300 dark:bg-slate-700 h-full transition-all duration-500" title={`${notStartedCount} Not Started`} />
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-1">
                  <span className="text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                    {completedCount} Completed
                  </span>
                  <span className="text-amber-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" />
                    {stuckCount} Stuck on Step 2
                  </span>
                  <span className="text-slate-500 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                    {notStartedCount} Not Started
                  </span>
                </div>
              </div>

              {/* Quick Actions for active task */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setCurrentScreen('dashboard')}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <Eye className="w-4 h-4" />
                  <span>Open Live Heatmap Dashboard</span>
                </button>
                <button
                  onClick={() => {
                    setSelectedPreviewTask(activeTask);
                    setIsWorksheetModalOpen(true);
                  }}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print 38 Worksheets</span>
                </button>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Class 8-B Task: ${activeTask.title}. Join using Class Code: S2S-8B on Subjects2Skills.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Share on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* SECONDARY: BROWSE OTHER GRADE 6-10 TASKS */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                    Browse Other Tasks (Grade {selectedGrade})
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Filter by Subject and Time available. Every task is 100% low-resource and classroom-ready.
                  </p>
                </div>

                {/* Grade Switcher */}
                <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-100 dark:bg-slate-800">
                  {[6, 7, 8, 9, 10].map(gr => (
                    <button
                      key={gr}
                      onClick={() => {
                        setSelectedGrade(gr);
                        setSelectedSubject('all');
                      }}
                      className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all min-h-[36px] ${
                        selectedGrade === gr
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
                      }`}
                    >
                      Grade {gr}
                    </button>
                  ))}
                </div>
              </div>

              {/* Simple Filter Strip */}
              <div className="flex flex-wrap items-center gap-3 text-xs">
                {/* Subject filter */}
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-500">Subject:</span>
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
                  >
                    <option value="all">All Subjects</option>
                    <option value="Science">Science</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="AI">AI</option>
                    <option value="Social Science">Social Science</option>
                  </select>
                </div>

                {/* Time filter */}
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-500">Time:</span>
                  <select
                    value={timeFilter}
                    onChange={(e) => setTimeFilter(e.target.value as any)}
                    className="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold"
                  >
                    <option value="all">Any Duration</option>
                    <option value="quick">15–20 min (Quick Activity)</option>
                    <option value="standard">30–45 min (Full Period)</option>
                  </select>
                </div>

                <div className="text-slate-500 ml-auto font-medium">
                  Showing <span className="font-bold text-slate-900 dark:text-slate-100">{filteredTasks.length}</span> tasks
                </div>
              </div>

              {/* Task Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredTasks.slice(0, 6).map((task) => (
                  <div
                    key={task.taskId}
                    className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850 hover:border-indigo-400 dark:hover:border-indigo-500 transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5 font-bold text-indigo-600 dark:text-indigo-400">
                          {subjectIcon(task.subject)}
                          <span>{task.subject}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{task.timeEstimate}</span>
                        </div>
                        <span className="font-mono text-[11px] text-slate-400">{task.taskId}</span>
                      </div>

                      <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 leading-snug">
                        {task.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {task.successCriteria}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800">
                      <button
                        onClick={() => handleTriggerAssign(task)}
                        className="flex-1 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors min-h-[40px] flex items-center justify-center gap-1.5"
                      >
                        <span>Assign Task</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleOpenPreview(task)}
                        className="px-3.5 py-2 rounded-xl text-xs font-bold bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 transition-colors min-h-[40px] flex items-center justify-center gap-1.5"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Run Sheet</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 2: TASK PREVIEW & TEACHER RUN SHEET (ALL-IN-ONE) */}
        {/* ========================================================= */}
        {currentScreen === 'preview' && (
          <div className="space-y-6">
            {/* Header with Return CTA & Primary Assign Button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="space-y-1">
                <button
                  onClick={() => setCurrentScreen('home')}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 mb-1"
                >
                  ← Back to Teacher Home
                </button>
                <div className="text-xs font-bold text-slate-500 flex items-center gap-2">
                  <span className="font-mono text-indigo-600 dark:text-indigo-400">{selectedPreviewTask.taskId}</span>
                  <span>·</span>
                  <span>{selectedPreviewTask.subject}</span>
                  <span>·</span>
                  <span>Grade {selectedGrade}</span>
                  <span>·</span>
                  <span>{selectedPreviewTask.timeEstimate}</span>
                  <span>·</span>
                  <span>{selectedPreviewTask.resourceLevel} Resource</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-slate-100 leading-snug">
                  {selectedPreviewTask.title}
                </h2>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <button
                  onClick={() => setIsWorksheetModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 transition-colors flex items-center gap-2 min-h-[44px]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Worksheet PDF</span>
                </button>
                <button
                  onClick={() => handleTriggerAssign(selectedPreviewTask)}
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-md flex items-center gap-2 min-h-[44px]"
                >
                  <span>Assign This Task Now</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </button>
              </div>
            </div>

            {/* UNIFIED 2-COLUMN VIEW */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT COLUMN: TEACHER RUN SHEET & PEDAGOGY */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
                    <FileText className="w-4 h-4" />
                    <span>Teacher Run Sheet (Pedagogy & Logistics)</span>
                  </div>

                  {/* 1. Learning Outcome & Success Criteria */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      1. Competency & Observable Success Criteria
                    </h4>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 space-y-1.5 leading-relaxed">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">Competency: </span>
                        {selectedPreviewTask.competency}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">Sub-Competency: </span>
                        {selectedPreviewTask.subCompetency}
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">Teacher Success Criteria: </span>
                        {selectedPreviewTask.successCriteria}
                      </div>
                    </div>
                  </div>

                  {/* 2. Three-Step Classroom Timing */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      2. Three-Step Classroom Flow ({selectedPreviewTask.timeEstimate})
                    </h4>
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex items-start gap-3">
                        <span className="font-mono font-bold text-blue-700 dark:text-blue-300 px-1.5 py-0.5 rounded bg-blue-100 dark:bg-blue-900 shrink-0">
                          00–05m
                        </span>
                        <div>
                          <div className="font-bold text-blue-900 dark:text-blue-200">Step 1: Hook & Physical Activation</div>
                          <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                            Demonstrate pulling a chair vs pushing a book. Ask the class: "What changed? Did you apply push or pull?"
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex items-start gap-3">
                        <span className="font-mono font-bold text-indigo-700 dark:text-indigo-300 px-1.5 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900 shrink-0">
                          05–20m
                        </span>
                        <div>
                          <div className="font-bold text-indigo-900 dark:text-indigo-200">Step 2: Guided Exploration (Pairs / Individual)</div>
                          <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                            Students execute instructions on worksheet or phone, recording observations in their structured table.
                          </p>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex items-start gap-3">
                        <span className="font-mono font-bold text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 shrink-0">
                          20–25m
                        </span>
                        <div>
                          <div className="font-bold text-emerald-900 dark:text-emerald-200">Step 3: Synthesis & Misconception Check</div>
                          <p className="text-slate-600 dark:text-slate-300 mt-0.5">
                            Spot-check 3 random student answers. Resolve common confusion between force and velocity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Top Misconceptions & Fixes */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                      <span>3. Top Misconceptions to Address</span>
                    </h4>
                    <div className="p-3.5 rounded-xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs space-y-2">
                      <div>
                        <div className="font-bold text-amber-900 dark:text-amber-200">
                          Misconception: "Force is a property stored inside an object."
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 mt-0.5">
                          <span className="font-bold text-emerald-700 dark:text-emerald-300">Classroom Remedy:</span> Remind students that force only exists during an *interaction* between two objects; when contact ends, the applied force ceases.
                        </div>
                      </div>
                      <div className="pt-2 border-t border-amber-200/60 dark:border-amber-800/60">
                        <div className="font-bold text-amber-900 dark:text-amber-200">
                          Misconception: "An object moving at constant speed must have an unbalanced force."
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 mt-0.5">
                          <span className="font-bold text-emerald-700 dark:text-emerald-300">Classroom Remedy:</span> Clarify that net force causes *change* in motion (acceleration), not motion itself.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 4. Classroom Discussion Prompts & Materials */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100">
                      4. Discussion Prompts & Materials
                    </h4>
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-2 text-slate-700 dark:text-slate-300">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">Class Prompt 1: </span>
                        "Can you pull an object towards you without touching it?"
                      </div>
                      <div>
                        <span className="font-bold text-slate-900 dark:text-slate-100">Class Prompt 2: </span>
                        "When a batsman hits a cricket ball, which object exerts the push?"
                      </div>
                      <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                        <span className="font-bold text-slate-900 dark:text-slate-100">Materials Required: </span>
                        Chalkboard, ruler, coin, eraser, textbook (No specialized lab kit needed).
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: STUDENT INSTRUCTIONS & WORKSHEET PREVIEW */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <FileText className="w-4 h-4" />
                      <span>Student Instructions & Handout</span>
                    </div>
                    <span className="text-xs font-bold text-slate-500">
                      Language: {language === 'en' ? 'English' : 'हिन्दी (Hindi)'}
                    </span>
                  </div>

                  {/* Student Instructions */}
                  <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs sm:text-sm">
                    <h4 className="font-bold text-slate-900 dark:text-slate-100">
                      {language === 'en' ? 'What Students See on Their Screen / Paper:' : 'विद्यार्थी निर्देश:'}
                    </h4>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {language === 'en' 
                        ? '1. Look around your classroom or desk. Identify 5 different physical actions involving objects.\n2. In your worksheet or app, write each action, name the object, and classify whether it is a PUSH or PULL.\n3. Note what happened to the object (did it speed up, stop, or change direction?).'
                        : '1. अपने कक्षा या डेस्क के आसपास देखें। वस्तुओं से जुड़ी 5 अलग-अलग क्रियाओं की पहचान करें।\n2. अपनी वर्कशीट या ऐप में प्रत्येक क्रिया लिखें और बताएं कि यह धक्का (Push) है या खिंचाव (Pull)।\n3. बताएं कि वस्तु की गति पर क्या प्रभाव पड़ा (रुकी, तेज हुई, या दिशा बदली?)।'
                      }
                    </p>
                  </div>

                  {/* Scaffold Support */}
                  <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 space-y-1.5 text-xs">
                    <div className="font-bold text-blue-900 dark:text-blue-200 flex items-center gap-1.5">
                      <Lightbulb className="w-3.5 h-3.5 text-blue-600" />
                      <span>Scaffold Support (For Struggling Students):</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedPreviewTask.scaffoldSupport}
                    </p>
                  </div>

                  {/* Extension Challenge */}
                  <div className="p-4 rounded-xl bg-purple-50/70 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-900/60 space-y-1.5 text-xs">
                    <div className="font-bold text-purple-900 dark:text-purple-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>Extension Challenge (For Fast Finishers):</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                      {selectedPreviewTask.extensionChallenge}
                    </p>
                  </div>

                  {/* Curricular Citation Grounding */}
                  <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400">
                    <span className="font-bold text-slate-800 dark:text-slate-200">Official Curriculum Grounding: </span>
                    {selectedPreviewTask.sourceCitation}
                  </div>

                  {/* 1-Click Print Button */}
                  <button
                    onClick={() => setIsWorksheetModalOpen(true)}
                    className="w-full py-3 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 transition-colors flex items-center justify-center gap-2 border border-slate-300 dark:border-slate-700 min-h-[44px]"
                  >
                    <Printer className="w-4 h-4 text-indigo-600" />
                    <span>Open Printable 1-Page Student Worksheet</span>
                  </button>
                </div>
              </div>
            </div>

            {/* STICKY BOTTOM BAR */}
            <div className="sticky bottom-4 z-20 p-4 rounded-2xl bg-slate-900 text-white shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
              <div className="text-xs text-slate-300">
                Ready to run with <span className="font-bold text-white">{targetClass}</span>? Time needed: <span className="font-bold text-amber-300">{selectedPreviewTask.timeEstimate}</span>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => setIsWorksheetModalOpen(true)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700 min-h-[44px] flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Worksheets</span>
                </button>
                <button
                  onClick={() => handleTriggerAssign(selectedPreviewTask)}
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl text-xs sm:text-sm font-black bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow-md min-h-[44px] flex items-center justify-center gap-2"
                >
                  <span>Assign This Task Now (3 Clicks)</span>
                  <ArrowRight className="w-4 h-4 font-bold" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SCREEN 3: REAL-TIME TEACHER INTERVENTION DASHBOARD */}
        {/* ========================================================= */}
        {currentScreen === 'dashboard' && (
          <div className="space-y-6">
            {/* Top Bar with Live Indicator & Class Code */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Live Classroom Sync Active
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-xs font-semibold text-slate-500">{targetClass}</span>
                </div>
                <h2 className="text-lg sm:text-xl font-black text-slate-900 dark:text-slate-100">
                  {activeTask.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                  <div className="text-[11px] text-slate-500 font-bold uppercase tracking-wide">Blackboard Code</div>
                  <div className="font-mono text-base font-black text-indigo-600 dark:text-indigo-400">S2S-8B</div>
                </div>
                <button
                  onClick={copyClassCode}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 transition-colors flex items-center gap-1.5 min-h-[40px]"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Code</span>
                </button>
                <button
                  onClick={() => setIsAssignModalOpen(true)}
                  className="px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors flex items-center gap-1.5 min-h-[40px]"
                >
                  <QrCode className="w-3.5 h-3.5" />
                  <span>Show QR Code</span>
                </button>
              </div>
            </div>

            {/* ABOVE THE FOLD: 4 CLEAN METRICS */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">{completedCount}</div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Completed</div>
                <div className="text-[11px] text-slate-500">Mastery criteria met</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-3xl font-black text-amber-600 dark:text-amber-400">{stuckCount}</div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Stuck</div>
                <div className="text-[11px] text-slate-500">Need prompt or scaffold</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-3xl font-black text-slate-500 dark:text-slate-400">{notStartedCount}</div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Not Started</div>
                <div className="text-[11px] text-slate-500">Lagging or absent</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-3xl font-black text-indigo-600 dark:text-indigo-400">{masteryPercent}%</div>
                <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-1">Class Mastery</div>
                <div className="text-[11px] text-slate-500">Avg score: 4.6 / 5.0</div>
              </div>
            </div>

            {/* PLAIN-LANGUAGE INTERVENTION FLAGS (NO JARGON) */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
                Active Classroom Interventions (1-Click Actions)
              </div>

              {/* Flag 1: Not started */}
              {notStartedCount > 0 && (
                <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {notStartedCount} students haven't opened the task yet.
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        Students: Aarav, Divya, Kabir, Pooja, Rohan, Shreya, Tanvi
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleBroadcastHook}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-white transition-colors shadow-sm min-h-[40px] flex items-center gap-1.5"
                    >
                      <Radio className="w-3.5 h-3.5" />
                      <span>Broadcast 3-Min Hook to Board</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Flag 2: Stuck students */}
              {stuckCount > 0 && (
                <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-900/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {stuckCount} students are stuck on Step 2 (Push vs Pull in Friction).
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        Students: Farhan, Jaya, Pranav, Sameer, Sneha
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handlePushScaffoldClue}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-colors shadow-sm min-h-[40px] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Push Scaffold Hint to Screens</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Flag 3: Fast Finishers */}
              {completedCount >= 12 && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        {completedCount} students finished early with full accuracy.
                      </div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        Ready for extension challenge: "Identify simultaneous push and pull in bicycle braking."
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={handleUnlockExtension}
                      className="px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm min-h-[40px] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Unlock Extension Challenge</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* LIVE STUDENT HEATMAP GRID */}
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                    Student Heatmap (Click any student to view/intervene)
                  </h3>
                  <p className="text-xs text-slate-500">
                    Instant color-coded status for all 38 students in Class 8-B.
                  </p>
                </div>

                {/* Heatmap filter buttons */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <button
                    onClick={() => setStudentFilter('all')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      studentFilter === 'all' ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    All ({students.length})
                  </button>
                  <button
                    onClick={() => setStudentFilter('stuck')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      studentFilter === 'stuck' ? 'bg-amber-600 text-white' : 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300'
                    }`}
                  >
                    Stuck ({stuckCount})
                  </button>
                  <button
                    onClick={() => setStudentFilter('not-started')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      studentFilter === 'not-started' ? 'bg-slate-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    Not Started ({notStartedCount})
                  </button>
                  <button
                    onClick={() => setStudentFilter('completed')}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-colors ${
                      studentFilter === 'completed' ? 'bg-emerald-600 text-white' : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300'
                    }`}
                  >
                    Completed ({completedCount})
                  </button>
                </div>
              </div>

              {/* Grid of 38 student tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {filteredStudents.map((student) => {
                  let badgeBg = 'bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300';
                  let statusDot = 'bg-slate-400';

                  if (student.status === 'completed') {
                    badgeBg = 'bg-emerald-50/80 border-emerald-300 text-emerald-900 dark:bg-emerald-950/40 dark:border-emerald-800 dark:text-emerald-200';
                    statusDot = 'bg-emerald-500';
                  } else if (student.status === 'stuck') {
                    badgeBg = 'bg-amber-50/80 border-amber-300 text-amber-900 dark:bg-amber-950/40 dark:border-amber-800 dark:text-amber-200';
                    statusDot = 'bg-amber-500 animate-pulse';
                  } else if (student.status === 'working') {
                    badgeBg = 'bg-blue-50/80 border-blue-300 text-blue-900 dark:bg-blue-950/40 dark:border-blue-800 dark:text-blue-200';
                    statusDot = 'bg-blue-500';
                  }

                  return (
                    <button
                      key={student.id}
                      onClick={() => setSelectedStudent(student)}
                      className={`p-2.5 rounded-xl border text-left transition-transform active:scale-95 hover:shadow-sm ${badgeBg} min-h-[58px] flex flex-col justify-between`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[10px] font-mono font-bold opacity-70">
                          #{String(student.rollNo).padStart(2, '0')}
                        </span>
                        <span className={`w-2 h-2 rounded-full ${statusDot}`} />
                      </div>
                      <div className="font-bold text-xs truncate w-full">
                        {student.name}
                      </div>
                      <div className="text-[10px] truncate capitalize opacity-80">
                        {student.status === 'completed' ? '✓ Completed (5/5)' : student.step}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* ========================================================= */}
      {/* MODAL 1: 3-CLICK ASSIGNMENT FLOW */}
      {/* ========================================================= */}
      {isAssignModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  3-Click Classroom Assignment
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                  {assignStep === 'success' ? 'Task is Live in Classroom!' : 'Launch Task to Class'}
                </h3>
              </div>
              <button
                onClick={() => setIsAssignModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {assignStep !== 'success' ? (
              <div className="space-y-5">
                {/* Task preview mini strip */}
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                  <div className="text-xs font-bold text-slate-500">Selected Task:</div>
                  <div className="text-sm font-bold text-slate-900 dark:text-slate-100">{activeTask.title}</div>
                  <div className="text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
                    {activeTask.subject} · {activeTask.timeEstimate} · {activeTask.resourceLevel} Resource
                  </div>
                </div>

                {/* Click 1: Select Class */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Click 1: Select Target Class
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setTargetClass('Class 8-B (38 Students)')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        targetClass.includes('8-B')
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="text-xs">Class 8-B</div>
                      <div className="text-[11px] opacity-75">38 Students (Current)</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTargetClass('Class 8-A (42 Students)')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        targetClass.includes('8-A')
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="text-xs">Class 8-A</div>
                      <div className="text-[11px] opacity-75">42 Students</div>
                    </button>
                  </div>
                </div>

                {/* Click 2: Due Window & Delivery Mode */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                    Click 2: Timing & Classroom Mode
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDueWindow('today')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        dueWindow === 'today'
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="text-xs">In-Class Today</div>
                      <div className="text-[11px] opacity-75">Period 3 (Next 30 min)</div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setDueWindow('tomorrow')}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        dueWindow === 'tomorrow'
                          ? 'border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-900 dark:text-indigo-200 font-bold'
                          : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className="text-xs">Due Tomorrow</div>
                      <div className="text-[11px] opacity-75">Homework / Review</div>
                    </button>
                  </div>
                </div>

                {/* Click 3: Confirm & Launch Button */}
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setAssignStep('success');
                      showToast('Task successfully launched to Class 8-B!');
                    }}
                    className="w-full py-4 rounded-2xl font-black text-sm sm:text-base bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-lg flex items-center justify-center gap-2 min-h-[50px]"
                  >
                    <span>Click 3: Confirm & Launch Task</span>
                    <ArrowRight className="w-4 h-4 font-bold" />
                  </button>
                  <p className="text-[11px] text-center text-slate-500 mt-2">
                    Generates blackboard class code, mobile QR code, and printable PDF.
                  </p>
                </div>
              </div>
            ) : (
              /* Success / Live Access Screen */
              <div className="space-y-5 text-center">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>

                <div>
                  <h4 className="text-base font-black text-slate-900 dark:text-slate-100">
                    Students Can Now Join
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Write code on the blackboard, show QR code, or share via WhatsApp.
                  </p>
                </div>

                {/* Big Class Code Box */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-1">
                  <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    Blackboard Class Code:
                  </div>
                  <div className="font-mono text-3xl font-black text-indigo-600 dark:text-indigo-400 tracking-widest">
                    S2S-8B
                  </div>
                  <button
                    onClick={copyClassCode}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-indigo-600 mt-1"
                  >
                    {codeCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{codeCopied ? 'Copied!' : 'Click to copy'}</span>
                  </button>
                </div>

                {/* QR Code Graphic (SVG) */}
                <div className="p-3 bg-white border border-slate-200 rounded-xl max-w-[150px] mx-auto shadow-sm">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-slate-900 fill-current">
                    <rect x="10" y="10" width="25" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <rect x="16" y="16" width="13" height="13" fill="currentColor"/>
                    <rect x="65" y="10" width="25" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <rect x="71" y="16" width="13" height="13" fill="currentColor"/>
                    <rect x="10" y="65" width="25" height="25" rx="3" fill="none" stroke="currentColor" strokeWidth="4"/>
                    <rect x="16" y="71" width="13" height="13" fill="currentColor"/>
                    <rect x="45" y="15" width="10" height="10" fill="currentColor"/>
                    <rect x="45" y="45" width="10" height="10" fill="currentColor"/>
                    <rect x="15" y="45" width="10" height="10" fill="currentColor"/>
                    <rect x="75" y="45" width="10" height="10" fill="currentColor"/>
                    <rect x="65" y="65" width="10" height="10" fill="currentColor"/>
                    <rect x="80" y="80" width="10" height="10" fill="currentColor"/>
                  </svg>
                  <div className="text-[9px] font-mono font-bold text-slate-600 mt-1">Scan to Join</div>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setIsAssignModalOpen(false);
                      setCurrentScreen('dashboard');
                    }}
                    className="w-full py-3 rounded-xl font-black text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-md min-h-[44px]"
                  >
                    Go to Live Classroom Monitor
                  </button>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        setIsAssignModalOpen(false);
                        setIsWorksheetModalOpen(true);
                      }}
                      className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      <span>Print Worksheets</span>
                    </button>
                    <a
                      href={`https://wa.me/?text=${encodeURIComponent(`Class 8-B Task: ${activeTask.title}. Join using Class Code: S2S-8B on Subjects2Skills.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 hover:bg-emerald-500 text-white transition-colors min-h-[44px] flex items-center justify-center gap-1.5"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>WhatsApp Share</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 2: PRINTABLE 1-PAGE STUDENT WORKSHEET */}
      {/* ========================================================= */}
      {isWorksheetModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white text-black rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] space-y-6 print:m-0 print:p-0 print:max-w-none print:shadow-none print:border-none">
            {/* Action Bar (hidden in print) */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 print:hidden">
              <div className="text-xs font-bold text-slate-600 uppercase tracking-wider flex items-center gap-2">
                <Printer className="w-4 h-4 text-indigo-600" />
                <span>Printable Student Worksheet (A4 / 1-Page Layout)</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm min-h-[38px] flex items-center gap-1.5"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Now</span>
                </button>
                <button
                  onClick={() => setIsWorksheetModalOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* THE PRINTABLE WORKSHEET */}
            <div className="space-y-4 border-2 border-black p-6 rounded-xl font-sans bg-white text-black">
              {/* Header Details */}
              <div className="border-b-2 border-black pb-3 text-center space-y-1">
                <div className="text-xs font-black uppercase tracking-widest text-slate-700">
                  SUBJECTS2SKILLS · CLASSROOM TASK SHEET
                </div>
                <h2 className="text-xl font-black uppercase">
                  {selectedPreviewTask.subject} · Grade {selectedGrade}
                </h2>
                <div className="text-xs font-semibold text-slate-800">
                  Task ID: {selectedPreviewTask.taskId} · Time: {selectedPreviewTask.timeEstimate}
                </div>
              </div>

              {/* Student Metadata Box */}
              <div className="grid grid-cols-3 gap-2 border border-black p-2.5 text-xs font-semibold">
                <div>Student Name: _______________________</div>
                <div>Roll No: __________</div>
                <div>Section: 8-B</div>
              </div>

              {/* Task Title & Objective */}
              <div className="space-y-1 text-xs">
                <div className="font-black text-sm">Task: {selectedPreviewTask.title}</div>
                <div><span className="font-bold">Objective: </span>{selectedPreviewTask.subCompetency}</div>
                <div><span className="font-bold">Official Source: </span>{selectedPreviewTask.sourceCitation}</div>
              </div>

              {/* Instructions */}
              <div className="bg-slate-100 border border-slate-400 p-2 text-xs space-y-1">
                <div className="font-bold">Instructions:</div>
                <p>
                  Look around the room or observe daily life actions. Fill out the 5 rows below. Clearly mark whether the action is a Push or a Pull.
                </p>
              </div>

              {/* 5-Row Observation Table */}
              <table className="w-full border-collapse border border-black text-xs">
                <thead>
                  <tr className="bg-slate-200 border-b border-black text-left">
                    <th className="border border-black p-1.5 w-8">#</th>
                    <th className="border border-black p-1.5">Action Observed</th>
                    <th className="border border-black p-1.5">Object Involved</th>
                    <th className="border border-black p-1.5 w-24">Push or Pull?</th>
                    <th className="border border-black p-1.5">Resulting Motion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black bg-slate-50">
                    <td className="border border-black p-1.5 font-bold">Ex</td>
                    <td className="border border-black p-1.5">Opening refrigerator door</td>
                    <td className="border border-black p-1.5">Door handle</td>
                    <td className="border border-black p-1.5 font-bold">PULL</td>
                    <td className="border border-black p-1.5">Door swings towards you</td>
                  </tr>
                  {[1, 2, 3, 4, 5].map(i => (
                    <tr key={i} className="border-b border-black h-10">
                      <td className="border border-black p-1.5 font-bold">{i}</td>
                      <td className="border border-black p-1.5"></td>
                      <td className="border border-black p-1.5"></td>
                      <td className="border border-black p-1.5 text-center text-slate-400 text-[10px]">Push / Pull</td>
                      <td className="border border-black p-1.5"></td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Extension Challenge */}
              <div className="border border-black p-2.5 text-xs space-y-1">
                <div className="font-bold">★ Extension Challenge (Optional):</div>
                <p>{selectedPreviewTask.extensionChallenge}</p>
                <div className="h-8 border-b border-dashed border-slate-400"></div>
              </div>

              {/* Teacher Signature & Feedback */}
              <div className="flex items-center justify-between pt-3 text-xs font-bold">
                <div>Teacher Sign: ___________________</div>
                <div>Mastery Score: [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ] ★</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 3: STUDENT DETAIL & INTERVENTION DRAWER */}
      {/* ========================================================= */}
      {selectedStudent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                  Student Snapshot
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-slate-100">
                  {selectedStudent.name} (Roll #{selectedStudent.rollNo})
                </h3>
              </div>
              <button
                onClick={() => setSelectedStudent(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
                <span className="text-slate-500">Current Status:</span>
                <span className={`font-bold capitalize ${
                  selectedStudent.status === 'completed' ? 'text-emerald-600' :
                  selectedStudent.status === 'stuck' ? 'text-amber-600' : 'text-slate-600'
                }`}>
                  {selectedStudent.status}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-1">
                <div className="text-slate-500 font-medium">Current Progress / Step:</div>
                <div className="font-bold text-slate-900 dark:text-slate-100">{selectedStudent.step}</div>
                {selectedStudent.notes && (
                  <div className="text-amber-700 dark:text-amber-300 mt-1 italic">
                    "{selectedStudent.notes}"
                  </div>
                )}
              </div>

              {/* Direct Remedial Quick Feedback */}
              <div className="space-y-1.5 pt-2">
                <label className="font-bold text-slate-700 dark:text-slate-300">
                  Send Instant Targeted Hint / Nudge:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={feedbackInput}
                    onChange={(e) => setFeedbackInput(e.target.value)}
                    placeholder="e.g. Pull means moving towards you..."
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-900 dark:text-slate-100"
                  />
                  <button
                    onClick={handleSendFeedback}
                    className="px-3 py-2 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL 4: CONTEXTUAL "SHOW ME HOW" MICRO-HELP (30 SEC TOUR) */}
      {/* ========================================================= */}
      {showMeHowOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-900 rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <h3 className="text-base font-black text-slate-900 dark:text-slate-100">
                  How to Use in 30 Seconds
                </h3>
              </div>
              <button
                onClick={() => setShowMeHowOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3.5 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  1
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">Pick Today's Task</div>
                  <p className="mt-0.5">The home page already displays the best matching task for your current syllabus.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  2
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">Assign in 3 Clicks</div>
                  <p className="mt-0.5">Click "Assign Task", pick your class, and confirm. You get a code for the board and a printable PDF.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[11px]">
                  3
                </span>
                <div>
                  <div className="font-bold text-slate-900 dark:text-slate-100">Intervene Live</div>
                  <p className="mt-0.5">Watch the student heatmap. When someone is stuck, click "Push Scaffold" to help them without interrupting the class.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowMeHowOpen(false)}
              className="w-full py-3 rounded-xl font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white transition-colors min-h-[44px]"
            >
              Got it, let's start!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
