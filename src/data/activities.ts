import { Activity } from '@/types';

export const activitiesData: Activity[] = [
  // ================= GRADE 3 =================
  {
    id: "act-g3-neighbourhood-walk",
    title: "My Neighbourhood Data Walk",
    stage: "Preparatory",
    grade: "Grade 3",
    learningArea: "The World Around Us & Mathematics",
    subject: ["Environmental Studies (EVS)", "Mathematics"],
    primarySkill: "Data collection and visual representation",
    supportingSkills: [
      "Environmental observation",
      "Collaborative tallying",
      "Basic categorization",
      "Introductory computational thinking"
    ],
    learningObjective: "Students observe their immediate neighbourhood, gather structured categorical data, tally frequencies, and present their findings in a simple pictorial graph.",
    essentialKnowledge: [
      "Basic tally marks and frequency counting",
      "Components of immediate local environment (trees, shops, vehicles, waste bins)",
      "How numbers represent real-world objects"
    ],
    duration: "60 minutes (or two 35-minute sessions)",
    groupSize: "Pairs or small groups of 3–4 students",
    setup: "Classroom briefing before walking in the school perimeter or safe neighbourhood area; desks arranged in pods for graph assembly.",
    materials: [
      "Cardboard or clipboard backing",
      "Pencils and observation tally sheets",
      "Coloured crayons or sticky dots for bar/pictograph representation",
      "Chart paper per group"
    ],
    lowResourceAlternative: "Use slate, chalk, recycled paper scraps, or dry sticks and seeds to count and arrange categories on the classroom floor.",
    steps: [
      "Step 1: Introduction (10 min) - Teacher introduces the mission: 'We are neighbourhood data detectives! Today we will count 3 things: Flowering trees, Street waste bins, and Bicycle riders.'",
      "Step 2: Guided Walk & Tally (25 min) - Walk in organized pairs around the school campus or boundary. Each student marks one tally line for each identified item.",
      "Step 3: Collation & Discussion (10 min) - Return to classroom. Compare tally marks in pairs: 'Did we count the same number? Why might our counts differ?'",
      "Step 4: Pictograph Construction (15 min) - Groups paste one paper square or draw one icon for every tally mark onto a group poster.",
      "Step 5: Sharing & Interpretation - Each pair shares: 'Which item was most common? Which was least common?'"
    ],
    studentInstructions: [
      "Look carefully at your surroundings as you walk in your pair.",
      "Every time you spot an item on your checklist, draw one vertical tally stroke in your notebook.",
      "Remember the tally rule: The 5th item crosses the first 4 strokes like a bundle of sticks!",
      "Back in the room, glue one coloured dot or paper icon for each count onto your group chart.",
      "Write one sentence explaining what your chart shows."
    ],
    teacherPrompts: [
      "What do you notice when we turn this corner?",
      "How can we be sure we didn't count the same tree twice?",
      "If we see 4 banyan trees and 2 neem trees, how many trees have we observed in total?",
      "Why do you think there are more bicycles here than cars?"
    ],
    studentOutput: "A completed group Pictograph Poster accompanied by a two-sentence verbal or written summary of local neighbourhood counts.",
    evidence: [
      "Observation: Accuracy in marking tally counts during the field walk",
      "Product: Clear 1-to-1 or 1-to-2 pictorial mapping on graph chart",
      "Communication: Oral explanation of highest and lowest frequency counts"
    ],
    assessmentCriteria: [
      "Categorizes items correctly without confounding types",
      "Accurately uses tally marks to record discrete observations",
      "Translates tally totals into visual pictograph bars with uniform spacing",
      "Articulates at least one valid comparison (e.g. 'There are 3 more trees than bins')"
    ],
    reflectionPrompt: "What was the most surprising thing you noticed about our school surroundings that you had never counted before?",
    scaffold: "Provide a pre-printed tally sheet with picture icons for each item so emerging readers can focus on counting.",
    extension: "Challenge students to invent a 1-icon = 2-items scale, or hypothesize why a particular item had zero counts.",
    accessibility: "Pair students with mobility constraints with a designated spotting partner, or conduct the count from a well-situated veranda/window overlooking the grounds.",
    languageSupport: "Allow tally labels and oral conclusions in the student's primary/home language alongside English or Hindi.",
    homeConnection: "Ask students to do a 10-minute 'Kitchen Utensil Count' at home with family, counting spoons, plates, and cups.",
    relatedResources: ["r-evs-textbook-3", "r-planning-template-g3"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Inquiry or investigation",
    localAdaptation: "Adapt item lists to Indian rural/urban contexts (e.g., hand-pumps, electric poles, cows/goats, solar panels, compost pits)."
  },

  // ================= GRADE 6 =================
  {
    id: "act-g6-community-explorer",
    title: "Community Problem Explorer",
    stage: "Middle",
    grade: "Grade 6",
    learningArea: "Science, Social Science & Vocational Exposure",
    subject: ["Science", "Social Science", "Vocational Studies"],
    primarySkill: "Root-cause inquiry and multi-perspective framing",
    supportingSkills: [
      "Observation protocol design",
      "Semi-structured interview questioning",
      "Systemic factor sorting (Environmental vs Human vs Economic)",
      "Empathetic listening"
    ],
    learningObjective: "Students identify a persistent daily challenge in their local school or neighbourhood, interview two community members, map root causes, and present a multi-disciplinary problem brief.",
    essentialKnowledge: [
      "Differences between symptoms and root causes",
      "Roles of local community workers (sanitation staff, shopkeepers, bus drivers, civic volunteers)",
      "Basics of ethical interviewing (asking permission, active listening, respectful notes)"
    ],
    duration: "Two 45-minute sessions + 1 field interview homework task",
    groupSize: "Teams of 4 students",
    setup: "Desks arranged in team clusters with large cause-and-effect fishbone diagram templates.",
    materials: [
      "A3 chart sheets or butcher paper",
      "Sticky notes or cut paper slips",
      "Marker pens",
      "Interview recording cards with consent notes"
    ],
    lowResourceAlternative: "Draw the problem tree on classroom blackboards with chalk; students write on reusable slates or notebook margins.",
    steps: [
      "Session 1: The 'Five Whys' Warmup (15 min) - Practice with a sample problem (e.g., 'Classroom floor is dusty at 2 PM'). Ask 'Why?' 5 times to uncover systemic issues.",
      "Topic Selection (20 min) - Teams choose one local challenge: Plastic accumulation near school canteen, tap water wastage, unshaded bus stop, or noisy corridor during breaks.",
      "Interview Protocol (10 min) - Draft 3 respectful questions for a school custodian, canteen operator, or neighbourhood resident.",
      "Interim: Field Observation & Interview - Teams conduct brief 5-minute interviews and log answers.",
      "Session 2: Cause-and-Effect Mapping (25 min) - Teams sort evidence into 'Physical Factors', 'Human Habits', and 'Resource Gaps'.",
      "Session 2: Peer Gallery Walk (20 min) - Teams leave 1 warm commendation and 1 clarifying question on other teams' problem trees."
    ],
    studentInstructions: [
      "Pick a problem that affects people's daily routine in our school or neighbourhood.",
      "Ask 'Why is this happening?' until you reach the underlying practice or lack of tools.",
      "Speak respectfully with the person whose work connects to this issue; always ask 'May I ask you 2 quick questions for our school project?'",
      "Map your findings on your Problem Tree: Leaves = Symptoms, Trunk = Visible Problem, Roots = Underlying Causes.",
      "Do NOT jump to solutions yet — our goal today is understanding the issue deeply."
    ],
    teacherPrompts: [
      "Is that consequence a cause or a symptom? Let's trace it back one step further.",
      "How does this challenge affect someone doing hard physical labour differently than a student?",
      "What science concepts (e.g. friction, material degradation, microbial growth) explain this issue?",
      "What civic or municipal rules are connected to this problem?"
    ],
    studentOutput: "A collaborative 'Community Problem Tree' poster featuring verified interview quotes, categorized causes, and an unbiased problem statement.",
    evidence: [
      "Interview transcript or summary note with dated source attribution",
      "Fishbone or Root-Cause diagram distinguishing symptoms from drivers",
      "Peer review notes highlighting constructive feedback given to other teams"
    ],
    assessmentCriteria: [
      "Frames the problem objectively without assigning personal blame",
      "Integrates evidence from real interviews rather than making assumptions",
      "Distinguishes clearly between visible symptoms and structural root causes",
      "Demonstrates respectful team collaboration and role sharing"
    ],
    reflectionPrompt: "How did listening to the community worker's perspective change what you initially assumed about this problem?",
    scaffold: "Provide a sentence-starter interview card: 'Sir/Madam, what makes your work most challenging when...?'",
    extension: "Ask students to identify which local government department or school committee holds official mandate for this issue.",
    accessibility: "Support written interview notes with voice recording or partner transcription where motor coordination requires assistance.",
    languageSupport: "Interviews may be conducted in local regional languages, with key insights translated collectively on the team poster.",
    homeConnection: "Ask family members how this problem was handled 20 years ago in their hometown.",
    relatedResources: ["r-sci-textbook-6", "r-vocational-toolkit"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Inquiry or investigation",
    localAdaptation: "Root topics in Indian municipal and village realities (Gram Panchayat sanitation, mid-day meal kitchen ergonomics, monsoon puddle management)."
  },

  // ================= GRADE 7 =================
  {
    id: "act-g7-water-audit",
    title: "Water Audit and Filtration Challenge",
    stage: "Middle",
    grade: "Grade 7",
    learningArea: "Science & Mathematics",
    subject: ["Science", "Mathematics"],
    primarySkill: "Scientific investigation and functional prototyping",
    supportingSkills: [
      "Volumetric measurement and estimation",
      "Filtration mechanism comparison",
      "Data logging and rate calculation",
      "Ethical resource stewardship"
    ],
    learningObjective: "Students measure tap flow rates and water wastage on campus, analyze consumption metrics, and engineer a multi-layered gravity water filter using granular earth materials.",
    essentialKnowledge: [
      "Water cycle and aquifer dynamics",
      "Mechanisms of physical filtration (porosity, particle retention, settling)",
      "Conversion of units (millilitres to litres, seconds to minutes/hours)"
    ],
    duration: "Two 50-minute laboratory/classroom sessions",
    groupSize: "Teams of 3–4 students",
    setup: "Wet lab or outdoor corridor with water access; collection jars, stopwatches, and testing buckets.",
    materials: [
      "Clear cut plastic bottles (1L or 2L inverted)",
      "Coarse gravel, fine gravel, clean river sand, charcoal bits, cotton wool or cloth",
      "Measuring cylinders or graduated jugs",
      "Stopwatch (or mobile stopwatch)",
      "Turbid water sample (stirred with garden soil and leaf debris)"
    ],
    lowResourceAlternative: "Use clay pots (matkas) with small drainage holes, coconut coir, muslin cloth, and washed pebbles found on grounds.",
    steps: [
      "Part 1: The School Tap Audit (25 min) - Each team times how long it takes to fill a 1-litre bottle from 3 different school taps. Calculate average flow rate (L/min). Measure leakage from dripping taps over 5 minutes.",
      "Mathematical Projection (15 min) - Calculate total water lost per month if one leaking tap drips 20 mL/minute 24 hours a day.",
      "Part 2: Designing the Filter Column (20 min) - Discuss layering logic: 'Should big pebbles be on top or bottom? Why?'",
      "Assembly & Testing (25 min) - Invert bottle. Pack cotton at neck, then charcoal, fine sand, coarse sand, and gravel on top. Pour 250 mL of turbid water.",
      "Measurement & Evaluation (15 min) - Measure output volume, flow speed, and visual clarity using a Secchi-disk paper under the beaker."
    ],
    studentInstructions: [
      "Carefully measure dripping tap volume for exactly 300 seconds and record it in your lab notebook.",
      "Calculate: Dripped volume x 12 = Millilitres per hour x 24 = Litres per day.",
      "Build your filter layers from finest (bottom) to coarsest (top). Pack each layer firmly so channels don't form.",
      "Pour your 250 mL test sample gently without disturbing the top pebble layer.",
      "Observe the clarity of filtered water against a white sheet of paper. Note: This water is filtered for sediment, NOT safe for drinking!"
    ],
    teacherPrompts: [
      "Why do we place the activated charcoal in the lower-middle zone rather than at the very top?",
      "If our tap drips 15 mL per minute, how many 20-litre water cans does the school waste each week?",
      "What biological contaminants does a sand filter NOT remove, and why does municipal water need chlorination or boiling?"
    ],
    studentOutput: "A functional working bench-scale filter column and a 1-page 'Campus Water Conservation & Flow Report'.",
    evidence: [
      "Mathematical worksheet showing accurate rate conversions and 30-day projection",
      "Layered filter prototype diagram explaining particle retention at each layer",
      "Clarity rating and turbidity deduction logged in student science journal"
    ],
    assessmentCriteria: [
      "Applies correct units and accurate arithmetic in water-loss extrapolation",
      "Explains physical scientific rationale for layer sequence based on particle size",
      "Conducts fair testing (uses same volume and timing for comparison)",
      "Includes clear safety disclaimer regarding potable vs non-potable water"
    ],
    reflectionPrompt: "What simple engineering or behavioural change in our school would save the largest volume of water each month?",
    scaffold: "Provide a pre-formatted arithmetic conversion table (mL/min -> L/hr -> L/day).",
    extension: "Challenge students to calculate the hydraulic flow rate (mL/second) through their filter and experiment with varying sand-layer thicknesses.",
    accessibility: "Ensure water testing stations have dry floor surfaces and accessible table heights for seated students.",
    languageSupport: "Provide bilingual terminology sheets for terms such as 'permeability', 'turbidity', and 'filtration'.",
    homeConnection: "Conduct a 24-hour leak check on home bathroom faucets using an empty drinking cup.",
    relatedResources: ["r-sci-textbook-7", "r-water-audit-tool"],
    sourceType: "suggested-activity",
    status: "in-development",
    activityType: "Project",
    localAdaptation: "Connect with traditional Indian water storage (baolis, tankas, johads) and discuss traditional sand-pot filtration methods."
  },

  // ================= GRADE 8 =================
  {
    id: "act-g8-ai-school-problem",
    title: "AI for a School Problem: Ethical Design Challenge",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Computational Thinking, Artificial Intelligence & Ethics",
    subject: ["Computer Science / Information Technology", "Interdisciplinary"],
    primarySkill: "Responsible AI literacy and algorithmic bias auditing",
    supportingSkills: [
      "Problem decomposition",
      "Dataset curation and edge-case identification",
      "Ethical risk mitigation",
      "User-centred system diagramming"
    ],
    learningObjective: "Students design a conceptual AI tool to solve a tangible school problem (e.g. library book recommendation, energy conservation, cafeteria crowd estimation), audit their training dataset for systemic bias, and formulate human-in-the-loop safeguards.",
    essentialKnowledge: [
      "How supervised machine learning learns patterns from training examples",
      "The definition and origin of algorithmic bias ('Garbage in, garbage out')",
      "Privacy boundaries: What student data should never be collected or fed into public models",
      "Difference between automated decision-making and human-in-the-loop oversight"
    ],
    duration: "Three 40-minute class sessions (or 1 full block workshop)",
    groupSize: "Design trios (3 students)",
    setup: "Classroom arranged into product design studios with AI Design Canvas worksheets printed or on screens.",
    materials: [
      "Printed 'AI Ethics & System Design Canvas' (A3 size)",
      "Coloured sticky notes (Blue = Input Data, Yellow = Model Task, Red = Bias Risk, Green = Safeguard)",
      "Case study prompt cards on historical AI bias incidents"
    ],
    lowResourceAlternative: "Draw the 4-box AI canvas directly onto student notebooks; students use pencil and coloured boxes.",
    steps: [
      "Session 1: Unpacking How AI 'Learns' (20 min) - Run a human-model simulation: Show 10 picture cards with labels, then test on an ambiguous edge-case to demonstrate training bias.",
      "Scoping the Problem (20 min) - Teams select one challenge: (a) Personalized library book recommender, (b) Hallway noise warning predictor, or (c) Lost-and-found visual item classifier.",
      "Session 2: Training Data Curation (25 min) - Teams specify 50 simulated data records. Who is represented? Who might be excluded?",
      "Bias Audit Exercise (15 min) - Swap canvases with a peer team. The reviewer's job is to find 2 ways this system could discriminate, produce false positives, or violate privacy.",
      "Session 3: Designing the Safeguard & Human Oversight (20 min) - Add human-in-the-loop controls: 'Who has the final say when the AI is uncertain?'",
      "Pitch & Defense (20 min) - Each team delivers a 2-minute 'Responsible AI Brief' to the class."
    ],
    studentInstructions: [
      "Choose one specific school challenge where pattern-matching could assist people.",
      "Define what inputs your model receives (e.g. book genres read, reading speed, ratings). Do NOT use private student personal IDs.",
      "Identify the 'Blind Spot': If your book model is trained only on books checked out in Grade 8 English, what books will it unfairly neglect?",
      "Draw the Human Shield: Where does a teacher, librarian, or student confirm the recommendation before an action is taken?",
      "Complete all 4 quadrants of your AI Ethics Canvas before presenting."
    ],
    teacherPrompts: [
      "If an AI marks a student as 'likely to be late', what biases in weather, distance, or transport might it be blind to?",
      "Why must sensitive demographic data (gender, religion, caste, economic status) never be used to predict academic capability?",
      "What is the difference between an AI that recommends a book and an AI that bans a student from borrowing?"
    ],
    studentOutput: "A completed 'Responsible AI Solution Canvas' and an 'Algorithmic Bias Impact Assessment'.",
    evidence: [
      "System Architecture Diagram detailing Input -> Model Pattern -> Output -> Human Review",
      "Explicit Identification of at least two edge cases where model fails",
      "Written Student Privacy Statement complying with safe school data norms"
    ],
    assessmentCriteria: [
      "Distinguishes between genuine machine learning tasks and simple rule-based code",
      "Accurately identifies realistic sources of data skew and representation bias",
      "Articulates proportional, concrete safeguards including human-in-the-loop intervention",
      "Assesses technology performance without personification (does not attribute human feelings to algorithms)"
    ],
    reflectionPrompt: "If you were a student whose book choice was restricted by an AI recommendation system, how would you appeal the decision?",
    scaffold: "Provide pre-filled dataset cards for the Lost & Found classifier (e.g., photos taken only under bright morning light).",
    extension: "Challenge students to write a pseudo-code algorithm depicting confidence scores: `IF confidence < 80% THEN prompt human supervisor`.",
    accessibility: "Ensure collaborative roles are clearly designated (Data Architect, Ethics Auditor, Visual Designer) so every student contributes meaningfully.",
    languageSupport: "Encourage discussion in vernacular language; provide bilingual AI terminology definitions (e.g., Prashikshan Data / Training Data).",
    homeConnection: "Discuss with parents what recommendation algorithms (YouTube, shopping, streaming) recommend to them at home and what biases they notice.",
    relatedResources: ["r-ai-ethics-guide", "r-curriculum-middle"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Digital or AI literacy",
    localAdaptation: "Focus on Indian school contexts where devices are shared, multilingual students read diverse scripts, and internet connectivity fluctuates."
  },

  // Grade 8 Interdisciplinary Project Placeholder 1
  {
    id: "act-g8-project-waste-segregator",
    title: "Interdisciplinary Project: Smart Waste Segregator Prototype",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Interdisciplinary (Science, Design & CT)",
    subject: ["Science", "Computer Science", "Vocational Skills"],
    primarySkill: "Physical computing and environmental systems design",
    supportingSkills: ["Sensor integration", "Iterative mechanical testing", "Waste categorization"],
    learningObjective: "Design and build a functional sorting bin mechanism using basic cardboard linkages and conductivity/weight tests to distinguish dry recyclable waste from organic compostable matter.",
    essentialKnowledge: ["Electrical conductivity of metals vs plastics", "Density and moisture differences in waste streams", "Basic lever and gravity flap mechanisms"],
    duration: "4 sessions (Unit Project)",
    groupSize: "Teams of 4",
    setup: "Maker corner with cardboard cutters, craft glue, copper wire, LED bulbs, and battery packs.",
    materials: ["Scrap cardboard, rubber bands, wooden skewers, 9V battery, LEDs, paper clips"],
    lowResourceAlternative: "Build a non-electronic mechanical balance sorter utilizing gravity and material density gradients.",
    steps: [
      "Investigate current school canteen waste composition over 3 days.",
      "Design a mechanical sorting chute using dual-track ramps.",
      "Incorporate a simple circuit to buzz/light up when metallic waste bridges the contact gap.",
      "Test with 10 dummy items (plastic bottle caps, banana peels, foil wrappers, paper chits).",
      "Document failure points and iterate mechanical angle."
    ],
    studentInstructions: ["Measure sorting accuracy across 20 trials and log each misclassification."],
    teacherPrompts: ["Why did the wet paper trigger the conductivity circuit like metal? How can we adjust threshold?"],
    studentOutput: "Working scale mechanical waste sorter prototype + test accuracy log.",
    evidence: ["Engineering test log with iteration history", "Working benchtop demonstrator"],
    assessmentCriteria: ["Demonstrates iterative testing", "Accurately applies conductivity principles", "Documents trade-offs"],
    reflectionPrompt: "What human behavioural habit makes mechanical waste sorting challenging in real Indian schools?",
    extension: "Incorporate a micro:bit or Arduino light sensor for automated servo-driven flap opening.",
    homeConnection: "Implement a 2-bin segregation protocol at home for 1 week and report challenges.",
    lowResourceSuitable: true,
    mobileFriendly: false,
    offlineFriendly: true,
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Project"
  },

  // Grade 8 Interdisciplinary Project Placeholder 2
  {
    id: "act-g8-project-air-monitor",
    title: "Interdisciplinary Project: Clean Air Classroom Monitor & Audit",
    stage: "Middle",
    grade: "Grade 8",
    learningArea: "Interdisciplinary (Science, Math & Health)",
    subject: ["Science", "Mathematics", "Health & Physical Education"],
    primarySkill: "Empirical environmental sensing and ventilation modelling",
    supportingSkills: ["Data graphing", "Airflow measurement", "Public health communication"],
    learningObjective: "Measure classroom ventilation efficiency by monitoring temperature, particulate accumulation, and airflow, producing an actionable classroom air-quality protocol.",
    essentialKnowledge: ["Air composition and ventilation air exchanges per hour", "Impact of dust and enclosed CO2 on cognitive alertness", "Calculation of room volume (L x W x H)"],
    duration: "3 sessions (Unit Project)",
    groupSize: "Teams of 4",
    setup: "Standard classroom with windows open vs closed configurations.",
    materials: ["Cardboard anemometer or pinwheels, petroleum jelly glass slides, measuring tape, thermometer"],
    lowResourceAlternative: "Use vaseline-coated glass slide dust traps left in 4 corners of the room for 48 hours, examined under simple hand lens.",
    steps: [
      "Calculate total classroom cubic volume in cubic meters.",
      "Place 4 dust-collector slides at varying heights for 48 hours.",
      "Count particle density per square centimetre under magnification.",
      "Measure wind speed through windows during morning assembly vs afternoon.",
      "Formulate recommendations for cross-ventilation windows schedule."
    ],
    studentInstructions: ["Keep daily logs of room occupancy and window positions."],
    teacherPrompts: ["Where do you notice the highest density of settled particles? Why at that height?"],
    studentOutput: "Classroom Ventilation Blueprint with empirical dust map and recommended window schedules.",
    evidence: ["Graph comparing particle accumulation near windows vs chalkboard", "Room cubic volume calculations"],
    assessmentCriteria: ["Applies geometric volume formulas correctly", "Draws sound empirical conclusions from slide counts"],
    reflectionPrompt: "How does classroom air quality affect your focus during post-lunch periods?",
    extension: "Compare results with outdoor weather reports and calculate correlation with local AQI metrics.",
    homeConnection: "Inspect bedroom cross-ventilation and test airflow with a simple tissue paper strip.",
    lowResourceSuitable: true,
    mobileFriendly: true,
    offlineFriendly: true,
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Project"
  },

  // ================= GRADE 9 =================
  {
    id: "act-g9-policy-brief",
    title: "Evidence-Based Local Policy Brief",
    stage: "Secondary",
    grade: "Grade 9",
    learningArea: "Social Science & Language",
    subject: ["Democratic Politics", "English / Hindi Language", "Economics"],
    primarySkill: "Disciplinary research and structured policy argumentation",
    supportingSkills: [
      "Secondary statistical source evaluation",
      "Stakeholder perspective synthesis",
      "Distinguishing empirical evidence from normative opinion",
      "Executive summary writing"
    ],
    learningObjective: "Students investigate a contested local municipal issue (e.g., pedestrian safety around school zones, groundwater depletion regulations, or public library resource allocation), analyze secondary data, evaluate competing stakeholder interests, and draft a structured 2-page Policy Brief with actionable, budget-conscious recommendations.",
    essentialKnowledge: [
      "Structure of local urban/rural local self-government (Municipality/Gram Panchayat)",
      "How to cite verifiable statistical sources (Census data, municipal reports, survey findings)",
      "The anatomy of a Policy Brief: Executive Summary, Context, Evidence, Policy Options, Trade-offs, Recommendation"
    ],
    duration: "Three 45-minute seminars + independent research portfolio work",
    groupSize: "Pairs or individual researchers",
    setup: "Seminar table arrangement with access to reference materials, government gazettes/news articles, and laptop/library research.",
    materials: [
      "Policy Brief Writing Guidelines & Template",
      "Sample excerpts from real public policy whitepapers",
      "Peer review rubric for argument strength"
    ],
    lowResourceAlternative: "Use printed newspaper clipping folders and curated local civic articles provided in school library.",
    steps: [
      "Seminar 1: Deconstructing a Policy Brief (20 min) - Examine a real-world municipal policy memo. Identify why decision-makers need bulleted evidence rather than emotional essays.",
      "Issue Selection & Stakeholder Matrix (25 min) - Select one local civic question. Map at least 3 stakeholders with conflicting priorities (e.g. Pedestrian safety: Shopkeepers wanting parking vs Parents wanting speed tables vs Commuters wanting fast flow).",
      "Seminar 2: Data Synthesis & Counter-Arguments (45 min) - Find at least 2 numerical data points supporting claims. Draft the 'Counter-Perspective' section addressing legitimate objections.",
      "Seminar 3: Drafting Recommendations (25 min) - Formulate recommendations adhering to SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound).",
      "Peer Legislative Hearing (20 min) - Pairs role-play as a Municipal Standing Committee, grilling authors on the feasibility and budget constraints of their proposed solutions."
    ],
    studentInstructions: [
      "Choose an authentic civic issue within our town or district boundaries.",
      "Your policy brief must fit on exactly two pages (approx. 700–900 words) — conciseness is essential.",
      "Support every factual claim with a cited reference: '[1] District Transport Department Census 2024'.",
      "Include a dedicated 'Risks and Unintended Consequences' subsection.",
      "Conclude with three prioritized actions with designated implementing authorities (e.g. Ward Councillor, Traffic Police, PWD)."
    ],
    teacherPrompts: [
      "Why would the local merchants association oppose your proposal to pedestrianize this street? How does your policy address their revenue concerns?",
      "Can you prove this correlation represents causation, or is there a confounding factor?",
      "Who pays for your recommendation, and within what realistic municipal budget line?"
    ],
    studentOutput: "A formal 2-page 'Evidence-Based Policy Brief' formatted with executive abstract, data charts, stakeholder analysis, and actionable policy mandates.",
    evidence: [
      "Annotated bibliography citing at least 3 distinct source types",
      "Formal policy brief document adhering to standard analytical typography and structure",
      "Defense notes from the peer legislative hearing demonstrating agile counter-argumentation"
    ],
    assessmentCriteria: [
      "Articulates a clear, non-partisan, evidence-based central argument",
      "Synthesizes qualitative human experiences with quantitative data metrics",
      "Anticipates counter-arguments and articulates genuine trade-offs realistically",
      "Proposes legally and jurisdictionally appropriate solutions aligned with Indian administrative structures"
    ],
    reflectionPrompt: "What was the hardest trade-off you had to balance between what is ideal in theory and what is feasible in civic reality?",
    scaffold: "Provide a paragraph-by-paragraph sentence starter framework: 'While opponents argue that..., municipal empirical data indicates that...' ",
    extension: "Submit the top 3 class policy briefs to the actual School Management Committee (SMC) or local Ward Member for written response.",
    accessibility: "Accept multimedia oral brief presentations accompanied by slide decks for students with significant writing challenges.",
    languageSupport: "Allow the policy brief to be submitted in Hindi, regional state language, or English, adhering to formal administrative register.",
    homeConnection: "Discuss the selected civic issue with grandparents or parents to document historical policy attempts on the same issue.",
    relatedResources: ["r-soc-textbook-9", "r-policy-brief-template"],
    sourceType: "subjects2skills-interpretation",
    status: "in-development",
    activityType: "Project",
    localAdaptation: "Root in Indian local self-government structures (73rd and 74th Constitutional Amendments, Gram Sabha, Ward Committees, Smart Cities Mission)."
  }
];
