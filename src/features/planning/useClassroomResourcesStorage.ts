import { useState, useEffect } from 'react';
import { ClassroomResource, PeerReview } from '@/types';
import { INITIAL_CLASSROOM_RESOURCES } from '@/data/classroomResources';

const STORAGE_KEY_RESOURCES = 'subjects2skills_v08_resources';
const STORAGE_KEY_SUBMISSION_QUOTA = 'subjects2skills_v08_resource_quota';
const MONTHLY_SUBMISSION_LIMIT = 10;

export function useClassroomResourcesStorage() {
  const [resources, setResources] = useState<ClassroomResource[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_RESOURCES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.warn('Error reading stored resources', e);
    }
    return INITIAL_CLASSROOM_RESOURCES;
  });

  const [submissionsThisMonth, setSubmissionsThisMonth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_SUBMISSION_QUOTA);
      if (saved) {
        const parsed = JSON.parse(saved);
        const currentMonth = new Date().toISOString().slice(0, 7);
        if (parsed.month === currentMonth) {
          return parsed.count || 0;
        }
      }
    } catch (e) {
      // ignore
    }
    return 2; // Default mock quota used this month
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_RESOURCES, JSON.stringify(resources));
    } catch (e) {
      console.warn('Error saving resources', e);
    }
  }, [resources]);

  const submitNewResource = (
    newResource: Omit<ClassroomResource, 'id' | 'slug' | 'downloadsCount' | 'rating' | 'ratingCount' | 'peerReviews' | 'peerReviewedBadge' | 'status' | 'createdAt' | 'updatedAt'>
  ): { success: boolean; message: string; resourceId?: string } => {
    if (submissionsThisMonth >= MONTHLY_SUBMISSION_LIMIT) {
      return {
        success: false,
        message: `Monthly submission limit reached (${MONTHLY_SUBMISSION_LIMIT}/month). Quota resets on the 1st of next month.`
      };
    }

    const id = `res-user-${Date.now()}`;
    const slug = newResource.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const createdResource: ClassroomResource = {
      ...newResource,
      id,
      slug,
      downloadsCount: 0,
      rating: 5.0,
      ratingCount: 1,
      peerReviews: [],
      peerReviewedBadge: false,
      status: 'in-review',
      createdAt: Date.now(),
      updatedAt: Date.now()
    };

    setResources(prev => [createdResource, ...prev]);

    const newCount = submissionsThisMonth + 1;
    setSubmissionsThisMonth(newCount);
    try {
      const currentMonth = new Date().toISOString().slice(0, 7);
      localStorage.setItem(STORAGE_KEY_SUBMISSION_QUOTA, JSON.stringify({ month: currentMonth, count: newCount }));
    } catch (e) {
      // ignore
    }

    return {
      success: true,
      message: 'Resource submitted successfully to the Peer Review Queue! It will be reviewed by 2 verified educators.',
      resourceId: id
    };
  };

  const submitPeerReview = (resourceId: string, review: Omit<PeerReview, 'id' | 'reviewedAt'>) => {
    const fullReview: PeerReview = {
      ...review,
      id: `rev-${Date.now()}`,
      reviewedAt: Date.now()
    };

    setResources(prev => prev.map(res => {
      if (res.id !== resourceId) return res;
      const existingReviews = res.peerReviews || [];
      const updatedReviews = [fullReview, ...existingReviews];
      
      // Calculate new aggregate rating
      const avgScore = updatedReviews.reduce((acc, r) => {
        const itemAvg = (r.ratings.curriculumAlignment + r.ratings.classroomUsability + r.ratings.sourceVerification + r.ratings.accessibility) / 4;
        return acc + itemAvg;
      }, 0) / updatedReviews.length;

      // Two verified endorsements award the Peer-Reviewed certification badge
      const verifiedEndorsements = updatedReviews.filter(r => r.isVerified && r.decision === 'endorse').length;
      const isCertified = verifiedEndorsements >= 2;

      return {
        ...res,
        peerReviews: updatedReviews,
        rating: Math.round(avgScore * 10) / 10,
        ratingCount: updatedReviews.length,
        peerReviewedBadge: isCertified,
        status: isCertified ? 'published' : res.status,
        updatedAt: Date.now()
      };
    }));
  };

  const incrementDownloadCount = (resourceId: string) => {
    setResources(prev => prev.map(res => {
      if (res.id === resourceId) {
        return { ...res, downloadsCount: res.downloadsCount + 1 };
      }
      return res;
    }));
  };

  return {
    resources,
    submitNewResource,
    submitPeerReview,
    incrementDownloadCount,
    submissionsThisMonth,
    monthlyLimit: MONTHLY_SUBMISSION_LIMIT,
    remainingSubmissions: Math.max(0, MONTHLY_SUBMISSION_LIMIT - submissionsThisMonth)
  };
}
