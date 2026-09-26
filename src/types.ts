export type GradeStatus = 
  | "planned" 
  | "in-development" 
  | "teacher-pilot" 
  | "reviewed" 
  | "published" 
  | "needs-update"
  | (string & {});

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
  
  // CBSE/NCERT/NCF Extensions
  cbseSubjects?: string[];
  
  // Curriculum Vintage Metadata
  curriculumFramework?: "NCF-SE-2023" | "pre-NCF-2023";
  textbookStatus?: "new-ncert-published" | "new-ncert-rolling-out" | "existing-textbooks-continuing";
  academicSession?: string;
  lastVerifiedDate?: string;
  advancedTrackAvailable?: boolean;
  thirdLanguageRequired?: boolean;
  ncrtBooks?: { subject: string; title: string; url: string }[];
  sources?: string[];
};

export type TrackType = 
  | "compulsory-embedded"    // Track A: CT&AI (Grades 3-8, compulsory, embedded)
  | "optional-skill-module"   // Track B: AI Skill Module 901 (901A/B/C, Grades 6-8, optional elective)
  | "elective-skill-subject"  // Track C: AI Skill Subject 417 (Grades 9-12, established board elective)
  | "core-discipline";        // Standard subject

export type SubjectSkillMap = {
  id: string;
  stage: string;
  grade: string;
  learningArea: string;
  subject: string;
  trackType?: TrackType;
  trackBadge?: string;
  hoursPerYear?: number;
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
  sourceReference?: string;
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
  progression?: { priorGrade?: string; nextGrade?: string; notes?: string };
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
  
  // v0.4.3 Open Resources Extensions
  gradeIds?: string[];
  subject?: string;
  license?: string;
  resourceType?: "textbook" | "video" | "interactive" | "lesson-plan" | "assessment" | "other" | string;
  lastVerified?: string;
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
  
  // CBSE/NCERT Alignment Extensions
  ncrtReferences?: { chapter: string; title: string }[];
  cbseCompetencies?: string[];
  lastUpdated?: string;
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
  
  // CBSE/NCF Alignment Extensions
  cbseCompetencies?: string[];
  ncfReferences?: string[];
  lastUpdated?: string;
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

/**
 * ============================================================================
 * V0.6 Extensions: Vertical Skill Pathways, Custom Rubrics, and Theme Bundles
 * ============================================================================
 */

export type NcfStageName = "Foundational" | "Preparatory" | "Middle" | "Secondary";

export interface PathwayStageIndicator {
  stage: NcfStageName;
  ageRange: string;
  grades: string;
  ncfCompetencyCode: string;
  sourceCitation: string;
  whatStudentsLearn: string;
  whatChanges: string; // The cognitive shift / pedagogical leap
  observableArtifact: string;
  sampleBenchmark: string;
}

export interface VerticalSkillPathway {
  id: string;
  name: string;
  domain: string;
  description: string;
  progressionOverview: string;
  stages: PathwayStageIndicator[];
}

export interface CustomRubricLevels {
  emerging: { label: string; descriptor: string; points?: number };
  developing: { label: string; descriptor: string; points?: number };
  proficient: { label: string; descriptor: string; points?: number };
  transfer: { label: string; descriptor: string; points?: number };
}

export interface CustomRubric {
  id: string;
  title: string;
  skillId: string;
  skillName: string;
  gradeId: string;
  subjectId: string;
  unitTitle?: string;
  levels: CustomRubricLevels;
  assessmentType: string;
  sourceNote?: string;
  createdAt: number;
  updatedAt: number;
}

export interface ThemeCrossSubjectConnection {
  subject: string;
  coreConcepts: string[];
  competencyMapped: string;
  ncfCitation: string;
  classroomActivity: string;
}

/**
 * V0.7 Interdisciplinary Co-Planning, Peer Review & Attribution
 */
export interface ThemeBundleAuthor {
  id: string;
  name: string;
  schoolName?: string;
  displaySchool?: boolean;
  isVerifiedEducator: boolean;
  verificationType?: 'school-email' | 'scert-credential' | 'peer-vouched';
  email?: string;
}

export interface PeerReviewRatings {
  curriculumAlignment: number; // 1-5 scale
  classroomUsability: number;
  sourceVerification: number;
  accessibility: number;
}

export interface PeerReview {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerDesignation: string;
  reviewerSchool?: string;
  isVerified: boolean;
  ratings: PeerReviewRatings;
  decision: 'endorse' | 'request-changes';
  comments: string;
  reviewedAt: number;
}

export interface BundleVersionRecord {
  version: string;
  date: string;
  authorName: string;
  summary: string;
}

export interface CommunityFeedback {
  id: string;
  type: 'report-issue' | 'suggest-edit';
  authorName: string;
  authorEmail?: string;
  category: 'broken-citation' | 'pedagogy-concern' | 'accessibility' | 'clarification' | 'other';
  description: string;
  suggestedCorrection?: string;
  status: 'open' | 'resolved';
  createdAt: number;
}

export interface ThemeBundle {
  id: string;
  slug: string;
  title: string;
  themeCategory: 'climate' | 'heritage' | 'data-ethics' | 'stem-energy' | 'water-security' | 'health-wellness' | string;
  tagline: string;
  description: string;
  gradeBand: string;
  recommendedHours: number;
  disciplines: string[];
  crossSubjectConnections: ThemeCrossSubjectConnection[];
  flagshipChallenge: {
    title: string;
    drivingQuestion: string;
    studentDeliverable: string;
    communityEngagement: string;
  };
  unifyingSkills: string[];
  sources: string[];
  // V0.7 Co-creation & Peer Review Extensions
  status?: 'draft' | 'in-review' | 'published' | 'revisions-requested';
  author?: ThemeBundleAuthor;
  license?: string; // e.g. "CC BY-SA 4.0"
  version?: string; // e.g. "v1.0.0"
  versionHistory?: BundleVersionRecord[];
  peerReviews?: PeerReview[];
  peerReviewedBadge?: boolean;
  communityFeedback?: CommunityFeedback[];
  createdAt?: number;
  updatedAt?: number;
}

/**
 * V0.7 & V0.8 State SCERT Textbook Alignment Types
 */
export interface StateTextbookAlignment {
  id: string;
  skillId: string;
  stateCode: string; // Supports all 12 states + national CBSE/NCERT
  stateName: string;
  grade: string;
  stageId?: 'foundational' | 'preparatory' | 'middle' | 'secondary';
  subject: string;
  textbookTitle: string;
  chapterNumber: number | string;
  chapterTitle: string;
  pageRange: string;
  qrOrPortalCode?: string;
  bridgingNote: string;
  sourceCitation: string;
  verifiedStatus: 'official-scert' | 'peer-verified' | 'community-suggested';
  contributorName?: string;
  verifiedDate?: string;
  stateCompetencyCode?: string;
  stateLearningOutcome?: string;
}

export interface AlignmentSuggestion {
  id: string;
  skillId: string;
  skillName: string;
  stateCode: string;
  stateName: string;
  grade: string;
  subject: string;
  textbookTitle: string;
  chapterNumber: string;
  chapterTitle: string;
  pageRange: string;
  rationale: string;
  contributorName: string;
  contributorEmail: string;
  status: 'pending-review' | 'approved' | 'rejected';
  submittedAt: number;
}

/**
 * V0.8 Real-Time Co-Planning (Google Docs-Style Collaboration) & CRDT
 */
export type CollaboratorRole = 'owner' | 'editor' | 'viewer';

export interface Collaborator {
  id: string;
  name: string;
  avatarColor: string;
  currentSection: string;
  cursorPosition?: string;
  lastActive: number;
  role: CollaboratorRole;
  isOnline: boolean;
}

export interface UnitCommentReply {
  id: string;
  authorId: string;
  authorName: string;
  text: string;
  timestamp: number;
}

export interface UnitComment {
  id: string;
  authorId: string;
  authorName: string;
  section: string;
  lessonId?: string;
  text: string;
  timestamp: number;
  resolved: boolean;
  replies: UnitCommentReply[];
}

export interface UnitSuggestion {
  id: string;
  authorId: string;
  authorName: string;
  section: string;
  field: string;
  originalText: string;
  suggestedText: string;
  timestamp: number;
  status: 'pending' | 'accepted' | 'rejected';
  reviewedBy?: string;
  reviewedAt?: number;
}

export interface ActivityLogItem {
  id: string;
  authorName: string;
  action: string;
  section: string;
  timestamp: number;
}

export interface CollaborativeLessonPlan {
  id: string;
  lessonNumber: number;
  title: string;
  durationMinutes: number;
  learningOutcomes: string;
  teacherAction: string;
  studentActivity: string;
  differentiationNotes: string;
  materialsNeeded: string;
}

export interface CollaborativeUnitPlan {
  id: string;
  title: string;
  themeCategory: string;
  grade: string;
  stage: string;
  disciplines: string[];
  essentialQuestion: string;
  summativeAssessment: string;
  curriculumGoal: string;
  lessons: CollaborativeLessonPlan[];
  version: number;
  lastModifiedBy: string;
  lastModifiedAt: number;
  currentUserRole: CollaboratorRole;
  collaborators: Collaborator[];
  comments: UnitComment[];
  suggestions: UnitSuggestion[];
  activityLog: ActivityLogItem[];
  isLockedForSync?: boolean;
}

/**
 * V0.8 Ready-to-Use Classroom Resources (Activity Bank 2.0)
 */
export type ClassroomResourceType = 
  | 'worksheet' 
  | 'slides' 
  | 'video' 
  | 'activity-kit' 
  | 'exit-ticket';

export type UDLMode = 'visual' | 'auditory' | 'kinesthetic' | 'reading-writing';

export interface MultilingualVocabularyItem {
  term: string;
  transliteration?: string;
  translations: Record<string, string>; // language code -> translated term
  classroomPrompt: string;
}

export interface SlideItem {
  slideNumber: number;
  title: string;
  bullets: string[];
  teacherNotes: string;
}

export interface ExitTicketPrompt {
  id: string;
  question: string;
  type: 'mcq' | 'open';
  options?: string[];
  exemplarAnswer: string;
  rubricCriterion: string;
}

export interface ClassroomResourceContent {
  printablePdfPreview?: string;
  answerKey?: string;
  slidesOutline?: SlideItem[];
  videoUrl?: string;
  videoDuration?: string;
  dikshaLink?: string;
  kitMaterials?: string[];
  kitSteps?: string[];
  safetyNotes?: string;
  exitTicketPrompts?: ExitTicketPrompt[];
  estimatedMinutes?: number;
}

export interface ClassroomResource {
  id: string;
  slug: string;
  title: string;
  description: string;
  resourceType: ClassroomResourceType;
  grade: string;
  stage: 'foundational' | 'preparatory' | 'middle' | 'secondary';
  subject: string;
  stateBoards: string[];
  languages: string[];
  skillsMapped: string[];
  competencyCodes: string[];
  udlModes: UDLMode[];
  iepGoals: string[];
  scaffolding: {
    simplify: string;
    extend: string;
  };
  multilingualVocab: MultilingualVocabularyItem[];
  content: ClassroomResourceContent;
  downloadsCount: number;
  rating: number;
  ratingCount: number;
  author: ThemeBundleAuthor;
  license: string; // "CC BY-SA 4.0"
  peerReviews: PeerReview[];
  peerReviewedBadge: boolean;
  status: 'draft' | 'in-review' | 'published';
  sourceCitation: string;
  createdAt: number;
  updatedAt: number;
}

/**
 * V0.8 School & District Implementation Dashboards
 */
export interface SchoolMetrics {
  schoolId: string;
  schoolName: string;
  district: string;
  state: string;
  totalTeachers: number;
  activeTeachers: number;
  plannedLessonsCount: number;
  resourcesClonedCount: number;
  subjectActivity: { subject: string; count: number }[];
  gradeActivity: { grade: string; count: number }[];
  competencyCoveragePercent: number;
  isOptedIn: boolean;
}

export interface DistrictTeacherLeader {
  id: string;
  name: string;
  school: string;
  resourcesAdopted: number;
  averageRating: number;
  verifiedBadgesCount: number;
}

export interface DistrictGoalProgress {
  goalId: string;
  title: string;
  targetPercent: number;
  currentPercent: number;
  alignedSubject: string;
}

export interface DistrictMetrics {
  districtId: string;
  districtName: string;
  state: string;
  totalSchools: number;
  totalTeachers: number;
  clusterCoverageRate: number;
  topTeachers: DistrictTeacherLeader[];
  goalProgress: DistrictGoalProgress[];
  urbanRuralSplit: { urbanCount: number; ruralCount: number };
}

/**
 * V0.8 Professional Development (DIKSHA / NISHTHA)
 */
export interface DikshaNishthaCourse {
  id: string;
  themeOrSkillId: string;
  courseCode: string;
  courseTitle: string;
  nishthaPhase: 'NISHTHA 1.0 (Elementary)' | 'NISHTHA 2.0 (Secondary)' | 'NISHTHA 3.0 (FLN)' | 'NISHTHA 4.0 (ECCE)';
  moduleNumber: number;
  pdHoursAccredited: number;
  directLink: string;
  description: string;
}

export interface TeacherPDRecord {
  id: string;
  activityType: 'bundle-creation' | 'resource-creation' | 'peer-review' | 'nishtha-module';
  title: string;
  hours: number;
  date: string;
  verified: boolean;
  certificateRef: string;
}


