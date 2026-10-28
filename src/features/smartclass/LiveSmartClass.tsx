import React, { useState, useEffect, useRef } from 'react';
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
  ChevronLeft,
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
  RotateCw,
  Lightbulb,
  Radio,
  BookOpen,
  Compass,
  Download,
  PenTool,
  Maximize2,
  Minimize2,
  Wifi,
  WifiOff,
  SplitSquareVertical,
  BarChart2,
  Play,
  Pause,
  Plus
} from 'lucide-react';

import { TimetablePeriod, LessonStage, StudentLiveRecord, PollQuestion } from './types';
import { TODAY_TIMETABLE, SMARTCLASS_ROSTER_8B, INITIAL_POLL } from './timetableData';
import { CanvasAnnotationOverlay } from './CanvasAnnotationOverlay';
import { InteractiveForceSim } from './InteractiveForceSim';
import { 
  RandomStudentPickerModal, 
  LivePollWidget, 
  StudentWorkComparisonModal, 
  SessionRecapModal 
} from './TeachingTools';
import { ALL_TASKS, TaskItem } from '@/data/taskLibrary';

export const LiveSmartClass: React.FC = () => {
  // Mode: 'launchpad' (timetable selection) vs 'live-session' (active class)
  const [sessionState, setSessionState] = useState<'launchpad' | 'live-session'>('launchpad');
  
  // Timetable & Selected Period
  const [selectedPeriod, setSelectedPeriod] = useState<TimetablePeriod>(() => {
    return TODAY_TIMETABLE.find(p => p.isCurrent) || TODAY_TIMETABLE[2];
  });

  // Current Lesson Stage
  const [currentStage, setCurrentStage] = useState<LessonStage>('warmup');
  
  // Timer state (45-minute countdown)
  const [timerSeconds, setTimerSeconds] = useState<number>(45 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  // Annotations Overlay Toggle
  const [isAnnotating, setIsAnnotating] = useState<boolean>(false);

  // Tools Modals
  const [isRandomPickerOpen, setIsRandomPickerOpen] = useState<boolean>(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [isRecapModalOpen, setIsRecapModalOpen] = useState<boolean>(false);
  const [isScaffoldOpen, setIsScaffoldOpen] = useState<boolean>(false);
  const [isExtensionOpen, setIsExtensionOpen] = useState<boolean>(false);

  // Network Online/Offline state (Simulated & Real)
  const [isOnline, setIsOnline] = useState<boolean>(() => {
    return typeof navigator !== 'undefined' ? navigator.onLine : true;
  });

  // Live Roster and Poll state
  const [students, setStudents] = useState<StudentLiveRecord[]>(SMARTCLASS_ROSTER_8B);
  const [activePoll, setActivePoll] = useState<PollQuestion>(INITIAL_POLL);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Step reveal count for Teach stage
  const [revealedSteps, setRevealedSteps] = useState<number>(1);

  // Active Task Object
  const currentTask: TaskItem = ALL_TASKS.find(t => t.taskId === selectedPeriod.defaultTaskId) || ALL_TASKS[0];

  // Fullscreen state
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Timer interval effect
  useEffect(() => {
    let interval: any = null;
    if (sessionState === 'live-session' && isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => Math.max(0, prev - 1));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [sessionState, isTimerRunning, timerSeconds]);

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  const handleStartLiveClass = () => {
    setSessionState('live-session');
    setCurrentStage('warmup');
    setTimerSeconds(selectedPeriod.durationMinutes * 60);
    setIsTimerRunning(true);
    showToast(`Live Smart Class launched for Grade ${selectedPeriod.grade}-${selectedPeriod.section}!`);
  };

  const handleEndClass = () => {
    setIsTimerRunning(false);
    setIsRecapModalOpen(true);
  };

  // 1-Click Remedial Intervention Triggers
  const handleBroadcastHook = () => {
    setStudents(prev => prev.map(s => {
      if (s.status === 'not-started') {
        return { ...s, status: 'working', currentStep: 'Step 1: Reading hook prompt', lastActive: 'Just now' };
      }
      return s;
    }));
    showToast('📢 Hook prompt broadcasted to student tablets!');
  };

  const handlePushScaffoldClue = () => {
    setStudents(prev => prev.map(s => {
      if (s.status === 'stuck') {
        return { ...s, status: 'working', currentStep: 'Applying scaffold hint: Friction resists sliding motion', lastActive: 'Just now' };
      }
      return s;
    }));
    showToast('💡 Scaffold hint pushed to stuck students!');
  };

  // Stage Configurations
  const stages: Array<{ id: LessonStage; label: string; time: string }> = [
    { id: 'warmup', label: '1. Warm-Up & Hook', time: '00–05 min' },
    { id: 'teach', label: '2. Teach & Model', time: '05–15 min' },
    { id: 'task', label: '3. Guided Task', time: '15–30 min' },
    { id: 'discuss', label: '4. Class Discussion', time: '30–40 min' },
    { id: 'exit', label: '5. Check Understanding', time: '40–45 min' },
  ];

  const currentStageIndex = stages.findIndex(s => s.id === currentStage);

  const completedCount = students.filter(s => s.status === 'completed').length;
  const stuckCount = students.filter(s => s.status === 'stuck').length;
  const notStartedCount = students.filter(s => s.status === 'not-started').length;
  const totalCount = students.length;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans select-none overflow-hidden">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-indigo-500 animate-in fade-in duration-150">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-bold">{toastMessage}</span>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODE A: TIMETABLE LAUNCHPAD (ZERO SETUP / DEFAULT TEACHER HOME)       */}
      {/* ==================================================================== */}
      {sessionState === 'launchpad' && (
        <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 flex flex-col justify-between space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-indigo-400">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>Smart Board Mode · Interactive Display Station</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight mt-1">
                Subjects2Skills Live Smart Class
              </h1>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Teacher: <span className="font-bold text-white">Mrs. Sunita Sharma</span> · Senior Science & Mathematics Faculty
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`min-h-[48px] px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border transition-colors ${
                  isOnline 
                    ? 'bg-emerald-950/60 border-emerald-700 text-emerald-300' 
                    : 'bg-amber-950/60 border-amber-700 text-amber-300'
                }`}
                title="Toggle Online / Offline Network Simulation"
              >
                {isOnline ? <Wifi className="w-4 h-4" /> : <WifiOff className="w-4 h-4" />}
                <span>{isOnline ? 'Online (Synced)' : '⚡ Offline Mode'}</span>
              </button>

              <button
                onClick={handleToggleFullscreen}
                className="min-h-[48px] px-3.5 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>{isFullscreen ? 'Exit Full' : 'Fullscreen'}</span>
              </button>
            </div>
          </div>

          {/* ACTIVE PERIOD HERO CARD (< 10 SECONDS SELECTION) */}
          <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 p-6 sm:p-8 rounded-3xl border-2 border-amber-400/80 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-black uppercase tracking-wider flex items-center gap-1.5 animate-pulse">
                <Clock className="w-3.5 h-3.5" />
                <span>CURRENT TIMETABLE PERIOD · PERIOD {selectedPeriod.periodNumber}</span>
              </div>
              <div className="text-xs font-mono font-bold text-indigo-200">
                {selectedPeriod.startTime} - {selectedPeriod.endTime} ({selectedPeriod.durationMinutes} min)
              </div>
            </div>

            <div className="space-y-2 mb-5">
              <div className="text-xs text-indigo-300 font-bold uppercase tracking-wider">
                {selectedPeriod.room} · Grade {selectedPeriod.grade}-{selectedPeriod.section} · {selectedPeriod.subject}
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {currentTask.title}
              </h2>
              <div className="text-sm text-indigo-200 font-medium">
                {selectedPeriod.chapterTitle} · {currentTask.subCompetency}
              </div>
            </div>

            {/* Success criteria snippet */}
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-xs text-indigo-100 mb-6 space-y-1">
              <div><span className="font-bold text-white">Target Learning Outcome: </span>{currentTask.competency}</div>
              <div><span className="font-bold text-white">Success Checkpoint: </span>{currentTask.successCriteria}</div>
            </div>

            {/* Giant Launch Button (Touch Target >= 52px) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={handleStartLiveClass}
                className="min-h-[56px] px-8 py-4 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base sm:text-lg transition-transform active:scale-95 shadow-xl flex items-center gap-3"
              >
                <span>🚀 START LIVE CLASS NOW (1 Tap)</span>
                <ArrowRight className="w-5 h-5 font-bold" />
              </button>

              <div className="text-xs text-indigo-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Auto-loads 5-step lesson flow, interactive sim, worksheet & live roster.</span>
              </div>
            </div>
          </div>

          {/* ALL PERIODS TIMETABLE STRIP */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Today's Complete Schedule (Tap any period to switch)
              </h3>
              <span className="text-xs text-slate-500 font-mono">6 Periods Scheduled</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {TODAY_TIMETABLE.map((p) => {
                const isSelected = selectedPeriod.periodNumber === p.periodNumber;
                return (
                  <button
                    key={p.periodNumber}
                    onClick={() => setSelectedPeriod(p)}
                    className={`min-h-[76px] p-3 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-indigo-600 border-amber-400 text-white shadow-lg ring-2 ring-indigo-400'
                        : 'bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="font-bold">Period {p.periodNumber}</span>
                      {p.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                      )}
                    </div>
                    <div className="font-bold text-xs truncate mt-0.5">
                      Gr {p.grade}-{p.section} · {p.subject}
                    </div>
                    <div className="text-[10px] opacity-75 truncate mt-0.5">
                      {p.startTime}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODE B: LIVE CLASS ACTIVE VIEW (ORCHESTRATOR FOR SMART BOARDS)        */}
      {/* ==================================================================== */}
      {sessionState === 'live-session' && (
        <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
          {/* 1. TOP BAR (Height: 64px) */}
          <header className="h-16 bg-slate-900 border-b border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 z-20">
            <div className="flex items-center gap-3 truncate">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-600 text-white text-xs font-mono font-black">
                PERIOD {selectedPeriod.periodNumber}
              </span>
              <div className="truncate">
                <span className="font-bold text-sm text-white">
                  Class {selectedPeriod.grade}-{selectedPeriod.section} · {selectedPeriod.subject}
                </span>
                <span className="text-slate-400 text-xs hidden md:inline ml-2">
                  "{currentTask.title}"
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              {/* Timer Widget */}
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 font-mono">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="text-base font-black text-amber-300 min-w-[50px]">
                  {formatTimer(timerSeconds)}
                </span>
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="p-1 hover:text-white text-slate-400"
                  title={isTimerRunning ? 'Pause' : 'Resume'}
                >
                  {isTimerRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
                <button
                  onClick={() => setTimerSeconds(prev => prev + 300)}
                  className="p-1 hover:text-white text-slate-400"
                  title="Add 5 Minutes"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Online / Offline Status */}
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`min-h-[44px] px-2.5 py-1 rounded-lg text-xs font-bold flex items-center gap-1.5 border ${
                  isOnline 
                    ? 'bg-emerald-950/80 border-emerald-700 text-emerald-300' 
                    : 'bg-amber-950/80 border-amber-700 text-amber-300'
                }`}
                title="Toggle Online/Offline state"
              >
                {isOnline ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isOnline ? 'Online' : 'Offline'}</span>
              </button>

              {/* End Class Button */}
              <button
                onClick={handleEndClass}
                className="min-h-[44px] px-4 py-1.5 rounded-xl text-xs font-black bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm flex items-center gap-1.5"
              >
                <span>End Class 🛑</span>
              </button>
            </div>
          </header>

          {/* 2. THREE-PANE LIVE ORCHESTRATOR BODY */}
          <div className="flex-1 flex overflow-hidden relative">
            {/* -------------------------------------------------------- */}
            {/* LEFT RAIL: 5-STEP LESSON FLOW (Width: 20%)              */}
            {/* -------------------------------------------------------- */}
            <aside className="w-56 lg:w-64 bg-slate-900/90 border-r border-slate-800 p-3 flex flex-col justify-between shrink-0 overflow-y-auto">
              <div className="space-y-2">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest px-2 pt-1">
                  Lesson Flow (45 min)
                </div>

                <div className="space-y-1.5">
                  {stages.map((st, idx) => {
                    const isActive = currentStage === st.id;
                    const isPassed = idx < currentStageIndex;

                    return (
                      <button
                        key={st.id}
                        onClick={() => setCurrentStage(st.id)}
                        className={`w-full min-h-[52px] p-3 rounded-2xl text-left transition-all flex items-start gap-2.5 ${
                          isActive
                            ? 'bg-indigo-600 text-white shadow-lg ring-1 ring-amber-400'
                            : isPassed
                            ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800'
                            : 'bg-slate-950/60 text-slate-500 hover:bg-slate-850'
                        }`}
                      >
                        <div className="mt-0.5">
                          {isPassed ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <div className={`w-4 h-4 rounded-full border text-[10px] font-mono flex items-center justify-center font-bold ${
                              isActive ? 'border-white text-white' : 'border-slate-600 text-slate-400'
                            }`}>
                              {idx + 1}
                            </div>
                          )}
                        </div>
                        <div className="truncate">
                          <div className="font-bold text-xs truncate">{st.label}</div>
                          <div className={`text-[10px] font-mono ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                            {st.time}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Class Code & Connection Box */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center space-y-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Board Access Code</div>
                <div className="font-mono text-xl font-black text-amber-400 tracking-wider">
                  S2S-8B
                </div>
                <div className="text-[10px] text-slate-400">
                  {completedCount}/{totalCount} Connected
                </div>
              </div>
            </aside>

            {/* -------------------------------------------------------- */}
            {/* MAIN CANVAS: INTERACTIVE STAGE & ANNOTATION (Width: 55%) */}
            {/* -------------------------------------------------------- */}
            <main className="flex-1 bg-slate-950 p-4 sm:p-6 overflow-y-auto relative flex flex-col justify-between">
              {/* STAGE 1: WARM-UP & HOOK */}
              {currentStage === 'warmup' && (
                <div className="max-w-3xl mx-auto w-full space-y-6 my-auto">
                  <div className="text-center space-y-2">
                    <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider">
                      Stage 1: Hook & Physical Spark (00–05 min)
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                      "Can you make something move without a Push or a Pull?"
                    </h3>
                  </div>

                  {/* Big Visual Prompt Box */}
                  <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-4">
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      Teacher Physical Action Hook (Do this in front of class):
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                      <div className="p-4 rounded-2xl bg-indigo-950/60 border border-indigo-800/60">
                        <span className="font-bold text-indigo-200">Demonstration A: </span>
                        Pull a classroom chair towards you with one finger.
                      </div>
                      <div className="p-4 rounded-2xl bg-amber-950/60 border border-amber-800/60">
                        <span className="font-bold text-amber-200">Demonstration B: </span>
                        Push a heavy desk with both hands.
                      </div>
                    </div>
                    <div className="text-xs text-slate-300 italic pt-2 border-t border-slate-800">
                      Ask class: "In which direction did the object move relative to your body? Did force exist before your hands touched the object?"
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={() => setCurrentStage('teach')}
                      className="min-h-[52px] px-8 py-3 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-black text-sm flex items-center gap-2 shadow-lg"
                    >
                      <span>Proceed to Stage 2: Teach & Model</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 2: TEACH & MODEL (INTERACTIVE SIMULATION + REVEAL) */}
              {currentStage === 'teach' && (
                <div className="space-y-6 max-w-4xl mx-auto w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                        Stage 2: Core Concept & Simulation (05–15 min)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        Force as an Interaction & Net Motion
                      </h3>
                    </div>

                    <button
                      onClick={() => setRevealedSteps(prev => Math.min(3, prev + 1))}
                      className="min-h-[44px] px-3.5 py-1.5 rounded-xl bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Step Reveal ({revealedSteps}/3)</span>
                    </button>
                  </div>

                  {/* Interactive Simulation Component */}
                  <InteractiveForceSim />

                  {/* Step-by-Step Rule Reveal Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                      <div className="font-bold text-emerald-400 flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Rule 1: Two Objects</span>
                      </div>
                      <p className="text-slate-300">
                        A force only exists during an interaction between at least two objects.
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-2xl border text-xs space-y-1 transition-opacity ${
                      revealedSteps >= 2 ? 'bg-slate-900 border-slate-800 text-slate-300 opacity-100' : 'bg-slate-950 border-slate-900 text-slate-600 opacity-40'
                    }`}>
                      <div className="font-bold text-indigo-400 flex items-center gap-1">
                        <span>Rule 2: Magnitude & Direction</span>
                      </div>
                      <p>
                        {revealedSteps >= 2 
                          ? 'Force has both size (Newtons) and direction (Push vs Pull).'
                          : '[Tap Step Reveal to Unhide]'
                        }
                      </p>
                    </div>

                    <div className={`p-3.5 rounded-2xl border text-xs space-y-1 transition-opacity ${
                      revealedSteps >= 3 ? 'bg-slate-900 border-slate-800 text-slate-300 opacity-100' : 'bg-slate-950 border-slate-900 text-slate-600 opacity-40'
                    }`}>
                      <div className="font-bold text-amber-400 flex items-center gap-1">
                        <span>Rule 3: Net Force</span>
                      </div>
                      <p>
                        {revealedSteps >= 3 
                          ? 'Motion accelerates only when applied force exceeds friction.'
                          : '[Tap Step Reveal to Unhide]'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* STAGE 3: GUIDED TASK (DIGITAL OBSERVATION TABLE) */}
              {currentStage === 'task' && (
                <div className="space-y-5 max-w-4xl mx-auto w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                        Stage 3: Classroom Task (15–30 min)
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {currentTask.title}
                      </h3>
                    </div>
                    <div className="text-xs font-bold px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300">
                      Completed: <span className="text-emerald-400 font-mono font-bold">{completedCount}</span> / {totalCount}
                    </div>
                  </div>

                  {/* Task Instructions Table on Smart Board */}
                  <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden shadow-xl text-xs">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-800/80 border-b border-slate-700 text-slate-300 text-left font-bold">
                          <th className="p-3 w-10">#</th>
                          <th className="p-3">Action Observed</th>
                          <th className="p-3">Object Involved</th>
                          <th className="p-3 w-28">Push or Pull?</th>
                          <th className="p-3">Net Effect on Motion</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800 text-slate-200">
                        <tr className="bg-slate-950/40">
                          <td className="p-3 font-mono font-bold text-indigo-400">Ex</td>
                          <td className="p-3">Opening refrigerator door</td>
                          <td className="p-3">Door handle</td>
                          <td className="p-3 font-bold text-amber-400">PULL</td>
                          <td className="p-3">Door swings towards you</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono">1</td>
                          <td className="p-3 font-medium">Kicking a football</td>
                          <td className="p-3">Football</td>
                          <td className="p-3 font-bold text-emerald-400">PUSH</td>
                          <td className="p-3">Ball moves away, accelerating forward</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono">2</td>
                          <td className="p-3 font-medium">Drawing water from a well (Rope)</td>
                          <td className="p-3">Rope / Bucket</td>
                          <td className="p-3 font-bold text-amber-400">PULL</td>
                          <td className="p-3">Bucket moves upward towards pulley</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono">3</td>
                          <td className="p-3 font-medium">Bicycle brake pads clutching rim</td>
                          <td className="p-3">Wheel rim</td>
                          <td className="p-3 font-bold text-indigo-400">FRICTION (PUSH)</td>
                          <td className="p-3">Opposes rotation, wheel decelerates to stop</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-mono">4</td>
                          <td className="p-3 font-medium">Magnet attracting paper clips</td>
                          <td className="p-3">Paper clip</td>
                          <td className="p-3 font-bold text-amber-400">PULL (Non-contact)</td>
                          <td className="p-3">Clip leaps towards magnet pole</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setIsScaffoldOpen(true)}
                      className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-indigo-300 border border-indigo-900/60 flex items-center gap-1.5"
                    >
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>View Scaffold Support Card</span>
                    </button>
                    <button
                      onClick={() => setIsExtensionOpen(true)}
                      className="min-h-[44px] px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-purple-300 border border-purple-900/60 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span>View Extension Challenge Card</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 4: DISCUSS (MISCONCEPTIONS & DEBATE) */}
              {currentStage === 'discuss' && (
                <div className="space-y-6 max-w-4xl mx-auto w-full">
                  <div>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      Stage 4: Classroom Discussion (30–40 min)
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      Top Student Misconceptions & Discussion Prompts
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Misconception 1 */}
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-rose-400 uppercase tracking-wide flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Misconception 1: "Force is Stored"</span>
                      </div>
                      <div className="text-sm font-bold text-white">
                        "Does an object possess force like it possesses color or mass?"
                      </div>
                      <div className="text-xs text-emerald-300 bg-emerald-950/40 p-3 rounded-xl border border-emerald-900/60">
                        <span className="font-bold text-white">Teacher Clarification: </span>
                        Force is not an internal property. It only exists *during* the interaction between two bodies.
                      </div>
                    </div>

                    {/* Misconception 2 */}
                    <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
                      <div className="text-xs font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Misconception 2: "Force = Motion"</span>
                      </div>
                      <div className="text-sm font-bold text-white">
                        "If you push a wall and it does not move, is force acting?"
                      </div>
                      <div className="text-xs text-indigo-300 bg-indigo-950/40 p-3 rounded-xl border border-indigo-900/60">
                        <span className="font-bold text-white">Teacher Clarification: </span>
                        Yes! Force is applied, but balanced by the wall's normal force, resulting in zero *net* motion.
                      </div>
                    </div>
                  </div>

                  {/* Smart Board Discussion Actions */}
                  <div className="flex items-center gap-3 pt-2">
                    <button
                      onClick={() => setIsRandomPickerOpen(true)}
                      className="min-h-[48px] px-5 py-2.5 rounded-xl bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow"
                    >
                      <RotateCw className="w-4 h-4" />
                      <span>Call on Random Student to Explain</span>
                    </button>
                    <button
                      onClick={() => setIsCompareModalOpen(true)}
                      className="min-h-[48px] px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 border border-slate-700"
                    >
                      <SplitSquareVertical className="w-4 h-4" />
                      <span>Compare 2 Student Answers on Board</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 5: EXIT CHECK (UNDERSTANDING POLL) */}
              {currentStage === 'exit' && (
                <div className="space-y-6 max-w-3xl mx-auto w-full my-auto">
                  <div className="text-center space-y-1">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-bold uppercase tracking-wider">
                      Stage 5: Formative Check Understanding (40–45 min)
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-white">
                      Classroom Exit Ticket
                    </h3>
                  </div>

                  <LivePollWidget poll={activePoll} />

                  <div className="flex justify-center pt-2">
                    <button
                      onClick={handleEndClass}
                      className="min-h-[52px] px-8 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-black text-sm flex items-center gap-2 shadow-xl"
                    >
                      <span>Complete Period & Generate Session Recap</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Interactive Stylus & Finger Annotation Canvas Overlay */}
              <CanvasAnnotationOverlay
                isActive={isAnnotating}
                onClose={() => setIsAnnotating(false)}
              />
            </main>

            {/* -------------------------------------------------------- */}
            {/* RIGHT RAIL: LIVE STUDENT PULSE & TOOLS (Width: 25%)      */}
            {/* -------------------------------------------------------- */}
            <aside className="w-72 lg:w-80 bg-slate-900/90 border-l border-slate-800 p-4 flex flex-col justify-between shrink-0 overflow-y-auto space-y-4">
              {/* Student Progress Counters */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
                  <span>Classroom Pulse</span>
                  <span className="text-emerald-400 font-mono font-bold">38 Enrolled</span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xl font-black text-emerald-400">{completedCount}</div>
                    <div className="text-[10px] text-slate-400">Completed</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xl font-black text-amber-400">{stuckCount}</div>
                    <div className="text-[10px] text-slate-400">Stuck</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-xl font-black text-slate-400">{notStartedCount}</div>
                    <div className="text-[10px] text-slate-400">Unstarted</div>
                  </div>
                </div>

                {/* Plain-Language Intervention Alerts */}
                <div className="space-y-2 pt-2">
                  {stuckCount > 0 && (
                    <div className="p-3 rounded-xl bg-amber-950/60 border border-amber-800/80 space-y-2">
                      <div className="flex items-start gap-2 text-xs font-bold text-amber-300">
                        <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                        <span>5 students stuck on Step 2 (Friction Direction)</span>
                      </div>
                      <button
                        onClick={handlePushScaffoldClue}
                        className="w-full min-h-[40px] py-1.5 rounded-lg text-xs font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shadow"
                      >
                        Push Scaffold Clue
                      </button>
                    </div>
                  )}

                  {notStartedCount > 0 && (
                    <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="text-xs text-slate-300 font-medium">
                        7 students have not opened the task yet.
                      </div>
                      <button
                        onClick={handleBroadcastHook}
                        className="w-full min-h-[40px] py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors border border-slate-700"
                      >
                        Broadcast 3-Min Hook
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Teaching Tools Quick Trigger Buttons */}
              <div className="space-y-2 pt-3 border-t border-slate-800">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                  Smart Teaching Tools
                </div>
                <button
                  onClick={() => setIsRandomPickerOpen(true)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <RotateCw className="w-4 h-4 text-amber-400" />
                    <span>Random Student Wheel</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>

                <button
                  onClick={() => setIsCompareModalOpen(true)}
                  className="w-full min-h-[44px] px-3 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 flex items-center justify-between"
                >
                  <span className="flex items-center gap-2">
                    <SplitSquareVertical className="w-4 h-4 text-indigo-400" />
                    <span>Compare Student Work</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </aside>
          </div>

          {/* 3. BOTTOM CONTROL BAR (Height: 64px, Touch Targets >= 48px) */}
          <footer className="h-16 bg-slate-900 border-t border-slate-800 px-4 sm:px-6 flex items-center justify-between gap-4 shrink-0 z-20">
            {/* Left Controls: Annotation & Step Reveal */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAnnotating(!isAnnotating)}
                className={`min-h-[48px] px-4 py-2 rounded-xl font-bold text-xs flex items-center gap-2 border transition-colors ${
                  isAnnotating 
                    ? 'bg-amber-400 text-slate-950 border-amber-300 font-black shadow-lg' 
                    : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
                title="Toggle Stylus & Touch Annotations"
              >
                <PenTool className="w-4 h-4" />
                <span>{isAnnotating ? 'Close Pen' : 'Annotate (Stylus/Finger)'}</span>
              </button>

              <button
                onClick={() => setRevealedSteps(prev => Math.min(3, prev + 1))}
                className="min-h-[48px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-slate-700"
              >
                <Eye className="w-4 h-4" />
                <span>Step Reveal</span>
              </button>
            </div>

            {/* Middle Controls: Scaffold & Extension Drawer Toggles */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsScaffoldOpen(true)}
                className="min-h-[48px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-slate-700"
              >
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Scaffold Card</span>
              </button>

              <button
                onClick={() => setIsExtensionOpen(true)}
                className="min-h-[48px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs flex items-center gap-1.5 border border-slate-700"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Extension Challenge</span>
              </button>
            </div>

            {/* Right Controls: Previous / Next Stage */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (currentStageIndex > 0) {
                    setCurrentStage(stages[currentStageIndex - 1].id);
                  }
                }}
                disabled={currentStageIndex === 0}
                className="min-h-[48px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 font-bold text-xs flex items-center gap-1 border border-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <button
                onClick={() => {
                  if (currentStageIndex < stages.length - 1) {
                    setCurrentStage(stages[currentStageIndex + 1].id);
                  }
                }}
                disabled={currentStageIndex === stages.length - 1}
                className="min-h-[48px] px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-black text-xs flex items-center gap-1.5 shadow"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </footer>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MODALS: RANDOM PICKER, WORK COMPARE, RECAP, SCAFFOLD, EXTENSION      */}
      {/* ==================================================================== */}
      <RandomStudentPickerModal
        students={students}
        isOpen={isRandomPickerOpen}
        onClose={() => setIsRandomPickerOpen(false)}
      />

      <StudentWorkComparisonModal
        students={students}
        isOpen={isCompareModalOpen}
        onClose={() => setIsCompareModalOpen(false)}
      />

      <SessionRecapModal
        isOpen={isRecapModalOpen}
        onClose={() => setIsRecapModalOpen(false)}
        onReturnToTimetable={() => {
          setIsRecapModalOpen(false);
          setSessionState('launchpad');
        }}
      />

      {/* Scaffold Drawer Modal */}
      {isScaffoldOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-indigo-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wide">
                <Lightbulb className="w-4 h-4 text-amber-400" />
                <span>Teacher Scaffold Card (Struggling Students)</span>
              </div>
              <button onClick={() => setIsScaffoldOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm font-semibold text-slate-200 leading-relaxed">
              {currentTask.scaffoldSupport}
            </div>
            <button
              onClick={() => {
                handlePushScaffoldClue();
                setIsScaffoldOpen(false);
              }}
              className="w-full min-h-[48px] py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs"
            >
              Push This Scaffold Clue to All 5 Stuck Students
            </button>
          </div>
        </div>
      )}

      {/* Extension Drawer Modal */}
      {isExtensionOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="bg-slate-900 text-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-purple-700 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wide">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Extension Challenge (High Achievers)</span>
              </div>
              <button onClick={() => setIsExtensionOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-sm font-semibold text-slate-200 leading-relaxed">
              {currentTask.extensionChallenge}
            </div>
            <button
              onClick={() => {
                showToast('🚀 Extension challenge broadcasted to completed students!');
                setIsExtensionOpen(false);
              }}
              className="w-full min-h-[48px] py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs"
            >
              Unlock Challenge on Screen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
