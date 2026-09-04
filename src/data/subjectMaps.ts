import { SubjectSkillMap } from '@/types';

export const subjectMaps: SubjectSkillMap[] = [
  // ================= GRADE 3 =================
  {
    id: "g3-evs-1",
    stage: "Preparatory",
    grade: "Grade 3",
    learningArea: "The World Around Us",
    subject: "Environmental Studies (EVS)",
    essentialKnowledge: [
      "Basic survival needs of local living things (water, sunlight, soil nutrients, shelter)",
      "Distinction between cultivated plants and native wild flora",
      "Common local animal habitats and seasonal shelter adaptations"
    ],
    keyConcepts: ["Interdependence", "Local Biodiversity", "Habitat Stewardship"],
    vocabulary: ["Habitat", "Flora", "Fauna", "Adaptation", "Nutrients", "Tally count", "Canopy"],
    subjectPractices: [
      "Direct outdoor observation protocols",
      "Categorical grouping by observable physical traits",
      "Non-destructive specimen examination"
    ],
    curricularGoal: "Develop conscious observational awareness of immediate ecological surroundings and recognize the mutual interdependence of living organisms.",
    competency: "Observe, record, and classify common plants and animals in the school neighbourhood according to their observable physical features and habitat requirements.",
    learningOutcome: "Students can systematically observe 5 local plant or animal species, record their findings using accurate tally counts, and explain how their features help them survive in their immediate habitat.",
    primarySkill: "Categorical observation and systematic field tallying: Identifies distinguishing physical traits, records discrete counts without repetition, and groups organisms based on verifiable environmental criteria.",
    supportingSkills: [
      "Pictorial data translation",
      "Scientific sketch labelling",
      "Collaborative partner checking",
      "Environmental empathy"
    ],
    pedagogy: [
      "Nature discovery walks",
      "Guided sensory observation",
      "Concrete-to-abstract sorting exercises",
      "Small-group peer comparison"
    ],
    activityIds: ["act-g3-neighbourhood-walk"],
    studentOutput: "A laminated or chart-paper 'Local Species Tally & Habitat Card' with annotated drawings and accurate frequency bars.",
    evidence: [
      "Knowledge: Accurate identification of 3 essential plant survival requirements in oral response",
      "Performance: Precision in tallying items during the outdoor boundary walk without double-counting",
      "Reflection: Journal entry explaining one organism that benefits humans in the local neighbourhood"
    ],
    assessmentIds: ["formative-observation-g3", "rubric-data-literacy-g3"],
    inclusion: [
      "Provide tactile leaf-rubbing stations and audio bird-call identification for visually impaired students",
      "Allow oral explanation or pointing to illustrated vocabulary boards for emerging readers",
      "Offer magnified viewfinders for students with motor or focusing challenges"
    ],
    resourceIds: ["r-evs-textbook-3", "r-planning-template-g3"],
    sourceType: "official-reference",
    status: "in-development",
    whatStudentsLearn: "How local plants, trees, and small fauna depend on their immediate soil, sunlight, and water conditions to thrive in Indian neighbourhoods.",
    whatStudentsCanDo: "Distinguish between native trees and invasive garden plants, gather field counts without disrupting nature, and classify living things by physical habitat.",
    howTeachersTeachIt: "Teachers facilitate structured 15-minute perimeter walks, model gentle observation without picking leaves, and guide students from raw tally marks into pictorial graphs.",
    whatStudentsProduce: "Field observation checklists, species flashcards, and a collaboratively created classroom Biodiversity Wall Map.",
    howLearningBecomesVisible: "Students point out specific leaf veins, bark textures, and animal behaviours during outdoor discussions and correctly sequence tally bars.",
    howProgressIsAssessed: "Teacher observation checklists during the walk, verification of tally accuracy against a partner's count, and an oral presentation of one organism's needs.",
    supportAndExtension: "Scaffold: Pre-printed photo cards of target local trees (Neem, Peepal, Banyan) to match against real leaves. Extension: Hypothesize why certain birds only visit specific trees."
  },
  {
    id: "g3-math-1",
    stage: "Preparatory",
    grade: "Grade 3",
    learningArea: "Mathematics & Computational Thinking",
    subject: "Mathematics",
    essentialKnowledge: [
      "Frequency tallying in groups of 5",
      "One-to-one pictorial representation (Pictographs)",
      "Comparative terms: more than, fewer than, equal to, difference"
    ],
    keyConcepts: ["Data Representation", "Pattern Recognition", "Proportional Comparison"],
    vocabulary: ["Tally mark", "Frequency", "Pictograph", "Data table", "Scale", "Most common", "Least common"],
    subjectPractices: [
      "Systematic data recording",
      "Spatial bar alignment",
      "Arithmetic difference calculation from graphs"
    ],
    curricularGoal: "Organize, represent, and interpret simple discrete numerical datasets gathered from authentic everyday classroom and community environments.",
    competency: "Collect simple categorical data, organize it using tally marks, construct a pictograph with a uniform scale, and answer comparative questions.",
    learningOutcome: "Students can construct a clean pictograph with uniform horizontal or vertical bars from a raw tally sheet and deduce comparative statements.",
    primarySkill: "Visual data reasoning: Translates raw counts into standardized spatial icons, aligns graph baselines, and computes quantitative differences between categories.",
    supportingSkills: [
      "Discrete counting accuracy",
      "Spatial coordination",
      "Mathematical verbalization"
    ],
    pedagogy: [
      "Concrete manipulatives (counters, seeds, beads)",
      "Floor-grid graphing with chalk",
      "Interactive whole-class tally games"
    ],
    activityIds: ["act-g3-neighbourhood-walk"],
    studentOutput: "A completed group Pictograph Poster accompanied by three written or dictated comparison sentences.",
    evidence: [
      "Knowledge: Explains why tally marks are bundled in groups of five to aid rapid skip-counting",
      "Performance: Assembles a pictograph where icons are evenly spaced and adhere to an established baseline",
      "Reflection: Corrects a deliberately misplaced tally mark in a sample problem"
    ],
    assessmentIds: ["rubric-data-literacy-g3"],
    inclusion: [
      "Use raised physical tokens or magnetic buttons for students with fine-motor difficulty",
      "Provide high-contrast grid paper with darkened baseline markers"
    ],
    resourceIds: ["r-evs-textbook-3"],
    sourceType: "official-reference",
    status: "in-development",
    whatStudentsLearn: "How raw counts can be summarized cleanly using bundles of 5 and translated into pictures so anyone can quickly see what is most or least frequent.",
    whatStudentsCanDo: "Convert counted items into tally marks, arrange picture cards onto a grid without overlapping, and read off the highest and lowest amounts.",
    howTeachersTeachIt: "Teachers demonstrate counting bundles using actual sticks or pencils, then draw a four-gate-and-cross-bar tally on the board before handing out paper charts.",
    whatStudentsProduce: "Individual Math Tally Booklets and large-format group bar pictographs comparing classroom lunchboxes, footwear types, or pencil colours.",
    howLearningBecomesVisible: "Students answer 'How many more?' by counting the exposed icons on the longer column rather than recalculating from memory.",
    howProgressIsAssessed: "Rubric evaluation of tally bundling, icon spacing uniformity, and oral response to comparative questions.",
    supportAndExtension: "Scaffold: Use dot stickers to ensure identical icon size. Extension: Introduce a scale where 1 smiley face represents 2 students."
  },

  // ================= GRADE 6 =================
  {
    id: "g6-sci-1",
    stage: "Middle",
    grade: "Grade 6",
    learningArea: "Science",
    subject: "Science",
    essentialKnowledge: [
      "Essential human nutrients: Carbohydrates, Proteins, Fats, Vitamins, Minerals, Dietary Fibre, Water",
      "Symptoms and physiological mechanisms of nutritional deficiency diseases (Scurvy, Rickets, Anemia, Goitre)",
      "Composition of a balanced Indian thali across diverse economic and regional contexts"
    ],
    keyConcepts: ["Nutrient Density", "Metabolic Energy", "Dietary Balance", "Food Security"],
    vocabulary: ["Nutrient", "Macronutrient", "Micronutrient", "Deficiency", "Balanced diet", "Roughage", "Calorie"],
    subjectPractices: [
      "Food sample starch and protein spot testing",
      "Nutritional label deconstruction",
      "Dietary intake logging and categorization"
    ],
    curricularGoal: "Understand human nutritional requirements and evaluate dietary practices to maintain physical health and prevent common deficiency disorders.",
    competency: "Analyze personal and community dietary intakes against recommended nutrient profiles and design an affordable balanced meal using locally accessible seasonal ingredients.",
    learningOutcome: "Students can deconstruct a 3-day meal intake, categorize food items into macronutrients and micronutrients, identify nutritional gaps, and formulate a balanced meal plan using affordable local Indian foods.",
    primarySkill: "Nutritional data analysis and evidence-based meal design: Categorizes dietary components, identifies micronutrient deficits, and constructs balanced meal plans based on physiological requirements rather than arbitrary preference.",
    supportingSkills: [
      "Biochemical testing protocols (Iodine test)",
      "Economic affordability estimation",
      "Socio-cultural empathy",
      "Health communication"
    ],
    pedagogy: [
      "Inquiry-based laboratory tests",
      "Case study roleplay of community health workers",
      "Thali visual mapping and collaborative meal budgeting"
    ],
    activityIds: ["act-g6-community-explorer"],
    studentOutput: "A 'Community Nutrition Guide & Balanced Thali Blueprint' specifying food groups, local substitutes (e.g. jaggery for iron, moringa for vitamins), and deficiency warnings.",
    evidence: [
      "Knowledge: Explains why polished white rice lacks vitamin B1 compared to parboiled or unpolished grain",
      "Performance: Accurately executes the iodine test for starch and copper sulphate/caustic soda test for protein",
      "Reflection: Self-audit of personal weekly vegetable and pulse consumption"
    ],
    assessmentIds: ["formative-group-work", "rubric-inquiry-g6"],
    inclusion: [
      "Use textured food models or real raw pulses/grains for sensory reinforcement",
      "Account for regional, vegetarian, vegan, and fasting dietary traditions without cultural judgment",
      "Provide pictorial food classification charts with regional Indian dish names (e.g., Khichdi, Idli, Dal-Baati, Sattu)"
    ],
    resourceIds: ["r-sci-textbook-6", "r-vocational-toolkit"],
    sourceType: "official-reference",
    status: "in-development",
    whatStudentsLearn: "The biochemical necessity of diverse nutrient groups and how lack of specific vitamins and minerals impairs child development and health.",
    whatStudentsCanDo: "Perform basic biochemical spot tests, read nutrition panels on packaged snacks, and build a nutritionally complete Indian plate on a modest budget.",
    howTeachersTeachIt: "Teachers demonstrate food testing in the science lab with iodine and biuret solutions, then transition into a meal design challenge using actual grocery prices.",
    whatStudentsProduce: "Lab investigation logs with color change records, nutritional comparison charts, and a classroom 'Affordable Balanced Diet' booklet.",
    howLearningBecomesVisible: "Students justify their inclusion of specific pulses, green leafy vegetables, or millets by naming the exact nutrient and its physiological function.",
    howProgressIsAssessed: "Laboratory accuracy assessment, meal plan rubric evaluating nutritional completeness and realistic budget estimation.",
    supportAndExtension: "Scaffold: Provide a template thali divided into 4 quadrants with pre-labeled food groups. Extension: Calculate the daily cost per student of a school Mid-Day Meal and propose one nutrient enhancement."
  },
  {
    id: "g6-soc-1",
    stage: "Middle",
    grade: "Grade 6",
    learningArea: "Social Science & Vocational Studies",
    subject: "Social Science",
    essentialKnowledge: [
      "Diversity of rural and urban livelihoods in India",
      "Functions and constraints of informal sector workers and municipal service providers",
      "The distinction between immediate visible disruptions and structural civic challenges"
    ],
    keyConcepts: ["Community Interdependence", "Civic Infrastructure", "Root-Cause Analysis"],
    vocabulary: ["Livelihood", "Informal economy", "Sanitation", "Municipal ward", "Stakeholder", "Symptom", "Root cause"],
    subjectPractices: [
      "Semi-structured interviewing",
      "Field observation charting",
      "Multi-perspective cause-and-effect mapping"
    ],
    curricularGoal: "Appreciate the social and economic interdependence of diverse occupations and investigate civic infrastructure problems affecting community wellbeing.",
    competency: "Conduct structured stakeholder interviews to trace a community problem back to its organizational and physical root causes.",
    learningOutcome: "Students can identify a persistent school or local civic problem, interview two affected community workers, and map the issue using a root-cause tree.",
    primarySkill: "Root-cause inquiry and multi-perspective framing: Unpacks complex civic problems by tracing surface symptoms to operational and infrastructure roots without blaming individuals.",
    supportingSkills: [
      "Empathetic listening",
      "Interview transcript summarizing",
      "Constructive peer feedback"
    ],
    pedagogy: [
      "Case studies of local sanitation workers and street vendors",
      "The 'Five Whys' iterative inquiry method",
      "Peer gallery walks and constructive critique"
    ],
    activityIds: ["act-g6-community-explorer"],
    studentOutput: "A 'Community Problem Tree Poster' with direct interview evidence and a neutral, non-blaming problem definition statement.",
    evidence: [
      "Knowledge: Explains why blaming individual habits fails to resolve civic infrastructure bottlenecks",
      "Performance: Conducts respectful stakeholder interview following ethical student research guidelines",
      "Reflection: Written reflection explaining how an interviewed worker's daily routine changed their perspective"
    ],
    assessmentIds: ["rubric-inquiry-g6"],
    inclusion: [
      "Allow interviews in the home language of the respondent with collaborative group translation",
      "Support written work with audio voice clips or annotated photo journals"
    ],
    resourceIds: ["r-vocational-toolkit"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    whatStudentsLearn: "How local municipal and school communities rely on everyday workers, and why systemic problems require infrastructure and resource solutions rather than moralizing blame.",
    whatStudentsCanDo: "Formulate polite, respectful inquiry questions, take objective field notes, and distinguish between a symptom (overflowing dustbin) and a root cause (irregular collection route).",
    howTeachersTeachIt: "Teachers roleplay interview scenarios in the classroom, teach the 'Five Whys' questioning protocol, and moderate peer review discussions.",
    whatStudentsProduce: "Problem Tree diagrams, interview summary cards with quotes, and proposed inquiry questions for municipal representatives.",
    howLearningBecomesVisible: "Students articulate the perspective of people doing manual community labour and point to specific organizational factors during poster presentations.",
    howProgressIsAssessed: "Rubric assessing interview ethics, symptom vs. cause distinction, and collaborative team contribution.",
    supportAndExtension: "Scaffold: Sentence starter interview prompts. Extension: Write a formal 1-page letter to the School Management Committee (SMC) summarizing findings."
  },

  // ================= GRADE 7 =================
  {
    id: "g7-sci-1",
    stage: "Middle",
    grade: "Grade 7",
    learningArea: "Science",
    subject: "Science",
    essentialKnowledge: [
      "Groundwater hydrology: Water table, aquifers, infiltration, and depletion rates",
      "Physical and biological water contamination vectors in Indian watersheds",
      "Principles of granular gravity filtration: particle settling, mechanical trapping, and adsorption by activated carbon"
    ],
    keyConcepts: ["Hydrological Cycle", "Aquifer Depletion", "Filtration Physics", "Resource Conservation"],
    vocabulary: ["Infiltration", "Aquifer", "Water table", "Turbidity", "Adsorption", "Flow rate", "Sedimentation"],
    subjectPractices: [
      "Volumetric time-rate calibration",
      "Bench-scale engineering prototyping",
      "Iterative material layer sequencing"
    ],
    curricularGoal: "Understand the dynamics of water resources, evaluate the impact of human consumption and wastage, and engineer low-cost purification prototypes.",
    competency: "Calculate empirical flow and wastage metrics across school taps and design, build, and test a functional multi-layered granular gravity water filter.",
    learningOutcome: "Students can calculate campus water loss from measured drip rates, engineer a 4-layer gravity filter column, and measure output turbidity and flow speed.",
    primarySkill: "Scientific investigation and functional prototyping: Measures empirical flow rates with accurate dimensional conversions, formulates hypotheses regarding particle trapping, and builds iterative filtration hardware.",
    supportingSkills: [
      "Dimensional unit conversion (mL/s to L/month)",
      "Controlled variable manipulation",
      "Safety protocol enforcement"
    ],
    pedagogy: [
      "Campus water auditing fieldwork",
      "Hands-on maker engineering challenge",
      "Comparative flow-rate lab testing"
    ],
    activityIds: ["act-g7-water-audit"],
    studentOutput: "A calibrated benchtop water filter column, a filtration performance log, and a 1-page school water conservation proposal.",
    evidence: [
      "Knowledge: Explains why activated charcoal adsorbs organic odors while sand traps suspended solids",
      "Performance: Accurately times drip rate and calculates 30-day extrapolated volume without arithmetic error",
      "Reflection: Self-critique of prototype failure points when channel formation caused cloudy runoff"
    ],
    assessmentIds: ["formative-audit-review", "performance-filtration-test"],
    inclusion: [
      "Provide pre-cut plastic containers and spill trays to ensure laboratory safety",
      "Allow collaborative division of tasks (timekeeper, materials assembler, data logger, presenter)"
    ],
    resourceIds: ["r-sci-textbook-7", "r-water-audit-tool"],
    sourceType: "suggested-activity",
    status: "in-development",
    whatStudentsLearn: "The hidden volumes of water wasted through minor plumbing leaks and the physical science principles underlying gravity-fed water purification.",
    whatStudentsCanDo: "Measure flow rates using stopwatches and measuring cylinders, convert rates across time scales, and construct functional physical filter columns from common earth materials.",
    howTeachersTeachIt: "Teachers lead a campus-wide tap audit expedition, establish lab safety rules for non-potable test water, and guide students through iterative filter assembly.",
    whatStudentsProduce: "Working filter columns, turbidity comparison scale logs, and a school tap audit spreadsheet with recommended maintenance priorities.",
    howLearningBecomesVisible: "Students demonstrate clear water outflow from brown mud-water inflow and explain the mechanical function of every single granular layer.",
    howProgressIsAssessed: "Evaluation of calculation accuracy, engineering prototype stability, and understanding of potable vs. filtered water safety.",
    supportAndExtension: "Scaffold: Pre-formatted arithmetic multiplication table for monthly drip rates. Extension: Compare filter flow rate using coarse sand vs. fine sand and graph the trade-off between speed and clarity."
  },

  // ================= GRADE 8 =================
  {
    id: "g8-ct-1",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Computational Thinking, Artificial Intelligence & Ethics",
    subject: "Computer Science / AI",
    essentialKnowledge: [
      "Machine learning workflow: Training data collection, feature selection, pattern training, prediction, and validation",
      "Sources of algorithmic bias: Historical skew, sampling under-representation, proxy variables, and labeler prejudice",
      "Data privacy norms for students: Personally Identifiable Information (PII), biometric safeguards, and consent boundaries",
      "Human-in-the-loop governance: Fallback protocols, confidence thresholds, and right to human appeal"
    ],
    keyConcepts: ["Machine Learning", "Algorithmic Bias", "Data Governance", "Human-Centred Design"],
    vocabulary: ["Algorithm", "Training dataset", "Sampling bias", "Proxy variable", "Confidence score", "Human-in-the-loop", "PII"],
    subjectPractices: [
      "Dataset auditing for representation gaps",
      "Ethical risk scenario testing",
      "System architecture flowcharting"
    ],
    curricularGoal: "Understand computational principles of machine learning, audit algorithmic systems for ethical vulnerabilities, and engineer technology solutions with human safeguards.",
    competency: "Design a conceptual AI solution to address a tangible school problem, identify potential dataset biases, and establish human-in-the-loop oversight mechanisms.",
    learningOutcome: "Students can map an end-to-end AI system on a design canvas, pinpoint two failure modes stemming from biased training data, and write a human-oversight policy.",
    primarySkill: "Responsible AI literacy and algorithmic bias auditing: Evaluates machine learning pipelines, identifies hidden sampling prejudices in data, and specifies proportional human-in-the-loop safeguards.",
    supportingSkills: [
      "Decomposition of complex tasks into data inputs and model outputs",
      "Ethical risk anticipation",
      "Non-personified technical writing"
    ],
    pedagogy: [
      "Unplugged data-matching simulations",
      "Case studies of real algorithmic bias in facial recognition and hiring",
      "Collaborative product design studios and peer red-teaming"
    ],
    activityIds: ["act-g8-ai-school-problem", "act-g8-project-waste-segregator", "act-g8-project-air-monitor"],
    studentOutput: "A completed 'Responsible AI Solution Canvas' with an annotated training dataset specification and an 'Algorithmic Bias Impact Assessment'.",
    evidence: [
      "Knowledge: Explains clearly why an algorithm cannot 'think' or 'care' but only calculates statistical correlations from historical records",
      "Performance: Identifies at least two under-represented demographics or edge cases in a given training dataset",
      "Reflection: Analyzes how automated profiling can harm student autonomy and fairness"
    ],
    assessmentIds: ["portfolio-ai-design", "rubric-ai-ethics-g8"],
    inclusion: [
      "Provide unplugged physical cards for visual learners to sort before drawing system diagrams",
      "Encourage design challenges tailored to diverse student interests (sports, arts, library, ecology)"
    ],
    resourceIds: ["r-ai-ethics-guide", "r-curriculum-middle"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    whatStudentsLearn: "How artificial intelligence systems learn from data patterns, why biased data creates discriminatory tools, and why critical human oversight must govern high-stakes automated decisions.",
    whatStudentsCanDo: "Deconstruct an AI product into inputs, model task, outputs, and safeguards, audit training sets for bias, and design human-in-the-loop approval workflows.",
    howTeachersTeachIt: "Teachers lead unplugged pattern-matching simulations where incomplete training sets fail on test cards, discuss real-world case studies, and guide students through design canvas creation.",
    whatStudentsProduce: "Ethical AI Design Canvases, Student Privacy Safeguard Charters, and presentations defending their design against peer bias interrogations.",
    howLearningBecomesVisible: "Students avoid anthropomorphic language (like 'the AI thinks') and instead explain mathematical correlation, training limits, and exact human override points.",
    howProgressIsAssessed: "Rubric evaluation of model understanding, depth of bias identification, feasibility of human safeguards, and clarity of technical communication.",
    supportAndExtension: "Scaffold: Provide a structured AI Canvas template with prompting questions in each box. Extension: Write pseudo-code for a confidence-score threshold with automated human escalation triggers."
  },

  // ================= GRADE 9 =================
  {
    id: "g9-soc-1",
    stage: "Secondary",
    grade: "Grade 9",
    learningArea: "Social Science",
    subject: "Democratic Politics & Economics",
    essentialKnowledge: [
      "Constitutional provisions for democratic decision-making and fundamental rights in India",
      "Structure and functions of local self-government (Municipal Corporations, Municipalities, Gram Panchayats)",
      "Methodology for evaluating secondary statistical sources (government gazettes, survey data, independent research)",
      "Standard conventions of executive policy writing: Context, Evidence, Trade-offs, SMART Recommendations"
    ],
    keyConcepts: ["Constitutionalism", "Public Policy", "Empirical Argumentation", "Civic Trade-Offs"],
    vocabulary: ["Jurisdiction", "Stakeholder", "Empirical", "Trade-off", "Counter-argument", "Statutory mandate", "SMART criteria"],
    subjectPractices: [
      "Secondary research evaluation and citation",
      "Stakeholder perspective synthesis",
      "Executive memorandum composition"
    ],
    curricularGoal: "Deepen understanding of democratic institutions, critically evaluate public policies using empirical evidence, and articulate reasoned civic arguments.",
    competency: "Formulate, substantiate, and defend a two-page policy brief addressing a local civic issue, integrating quantitative evidence, stakeholder analysis, and actionable recommendations.",
    learningOutcome: "Students can research a contested local community issue, synthesize statistical data with stakeholder testimonies, draft a formal 2-page Policy Brief, and defend it in a mock legislative hearing.",
    primarySkill: "Disciplinary research and structured policy argumentation: Evaluates competing civic priorities, synthesizes statistical data, anticipates counter-arguments, and drafts actionable policy mandates.",
    supportingSkills: [
      "Evidence-backed oral defense",
      "Concise executive writing",
      "Distinguishing normative claims from empirical data",
      "Budget feasibility estimation"
    ],
    pedagogy: [
      "Deconstruction of authentic government policy papers",
      "Socratic seminars exploring resource dilemmas",
      "Mock legislative committee hearings and peer cross-examinations"
    ],
    activityIds: ["act-g9-policy-brief"],
    studentOutput: "A formal 2-page Executive Policy Brief complete with data visualizations, stakeholder matrix, risk assessment, and prioritized policy recommendations.",
    evidence: [
      "Knowledge: Explains the jurisdictional boundaries of local municipal bodies versus state government departments",
      "Performance: Synthesizes quantitative data into an annotated policy brief adhering to formal analytical formatting",
      "Reflection: Explains personal evolution of viewpoint after researching counter-stakeholder economic burdens"
    ],
    assessmentIds: ["summative-policy-brief", "rubric-policy-argumentation-g9"],
    inclusion: [
      "Provide paragraph sentence-starters and structural templates for students needing writing support",
      "Allow multimedia oral presentation accompanied by executive briefing slides",
      "Permit drafting in Hindi, regional state language, or English adhering to standard administrative register"
    ],
    resourceIds: ["r-soc-textbook-9", "r-policy-brief-template"],
    sourceType: "official-reference",
    status: "in-development",
    whatStudentsLearn: "How democratic public decisions balance conflicting community interests, why good intentions require empirical proof and budgets, and how structured civic advocacy operates.",
    whatStudentsCanDo: "Evaluate public data credibility, map stakeholder conflicts without demonizing opponents, formulate SMART policy recommendations, and defend ideas under cross-examination.",
    howTeachersTeachIt: "Teachers provide real municipal policy briefs, guide students through stakeholder tension matrices, model civil cross-examination, and facilitate peer committee hearings.",
    whatStudentsProduce: "Two-page Executive Policy Briefs, annotated source bibliographies, and defense records from simulated municipal hearings.",
    howLearningBecomesVisible: "Students cite specific empirical data points, acknowledge valid trade-offs honestly, and address counter-arguments with structural solutions rather than emotional slogans.",
    howProgressIsAssessed: "Rubric evaluation of thesis strength, evidence quality, balance in representing opposing stakeholders, and practical feasibility of proposed recommendations.",
    supportAndExtension: "Scaffold: Provide a section-by-section outline with word-count allocations. Extension: Present the top class briefs to the local Ward Councillor or School Management Committee."
  }
];
