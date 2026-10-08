import tasksJson from '../../seeds/grade-8-tasks.json';

export interface TaskItem {
  taskId: string;
  title: string;
  subject: string;
  gradeBand: string;
  competency: string;
  subCompetency: string;
  timeEstimate: string;
  resourceLevel: string;
  skillType: string;
  assessmentMode: string;
  successCriteria: string[];
  scaffoldSupport: string;
  extensionChallenge: string;
  sourceCitation: string;
  trackAlignment: string;
}

export const GRADE_8_TASKS: TaskItem[] = tasksJson as TaskItem[];

export interface CompetencySummary {
  id: string;
  subject: string;
  title: string;
  chapterSource: string;
  ncfAlignment: string;
  taskCount: number;
  subCompetencies: string[];
  badgeName: string;
  iconName: string;
  colorScheme: {
    bg: string;
    border: string;
    text: string;
    badgeBg: string;
    progressBar: string;
  };
}

export const GRADE_8_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'sci-force',
    subject: 'Science',
    title: 'Understand the concept of force and its effects on motion',
    chapterSource: 'NCERT Grade 8 Science, Chapter 11 (Force and Pressure) & Chapter 12 (Friction)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Science C-3.1 & C-3.2',
    taskCount: 13,
    subCompetencies: [
      'Define force and classify types into contact and non-contact',
      'Quantify net force and directional interactions',
      'Observe effects of force on motion and shape',
      'Apply force principles to safety and engineering'
    ],
    badgeName: 'Force Explorer Badge',
    iconName: 'Atom',
    colorScheme: {
      bg: 'bg-blue-50 dark:bg-blue-950/30',
      border: 'border-blue-200 dark:border-blue-800',
      text: 'text-blue-700 dark:text-blue-300',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-200',
      progressBar: 'bg-blue-600',
    }
  },
  {
    id: 'math-lineq',
    subject: 'Mathematics',
    title: 'Solve linear equations in one variable',
    chapterSource: 'NCERT Grade 8 Mathematics, Chapter 2 (Linear Equations in One Variable)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Math C-2.1 & C-2.2',
    taskCount: 13,
    subCompetencies: [
      'Translate verbal statements into algebraic linear equations',
      'Solve equations with variable on one side using inverse operations',
      'Solve multi-term equations with variables on both sides and brackets',
      'Apply linear equations to real-world geometric and word problems'
    ],
    badgeName: 'Algebra Balancer Badge',
    iconName: 'Calculator',
    colorScheme: {
      bg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      text: 'text-emerald-700 dark:text-emerald-300',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200',
      progressBar: 'bg-emerald-600',
    }
  },
  {
    id: 'ai-scope',
    subject: 'AI',
    title: 'Define a real-world problem and identify data requirements for an AI solution',
    chapterSource: 'CBSE AI Skill Module 901A, Unit 1 (Problem Scoping) & 4Ws Canvas',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Goal C-7.1 & C-7.2',
    taskCount: 12,
    subCompetencies: [
      'Deconstruct challenges using the 4Ws Problem Canvas',
      'Differentiate rule-based automation from machine learning AI',
      'Specify data requirements, modalities, and acquisition methods',
      'Evaluate data ethics, representation, and privacy safeguards'
    ],
    badgeName: '4Ws Scout Badge',
    iconName: 'Cpu',
    colorScheme: {
      bg: 'bg-purple-50 dark:bg-purple-950/30',
      border: 'border-purple-200 dark:border-purple-800',
      text: 'text-purple-700 dark:text-purple-300',
      badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-200',
      progressBar: 'bg-purple-600',
    }
  },
  {
    id: 'soc-const',
    subject: 'Social Science',
    title: 'Explain the significance of the Indian Constitution in establishing democratic governance',
    chapterSource: 'NCERT Grade 8 Social Science (Civics), Chapters 1 & 2 (Indian Constitution & Secularism)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Social Science C-4.1 & C-4.2',
    taskCount: 12,
    subCompetencies: [
      'Explain the need for a written Constitution and historical context',
      'Deconstruct the 5 Key Features of the Indian Constitution',
      'Analyze Fundamental Rights and citizen protections',
      'Apply Constitutional principles to secularism and rule of law'
    ],
    badgeName: 'Constitutional Guardian Badge',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      progressBar: 'bg-amber-600',
    }
  },
  {
    id: 'int-resdv',
    subject: 'Interdisciplinary',
    title: 'Analyze the relationship between resources and development',
    chapterSource: 'NCERT Grade 8 Geography Ch. 1 (Resources) + Science Ch. 5 (Coal & Petroleum) & Ch. 18 (Pollution)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Goal C-5.1 & C-5.2',
    taskCount: 12,
    subCompetencies: [
      'Classify resources and analyze value addition processes',
      'Investigate ecological footprints and resource depletion crises',
      'Model sustainable development principles and circular economy',
      'Execute community resource audits and action plans'
    ],
    badgeName: 'Earth Steward Badge',
    iconName: 'Globe',
    colorScheme: {
      bg: 'bg-teal-50 dark:bg-teal-950/30',
      border: 'border-teal-200 dark:border-teal-800',
      text: 'text-teal-700 dark:text-teal-300',
      badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-200',
      progressBar: 'bg-teal-600',
    }
  }
];

