import { Timestamp } from 'firebase/firestore';

export type Stage = 'Foundational' | 'Preparatory' | 'Middle' | 'Secondary';
export type UserRole = 'teacher' | 'admin' | 'curriculum_designer';

export interface SubjectMappingDoc {
  id?: string;
  ncfCurricularArea: string;
  subject: string;
  stage: Stage;
  grade: string;
  curricularGoal: string;
  competency: string;
  learningOutcome: string;
  essentialKnowledge: string;
  skills: string;
  pedagogy: string;
  activities: string;
  evidence: string;
  assessmentMethod: string;
  
  // Optional / Recommended fields based on audit
  inclusionAndDifferentiation?: string;
  valuesAndDispositions?: string;
  localIndianContext?: string;
  timeAndResources?: string;
  groupSize?: string;
  teacherPrep?: string;
  extensionActivity?: string;
  supportActivity?: string;

  // Metadata
  authorId: string;
  isOfficial: boolean;
  createdAt: Timestamp | number;
  updatedAt: Timestamp | number;
}

export interface FeedbackDoc {
  id?: string;
  userId?: string;
  userRole?: string;
  content: string;
  createdAt: Timestamp | number;
}

export interface UserProfileDoc {
  id?: string;
  role: UserRole;
  displayName?: string;
  email: string;
  createdAt: Timestamp | number;
  updatedAt: Timestamp | number;
}
