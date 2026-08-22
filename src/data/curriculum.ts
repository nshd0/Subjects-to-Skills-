import homeHeroImage from '@/assets/images/home_hero_illustration_1786546733248.jpg';
import foundationalImage from '@/assets/images/foundational_stage_1786546747722.jpg';
import preparatoryImage from '@/assets/images/preparatory_stage_1786546761560.jpg';
import middleImage from '@/assets/images/middle_stage_1786546772737.jpg';
import secondaryImage from '@/assets/images/secondary_stage_1786546784876.jpg';

export { homeHeroImage };

export interface SubjectMapping {
  name: string;
  essentialKnowledge?: string;
  curricularGoal?: string;
  competency?: string;
  learningOutcome?: string;
  skills: string;
  valuesAndDispositions?: string;
  pedagogy: string;
  activities: string;
  evidence: string;
  assessmentMethod?: string;
  inclusionAndDifferentiation?: string;
  localIndianContext?: string;
  timeAndResources?: string;
  sourceLabel?: string;
}

export interface Resource {
  name: string;
  url: string;
  description: string;
}

export interface InclusivePath {
  learnerGroup: string;
  strategy: string;
  icon: 'visual' | 'auditory' | 'kinesthetic' | 'support' | 'advanced';
  resources?: Resource[];
}

export interface AssessmentRubric {
  criteria: string;
  emerging: string;
  proficient: string;
  advanced: string;
}

export interface StageGuidance {
  activityTips: string[];
  rubrics: AssessmentRubric[];
}

export interface ComplianceStatus {
  fln: string;
  multilingualism: string;
  mathematics: string;
  science: string;
  socialScience: string;
  artEducation: string;
  physicalEducation: string;
  vocationalEducation: string;
  digitalLiteracy: string;
  indianKnowledgeSystems: string;
  inclusion: string;
}

