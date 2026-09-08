export type GradeStatus = 
  | "planned" 
  | "in-development" 
  | "teacher-pilot" 
  | "reviewed" 
  | "published" 
  | "needs-update";

export type ContentStatus = GradeStatus;

export type ContentReviewStatus = 
  | "not-yet-reviewed"
  | "teacher-pilot-in-progress"
  | "teacher-reviewed"
  | "curriculum-reviewed"
  | "requires-update";

export type GradeProfile = {
  id: string;
  slug: string;
  grade: string;
  name?: string;
  stage: string;
  stageId: string;
  ageRange: string;
  learningPurpose: string;
  developmentalFocus: string[];
  prioritySkills: string[];
  pedagogy: string[];
  intendedLearningAreas: string[];
  status: GradeStatus;
  lastUpdated?: string;
  previousGrade?: string;
  nextGrade?: string;
  stageRoute: string;
  previousGradeBridge?: string[];
  nextGradeBridge?: string[];
  bringFromPrevious?: string;
  readyForNext?: string;
  feedbackEnabled?: boolean;
  currentFocus?: string;
  nextMilestone?: string;
  reviewStatus?: string;
  recommendedPedagogy?: string[];
  flagshipProject?: { title: string; description: string };
  isFlagship?: boolean;
  // v0.4 extensions
  sampleUnits?: string[];
  sampleProjects?: string[];
  crossSubjectConnections?: string[];
};

export type SubjectSkillMap = {
  id: string;
  stage: string;
  grade: string;
  learningArea: string;
  subject: string;
  essentialKnowledge: string[];
  keyConcepts: string[];
  vocabulary: string[];
  subjectPractices: string[];
  curricularGoal: string;
  competency: string;
  learningOutcome: string;
  primarySkill: string;
  supportingSkills: string[];
  pedagogy: string[];
  activityIds: string[];
  evidence: string[];
  assessmentIds: string[];
  inclusion: string[];
  resourceIds: string[];
  sourceType: "official-reference" | "subjects2skills-interpretation" | "suggested-activity";
  status: string;
  // Extended fields for rich display
  whatStudentsLearn?: string;
  whatStudentsCanDo?: string;
  howTeachersTeachIt?: string;
  whatStudentsProduce?: string;
  studentOutput?: string;
  howLearningBecomesVisible?: string;
  howProgressIsAssessed?: string;
  supportAndExtension?: string;
};

export type ActivityType = 
  | "Low-preparation activity"
  | "Group task"
  | "Individual task"
  | "Inquiry or investigation"
  | "Project"
  | "Assessment task"
  | "Reflection task"
  | "Home connection"
  | "Digital or AI literacy";

export type Activity = {
  id: string;
  title: string;
  stage: string;
  grade: string;
  learningArea?: string;
  subject: string[];
  primarySkill: string;
  supportingSkills: string[];
  learningObjective: string;
  essentialKnowledge?: string[];
  duration: string;
  groupSize?: string;
  setup: string;
  materials: string[];
  lowResourceAlternative?: string;
  steps: string[];
  studentInstructions?: string[];
  teacherPrompts: string[];
  studentOutput: string;
  evidence: string[];
  assessmentCriteria: string[];
  reflectionPrompt?: string;
  differentiation?: string[];
  scaffold?: string;
  extension: string;
  accessibility?: string;
  languageSupport?: string;
  homeConnection: string;
  lowResourceSuitable?: boolean;
  mobileFriendly?: boolean;
  offlineFriendly?: boolean;
  relatedResources?: string[];
  sourceType: "official-reference" | "subjects2skills-interpretation" | "suggested-activity" | string;
  status: ContentStatus | string;
  activityType?: ActivityType | string;
  localAdaptation?: string;
  visuals?: {
    scenarioId?: string;
    materialIconIds?: string[];
    stepVisualIds?: string[];
    evidenceVisualId?: string;
    safetyVisualId?: string;
    altText?: string;
  };
};

export type RubricTier = "Emerging" | "Developing" | "Proficient" | "Transfer";

export type RubricCriterion = {
  id: string;
  criterion: string;
  emerging: string;
  developing: string;
  proficient: string;
  transfer: string;
};

export type SkillRubricData = {
  id: string;
  title: string;
  skill: string;
  stage: string;
  grade: string;
  subject: string;
  description: string;
  criteria: RubricCriterion[];
  teacherNotes?: string;
};

export type EvidenceCategory = "knowledge" | "performance" | "reflection";

export type EvidenceItem = {
  id: string;
  category: EvidenceCategory;
  categoryName: string;
  title: string;
  description: string;
  examples: string[];
  suitableFor: string[];
  howToAssess: string;
};

export type Resource = {
  id: string;
  title: string;
  type: string;
  provider: string;
  url: string;
  stage: string[];
  grades: string[];
  subjects: string[];
  skills: string[];
  description: string;
  whyUseIt: string;
  costType: "official-public" | "free" | "open-educational-resource" | "open-source" | "free-with-sign-in" | "external-tool" | "teacher-contributed";
  openSource: boolean;
  signInRequired: boolean;
  lowResourceSuitable: boolean;
  mobileFriendly: boolean;
  offlineFriendly: boolean;
  IndianClassroomNotes: string;
  sourceStatus: string;
};

// ============================================================================
// v0.4 Extension Models: Units, Lessons, Assessments, Rubrics & Feedback
// ============================================================================

/**
 * Lesson structure within a curricular unit (v0.4.1)
 */
export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  sequenceIndex: number;
  activities: string[]; // brief descriptions or references
  resources: string[]; // links or references
  assessmentHints?: string[]; // optional formative evaluation hints
}

/**
 * Unit planning model for CBSE competency-based curriculum (v0.4.1)
 */
export interface Unit {
  id: string;
  gradeId: string;
  title: string;
  durationWeeks: number;
  description: string;
  targetSkillIds: string[]; // references to skills
  learningAreas: string[];
  status: "draft" | "published" | "archived";
  sampleProjects?: string[];
  lessons?: Lesson[];
}

/**
 * Assessment task types supporting formative & summative skill evaluation (v0.4.2)
 */
export type AssessmentTaskType = 
  | "performance task" 
  | "project" 
  | "question set" 
  | "oral presentation" 
  | "peer review"
  | "investigation"
  | string;

/**
 * Assessment task linked to skill & grade level (v0.4.2)
 */
export interface AssessmentTask {
  id: string;
  gradeId: string;
  skillId: string;
  title: string;
  type: AssessmentTaskType;
  description: string;
  subjectArea: string;
  timeRequired: string;
  rubricRefId?: string;
  evidenceProduced?: string[];
}

/**
 * Graduated rubric level containing criteria statements (v0.4.2)
 */
export interface RubricLevel {
  level: RubricTier | string;
  criteria: string[];
}

/**
 * Skill-to-grade rubric matrix mapping graduated competency levels (v0.4.2)
 */
export interface SkillRubric {
  skillId: string;
  gradeId: string;
  levels: RubricLevel[];
}

/**
 * Lightweight page feedback tracking for continuous framework improvement (v0.4.4)
 */
export interface PageFeedback {
  id: string;
  path: string;
  rating: number | "helpful" | "not-helpful";
  comment?: string;
  timestamp: string;
  userRole?: string;
}

/**
 * Lightweight client usage event for telemetry and navigation analytics (v0.4.4)
 */
export interface UsageEvent {
  id: string;
  path: string;
  timestamp: string;
  eventType: "page_view" | "bookmark" | "filter_change" | "search" | "download" | string;
  metadata?: Record<string, string | number | boolean>;
}

