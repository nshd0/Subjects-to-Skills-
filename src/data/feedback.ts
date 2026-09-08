import { PageFeedback, UsageEvent } from '@/types';

const FEEDBACK_STORAGE_KEY = 'subjects2skills_v0_4_feedback';
const USAGE_STORAGE_KEY = 'subjects2skills_v0_4_usage_events';

// In-memory fallback if localStorage is unavailable or in sandboxed iframe
const memoryFeedbackStore: PageFeedback[] = [];
const memoryUsageStore: UsageEvent[] = [];

/**
 * Persist teacher or visitor feedback on any curriculum or tool page
 */
export function savePageFeedback(
  feedback: Omit<PageFeedback, 'id' | 'timestamp'>
): PageFeedback {
  const newEntry: PageFeedback = {
    ...feedback,
    id: `fb-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString()
  };

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const existing = getPageFeedback();
      const updated = [newEntry, ...existing];
      window.localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(updated.slice(0, 200)));
      return newEntry;
    }
  } catch {
    // Fallback to memory store if localStorage is blocked
  }

  memoryFeedbackStore.unshift(newEntry);
  return newEntry;
}

/**
 * Retrieve feedback history, optionally filtered by page path
 */
export function getPageFeedback(path?: string): PageFeedback[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(FEEDBACK_STORAGE_KEY);
      if (stored) {
        const parsed: PageFeedback[] = JSON.parse(stored);
        if (path) {
          return parsed.filter(item => item.path === path);
        }
        return parsed;
      }
    }
  } catch {
    // Fall back to memory store
  }

  if (path) {
    return memoryFeedbackStore.filter(item => item.path === path);
  }
  return [...memoryFeedbackStore];
}

/**
 * Clear stored feedback (useful for testing or admin resets)
 */
export function clearPageFeedback(): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      window.localStorage.removeItem(FEEDBACK_STORAGE_KEY);
    }
  } catch {
    // ignore
  }
  memoryFeedbackStore.length = 0;
}

/**
 * Record a lightweight user interaction or telemetry event (page view, filter, bookmark)
 */
export function recordUsageEvent(
  event: Omit<UsageEvent, 'id' | 'timestamp'>
): UsageEvent {
  const newEvent: UsageEvent = {
    ...event,
    id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: new Date().toISOString()
  };

  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(USAGE_STORAGE_KEY);
      const parsed: UsageEvent[] = stored ? JSON.parse(stored) : [];
      parsed.unshift(newEvent);
      // Keep last 100 events
      window.localStorage.setItem(USAGE_STORAGE_KEY, JSON.stringify(parsed.slice(0, 100)));
      return newEvent;
    }
  } catch {
    // Fallback
  }

  memoryUsageStore.unshift(newEvent);
  return newEvent;
}

/**
 * Retrieve recent client usage events
 */
export function getRecentUsageEvents(limit: number = 50): UsageEvent[] {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      const stored = window.localStorage.getItem(USAGE_STORAGE_KEY);
      if (stored) {
        const parsed: UsageEvent[] = JSON.parse(stored);
        return parsed.slice(0, limit);
      }
    }
  } catch {
    // Fall back
  }

  return memoryUsageStore.slice(0, limit);
}