export interface SecondaryPathway {
  name: string;
  description: string;
  subjects: string[];
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
  compliance?: ComplianceStatus;
  pathways?: SecondaryPathway[];
  guidance?: StageGuidance;
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
    compliance: {
      fln: 'Partially mapped',
      multilingualism: 'Partially mapped',
      mathematics: 'Mapped',
      science: 'Mapped',
      socialScience: 'Mapped',
      artEducation: 'Partially mapped',
      physicalEducation: 'Partially mapped',
      vocationalEducation: 'Not yet mapped',
      digitalLiteracy: 'Partially mapped',
      indianKnowledgeSystems: 'Not yet mapped',
      inclusion: 'Partially mapped'
    },
    inclusivePaths: [
      { 
        learnerGroup: "Visual & Spatial", 
        strategy: "Use high-contrast picture schedules, color-coded blocks, and visual storytelling cues.", 
        icon: "visual",
        resources: [
          { name: "Khan Academy Kids", url: "https://learn.khanacademy.org/khan-academy-kids/", description: "Free, visual-heavy learning app." }
        ]
      },
      { 
        learnerGroup: "Kinesthetic", 
        strategy: "Integrate sandpaper letters, jumping to count, and frequent movement breaks.", 
        icon: "kinesthetic",
        resources: [
          { name: "PBS Kids Games", url: "https://pbskids.org/games/", description: "Interactive and activity-based games." },
          { name: "GoNoodle", url: "https://www.gonoodle.com/", description: "Free movement and mindfulness videos." }
        ]
      },
      { 
        learnerGroup: "Support Needs", 
        strategy: "Maintain predictable routines, provide quiet sensory zones, and offer tactile calming items.", 
        icon: "support",
        resources: [
          { name: "StoryWeaver", url: "https://storyweaver.org.in/", description: "Open-source digital repository of multilingual children's books." },
          { name: "Tar Heel Reader", url: "https://tarheelreader.org/", description: "Free, easy-to-read, and accessible books." }
        ]
      },
      { 
        learnerGroup: "Advanced Pacing", 
        strategy: "Provide open-ended building materials and complex storytelling prompts for deeper exploration.", 
        icon: "advanced",
        resources: [
          { name: "ScratchJr", url: "https://www.scratchjr.org/", description: "Free coding language for young children." }
        ]
      }
    ],
    guidance: {
      activityTips: [
        "Focus on short, 10-15 minute bursts of guided activity to match attention spans.",
        "Use multisensory materials (sand, water, blocks, playdough) to ground abstract concepts.",
        "Emphasize oral feedback, praise, and encouragement over written correction.",
        "Integrate learning into daily routines (e.g., counting during cleanup, storytelling during snack time)."
      ],
      rubrics: [
        {
          criteria: "Communication & Expression",
          emerging: "Uses single words or gestures; hesitant to share.",
          proficient: "Expresses simple ideas in short, clear sentences.",
          advanced: "Tells a coherent short story or explains a drawing in detail."
        },
        {
          criteria: "Social Collaboration",
          emerging: "Engages mostly in parallel play alongside peers.",
          proficient: "Shares materials and takes turns with prompts.",
          advanced: "Initiates cooperative play, helps peers, and resolves minor conflicts."
        },
        {
          criteria: "Sensory & Motor Skills",
          emerging: "Shows some difficulty grasping tools or tracking objects.",
          proficient: "Holds writing tools correctly; completes basic puzzles.",
          advanced: "Demonstrates fine motor precision (e.g., cutting complex shapes, building intricate towers)."
        }
      ]
    },
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
        name: "Mathematics (Foundational Numeracy)",
        essentialKnowledge: "Number sense, quantity, operations",
        curricularGoal: "Develops foundational numeracy and spatial understanding.",
        competency: "Compares quantities up to 10.",
        learningOutcome: "Observes one-to-one correspondence in play.",
        skills: "Counting, spatial reasoning",
        valuesAndDispositions: "Patience, sharing materials",
        pedagogy: "Play-based learning, manipulatives",
        activities: "Sorting and sharing game with concrete objects (seeds, pebbles).",
        evidence: "Photo/work sample/oral explanation",
        assessmentMethod: "Teacher observation of child portfolio",
        inclusionAndDifferentiation: "Use high-contrast large objects for visually impaired.",
        localIndianContext: "Use local materials like tamarind seeds or shells.",
        timeAndResources: "15-minute guided burst.",
        sourceLabel: "NCERT FLN Advisory"
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
    compliance: {
      fln: 'Partially mapped',
      multilingualism: 'Partially mapped',
      mathematics: 'Mapped',
      science: 'Mapped',
      socialScience: 'Mapped',
      artEducation: 'Partially mapped',
      physicalEducation: 'Partially mapped',
      vocationalEducation: 'Not yet mapped',
      digitalLiteracy: 'Partially mapped',
      indianKnowledgeSystems: 'Not yet mapped',
      inclusion: 'Partially mapped'
    },
    inclusivePaths: [
      { 
        learnerGroup: "Visual & Spatial", 
        strategy: "Incorporate mind maps, illustrated timelines, and visual fraction models.", 
        icon: "visual",
        resources: [
          { name: "PhET Interactive Simulations", url: "https://phet.colorado.edu/", description: "Free math and science simulations." }
        ]
      },
      { 
        learnerGroup: "Auditory", 
        strategy: "Use rhythmic chanting for multiplication, read-aloud circles, and oral presentations.", 
        icon: "auditory",
        resources: [
          { name: "LibriVox", url: "https://librivox.org/", description: "Free public domain audiobooks." },
          { name: "Storynory", url: "https://www.storynory.com/", description: "Free audio stories for kids." }
        ]
      },
      { 
        learnerGroup: "Support Needs", 
        strategy: "Break instructions into small steps, provide graphic organizers, and allow extra time.", 
        icon: "support",
        resources: [
          { name: "OpenDyslexic", url: "https://opendyslexic.org/", description: "Open source font created to increase readability for readers with dyslexia." }
        ]
      },
      { 
        learnerGroup: "Advanced Pacing", 
        strategy: "Encourage independent inquiry projects and peer teaching opportunities.", 
        icon: "advanced",
        resources: [
          { name: "Scratch", url: "https://scratch.mit.edu/", description: "Free programming language and online community." }
        ]
      }
    ],
    guidance: {
      activityTips: [
        "Introduce collaborative group roles (e.g., timekeeper, scribe, presenter).",
        "Connect classroom activities to local community or home life for real-world relevance.",
        "Provide graphic organizers (Venn diagrams, mind maps) to help structure thought processes.",
        "Balance direct instruction with structured, hands-on discovery sessions."
      ],
      rubrics: [
        {
          criteria: "Concept Application",
          emerging: "Recalls facts but struggles to apply them to tasks.",
          proficient: "Applies concepts correctly to familiar situations.",
          advanced: "Transfers concepts to new, unfamiliar problems with ease."
        },
        {
          criteria: "Project Execution",
          emerging: "Requires constant guidance to complete assigned tasks.",
          proficient: "Follows instructions and completes tasks independently.",
          advanced: "Plans own steps, self-corrects, and improves upon the original idea."
        },
        {
          criteria: "Peer Feedback",
          emerging: "Provides simple, generic feedback (e.g., 'It is good').",
          proficient: "Provides specific, constructive feedback when guided.",
          advanced: "Offers detailed, actionable feedback and graciously accepts critiques."
        }
      ]
    },
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
    compliance: {
      fln: 'Partially mapped',
      multilingualism: 'Partially mapped',
      mathematics: 'Mapped',
      science: 'Mapped',
      socialScience: 'Mapped',
      artEducation: 'Partially mapped',
      physicalEducation: 'Partially mapped',
      vocationalEducation: 'Not yet mapped',
      digitalLiteracy: 'Partially mapped',
      indianKnowledgeSystems: 'Not yet mapped',
      inclusion: 'Partially mapped'
    },
    inclusivePaths: [
      { 
        learnerGroup: "Visual & Spatial", 
        strategy: "Utilize data visualization tools, concept mapping software, and geometry manipulatives.", 
        icon: "visual",
        resources: [
          { name: "Tinkercad", url: "https://www.tinkercad.com/", description: "Free, easy-to-use app for 3D design, electronics, and coding." },
          { name: "GeoGebra", url: "https://www.geogebra.org/", description: "Free dynamic mathematics software." }
        ]
      },
      { 
        learnerGroup: "Kinesthetic", 
        strategy: "Engage in hands-on science experiments, role-playing historical events, and building prototypes.", 
        icon: "kinesthetic",
        resources: [
          { name: "Arduino Project Hub", url: "https://create.arduino.cc/projecthub", description: "Open-source electronics platform based on easy-to-use hardware and software." }
        ]
      },
      { 
        learnerGroup: "Support Needs", 
        strategy: "Provide audiobooks, text-to-speech tools, structured templates for writing, and clear rubrics.", 
        icon: "support",
        resources: [
          { name: "Project Gutenberg", url: "https://www.gutenberg.org/", description: "Library of over 70,000 free eBooks with readable text formats." },
          { name: "Microsoft Immersive Reader", url: "https://www.onenote.com/learningtools", description: "Free reading enhancement tool." }
        ]
      },
      { 
        learnerGroup: "Advanced Pacing", 
        strategy: "Introduce open-ended design challenges, debate leadership roles, and cross-disciplinary research.", 
        icon: "advanced",
        resources: [
          { name: "freeCodeCamp", url: "https://www.freecodecamp.org/", description: "Open source community that helps you learn to code." }
        ]
      }
    ],
    guidance: {
      activityTips: [
        "Shift focus to inquiry-based questions where students design the investigation.",
        "Incorporate peer-review sessions using structured feedback protocols.",
        "Allow choice in how students present their findings (e.g., podcast, essay, 3D model).",
        "Facilitate structured debates to explore multiple perspectives on historical or scientific issues."
      ],
      rubrics: [
        {
          criteria: "Critical Analysis",
          emerging: "Summarizes information without questioning sources or bias.",
          proficient: "Compares different viewpoints and identifies obvious biases.",
          advanced: "Synthesizes multiple sources to form a unique, evidence-based argument."
        },
        {
          criteria: "Problem Solving",
          emerging: "Uses trial and error without a clear overarching plan.",
          proficient: "Selects a logical strategy and follows it through to a conclusion.",
          advanced: "Evaluates constraints, tests multiple strategies, and optimizes the final solution."
        },
        {
          criteria: "Digital & Information Literacy",
          emerging: "Relies on the first search result; struggles to verify facts.",
          proficient: "Uses multiple sources and citations correctly.",
          advanced: "Evaluates source credibility deeply and uses advanced tools for data representation."
        }
      ]
    },
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
        essentialKnowledge: "Filtration and separation",
        curricularGoal: "Develops scientific temper and investigates the natural world.",
        competency: "Plans and conducts a fair investigation.",
        learningOutcome: "Identifies variables and uses appropriate tools to separate mixtures.",
        skills: "Problem-solving, investigation",
        valuesAndDispositions: "Care for shared resources, scientific integrity",
        pedagogy: "Inquiry-based laboratory work",
        activities: "Design and test materials for a low-cost water filtration system",
        evidence: "Water-filter prototype",
        assessmentMethod: "Variables chart, data table, conclusion, and peer presentation",
        inclusionAndDifferentiation: "Provide tactile materials for visually impaired; use bilingual term sheets.",
        localIndianContext: "Study traditional local water harvesting or filtration methods (e.g., matka filtration).",
        timeAndResources: "4 periods. Requires basic lab supplies, sand, charcoal, gravel.",
        sourceLabel: "NCF-SE 2023 & Subjects2Skills Example"
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

export const secondaryStage: Omit<StageData, 'subjects'> & { phase1: any; phase2: any } = {
  id: "secondary",
  title: "Secondary Stage",
  subtitle: "Ages 14–18 | Grades 9–12",
  ageGroup: "Ages 14–18",
  gradeBand: "Grades 9–12",
  description: "Deepening disciplinary knowledge, analysis, and specialization.",
  pathways: [
    { name: "Mathematical and Computational", description: "Focus on logic, data, and algorithms.", subjects: ["Mathematics", "Computer Science", "Physics"] },
    { name: "Scientific and Health", description: "Focus on biological sciences, health, and environment.", subjects: ["Biology", "Chemistry", "Physical Education"] },
    { name: "Humanities and Social Inquiry", description: "Focus on society, history, and human behavior.", subjects: ["History", "Political Science", "Sociology"] },
    { name: "Commerce and Enterprise", description: "Focus on business, economics, and finance.", subjects: ["Accountancy", "Business Studies", "Economics"] },
    { name: "Creative and Design", description: "Focus on fine arts, media, and design thinking.", subjects: ["Fine Arts", "Languages"] },
    { name: "Vocational and Applied", description: "Focus on practical skills and workplace readiness.", subjects: ["Skill Subjects", "Entrepreneurship"] }
  ],
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
    compliance: {
      fln: 'Partially mapped',
      multilingualism: 'Partially mapped',
      mathematics: 'Mapped',
      science: 'Mapped',
      socialScience: 'Mapped',
      artEducation: 'Partially mapped',
      physicalEducation: 'Partially mapped',
      vocationalEducation: 'Not yet mapped',
      digitalLiteracy: 'Partially mapped',
      indianKnowledgeSystems: 'Not yet mapped',
      inclusion: 'Partially mapped'
    },
  inclusivePaths: [
    { 
      learnerGroup: "Visual & Spatial", 
      strategy: "Support learning with 3D modeling, advanced graphing software, and visual portfolios.", 
      icon: "visual",
      resources: [
        { name: "Blender", url: "https://www.blender.org/", description: "Free and open source 3D creation suite." },
        { name: "QGIS", url: "https://qgis.org/", description: "A Free and Open Source Geographic Information System." }
      ]
    },
    { 
      learnerGroup: "Auditory", 
      strategy: "Facilitate Socratic seminars, podcast creation, and oral debate competitions.", 
      icon: "auditory",
      resources: [
        { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu/", description: "Free lecture videos and audio from MIT courses." },
        { name: "TED-Ed", url: "https://ed.ted.com/", description: "Free educational videos and lessons." }
      ]
    },
    { 
      learnerGroup: "Support Needs", 
      strategy: "Offer flexible submission formats, assistive technology, and staggered deadlines for large projects.", 
      icon: "support",
      resources: [
        { name: "NVDA", url: "https://www.nvaccess.org/", description: "Free and open source screen reader." },
        { name: "Zotero", url: "https://www.zotero.org/", description: "Free, easy-to-use tool to help collect and organize research." }
      ]
    },
    { 
      learnerGroup: "Advanced Pacing", 
      strategy: "Provide opportunities for independent research, university-level coursework, and industry mentorships.", 
      icon: "advanced",
      resources: [
        { name: "OpenStax", url: "https://openstax.org/", description: "Free, peer-reviewed, openly licensed textbooks." },
        { name: "GitHub Education", url: "https://education.github.com/", description: "Free tools and resources for student developers." }
      ]
    }
  ],
  guidance: {
    activityTips: [
      "Act as a facilitator or mentor rather than a direct instructor.",
      "Encourage students to reach out to real-world experts, alumni, or community members for research.",
      "Use Socratic seminars to deepen understanding of complex ethical, societal, or scientific issues.",
      "Integrate long-term, self-directed Capstone projects simulating industry environments."
    ],
    rubrics: [
      {
        criteria: "Research & Synthesis",
        emerging: "Relies on a single source or surface-level data collection.",
        proficient: "Integrates multiple credible sources to support a strong thesis.",
        advanced: "Identifies gaps in existing research and proposes original hypotheses."
      },
      {
        criteria: "Real-World Application",
        emerging: "Understands theory but struggles to see practical industry use.",
        proficient: "Applies theoretical knowledge to simulated real-world scenarios.",
        advanced: "Designs and executes a project that solves a genuine community or industry problem."
      },
      {
        criteria: "Professional Communication",
        emerging: "Presents information informally with inconsistent structure.",
        proficient: "Communicates clearly using domain-specific terminology.",
        advanced: "Adapts tone and complexity perfectly for varying professional audiences (peers, experts, public)."
      }
    ]
  },
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
