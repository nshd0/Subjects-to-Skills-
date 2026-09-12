const subjects = [
  { id: 'math', name: 'Mathematics', skill: 'g8-math-1' },
  { id: 'science', name: 'Science', skill: 'g8-sci-1' },
  { id: 'english', name: 'English', skill: 'g8-eng-1' },
  { id: 'social-science', name: 'Social Science', skill: 'g8-ss-1' },
  { id: 'second-language', name: 'Second Language', skill: 'g8-sl-1' }
];

const mockPlans = subjects.map(sub => ({
  id: `exemplar-plan-${sub.id}`,
  gradeId: 'grade-8',
  subjectId: sub.id,
  skillIds: [sub.skill],
  bloomsFocus: ['Apply', 'Analyze'],
  varkActivities: {
    visual: { description: 'Diagram mapping', included: true },
    kinesthetic: { description: 'Hands-on project', included: true }
  },
  timeline: [
    { title: 'Introduction', durationMin: 15, skillIds: [sub.skill], bloomsLevel: 'Understand', varkType: 'visual' },
    { title: 'Core Activity', durationMin: 30, skillIds: [sub.skill], bloomsLevel: 'Apply', varkType: 'kinesthetic' }
  ],
  resourceIds: [],
  createdAt: Date.now(),
  updatedAt: Date.now()
}));

const mockAssessments = subjects.map(sub => ({
  id: `exemplar-assess-${sub.id}`,
  gradeId: 'grade-8',
  subjectId: sub.id,
  skillIds: [sub.skill],
  assessmentType: 'performance',
  bloomsFocus: ['Analyze', 'Evaluate'],
  tasks: [
    { id: `task-1-${sub.id}`, description: 'Real-world problem solving task', varkType: 'visual', skillIds: [sub.skill], bloomsLevel: 'Evaluate' }
  ],
  rubric: {
    skillId: sub.skill,
    levels: [
      { label: 'Emerging', descriptor: 'Requires support to complete task.' },
      { label: 'Proficient', descriptor: 'Completes task independently with good accuracy.' }
    ]
  },
  logistics: {
    grouping: 'pairs',
    markingApproach: 'full'
  },
  createdAt: Date.now(),
  updatedAt: Date.now()
}));

const fs = require('fs');
let code = fs.readFileSync('src/features/planning/useWizardStorage.ts', 'utf8');

code = code.replace(
  'const [plans, setPlans] = useState<LessonPlan[]>([]);',
  `const defaultPlans: LessonPlan[] = ${JSON.stringify(mockPlans, null, 2)};\n  const [plans, setPlans] = useState<LessonPlan[]>(defaultPlans);`
);

code = code.replace(
  'if (stored) {\n      setPlans(JSON.parse(stored));\n    }',
  `if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0) {
        setPlans(parsed);
      }
    }`
);

code = code.replace(
  'const [assessments, setAssessments] = useState<WizardAssessment[]>([]);',
  `const defaultAssessments: WizardAssessment[] = ${JSON.stringify(mockAssessments, null, 2)};\n  const [assessments, setAssessments] = useState<WizardAssessment[]>(defaultAssessments);`
);

code = code.replace(
  'if (stored) {\n      setAssessments(JSON.parse(stored));\n    }',
  `if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.length > 0) {
        setAssessments(parsed);
      }
    }`
);

fs.writeFileSync('src/features/planning/useWizardStorage.ts', code);
