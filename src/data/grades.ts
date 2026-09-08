import { GradeProfile } from '@/types';

export const gradesData: (GradeProfile & { 
  name: string; 
  bringFromPrevious: string; 
  readyForNext: string; 
  flagshipProject?: { title: string; description: string };
})[] = [
  // ================= FOUNDATIONAL STAGE (Ages 3–8) =================
  {
    id: "pre-school",
    slug: "preschool",
    stage: "Foundational",
    stageId: "foundational",
    grade: "Pre-school",
    name: "Pre-school",
    ageRange: "3–6",
    developmentalFocus: [
      "Physical and gross motor coordination",
      "Oral language, rhythm and story comprehension",
      "Socio-emotional habits and sensory exploration"
    ],
    learningPurpose: "Builds language, movement, curiosity, expression and foundational early-learning habits through play.",
    prioritySkills: [
      "Oral communication",
      "Sensory observation",
      "Gross and fine motor control",
      "Creative expression",
      "Emotional self-regulation"
    ],
    pedagogy: [
      "Play",
      "Stories",
      "Movement",
      "Art",
      "Exploration",
      "Conversation",
      "Guided activity"
    ],
    intendedLearningAreas: [
      "Physical Development & Motor Play",
      "Socio-Emotional & Ethical Habits",
      "Cognitive Exploration & Sensory Math",
      "Language & Emergent Literacy",
      "Aesthetic & Cultural Expression"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/foundational",
    nextGrade: "grade-1",
    previousGradeBridge: [],
    nextGradeBridge: [
      "Familiarity with listening protocols and group circle time",
      "Basic oral vocabulary and symbol recognition readiness"
    ],
    bringFromPrevious: "Home language foundation and sensory curiosity.",
    readyForNext: "Readiness for structured early classroom routines and interactive games.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },
  {
    id: "grade-1",
    slug: "1",
    stage: "Foundational",
    stageId: "foundational",
    grade: "Grade 1",
    name: "Grade 1",
    ageRange: "6–7",
    developmentalFocus: [
      "Foundational literacy and phonemic awareness",
      "Number sense and concrete counting up to 20",
      "Curiosity about immediate natural and social environment"
    ],
    learningPurpose: "Transitions into early formal learning through listening, speaking, reading, counting and sensory exploration.",
    prioritySkills: [
      "Phonological awareness",
      "Number recognition and counting",
      "Guided observation",
      "Fine motor coordination",
      "Collaborative play habits"
    ],
    pedagogy: [
      "Play",
      "Stories",
      "Movement",
      "Art",
      "Exploration",
      "Conversation",
      "Guided activity"
    ],
    intendedLearningAreas: [
      "Language 1 (Foundational Literacy)",
      "Mathematics (Number Sense & Shapes)",
      "The World Around Us (Direct Observation)",
      "Art Education (Drawing & Movement)",
      "Physical Well-being & Hygiene"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/foundational",
    previousGrade: "pre-school",
    nextGrade: "grade-2",
    previousGradeBridge: [
      "Emergent oral language and story listening habits",
      "Gross and fine motor coordination with classroom materials"
    ],
    nextGradeBridge: [
      "Reading simple decodable sentences independently",
      "Performing basic addition and subtraction with concrete objects"
    ],
    bringFromPrevious: "Pre-school story familiarity and fine-motor coordination.",
    readyForNext: "Independent phonics decoding and basic addition with counters.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },
  {
    id: "grade-2",
    slug: "2",
    stage: "Foundational",
    stageId: "foundational",
    grade: "Grade 2",
    name: "Grade 2",
    ageRange: "7–8",
    developmentalFocus: [
      "Reading fluency and short paragraph comprehension",
      "Early two-digit operations, patterns and measurements",
      "Expressive drawing and conversational inquiry"
    ],
    learningPurpose: "Consolidates early literacy, foundational mathematical thinking, collaborative habits and joyful inquiry.",
    prioritySkills: [
      "Reading fluency",
      "Early mathematical reasoning",
      "Verbal communication",
      "Pattern identification",
      "Curious questioning"
    ],
    pedagogy: [
      "Play",
      "Stories",
      "Movement",
      "Art",
      "Exploration",
      "Conversation",
      "Guided activity"
    ],
    intendedLearningAreas: [
      "Language 1 & 2 (Reading Fluency & Vocabulary)",
      "Mathematics (Place Value, Addition, Shapes)",
      "The World Around Us (Living & Non-Living Things)",
      "Art & Craft (Creative Assembly)",
      "Physical Education & Games"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/foundational",
    previousGrade: "grade-1",
    nextGrade: "grade-3",
    previousGradeBridge: [
      "Phonological decoding and single-digit counting",
      "Listening and speaking in guided peer circles"
    ],
    nextGradeBridge: [
      "Transition from learning-to-read to reading-to-learn",
      "Ability to record structured observations and tally counts"
    ],
    bringFromPrevious: "Foundational literacy and basic number recognition.",
    readyForNext: "Readiness for independent reading and early data collection in Grade 3.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },

  // ================= PREPARATORY STAGE (Ages 8–11) =================
  {
    id: "grade-3",
    slug: "3",
    stage: "Preparatory",
    stageId: "preparatory",
    grade: "Grade 3",
    name: "Grade 3",
    ageRange: "8–9",
    developmentalFocus: [
      "Transition from 'learning to read' to 'reading to learn'",
      "Systematic observation of local environment and living things",
      "Early data representation using tallies, pictographs and tables"
    ],
    learningPurpose: "Strengthens language, numeracy, observation, early data use and independent classroom participation.",
    prioritySkills: [
      "Categorical observation",
      "Visual data representation",
      "Reading comprehension",
      "Structured collaboration",
      "Basic computational sequencing"
    ],
    pedagogy: [
      "Activity",
      "Discovery",
      "Discussion",
      "Concrete-to-abstract learning",
      "Guided inquiry",
      "Collaboration"
    ],
    intendedLearningAreas: [
      "Language 1 & 2 (Comprehension & Expression)",
      "Mathematics (Multiplication Concepts, Fractions, Data Handling)",
      "Environmental Studies (EVS — Nature, Family, Neighbourhood)",
      "Art Education (Visual Arts & Clay Work)",
      "Physical Education & Yoga"
    ],
    status: "in-development",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/preparatory",
    previousGrade: "grade-2",
    nextGrade: "grade-4",
    previousGradeBridge: [
      "Foundational reading fluency and basic number bonds",
      "Comfort with classroom peer conversation"
    ],
    nextGradeBridge: [
      "Guided inquiry and multi-step investigation",
      "Application of measurement and spatial concepts"
    ],
    bringFromPrevious: "Basic sentence reading and two-digit number familiarity.",
    readyForNext: "Readiness for collaborative multi-day investigations.",
    currentFocus: "Preparatory-stage learning maps, early data literacy and classroom activities.",
    nextMilestone: "Teacher Pilot Verification (v0.3)",
    reviewStatus: "In Development / Teacher Pilot",
    feedbackEnabled: true,
    isFlagship: true,
    flagshipProject: {
      title: "My Neighbourhood Data Walk",
      description: "Students observe their immediate neighbourhood, gather structured categorical data, tally frequencies, and present their findings in a simple pictorial graph."
    }
  },
  {
    id: "grade-4",
    slug: "4",
    stage: "Preparatory",
    stageId: "preparatory",
    grade: "Grade 4",
    name: "Grade 4",
    ageRange: "9–10",
    developmentalFocus: [
      "Concrete-to-abstract conceptual reasoning in mathematics",
      "Collaborative project execution and guided inquiry",
      "Expanded writing across informational and narrative formats"
    ],
    learningPurpose: "Expands reading fluency, concrete-to-abstract thinking, active inquiry and cooperative project work.",
    prioritySkills: [
      "Guided inquiry",
      "Measurement and estimation",
      "Informational writing",
      "Cooperative problem-solving",
      "Spatial visualization"
    ],
    pedagogy: [
      "Activity",
      "Discovery",
      "Discussion",
      "Concrete-to-abstract learning",
      "Guided inquiry",
      "Collaboration"
    ],
    intendedLearningAreas: [
      "Languages & Communication",
      "Mathematics & Measurement",
      "Environmental Studies & Local Community",
      "Creative Arts & Performance",
      "Physical Education & Team Sports"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/preparatory",
    previousGrade: "grade-3",
    nextGrade: "grade-5",
    previousGradeBridge: [
      "Tally counts and simple pictographs",
      "Paragraph reading and observational journaling"
    ],
    nextGradeBridge: [
      "Independent study habits and multi-source research",
      "Abstract problem-solving with fractions and basic decimals"
    ],
    bringFromPrevious: "Neighbourhood observation skills and basic data tallies.",
    readyForNext: "Abstract problem-solving and independent investigative reports.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },
  {
    id: "grade-5",
    slug: "5",
    stage: "Preparatory",
    stageId: "preparatory",
    grade: "Grade 5",
    name: "Grade 5",
    ageRange: "10–11",
    developmentalFocus: [
      "Preparation for middle-stage subject specialization",
      "Abstract mathematical operations and logical deduction",
      "Critical reading, digital safety awareness and peer collaboration"
    ],
    learningPurpose: "Prepares learners for middle-stage transitions through structured reasoning, writing, observation and scientific inquiry.",
    prioritySkills: [
      "Evidence-based explanation",
      "Multi-step problem solving",
      "Digital safety awareness",
      "Structured writing",
      "Peer collaboration"
    ],
    pedagogy: [
      "Activity",
      "Discovery",
      "Discussion",
      "Concrete-to-abstract learning",
      "Guided inquiry",
      "Collaboration"
    ],
    intendedLearningAreas: [
      "Languages & Structured Composition",
      "Mathematics (Decimals, Area, Data Handling)",
      "Environmental Studies & Science Foundations",
      "Vocational Exposure & Traditional Crafts",
      "Physical Education & Health Habits"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/preparatory",
    previousGrade: "grade-4",
    nextGrade: "grade-6",
    previousGradeBridge: [
      "Cooperative project work and measurement skills",
      "Informational reading across content domains"
    ],
    nextGradeBridge: [
      "Transition to distinct subject teachers and lab sciences",
      "Disciplinary inquiry and vocational craft exposure"
    ],
    bringFromPrevious: "Measurement competence and collaborative inquiry habits.",
    readyForNext: "Readiness for Middle Stage subject-based learning and lab science.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },

  // ================= MIDDLE STAGE (Ages 11–14) =================
  {
    id: "grade-6",
    slug: "6",
    stage: "Middle",
    stageId: "middle",
    grade: "Grade 6",
    name: "Grade 6",
    ageRange: "11–12",
    developmentalFocus: [
      "Transition from integrated EVS to separate Science and Social Science disciplines",
      "Hands-on scientific experimentation and variable control",
      "Vocational crafts exposure (10 bagless days) and design challenges"
    ],
    learningPurpose: "Supports the transition to subject-based learning through inquiry, discussion, making and structured collaboration.",
    prioritySkills: [
      "Controlled experimentation",
      "Cross-subject concept mapping",
      "Primary source historical analysis",
      "Vocational design thinking",
      "Scientific argumentation"
    ],
    pedagogy: [
      "Inquiry",
      "Experimentation",
      "Fieldwork",
      "Projects",
      "Debate",
      "Making",
      "Design challenges"
    ],
    intendedLearningAreas: [
      "Languages (R1, R2, R3)",
      "Mathematics (Ratio, Algebra, Geometry)",
      "Science (Inquiry, Physics, Chemistry, Biology Foundations)",
      "Social Science (History, Geography, Social & Political Life)",
      "Vocational & Life Skills (Woodcraft, Textiles, Agriculture)",
      "Art & Physical Education"
    ],
    status: "in-development",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/middle",
    previousGrade: "grade-5",
    nextGrade: "grade-7",
    previousGradeBridge: [
      "Preparatory-stage observation and descriptive writing",
      "Arithmetic fluency and fraction concepts"
    ],
    nextGradeBridge: [
      "Evidence-based inquiry with quantitative datasets",
      "Analytical argument writing and peer debates"
    ],
    bringFromPrevious: "Descriptive EVS inquiry and cooperative group work habits.",
    readyForNext: "Rigorous scientific hypothesis testing and data verification.",
    currentFocus: "Middle-stage transition, inquiry learning, subject connections and vocational exposure.",
    nextMilestone: "Teacher Pilot Verification (v0.3)",
    reviewStatus: "In Development / Teacher Pilot",
    feedbackEnabled: true,
    isFlagship: true,
    flagshipProject: {
      title: "Community Problem Explorer & Maker Challenge",
      description: "Students identify an environmental or resource challenge in the school neighbourhood, conduct root-cause analysis, and build a prototype solution."
    }
  },
  {
    id: "grade-7",
    slug: "7",
    stage: "Middle",
    stageId: "middle",
    grade: "Grade 7",
    name: "Grade 7",
    ageRange: "12–13",
    developmentalFocus: [
      "Quantitative data analysis and statistical reasoning",
      "Scientific modelling of physical and biological systems",
      "Debate, civic understanding and environmental auditing"
    ],
    learningPurpose: "Develops evidence-based reasoning, data literacy, scientific inquiry and communication.",
    prioritySkills: [
      "Data literacy and interpretation",
      "Hypothesis testing and measurement precision",
      "Constructive debate and rhetorical balance",
      "Civic and environmental auditing",
      "Scientific communication"
    ],
    pedagogy: [
      "Inquiry",
      "Experimentation",
      "Fieldwork",
      "Projects",
      "Debate",
      "Making",
      "Design challenges"
    ],
    intendedLearningAreas: [
      "Languages (Literature & Persuasive Writing)",
      "Mathematics (Integers, Equations, Data Handling)",
      "Science (Acids & Bases, Heat, Respiration, Motion)",
      "Social Science (Medieval History, Earth Systems, Democracy)",
      "Vocational & Digital Skills",
      "Art & Physical Education"
    ],
    status: "in-development",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/middle",
    previousGrade: "grade-6",
    nextGrade: "grade-8",
    previousGradeBridge: [
      "Disciplinary subject navigation and controlled experiment basics",
      "Historical source analysis and early vocational exposure"
    ],
    nextGradeBridge: [
      "Computational thinking, AI literacy and algorithmic design",
      "Interdisciplinary systems thinking and ethical analysis"
    ],
    bringFromPrevious: "Controlled experiment experience and basic algebraic foundations.",
    readyForNext: "Complex algorithmic modeling, computational thinking and AI ethics.",
    currentFocus: "Evidence-based inquiry, data literacy, practical science and visual activity support.",
    nextMilestone: "Teacher Pilot Verification (v0.3)",
    reviewStatus: "In Development / Teacher Pilot",
    feedbackEnabled: true,
    isFlagship: true,
    flagshipProject: {
      title: "School Water & Energy Audit Challenge",
      description: "Students collect empirical consumption data across campus, formulate conservation targets, and design mechanical or biological filtration models."
    }
  },
  {
    id: "grade-8",
    slug: "8",
    stage: "Middle",
    stageId: "middle",
    grade: "Grade 8",
    name: "Grade 8",
    ageRange: "13–14",
    developmentalFocus: [
      "Computational thinking, algorithmic bias and responsible AI awareness",
      "Interdisciplinary design challenges combining STEM and humanities",
      "Constitutional values, human rights and resource stewardship"
    ],
    learningPurpose: "Builds computational thinking, responsible AI awareness, design thinking and interdisciplinary problem-solving.",
    prioritySkills: [
      "Computational thinking and algorithmic logic",
      "Responsible AI & ethics evaluation",
      "Design thinking and rapid prototyping",
      "Interdisciplinary problem synthesis",
      "Evidence-backed policy critique"
    ],
    pedagogy: [
      "Inquiry",
      "Experimentation",
      "Fieldwork",
      "Projects",
      "Debate",
      "Making",
      "Design challenges"
    ],
    intendedLearningAreas: [
      "Languages (Critical Discourse & Analytical Composition)",
      "Mathematics (Linear Equations, Mensuration, Factorisation)",
      "Science (Force, Pressure, Combustion, Microorganisms)",
      "Social Science (Modern History, Judiciary, Resource Geography)",
      "Computational Thinking, AI Literacy & Coding",
      "Vocational Arts & Technology"
    ],
    status: "in-development",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/middle",
    previousGrade: "grade-7",
    nextGrade: "grade-9",
    previousGradeBridge: [
      "Quantitative data analysis and experimental design",
      "Civic reasoning and environmental auditing"
    ],
    nextGradeBridge: [
      "Secondary stage academic rigor and disciplinary specialization",
      "Independent secondary research and formal policy brief drafting"
    ],
    bringFromPrevious: "Data analysis skills and scientific inquiry protocols.",
    readyForNext: "Secondary disciplinary depth, formal rhetoric and research methodology.",
    currentFocus: "Computational thinking, AI literacy, ethics, privacy, design thinking and interdisciplinary projects.",
    nextMilestone: "Teacher Pilot Verification (v0.3)",
    reviewStatus: "In Development / Teacher Pilot",
    feedbackEnabled: true,
    isFlagship: true,
    flagshipProject: {
      title: "Ethical AI for School Life Challenge",
      description: "Students design a conceptual AI solution to improve a school process, addressing algorithmic bias, privacy, and user consent."
    }
  },

  // ================= SECONDARY STAGE (Ages 14–18) =================
  {
    id: "grade-9",
    slug: "9",
    stage: "Secondary",
    stageId: "secondary",
    grade: "Grade 9",
    name: "Grade 9",
    ageRange: "14–15",
    developmentalFocus: [
      "Disciplinary depth and rigorous theoretical conceptualization",
      "Evidence-based argumentation across sciences, social sciences and languages",
      "Responsible technology use, ethical research and secondary data synthesis"
    ],
    learningPurpose: "Strengthens disciplinary reasoning, research, argumentation and application across subject areas.",
    prioritySkills: [
      "Disciplinary reasoning and formal rhetoric",
      "Primary and secondary research synthesis",
      "Mathematical modeling and proof logic",
      "Empirical scientific lab protocol execution",
      "Responsible digital and AI literacy"
    ],
    pedagogy: [
      "Disciplinary depth",
      "Analysis",
      "Research",
      "Application",
      "Portfolio development",
      "Career-linked learning"
    ],
    intendedLearningAreas: [
      "Language 1 & 2 (Rhetoric & Literary Analysis)",
      "Mathematics (Number Systems, Polynomials, Coordinate Geometry)",
      "Science (Motion, Atoms, Cell Biology, Gravitation)",
      "Social Science (Democratic Politics, Contemporary India, Economics)",
      "Vocational / Skill Elective & Digital Citizenship",
      "Art & Physical Education"
    ],
    status: "in-development",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/secondary",
    previousGrade: "grade-8",
    nextGrade: "grade-10",
    previousGradeBridge: [
      "Computational thinking and design challenge experience",
      "Quantitative inquiry and algebraic foundations"
    ],
    nextGradeBridge: [
      "Board curriculum consolidation and multidisciplinary synthesis",
      "Career and stream pathway exploration"
    ],
    bringFromPrevious: "Computational logic, scientific inquiry and design methodology.",
    readyForNext: "Board-level conceptual synthesis and multi-source academic writing.",
    currentFocus: "Subject-specific reasoning, research, argumentation and responsible technology use.",
    nextMilestone: "Teacher Pilot Verification (v0.3)",
    reviewStatus: "In Development / Teacher Pilot",
    feedbackEnabled: true,
    isFlagship: true,
    flagshipProject: {
      title: "Evidence-Based Local Policy Brief",
      description: "Students conduct secondary literature research on a local civic or ecological issue and draft a formal policy proposal supported by quantitative evidence."
    }
  },
  {
    id: "grade-10",
    slug: "10",
    stage: "Secondary",
    stageId: "secondary",
    grade: "Grade 10",
    name: "Grade 10",
    ageRange: "15–16",
    developmentalFocus: [
      "Multidisciplinary concept consolidation and board curriculum readiness",
      "Critical media evaluation, statistical modeling and self-directed study",
      "Informed career stream exploration and portfolio compilation"
    ],
    learningPurpose: "Consolidates multidisciplinary concepts, board curriculum readiness, critical analysis and self-directed study.",
    prioritySkills: [
      "Statistical modeling and data interpretation",
      "Critical media literacy and bias evaluation",
      "Advanced argumentative essay composition",
      "Scientific lab analysis and chemical stoichiometry",
      "Career self-assessment and pathway planning"
    ],
    pedagogy: [
      "Disciplinary depth",
      "Analysis",
      "Research",
      "Application",
      "Portfolio development",
      "Career-linked learning"
    ],
    intendedLearningAreas: [
      "Languages (Advanced Critical Composition)",
      "Mathematics (Trigonometry, Statistics, Quadratic Equations)",
      "Science (Chemical Reactions, Heredity, Light, Electricity)",
      "Social Science (Global World, Federalism, Globalization)",
      "Vocational & Applied Technology Skills",
      "Health & Physical Well-being"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/secondary",
    previousGrade: "grade-9",
    nextGrade: "grade-11",
    previousGradeBridge: [
      "Formal rhetoric and scientific proof methodology",
      "Secondary research and policy drafting"
    ],
    nextGradeBridge: [
      "Specialized discipline stream selection (Grades 11–12)",
      "Advanced research aptitude and academic independence"
    ],
    bringFromPrevious: "Disciplinary reasoning and evidence-based writing.",
    readyForNext: "Specialized academic discipline selection and in-depth seminar inquiry.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },
  {
    id: "grade-11",
    slug: "11",
    stage: "Secondary",
    stageId: "secondary",
    grade: "Grade 11",
    name: "Grade 11",
    ageRange: "16–17",
    developmentalFocus: [
      "Specialized disciplinary stream exploration across multiple choice groups",
      "Rigorous academic research methodology and primary source investigation",
      "Ethical reasoning, academic integrity and career mentorship"
    ],
    learningPurpose: "Deepens specialized disciplinary study, research aptitude, ethical reasoning and academic exploration.",
    prioritySkills: [
      "Academic research methodology",
      "Disciplinary synthesis and theoretical modeling",
      "Ethical and epistemological reasoning",
      "Independent project management",
      "Peer review and academic seminar discussion"
    ],
    pedagogy: [
      "Disciplinary depth",
      "Analysis",
      "Research",
      "Application",
      "Portfolio development",
      "Career-linked learning"
    ],
    intendedLearningAreas: [
      "Disciplinary Stream Domain 1 (e.g. Sciences / Humanities / Commerce)",
      "Disciplinary Stream Domain 2",
      "Disciplinary Stream Domain 3",
      "Disciplinary Stream Domain 4",
      "Language & Advanced Communication",
      "Interdisciplinary Project & Vocational Internship"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/secondary",
    previousGrade: "grade-10",
    nextGrade: "grade-12",
    previousGradeBridge: [
      "Comprehensive secondary conceptual foundation",
      "Self-directed study and statistical modeling skills"
    ],
    nextGradeBridge: [
      "Culminating capstone portfolio and higher education readiness",
      "Vocational certification or undergraduate pathway entry"
    ],
    bringFromPrevious: "Board curriculum consolidation and stream choices.",
    readyForNext: "Final year capstone research and professional presentation.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  },
  {
    id: "grade-12",
    slug: "12",
    stage: "Secondary",
    stageId: "secondary",
    grade: "Grade 12",
    name: "Grade 12",
    ageRange: "17–18",
    developmentalFocus: [
      "Culminating disciplinary synthesis and capstone presentation",
      "Independent academic inquiry, thesis defense and portfolio exhibition",
      "Transition readiness for higher education, vocational professions and civic life"
    ],
    learningPurpose: "Synthesizes advanced disciplinary knowledge, portfolio building, independent inquiry and higher-education readiness.",
    prioritySkills: [
      "Advanced disciplinary synthesis",
      "Capstone portfolio exhibition",
      "Professional oral and written defense",
      "Real-world problem-solving and ethical citizenship",
      "Career and higher-education readiness"
    ],
    pedagogy: [
      "Disciplinary depth",
      "Analysis",
      "Research",
      "Application",
      "Portfolio development",
      "Career-linked learning"
    ],
    intendedLearningAreas: [
      "Specialized Disciplinary Major 1",
      "Specialized Disciplinary Major 2",
      "Specialized Disciplinary Major 3",
      "Specialized Disciplinary Major 4",
      "Advanced Academic & Professional Communication",
      "Capstone Portfolio & Real-World Application"
    ],
    status: "planned",
    cbseSubjects: ["Mathematics", "Science", "Social Science", "English", "Hindi"],
    ncrtBooks: [
      { subject: "Mathematics", title: "NCERT Mathematics", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Science", title: "NCERT Science", url: "https://ncert.nic.in/textbook.php" },
      { subject: "Social Science", title: "NCERT Social Science", url: "https://ncert.nic.in/textbook.php" }
    ],
    lastUpdated: "2025-09",
    sources: ["CBSE Curriculum 2025–26", "NCERT Textbooks 2025–26", "NCF 2023 – Competency Framework"],
    stageRoute: "/stage/secondary",
    previousGrade: "grade-11",
    previousGradeBridge: [
      "Specialized academic stream coursework and seminar skills",
      "Independent research methodology"
    ],
    nextGradeBridge: [
      "Higher education undergraduate studies",
      "Vocational careers, technical training and civic leadership"
    ],
    bringFromPrevious: "Specialized disciplinary depth and academic seminar experience.",
    readyForNext: "Higher education, professional careers and civic leadership.",
    currentFocus: "Grade-level structure and framework alignment in development.",
    nextMilestone: "v0.4 Curriculum Scoping",
    reviewStatus: "Queued for Development",
    feedbackEnabled: true
  }
];
