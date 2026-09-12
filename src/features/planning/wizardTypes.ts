export interface WizardActivity {
  description: string;
  included: boolean;
}

export interface LessonBlock {
  title: string;
  durationMin: number;
  skillIds: string[];
  bloomsLevel?: string;
  varkType?: "visual" | "auditory" | "readWrite" | "kinesthetic";
}

export interface LessonPlan {
  id: string;
  gradeId: string;
  subjectId: string;
  unitId?: string;
  skillIds: string[];
  bloomsFocus: string[];
  varkActivities: {
    visual?: WizardActivity;
    auditory?: WizardActivity;
    readWrite?: WizardActivity;
    kinesthetic?: WizardActivity;
  };
  timeline: LessonBlock[];
  resourceIds: string[];
  createdAt: number;
  updatedAt: number;
}

export interface WizardAssessmentTask {
  id: string;
  description: string;
  varkType: "visual" | "auditory" | "readWrite" | "kinesthetic";
  skillIds: string[];
  bloomsLevel?: string;
}

export interface WizardRubricLevel {
  label: string;
  descriptor: string;
}

export interface WizardRubric {
  skillId: string;
  levels: WizardRubricLevel[];
}

export interface WizardAssessment {
  id: string;
  gradeId: string;
  subjectId: string;
  unitId?: string;
  skillIds: string[];
  assessmentType: "formative" | "summative" | "performance" | "portfolio";
  bloomsFocus: string[];
  tasks: WizardAssessmentTask[];
  rubric: WizardRubric;
  logistics: {
    classSize?: number;
    timeAvailableMin?: number;
    grouping: "individual" | "pairs" | "groups";
    markingApproach: string;
  };
  createdAt: number;
  updatedAt: number;
}

export interface Comment {
  id: string;
  authorId: string;
  text: string;
  createdAt: number;
}

export interface IntegratedUnit {
  id: string;
  gradeId: string;
  title: string;
  description: string;
  subjectIds: string[]; // 2+
  skillIds: string[]; // drawn from contributing subjects
  leadTeacherId: string;
  collaboratorIds: string[];
  status: "draft" | "in-review" | "ready" | "archived";
  bloomsFocus: string[];
  varkActivities: { visual?: WizardActivity; auditory?: WizardActivity; readWrite?: WizardActivity; kinesthetic?: WizardActivity; };
  timeline: LessonBlock[];
  assessmentId?: string;
  comments: Comment[];
  createdAt: number;
  updatedAt: number;
}
