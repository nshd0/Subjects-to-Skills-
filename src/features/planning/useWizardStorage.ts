import { useState, useEffect } from 'react';
import { LessonPlan, WizardAssessment } from './wizardTypes';

export function useWizardLessonPlans() {
  const [plans, setPlans] = useState<LessonPlan[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wizard_lesson_plans');
    if (stored) {
      setPlans(JSON.parse(stored));
    }
  }, []);

  const savePlan = (plan: LessonPlan) => {
    const newPlans = [...plans.filter(p => p.id !== plan.id), plan];
    setPlans(newPlans);
    localStorage.setItem('wizard_lesson_plans', JSON.stringify(newPlans));
  };

  return { plans, savePlan };
}

export function useWizardAssessments() {
  const [assessments, setAssessments] = useState<WizardAssessment[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem('wizard_assessments');
    if (stored) {
      setAssessments(JSON.parse(stored));
    }
  }, []);

  const saveAssessment = (assessment: WizardAssessment) => {
    const newAssessments = [...assessments.filter(a => a.id !== assessment.id), assessment];
    setAssessments(newAssessments);
    localStorage.setItem('wizard_assessments', JSON.stringify(newAssessments));
  };

  return { assessments, saveAssessment };
}
