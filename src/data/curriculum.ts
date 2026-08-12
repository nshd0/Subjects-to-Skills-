import homeHeroImage from '@/assets/images/home_hero_illustration_1786546733248.jpg';
import foundationalImage from '@/assets/images/foundational_stage_1786546747722.jpg';
import preparatoryImage from '@/assets/images/preparatory_stage_1786546761560.jpg';
import middleImage from '@/assets/images/middle_stage_1786546772737.jpg';
import secondaryImage from '@/assets/images/secondary_stage_1786546784876.jpg';

export { homeHeroImage };

export interface SubjectMapping {
  name: string;
  skills: string;
  pedagogy: string;
  activities: string;
  evidence: string;
}

export interface InclusivePath {
  learnerGroup: string;
  strategy: string;
  icon: 'visual' | 'auditory' | 'kinesthetic' | 'support' | 'advanced';
}

export interface StageData {
  id: string;
  title: string;
  subtitle: string;
  ageGroup: string;
  gradeBand: string;
  description: string;
  intro: string;
  focus: string[];
  pedagogy: string[];
  subjects: SubjectMapping[];
  image: string;
  inclusivePaths?: InclusivePath[];
  project?: {
    title: string;
    details: string[];
  };
}

export const stages: Record<string, StageData> = {
  foundational: {
    id: "foundational",
    title: "Foundational Stage",
    subtitle: "Ages 3–8 | Pre-school to Grade 2",
    ageGroup: "Ages 3–8",
    gradeBand: "Pre-school to Grade 2",
    description: "Play, activity, stories, movement, exploration.",
    intro: "This stage is rooted in play, activity, stories, movement, exploration, expression, early literacy and numeracy, and social-emotional development.",
    focus: [
      "Foundational literacy",
      "Foundational numeracy",
      "Communication",
      "Curiosity",
      "Socio-emotional development",
      "Motor development",
      "Self-awareness"
    ],
    pedagogy: [
      "Play-based learning",
      "Story-based learning",
      "Activity-based learning",
      "Inquiry-rich exploration",
      "Movement and art integration",
      "Conversation and interaction"
    ],
    image: foundationalImage,
    inclusivePaths: [
      { learnerGroup: "Visual & Spatial", strategy: "Use high-contrast picture schedules, color-coded blocks, and visual storytelling cues.", icon: "visual" },
      { learnerGroup: "Kinesthetic", strategy: "Integrate sandpaper letters, jumping to count, and frequent movement breaks.", icon: "kinesthetic" },
      { learnerGroup: "Support Needs", strategy: "Maintain predictable routines, provide quiet sensory zones, and offer tactile calming items.", icon: "support" },
      { learnerGroup: "Advanced Pacing", strategy: "Provide open-ended building materials and complex storytelling prompts for deeper exploration.", icon: "advanced" }
    ],
    subjects: [
      {
        name: "Hindi / Regional Language",
        skills: "listening, speaking, vocabulary, early reading",
        pedagogy: "storytelling, rhymes, role-play and conversation",
        activities: "retell a story using picture cards",
        evidence: "oral narration and participation"
      },
      {
        name: "English",
        skills: "oral communication, phonological awareness, expression",
        pedagogy: "songs, puppets, action-based language and picture talk",
        activities: "describe a picture or act out a dialogue",
        evidence: "oral response and emergent language"
      },
      {
        name: "Mathematics",
        skills: "counting, classification, patterns, spatial reasoning",
        pedagogy: "manipulatives, games, sorting and movement",
        activities: "sort objects by colour, size and shape",
        evidence: "demonstration and explanation"
      },
      {
        name: "The World Around Us",
        skills: "observation, questioning, care, classification",
        pedagogy: "nature walks, sensory exploration and discussion",
        activities: "identify plants and animals around the school",
        evidence: "drawings, sorting and oral explanations"
      },
      {
        name: "Art Education",
        skills: "creativity, imagination, fine-motor development",
        pedagogy: "drawing, clay, music, dance and free expression",
        activities: "create artwork based on a story",
        evidence: "portfolio and learner explanation"
      },
      {
        name: "Physical Education",
        skills: "coordination, balance, movement, self-regulation",
        pedagogy: "games, rhythm, dance and outdoor play",
        activities: "follow movement patterns and play cooperatively",
        evidence: "observation and participation"
      },
      {
        name: "Health and Well-being",
        skills: "self-awareness, empathy, hygiene, safety",
        pedagogy: "routines, emotion check-ins and demonstrations",
        activities: "identify emotions and practise healthy habits",
        evidence: "observed behaviour and conversation"
      }
    ],
    project: {
      title: "My Family and Community",
      details: [
        "Language: Storytelling about family members.",
        "Maths: Counting family members, sorting objects by size.",
        "Environment: Understanding roles in the community.",
        "Art: Drawing family portraits.",
        "Movement & Well-being: Role-playing community helpers, discussing sharing and care."
      ]
    }
  },
  preparatory: {
    id: "preparatory",
    title: "Preparatory Stage",
    subtitle: "Ages 8–11 | Grades 3–5",
    ageGroup: "Ages 8–11",
    gradeBand: "Grades 3–5",
    description: "Introducing clearer subject structures with discovery.",
    intro: "This stage gradually introduces clearer subject structures while keeping learning experiential, discovery-based, interactive and connected to children’s lives.",
    focus: [
      "Concept formation",
      "Application",
      "Collaboration",
      "Curiosity",
      "Communication",
      "Environmental awareness",
      "Early independent work habits"
    ],
    pedagogy: [
      "Activity-based learning",
      "Experiential learning",
      "Discovery learning",
      "Guided projects",
      "Collaborative learning",
      "Concrete-to-abstract teaching"
    ],
    image: preparatoryImage,
    inclusivePaths: [
      { learnerGroup: "Visual & Spatial", strategy: "Incorporate mind maps, illustrated timelines, and visual fraction models.", icon: "visual" },
      { learnerGroup: "Auditory", strategy: "Use rhythmic chanting for multiplication, read-aloud circles, and oral presentations.", icon: "auditory" },
      { learnerGroup: "Support Needs", strategy: "Break instructions into small steps, provide graphic organizers, and allow extra time.", icon: "support" },
      { learnerGroup: "Advanced Pacing", strategy: "Encourage independent inquiry projects and peer teaching opportunities.", icon: "advanced" }
    ],
    subjects: [
      {
        name: "Hindi / Regional Language",
        skills: "reading comprehension, writing, oral expression",
        pedagogy: "reading circles, dialogue, storytelling and interviews",
        activities: "interview a family member and write a report",
        evidence: "transcript, writing sample, oral sharing"
      },
      {
        name: "English",
        skills: "communication, creativity, comprehension",
        pedagogy: "drama, story writing, presentations and group reading",
        activities: "create and perform a short play",
        evidence: "script, performance, reflection"
      },
      {
        name: "Mathematics",
        skills: "numeracy, reasoning, problem-solving",
        pedagogy: "games, measurement, surveys and real-life problems",
        activities: "plan a budget for a class event",
        evidence: "calculations, strategy explanation, chart"
      },
      {
        name: "The World Around Us",
        skills: "inquiry, observation, environmental awareness",
        pedagogy: "field observation, experiments and local studies",
        activities: "conduct a school biodiversity walk",
        evidence: "field notes, poster, explanation"
      },
      {
        name: "Art Education",
        skills: "creativity, design, visual communication",
        pedagogy: "craft, illustration, music and cultural projects",
        activities: "design an awareness poster",
        evidence: "product and reflection"
      },
      {
        name: "Physical Education",
        skills: "teamwork, coordination, resilience",
        pedagogy: "cooperative games, fitness activities and sports",
        activities: "create and follow a simple fitness routine",
        evidence: "routine plan and participation"
      },
      {
        name: "Computer / Digital Literacy",
        skills: "digital fluency, safe use, creation",
        pedagogy: "guided digital tasks and multimedia activities",
        activities: "create a short digital presentation",
        evidence: "digital product and checklist"
      },
      {
        name: "Work Education",
        skills: "making, planning, cooperation",
        pedagogy: "gardening, craft, repair and simple enterprise",
        activities: "grow and document a class plant project",
        evidence: "process log and product"
      }
    ],
    project: {
      title: "A Healthy School",
      details: [
        "Subjects Integrated: English, Maths, The World Around Us, Physical Education, Work Education.",
        "Skills Developed: Observation, data collection, problem-solving, communication.",
        "Activities: Survey school hygiene, chart waste generation, design posters, plant a small garden.",
        "Outputs: A presentation and a mini-garden.",
        "Assessment Evidence: Process logs, presentation rubric, peer feedback."
      ]
    }
  },
  middle: {
    id: "middle",
    title: "Middle Stage",
    subtitle: "Ages 11–14 | Grades 6–8",
    ageGroup: "Ages 11–14",
    gradeBand: "Grades 6–8",
    description: "Strengthening subject learning through projects and application.",
    intro: "This stage strengthens explicit subject learning while making inquiry, projects, experimentation, practical work and real-world application central to classroom experience. (Note: CBSE provides Skill Education / Kaushal Bodh for Classes VI–VIII, offered mandatorily from session 2026–27).",
    focus: [
      "Reasoning",
      "Investigation",
      "Problem-solving",
      "Collaboration",
      "Digital literacy",
      "Ethical awareness",
      "Applied learning"
    ],
    pedagogy: [
      "Inquiry-based learning",
      "Project-based learning",
      "Subject-based learning with integration",
      "Experimentation",
      "Fieldwork",
      "Design challenges",
      "Discussion and debate"
    ],
    image: middleImage,
    inclusivePaths: [
      { learnerGroup: "Visual & Spatial", strategy: "Utilize data visualization tools, concept mapping software, and geometry manipulatives.", icon: "visual" },
      { learnerGroup: "Kinesthetic", strategy: "Engage in hands-on science experiments, role-playing historical events, and building prototypes.", icon: "kinesthetic" },
      { learnerGroup: "Support Needs", strategy: "Provide audiobooks, text-to-speech tools, structured templates for writing, and clear rubrics.", icon: "support" },
      { learnerGroup: "Advanced Pacing", strategy: "Introduce open-ended design challenges, debate leadership roles, and cross-disciplinary research.", icon: "advanced" }
    ],
    subjects: [
      {
        name: "Hindi / Regional Language",
        skills: "interpretation, argument, creativity, communication",
        pedagogy: "debate, literary discussion, podcast and editorial writing",
        activities: "record a podcast on a social issue",
        evidence: "audio, notes, rubric"
      },
      {
        name: "English",
        skills: "research, critical reading, presentation",
        pedagogy: "book discussions, documentary work and presentations",
        activities: "analyse two viewpoints and present a conclusion",
        evidence: "report, presentation, reflection"
      },
      {
        name: "Mathematics",
        skills: "modelling, data literacy, logical reasoning",
        pedagogy: "surveys, financial literacy and design challenges",
        activities: "analyse household water consumption",
        evidence: "calculations, graphs, recommendation"
      },
      {
        name: "Science",
        skills: "scientific thinking, investigation, evidence use",
        pedagogy: "laboratory work, field studies and design challenges",
        activities: "test materials for water filtration",
        evidence: "lab record, conclusion, prototype"
      },
      {
        name: "Social Science",
        skills: "citizenship, source analysis, systems thinking",
        pedagogy: "mock parliament, map work and oral history",
        activities: "conduct a local governance simulation",
        evidence: "policy note, map, source analysis"
      },
      {
        name: "Computer Applications / AI",
        skills: "computational thinking, digital literacy, ethics",
        pedagogy: "coding, data visualisation and AI evaluation",
        activities: "compare AI-generated answers for accuracy",
        evidence: "comparison sheet, dashboard, ethics reflection"
      },
      {
        name: "Art Education",
        skills: "design thinking, visual communication",
        pedagogy: "exhibition, campaign design and critique",
        activities: "create a public-awareness campaign",
        evidence: "portfolio and critique"
      },
      {
        name: "Physical Education",
        skills: "leadership, teamwork, self-management",
        pedagogy: "team strategy, fitness tracking and peer coaching",
        activities: "develop a personal fitness plan",
        evidence: "plan and observation"
      },
      {
        name: "Work Education / Kaushal Bodh",
        skills: "making, entrepreneurship, practical problem-solving",
        pedagogy: "product creation, repair, service learning and community projects",
        activities: "design a low-cost useful product",
        evidence: "process journal and product evidence"
      }
    ],
    project: {
      title: "Clean Water for the Community",
      details: [
        "Science: Water quality and filtration testing.",
        "Mathematics: Usage data collection and representation.",
        "Social Science: Exploring access and public responsibility.",
        "Languages: Conducting interviews and writing reports.",
        "Computer/AI: Data visualisation of local water issues.",
        "Art: Designing a water conservation awareness campaign.",
        "Kaushal Bodh: Prototyping a low-cost water filter."
      ]
    }
  }
};

