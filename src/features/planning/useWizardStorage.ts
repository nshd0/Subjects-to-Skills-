import { useState, useEffect } from 'react';
import { LessonPlan, WizardAssessment, IntegratedUnit } from './wizardTypes';
import { safeStorage } from '@/lib/safeStorage';

export function useWizardLessonPlans() {
  const defaultPlans: LessonPlan[] = [
  {
    "id": "exemplar-plan-math",
    "gradeId": "grade-8",
    "subjectId": "math",
    "skillIds": [
      "g8-math-1"
    ],
    "bloomsFocus": [
      "Apply",
      "Analyze"
    ],
    "varkActivities": {
      "visual": {
        "description": "Diagram mapping",
        "included": true
      },
      "kinesthetic": {
        "description": "Hands-on project",
        "included": true
      }
    },
    "timeline": [
      {
        "title": "Introduction",
        "durationMin": 15,
        "skillIds": [
          "g8-math-1"
        ],
        "bloomsLevel": "Understand",
        "varkType": "visual"
      },
      {
        "title": "Core Activity",
        "durationMin": 30,
        "skillIds": [
          "g8-math-1"
        ],
        "bloomsLevel": "Apply",
        "varkType": "kinesthetic"
      }
    ],
    "resourceIds": [],
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-plan-science",
    "gradeId": "grade-8",
    "subjectId": "science",
    "skillIds": [
      "g8-sci-1"
    ],
    "bloomsFocus": [
      "Apply",
      "Analyze"
    ],
    "varkActivities": {
      "visual": {
        "description": "Diagram mapping",
        "included": true
      },
      "kinesthetic": {
        "description": "Hands-on project",
        "included": true
      }
    },
    "timeline": [
      {
        "title": "Introduction",
        "durationMin": 15,
        "skillIds": [
          "g8-sci-1"
        ],
        "bloomsLevel": "Understand",
        "varkType": "visual"
      },
      {
        "title": "Core Activity",
        "durationMin": 30,
        "skillIds": [
          "g8-sci-1"
        ],
        "bloomsLevel": "Apply",
        "varkType": "kinesthetic"
      }
    ],
    "resourceIds": [],
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-plan-english",
    "gradeId": "grade-8",
    "subjectId": "english",
    "skillIds": [
      "g8-eng-1"
    ],
    "bloomsFocus": [
      "Apply",
      "Analyze"
    ],
    "varkActivities": {
      "visual": {
        "description": "Diagram mapping",
        "included": true
      },
      "kinesthetic": {
        "description": "Hands-on project",
        "included": true
      }
    },
    "timeline": [
      {
        "title": "Introduction",
        "durationMin": 15,
        "skillIds": [
          "g8-eng-1"
        ],
        "bloomsLevel": "Understand",
        "varkType": "visual"
      },
      {
        "title": "Core Activity",
        "durationMin": 30,
        "skillIds": [
          "g8-eng-1"
        ],
        "bloomsLevel": "Apply",
        "varkType": "kinesthetic"
      }
    ],
    "resourceIds": [],
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-plan-social-science",
    "gradeId": "grade-8",
    "subjectId": "social-science",
    "skillIds": [
      "g8-ss-1"
    ],
    "bloomsFocus": [
      "Apply",
      "Analyze"
    ],
    "varkActivities": {
      "visual": {
        "description": "Diagram mapping",
        "included": true
      },
      "kinesthetic": {
        "description": "Hands-on project",
        "included": true
      }
    },
    "timeline": [
      {
        "title": "Introduction",
        "durationMin": 15,
        "skillIds": [
          "g8-ss-1"
        ],
        "bloomsLevel": "Understand",
        "varkType": "visual"
      },
      {
        "title": "Core Activity",
        "durationMin": 30,
        "skillIds": [
          "g8-ss-1"
        ],
        "bloomsLevel": "Apply",
        "varkType": "kinesthetic"
      }
    ],
    "resourceIds": [],
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-plan-second-language",
    "gradeId": "grade-8",
    "subjectId": "second-language",
    "skillIds": [
      "g8-sl-1"
    ],
    "bloomsFocus": [
      "Apply",
      "Analyze"
    ],
    "varkActivities": {
      "visual": {
        "description": "Diagram mapping",
        "included": true
      },
      "kinesthetic": {
        "description": "Hands-on project",
        "included": true
      }
    },
    "timeline": [
      {
        "title": "Introduction",
        "durationMin": 15,
        "skillIds": [
          "g8-sl-1"
        ],
        "bloomsLevel": "Understand",
        "varkType": "visual"
      },
      {
        "title": "Core Activity",
        "durationMin": 30,
        "skillIds": [
          "g8-sl-1"
        ],
        "bloomsLevel": "Apply",
        "varkType": "kinesthetic"
      }
    ],
    "resourceIds": [],
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  }
];
  const [plans, setPlans] = useState<LessonPlan[]>(defaultPlans);

  useEffect(() => {
    try {
      const stored = safeStorage.getItem('wizard_lesson_plans');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setPlans(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to parse wizard_lesson_plans from storage', e);
    }
  }, []);

  const savePlan = (plan: LessonPlan) => {
    const newPlans = [...plans.filter(p => p.id !== plan.id), plan];
    setPlans(newPlans);
    safeStorage.setItem('wizard_lesson_plans', JSON.stringify(newPlans));
  };

  return { plans, savePlan };
}

export function useWizardAssessments() {
  const defaultAssessments: WizardAssessment[] = [
  {
    "id": "exemplar-assess-math",
    "gradeId": "grade-8",
    "subjectId": "math",
    "skillIds": [
      "g8-math-1"
    ],
    "assessmentType": "performance",
    "bloomsFocus": [
      "Analyze",
      "Evaluate"
    ],
    "tasks": [
      {
        "id": "task-1-math",
        "description": "Real-world problem solving task",
        "varkType": "visual",
        "skillIds": [
          "g8-math-1"
        ],
        "bloomsLevel": "Evaluate"
      }
    ],
    "rubric": {
      "skillId": "g8-math-1",
      "levels": [
        {
          "label": "Emerging",
          "descriptor": "Requires support to complete task."
        },
        {
          "label": "Proficient",
          "descriptor": "Completes task independently with good accuracy."
        }
      ]
    },
    "logistics": {
      "grouping": "pairs",
      "markingApproach": "full"
    },
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-assess-science",
    "gradeId": "grade-8",
    "subjectId": "science",
    "skillIds": [
      "g8-sci-1"
    ],
    "assessmentType": "performance",
    "bloomsFocus": [
      "Analyze",
      "Evaluate"
    ],
    "tasks": [
      {
        "id": "task-1-science",
        "description": "Real-world problem solving task",
        "varkType": "visual",
        "skillIds": [
          "g8-sci-1"
        ],
        "bloomsLevel": "Evaluate"
      }
    ],
    "rubric": {
      "skillId": "g8-sci-1",
      "levels": [
        {
          "label": "Emerging",
          "descriptor": "Requires support to complete task."
        },
        {
          "label": "Proficient",
          "descriptor": "Completes task independently with good accuracy."
        }
      ]
    },
    "logistics": {
      "grouping": "pairs",
      "markingApproach": "full"
    },
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-assess-english",
    "gradeId": "grade-8",
    "subjectId": "english",
    "skillIds": [
      "g8-eng-1"
    ],
    "assessmentType": "performance",
    "bloomsFocus": [
      "Analyze",
      "Evaluate"
    ],
    "tasks": [
      {
        "id": "task-1-english",
        "description": "Real-world problem solving task",
        "varkType": "visual",
        "skillIds": [
          "g8-eng-1"
        ],
        "bloomsLevel": "Evaluate"
      }
    ],
    "rubric": {
      "skillId": "g8-eng-1",
      "levels": [
        {
          "label": "Emerging",
          "descriptor": "Requires support to complete task."
        },
        {
          "label": "Proficient",
          "descriptor": "Completes task independently with good accuracy."
        }
      ]
    },
    "logistics": {
      "grouping": "pairs",
      "markingApproach": "full"
    },
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-assess-social-science",
    "gradeId": "grade-8",
    "subjectId": "social-science",
    "skillIds": [
      "g8-ss-1"
    ],
    "assessmentType": "performance",
    "bloomsFocus": [
      "Analyze",
      "Evaluate"
    ],
    "tasks": [
      {
        "id": "task-1-social-science",
        "description": "Real-world problem solving task",
        "varkType": "visual",
        "skillIds": [
          "g8-ss-1"
        ],
        "bloomsLevel": "Evaluate"
      }
    ],
    "rubric": {
      "skillId": "g8-ss-1",
      "levels": [
        {
          "label": "Emerging",
          "descriptor": "Requires support to complete task."
        },
        {
          "label": "Proficient",
          "descriptor": "Completes task independently with good accuracy."
        }
      ]
    },
    "logistics": {
      "grouping": "pairs",
      "markingApproach": "full"
    },
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  },
  {
    "id": "exemplar-assess-second-language",
    "gradeId": "grade-8",
    "subjectId": "second-language",
    "skillIds": [
      "g8-sl-1"
    ],
    "assessmentType": "performance",
    "bloomsFocus": [
      "Analyze",
      "Evaluate"
    ],
    "tasks": [
      {
        "id": "task-1-second-language",
        "description": "Real-world problem solving task",
        "varkType": "visual",
        "skillIds": [
          "g8-sl-1"
        ],
        "bloomsLevel": "Evaluate"
      }
    ],
    "rubric": {
      "skillId": "g8-sl-1",
      "levels": [
        {
          "label": "Emerging",
          "descriptor": "Requires support to complete task."
        },
        {
          "label": "Proficient",
          "descriptor": "Completes task independently with good accuracy."
        }
      ]
    },
    "logistics": {
      "grouping": "pairs",
      "markingApproach": "full"
    },
    "createdAt": 1789205153928,
    "updatedAt": 1789205153928
  }
];
  const [assessments, setAssessments] = useState<WizardAssessment[]>(defaultAssessments);

  useEffect(() => {
    try {
      const stored = safeStorage.getItem('wizard_assessments');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setAssessments(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to parse wizard_assessments from storage', e);
    }
  }, []);

  const saveAssessment = (assessment: WizardAssessment) => {
    const newAssessments = [...assessments.filter(a => a.id !== assessment.id), assessment];
    setAssessments(newAssessments);
    safeStorage.setItem('wizard_assessments', JSON.stringify(newAssessments));
  };

  return { assessments, saveAssessment };
}

export function useWizardIntegratedUnits() {
  const [units, setUnits] = useState<IntegratedUnit[]>([]);

  useEffect(() => {
    try {
      const stored = safeStorage.getItem('wizard_integrated_units');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setUnits(parsed);
        }
      }
    } catch (e) {
      console.warn('Failed to parse wizard_integrated_units from storage', e);
    }
  }, []);

  const saveUnit = (unit: IntegratedUnit) => {
    const newUnits = [...units.filter(u => u.id !== unit.id), unit];
    setUnits(newUnits);
    safeStorage.setItem('wizard_integrated_units', JSON.stringify(newUnits));
  };

  const deleteUnit = (id: string) => {
    const newUnits = units.filter(u => u.id !== id);
    setUnits(newUnits);
    safeStorage.setItem('wizard_integrated_units', JSON.stringify(newUnits));
  };

  return { units, saveUnit, deleteUnit };
}
