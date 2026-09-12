const fs = require('fs');

const grade8Maps = `
  {
    id: "g8-math-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Mathematics",
    subject: "Mathematics",
    essentialKnowledge: [
      "Linear equations in one variable",
      "Understanding quadrilaterals",
      "Data handling and probability"
    ],
    keyConcepts: ["Algebraic Expressions", "Geometry", "Probability"],
    vocabulary: ["Equation", "Variable", "Quadrilateral", "Probability", "Frequency"],
    subjectPractices: ["Problem Solving", "Mathematical Modeling", "Logical Reasoning"],
    curricularGoal: "Develop advanced algebraic and geometric reasoning skills.",
    competency: "Formulate and solve linear equations to model real-world scenarios.",
    learningOutcome: "Students can translate word problems into linear equations and solve them with 90% accuracy.",
    primarySkill: "Algebraic formulation: Translates verbal statements into mathematical equations.",
    supportingSkills: ["Calculation", "Verification", "Data analysis"],
    pedagogy: ["Guided Practice", "Peer Instruction"],
    activityIds: [],
    evidence: ["Worksheets", "Quizzes"],
    assessmentIds: [],
    inclusion: ["Visual aids for geometry", "Step-by-step guides for algebra"],
    resourceIds: [],
    sourceType: "subjects2skills-interpretation",
    status: "published",
    progression: {
      priorGrade: "Grade 7: Simple equations",
      nextGrade: "Grade 9: Linear equations in two variables",
      notes: "Builds abstract reasoning by moving from arithmetic to algebraic generalization."
    }
  },
  {
    id: "g8-sci-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Science",
    subject: "Science",
    essentialKnowledge: [
      "Microorganisms: Friend and Foe",
      "Force and Pressure",
      "Chemical Effects of Electric Current"
    ],
    keyConcepts: ["Microbiology", "Physics (Mechanics)", "Electrochemistry"],
    vocabulary: ["Pathogen", "Friction", "Pressure", "Electrolysis", "Electroplating"],
    subjectPractices: ["Experimentation", "Hypothesis Testing", "Observation"],
    curricularGoal: "Understand fundamental physical and biological phenomena.",
    competency: "Investigate and explain the effects of force and pressure in everyday life.",
    learningOutcome: "Students can demonstrate how pressure varies with area using physical models.",
    primarySkill: "Scientific investigation: Designs experiments to test relationships between variables.",
    supportingSkills: ["Data recording", "Measurement", "Safety protocols"],
    pedagogy: ["Inquiry-Based Learning", "Lab Demonstrations"],
    activityIds: [],
    evidence: ["Lab reports", "Project presentations"],
    assessmentIds: [],
    inclusion: ["Hands-on materials", "Clear visual instructions"],
    resourceIds: [],
    sourceType: "subjects2skills-interpretation",
    status: "published",
    progression: {
      priorGrade: "Grade 7: Motion and time",
      nextGrade: "Grade 9: Laws of motion",
      notes: "Introduces vector-like properties of force and the concept of pressure as force over area."
    }
  },
  {
    id: "g8-eng-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Language",
    subject: "English",
    essentialKnowledge: [
      "Reading comprehension of complex texts",
      "Persuasive and analytical writing",
      "Advanced grammar (Active/Passive voice, direct/indirect speech)"
    ],
    keyConcepts: ["Text Analysis", "Argumentation", "Grammar Mechanics"],
    vocabulary: ["Thesis", "Evidence", "Transition", "Passive Voice", "Metaphor"],
    subjectPractices: ["Critical Reading", "Drafting", "Peer Review"],
    curricularGoal: "Enhance critical reading and structured writing abilities.",
    competency: "Analyze literary texts and write cohesive persuasive essays.",
    learningOutcome: "Students can write a 3-paragraph persuasive essay using clear arguments and evidence.",
    primarySkill: "Persuasive writing: Constructs logical arguments supported by textual evidence.",
    supportingSkills: ["Reading comprehension", "Synthesizing information", "Editing"],
    pedagogy: ["Socratic Seminar", "Writer's Workshop"],
    activityIds: [],
    evidence: ["Essays", "Debate notes"],
    assessmentIds: [],
    inclusion: ["Graphic organizers for essays", "Audiobooks"],
    resourceIds: [],
    sourceType: "subjects2skills-interpretation",
    status: "published",
    progression: {
      priorGrade: "Grade 7: Descriptive and narrative writing",
      nextGrade: "Grade 9: Advanced analytical essays",
      notes: "Shifts focus from narrative to structured argumentation and rhetorical devices."
    }
  },
  {
    id: "g8-ss-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Social Science",
    subject: "Social Science",
    essentialKnowledge: [
      "The Indian Constitution",
      "Resources and Development",
      "History of Modern India"
    ],
    keyConcepts: ["Democracy", "Sustainable Development", "Colonialism"],
    vocabulary: ["Constitution", "Secularism", "Renewable", "Imperialism", "Revolt"],
    subjectPractices: ["Historical Inquiry", "Map Reading", "Civic Discourse"],
    curricularGoal: "Understand civic structures and historical contexts shaping modern society.",
    competency: "Explain the key features of the Indian Constitution and its significance.",
    learningOutcome: "Students can identify and explain fundamental rights using real-world examples.",
    primarySkill: "Civic literacy: Analyzes constitutional principles in contemporary contexts.",
    supportingSkills: ["Critical thinking", "Debate", "Source analysis"],
    pedagogy: ["Role Play", "Case Studies"],
    activityIds: [],
    evidence: ["Presentations", "Case study responses"],
    assessmentIds: [],
    inclusion: ["Simplified text summaries", "Visual timelines"],
    resourceIds: [],
    sourceType: "subjects2skills-interpretation",
    status: "published",
    progression: {
      priorGrade: "Grade 7: State government",
      nextGrade: "Grade 9: Democratic rights and electoral politics",
      notes: "Moves from state-level understanding to national constitutional frameworks."
    }
  },
  {
    id: "g8-sl-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Language",
    subject: "Second Language",
    essentialKnowledge: [
      "Expanded vocabulary and idioms",
      "Reading intermediate short stories",
      "Conversational fluency in daily contexts"
    ],
    keyConcepts: ["Language Acquisition", "Cultural Context", "Communication"],
    vocabulary: ["Idioms", "Conjunctions", "Tenses", "Dialogue", "Expression"],
    subjectPractices: ["Listening Comprehension", "Speaking", "Reading", "Writing"],
    curricularGoal: "Develop functional fluency and cultural appreciation in a second language.",
    competency: "Engage in sustained conversations on familiar topics.",
    learningOutcome: "Students can converse for 2-3 minutes using correct tense and relevant vocabulary.",
    primarySkill: "Conversational fluency: Uses language fluidly to express ideas in real-time.",
    supportingSkills: ["Pronunciation", "Active listening", "Cultural empathy"],
    pedagogy: ["Language Games", "Conversational Pairs"],
    activityIds: [],
    evidence: ["Audio recordings", "Role-play rubrics"],
    assessmentIds: [],
    inclusion: ["Visual vocabulary cards", "Subtitled videos"],
    resourceIds: [],
    sourceType: "subjects2skills-interpretation",
    status: "published",
    progression: {
      priorGrade: "Grade 7: Basic sentence structures",
      nextGrade: "Grade 9: Advanced comprehension and essays",
      notes: "Bridges basic grammar with practical, real-world conversational skills."
    }
  }
];
`;

let code = fs.readFileSync('src/data/subjectMaps.ts', 'utf8');
code = code.replace(
  '];',
  grade8Maps + '\n];'
);
fs.writeFileSync('src/data/subjectMaps.ts', code);
