import grade6Json from '../../seeds/grade-6-tasks.json';
import grade7Json from '../../seeds/grade-7-tasks.json';
import grade8Json from '../../seeds/grade-8-tasks.json';
import grade9Json from '../../seeds/grade-9-tasks.json';
import grade10Json from '../../seeds/grade-10-tasks.json';

export interface TaskItem {
  taskId: string;
  title: string;
  subject: string;
  gradeBand: string;
  grade?: number;
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

export interface ProjectBlueprint {
  title: string;
  grade: number;
  gradeBand: string;
  challengeStatement: string;
  duration: string;
  participatingDisciplines: string[];
  requiredTasks: Array<{
    subject: string;
    taskId: string;
    role: string;
  }>;
  deliverables: Array<{
    title: string;
    desc: string;
  }>;
}

// Normalise tasks with grade field
const normalise = (tasks: any[], gradeNum: number): TaskItem[] => {
  return tasks.map(t => ({
    ...t,
    grade: t.grade || gradeNum
  }));
};

export const GRADE_6_TASKS: TaskItem[] = normalise(grade6Json as any[], 6);
export const GRADE_7_TASKS: TaskItem[] = normalise(grade7Json as any[], 7);
export const GRADE_8_TASKS: TaskItem[] = normalise(grade8Json as any[], 8);
export const GRADE_9_TASKS: TaskItem[] = normalise(grade9Json as any[], 9);
export const GRADE_10_TASKS: TaskItem[] = normalise(grade10Json as any[], 10);

export const TASKS_BY_GRADE: Record<number, TaskItem[]> = {
  6: GRADE_6_TASKS,
  7: GRADE_7_TASKS,
  8: GRADE_8_TASKS,
  9: GRADE_9_TASKS,
  10: GRADE_10_TASKS,
};

export const ALL_TASKS: TaskItem[] = [
  ...GRADE_6_TASKS,
  ...GRADE_7_TASKS,
  ...GRADE_8_TASKS,
  ...GRADE_9_TASKS,
  ...GRADE_10_TASKS,
];

export interface GradeInfo {
  grade: number;
  slug: string;
  title: string;
  stage: string;
  focus: string;
  taskCount: number;
  subjects: string[];
}

export const GRADE_INFOS: GradeInfo[] = [
  {
    grade: 6,
    slug: 'grade-6',
    title: 'Grade 6: Foundational Bridge',
    stage: 'Middle Stage (Ages 11–12)',
    focus: 'Concrete → Abstract transition through hands-on modeling, physical number lines, and local community inquiry.',
    taskCount: GRADE_6_TASKS.length,
    subjects: ['Mathematics', 'Science', 'AI', 'Social Science']
  },
  {
    grade: 7,
    slug: 'grade-7',
    title: 'Grade 7: Middle Stage Core',
    stage: 'Middle Stage (Ages 12–13)',
    focus: 'Cross-disciplinary connections: algebraic balancing, thermal and kinematic rates, and medieval institutional trade.',
    taskCount: GRADE_7_TASKS.length,
    subjects: ['Mathematics', 'Science', 'AI', 'Social Science']
  },
  {
    grade: 8,
    slug: 'grade-8',
    title: 'Grade 8: Flagship Pilot',
    stage: 'Middle Stage (Ages 13–14)',
    focus: 'Integrated force and algebraic modeling, 4Ws problem scoping, constitutional governance, and resource development.',
    taskCount: GRADE_8_TASKS.length,
    subjects: ['Science', 'Mathematics', 'AI', 'Social Science', 'Interdisciplinary']
  },
  {
    grade: 9,
    slug: 'grade-9',
    title: 'Grade 9: Secondary Foundation',
    stage: 'Secondary Stage (Ages 14–15)',
    focus: 'Disciplinary depth: polynomial theorem derivations, cellular biochemistry, AI ethics audits, and poverty metrics.',
    taskCount: GRADE_9_TASKS.length,
    subjects: ['Mathematics', 'Science', 'AI', 'Social Science']
  },
  {
    grade: 10,
    slug: 'grade-10',
    title: 'Grade 10: Board Exam Readiness',
    stage: 'Secondary Stage (Ages 15–16)',
    focus: 'Competency-based question styles (Assertion-Reason, Case-Based Item Sets, MCQs), electrical networks, and full AI project cycles.',
    taskCount: GRADE_10_TASKS.length,
    subjects: ['Mathematics', 'Science', 'AI', 'Social Science']
  }
];

export const GRADE_6_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'math-g6',
    subject: 'Mathematics',
    title: 'Understand and apply ratios, proportions, integers, and geometric constructions',
    chapterSource: 'NCERT Grade 6 Math Ch 4 (Geometry), Ch 6 (Integers), Ch 12 (Ratio and Proportion)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Math C-1.1, C-1.2, C-3.1',
    taskCount: 14,
    subCompetencies: [
      'Proportional Reasoning & Ratios',
      'Directed Numbers & Integer Operations',
      'Spatial & Basic Geometrical Constructions',
      'Polygons & Real-World Geometrical Classification'
    ],
    badgeName: 'Proportion & Geometry Scout',
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
    id: 'sci-g6',
    subject: 'Science',
    title: 'Investigate water, air, motion, and simple mechanical systems',
    chapterSource: 'NCERT Grade 6 Science Ch 10 (Motion), Ch 11 (Light/Shadows), Ch 14 (Water), Ch 15 (Air)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Science C-1.1, C-2.1, C-3.1, C-4.1',
    taskCount: 14,
    subCompetencies: [
      'The Hydrological Cycle & Water Stewardship',
      'Atmospheric Composition & Properties of Air',
      'Motion Types & Standardized Measurement',
      'Light, Shadows & Simple Mechanical Principles'
    ],
    badgeName: 'Hydro & Mechanics Explorer',
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
    id: 'ai-g6',
    subject: 'AI',
    title: 'Understand data representation, algorithmic logic, and ethical AI basics',
    chapterSource: 'CBSE Class 6 AI Skill Curriculum Units 1-3 & Data Literacy',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Goals C-7.1, C-7.2',
    taskCount: 12,
    subCompetencies: [
      'Distinguishing AI from Rule-Based Devices',
      'Data Collection & Feature Tagging',
      'Manual Classification & Decision Trees',
      'Identifying Dataset Bias & Inclusivity'
    ],
    badgeName: 'Data Detective Badge',
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
    id: 'soc-g6',
    subject: 'Social Science',
    title: 'Examine grassroots democratic governance and ancient Indian urban empires',
    chapterSource: 'NCERT Grade 6 Our Pasts - I Ch 3 (Harappa), Ch 7 (Ashoka); SPL - I Ch 5 (Panchayati Raj), Ch 7 (Urban)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Social Science C-1.1, C-4.1',
    taskCount: 14,
    subCompetencies: [
      'Grassroots Rural Democracy (Panchayati Raj)',
      'Urban Civic Administration & Public Services',
      'Ancient Urban Planning & Harappan Civic Engineering',
      'Imperial Administration & Ashokan Dhamma'
    ],
    badgeName: 'Civic Heritage Pioneer',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      progressBar: 'bg-amber-600',
    }
  }
];