export const SAFE_SCHOOL_ZONE_PROJECT = {
  title: 'Design a Safe School Zone: Reduce Vehicle Speed Near School Gates',
  gradeBand: 'Middle Stage (Grade 8)',
  challengeStatement: 'How might we, as student safety architects and civic researchers, use the laws of force and friction, algebraic modeling, constitutional rights to life and public safety, and smart sensor scoping to design an evidence-based, low-cost "Safe School Zone Masterplan" that reduces vehicle speeds to below 20 km/h and guarantees zero pedestrian injuries outside our school gates?',
  duration: '3–4 Weeks (12 class periods)',
  participatingDisciplines: ['Science (Force & Motion)', 'Mathematics (Algebraic Equations)', 'AI (4Ws Problem Scoping)', 'Social Science (Civics & Constitution)', 'Language & Advocacy'],
  requiredTasks: [
    { subject: 'Science', taskId: 'SCI-8-FORCE-3.3', role: 'Measure surface friction & stopping distance curves' },
    { subject: 'Science', taskId: 'SCI-8-FORCE-4.1', role: 'Evaluate school zone road safety using braking distance principles' },
    { subject: 'Mathematics', taskId: 'MATH-8-LINEQ-1.1', role: 'Translate verbal statements to algebraic linear equations' },
    { subject: 'Mathematics', taskId: 'MATH-8-LINEQ-4.3', role: 'Model vehicle speeds, travel times, and rendezvous intervals' },
    { subject: 'AI', taskId: 'AI-8-SCOPE-1.2', role: 'Complete 4Ws Canvas for morning school gate traffic conflict' },
    { subject: 'AI', taskId: 'AI-8-SCOPE-4.1', role: 'Audit camera placement, data privacy, and demographic representation' },
    { subject: 'Social Science', taskId: 'SOC-8-CONST-1.1', role: 'Apply game rules analogy to democratic traffic governance' },
    { subject: 'Social Science', taskId: 'SOC-8-CONST-4.3', role: 'Ground public safety and speed compliance in Article 21' },
  ],
  deliverables: [
    { title: 'Physical 1:200 Scale Blueprint', desc: 'Cardboard relief model or architectural diagram of the 100m gate zone featuring rumble strips, zebra crossings, and segregated parent pickup bays.' },
    { title: 'Technical Dossier & Mathematical Proof', desc: 'Calculations showing 75% drop in vehicle kinetic impact energy at 20 km/h vs 40 km/h and algebraic reaction-stopping distance equations.' },
    { title: 'Municipal Advocacy Petition', desc: 'Formal petition to Municipal Ward Officer citing Constitutional Article 21 (Right to Safe Roads).' }
  ]
};
