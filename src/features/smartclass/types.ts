/**
 * Type definitions for Subjects2Skills Live Smart Class
 */

export interface TimetablePeriod {
  periodNumber: number;
  startTime: string; // e.g. "10:15"
  endTime: string;   // e.g. "11:00"
  durationMinutes: number;
  grade: number;     // 6, 7, 8, 9, 10
  section: string;   // "A", "B", "C"
  subject: string;   // "Science", "Mathematics", "AI", "Social Science"
  room: string;      // "Smart Room 204"
  defaultTaskId: string; // e.g. "SCI-8-FORCE-1.1"
  chapterTitle: string;  // "NCERT Ch 11: Force & Pressure"
  isCurrent: boolean;
}

export type LessonStage = 'warmup' | 'teach' | 'task' | 'discuss' | 'exit';

export interface StageConfig {
  id: LessonStage;
  label: string;
  shortLabel: string;
  timeRange: string;
  targetDurationMin: number;
  description: string;
}

export interface StudentLiveRecord {
  id: string;
  rollNo: number;
  name: string;
  status: 'completed' | 'stuck' | 'working' | 'not-started';
  currentStep: string;
  notes?: string;
  submissionSnippet?: string;
  lastActive: string;
}

export interface PollQuestion {
  id: string;
  prompt: string;
  options: Array<{
    id: string;
    text: string;
    votes: number;
    isCorrect?: boolean;
  }>;
  isActive: boolean;
  totalVotes: number;
}

export interface AnnotationStroke {
  points: Array<{ x: number; y: number }>;
  color: string;
  width: number;
  isHighlighter: boolean;
}