export const GRADE_7_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'math-g7',
    subject: 'Mathematics',
    title: 'Apply integer operations, rational fractions, and simple linear equation modeling',
    chapterSource: 'NCERT Grade 7 Math Ch 1 (Integers), Ch 2 (Fractions/Decimals), Ch 4 (Simple Equations)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Math C-1.1, C-1.2, C-2.1',
    taskCount: 14,
    subCompetencies: [
      'Advanced Integer Operations & Properties',
      'Rational Fractions & Decimal Quantities',
      'Formulating Simple Equations from Situations',
      'Solving Equations via Balancing & Transposition'
    ],
    badgeName: 'Algebra & Fraction Navigator',
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
    id: 'sci-g7',
    subject: 'Science',
    title: 'Investigate kinematics, thermodynamics, and chemical indicator reactions',
    chapterSource: 'NCERT Grade 7 Science Ch 4 (Heat), Ch 5 (Acids/Bases/Salts), Ch 13 (Motion and Time)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Science C-2.1, C-3.1, C-3.2',
    taskCount: 14,
    subCompetencies: [
      'Kinematics & Periodic Timekeeping',
      'Thermal Energy Transfer & Measurement',
      'Acids, Bases & Natural Indicators',
      'Neutralization Reactions & Practical Applications'
    ],
    badgeName: 'Kinetic & Chemical Chemist',
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
    id: 'ai-g7',
    subject: 'AI',
    title: 'Design pattern recognition models, rule expert systems, and NLP pipelines',
    chapterSource: 'CBSE Class 7 AI Skill Curriculum Units 1-3 (Pattern Recognition & Rule AI)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Goals C-7.1, C-7.2',
    taskCount: 12,
    subCompetencies: [
      'Algorithmic Pattern Recognition',
      'Engineering Rule-Based Expert Systems',
      'Natural Language Tokenization & Syntax',
      'System Vulnerability & Failure Edge Cases'
    ],
    badgeName: 'Rule Master & NLP Architect',
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
    id: 'soc-g7',
    subject: 'Social Science',
    title: 'Evaluate medieval Indian political institutions, trade routes, and Mughal administration',
    chapterSource: 'NCERT Grade 7 Our Pasts - II Ch 2 (Cholas), Ch 4 (Mughals), Ch 6 (Towns/Traders)',
    ncfAlignment: 'NCF-SE 2023 Middle Stage Social Science C-1.1, C-2.1, C-3.1',
    taskCount: 12,
    subCompetencies: [
      'Chola Agrarian Expansion & Village Assemblies',
      'Mughal Imperial State & Mansabdari Framework',
      'Agrarian Revenue Systems (Zabt & Todar Mal)',
      'Urban Emporiums, Guilds & Financial Instruments'
    ],
    badgeName: 'Medieval Heritage Chronicler',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      progressBar: 'bg-amber-600',
    }
  }
];

