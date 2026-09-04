const fs = require('fs');

const modelsTsPath = 'src/data/models.ts';
let modelsTs = fs.readFileSync(modelsTsPath, 'utf8');

const newFields = `
  // v0.3 NEW FIELDS (Make all optional to not break existing data)
  version?: string;
  phase?: string;
  ageRange?: string;
  unitOrTheme?: string;
  
  officialReference?: {
    sourceType: "NCF-SE 2023" | "NCF-FS 2022" | "CBSE Curriculum 2026-27" | "CBSE CT & AI 2026-27" | "NEP 2020" | "Other";
    title: string;
    url: string;
    sectionOrPage?: string;
    verificationStatus: "verified" | "pending-review" | "requires-update";
    lastVerifiedAt?: string;
  }[];

  curricularAim?: string;
  
  essentialKnowledgeList?: string[];
  disciplinaryPractices?: string[];
  primarySkillDomain?: string;
  supportingSkillDomains?: string[];
  observablePerformance?: string;
  
  valuesAndDispositionsList?: string[];
  localOrIndianContextList?: string[];
  multilingualSupport?: string[];

  pedagogyStructured?: {
    approaches: string[];
    teacherMoves: string[];
    studentActions: string[];
    learningSequence: string[];
  };

  activityStructured?: {
    title: string;
    description: string;
    duration: string;
    groupSize?: string;
    materials?: string[];
    preparation?: string;
    classroomSteps: string[];
    extensionTask?: string;
  };

  evidenceStructured?: {
    studentOutputs: string[];
    observationEvidence?: string[];
    portfolioEvidence?: string[];
  };

  assessmentStructured?: {
    purpose: "diagnostic" | "formative" | "summative" | "mixed";
    criteria: string[];
    rubricLevels: {
      emerging: string;
      developing: string;
      proficient: string;
      advanced: string;
    };
    selfAssessmentPrompt?: string;
    peerFeedbackPrompt?: string;
    reteachOrReassessPlan?: string;
  };

  inclusionStructured?: {
    accessOptions: string[];
    participationOptions: string[];
    expressionOptions: string[];
    languageScaffolds?: string[];
    supportStrategies: string[];
    extensionStrategies?: string[];
    accessibilityNotes?: string[];
  };

  implementationStructured?: {
    timetableFit?: string;
    teacherPreparationTime?: string;
    resourceLevel: "low" | "medium" | "high";
    safeguardingOrPrivacyNote?: string;
  };

  status?: "official-reference-linked" | "subjects2skills-proposal" | "teacher-contributed" | "pilot-tested" | "requires-review";
`;

modelsTs = modelsTs.replace(
  "assessmentMethod: string;",
  "assessmentMethod: string;\n" + newFields
);

const newFeedbackFields = `
  stageOrGrade?: string;
  subjectOrSkill?: string;
  mappingClear?: boolean;
  activityFeasible?: boolean;
  improvementSuggestion?: string;
  willingToPilot?: boolean;
  contactConsent?: boolean;
  tags?: string[];
  adminStatus?: 'new' | 'reviewing' | 'accepted' | 'planned' | 'resolved';
`;

modelsTs = modelsTs.replace(
  "content: string;",
  "content: string;\n" + newFeedbackFields
);

// Add SchoolPlan model
const schoolPlanModel = `
export interface SchoolPlanDoc {
  id?: string;
  teacherId: string;
  teacherNameCode?: string;
  stage: string;
  grade: string;
  subject: string;
  term?: string;
  primarySkill: string;
  supportingSkills?: string[];
  mappingId?: string; // Reference to subject_mappings
  timeline?: string;
  resourceNeeds?: string;
  timetableAllocation?: string;
  evidenceCollectionPlan?: string;
  assessmentApproach?: string;
  inclusionStrategies?: string;
  parentCommunicationNotes?: string;
  createdAt: Timestamp | number;
  updatedAt: Timestamp | number;
}
`;

modelsTs += schoolPlanModel;

fs.writeFileSync(modelsTsPath, modelsTs);
console.log('Models updated');
