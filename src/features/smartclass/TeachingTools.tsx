import React, { useState } from 'react';
import { 
  Users, 
  RotateCw, 
  BarChart2, 
  CheckCircle2, 
  Sparkles, 
  X, 
  QrCode, 
  Download, 
  Printer, 
  Share2, 
  Copy, 
  Check, 
  FileText,
  SplitSquareVertical
} from 'lucide-react';
import { StudentLiveRecord, PollQuestion } from './types';

// ============================================================================
// 1. RANDOM STUDENT WHEEL PICKER
// ============================================================================
interface RandomPickerProps {
  students: StudentLiveRecord[];
  isOpen: boolean;
  onClose: () => void;
}

export const RandomStudentPickerModal: React.FC<RandomPickerProps> = ({
  students,
  isOpen,
  onClose,
}) => {
  const [selectedStudent, setSelectedStudent] = useState<StudentLiveRecord | null>(() => students[0] || null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [history, setHistory] = useState<string[]>([]);

  const handlePickRandom = () => {
    if (students.length === 0) return;
    setIsSpinning(true);

    let counter = 0;
    const interval = setInterval(() => {
      const randIdx = Math.floor(Math.random() * students.length);
      setSelectedStudent(students[randIdx]);
      counter++;
      if (counter > 15) {
        clearInterval(interval);
        const finalStudent = students[Math.floor(Math.random() * students.length)];
        setSelectedStudent(finalStudent);
        setIsSpinning(false);
        setHistory(prev => [finalStudent.name, ...prev.slice(0, 4)]);
      }
    }, 80);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-slate-900 text-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-700 space-y-6 text-center">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-xs">
            <Users className="w-4 h-4" />
            <span>Smart Board · Equitable Student Selector</span>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] p-2 rounded-xl text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Selected Student Display (Massive for 75" - 86" Displays) */}
        <div className={`p-8 rounded-3xl border-2 transition-all duration-200 ${
          isSpinning 
            ? 'bg-slate-800/80 border-indigo-500 scale-95' 
            : 'bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 border-amber-400 shadow-2xl'
        }`}>
          <div className="text-xs font-mono font-bold text-amber-300 uppercase tracking-widest mb-1">
            Roll #{selectedStudent?.rollNo ? String(selectedStudent.rollNo).padStart(2, '0') : '00'} · Class 8-B
          </div>
          <div className="text-3xl sm:text-5xl font-black text-white tracking-tight my-2">
            {selectedStudent?.name || 'Tap Pick to Select'}
          </div>
          <div className="text-xs sm:text-sm text-indigo-200">
            {selectedStudent?.status === 'completed' 
              ? '✓ Ready to share 5 observed examples' 
              : selectedStudent?.status === 'stuck' 
              ? '💡 Needs support with Step 2 (Friction)' 
              : 'Classroom Participant'
            }
          </div>
        </div>

        {/* Spin / Pick Button */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={handlePickRandom}
            disabled={isSpinning}
            className="min-h-[52px] px-8 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base transition-transform active:scale-95 shadow-lg flex items-center gap-2"
          >
            <RotateCw className={`w-5 h-5 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Selecting...' : 'Pick Random Student'}</span>
          </button>
          <button
            onClick={onClose}
            className="min-h-[52px] px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm"
          >
            Done
          </button>
        </div>

        {/* Recent Picks History */}
        {history.length > 0 && (
          <div className="text-xs text-slate-400 pt-2 border-t border-slate-800">
            <span className="font-bold text-slate-300">Recently Called: </span>
            <span>{history.join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================================
// 2. LIVE POLL / MCQ WIDGET
// ============================================================================
interface LivePollProps {
  poll: PollQuestion;
  onVote?: (optionId: string) => void;
  onClose?: () => void;
}

export const LivePollWidget: React.FC<LivePollProps> = ({ poll, onVote }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [votedOption, setVotedOption] = useState<string | null>(null);

  const handleCastVote = (optId: string) => {
    setVotedOption(optId);
    if (onVote) onVote(optId);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-indigo-400" />
          <h4 className="font-bold text-sm sm:text-base text-white">
            Instant Smart-Board Poll (38 Students Live)
          </h4>
        </div>
        <div className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300">
          Votes: {poll.totalVotes} / 38
        </div>
      </div>

      <div className="text-sm sm:text-base font-bold text-slate-100 leading-snug">
        "{poll.prompt}"
      </div>

      {/* Options & Live Bar Graphs */}
      <div className="space-y-2.5">
        {poll.options.map((opt) => {
          const percent = poll.totalVotes > 0 ? Math.round((opt.votes / poll.totalVotes) * 100) : 0;
          const isSelected = votedOption === opt.id;
          const isCorrect = opt.isCorrect;

          let barColor = 'bg-indigo-600';
          if (showAnswer) {
            barColor = isCorrect ? 'bg-emerald-500' : 'bg-slate-700';
          }

          return (
            <button
              key={opt.id}
              onClick={() => handleCastVote(opt.id)}
              className={`w-full text-left p-3.5 rounded-xl border relative overflow-hidden transition-all min-h-[50px] ${
                isSelected 
                  ? 'border-indigo-400 bg-slate-800/90' 
                  : 'border-slate-800 bg-slate-800/40 hover:bg-slate-800/70'
              }`}
            >
              {/* Background Progress Fill */}
              <div 
                className={`absolute inset-y-0 left-0 ${barColor} opacity-25 transition-all duration-500`}
                style={{ width: `${percent}%` }}
              />

              <div className="relative z-10 flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs opacity-75">{opt.id.replace('opt-', '').toUpperCase()}.</span>
                  <span>{opt.text}</span>
                  {showAnswer && isCorrect && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                      CORRECT
                    </span>
                  )}
                </div>
                <div className="font-mono font-bold shrink-0 text-indigo-300">
                  {opt.votes} ({percent}%)
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Teacher Poll Controls */}
      <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
        <button
          onClick={() => setShowAnswer(!showAnswer)}
          className="min-h-[44px] px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold"
        >
          {showAnswer ? 'Hide Correct Answer' : 'Reveal Correct Answer & Explain'}
        </button>
        <span className="text-slate-400 font-medium hidden sm:inline">
          Tap an option to simulate student smart-clicker response
        </span>
      </div>
    </div>
  );
};

// ============================================================================
// 3. STUDENT WORK COMPARISON MODAL
// ============================================================================
interface CompareModalProps {
  students: StudentLiveRecord[];
  isOpen: boolean;
  onClose: () => void;
}

export const StudentWorkComparisonModal: React.FC<CompareModalProps> = ({
  students,
  isOpen,
  onClose,
}) => {
  const [studentAId, setStudentAId] = useState<string>(students[1]?.id || 'st-02'); // Aditi
  const [studentBId, setStudentBId] = useState<string>(students[8]?.id || 'st-09'); // Farhan

  const studentA = students.find(s => s.id === studentAId) || students[1];
  const studentB = students.find(s => s.id === studentBId) || students[8];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 text-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-700 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2 text-indigo-400 font-bold uppercase tracking-wider text-xs">
            <SplitSquareVertical className="w-5 h-5" />
            <span>Smart Board · Dual Student Work Comparison</span>
          </div>
          <button
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] p-2 rounded-xl text-slate-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Dual Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Panel A */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide">Student A (Exemplar)</span>
              <select
                value={studentAId}
                onChange={(e) => setStudentAId(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>#{s.rollNo} {s.name}</option>
                ))}
              </select>
            </div>
            <div className="font-bold text-base text-white">{studentA.name}</div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2 font-mono">
              <div className="text-emerald-400 font-bold">5 Examples Observed:</div>
              <div>1. PUSH: Kicking football (ball accelerates forward)</div>
              <div>2. PUSH: Shutting locker door (door rotates shut)</div>
              <div>3. PULL: Opening desk drawer (drawer moves towards body)</div>
              <div>4. PULL: Lifting school bag (opposes gravity upward)</div>
              <div>5. PULL: Tug of war rope (tension force towards team)</div>
            </div>
            <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              <span>Full Success Criteria Met (5 distinct actions, clear motion)</span>
            </div>
          </div>

          {/* Panel B */}
          <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wide">Student B (In Progress / Scaffold)</span>
              <select
                value={studentBId}
                onChange={(e) => setStudentBId(e.target.value)}
                className="bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1 text-xs text-white"
              >
                {students.map(s => (
                  <option key={s.id} value={s.id}>#{s.rollNo} {s.name}</option>
                ))}
              </select>
            </div>
            <div className="font-bold text-base text-white">{studentB.name}</div>
            <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-2 font-mono">
              <div className="text-amber-400 font-bold">Observations Recorded:</div>
              <div>1. PUSH: Table sliding across floor</div>
              <div>2. ?: Bicycle brakes stopping wheel (is it push or friction?)</div>
              <div>3. PULL: Magnet pulling needle without touching</div>
              <div className="text-slate-500 italic">4. [Awaiting row 4...]</div>
              <div className="text-slate-500 italic">5. [Awaiting row 5...]</div>
            </div>
            <div className="text-xs text-amber-300 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              <span>Discussion Point: Can friction act as a resistance pull?</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
          <button
            onClick={onClose}
            className="min-h-[48px] px-6 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
          >
            Close Comparison View
          </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// 4. SESSION RECAP & QR CODE GENERATION MODAL
// ============================================================================
interface RecapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onReturnToTimetable: () => void;
}

export const SessionRecapModal: React.FC<RecapModalProps> = ({
  isOpen,
  onClose,
  onReturnToTimetable,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const recapUrl = window.location.origin + '/tasks/grade-8';

  const copyRecapLink = () => {
    navigator.clipboard.writeText(recapUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-slate-900 text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-700 space-y-6 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
            Live Period Completed Successfully
          </span>
          <h3 className="text-2xl font-black text-white mt-1">
            Class 8-B · Science Period 3 Recap
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            "SCI-8-FORCE-1.1: Push & Pull in Daily Life" · 45 min Session
          </p>
        </div>

        {/* 4 Clean Stats */}
        <div className="grid grid-cols-3 gap-2.5 p-4 rounded-2xl bg-slate-950 border border-slate-800">
          <div>
            <div className="text-2xl font-black text-emerald-400">34 / 38</div>
            <div className="text-[11px] text-slate-400 font-medium">Completed (89%)</div>
          </div>
          <div>
            <div className="text-2xl font-black text-amber-400">4</div>
            <div className="text-[11px] text-slate-400 font-medium">Remediated</div>
          </div>
          <div>
            <div className="text-2xl font-black text-indigo-400">4.7 / 5.0</div>
            <div className="text-[11px] text-slate-400 font-medium">Avg Mastery</div>
          </div>
        </div>

        {/* Generated Session Recap QR Code */}
        <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
          <div className="text-xs font-bold text-slate-300">
            Student / Parent Exit Scan (Scan with camera for homework & recap):
          </div>
          <div className="p-3 bg-white border border-slate-300 rounded-xl max-w-[150px] mx-auto shadow-sm">
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
          </div>
          <div className="text-[11px] font-mono text-indigo-400">
            Class Code: S2S-8B · Cloud Synced
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <button
            onClick={onReturnToTimetable}
            className="w-full min-h-[50px] py-3 rounded-2xl font-black text-sm bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-lg"
          >
            Save Session & Return to Timetable
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={copyRecapLink}
              className="flex-1 min-h-[44px] py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Link Copied!' : 'Copy Recap Link'}</span>
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 min-h-[44px] py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 flex items-center justify-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print Class Register Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