export const GRADE_8_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'sci-force',
    subject: 'Science',
    title: 'Understand the concept of force and its effects on motion',
    chapterSource: 'NCERT Grade 8 Science Ch 11 (Force and Pressure) & Ch 12 (Friction)',
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
    chapterSource: 'NCERT Grade 8 Mathematics Ch 2 (Linear Equations in One Variable)',
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
    chapterSource: 'NCERT Grade 8 Social Science (Civics) Ch 1 & 2 (Indian Constitution & Secularism)',
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
    chapterSource: 'NCERT Grade 8 Geography Ch 1 (Resources) + Science Ch 5 (Coal) & Ch 18 (Pollution)',
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

export const GRADE_9_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'math-g9',
    subject: 'Mathematics',
    title: 'Master polynomials, coordinate geometry, and grouped statistical distributions',
    chapterSource: 'NCERT Grade 9 Math Ch 2 (Polynomials), Ch 3 (Coordinate Geometry), Ch 14 (Statistics)',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Math C-1.1, C-2.1, C-4.1',
    taskCount: 16,
    subCompetencies: [
      'Polynomial Operations & Algebraic Identities',
      'Factorization of Quadratic & Cubic Polynomials',
      'The Cartesian Coordinate Plane & Spatial Plotting',
      'Grouped Statistics & Measures of Central Tendency'
    ],
    badgeName: 'Polynomial & Coordinate Master',
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
    id: 'sci-g9',
    subject: 'Science',
    title: 'Investigate matter transitions, cellular biology, and quantitative Newtonian mechanics',
    chapterSource: 'NCERT Grade 9 Science Ch 1 (Matter), Ch 5 (Cell Unit of Life), Ch 9 (Laws of Motion)',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Science C-1.1, C-2.1, C-3.1',
    taskCount: 16,
    subCompetencies: [
      'Kinetic Nature of Matter & Thermal Phase Changes',
      'Cell Ultrastructure & Membrane Transport',
      'Newton Laws of Motion & Momentum',
      'Conservation of Momentum & Collision Dynamics'
    ],
    badgeName: 'Cellular & Newtonian Physicist',
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
    id: 'ai-g9',
    subject: 'AI',
    title: 'Conduct ethical audits, examine data privacy, and design XAI frameworks',
    chapterSource: 'CBSE Class 9 AI Subject Code 417 Units 1-3 & DPDPA 2023 Alignment',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Goals C-7.1, C-7.2',
    taskCount: 14,
    subCompetencies: [
      'Algorithmic Bias Detection & Mitigation',
      'Data Privacy, Surveillance & Regulatory Frameworks',
      'Dark Patterns & Autonomous Manipulation',
      'Explainable AI (XAI) & Human-in-the-Loop Governance'
    ],
    badgeName: 'AI Ethicist & Privacy Auditor',
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
    id: 'soc-g9',
    subject: 'Social Science',
    title: 'Analyze democratic governance, constitutional design, and economic poverty challenges',
    chapterSource: 'NCERT Grade 9 Democratic Politics - I Ch 1 & 2; Economics Ch 3 (Poverty as a Challenge)',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Social Science C-1.1, C-4.1',
    taskCount: 16,
    subCompetencies: [
      'Democratic Governance & Non-Democratic Counterpoints',
      'Constitutional Philosophy & Drafting Debates',
      'Poverty Metrics & Vulnerability Analysis',
      'Anti-Poverty Programmes & Rights-Based Welfare'
    ],
    badgeName: 'Constitutional Jurist & Policy Analyst',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      progressBar: 'bg-amber-600',
    }
  }
];