export const secondaryStage = {
  id: "secondary",
  title: "Secondary Stage",
  subtitle: "Ages 14–18 | Grades 9–12",
  ageGroup: "Ages 14–18",
  gradeBand: "Grades 9–12",
  description: "Deepening disciplinary knowledge, analysis, and specialization.",
  intro: "This stage deepens disciplinary knowledge while enabling analytical thinking, specialisation, application, flexibility, career awareness, research and real-world problem-solving. (Note: CBSE offers skill and vocational subjects in Classes IX–X and XI–XII, including Artificial Intelligence, Information Technology, Design Thinking and other courses).",
  focus: [
    "Analysis",
    "Specialisation",
    "Transfer",
    "Innovation",
    "Independent work",
    "Research",
    "Career and life readiness"
  ],
  pedagogy: [
    "Analytical learning",
    "Multidisciplinary inquiry",
    "Research-based learning",
    "Application tasks",
    "Production and portfolio work",
    "Career-linked exploration",
    "Seminar, debate and independent projects"
  ],
  image: secondaryImage,
  inclusivePaths: [
    { learnerGroup: "Visual & Spatial", strategy: "Support learning with 3D modeling, advanced graphing software, and visual portfolios.", icon: "visual" },
    { learnerGroup: "Auditory", strategy: "Facilitate Socratic seminars, podcast creation, and oral debate competitions.", icon: "auditory" },
    { learnerGroup: "Support Needs", strategy: "Offer flexible submission formats, assistive technology, and staggered deadlines for large projects.", icon: "support" },
    { learnerGroup: "Advanced Pacing", strategy: "Provide opportunities for independent research, university-level coursework, and industry mentorships.", icon: "advanced" }
  ],
  phase1: {
    title: "Secondary Phase I: Grades 9–10",
    subjects: [
      {
        name: "English / Hindi / Third Language",
        skills: "argument, research, media literacy, presentation",
        pedagogy: "seminars, debates, editorial analysis and public writing",
        activities: "produce an evidence-based editorial",
        evidence: "article, speech, rubric"
      },
      {
        name: "Mathematics",
        skills: "abstract reasoning, modelling, quantitative decision-making",
        pedagogy: "financial modelling, statistics and applied investigations",
        activities: "analyse survey data and make recommendations",
        evidence: "model, graph, interpretation"
      },
      {
        name: "Science",
        skills: "experimentation, analysis, innovation",
        pedagogy: "independent investigation and engineering design",
        activities: "develop a low-cost energy solution",
        evidence: "report, prototype, viva"
      },
      {
        name: "Social Science",
        skills: "civic reasoning, historical interpretation, geographic analysis",
        pedagogy: "policy debates, field surveys and case studies",
        activities: "prepare a policy brief on a local issue",
        evidence: "policy brief and source analysis"
      },
      {
        name: "Information Technology / Computer Applications",
        skills: "data literacy, programming, digital production",
        pedagogy: "website, database, spreadsheet and automation projects",
        activities: "build a school information dashboard",
        evidence: "digital product and documentation"
      },
      {
        name: "CT & AI",
        skills: "computational thinking, AI literacy, ethics",
        pedagogy: "prompt testing, bias investigation and data projects",
        activities: "evaluate reliability and bias of AI outputs",
        evidence: "prompt log and ethics review"
      },
      {
        name: "Art Education",
        skills: "creative production, design, critique",
        pedagogy: "campaigns, exhibitions and media production",
        activities: "create a multimedia social campaign",
        evidence: "portfolio"
      },
      {
        name: "Physical Education",
        skills: "goal-setting, health literacy, leadership",
        pedagogy: "fitness programmes, event management and team leadership",
        activities: "organise an inter-house sports event",
        evidence: "event plan and reflection"
      },
      {
        name: "Work Experience / Vocational Education",
        skills: "employability, entrepreneurship, practical problem-solving",
        pedagogy: "enterprise projects and service learning",
        activities: "develop and market a student-made product",
        evidence: "product and business note"
      },
      {
        name: "Skill Subject",
        skills: "applied vocational competence",
        pedagogy: "practical work, simulation and project-based learning",
        activities: "complete a skill-based product or service project",
        evidence: "project output"
      }
    ]
  },
  phase2: {
    title: "Secondary Phase II: Grades 11–12",
    subjects: [
      {
        name: "Languages",
        skills: "advanced communication, interpretation, research",
        pedagogy: "seminars, comparative analysis and publication",
        activities: "produce a research-based magazine",
        evidence: "publication and presentation"
      },
      {
        name: "Mathematics / Applied Mathematics",
        skills: "modelling, abstraction, quantitative reasoning",
        pedagogy: "data investigations and optimisation tasks",
        activities: "build a financial or statistical model",
        evidence: "model and explanation"
      },
      {
        name: "Physics",
        skills: "systems thinking, experimentation, engineering design",
        pedagogy: "experimental research and simulation",
        activities: "design and test a working prototype",
        evidence: "prototype and report"
      },
      {
        name: "Chemistry",
        skills: "laboratory reasoning, analysis, sustainability",
        pedagogy: "product analysis and green chemistry investigation",
        activities: "analyse a household product",
        evidence: "lab analysis"
      },
      {
        name: "Biology / Biotechnology",
        skills: "research, ethics, data interpretation",
        pedagogy: "field study and health or biotechnology research",
        activities: "conduct a biodiversity or health study",
        evidence: "report and poster"
      },
      {
        name: "Accountancy",
        skills: "financial reasoning and accuracy",
        pedagogy: "business simulation and financial planning",
        activities: "prepare accounts for a model enterprise",
        evidence: "ledger and analysis"
      },
      {
        name: "Business Studies",
        skills: "enterprise, decision-making, communication",
        pedagogy: "case analysis, product design and business planning",
        activities: "present a business model",
        evidence: "business plan and pitch"
      },
      {
        name: "Economics",
        skills: "data analysis, systems thinking, policy reasoning",
        pedagogy: "market research and economic case studies",
        activities: "study inflation or local employment",
        evidence: "case report"
      },
      {
        name: "History",
        skills: "historical research, interpretation, evidence use",
        pedagogy: "archive work, oral history and comparative study",
        activities: "create a local-history documentation project",
        evidence: "documentation portfolio"
      },
      {
        name: "Political Science",
        skills: "civic reasoning, debate, policy analysis",
        pedagogy: "simulations, debates and policy briefs",
        activities: "draft a youth policy proposal",
        evidence: "proposal and presentation"
      },
      {
        name: "Geography",
        skills: "spatial reasoning, research, data interpretation",
        pedagogy: "fieldwork, mapping and GIS-style inquiry",
        activities: "map a local environmental issue",
        evidence: "map and field report"
      },
      {
        name: "Psychology / Sociology",
        skills: "observation, empathy, ethical inquiry",
        pedagogy: "surveys, interviews and case analysis",
        activities: "conduct a small ethical social study",
        evidence: "study report"
      },
      {
        name: "Computer Science / Informatics Practices",
        skills: "software development, data science, automation",
        pedagogy: "application development and database projects",
        activities: "build a data-driven school application",
        evidence: "code and documentation"
      },
      {
        name: "Entrepreneurship",
        skills: "innovation, leadership, risk analysis, pitching",
        pedagogy: "customer discovery, prototyping and business planning",
        activities: "pitch a solution to a community problem",
        evidence: "pitch deck and prototype"
      },
      {
        name: "Fine Arts",
        skills: "creative practice, critique, cultural interpretation",
        pedagogy: "studio work, exhibition and portfolio development",
        activities: "curate an art exhibition",
        evidence: "curated portfolio"
      },
      {
        name: "Physical Education",
        skills: "health leadership, planning, performance analysis",
        pedagogy: "training plans, event management and performance review",
        activities: "design a school wellness programme",
        evidence: "plan and reflection"
      },
      {
        name: "Skill Subjects",
        skills: "technical competence and workplace readiness",
        pedagogy: "internships, simulations and practical production",
        activities: "produce a workplace portfolio",
        evidence: "portfolio and logbook"
      }
    ]
  },
  project: {
    title: "Make the School AI-Ready",
    details: [
      "Languages: Writing policy and communication materials.",
      "Mathematics: Analysing usage data and cost models.",
      "Science: Evaluating environmental impact of tech infrastructure.",
      "Social Science: Debating privacy, labour, and ethical implications.",
      "Computer/AI: Testing tools and evaluating models.",
      "Art: Creating an awareness campaign on digital ethics.",
      "Vocational/Skill Subjects: Planning the practical implementation and maintenance."
    ]
  }
};

