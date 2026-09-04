export type IllustrationCategory = 'scenario' | 'step' | 'process' | 'evidence' | 'toolkit';

export interface ActivityStepData {
  stepNumber: number;
  title: string;
  actionLabel: string;
  instruction: string;
  duration?: string;
  visualSummary: string;
  svgKey: string;
  altText: string;
}

export interface ActivityMaterialItem {
  name: string;
  iconType: 'paper' | 'pencil' | 'clipboard' | 'bottle' | 'filter' | 'stopwatch' | 'card' | 'computer' | 'leaves' | 'chart' | 'magnifier' | 'scale';
  description?: string;
  lowResourceSubstitute?: string;
}

export interface LearningEvidenceData {
  title: string;
  artifactType: 'pictograph-poster' | 'problem-tree' | 'filtration-report' | 'ai-canvas' | 'policy-brief';
  description: string;
  observableIndicators: string[];
  svgKey: string;
  altText: string;
}

export interface InclusionCalloutData {
  title: string;
  description: string;
  type: 'mobility' | 'language' | 'neurodiversity' | 'sensory' | 'general';
  actionableTip: string;
}

export interface SafetyCalloutData {
  title: string;
  warningText: string;
  precaution: string;
}

export interface ActivitySceneConfig {
  activityId: string;
  grade: string;
  title: string;
  themeColor: string;
  scenario: {
    title: string;
    setting: string;
    teacherRole: string;
    studentRoles: string;
    challengeTask: string;
    collaborationMode: string;
    expectedBehaviour: string;
    altText: string;
  };
  steps: ActivityStepData[];
  materials: ActivityMaterialItem[];
  evidence: LearningEvidenceData;
  inclusion: InclusionCalloutData;
  safety?: SafetyCalloutData;
}

export interface ProcessStepNode {
  id: string;
  number: number;
  label: string;
  subLabel: string;
  color: string;
  description: string;
  classroomExample: string;
  teacherAction: string;
}

export interface TeacherGuideVisual {
  id: string;
  title: string;
  category: 'rubric' | 'evidence' | 'facilitation' | 'inquiry' | 'scaffold' | 'extension' | 'ai-verification' | 'peer-feedback';
  summary: string;
  steps: {
    number: number;
    title: string;
    description: string;
    keyTip: string;
  }[];
  pedagogicalRationale: string;
}

export interface VisualGlossaryItem {
  term: string;
  hindiTerm?: string;
  category: 'curriculum' | 'pedagogy' | 'assessment';
  definition: string;
  concreteExample: string;
  commonMisconception: string;
}
