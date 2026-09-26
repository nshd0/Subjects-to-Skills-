import { useState, useEffect, useCallback } from 'react';
import { 
  ThemeBundle, 
  PeerReview, 
  CommunityFeedback, 
  StateTextbookAlignment, 
  AlignmentSuggestion 
} from '@/types';
import { themeBundles as defaultBundles } from '@/data/themeBundles';
import { stateTextbookAlignments as defaultAlignments } from '@/data/stateAlignments';
import { safeStorage } from '@/lib/safeStorage';

const STORAGE_KEY_BUNDLES = 's2s_theme_bundles_v07';
const STORAGE_KEY_ALIGNMENTS = 's2s_state_alignments_v07';
const STORAGE_KEY_SUGGESTIONS = 's2s_alignment_suggestions_v07';
const STORAGE_KEY_SUBMISSION_COUNT = 's2s_submissions_tracker_v07';

const MAX_SUBMISSIONS_PER_MONTH = 5;

interface SubmissionTracker {
  monthKey: string; // e.g. "2026-09"
  count: number;
}

export function useThemeBundlesStorage() {
  const [bundles, setBundles] = useState<ThemeBundle[]>(() => {
    try {
      const stored = safeStorage.getItem(STORAGE_KEY_BUNDLES);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge to ensure default bundles are always up-to-date with new fields
          const customIds = new Set(parsed.map(b => b.id));
          const missingDefaults = defaultBundles.filter(d => !customIds.has(d.id));
          return [...parsed, ...missingDefaults];
        }
      }
    } catch (e) {
      console.warn('Failed to parse theme bundles from storage', e);
    }
    return defaultBundles;
  });

  const [alignments, setAlignments] = useState<StateTextbookAlignment[]>(() => {
    try {
      const stored = safeStorage.getItem(STORAGE_KEY_ALIGNMENTS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const parsedIds = new Set(parsed.map(a => a.id));
          const missingDefaults = defaultAlignments.filter(d => !parsedIds.has(d.id));
          return [...parsed, ...missingDefaults];
        }
      }
    } catch (e) {
      console.warn('Failed to parse state alignments from storage', e);
    }
    return defaultAlignments;
  });

  const [alignmentSuggestions, setAlignmentSuggestions] = useState<AlignmentSuggestion[]>(() => {
    try {
      const stored = safeStorage.getItem(STORAGE_KEY_SUGGESTIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.warn('Failed to parse alignment suggestions', e);
    }
    return [
      {
        id: 'sugg-init-01',
        skillId: 'g8-math-1',
        skillName: 'Linear Equations & Algebraic Balance',
        stateCode: 'kerala-scert',
        stateName: 'Kerala SCERT (Samagra)',
        grade: 'Grade 8',
        subject: 'Mathematics',
        textbookTitle: 'Mathematics Part 2 (Kerala SCERT 2024)',
        chapterNumber: 'Chapter 7',
        chapterTitle: 'Ratio & Proportional Reasoning in Geometry',
        pageRange: 'pp. 95–108',
        rationale: 'Provides additional geometric scaling activities that reinforce linear relationships through Western Ghats elevation mapping.',
        contributorName: 'Suresh Kumar (TGT Math, Palakkad)',
        contributorEmail: 'suresh.kumar@keralaeducation.gov.in',
        status: 'pending-review',
        submittedAt: 1789150000000
      }
    ];
  });

  // Check rate limit
  const getCurrentMonthKey = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
  };

  const getMonthlySubmissionCount = useCallback((): number => {
    try {
      const stored = safeStorage.getItem(STORAGE_KEY_SUBMISSION_COUNT);
      if (stored) {
        const tracker: SubmissionTracker = JSON.parse(stored);
        if (tracker.monthKey === getCurrentMonthKey()) {
          return tracker.count;
        }
      }
    } catch (e) {
      console.warn('Failed to check submission limit', e);
    }
    return 0;
  }, []);

  const incrementSubmissionCount = () => {
    try {
      const current = getMonthlySubmissionCount();
      const tracker: SubmissionTracker = {
        monthKey: getCurrentMonthKey(),
        count: current + 1
      };
      safeStorage.setItem(STORAGE_KEY_SUBMISSION_COUNT, JSON.stringify(tracker));
    } catch (e) {
      console.warn('Failed to save submission tracker', e);
    }
  };

  // Save bundles
  const saveBundles = (updated: ThemeBundle[]) => {
    setBundles(updated);
    safeStorage.setItem(STORAGE_KEY_BUNDLES, JSON.stringify(updated));
  };

  // Create & submit new bundle
  const createBundle = (newBundle: ThemeBundle): { success: boolean; error?: string } => {
    const currentCount = getMonthlySubmissionCount();
    if (currentCount >= MAX_SUBMISSIONS_PER_MONTH) {
      return {
        success: false,
        error: `Submission limit reached: Maximum ${MAX_SUBMISSIONS_PER_MONTH} theme bundles per educator per month. You have submitted ${currentCount} in ${getCurrentMonthKey()}. Please refine your active submissions or contact peer review moderators.`
      };
    }

    const updated = [newBundle, ...bundles];
    saveBundles(updated);
    incrementSubmissionCount();
    return { success: true };
  };

  // Submit a Peer Review
  const submitPeerReview = (bundleId: string, review: Omit<PeerReview, 'id' | 'reviewedAt'>): { success: boolean } => {
    const fullReview: PeerReview = {
      ...review,
      id: `rev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      reviewedAt: Date.now()
    };

    const updated = bundles.map(bundle => {
      if (bundle.id !== bundleId) return bundle;

      const existingReviews = bundle.peerReviews || [];
      const newReviews = [...existingReviews, fullReview];

      // Check if threshold of 2+ verified endorsements is met
      const verifiedEndorsements = newReviews.filter(r => r.isVerified && r.decision === 'endorse').length;
      const willBePeerReviewed = verifiedEndorsements >= 2;

      const newStatus: 'published' | 'in-review' = willBePeerReviewed ? 'published' : 'in-review';

      return {
        ...bundle,
        peerReviews: newReviews,
        peerReviewedBadge: willBePeerReviewed,
        status: newStatus,
        updatedAt: Date.now()
      };
    });

    saveBundles(updated);
    return { success: true };
  };

  // Submit Community Feedback ("Report Issue" / "Suggest Edit")
  const submitCommunityFeedback = (bundleId: string, feedback: Omit<CommunityFeedback, 'id' | 'createdAt' | 'status'>): { success: boolean } => {
    const fullFeedback: CommunityFeedback = {
      ...feedback,
      id: `feed-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      status: 'open',
      createdAt: Date.now()
    };

    const updated = bundles.map(bundle => {
      if (bundle.id !== bundleId) return bundle;
      return {
        ...bundle,
        communityFeedback: [...(bundle.communityFeedback || []), fullFeedback],
        updatedAt: Date.now()
      };
    });

    saveBundles(updated);
    return { success: true };
  };

  // Submit Alignment Suggestion (goes to peer review queue)
  const submitAlignmentSuggestion = (suggestion: Omit<AlignmentSuggestion, 'id' | 'status' | 'submittedAt'>): { success: boolean } => {
    const fullSuggestion: AlignmentSuggestion = {
      ...suggestion,
      id: `sugg-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      status: 'pending-review',
      submittedAt: Date.now()
    };

    const updated = [fullSuggestion, ...alignmentSuggestions];
    setAlignmentSuggestions(updated);
    safeStorage.setItem(STORAGE_KEY_SUGGESTIONS, JSON.stringify(updated));
    return { success: true };
  };

  // Endorse & approve alignment suggestion
  const approveAlignmentSuggestion = (suggestionId: string) => {
    const target = alignmentSuggestions.find(s => s.id === suggestionId);
    if (!target) return;

    // Create new verified state textbook alignment
    const newAlignment: StateTextbookAlignment = {
      id: `align-${target.stateCode}-${target.skillId}-${Date.now()}`,
      skillId: target.skillId,
      stateCode: target.stateCode as any,
      stateName: target.stateName,
      grade: target.grade,
      subject: target.subject,
      textbookTitle: target.textbookTitle,
      chapterNumber: target.chapterNumber,
      chapterTitle: target.chapterTitle,
      pageRange: target.pageRange,
      bridgingNote: target.rationale,
      sourceCitation: `${target.stateName} ${target.grade} ${target.subject}, ${target.chapterTitle}, ${target.pageRange}`,
      verifiedStatus: 'peer-verified',
      contributorName: target.contributorName,
      verifiedDate: new Date().toISOString().split('T')[0]
    };

    const updatedAlignments = [newAlignment, ...alignments];
    setAlignments(updatedAlignments);
    safeStorage.setItem(STORAGE_KEY_ALIGNMENTS, JSON.stringify(updatedAlignments));

    // Update suggestion status
    const updatedSuggestions = alignmentSuggestions.map(s => 
      s.id === suggestionId ? { ...s, status: 'approved' as const } : s
    );
    setAlignmentSuggestions(updatedSuggestions);
    safeStorage.setItem(STORAGE_KEY_SUGGESTIONS, JSON.stringify(updatedSuggestions));
  };

  return {
    bundles,
    alignments,
    alignmentSuggestions,
    createBundle,
    submitPeerReview,
    submitCommunityFeedback,
    submitAlignmentSuggestion,
    approveAlignmentSuggestion,
    getMonthlySubmissionCount,
    maxSubmissionsPerMonth: MAX_SUBMISSIONS_PER_MONTH
  };
}