export const skillProgression = [
  {
    skill: "Communication",
    progression: ["Expresses ideas", "Organises ideas", "Presents evidence-based ideas", "Adapts communication to purpose and audience", "Communicates professionally and academically"]
  },
  {
    skill: "Critical Thinking",
    progression: ["Asks questions", "Gives reasons", "Compares evidence and viewpoints", "Evaluates claims and sources", "Develops independent arguments and research conclusions"]
  },
  {
    skill: "Problem-Solving",
    progression: ["Tries different methods", "Selects a strategy", "Plans and tests solutions", "Analyses constraints and improves solutions", "Solves complex disciplinary or real-world problems"]
  },
  {
    skill: "Creativity",
    progression: ["Explores and imagines", "Generates ideas", "Designs and prototypes", "Innovates and justifies decisions", "Produces original work or research"]
  },
  {
    skill: "Collaboration",
    progression: ["Shares and takes turns", "Performs group roles", "Plans team tasks", "Manages disagreement and shared outcomes", "Leads teams and works with stakeholders"]
  },
  {
    skill: "Digital and AI Literacy",
    progression: ["Uses technology safely", "Creates simple digital products", "Evaluates digital tools", "Verifies AI outputs and considers ethics", "Designs responsible digital or AI solutions"]
  },
  {
    skill: "Self-Management",
    progression: ["Follows routines", "Sets short-term goals", "Tracks progress", "Manages extended tasks", "Plans, reflects and improves independently"]
  },
  {
    skill: "Citizenship and Ethics",
    progression: ["Shows care and fairness", "Identifies responsibilities", "Examines local issues", "Evaluates consequences", "Participates through informed action"]
  }
];
