import { SkillRubricData, EvidenceItem } from '@/types';

export const evidenceItemsData: EvidenceItem[] = [
  // 1. Knowledge Evidence
  {
    id: "ev-concept-explanation",
    category: "knowledge",
    categoryName: "Knowledge Evidence",
    title: "Concept Explanation & Synthesis",
    description: "Students describe the 'how' and 'why' of a phenomenon in their own words, moving beyond rote memorization of definitions.",
    examples: [
      "Explaining why plants in arid zones have reduced leaf surface area",
      "Describing the constitutional checks and balances between the Indian judiciary and executive",
      "Explaining the mathematical logic behind fraction division using visual area models"
    ],
    suitableFor: ["All grades", "Formative checks", "Notebook reflection", "Pair-share oral checks"],
    howToAssess: "Assess whether student articulates causal relationships and uses subject vocabulary accurately in context rather than quoting verbatim textbook phrasing."
  },
  {
    id: "ev-short-written-response",
    category: "knowledge",
    categoryName: "Knowledge Evidence",
    title: "Structured Written Response & Reasoning",
    description: "Concise paragraph or multi-sentence written explanations addressing a prompt with claims, grounds, and discipline-specific vocabulary.",
    examples: [
      "A 3-sentence explanation of how temperature affects gas pressure",
      "Analysis of a historical letter from the Indian freedom struggle explaining the author's viewpoint",
      "A paragraph explaining the environmental impact of single-use plastics on local water bodies"
    ],
    suitableFor: ["Grade 3 to 12", "Weekly checkpoint", "Exit slip", "Periodic test"],
    howToAssess: "Assess clarity of premise, logical connector usage (because, therefore, in contrast), and disciplinary precision."
  },
  {
    id: "ev-diagram-modelling",
    category: "knowledge",
    categoryName: "Knowledge Evidence",
    title: "Diagrammatic & Conceptual Modelling",
    description: "Visual or spatial representations showing interactions, workflows, cycles, or quantitative structures.",
    examples: [
      "Labelled scientific diagram of an inverted gravity filter with directional flow arrows",
      "Flowchart depicting the passage of an ordinary bill through Parliament",
      "Bar chart and pictograph showing neighbourhood tally data with uniform scale"
    ],
    suitableFor: ["Foundational to Secondary", "Science & Math labs", "Geography mapping", "Computational flowcharts"],
    howToAssess: "Assess spatial accuracy, appropriate labelling, conventional symbol adherence, and caption explanation."
  },
  {
    id: "ev-problem-set-quiz",
    category: "knowledge",
    categoryName: "Knowledge Evidence",
    title: "Diagnostic Problem Sets & Concept Quizzes",
    description: "Targeted problem sets that test conceptual boundary conditions and common misconceptions.",
    examples: [
      "5-question non-routine math problems testing proportional reasoning",
      "Diagnostic multiple-choice items with plausible distractors targeting common science misconceptions",
      "Data interpretation questions based on an authentic census table"
    ],
    suitableFor: ["Preparatory, Middle, Secondary", "Diagnostic baseline", "Post-unit concept verification"],
    howToAssess: "Assess error patterns to inform re-teaching rather than assigning purely punitive point scores."
  },

  // 2. Performance Evidence
  {
    id: "ev-investigation-experiment",
    category: "performance",
    categoryName: "Performance Evidence",
    title: "Scientific Investigation & Field Inquiry",
    description: "Active physical execution of a test, hypothesis verification, observation protocol, or variable manipulation.",
    examples: [
      "Conducting a tap flow rate and water audit across campus",
      "Testing germination rate under varying moisture and light conditions",
      "Conducting soil permeability tests using standardized cylinders"
    ],
    suitableFor: ["Science", "EVS", "Middle & Secondary grades"],
    howToAssess: "Assess variable isolation, observational diligence, accurate record-keeping, and adherence to lab safety."
  },
  {
    id: "ev-prototype-making",
    category: "performance",
    categoryName: "Performance Evidence",
    title: "Prototype Construction & Design Engineering",
    description: "Building a functional mechanical, digital, or physical artifact designed to address an identified functional need.",
    examples: [
      "Constructing a multi-layered sand-charcoal water filter column",
      "Building a mechanical waste sorter using cardboard ramps and levers",
      "Coding a Scratch program simulating a food web population balance"
    ],
    suitableFor: ["Vocational studies", "Science", "Computer science", "Art integration"],
    howToAssess: "Assess structural integrity, iterative modification based on test failures, and documentation of trade-offs."
  },
  {
    id: "ev-presentation-debate",
    category: "performance",
    categoryName: "Performance Evidence",
    title: "Structured Presentation & Academic Debate",
    description: "Oral delivery of arguments or findings to an authentic audience, responding to clarifying questions and counter-points.",
    examples: [
      "Presenting a Community Problem Explorer fishbone diagram to peers",
      "Participating in a mock legislative committee hearing on pedestrian safety",
      "Explaining an AI Ethics Canvas to the school tech coordinator"
    ],
    suitableFor: ["Social Science", "Languages", "Interdisciplinary seminars"],
    howToAssess: "Assess logical structure, evidence-backed claims, active listening, respectful rebuttal, and pacing."
  },
  {
    id: "ev-data-analysis",
    category: "performance",
    categoryName: "Performance Evidence",
    title: "Data Analysis & Pattern Interpretation",
    description: "Extracting insights, identifying anomalies, calculating rates, and deducing trends from authentic empirical datasets.",
    examples: [
      "Extrapolating 30-day water loss from 5-minute dripping tap measurements",
      "Interpreting school attendance drops during monsoon months across 3 years",
      "Auditing an AI training dataset to detect under-representation of rural linguistic groups"
    ],
    suitableFor: ["Mathematics", "Science", "Computational Thinking", "Economics"],
    howToAssess: "Assess computational accuracy, valid inferencing (avoiding unwarranted extrapolation), and recognition of margins of error."
  },

  // 3. Reflection Evidence
  {
    id: "ev-learning-journal",
    category: "reflection",
    categoryName: "Reflection Evidence",
    title: "Metacognitive Learning Journal & Exit Ticket",
    description: "Individual, honest recording of personal conceptual obstacles, breakthroughs, and cognitive adjustments over time.",
    examples: [
      "Writing what was most surprising about local neighbourhood tree counts",
      "Explaining how hearing an elder's perspective shifted an assumption on local water rights",
      "Exit ticket: 'One concept that feels clear today, and one question I still cannot answer'"
    ],
    suitableFor: ["All stages", "End-of-class routine", "Weekly teacher feedback loop"],
    howToAssess: "Assess depth of self-awareness and honesty in locating conceptual sticking points, NOT literary perfection."
  },
  {
    id: "ev-peer-feedback",
    category: "reflection",
    categoryName: "Reflection Evidence",
    title: "Structured Peer Feedback ('Two Stars and a Wish')",
    description: "Reviewing peer work against an objective standard, offering actionable commendations and precise suggestions for improvement.",
    examples: [
      "Reviewing a peer team's AI Solution Canvas to spot hidden bias risks",
      "Evaluating a partner's policy brief recommendations against SMART criteria",
      "Checking a classmate's pictograph for consistent icon scale and axis clarity"
    ],
    suitableFor: ["Middle and Secondary grades", "Pair work", "Writing and lab report workshops"],
    howToAssess: "Assess alignment of feedback with objective rubric criteria and constructive, respectful phrasing."
  },
  {
    id: "ev-goal-setting-portfolio",
    category: "reflection",
    categoryName: "Reflection Evidence",
    title: "Student Portfolio Curation & Goal-Setting",
    description: "Selecting representative pieces of work across time, articulating why each artifact demonstrates capability growth.",
    examples: [
      "Curating an end-of-term Grade 8 portfolio containing an AI canvas, a math modeling worksheet, and a self-audit note",
      "Setting a personal improvement target in scientific unit conversions and tracking progress over 4 weeks",
      "Writing a cover letter introducing a collection of 3 argumentative essays"
    ],
    suitableFor: ["Preparatory, Middle, Secondary", "Parent-Teacher-Student Conferences", "Term assessment"],
    howToAssess: "Assess student rationale for artifact selection and alignment of future goals with observed feedback."
  }
];

