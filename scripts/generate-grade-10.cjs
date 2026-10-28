const fs = require("fs");

const existing = JSON.parse(fs.readFileSync("./seeds/grade-10-tasks.json"));

const additional = [
  // MATH (5 tasks)
  {
    taskId: "MATH-10-QUAD-2.4",
    title: "Solve CBSE Case-Based Item Set: Aeroplane speed delay and quadratic time equations",
    subject: "Mathematics",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Master quadratic equations, triangle similarity, and classical probability",
    subCompetency: "Real-World Quadratic Modeling",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Board Case-Based Item",
    assessmentMode: "Written Examination Item",
    successCriteria: [
      "Solves: An aircraft was delayed by 30 minutes due to bad weather; to reach destination 1500 km away on time, speed was increased by 250 km/h.",
      "Formulates equation: 1500/x - 1500/(x + 250) = 1/2.",
      "Solves to find original flight speed x = 750 km/h."
    ],
    scaffoldSupport: "Time-distance equation conversion guide.",
    extensionChallenge: "Evaluate how headwind and tailwind affect fuel consumption quadratically with speed.",
    sourceCitation: "CBSE Class 10 Mathematics Board Exam 2020/2023",
    trackAlignment: "Track A"
  },
  {
    taskId: "MATH-10-QUAD-1.3",
    title: "Solve CBSE Assertion-Reason items on the discriminant and root conditions",
    subject: "Mathematics",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Master quadratic equations, triangle similarity, and classical probability",
    subCompetency: "Quadratic Roots & Discriminant Analysis",
    timeEstimate: "25 min",
    resourceLevel: "Low",
    skillType: "Assertion-Reason Analysis",
    assessmentMode: "Self-Check",
    successCriteria: [
      "Evaluates Assertion: The equation x^2 + 4x + 5 = 0 has no real roots.",
      "Evaluates Reason: The discriminant D = 16 - 20 = -4 < 0.",
      "Determines whether Reason is the correct explanation of Assertion (Option A)."
    ],
    scaffoldSupport: "Assertion-reason decision tree flowchart.",
    extensionChallenge: "Construct 3 tricky assertion-reason items where Assertion is true but Reason is false.",
    sourceCitation: "CBSE Class 10 Competency-Based Assessment Framework",
    trackAlignment: "Track A"
  },
  {
    taskId: "MATH-10-TRI-3.6",
    title: "Solve CBSE Case-Based Item Set: Geometric similarity in architectural street lighting",
    subject: "Mathematics",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Master quadratic equations, triangle similarity, and classical probability",
    subCompetency: "Geometric Similarity & Deductive Proofs",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Case-Based Geometric Reasoning",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Solves: A girl of height 90 cm walks away from base of lamp-post of height 3.6 m at 1.2 m/s.",
      "Calculates length of her shadow after 4 seconds using triangle similarity.",
      "Proves distance = 4.8 m, and shadow length = 1.6 m."
    ],
    scaffoldSupport: "Lamp-post shadow geometry diagram.",
    extensionChallenge: "Prove that ratio of shadow growth rate to walking speed is independent of walking velocity.",
    sourceCitation: "NCERT Grade 10 Mathematics, Chapter 6, p. 135",
    trackAlignment: "Track A"
  },
  {
    taskId: "MATH-10-PROB-4.6",
    title: "Solve CBSE Objective MCQs on impossible, sure, and complementary probability intervals",
    subject: "Mathematics",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Master quadratic equations, triangle similarity, and classical probability",
    subCompetency: "Classical & Experimental Probability",
    timeEstimate: "25 min",
    resourceLevel: "Low",
    skillType: "Objective MCQ Mastery",
    assessmentMode: "Timed Quiz",
    successCriteria: [
      "Identifies that probability P(E) must strictly satisfy 0 <= P(E) <= 1.",
      "Explains why -1.5, 3.5, or 115% can never represent a valid probability value.",
      "Solves 10 standard board MCQ items within 15 minutes with 100% accuracy."
    ],
    scaffoldSupport: "Probability range number line visual.",
    extensionChallenge: "Calculate probability that a non-leap year has 53 Sundays vs a leap year.",
    sourceCitation: "CBSE Class 10 Mathematics Board MCQ Bank",
    trackAlignment: "Track A"
  },
  {
    taskId: "MATH-10-PROB-4.7",
    title: "Evaluate medical test false positive rates using conditional probability intuition",
    subject: "Mathematics",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Master quadratic equations, triangle similarity, and classical probability",
    subCompetency: "Classical & Experimental Probability",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Critical Stochastic Literacy",
    assessmentMode: "Case Study Ledger",
    successCriteria: [
      "Models rare disease (prevalence 1 in 1000) and test accuracy 99%.",
      "Constructs natural frequency tree for 100,000 citizens.",
      "Discovers that a positive test result has only ~9% actual disease probability due to false positives on the healthy majority."
    ],
    scaffoldSupport: "Natural frequency tree diagram with population counts.",
    extensionChallenge: "Preview Bayes Theorem for secondary stage probability extensions.",
    sourceCitation: "NCF-SE 2023 Secondary Math Competency C-4.1",
    trackAlignment: "Track A"
  },

  // SCIENCE (7 tasks)
  {
    taskId: "SCI-10-CHEM-1.6",
    title: "Solve CBSE Assertion-Reason questions on redox reaction identification and oxidation states",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Chemical Equations & Reaction Classifications",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Assertion-Reason Analysis",
    assessmentMode: "Board Mock Paper",
    successCriteria: [
      "Evaluates Assertion: When copper powder is heated in a china dish, its surface turns black.",
      "Evaluates Reason: Black copper(II) oxide is formed by addition of oxygen to copper (oxidation).",
      "Confirms both Assertion and Reason are true and Reason is correct explanation."
    ],
    scaffoldSupport: "Redox oxidation/reduction test checklist.",
    extensionChallenge: "Explain what happens when hydrogen gas is passed over heated black copper(II) oxide.",
    sourceCitation: "CBSE Class 10 Science Board Exemplar, Chapter 1",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-CHEM-1.7",
    title: "Solve CBSE Case-Based Item Set: Electrolysis of water and stoichiometric gas volumes",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Chemical Equations & Reaction Classifications",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Case-Based Stoichiometry",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Analyzes water electrolysis setup: 2 test tubes inverted over carbon electrodes.",
      "Explains why gas volume collected at cathode (hydrogen) is twice that at anode (oxygen) (2H2O -> 2H2 + O2).",
      "Identifies testing gases: hydrogen burns with pop sound, oxygen rekindles glowing splint."
    ],
    scaffoldSupport: "Water electrolysis apparatus diagram.",
    extensionChallenge: "Explain why a few drops of dilute sulphuric acid are added to pure water before electrolysis.",
    sourceCitation: "NCERT Grade 10 Science, Chapter 1, Activity 1.7, p. 9",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-BIO-2.6",
    title: "Solve CBSE Case-Based Item Set: Hemodialysis and artificial kidney filtration mechanisms",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Human Metabolic Systems & Life Processes",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Physiological Case Analysis",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Analyzes patient scenario with kidney failure causing toxic urea buildup.",
      "Explains how patient blood passes through cellophane tubes in dialyzing fluid with same osmotic pressure.",
      "Notes key difference: Artificial kidney lacks selective tubular reabsorption of water and nutrients."
    ],
    scaffoldSupport: "Hemodialysis dialyzer fluid flow schematic.",
    extensionChallenge: "Calculate daily volume of initial filtrate (180 liters) vs final urine excreted (1-2 liters) and explain 99% reabsorption.",
    sourceCitation: "NCERT Grade 10 Science, Chapter 6, p. 111",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-BIO-2.7",
    title: "Solve CBSE Assertion-Reason questions on anaerobic respiration and muscular fatigue",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Human Metabolic Systems & Life Processes",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Assertion-Reason Analysis",
    assessmentMode: "Written Response",
    successCriteria: [
      "Evaluates Assertion: Sudden running causes painful cramps in leg muscles.",
      "Evaluates Reason: Anaerobic respiration converts pyruvate into 3-carbon lactic acid during oxygen deficiency.",
      "Explains how hot water bath or gentle massage restores circulation and breaks down lactic acid."
    ],
    scaffoldSupport: "Lactic acid muscle fatigue biochemical summary.",
    extensionChallenge: "Contrast energy yield of anaerobic respiration (2 ATP) with aerobic cellular respiration (38 ATP).",
    sourceCitation: "NCERT Grade 10 Science, Chapter 6, p. 102",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-ELEC-4.4",
    title: "Solve CBSE Case-Based Item Set: Domestic circuit safety, earthing wire, and short circuits",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Series-Parallel Resistance & Joules Heating Effect",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Case-Based Electrical Safety",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Identifies live wire (red/brown), neutral wire (black/blue), and earth wire (green).",
      "Explains why green earth wire provides low-resistance path preventing severe electric shock from metallic appliance bodies.",
      "Explains short circuit: live wire touches neutral wire directly, resistance drops to near zero, current spikes dangerously."
    ],
    scaffoldSupport: "Domestic 3-wire household circuit schematic.",
    extensionChallenge: "Explain operating principle of Miniature Circuit Breakers (MCBs) vs traditional cartridge fuses.",
    sourceCitation: "NCERT Grade 10 Science, Chapter 13 (Magnetic Effects), pp. 236-238",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-ELEC-3.3",
    title: "Analyze resistance changes when a wire is stretched or recut into segments",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Electric Current, Potential Difference & Ohms Law",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Quantitative Wire Mechanics",
    assessmentMode: "Problem Set",
    successCriteria: [
      "Proves volume conservation: When wire is stretched to double length (2L), area halves (A/2).",
      "Calculates new resistance: R_new = rho * (2L / (A/2)) = 4 * R_old.",
      "Solves board numerical where a wire of resistance R is cut into 5 equal parts and connected in parallel."
    ],
    scaffoldSupport: "Volume conservation wire stretching formula card.",
    extensionChallenge: "Calculate the equivalent resistance of an infinite resistor ladder network.",
    sourceCitation: "NCERT Grade 10 Science, Chapter 12, pp. 208-209",
    trackAlignment: "Track A"
  },
  {
    taskId: "SCI-10-CHEM-1.8",
    title: "Classify chemical reactions from everyday visual indicators (color change, precipitate, gas release)",
    subject: "Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze chemical reactions, human physiological systems, and electrical circuits",
    subCompetency: "Chemical Equations & Reaction Classifications",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Observational Chemistry",
    assessmentMode: "Matching & Table",
    successCriteria: [
      "Identifies 4 visual reaction indicators: change in state, color, gas evolution, temperature change.",
      "Classifies 6 chemical equations into combination, decomposition, displacement, double displacement.",
      "Explains why tarnishing of silver is a chemical corrosion reaction forming black silver sulphide."
    ],
    scaffoldSupport: "Four-indicator visual reaction matrix.",
    extensionChallenge: "Write balanced chemical reaction for how breath turns clear lime water milky (calcium carbonate precipitation).",
    sourceCitation: "NCERT Grade 10 Science, Chapter 1, pp. 2-6",
    trackAlignment: "Track A"
  },

  // AI (7 tasks)
  {
    taskId: "AI-10-EVAL-4.3",
    title: "Solve CBSE Case-Based Item Set: Confusion matrix evaluation for a forest fire detection drone",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Rigorous Model Evaluation & Confusion Matrix Metrics",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Case-Based ML Evaluation",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Evaluates automated drone model: 50 True Fires, 10 False Alarms, 2 Missed Fires, 938 Clear Sky detections.",
      "Identifies whether False Negatives (missed wildfire) or False Positives (unnecessary ranger dispatch) are more dangerous.",
      "Concludes that Recall must be maximized in safety-critical wildfire models."
    ],
    scaffoldSupport: "Safety-critical confusion matrix tradeoff card.",
    extensionChallenge: "Calculate F0.5 vs F2 beta score weighting precision vs recall.",
    sourceCitation: "CBSE Class 10 AI Code 417 Sample Paper 2023-24",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-EVAL-4.4",
    title: "Solve CBSE Objective MCQs on AI project cycle phases, data types, and evaluation metrics",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Rigorous Model Evaluation & Confusion Matrix Metrics",
    timeEstimate: "25 min",
    resourceLevel: "Low",
    skillType: "Objective MCQ Mastery",
    assessmentMode: "Timed Quiz",
    successCriteria: [
      "Answers 15 board exam MCQs on the 5 AI Project Cycle stages.",
      "Differentiates Training Data, Testing Data, and Validation Data.",
      "Calculates Precision and Recall for simple 2x2 test matrices with zero arithmetic errors."
    ],
    scaffoldSupport: "AI Project Cycle 5-phase summary cheat sheet.",
    extensionChallenge: "Formulate 3 assertion-reason questions on overfitting vs underfitting in AI models.",
    sourceCitation: "CBSE Class 10 AI Subject 417 Question Bank",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-SCOPE-1.3",
    title: "Construct a 4Ws Problem Canvas for an automated smart water leak detection project",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Problem Scoping & SDG Alignment",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Problem Scoping",
    assessmentMode: "Canvas Document",
    successCriteria: [
      "Fills Who: Municipal water board engineers and water-stressed citizens.",
      "Fills What: 40% non-revenue water lost to underground pipeline leaks.",
      "Fills Where: Urban underground water supply pipe network.",
      "Fills Why: Conserves clean drinking water under SDG 6 (Clean Water and Sanitation)."
    ],
    scaffoldSupport: "SDG 6 water problem scoping template.",
    extensionChallenge: "Specify acoustic sensor data acquisition requirements for listening to pipe leak frequencies.",
    sourceCitation: "CBSE Class 10 AI Curriculum, Unit 1, pp. 12-16",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-MODEL-3.3",
    title: "Classify computer vision tasks into Image Classification, Object Detection, and Segmentation",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Machine Learning & Neural Network Modeling",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Computer Vision Taxonomy",
    assessmentMode: "Visual Table",
    successCriteria: [
      "Differentiates Classification (What is in image?), Object Detection (Where are objects? with bounding boxes), and Segmentation (Which exact pixels belong to object?).",
      "Gives practical Indian transport examples: FastTag toll OCR, self-driving pothole detection, lane segmentation.",
      "Explains why pixel-level segmentation requires significantly more training compute."
    ],
    scaffoldSupport: "Three-level computer vision hierarchy visual sheet.",
    extensionChallenge: "Explain how Convolutional Neural Networks (CNNs) extract hierarchical features from low-level edges to high-level shapes.",
    sourceCitation: "CBSE Class 10 AI Curriculum, Part B, Computer Vision Unit",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-DATA-2.3",
    title: "Evaluate dataset class imbalance and simulate SMOTE synthetic oversampling techniques",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Data Acquisition & Exploratory Data Analysis (EDA)",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Advanced Data Preprocessing",
    assessmentMode: "Written Response",
    successCriteria: [
      "Analyzes fraud dataset with 99.5% legitimate transactions and 0.5% fraud.",
      "Explains why raw accuracy fails on imbalanced classes.",
      "Explains techniques: Random Undersampling of majority class, Random Oversampling of minority class, and Synthetic Minority Over-sampling (SMOTE)."
    ],
    scaffoldSupport: "Class imbalance visualization bar chart.",
    extensionChallenge: "Evaluate how oversampling might introduce overfitting in small minority samples.",
    sourceCitation: "CBSE Class 10 AI Curriculum, Data Exploration Module",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-MODEL-3.4",
    title: "Explain the role of hyperparameters (epochs, learning rate, batch size) in model training",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Machine Learning & Neural Network Modeling",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Hyperparameter Tuning",
    assessmentMode: "Written Response",
    successCriteria: [
      "Defines Epoch (one full pass through training dataset), Batch Size (samples per gradient update), and Learning Rate.",
      "Explains consequences: Too high learning rate causes divergence; too low learning rate causes sluggish convergence.",
      "Draws loss curve showing training loss decreasing over successive epochs."
    ],
    scaffoldSupport: "Loss curve and learning rate visual guide.",
    extensionChallenge: "Explain early stopping as a regularization method to halt training before overfitting occurs.",
    sourceCitation: "CBSE Class 10 AI Curriculum, Modeling Unit",
    trackAlignment: "Track B"
  },
  {
    taskId: "AI-10-EVAL-4.5",
    title: "Draft an End-to-End AI Project Portfolio Documentation matching CBSE Board practical requirements",
    subject: "AI",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Execute end-to-end AI project cycle, train models, and evaluate confusion matrices",
    subCompetency: "Rigorous Model Evaluation & Confusion Matrix Metrics",
    timeEstimate: "40 min",
    resourceLevel: "Low",
    skillType: "Project Portfolio Assembly",
    assessmentMode: "Portfolio Document",
    successCriteria: [
      "Assembles complete 5-section portfolio: Scoping 4Ws, Data Acquisition Plan, EDA Graphs, Model Architecture, Evaluation Matrix.",
      "Includes ethical audit addressing bias and privacy.",
      "Meets 100% of CBSE Subject 417 Board Project Rubric guidelines."
    ],
    scaffoldSupport: "CBSE AI Board Project Portfolio template checklist.",
    extensionChallenge: "Prepare a 3-minute executive elevator pitch for external board practical viva-voce examiners.",
    sourceCitation: "CBSE Class 10 AI Practical Guidelines & Portfolio Blueprint",
    trackAlignment: "Track B"
  },

  // SOCIAL SCIENCE (7 tasks)
  {
    taskId: "SOC-10-HIST-1.4",
    title: "Solve CBSE Case-Based Item Set: The Khilafat issue and Congress resolution at Nagpur 1920",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Anti-Colonial Mass Movements & Satyagraha in India",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Historical Case-Based Item",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Analyzes primary excerpt on Ottoman Khalifa and Ali brothers (Muhammad Ali & Shaukat Ali).",
      "Explains why Gandhi saw Khilafat as golden opportunity to forge Hindu-Muslim unity under a national banner.",
      "Traces compromise at Congress session at Nagpur in December 1920 adopting Non-Cooperation programme."
    ],
    scaffoldSupport: "Khilafat-Congress historical negotiation timeline.",
    extensionChallenge: "Analyze how the withdrawal of Non-Cooperation after Chauri Chaura affected Hindu-Muslim political unity.",
    sourceCitation: "NCERT Grade 10 India and Contemporary World - II, Chapter 2, pp. 32-34",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-HIST-1.5",
    title: "Complete CBSE Board map work: Major Congress sessions and Satyagraha struggle centers",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Anti-Colonial Mass Movements & Satyagraha in India",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Cartographic Map Skills",
    assessmentMode: "Board Map Work",
    successCriteria: [
      "Locates Congress Sessions: Calcutta (Sep 1920), Nagpur (Dec 1920), Madras (1927).",
      "Locates Satyagraha Centers: Champaran (Bihar - Indigo planters), Kheda (Gujarat - Peasant revenue remission), Ahmedabad (Gujarat - Cotton mill workers), Amritsar (Punjab - Jallianwala Bagh), Dandi (Gujarat - Salt March).",
      "Labels coordinates on outline map with 100% geographic accuracy."
    ],
    scaffoldSupport: "CBSE Board official map item syllabus list.",
    extensionChallenge: "Explain historical significance of Chauri Chaura (Gorakhpur, UP) leading to movement suspension in Feb 1922.",
    sourceCitation: "CBSE Class 10 Social Science Board Map Work List",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-ECON-3.3",
    title: "Solve CBSE Case-Based Item Set: Ford Motors investment in India and global component integration",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Economic Globalization & MNC Integration",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Economic Case Study",
    assessmentMode: "Case Study Item",
    successCriteria: [
      "Analyzes case study: Ford Motors setting up $1700 million plant near Chennai in collaboration with Mahindra.",
      "Explains why India was chosen: large domestic market, low engineering wages, proximity to Asian shipping ports.",
      "Traces how components manufactured in Chennai are exported to other worldwide factories."
    ],
    scaffoldSupport: "MNC manufacturing case study graphic organizer.",
    extensionChallenge: "Evaluate why Ford subsequently ceased local domestic car manufacturing in India in 2021.",
    sourceCitation: "NCERT Grade 10 Understanding Economic Development, Chapter 4, pp. 58-59",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-ECON-3.4",
    title: "Solve CBSE Assertion-Reason questions on trade barriers and WTO policy disputes",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Economic Globalization & MNC Integration",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Assertion-Reason Analysis",
    assessmentMode: "Written Response",
    successCriteria: [
      "Evaluates Assertion: Removing trade barriers promotes international trade competition.",
      "Evaluates Reason: Import quotas and tariffs protect infant domestic industries from predatory foreign dumping.",
      "Analyzes asymmetric WTO rules where US heavily subsidizes agriculture while penalizing developing nations."
    ],
    scaffoldSupport: "Trade barrier economic balance sheet.",
    extensionChallenge: "Propose 3 policy tools governments use to ensure Fair Globalization for informal workers.",
    sourceCitation: "NCERT Grade 10 Understanding Economic Development, Chapter 4, pp. 64-68",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-GEOG-4.3",
    title: "Complete CBSE Board map work: Major dams and multipurpose river projects of India",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Resource Planning, Soil Geography & Sustainability",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Cartographic Map Skills",
    assessmentMode: "Board Map Work",
    successCriteria: [
      "Locates and labels 8 major dams: Salal (Chenab), Bhakra Nangal (Satluj), Tehri (Bhagirathi), Rana Pratap Sagar (Chambal), Sardar Sarovar (Narmada), Hirakud (Mahanadi), Nagarjuna Sagar (Krishna), Tungabhadra (Tungabhadra).",
      "Identifies states and rivers for each dam project.",
      "Analyzes debate on environmental displacement: Narmada Bachao Andolan vs hydroelectric power generation."
    ],
    scaffoldSupport: "India river network outline map with numbered dam sites.",
    extensionChallenge: "Explain Jawahar Lal Nehrus statement proclaiming large dams as the Temples of Modern India.",
    sourceCitation: "CBSE Class 10 Geography Board Map Syllabus; Chapter 3 Water Resources",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-GEOG-4.4",
    title: "Analyze the ecological concept of Sustainable Development from Brundtland Report to Agenda 21",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Resource Planning, Soil Geography & Sustainability",
    timeEstimate: "35 min",
    resourceLevel: "Low",
    skillType: "Environmental Economics",
    assessmentMode: "Written Response",
    successCriteria: [
      "Defines Sustainable Development: Development that meets needs of present without compromising ability of future generations to meet their needs.",
      "Details Rio 1992 Earth Summit convening 100+ heads of state.",
      "Explains Agenda 21 mandate: Combating environmental damage, poverty, disease through global cooperation on common interests."
    ],
    scaffoldSupport: "Brundtland to Agenda 21 timeline summary.",
    extensionChallenge: "Explain why every local municipality or panchayat was mandated to draw its own Local Agenda 21.",
    sourceCitation: "NCERT Grade 10 Contemporary India - II, Chapter 1, p. 3",
    trackAlignment: "Track A"
  },
  {
    taskId: "SOC-10-HIST-2.2",
    title: "Analyze the role of folklore, songs, and prints in reviving national pride during the Swadeshi movement",
    subject: "Social Science",
    gradeBand: "Secondary Stage",
    grade: 10,
    competency: "Analyze nationalism, economic globalization, and sustainable resource planning",
    subCompetency: "Visual Allegories & Nationalist Symbolism",
    timeEstimate: "30 min",
    resourceLevel: "Low",
    skillType: "Cultural History",
    assessmentMode: "Written Reflection",
    successCriteria: [
      "Examines Rabindranath Tagores collection of ballads, nursery rhymes, and folk tales in Bengal.",
      "Examines Natesa Sastris massive 4-volume publication The Folklore of Southern India.",
      "Explains how folklore was viewed as national treasure giving true picture of traditional culture untainted by colonial rule."
    ],
    scaffoldSupport: "Cultural revivalist movement summary card.",
    extensionChallenge: "Analyze how Vande Mataram became the national anthem of protest during the 1905 Partition of Bengal.",
    sourceCitation: "NCERT Grade 10 India and Contemporary World - II, Chapter 2, pp. 48-50",
    trackAlignment: "Track A"
  }
];

const total = [...existing, ...additional];
fs.writeFileSync("./seeds/grade-10-tasks.json", JSON.stringify(total, null, 2));
console.log("Successfully updated seeds/grade-10-tasks.json to", total.length, "tasks.");
