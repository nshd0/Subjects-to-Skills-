const fs = require('fs');

const fileContent = `export type ResourceCost = 'Free' | 'Open Source' | 'Free with sign-in' | 'Official public resource';
export type ResourceType = 'Support Guide' | 'Activity' | 'Template' | 'Tool' | 'Official Resource' | 'Open Educational Resource' | 'Assessment Resource' | 'Printable' | 'Video / Media' | 'Planning Aid';
export type Stage = 'Foundational' | 'Preparatory' | 'Middle' | 'Secondary' | 'All Stages';

export interface ResourceItem {
  id: string;
  title: string;
  type: ResourceType;
  stage: Stage | Stage[];
  grades?: string;
  subject?: string;
  subjects?: string[];
  skillsSupported?: string[];
  cost: ResourceCost;
  url?: string;
  
  // The Curated Rhythm
  whatItIs: string;
  whyItMatters: string;
  howToUse: string | string[];
  whatStudentsProduce?: string;
  
  // Tags
  lowResourceFriendly?: boolean;
  mobileFriendly?: boolean;
  tags: string[];

  // Metadata
  timeRequired?: string;
  materialsNeeded?: string[];
  openSourceStatus?: string;
  signInRequired?: boolean;
  notesForIndianContext?: string;
}

export const teacherResources: ResourceItem[] = [
  // FOUNDATIONAL
  {
    id: "f-act-1",
    title: "Story Retelling Picture Cards",
    type: "Activity",
    stage: "Foundational",
    grades: "Pre-K to Grade 2",
    subject: "Language / Literacy",
    skillsSupported: ["Communication", "Sequencing", "Comprehension"],
    cost: "Free",
    whatItIs: "Students use visual cards to sequence and retell a story, building foundational literacy and communication skills.",
    whyItMatters: "Helps students understand narrative structure and develop oral communication skills before they can fully read or write.",
    howToUse: [
      "Read a simple, familiar story aloud to the class.",
      "Shuffle the picture cards and give them to small groups.",
      "Ask students to work together to place the cards in the correct order.",
      "Have each group retell the story using their sequenced cards."
    ],
    whatStudentsProduce: "Correctly sequenced cards and an oral retelling of the story.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "20 minutes",
    materialsNeeded: ["Set of 4-6 picture cards representing key story events (can be hand-drawn)"],
    tags: ["Literacy", "Low-prep", "Group activity", "Storytelling"]
  },
  {
    id: "f-act-2",
    title: "Sorting and Classification Games",
    type: "Activity",
    stage: "Foundational",
    grades: "Pre-K to Grade 1",
    subject: "Mathematics / Cognitive Development",
    skillsSupported: ["Critical Thinking", "Observation", "Pattern Recognition"],
    cost: "Free",
    whatItIs: "A hands-on game where students group objects by color, shape, or size.",
    whyItMatters: "Develops early logical reasoning and the ability to identify attributes and patterns, which are foundational for mathematics.",
    howToUse: [
      "Place a pile of mixed objects in the center of a small group.",
      "Ask students to sort the objects into piles.",
      "Do not give them the rule (e.g., sort by color); let them decide.",
      "Once sorted, ask: 'Why did you put these together?'"
    ],
    whatStudentsProduce: "Sorted piles of objects and a verbal explanation of the sorting rule.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "15 minutes",
    materialsNeeded: ["Mixed manipulatives (buttons, blocks, leaves, or cutouts)"],
    tags: ["Math", "Hands-on", "Low-prep"]
  },
  {
    id: "f-act-3",
    title: "Emotion Check-in Circle",
    type: "Activity",
    stage: "Foundational",
    grades: "Pre-K to Grade 2",
    subject: "Social-Emotional Learning (SEL)",
    skillsSupported: ["Self-awareness", "Empathy", "Communication"],
    cost: "Free",
    whatItIs: "A daily routine to help young learners identify and express their feelings.",
    whyItMatters: "Builds emotional vocabulary and a supportive classroom environment where students feel heard and respected.",
    howToUse: [
      "Gather students in a circle.",
      "Show a chart with faces showing basic emotions (happy, sad, angry, scared).",
      "Pass a talking piece (e.g., a soft toy). When a student holds it, they point to how they feel today.",
      "Optional: They can say why, but passing is allowed."
    ],
    whatStudentsProduce: "Self-identification of an emotion that matches their current affect.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "10 minutes",
    tags: ["SEL", "Routine", "Whole class"]
  },
  {
    id: "f-act-4",
    title: "Nature Observation Walk",
    type: "Activity",
    stage: "Foundational",
    grades: "Grades 1-2",
    subject: "Environmental Science / EVS",
    skillsSupported: ["Observation", "Curiosity", "Nature Appreciation"],
    cost: "Free",
    whatItIs: "A guided walk around the school ground to observe local flora and fauna.",
    whyItMatters: "Connects students directly to their local environment, fostering curiosity and scientific observation skills.",
    howToUse: [
      "Give each student a simple 'bingo' card (e.g., find a green leaf, a brown bug, a rough stone).",
      "Walk around the school premises.",
      "When a student finds an item, they point it out and mark their card.",
      "Return to class and discuss what everyone found."
    ],
    whatStudentsProduce: "A completed observation card and active participation in the group discussion.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "30 minutes",
    tags: ["Outdoor", "EVS", "Experiential"]
  },

  // PREPARATORY
  {
    id: "p-act-1",
    title: "Interview a Family Member",
    type: "Activity",
    stage: "Preparatory",
    grades: "Grades 3-5",
    subject: "Social Science / Language",
    skillsSupported: ["Communication", "Empathy", "Historical Inquiry"],
    cost: "Free",
    whatItIs: "Students formulate questions and interview an older family member about their childhood.",
    whyItMatters: "Introduces oral history, improves questioning skills, and bridges the gap between home and school learning.",
    howToUse: [
      "In class, discuss what makes a good question (open-ended vs. yes/no).",
      "Have students write 3-5 questions to ask a grandparent or older relative.",
      "Students conduct the interview at home and write down the answers.",
      "In the next class, students share one surprising thing they learned."
    ],
    whatStudentsProduce: "Written interview Q&A and a brief class sharing of the interviewee's perspective.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "1 class period (prep) + Homework",
    materialsNeeded: ["Notebook", "Pencil"],
    tags: ["Project", "Social Science", "Homework"]
  },
  {
    id: "p-act-2",
    title: "School Biodiversity Walk",
    type: "Activity",
    stage: "Preparatory",
    grades: "Grades 3-5",
    subject: "Science / EVS",
    skillsSupported: ["Data Collection", "Observation", "Environmental Awareness"],
    cost: "Free",
    whatItIs: "Map the different types of plants and insects found on the school grounds.",
    whyItMatters: "Teaches basic data collection methods and raises awareness of local ecosystems and biodiversity.",
    howToUse: [
      "Divide students into groups of 3.",
      "Assign each group a zone in the school yard.",
      "Groups tally how many different types of plants and insects they see.",
      "Collate data on the board to see which zone has the most biodiversity."
    ],
    whatStudentsProduce: "A collected data set (tally marks) and a basic understanding of biodiversity zones.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "45 minutes",
    tags: ["Science", "Outdoor", "Group activity"]
  },
  {
    id: "p-act-3",
    title: "Budget for a Class Event",
    type: "Activity",
    stage: "Preparatory",
    grades: "Grades 4-5",
    subject: "Mathematics",
    skillsSupported: ["Financial Literacy", "Problem Solving", "Basic Operations"],
    cost: "Free",
    whatItIs: "Students plan a hypothetical class party with a set budget.",
    whyItMatters: "Applies basic arithmetic to a highly engaging, real-world scenario, teaching financial constraints and decision-making.",
    howToUse: [
      "Give groups a budget (e.g., ₹500) for a class party.",
      "Provide a 'menu' of items with prices (snacks, decorations).",
      "Groups must select items without exceeding the budget.",
      "Groups present their final list and total cost."
    ],
    whatStudentsProduce: "An itemized budget list and final cost calculation that stays within the limit.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "40 minutes",
    tags: ["Math", "Real-world", "Group activity"]
  },

  // MIDDLE
  {
    id: "m-act-1",
    title: "Water-Use Survey",
    type: "Activity",
    stage: "Middle",
    grades: "Grades 6-8",
    subject: "Science / Social Science",
    skillsSupported: ["Data Analysis", "Research", "Civic Awareness"],
    cost: "Free",
    whatItIs: "Students track household water usage and calculate averages.",
    whyItMatters: "Connects daily habits to global resource issues while providing real data for statistical calculations.",
    howToUse: [
      "Students use a provided template to estimate daily water use in their home for one week (e.g., buckets for bathing, washing clothes).",
      "In class, students calculate their daily average.",
      "Anonymously pool the class data to find the class average, median, and range.",
      "Discuss ways to reduce water consumption based on the data."
    ],
    whatStudentsProduce: "Completed data table, accurate statistical calculations, and practical suggestions for conservation.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "1 week (homework) + 2 class periods",
    tags: ["Math", "Science", "Project", "Data"]
  },
  {
    id: "m-act-2",
    title: "Filtration Prototype Challenge",
    type: "Activity",
    stage: "Middle",
    grades: "Grades 6-8",
    subject: "Science",
    skillsSupported: ["Engineering Design", "Scientific Thinking", "Collaboration"],
    cost: "Free",
    whatItIs: "Design and build a water filter using common materials.",
    whyItMatters: "Introduces the engineering design process and practical application of physical separation methods.",
    howToUse: [
      "Explain the challenge: clean a sample of muddy water.",
      "Provide materials. Groups must design the layers of their filter and draw a diagram before building.",
      "Build and test the filters by pouring muddy water through.",
      "Compare clarity of the filtered water across groups and discuss which layers worked best."
    ],
    whatStudentsProduce: "A drawn diagram, a physical working prototype, and an evaluation of its effectiveness.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "80 minutes (2 periods)",
    materialsNeeded: ["Plastic bottles cut in half", "Sand", "Gravel", "Cotton/Cloth", "Muddy water"],
    tags: ["Science", "Hands-on", "STEM"]
  },
  {
    id: "m-act-3",
    title: "Local Governance Simulation",
    type: "Activity",
    stage: "Middle",
    grades: "Grades 7-8",
    subject: "Civics / Political Science",
    skillsSupported: ["Debate", "Civic Literacy", "Public Speaking"],
    cost: "Free",
    whatItIs: "Role-play a Gram Panchayat or Municipal Council meeting solving a local issue.",
    whyItMatters: "Brings abstract civic structures to life and develops skills in negotiation, debate, and democratic process.",
    howToUse: [
      "Present a local issue (e.g., allocating funds for a new playground vs. repairing streetlights).",
      "Assign roles: Sarpanch/Mayor, Ward Members, concerned citizens.",
      "Hold a 20-minute structured debate.",
      "Hold a vote to make a final decision."
    ],
    whatStudentsProduce: "Verbal arguments representing their assigned role's perspective, culminating in a democratic vote.",
    lowResourceFriendly: true,
    mobileFriendly: false,
    timeRequired: "1 class period",
    tags: ["Role-play", "Civics", "Speaking"]
  },
  {
    id: "m-act-4",
    title: "AI Output Comparison Task",
    type: "Activity",
    stage: "Middle",
    grades: "Grades 7-8",
    subject: "Digital Literacy / ICT",
    skillsSupported: ["Critical Thinking", "Digital Literacy", "Evaluation"],
    cost: "Free",
    whatItIs: "Critically evaluate AI-generated text for accuracy and bias.",
    whyItMatters: "Prepares students to be critical consumers of AI-generated content, recognizing hallucinations and hidden biases.",
    howToUse: [
      "Provide students with an AI-generated essay on a historical event containing deliberate subtle errors or biases.",
      "Students work in pairs to fact-check the essay using textbooks or approved websites.",
      "Discuss as a class: What did the AI get right? What did it get wrong? Why shouldn't we trust it blindly?"
    ],
    whatStudentsProduce: "An annotated document highlighting factual errors, biases, and unverified claims.",
    lowResourceFriendly: false,
    mobileFriendly: true,
    timeRequired: "40 minutes",
    tags: ["AI", "Digital Literacy", "Critical Thinking"]
  },

  // SECONDARY
  {
    id: "s-act-1",
    title: "Evidence-Based Editorial Writing",
    type: "Activity",
    stage: "Secondary",
    grades: "Grades 9-12",
    subject: "English / Language",
    skillsSupported: ["Persuasive Writing", "Critical Thinking", "Information Literacy"],
    cost: "Free",
    whatItIs: "Students write an editorial on a current event using reliable sources.",
    whyItMatters: "Develops the ability to construct a persuasive argument supported by verified facts and credible sources, a crucial life skill.",
    howToUse: [
      "Select a current debate topic (e.g., climate change policy, technology in schools).",
      "Teach students how to evaluate source credibility (CRAAP test).",
      "Students research the topic, gathering at least 3 credible sources.",
      "Draft an editorial that includes a clear thesis, supporting evidence, and a counter-argument."
    ],
    whatStudentsProduce: "Final editorial piece with proper citations, logical argumentation, and a clear thesis.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    timeRequired: "3 class periods",
    tags: ["Writing", "Research", "Language"]
  },
  {
    id: "s-act-2",
    title: "School Data Dashboard Project",
    type: "Activity",
    stage: "Secondary",
    grades: "Grades 10-12",
    subject: "Mathematics / Computer Science",
    skillsSupported: ["Data Visualization", "Analytical Thinking", "Technology Use"],
    cost: "Free",
    whatItIs: "Create a dashboard analyzing a dataset relevant to the school (e.g., sports scores, attendance trends).",
    whyItMatters: "Teaches modern data analysis and visualization skills using industry-standard tools.",
    howToUse: [
      "Provide a raw, anonymized dataset.",
      "Students clean the data and identify key trends.",
      "Use spreadsheet tools to create charts and graphs.",
      "Compile the visuals into a dashboard and present the findings to the class."
    ],
    whatStudentsProduce: "A digital data dashboard with charts and a brief presentation summarizing key insights.",
    lowResourceFriendly: false,
    mobileFriendly: false,
    timeRequired: "1 week project",
    materialsNeeded: ["Computers", "Spreadsheet software (Excel/Google Sheets)"],
    tags: ["Data", "Tech", "Project-based"]
  },
  {
    id: "s-act-3",
    title: "Bias in AI Investigation",
    type: "Activity",
    stage: "Secondary",
    grades: "Grades 10-12",
    subject: "Computer Science / Social Science",
    skillsSupported: ["Ethical Reasoning", "Critical Thinking", "Tech Literacy"],
    cost: "Free",
    whatItIs: "Investigate how algorithmic bias affects hiring or lending software.",
    whyItMatters: "Brings awareness to the societal impact of algorithmic decision-making and the ethical responsibilities of tech developers.",
    howToUse: [
      "Review a case study of a biased algorithm (e.g., facial recognition failures, resume sorting bias).",
      "Discuss in groups: Who built this? What data was used? Who is harmed?",
      "Propose three ethical guidelines for companies developing AI."
    ],
    whatStudentsProduce: "A set of proposed ethical guidelines and a group reflection on algorithmic harm.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    timeRequired: "45 minutes",
    tags: ["Ethics", "AI", "Discussion"]
  },

  // SUPPORT GUIDES
  {
    id: "sg-1",
    title: "Using Role-Play in Social Science",
    type: "Support Guide",
    stage: "Middle",
    subject: "Social Science",
    skillsSupported: ["Empathy", "Communication", "Historical Perspective"],
    cost: "Free",
    whatItIs: "A guide on how to facilitate effective role-play scenarios without them turning into chaos.",
    whyItMatters: "Deepens historical empathy and understanding of multiple perspectives, but requires careful structure to succeed.",
    howToUse: "Assign specific characters with brief biography cards. Set clear rules for engagement. Always include a structured debrief session after the role-play to connect actions back to the learning objectives. Assess the accuracy of the perspective represented, not the acting ability.",
    whatStudentsProduce: "A structured, empathetic engagement with historical or social scenarios.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    tags: ["Pedagogy Guide", "Social Science", "Active Learning"]
  },
  {
    id: "sg-2",
    title: "Helping Students Verify AI Outputs",
    type: "Support Guide",
    stage: ["Middle", "Secondary"],
    subject: "Cross-curricular",
    skillsSupported: ["Digital Literacy", "Critical Thinking"],
    cost: "Free",
    whatItIs: "Strategies for teaching students to fact-check Generative AI.",
    whyItMatters: "Builds critical consumption habits for digital information in an era of easily generated misinformation.",
    howToUse: "Teach 'lateral reading' (opening new tabs to verify claims). Treat AI as a 'confident peer who sometimes hallucinates' rather than an encyclopedia. Use reflection prompts: Did the AI provide a source? Is the claim verifiable elsewhere? Could there be a bias in this answer?",
    whatStudentsProduce: "Critical thinking habits and verification processes applied to digital research.",
    lowResourceFriendly: false,
    mobileFriendly: true,
    tags: ["AI", "Digital Literacy", "Guide"]
  },
  {
    id: "sg-3",
    title: "Differentiating a Mathematics Investigation",
    type: "Support Guide",
    stage: "Preparatory",
    subject: "Mathematics",
    skillsSupported: ["Problem Solving"],
    cost: "Free",
    whatItIs: "How to use 'low floor, high ceiling' tasks in math.",
    whyItMatters: "Ensures all students can access the curriculum while allowing advanced students to push their thinking, preventing both frustration and boredom.",
    howToUse: "Start with an open-ended question that everyone can access (low floor). Allow students to take the problem as far as they can, discovering complex patterns (high ceiling). Provide physical manipulatives for all students, not just those struggling. Don't cap the difficulty; let advanced students surprise you.",
    whatStudentsProduce: "Personalized mathematical discoveries and varied problem-solving approaches.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    tags: ["Math", "Differentiation", "Inclusion"]
  },

  // TEMPLATES
  {
    id: "tpl-1",
    title: "Universal Lesson Planning Template",
    type: "Template",
    stage: "All Stages",
    cost: "Free",
    whatItIs: "A printable/copyable template incorporating skill focus and inclusion mandates.",
    whyItMatters: "Standardizes lesson planning to ensure every lesson addresses core skills and inclusive design.",
    howToUse: "Copy the template text or print it out. Use it during your weekly planning sessions to map out learning objectives, activities, and specific differentiation strategies.",
    whatStudentsProduce: "More structured, accessible learning experiences.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    tags: ["Planning", "Template"]
  },
  {
    id: "tpl-2",
    title: "Peer Feedback Form (TAG Method)",
    type: "Template",
    stage: ["Preparatory", "Middle", "Secondary"],
    cost: "Free",
    whatItIs: "A simple form for students to give structured feedback: Tell something you like, Ask a question, Give a suggestion.",
    whyItMatters: "Scaffolds peer feedback so it remains constructive, specific, and actionable rather than vague or overly critical.",
    howToUse: "Print out or display on a board. Have students use the TAG framework when reviewing a partner's essay, project, or presentation.",
    whatStudentsProduce: "Constructive peer feedback sheets that improve mutual learning.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    tags: ["Assessment", "Formative", "Template"]
  },

  // OPEN RESOURCES
  {
    id: "oer-1",
    title: "NCERT Official E-Books",
    type: "Official Resource",
    stage: "All Stages",
    cost: "Official public resource",
    whatItIs: "Digital versions of all NCERT textbooks.",
    whyItMatters: "Provides the definitive, official source material for CBSE affiliated schools.",
    howToUse: "Use as primary reference texts, share specific chapters digitally with students, or print sections for offline reading.",
    whatStudentsProduce: "Reading comprehension and curriculum alignment.",
    lowResourceFriendly: true,
    mobileFriendly: true,
    url: "https://ncert.nic.in/textbook.php",
    signInRequired: false,
    notesForIndianContext: "The definitive source for CBSE affiliated schools.",
    tags: ["Textbook", "Official"]
  },
  {
    id: "oer-2",
    title: "DIKSHA Portal",
    type: "Official Resource",
    stage: "All Stages",
    cost: "Official public resource",
    whatItIs: "National Digital Infrastructure for Teachers containing interactive content, lesson plans, and worksheets mapped to NCERT.",
    whyItMatters: "Highly relevant, officially endorsed, and available in multiple Indian languages for contextualized teaching.",
    howToUse: "Search for your specific grade and subject. Use the interactive modules on a smartboard or assign them for homework.",
    whatStudentsProduce: "Engagement with interactive curriculum modules and digital worksheets.",
    lowResourceFriendly: false,
    mobileFriendly: true,
    url: "https://diksha.gov.in/",
    signInRequired: false,
    tags: ["Interactive", "Official", "Multilingual"]
  },
  {
    id: "oer-3",
    title: "PhET Interactive Simulations",
    type: "Open Educational Resource",
    stage: ["Preparatory", "Middle", "Secondary"],
    subjects: ["Science", "Mathematics"],
    cost: "Open Source",
    whatItIs: "Free interactive math and science simulations from University of Colorado Boulder.",
    whyItMatters: "Demonstrates abstract science and math concepts visually, making them accessible without expensive lab equipment.",
    howToUse: "Project a simulation to demonstrate a concept, or let students interact with the simulation individually on devices to discover relationships (e.g., Ohm's law, fractions).",
    whatStudentsProduce: "Visual understanding of complex formulas and physical relationships.",
    lowResourceFriendly: true, // Can be downloaded offline
    mobileFriendly: true,
    url: "https://phet.colorado.edu/",
    signInRequired: false,
    openSourceStatus: "Open Source (CC-BY)",
    notesForIndianContext: "Can be downloaded for offline use in low-bandwidth schools. Essential for science labs without physical equipment.",
    tags: ["Simulation", "Science", "Math", "Offline-capable"]
  },
  {
    id: "oer-4",
    title: "Scratch",
    type: "Tool",
    stage: ["Preparatory", "Middle"],
    subjects: ["Computer Science", "Logic"],
    skillsSupported: ["Computational Thinking", "Creativity"],
    cost: "Free",
    whatItIs: "Block-based visual programming language designed for children.",
    whyItMatters: "Introduces coding and computational thinking visually, avoiding syntax errors that often frustrate beginners.",
    howToUse: "Assign simple projects (e.g., animate a name, build a simple game). Use the offline desktop app if internet is unreliable.",
    whatStudentsProduce: "Interactive stories, games, and animations.",
    lowResourceFriendly: false,
    mobileFriendly: false, // best on desktop/tablet
    url: "https://scratch.mit.edu/",
    signInRequired: false,
    openSourceStatus: "Free to use",
    notesForIndianContext: "Offline desktop app available for schools with limited internet.",
    tags: ["Coding", "CS", "Interactive", "Offline-capable"]
  },
  {
    id: "oer-5",
    title: "GeoGebra",
    type: "Tool",
    stage: ["Middle", "Secondary"],
    subjects: ["Mathematics"],
    skillsSupported: ["Spatial Reasoning", "Problem Solving"],
    cost: "Free",
    whatItIs: "Dynamic mathematics software bringing together geometry, algebra, spreadsheets, graphing, statistics and calculus.",
    whyItMatters: "Allows students to visualize geometry and algebra concepts dynamically, seeing immediate changes when manipulating variables.",
    howToUse: "Use to demonstrate geometry theorems dynamically on a projector, or have students verify algebraic solutions graphically.",
    whatStudentsProduce: "Dynamic geometric constructions and graphical solutions.",
    lowResourceFriendly: false,
    mobileFriendly: true,
    url: "https://www.geogebra.org/",
    signInRequired: false,
    openSourceStatus: "Free for non-commercial use",
    tags: ["Math", "Geometry", "Tool"]
  }
];
`
fs.writeFileSync('src/data/resources.ts', fileContent);
console.log('Updated resources.ts');