export const GRADE_10_COMPETENCIES: CompetencySummary[] = [
  {
    id: 'math-g10',
    subject: 'Mathematics',
    title: 'Master quadratic equations, triangle similarity, and classical probability',
    chapterSource: 'NCERT Grade 10 Math Ch 4 (Quadratics), Ch 6 (Triangles), Ch 15 (Probability)',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Math C-1.1, C-2.1, C-4.1',
    taskCount: 19,
    subCompetencies: [
      'Quadratic Roots & Discriminant Analysis',
      'Real-World Quadratic Modeling',
      'Geometric Similarity & Deductive Proofs',
      'Classical & Experimental Probability'
    ],
    badgeName: 'Board Mathematics Distinction',
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
    id: 'sci-g10',
    subject: 'Science',
    title: 'Analyze chemical reactions, human physiological systems, and electrical circuits',
    chapterSource: 'NCERT Grade 10 Science Ch 1 (Chemical Reactions), Ch 6 (Life Processes), Ch 12 (Electricity)',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Science C-1.1, C-2.1, C-3.1',
    taskCount: 19,
    subCompetencies: [
      'Chemical Equations & Reaction Classifications',
      'Human Metabolic Systems & Life Processes',
      'Electric Current, Potential Difference & Ohms Law',
      'Series-Parallel Resistance & Joules Heating Effect'
    ],
    badgeName: 'Board Science Scholar',
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
    id: 'ai-g10',
    subject: 'AI',
    title: 'Execute end-to-end AI project cycle, train models, and evaluate confusion matrices',
    chapterSource: 'CBSE Class 10 AI Subject Code 417 Part B Units 1 & 2',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Computational Goals C-7.1, C-7.2',
    taskCount: 18,
    subCompetencies: [
      'Problem Scoping & SDG Alignment',
      'Data Acquisition & Exploratory Data Analysis (EDA)',
      'Machine Learning & Neural Network Modeling',
      'Rigorous Model Evaluation & Confusion Matrix Metrics'
    ],
    badgeName: 'Certified AI Practitioner',
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
    id: 'soc-g10',
    subject: 'Social Science',
    title: 'Analyze nationalism, economic globalization, and sustainable resource planning',
    chapterSource: 'NCERT Grade 10 History Ch 1 & 2; Geography Ch 1; Economics Ch 4',
    ncfAlignment: 'NCF-SE 2023 Secondary Stage Social Science C-1.1, C-2.1, C-4.1',
    taskCount: 16,
    subCompetencies: [
      'Anti-Colonial Mass Movements & Satyagraha in India',
      'Visual Allegories & Nationalist Symbolism',
      'Economic Globalization & MNC Integration',
      'Resource Planning, Soil Geography & Sustainability'
    ],
    badgeName: 'Board Social Science Diplomat',
    iconName: 'Landmark',
    colorScheme: {
      bg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-700 dark:text-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-200',
      progressBar: 'bg-amber-600',
    }
  }
];