export const sampleRubricsData: SkillRubricData[] = [
  {
    id: "rubric-data-literacy-g3",
    title: "Primary Data Literacy & Graphing Rubric",
    skill: "Data collection, tallying, and visual representation",
    stage: "Preparatory",
    grade: "Grade 3",
    subject: "Mathematics & EVS",
    description: "Evaluates observable learner capabilities in gathering categorical observations and organizing them into pictorial charts.",
    criteria: [
      {
        id: "crit-1",
        criterion: "Data Collection & Tallying",
        emerging: "Records tick marks inconsistently; confuses category boundaries or misses items during the count.",
        developing: "Records counts accurately with teacher guidance; groups tallies in bundles of 5 with occasional minor counting slips.",
        proficient: "Independently records discrete observations using standard tally marks (groups of 5) accurately without double-counting.",
        transfer: "Independently structures a new tally table for an unfamiliar classroom or home item; verifies count with a partner without prompting."
      },
      {
        id: "crit-2",
        criterion: "Pictorial Representation",
        emerging: "Draws icons of varying sizes; graph lacks consistent baseline or vertical/horizontal alignment.",
        developing: "Uses a common baseline but icon spacing is uneven, making visual comparison of quantities slightly ambiguous.",
        proficient: "Constructs a clear pictograph with uniform icon size, consistent grid spacing, and clear category labels.",
        transfer: "Explains and applies a 1-to-2 or 1-to-5 icon scale appropriately when counts exceed single-digit spaces."
      },
      {
        id: "crit-3",
        criterion: "Interpretation & Communication",
        emerging: "Identifies only the single largest bar; unable to articulate comparative differences.",
        developing: "Identifies maximum and minimum categories when prompted; calculates simple differences with teacher support.",
        proficient: "Independently states correct comparative observations (e.g. 'We saw 4 more neem trees than gulmohar trees').",
        transfer: "Presents a logical hypothesis explaining why a certain category was high or low based on physical environment cues."
      }
    ],
    teacherNotes: "Avoid grading neatness or artistic perfection of icons. Focus strictly on whether the numerical one-to-one correspondence and categorization are preserved."
  },
  {
    id: "rubric-inquiry-g6",
    title: "Root-Cause Inquiry & Systemic Framing Rubric",
    skill: "Root-cause inquiry and multi-perspective framing",
    stage: "Middle",
    grade: "Grade 6",
    subject: "Science & Social Science",
    description: "Assesses student ability to distinguish visible symptoms from structural root causes through empirical investigation.",
    criteria: [
      {
        id: "crit-1",
        criterion: "Distinguishing Symptoms from Causes",
        emerging: "Confounds visible symptoms with underlying causes (e.g., states 'litter is the cause of littering').",
        developing: "Identifies immediate proximate factors (e.g., 'bins are full') but stops inquiry before reaching organizational habits or tool deficits.",
        proficient: "Systematically applies the 'Five Whys' to uncover underlying operational, behavioral, or material root causes.",
        transfer: "Maps multi-causal relationships showing how a physical condition (e.g., lack of running water) drives human practice (e.g., unwashed hands)."
      },
      {
        id: "crit-2",
        criterion: "Empirical Interviewing & Evidence Use",
        emerging: "Relies entirely on personal hearsay or assumptions without citing verified statements from stakeholders.",
        developing: "Conducts interview but captures only one-word answers or paraphrases with heavy student bias.",
        proficient: "Conducts respectful semi-structured interview, recording verbatim stakeholder quotes accurately with dated attribution.",
        transfer: "Compares conflicting viewpoints between two different community roles (e.g., custodian vs student user) objectively without bias."
      },
      {
        id: "crit-3",
        criterion: "Objective Framing",
        emerging: "Uses accusatory or moralizing language ('people are lazy', 'cleaners don't care').",
        developing: "Frames the problem neutrally in parts, but occasionally slips into generalized assumptions.",
        proficient: "Frames problem strictly in observable operational terms focusing on systems, physical infrastructure, and clear resource gaps.",
        transfer: "Formulates a systemic problem statement that identifies leverage points where a modest intervention would create significant impact."
      }
    ],
    teacherNotes: "Emphasize respectful listening and ethical reporting. Give feedback specifically on the neutrality and precision of student language."
  },
  {
    id: "rubric-ai-ethics-g8",
    title: "Responsible AI Literacy & Bias Auditing Rubric",
    skill: "Algorithmic bias auditing and human-in-the-loop design",
    stage: "Middle",
    grade: "Grade 8",
    subject: "Computer Science & Interdisciplinary",
    description: "Evaluates how learners conceptualize machine learning pipelines, identify training bias, and construct ethical human safeguards.",
    criteria: [
      {
        id: "crit-1",
        criterion: "Understanding Machine Learning Logic",
        emerging: "Conflates AI with sentient robotics; describes system as 'thinking' or 'having feelings' like a person.",
        developing: "Understands that the system processes data, but confuses rule-based programming (if/then) with statistical pattern training.",
        proficient: "Accurately articulates that the model learns correlations from historical training inputs to make probabilistic predictions.",
        transfer: "Explains how training dataset distribution directly determines the model's performance boundaries and edge-case error rates."
      },
      {
        id: "crit-2",
        criterion: "Bias Auditing & Edge-Case Identification",
        emerging: "Assumes machine outputs are inherently objective and flawless because 'a computer computed it'.",
        developing: "Acknowledges bias exists in theory, but struggles to identify specific demographic or physical blind spots in their own dataset.",
        proficient: "Explicitly identifies at least two distinct failure modes resulting from training data exclusion or historical inequities.",
        transfer: "Analyzes systemic feedback loops (e.g., how an inaccurate recommendation suppresses engagement, which further skews future training data)."
      },
      {
        id: "crit-3",
        criterion: "Safeguard Design & Human-in-the-Loop",
        emerging: "Proposes no safeguards, allowing automated decisions to execute without human appeal or review.",
        developing: "Suggests vague oversight (e.g., 'a teacher will watch it') without defining trigger thresholds or appeal protocols.",
        proficient: "Designs concrete human-in-the-loop checkpoints triggered by low confidence scores or high-impact decisions.",
        transfer: "Formulates a comprehensive student data privacy policy detailing what data must never be collected, retention limits, and student appeal rights."
      }
    ],
    teacherNotes: "Check that students evaluate the algorithmic system critically without assigning magical thinking or human moral intent to code."
  },
  {
    id: "rubric-policy-argumentation-g9",
    title: "Disciplinary Research & Policy Argumentation Rubric",
    skill: "Secondary research, statistical synthesis, and policy memo drafting",
    stage: "Secondary",
    grade: "Grade 9",
    subject: "Social Science & Language",
    description: "Assesses secondary students' capacity to synthesize quantitative data, map civic stakeholder tensions, and craft actionable public briefs.",
    criteria: [
      {
        id: "crit-1",
        criterion: "Evidence-Based Central Thesis",
        emerging: "Presents purely personal opinion or slogans without structured premise or verifiable factual grounding.",
        developing: "States a claim with supporting facts, but evidence is selectively chosen without addressing obvious contradictory data.",
        proficient: "Constructs a tight, logically sequenced central thesis corroborated by cited statistical sources and empirical findings.",
        transfer: "Synthesizes macro-level civic data with local micro-level case evidence to demonstrate the broader relevance of a localized issue."
      },
      {
        id: "crit-2",
        criterion: "Stakeholder Tension & Counter-Perspective",
        emerging: "Portrays opposing views as malicious or ignorant, failing to acknowledge valid underlying economic or safety concerns.",
        developing: "Mentions opposing viewpoints briefly, but dismisses them without rigorous rebuttal or analytical concession.",
        proficient: "Articulates the legitimate interests of at least three conflicting stakeholder groups objectively and empathetically.",
        transfer: "Demonstrates how proposed policy adjustments mitigate the financial or logistical burdens borne by the counter-stakeholders."
      },
      {
        id: "crit-3",
        criterion: "Feasibility of Recommendations",
        emerging: "Proposes utopian or non-jurisdictional demands (e.g., 'the government should give everyone a free car').",
        developing: "Proposes reasonable ideas, but lacks specific implementing bodies, timeline milestones, or budgetary awareness.",
        proficient: "Formulates SMART recommendations aligned with the statutory mandates of local municipal, ward, or school authorities.",
        transfer: "Identifies potential second-order unintended consequences of their own policy and builds pre-emptive mitigation measures into the brief."
      }
    ],
    teacherNotes: "Evaluate argument rigor, citation credibility, and institutional awareness. Refrain from judging student political alignment."
  }
];
