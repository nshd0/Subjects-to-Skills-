import { useState, useEffect } from 'react';
import { Lesson } from '@/types';
import { units as sampleUnits } from '@/data/units';
import { getCustomUnits } from './storage';

export function useLessonsForUnit(unitId: string | null) {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  useEffect(() => {
    if (!unitId) {
      setLessons([]);
      return;
    }

    // Try to find the unit in custom units first
    const customUnit = getCustomUnits().find(u => u.id === unitId);
    if (customUnit && customUnit.lessons) {
      setLessons(customUnit.lessons);
      return;
    }

    // Fallback to sample units
    const sampleUnit = sampleUnits.find(u => u.id === unitId);
    if (sampleUnit && sampleUnit.lessons) {
      setLessons(sampleUnit.lessons);
      return;
    }

    setLessons([]);
  }, [unitId]);

  return { lessons };
}

export function useCreateLesson() {
  return function createLesson(unitId: string, lesson: Lesson) {
    // Stub for now. Will be implemented when we allow editing unit's lessons.
  };
}

export function useUpdateLesson() {
  return function updateLesson(lesson: Lesson) {
    // Stub
  };
}

export function useDeleteLesson() {
  return function deleteLesson(lessonId: string) {
    // Stub
  };
}
