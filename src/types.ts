export type ContentStatus = "planned" | "in-development" | "teacher-pilot" | "reviewed" | "published" | "needs-update";

export type ContentReviewStatus = 
  | "not-yet-reviewed"
  | "teacher-pilot-in-progress"
  | "teacher-reviewed"
  | "curriculum-reviewed"
  | "requires-update";

export type GradeProfile = {
  id: string;
  stage: string;
  stageId: string;
  grade: string;
  ageRange: string;
  developmentalFocus: string[];
  learningPurpose: string;
  prioritySkills: string[];
  pedagogy: string[];
  previousGradeBridge: string[];
  nextGradeBridge: string[];
  status: ContentStatus;
  lastUpdated: string;
  feedbackEnabled: boolean;
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
};

export type RubricLevel = "Emerging" | "Developing" | "Proficient" | "Transfer";

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

