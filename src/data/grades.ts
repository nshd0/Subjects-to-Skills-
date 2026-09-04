import { GradeProfile } from '@/types';

export const gradesData: (GradeProfile & { name: string; bringFromPrevious: string; readyForNext: string; recommendedPedagogy: string[]; flagshipProject?: any })[] = [
  {
    "id": "pre-school",
    "stage": "Foundational",
    "stageId": "foundational",
    "grade": "Pre-school",
    "name": "Pre-school",
    "ageRange": "3-6 years",
    "developmentalFocus": [
      "Play-based learning",
      "Language acquisition",
      "Motor skills"
    ],
    "learningPurpose": "To build a strong foundation in language, motor skills, and social-emotional development.",
    "prioritySkills": [
      "Communication",
      "Motor coordination",
      "Curiosity"
    ],
    "pedagogy": [
      "Play-based",
      "Activity-based",
      "Interactive"
    ],
    "recommendedPedagogy": [
      "Play-based",
      "Activity-based",
      "Interactive"
    ],
    "previousGradeBridge": [],
    "nextGradeBridge": [
      "Readiness for structured learning",
      "Basic vocabulary"
    ],
    "bringFromPrevious": "N/A",
    "readyForNext": "Readiness for structured learning and basic vocabulary.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true
  },
  {
    "id": "grade-1",
    "stage": "Foundational",
    "stageId": "foundational",
    "grade": "Grade 1",
    "name": "Grade 1",
    "ageRange": "6-7 years",
    "developmentalFocus": [
      "Foundational literacy",
      "Numeracy concepts",
      "Social skills"
    ],
    "learningPurpose": "To transition into early formal learning with a focus on literacy and numeracy.",
    "prioritySkills": [
      "Early reading",
      "Basic counting",
      "Observation"
    ],
    "pedagogy": [
      "Activity-based",
      "Discovery",
      "Multisensory"
    ],
    "recommendedPedagogy": [
      "Activity-based",
      "Discovery",
      "Multisensory"
    ],
    "previousGradeBridge": [
      "Basic vocabulary",
      "Motor coordination"
    ],
    "nextGradeBridge": [
      "Reading simple sentences",
      "Basic addition/subtraction"
    ],
    "bringFromPrevious": "Basic vocabulary and motor coordination.",
    "readyForNext": "Reading simple sentences and basic arithmetic.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true
  },
  {
    "id": "grade-2",
    "stage": "Foundational",
    "stageId": "foundational",
    "grade": "Grade 2",
    "name": "Grade 2",
    "ageRange": "7-8 years",
    "developmentalFocus": [
      "Fluency in reading",
      "Early logical reasoning",
      "Creative expression"
    ],
    "learningPurpose": "To consolidate foundational skills before transitioning to more formal learning.",
    "prioritySkills": [
      "Early reasoning",
      "Fine and gross motor coordination",
      "Expression"
    ],
    "pedagogy": [
      "Activity",
      "Exploration",
      "Art integration"
    ],
    "recommendedPedagogy": [
      "Activity",
      "Exploration",
      "Art integration"
    ],
    "previousGradeBridge": [
      "Reading simple sentences",
      "Basic arithmetic"
    ],
    "nextGradeBridge": [
      "Independent reading",
      "Problem-solving"
    ],
    "bringFromPrevious": "Familiarity with alphabet and numbers up to 100.",
    "readyForNext": "Readiness for independent reading and problem-solving.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true
  },
  {
    "id": "grade-3",
    "stage": "Preparatory",
    "stageId": "preparatory",
    "grade": "Grade 3",
    "name": "Grade 3",
    "ageRange": "8-9 years",
    "developmentalFocus": [
      "Concept formation",
      "Environmental awareness",
      "Language development",
      "Mathematics reasoning"
    ],
    "learningPurpose": "To transition from learning to read, to reading to learn.",
    "prioritySkills": [
      "Reading comprehension",
      "Writing",
      "Inquiry",
      "Collaboration",
      "Environmental awareness"
    ],
    "pedagogy": [
      "Activity",
      "Discovery",
      "Discussion",
      "Concrete-to-abstract learning"
    ],
    "recommendedPedagogy": [
      "Activity",
      "Discovery",
      "Discussion",
      "Concrete-to-abstract learning"
    ],
    "previousGradeBridge": [
      "Foundational literacy",
      "Basic numeracy"
    ],
    "nextGradeBridge": [
      "Guided inquiry",
      "Application of concepts"
    ],
    "bringFromPrevious": "Foundational literacy and numeracy.",
    "readyForNext": "Ability to conduct basic guided inquiry.",
    "status": "in-development",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "My Neighbourhood Data Walk",
      "description": "Students explore their local neighbourhood to collect basic data (e.g., types of trees, number of shops) and present it visually."
    }
  },
  {
    "id": "grade-4",
    "stage": "Preparatory",
    "stageId": "preparatory",
    "grade": "Grade 4",
    "name": "Grade 4",
    "ageRange": "9-10 years",
    "developmentalFocus": [
      "Application of concepts",
      "Collaborative learning"
    ],
    "learningPurpose": "To deepen understanding of the world around us through collaborative projects.",
    "prioritySkills": [
      "Numeracy",
      "Measurement",
      "Communication",
      "Creativity"
    ],
    "pedagogy": [
      "Guided inquiry",
      "Collaborative learning",
      "Project-based tasks"
    ],
    "recommendedPedagogy": [
      "Guided inquiry",
      "Collaborative learning",
      "Project-based tasks"
    ],
    "previousGradeBridge": [
      "Basic inquiry",
      "Reading comprehension"
    ],
    "nextGradeBridge": [
      "Independent work habits",
      "Abstract reasoning"
    ],
    "bringFromPrevious": "Basic inquiry and reading comprehension.",
    "readyForNext": "Ability to work independently on short tasks.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true
  },
  {
    "id": "grade-5",
    "stage": "Preparatory",
    "stageId": "preparatory",
    "grade": "Grade 5",
    "name": "Grade 5",
    "ageRange": "10-11 years",
    "developmentalFocus": [
      "Independent work habits",
      "Digital safety"
    ],
    "learningPurpose": "To prepare for the academic rigor of the middle stage.",
    "prioritySkills": [
      "Reasoning",
      "Digital safety",
      "Computational thinking",
      "Collaboration"
    ],
    "pedagogy": [
      "Discussion",
      "Independent work",
      "Discovery"
    ],
    "recommendedPedagogy": [
      "Discussion",
      "Independent work",
      "Discovery"
    ],
    "previousGradeBridge": [
      "Collaborative skills",
      "Basic concept application"
    ],
    "nextGradeBridge": [
      "Abstract reasoning",
      "Subject-specific learning"
    ],
    "bringFromPrevious": "Collaborative skills and basic concept application.",
    "readyForNext": "Readiness for abstract reasoning and subject-specific learning.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Design a Healthy School",
      "description": "Students use math, science, and art to propose improvements for a healthier school environment."
    }
  },
  {
    "id": "grade-6",
    "stage": "Middle",
    "stageId": "middle",
    "grade": "Grade 6",
    "name": "Grade 6",
    "ageRange": "11-12 years",
    "developmentalFocus": [
      "Reasoning",
      "Investigation",
      "Vocational exposure"
    ],
    "learningPurpose": "To introduce disciplinary thinking and scientific inquiry.",
    "prioritySkills": [
      "Critical thinking",
      "Scientific reasoning",
      "Data literacy",
      "Collaboration"
    ],
    "pedagogy": [
      "Inquiry",
      "Experimentation",
      "Projects",
      "Fieldwork"
    ],
    "recommendedPedagogy": [
      "Inquiry",
      "Experimentation",
      "Projects",
      "Fieldwork"
    ],
    "previousGradeBridge": [
      "Strong foundational concepts",
      "Independent work habits"
    ],
    "nextGradeBridge": [
      "Argument construction",
      "Advanced problem-solving"
    ],
    "bringFromPrevious": "Strong foundational concepts and independent work habits.",
    "readyForNext": "Ability to construct arguments based on evidence.",
    "status": "in-development",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Community Problem Explorer",
      "description": "Identify a local community issue and research its root causes across multiple subjects."
    }
  },
  {
    "id": "grade-7",
    "stage": "Middle",
    "stageId": "middle",
    "grade": "Grade 7",
    "name": "Grade 7",
    "ageRange": "12-13 years",
    "developmentalFocus": [
      "Problem-solving",
      "Data literacy",
      "Scientific reasoning"
    ],
    "learningPurpose": "To deepen analytical skills and ethical reasoning.",
    "prioritySkills": [
      "Mathematical reasoning",
      "Research",
      "Problem-solving",
      "Ethics"
    ],
    "pedagogy": [
      "Discussion",
      "Debate",
      "Making and design challenges"
    ],
    "recommendedPedagogy": [
      "Discussion",
      "Debate",
      "Making and design challenges"
    ],
    "previousGradeBridge": [
      "Basic disciplinary thinking",
      "Research skills"
    ],
    "nextGradeBridge": [
      "Complex problem-solving",
      "AI literacy"
    ],
    "bringFromPrevious": "Basic disciplinary thinking and research skills.",
    "readyForNext": "Readiness for complex problem-solving and AI literacy.",
    "status": "in-development",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Water Audit and Filtration Challenge",
      "description": "Conduct a water audit of the school/home and design a functional filtration system."
    }
  },
  {
    "id": "grade-8",
    "stage": "Middle",
    "stageId": "middle",
    "grade": "Grade 8",
    "name": "Grade 8",
    "ageRange": "13-14 years",
    "developmentalFocus": [
      "Digital literacy",
      "AI literacy",
      "Making"
    ],
    "learningPurpose": "To integrate computational thinking and advanced problem-solving into real-world contexts.",
    "prioritySkills": [
      "AI literacy",
      "Design thinking",
      "Entrepreneurship awareness",
      "Citizenship",
      "Computational thinking"
    ],
    "pedagogy": [
      "Projects",
      "Experimentation",
      "Design challenges"
    ],
    "recommendedPedagogy": [
      "Projects",
      "Experimentation",
      "Design challenges"
    ],
    "previousGradeBridge": [
      "Data literacy",
      "Basic ethical reasoning"
    ],
    "nextGradeBridge": [
      "Independent research",
      "Specialized study"
    ],
    "bringFromPrevious": "Data literacy and basic ethical reasoning.",
    "readyForNext": "Ability to undertake independent research and specialized study.",
    "status": "in-development",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "AI for a School Problem",
      "description": "Design a conceptual AI solution to improve a school process, addressing ethics and bias."
    }
  },
  {
    "id": "grade-9",
    "stage": "Secondary",
    "stageId": "secondary",
    "grade": "Grade 9",
    "name": "Grade 9",
    "ageRange": "14-15 years",
    "developmentalFocus": [
      "Analysis",
      "Specialization",
      "Independent learning"
    ],
    "learningPurpose": "To develop deep disciplinary knowledge and argumentation skills.",
    "prioritySkills": [
      "Argumentation",
      "Research",
      "Scientific inquiry",
      "Civic reasoning"
    ],
    "pedagogy": [
      "Disciplinary depth",
      "Analysis",
      "Seminars"
    ],
    "recommendedPedagogy": [
      "Disciplinary depth",
      "Analysis",
      "Seminars"
    ],
    "previousGradeBridge": [
      "Critical thinking",
      "Basic research skills"
    ],
    "nextGradeBridge": [
      "Complex abstract modelling",
      "Pathway selection"
    ],
    "bringFromPrevious": "Critical thinking and basic research skills.",
    "readyForNext": "Ability to handle complex abstract modelling.",
    "status": "in-development",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Evidence-Based Local Policy Brief",
      "description": "Research a local issue and write a policy brief supported by data and scientific/civic reasoning."
    }
  },
  {
    "id": "grade-10",
    "stage": "Secondary",
    "stageId": "secondary",
    "grade": "Grade 10",
    "name": "Grade 10",
    "ageRange": "15-16 years",
    "developmentalFocus": [
      "Portfolio development",
      "Career awareness"
    ],
    "learningPurpose": "To consolidate secondary learning and prepare for pathway choices.",
    "prioritySkills": [
      "Data interpretation",
      "Mathematical modelling",
      "Media literacy",
      "Responsible AI use"
    ],
    "pedagogy": [
      "Projects",
      "Production",
      "Portfolio development"
    ],
    "recommendedPedagogy": [
      "Projects",
      "Production",
      "Portfolio development"
    ],
    "previousGradeBridge": [
      "Argumentation",
      "Disciplinary knowledge"
    ],
    "nextGradeBridge": [
      "Specialized pathway learning"
    ],
    "bringFromPrevious": "Argumentation and disciplinary knowledge.",
    "readyForNext": "Readiness for specialized pathway learning.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "School Improvement Evidence Portfolio",
      "description": "Compile a portfolio of evidence demonstrating a proposed school improvement using multiple disciplinary lenses."
    }
  },
  {
    "id": "grade-11",
    "stage": "Secondary",
    "stageId": "secondary",
    "grade": "Grade 11",
    "name": "Grade 11",
    "ageRange": "16-17 years",
    "developmentalFocus": [
      "Research",
      "Disciplinary communication",
      "Innovation"
    ],
    "learningPurpose": "To pursue pathway-based exploration and advanced inquiry.",
    "prioritySkills": [
      "Research",
      "Disciplinary communication",
      "Synthesis",
      "Ethical reasoning"
    ],
    "pedagogy": [
      "Independent inquiry",
      "Seminars",
      "Career-linked learning"
    ],
    "recommendedPedagogy": [
      "Independent inquiry",
      "Seminars",
      "Career-linked learning"
    ],
    "previousGradeBridge": [
      "Broad secondary knowledge",
      "Independent work skills"
    ],
    "nextGradeBridge": [
      "Sustained complex projects"
    ],
    "bringFromPrevious": "Broad secondary knowledge and independent work skills.",
    "readyForNext": "Ability to conduct sustained, complex projects.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Research Question to Investigation",
      "description": "Formulate a complex research question in a chosen pathway and conduct a comprehensive investigation."
    }
  },
  {
    "id": "grade-12",
    "stage": "Secondary",
    "stageId": "secondary",
    "grade": "Grade 12",
    "name": "Grade 12",
    "ageRange": "17-18 years",
    "developmentalFocus": [
      "Life readiness",
      "Entrepreneurship",
      "Capstone presentation"
    ],
    "learningPurpose": "To finalize career readiness and demonstrate mastery through a capstone.",
    "prioritySkills": [
      "Professional presentation",
      "Entrepreneurship",
      "Real-world problem solving",
      "Portfolio development"
    ],
    "pedagogy": [
      "Capstone projects",
      "Production",
      "Seminars"
    ],
    "recommendedPedagogy": [
      "Capstone projects",
      "Production",
      "Seminars"
    ],
    "previousGradeBridge": [
      "Advanced research",
      "Synthesis skills"
    ],
    "nextGradeBridge": [
      "Higher education",
      "Workforce entry"
    ],
    "bringFromPrevious": "Advanced research and synthesis skills.",
    "readyForNext": "Higher education, vocational training, or workforce entry.",
    "status": "planned",
    "lastUpdated": "2026-09-04",
    "feedbackEnabled": true,
    "flagshipProject": {
      "title": "Capstone — Solve, Create, Present",
      "description": "A major self-directed project solving a real-world problem, culminating in a professional presentation."
    }
  }
];