export const COMPETENCIES_BY_GRADE: Record<number, CompetencySummary[]> = {
  6: GRADE_6_COMPETENCIES,
  7: GRADE_7_COMPETENCIES,
  8: GRADE_8_COMPETENCIES,
  9: GRADE_9_COMPETENCIES,
  10: GRADE_10_COMPETENCIES,
};

export const PROJECTS_BY_GRADE: Record<number, ProjectBlueprint> = {
  6: {
    grade: 6,
    title: 'Community Heritage & Water Resilience: Stepwells, Rainwater Mapping & Local Governance',
    gradeBand: 'Middle Stage (Grade 6)',
    challengeStatement: 'How can we, as junior civic scientists and historical cartographers, measure and analyze our school and community water sources, compare them with ancient Harappan and medieval stepwell engineering, and present a data-backed Water Resilience Charter to our local Gram Panchayat or Ward Councillor?',
    duration: '3 Weeks (12 class periods)',
    participatingDisciplines: ['Mathematics (Ratios & Geometry)', 'Science (Water Cycle & Filtration)', 'AI (Data Basics & Bias)', 'Social Science (Panchayati Raj & Harappan Cities)'],
    requiredTasks: [
      { subject: 'Mathematics', taskId: 'MATH-6-RATIO-1.1', role: 'Calculate catchment length-to-width ratios' },
      { subject: 'Mathematics', taskId: 'MATH-6-POLY-4.2', role: 'Deconstruct circular well dimensions' },
      { subject: 'Science', taskId: 'SCI-6-WATER-1.1', role: 'Build terrarium water cycle model' },
      { subject: 'Science', taskId: 'SCI-6-WATER-1.3', role: 'Design school rooftop rainwater harvesting setup' },
      { subject: 'AI', taskId: 'AI-6-DATA-2.1', role: 'Tabulate community water points with feature tags' },
      { subject: 'AI', taskId: 'AI-6-DATA-4.1', role: 'Audit spatial distribution for demographic bias' },
      { subject: 'Social Science', taskId: 'SOC-6-HARAPPA-3.1', role: 'Analyze Harappan covered drainage engineering' },
      { subject: 'Social Science', taskId: 'SOC-6-GOV-1.1', role: 'Roleplay Gram Sabha water resolution' },
    ],
    deliverables: [
      { title: 'Physical 3D Terrarium & Rainwater Diorama', desc: 'Working model demonstrating evaporation, condensation, and 3-layer sand/gravel/charcoal water filtration.' },
      { title: 'Community Water Point Data Ledger', desc: 'Structured spreadsheet cataloging 15 surveyed local water distribution points with quality and maintenance tags.' },
      { title: 'Civic Water Charter & Petition', desc: '2-page formal resolution presented to Gram Panchayat / Municipal Ward Councillor requesting tap repairs and rainwater pits.' }
    ]
  },
  7: {
    grade: 7,
    title: 'School & Community Water Audit: Conservation, Flow Rates & Chemical Testing',
    gradeBand: 'Middle Stage (Grade 7)',
    challengeStatement: 'How can we, as student water conservators and investigative scientists, measure volumetric tap flow rates, test water pH acidity using natural indicators, model school water consumption using algebraic equations, design an automated leak-detection decision matrix, and publish an evidence-based Water Quality & Conservation Audit modeled on historical Chola tank systems?',
    duration: '3–4 Weeks (12 class periods)',
    participatingDisciplines: ['Mathematics (Fractions & Linear Equations)', 'Science (Kinematics, Heat & Acid-Base pH)', 'AI (Pattern Recognition & Rule Expert Systems)', 'Social Science (Chola Tank Governance & Medieval Trade)'],
    requiredTasks: [
      { subject: 'Mathematics', taskId: 'MATH-7-FRAC-2.2', role: 'Calculate fractional tap flow rates in liters per minute' },
      { subject: 'Mathematics', taskId: 'MATH-7-EQN-3.1', role: 'Formulate linear equations for overhead water tank depletion' },
      { subject: 'Science', taskId: 'SCI-7-TIME-1.1', role: 'Calibrate stopwatch timing and flow rates' },
      { subject: 'Science', taskId: 'SCI-7-ACID-3.1', role: 'Test water pH from 5 campus sources with natural indicators' },
      { subject: 'Science', taskId: 'SCI-7-HEAT-2.1', role: 'Measure thermal cooling and evaporation loss' },
      { subject: 'AI', taskId: 'AI-7-PATT-1.1', role: 'Discover peak consumption patterns across the school day' },
      { subject: 'AI', taskId: 'AI-7-RULE-2.1', role: 'Design a Rule-Based Leak Diagnostic Tree for staff' },
      { subject: 'Social Science', taskId: 'SOC-7-MED-1.1', role: 'Analyze Chola Eri tank irrigation and election committees' },
    ],
    deliverables: [
      { title: 'Campus Water Flow & Quality Dashboard', desc: 'Visual interactive chart showing flow rates, leaky tap flags, and chemical acidity ratings across campus.' },
      { title: 'Mathematical Tank Depletion Model', desc: 'Linear algebraic model predicting exact hour overhead tank empties on high-usage days vs normal days.' },
      { title: 'Plumbing Leak Expert System Card', desc: 'Laminated visual decision flowchart helping maintenance staff diagnose pipe leaks and valves instantly.' }
    ]
  },
  8: {
    grade: 8,
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
      { title: 'Physical 1:200 Scale Blueprint', desc: 'Cardboard relief model or architectural diagram of the 100m gate zone featuring rumble strips, zebra crossings, and segregated pickup bays.' },
      { title: 'Technical Dossier & Mathematical Proof', desc: 'Calculations showing 75% drop in vehicle kinetic impact energy at 20 km/h vs 40 km/h and algebraic reaction-stopping distance equations.' },
      { title: 'Municipal Advocacy Petition', desc: 'Formal petition to Municipal Ward Officer citing Constitutional Article 21 (Right to Safe Roads).' }
    ]
  },
  9: {
    grade: 9,
    title: 'Nutrition Security & Civic Action Plan: Statistical Modeling, Caloric Calculations & Constitutional Rights',
    gradeBand: 'Secondary Stage (Grade 9)',
    challengeStatement: 'How can we, as youth policy researchers and civic scientists, analyze local household dietary datasets using statistical distributions, calculate cellular nutritional deficits, audit automated public food distribution models for demographic bias, and formulate a constitutional Nutrition Security Action Masterplan under Article 21 to eradicate local child stunting?',
    duration: '3–4 Weeks (14 class periods)',
    participatingDisciplines: ['Mathematics (Statistics & Central Tendencies)', 'Science (Cell Biology & Thermodynamics)', 'AI (Bias Auditing & Model Cards)', 'Social Science (Economics of Poverty & Constitutional Rights)'],
    requiredTasks: [
      { subject: 'Mathematics', taskId: 'MATH-9-STAT-4.1', role: 'Construct grouped histograms of household caloric consumption' },
      { subject: 'Mathematics', taskId: 'MATH-9-STAT-4.2', role: 'Compare Mean, Median, and Mode to identify severe caloric skew' },
      { subject: 'Science', taskId: 'SCI-9-CELL-2.2', role: 'Investigate cellular osmotic balance and nutrient absorption' },
      { subject: 'Science', taskId: 'SCI-9-MATT-1.1', role: 'Model thermal energy expenditure in cellular metabolism' },
      { subject: 'AI', taskId: 'AI-9-BIAS-1.1', role: 'Audit automated welfare rationing algorithms for demographic bias' },
      { subject: 'AI', taskId: 'AI-9-XAI-4.1', role: 'Draft an AI Model Card for automated food grain allocation' },
      { subject: 'Social Science', taskId: 'SOC-9-POV-3.1', role: 'Calculate poverty lines using 2400 kcal rural vs 2100 kcal urban criteria' },
      { subject: 'Social Science', taskId: 'SOC-9-CONST-2.1', role: 'Connect Right to Food under Article 21 with Constituent Assembly debates' },
    ],
    deliverables: [
      { title: 'Statistical Nutrition & Calorie Report', desc: 'Statistical dossier containing grouped frequency histograms, mean vs median comparisons, and income-to-nutrition correlations.' },
      { title: 'Algorithmic Fairness Model Card', desc: 'Formal AI Model Card ensuring biometric PDS authentication includes offline manual exception overrides for manual laborers.' },
      { title: 'Citizen Nutrition Charter & Policy Brief', desc: '4-page evidence-based civic brief submitted to District Food Controller recommending decentralized millets and fortified meals.' }
    ]
  },
  10: {
    grade: 10,
    title: 'Sustainable Urban Mobility & Green Energy Masterplan: Clean Transportation, Circuit Design & Resource Planning',
    gradeBand: 'Secondary Stage (Grade 10)',
    challengeStatement: 'How can we, as student urban systems engineers and civic policy planners, design a high-efficiency 5-kilometer Zero-Emission Urban Mobility & Solar Microgrid Masterplan using electric circuit power optimization, quadratic braking and kinematic equations, geometric similarity scaling, an end-to-end AI vehicle classification model evaluated via confusion matrices, and sustainable land-use resource planning?',
    duration: '4 Weeks (16 class periods)',
    participatingDisciplines: ['Mathematics (Quadratics, Triangle Similarity & Probability)', 'Science (Electricity & Chemical Redox)', 'AI (End-to-End Project Cycle & Confusion Matrix)', 'Social Science (Globalization & Soil Resource Planning)'],
    requiredTasks: [
      { subject: 'Mathematics', taskId: 'MATH-10-QUAD-2.1', role: 'Model electric bus speed, stopping distance, and headway intervals' },
      { subject: 'Mathematics', taskId: 'MATH-10-TRI-3.1', role: 'Apply geometric similarity to produce 1:500 scale multimodal corridor blueprint' },
      { subject: 'Mathematics', taskId: 'MATH-10-PROB-4.1', role: 'Calculate theoretical risk probability of charging station queue overflow' },
      { subject: 'Science', taskId: 'SCI-10-ELEC-3.1', role: 'Verify V-I characteristics and electrical resistance of charging conduits' },
      { subject: 'Science', taskId: 'SCI-10-ELEC-4.1', role: 'Design a parallel domestic/commercial solar microgrid circuit with Joule heating safety' },
      { subject: 'Science', taskId: 'SCI-10-CHEM-1.1', role: 'Balance redox equations for lithium-ion and green hydrogen fuel cells' },
      { subject: 'AI', taskId: 'AI-10-SCOPE-1.1', role: 'Scope urban traffic bottleneck challenge using 4Ws Canvas & SDG 11' },
      { subject: 'AI', taskId: 'AI-10-EVAL-4.1', role: 'Evaluate traffic monitoring camera model using Precision, Recall, and F1-Score' },
      { subject: 'Social Science', taskId: 'SOC-10-ECON-3.1', role: 'Evaluate FDI and global supply chains for electric vehicles and battery imports' },
      { subject: 'Social Science', taskId: 'SOC-10-GEOG-4.1', role: 'Map sustainable land zoning and mitigation of urban heat islands' },
    ],
    deliverables: [
      { title: 'Multimodal Corridor Blueprint (1:500 Scale)', desc: 'Precise geometric layout with dedicated EV BRT lanes, protected cycle tracks, permeable paving bioswales, and solar canopies.' },
      { title: 'Electrical Microgrid & Sensor Schematic', desc: 'Complete technical engineering file with parallel DC charging circuit schematics, ammeter/voltmeter monitoring, and Joule heating safety.' },
      { title: 'AI Vision Confusion Matrix Report', desc: 'Formal evaluation dossier demonstrating >90% Precision and >92% Recall for emergency vehicle detection at smart traffic intersections.' },
      { title: 'Municipal Policy & Resource Stewardship White Paper', desc: '6-page comprehensive policy proposal submitted to Smart City Corporation citing urban masterplans and SDG 11 benchmarks.' }
    ]
  }
};

// Backwards compatibility re-exports
export const SAFE_SCHOOL_ZONE_PROJECT = PROJECTS_BY_GRADE[8];
