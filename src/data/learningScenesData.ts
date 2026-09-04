import { 
  ActivitySceneConfig, 
  ProcessStepNode, 
  TeacherGuideVisual, 
  VisualGlossaryItem 
} from '@/types/illustrations';

export const priorityScenesData: Record<string, ActivitySceneConfig> = {
  // ================= GRADE 3: NEIGHBOURHOOD DATA WALK =================
  'act-g3-neighbourhood-walk': {
    activityId: 'act-g3-neighbourhood-walk',
    grade: 'Grade 3',
    title: 'My Neighbourhood Data Walk',
    themeColor: '#2B8C87',
    scenario: {
      title: 'Active Neighbourhood Data Detective Mission',
      setting: 'Tree-lined school perimeter & shaded courtyard with classroom assembly pods',
      teacherRole: 'Facilitator setting safe observational boundaries and prompting counting criteria',
      studentRoles: 'Detective pairs: Spotter scanning the surroundings and Tally Recorder logging counts',
      challengeTask: 'Systematically count 3 distinct local elements (neem trees, waste bins, bicycles) and convert into a 1-to-1 pictograph poster',
      collaborationMode: 'Collaborative pairs during walk; small 4-student pods during chart creation',
      expectedBehaviour: 'Careful observation, active listening, bundle-of-5 tally discipline, respectful teamwork',
      altText: 'Illustration of Grade 3 student detective pair with clipboard and checklist observing a green neem tree and school bicycle rack while their teacher smiles in guidance from the shaded school corridor.'
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Mission Launch & Tally Sheet Briefing',
        actionLabel: 'Brief & Equip',
        instruction: 'Teacher introduces the Detective Checklist with picture icons. Review bundle-of-5 tallying: four vertical strokes crossed by the 5th stick.',
        duration: '10 min',
        visualSummary: 'Teacher displays clipboard with tally rules; students hold pencils and tally sheets ready.',
        svgKey: 'g3-step-1',
        altText: 'Teacher demonstrating the 5-stroke tally bundle on a demonstration board with student partners looking on.'
      },
      {
        stepNumber: 2,
        title: 'Guided Perimeter Walk & Tally Logging',
        actionLabel: 'Spot & Mark',
        instruction: 'Walk in synchronized pairs along the campus path. For every flowering tree, waste bin, or bicycle spotted, mark one crisp stroke.',
        duration: '25 min',
        visualSummary: 'Student pointing toward a bicycle rack while partner records tally stroke on clipboard.',
        svgKey: 'g3-step-2',
        altText: 'Two Grade 3 students walking outdoors; one points to a bicycle and the other marks a vertical line on their clipboard.'
      },
      {
        stepNumber: 3,
        title: 'Cross-Check Totals in Pods',
        actionLabel: 'Compare & Verify',
        instruction: 'Return to classroom pods. Compare counts with your partner: "Did we count 7 trees or 8? Why might our numbers differ?"',
        duration: '10 min',
        visualSummary: 'Partners comparing tally clipboards side-by-side with circular bundle totals.',
        svgKey: 'g3-step-3',
        altText: 'Two seated students comparing their tally totals at a round table, discussing differences.'
      },
      {
        stepNumber: 4,
        title: 'Constructing the Pictograph Poster',
        actionLabel: 'Paste & Map',
        instruction: 'Glue one coloured circle sticker or draw one icon for every tally count onto the column chart. Ensure uniform spacing.',
        duration: '15 min',
        visualSummary: 'Hands sticking coloured dots on a 3-column chart paper labeled Trees, Bins, Bicycles.',
        svgKey: 'g3-step-4',
        altText: 'Student hands affixing teal and orange dots in vertical columns onto an A3 chart paper.'
      },
      {
        stepNumber: 5,
        title: 'Oral Presentation & Comparison',
        actionLabel: 'Interpret & Share',
        instruction: 'Present your pod poster to the class. State: "We found 3 more trees than waste bins. Bicycles were the most frequent."' ,
        duration: '10 min',
        visualSummary: 'Student team proudly holding up their completed pictograph poster answering teacher questions.',
        svgKey: 'g3-step-5',
        altText: 'Grade 3 students holding their completed pictograph poster explaining their findings to classmates.'
      }
    ],
    materials: [
      { name: 'Cardboard backing / Clipboards', iconType: 'clipboard', lowResourceSubstitute: 'Hardcover textbook backing' },
      { name: 'Tally sheets with visual icons', iconType: 'paper', lowResourceSubstitute: 'Ruled notebook page with 3 columns' },
      { name: 'Pencils and erasers', iconType: 'pencil' },
      { name: 'Coloured round dot stickers / Crayons', iconType: 'chart', lowResourceSubstitute: 'Torn coloured newspaper squares or chalk' },
      { name: 'A3 Chart Paper', iconType: 'paper', lowResourceSubstitute: 'Blackboard section or slate' }
    ],
    evidence: {
      title: 'Local Neighbourhood Pictograph Poster',
      artifactType: 'pictograph-poster',
      description: 'A student-created graphical chart showing 1-to-1 data mapping with accurate categories, uniform spacing, and written concluding sentences.',
      observableIndicators: [
        'Accurately groups observations into discrete non-overlapping categories',
        'Demonstrates correct bundle-of-5 tallying on raw field sheet',
        'Translates tally totals into uniform 1-to-1 visual icon columns',
        'Articulates at least one valid comparative inference (e.g. "Trees exceeded bins by 4")'
      ],
      svgKey: 'g3-evidence',
      altText: 'Completed student pictograph showing columns of trees, bins, and bicycles with tally marks and summary sentence.'
    },
    inclusion: {
      title: 'Accessible Observation & Spotting Roles',
      description: 'Pair students with mobility considerations with an active spotting partner, or set up a comfortable panoramic observation post along the shaded school veranda.',
      type: 'mobility',
      actionableTip: 'Ensure tally sheets feature bold pictographic icons alongside written labels to support emerging multilingual readers.'
    }
  },

  // ================= GRADE 6: COMMUNITY PROBLEM EXPLORER =================
  'act-g6-community-explorer': {
    activityId: 'act-g6-community-explorer',
    grade: 'Grade 6',
    title: 'Community Problem Explorer',
    themeColor: '#E7853C',
    scenario: {
      title: 'Investigative Problem-Tree Workshop',
      setting: 'Classroom arranged in 4-student collaborative inquiry clusters with butcher paper templates',
      teacherRole: 'Inquiry guide challenging superficial blame and pushing students toward systemic root causes',
      studentRoles: 'Interview Lead, Note Scribe, Systems Mapper, and Peer Reviewer',
      challengeTask: 'Investigate a tangible local campus or neighbourhood bottleneck, conduct ethical worker interviews, and map causes using a Problem Tree',
      collaborationMode: 'Teams of 4 with defined investigative roles',
      expectedBehaviour: 'Empathetic listening, respectful interview etiquette, objective evidence-based reasoning',
      altText: 'Illustration of Grade 6 students working around a large table drawing a Problem Tree with green leaves for symptoms, sturdy trunk for core problem, and deep roots for structural causes.'
    },
    steps: [
      {
        stepNumber: 1,
        title: 'The "Five Whys" Root-Cause Warmup',
        actionLabel: 'Drill Deeper',
        instruction: 'Practice the "5 Whys" method using a familiar symptom (e.g., dusty classroom floors at 2 PM). Peel back 5 layers to discover underlying systemic gaps.',
        duration: '15 min',
        visualSummary: 'Downward cascading question arrows revealing deeper causes beneath surface symptoms.',
        svgKey: 'g6-step-1',
        altText: 'Diagram of cascading arrows showing the 5 Whys progression from surface observation to underlying systemic reason.'
      },
      {
        stepNumber: 2,
        title: 'Topic Scoping & Stakeholder Identification',
        actionLabel: 'Select & Map',
        instruction: 'Choose one concrete challenge: tap water wastage, lunch canteen waste overflow, or corridor congestion. Identify who deals with it daily.',
        duration: '20 min',
        visualSummary: 'Sticky notes grouping local challenges and naming community workers to consult.',
        svgKey: 'g6-step-2',
        altText: 'Students clustering sticky notes on a whiteboard under categories of waste, water, and crowding.'
      },
      {
        stepNumber: 3,
        title: 'Ethical Field Interview with Community Worker',
        actionLabel: 'Listen & Log',
        instruction: 'Ask 3 structured questions to a custodian, canteen helper, or school guard. Always request polite permission and transcribe verbatim quotes.',
        duration: '20 min',
        visualSummary: 'Student holding interview clipboard speaking politely with school staff member wearing work attire.',
        svgKey: 'g6-step-3',
        altText: 'Grade 6 student respectfully asking questions to a school maintenance worker who shares insights with smiles.'
      },
      {
        stepNumber: 4,
        title: 'Synthesizing the Community Problem Tree',
        actionLabel: 'Draw & Categorize',
        instruction: 'Draw the Problem Tree: Leaves = Visible Symptoms, Trunk = The Core Problem, Roots = Environmental, Habitual, and Resource Causes.',
        duration: '25 min',
        visualSummary: 'Team pasting multi-coloured cards onto roots, trunk, and branches of a large tree diagram.',
        svgKey: 'g6-step-4',
        altText: 'Four students assembling a Problem Tree poster, placing green notes on leaves and orange cards on roots.'
      },
      {
        stepNumber: 5,
        title: 'Peer Gallery Walk & Constructive Sticky Feedback',
        actionLabel: 'Review & Commend',
        instruction: 'Conduct a silent gallery walk. Each team leaves 1 warm commendation note and 1 clarifying inquiry on peer posters.',
        duration: '20 min',
        visualSummary: 'Students browsing mounted posters and adding small yellow feedback sticky notes.',
        svgKey: 'g6-step-5',
        altText: 'Students walking around classroom gallery reading posters and leaving constructive sticky notes.'
      }
    ],
    materials: [
      { name: 'A3 Chart Paper or Butcher Sheets', iconType: 'paper', lowResourceSubstitute: 'Blackboard chalk quadrants' },
      { name: 'Coloured Sticky Notes (Pink, Yellow, Green)', iconType: 'card', lowResourceSubstitute: 'Cut recycled paper chits with paste' },
      { name: 'Interview Consent & Question Cards', iconType: 'clipboard' },
      { name: 'Felt-tip sketch markers', iconType: 'pencil' }
    ],
    evidence: {
      title: 'The Community Problem Tree Poster',
      artifactType: 'problem-tree',
      description: 'A comprehensive visual root-cause diagram backed by documented interview quotes and categorised environmental/human factors.',
      observableIndicators: [
        'Frames problem objectively without assigning personal or moral blame',
        'Integrates primary evidence from real stakeholder interviews',
        'Distinctly separates surface symptoms (leaves) from systemic drivers (roots)',
        'Demonstrates collaborative role contribution and constructive peer critique'
      ],
      svgKey: 'g6-evidence',
      altText: 'Detailed Problem Tree poster with symptoms on canopy branches, problem statement on trunk, and multi-coloured root causes.'
    },
    inclusion: {
      title: 'Multilingual & Audio Interview Support',
      description: 'Encourage conducting community interviews in local mother tongues (Hindi, Tamil, Marathi, etc.), and permit voice recording or partner transcription where writing assistance is helpful.',
      type: 'language',
      actionableTip: 'Provide sentence-starter interview strips: "Sir/Madam, what makes your daily task most challenging when...?"'
    }
  },

  // ================= GRADE 7: WATER AUDIT & FILTRATION =================
  'act-g7-water-audit': {
    activityId: 'act-g7-water-audit',
    grade: 'Grade 7',
    title: 'Water Audit and Filtration Challenge',
    themeColor: '#0F2A43',
    scenario: {
      title: 'Science Wet-Lab Water Stewardship Lab',
      setting: 'Outdoor wash area or science laboratory counter with water taps and drainage trays',
      teacherRole: 'Safety supervisor ensuring sanitary handling of non-potable water and guiding volumetric conversions',
      studentRoles: 'Flow Auditor (timing/measuring), Materials Engineer (column packing), and Data Analyst (rate formulas)',
      challengeTask: 'Measure campus tap leakage, mathematically extrapolate 30-day water loss, and engineer a multi-layered gravity sand-charcoal filter',
      collaborationMode: 'Teams of 3–4 working at dedicated wet testing stations',
      expectedBehaviour: 'Precise measurement, systematic layer sequencing, rigorous safety discipline',
      altText: 'Illustration of Grade 7 students testing an inverted clear bottle filter with sand, gravel, and charcoal layers as water drips into a measuring cylinder beside a stopwatch.'
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Campus Tap Flow Rate & Drip Audit',
        actionLabel: 'Time & Measure',
        instruction: 'Measure tap flow rates using a 1-litre graduated bottle. For leaking taps, collect drip volume for exactly 300 seconds and record in millilitres.',
        duration: '25 min',
        visualSummary: 'Student holding a measuring cylinder under a dripping faucet with partner timing with stopwatch.',
        svgKey: 'g7-step-1',
        altText: 'Student timing a dripping tap with stopwatch while partner captures water in a graduated cylinder.'
      },
      {
        stepNumber: 2,
        title: 'Mathematical 30-Day Extrapolation',
        actionLabel: 'Calculate & Project',
        instruction: 'Convert raw drip rates into hourly, daily, and monthly loss: (mL ÷ 5 min) × 12 = mL/hr; × 24 = Litres/day; × 30 = Monthly campus wastage.',
        duration: '15 min',
        visualSummary: 'Notebook showing arithmetic conversion formula and 20-litre water can equivalents.',
        svgKey: 'g7-step-2',
        altText: 'Formula on chalkboard calculating monthly water loss from a single dripping tap.'
      },
      {
        stepNumber: 3,
        title: 'Designing Granular Porosity Sequence',
        actionLabel: 'Sequence Layers',
        instruction: 'Discuss particle retention mechanics: why coarse gravel must rest on top, clean river sand in the middle, and activated charcoal near the base.',
        duration: '20 min',
        visualSummary: 'Cross-section diagram comparing particle sizes of gravel, sand, and charcoal.',
        svgKey: 'g7-step-3',
        altText: 'Cross section illustration showing gravel trapping large twigs, sand filtering silt, and charcoal absorbing impurities.'
      },
      {
        stepNumber: 4,
        title: 'Assembling the Gravity Filter Column',
        actionLabel: 'Pack & Test',
        instruction: 'Invert cut 2L bottle. Place cotton cloth plug at neck, followed by charcoal, fine sand, coarse sand, and top gravel. Gently pour 250 mL turbid water.',
        duration: '25 min',
        visualSummary: 'Pouring murky brown water into the top of the layered inverted bottle filter.',
        svgKey: 'g7-step-4',
        altText: 'Hands gently pouring turbid water into top of clear multi-layered bottle filter column.'
      },
      {
        stepNumber: 5,
        title: 'Turbidity Secchi Check & Lab Report',
        actionLabel: 'Evaluate Clarity',
        instruction: 'Measure filtrate yield volume, timing, and optical clarity against a white paper Secchi disc. Log observations in science journal.',
        duration: '15 min',
        visualSummary: 'Holding beaker of clear filtered water above a target disk to compare turbidity before and after.',
        svgKey: 'g7-step-5',
        altText: 'Student comparing turbid input sample with clear filtered water held against white paper.'
      }
    ],
    materials: [
      { name: 'Cut 1L or 2L clear plastic bottles', iconType: 'bottle', lowResourceSubstitute: 'Clay matka pot with drainage hole' },
      { name: 'Clean river sand and coarse gravel', iconType: 'leaves' },
      { name: 'Activated charcoal bits', iconType: 'filter', lowResourceSubstitute: 'Crushed coconut shell charcoal' },
      { name: 'Cotton wool or clean muslin cloth', iconType: 'paper' },
      { name: 'Graduated measuring cylinder / stopwatch', iconType: 'stopwatch' }
    ],
    evidence: {
      title: 'Water Audit & Filter Engineering Report',
      artifactType: 'filtration-report',
      description: 'A 2-page lab report combining quantitative leak extrapolations, annotated filter column cross-section, and turbidity comparison data.',
      observableIndicators: [
        'Accurately calculates volumetric rate conversions (mL/min → L/month)',
        'Justifies the physical scientific rationale for layer sequence',
        'Maintains controlled testing conditions (constant input volume)',
        'Includes explicit non-potable water safety disclaimer'
      ],
      svgKey: 'g7-evidence',
      altText: 'Science journal page featuring filter column cross-section, flow rate calculation table, and turbidity ratings.'
    },
    inclusion: {
      title: 'Accessible Testing Surfaces & Tactile Roles',
      description: 'Ensure lab benches provide wheelchair-accessible height clearances and non-slip floor mats. Students with visual differences can lead flow timing and tactile material sorting.',
      type: 'mobility',
      actionableTip: 'Keep clean towels and water containers within easy seated reach to maintain comfortable workspace hygiene.'
    },
    safety: {
      title: 'Non-Potable Filtrate Warning',
      warningText: 'Physically filtered water is freed of suspended sediment, but remains biologically untreated. It is NOT SAFE FOR DRINKING without boiling or chlorination.',
      precaution: 'Ensure all test beakers are marked with clear "FOR EXPERIMENT ONLY — DO NOT DRINK" visual stickers.'
    }
  },

  // ================= GRADE 8: AI FOR A SCHOOL PROBLEM =================
  'act-g8-ai-school-problem': {
    activityId: 'act-g8-ai-school-problem',
    grade: 'Grade 8',
    title: 'AI for a School Problem: Ethical Design Challenge',
    themeColor: '#4F46E5',
    scenario: {
      title: 'Responsible AI Product Design Studio',
      setting: 'Computer lab or standard classroom arranged into 3-student design agency desks with AI canvas charts',
      teacherRole: 'Ethics moderator interrogating algorithmic assumptions and guiding data governance norms',
      studentRoles: 'Design Trio: Data Architect (inputs), Ethics Auditor (bias & privacy), and UX Safeguard Lead (human oversight)',
      challengeTask: 'Design a conceptual school AI helper (book recommender or lost-and-found classifier), audit dataset for bias, and build human-in-the-loop controls',
      collaborationMode: 'Product design trios with assigned audit responsibilities',
      expectedBehaviour: 'Analytical thinking, critical skepticism of automated systems, privacy consciousness',
      altText: 'Illustration of Grade 8 students in design studio annotating a 4-quadrant AI Ethics Canvas with coloured sticky notes around an interactive tablet screen.'
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Human-Model Training Simulation',
        actionLabel: 'Simulate & Learn',
        instruction: 'Experience how supervised models learn patterns: show 10 training cards with labels, then test an ambiguous edge case to see where bias creeps in.',
        duration: '20 min',
        visualSummary: 'Comparing training image cards with labels and revealing the edge-case blind spot.',
        svgKey: 'g8-step-1',
        altText: 'Students sorting flashcards into labeled bins to demonstrate how machine learning identifies statistical patterns.'
      },
      {
        stepNumber: 2,
        title: 'Scoping the School AI Challenge',
        actionLabel: 'Define Problem',
        instruction: 'Pick one school problem suitable for pattern recognition: (a) Library book recommender, (b) Corridor noise predictor, or (c) Lost-and-found classifier.',
        duration: '20 min',
        visualSummary: 'Sticky note selection on classroom challenges with input-output specifications.',
        svgKey: 'g8-step-2',
        altText: 'Design team choosing the library book recommendation challenge on their workspace board.'
      },
      {
        stepNumber: 3,
        title: 'Curating the 50-Record Training Dataset',
        actionLabel: 'Collect Data',
        instruction: 'Specify 50 representative data points. Explicitly examine: "Whose preferences are included? What student groups or book languages are missing?"',
        duration: '25 min',
        visualSummary: 'Data sheet grid categorizing student reading history and genre labels.',
        svgKey: 'g8-step-3',
        altText: 'Students populating a data matrix spreadsheet table checking demographic and language diversity.'
      },
      {
        stepNumber: 4,
        title: 'Peer Algorithmic Bias Audit',
        actionLabel: 'Audit Blindspots',
        instruction: 'Swap canvases with another team. The auditor’s mission is to identify 2 ways this system could discriminate, produce false alarms, or breach privacy.',
        duration: '15 min',
        visualSummary: 'Reviewer pointing red highlighter at a missing category on peer canvas.',
        svgKey: 'g8-step-4',
        altText: 'Peer auditor placing red sticky notes indicating where training data neglects vernacular languages.'
      },
      {
        stepNumber: 5,
        title: 'Designing Human-in-the-Loop Safeguards',
        actionLabel: 'Build Safeguards',
        instruction: 'Draw the Human Shield: when confidence is below 85% or an action restricts student access, require mandatory librarian/teacher verification.',
        duration: '20 min',
        visualSummary: 'Flowchart branching to a teacher check icon before an automated action occurs.',
        svgKey: 'g8-step-5',
        altText: 'Flowchart showing AI recommendation feeding into a teacher confirmation checkpoint before sending notice.'
      }
    ],
    materials: [
      { name: 'Printed A3 AI Ethics & Design Canvas', iconType: 'chart', lowResourceSubstitute: 'Notebook divided into 4 ruled quadrants' },
      { name: 'Coloured Sticky Notes (Blue, Yellow, Red, Green)', iconType: 'card' },
      { name: 'Historical AI Bias Case Study Cards', iconType: 'paper' },
      { name: 'Fine-point sketch pens', iconType: 'pencil' }
    ],
    evidence: {
      title: 'Responsible AI Solution Canvas',
      artifactType: 'ai-canvas',
      description: 'A structured 4-quadrant system architecture blueprint specifying Inputs, Model Logic, Algorithmic Bias Risks, and Human Safeguards.',
      observableIndicators: [
        'Distinguishes statistical machine learning from simple deterministic rules',
        'Identifies concrete sources of training dataset skew and historical bias',
        'Formulates proportional human-in-the-loop oversight mechanisms',
        'Maintains strict student privacy boundaries without personifying algorithms'
      ],
      svgKey: 'g8-evidence',
      altText: 'Completed AI Ethics Canvas with 4 quadrants filled with sticky notes and human-in-the-loop verification gateway.'
    },
    inclusion: {
      title: 'Equitable Technical Role Distribution',
      description: 'Ensure students rotate between technical architecture, ethical auditing, and visual communication so no single student dominates or feels sidelined.',
      type: 'general',
      actionableTip: 'Provide bilingual glossaries for technical terms (e.g. Training Data / Prashikshan Data, Bias / Pakshpaat).'
    }
  },

  // ================= GRADE 9: POLICY BRIEF =================
  'act-g9-policy-brief': {
    activityId: 'act-g9-policy-brief',
    grade: 'Grade 9',
    title: 'Evidence-Based Local Policy Brief',
    themeColor: '#0F2A43',
    scenario: {
      title: 'Legislative Policy Advisory Seminar',
      setting: 'Parliamentary seminar layout with municipal maps, demographic tables, and reference dossiers',
      teacherRole: 'Municipal Commissioner chairing the session, challenging students on civic feasibility and budgetary trade-offs',
      studentRoles: 'Policy Research Fellows presenting evidence-backed memos to a peer Legislative Standing Committee',
      challengeTask: 'Investigate a contested local civic dilemma (e.g. school zone pedestrian safety or groundwater regulation) and author a 2-page brief',
      collaborationMode: 'Research pairs authoring brief; plenary standing committee peer defense',
      expectedBehaviour: 'Analytical rigor, non-partisan objective language, citation of verifiable empirical data',
      altText: 'Illustration of Grade 9 students defending their 2-page municipal policy memo before a mock legislative hearing committee.'
    },
    steps: [
      {
        stepNumber: 1,
        title: 'Deconstructing Municipal Policy Memos',
        actionLabel: 'Analyze Format',
        instruction: 'Examine a real municipal whitepaper. Note why public administrators need executive abstracts and bulleted empirical evidence rather than essays.',
        duration: '20 min',
        visualSummary: 'Annotated policy document layout highlighting Executive Summary, Evidence, and Trade-offs.',
        svgKey: 'g9-step-1',
        altText: 'Students dissecting the structured layout of a 2-page municipal policy brief on a tablet screen.'
      },
      {
        stepNumber: 2,
        title: 'Civic Issue Selection & Stakeholder Matrix',
        actionLabel: 'Map Interests',
        instruction: 'Select a municipal issue (e.g., pedestrian safety outside school gate). Map 3 competing stakeholders: shop owners, parents, and daily commuters.',
        duration: '25 min',
        visualSummary: 'Stakeholder matrix table showing conflicting incentives and priorities.',
        svgKey: 'g9-step-2',
        altText: '3-column matrix contrasting the differing priorities of shopkeepers, traffic police, and parents.'
      },
      {
        stepNumber: 3,
        title: 'Data Synthesis & Empirical Source Citation',
        actionLabel: 'Cite Evidence',
        instruction: 'Extract at least 2 numerical data points from municipal reports or traffic surveys. Distinguish empirical facts from normative opinions.',
        duration: '45 min',
        visualSummary: 'Bar graph of peak-hour vehicle speeds paired with formal footnote citations.',
        svgKey: 'g9-step-3',
        altText: 'Student drafting policy paragraph linking traffic speed survey data to specific cited references.'
      },
      {
        stepNumber: 4,
        title: 'Drafting SMART Actionable Mandates',
        actionLabel: 'Formulate Policy',
        instruction: 'Author 3 prioritized recommendations meeting SMART criteria. Specify designated implementing bodies (Ward Councillor, PWD, Traffic Police).',
        duration: '25 min',
        visualSummary: 'Checklist of SMART criteria next to drafted policy recommendations.',
        svgKey: 'g9-step-4',
        altText: 'Policy brief draft with highlighted action items and municipal authority responsibilities.'
      },
      {
        stepNumber: 5,
        title: 'Peer Legislative Hearing & Defense',
        actionLabel: 'Defend & Refine',
        instruction: 'Pairs role-play as a Municipal Standing Committee, grilling authors on fiscal costs, unintended consequences, and enforcement realities.',
        duration: '20 min',
        visualSummary: 'Two students presenting at podium answering questions from classmates seated as committee members.',
        svgKey: 'g9-step-5',
        altText: 'Student defending policy proposal at podium before classmates acting as municipal standing committee.'
      }
    ],
    materials: [
      { name: 'Policy Brief 2-Page Template & Rubric', iconType: 'paper', lowResourceSubstitute: 'Standard A4 ruled sheets with section headings' },
      { name: 'Local Municipal Data & News Dossiers', iconType: 'chart' },
      { name: 'Highlighter pens (Blue = Data, Orange = Counter-argument)', iconType: 'pencil' }
    ],
    evidence: {
      title: 'Formal 2-Page Evidence Policy Brief',
      artifactType: 'policy-brief',
      description: 'An executive-ready policy memorandum featuring an executive summary, empirical graphs, stakeholder trade-off analysis, and SMART policy mandates.',
      observableIndicators: [
        'Articulates a clear, non-partisan thesis supported by cited statistical data',
        'Explicitly analyzes legitimate counter-arguments and realistic trade-offs',
        'Formulates recommendations adhering to Indian local governance jurisdictions (74th Amendment)',
        'Demonstrates conciseness and disciplined analytical vocabulary'
      ],
      svgKey: 'g9-evidence',
      altText: 'Formal 2-page policy document layout with graphs, stakeholder analysis table, and municipal recommendations.'
    },
    inclusion: {
      title: 'Multilingual Submission & Oral Brief Options',
      description: 'Permit submission of the brief in regional state languages (Hindi, Kannada, Bengali, etc.), and allow an oral audio brief or slide deck for students with motor/writing differences.',
      type: 'language',
      actionableTip: 'Provide sentence starters for complex administrative discourse: "While opponents cite economic disruption, empirical data shows..."'
    }
  }
};

// ================= CURRICULUM PROCESS FLOW NODES =================
export const curriculumProcessFlowNodes: ProcessStepNode[] = [
  {
    id: 'step-subject-knowledge',
    number: 1,
    label: 'Subject Knowledge',
    subLabel: 'Disciplinary Core',
    color: '#0F2A43',
    description: 'Foundational disciplinary concepts, principles, formulas, and vocabulary grounded in CBSE/NCERT curriculum standards.',
    classroomExample: 'Properties of water, density, porosity, volumetric arithmetic (mL and Litres).',
    teacherAction: 'Introduce essential disciplinary facts through guided inquiry and real-world hooks.'
  },
  {
    id: 'step-competency',
    number: 2,
    label: 'Competency',
    subLabel: 'Broad Capability',
    color: '#1E3A8A',
    description: 'Broad, overarching capability that integrates knowledge, attitudes, and habits of mind specified by NCF 2023.',
    classroomExample: 'Scientific inquiry and ecological stewardship of local water resources.',
    teacherAction: 'Frame the overarching learning goal and real-life significance for students.'
  },
  {
    id: 'step-skill',
    number: 3,
    label: 'Observable Skill',
    subLabel: 'Demonstrable Action',
    color: '#2563EB',
    description: 'Specific, observable student performance that can be directly seen, measured, and coached in the classroom.',
    classroomExample: 'Measuring tap drip rates, converting units, and assembling a granular filter column.',
    teacherAction: 'Clarify explicit success criteria so students know what proficient performance looks like.'
  },
  {
    id: 'step-pedagogy',
    number: 4,
    label: 'Pedagogy Method',
    subLabel: 'Teacher Strategy',
    color: '#2B8C87',
    description: 'Active learning methodology (experiential, inquiry, problem-based, collaborative) chosen to cultivate the target skill.',
    classroomExample: 'Hands-on design-and-test challenge paired with mathematical data logging.',
    teacherAction: 'Structure the classroom environment, provide scaffolding, and set investigative safety parameters.'
  },
  {
    id: 'step-activity',
    number: 5,
    label: 'Classroom Activity',
    subLabel: 'Student Task',
    color: '#0D9488',
    description: 'Concrete, staged classroom investigation or project that students actively execute.',
    classroomExample: 'School Tap Water Audit and DIY Inverted Bottle Gravity Filtration Challenge.',
    teacherAction: 'Facilitate pair/group collaboration and ask formative inquiry prompts throughout.'
  },
  {
    id: 'step-output',
    number: 6,
    label: 'Student Output',
    subLabel: 'Tangible Artifact',
    color: '#D97706',
    description: 'Physical or digital artifact created by students demonstrating their understanding and application.',
    classroomExample: 'Working filter column, water-loss calculations, and before/after turbidity chart.',
    teacherAction: 'Ensure all students have equitable access to materials and clear artifact templates.'
  },
  {
    id: 'step-evidence',
    number: 7,
    label: 'Observable Evidence',
    subLabel: 'Triangulated Proof',
    color: '#E7853C',
    description: 'Concrete proof of learning gathered across Knowledge, Performance, and Reflection dimensions.',
    classroomExample: 'Teacher observation notes of testing procedure + written math conversions + lab report.',
    teacherAction: 'Collect low-paperwork formative evidence during class rather than relying solely on post-unit exams.'
  },
  {
    id: 'step-assessment',
    number: 8,
    label: 'Assessment Rubric',
    subLabel: '4-Level Progression',
    color: '#DC2626',
    description: 'Criterion-referenced rubric measuring student autonomy and transfer across Emerging, Developing, Proficient, and Transfer.',
    classroomExample: 'Rubric evaluating accuracy of rate conversions, layer scientific logic, and safety precautions.',
    teacherAction: 'Share rubric criteria with students beforehand to promote self-monitoring.'
  },
  {
    id: 'step-reflection',
    number: 9,
    label: 'Student Reflection',
    subLabel: 'Metacognitive Wrap',
    color: '#7C3AED',
    description: 'Metacognitive synthesis prompting students to consider how their thinking evolved and how they can apply insights beyond school.',
    classroomExample: '"What simple change in our school would save the largest volume of clean water every month?"',
    teacherAction: 'Facilitate a 5-minute exit ticket or closing circle to consolidate learning insights.'
  }
];

// ================= TEACHER TOOLKIT VISUAL GUIDES =================
export const teacherGuideVisuals: TeacherGuideVisual[] = [
  {
    id: 'guide-rubric',
    title: 'How to Use a 4-Level Skill Rubric',
    category: 'rubric',
    summary: 'Evaluate student autonomy, precision, and context transfer without grading subjective personality traits.',
    steps: [
      { number: 1, title: 'Share Criteria Upfront', description: 'Display the rubric on the board or student sheet before work starts so targets are fully transparent.', keyTip: 'Use student-friendly language.' },
      { number: 2, title: 'Look for Observable Actions', description: 'Base your assessment strictly on verifiable actions and outputs, not perceived effort or neatness.', keyTip: 'Ask: "What did the student actually do?"' },
      { number: 3, title: 'Identify Current Progression Level', description: 'Differentiate between Emerging (needs cues), Developing (partial independence), Proficient (consistent autonomy), and Transfer (applies to novel problems).', keyTip: 'Celebrate growth between levels.' },
      { number: 4, title: 'Provide Actionable Next-Step Feedback', description: 'Give one specific sentence indicating what single adjustment will elevate their performance to the next level.', keyTip: 'Focus on the immediate next rung.' }
    ],
    pedagogicalRationale: 'Criterion-referenced rubrics shift student focus from competitive marks to mastery of demonstrable capabilities.'
  },
  {
    id: 'guide-evidence',
    title: 'How to Collect Triangulated Learning Evidence',
    category: 'evidence',
    summary: 'Combine conversations, observations, and student products to capture the complete learning picture.',
    steps: [
      { number: 1, title: 'Observation (During Task)', description: 'Carry a clipboard or roster card. Jot down quick tally checks on collaborative roles and tool handling.', keyTip: 'Keep notes brief (2 words per student).' },
      { number: 2, title: 'Conversation (Oral Reasoning)', description: 'Ask one clarifying question during group work: "Why did you choose that sequence?" Listen for conceptual understanding.', keyTip: 'Let the student explain before correcting.' },
      { number: 3, title: 'Product (Tangible Output)', description: 'Review the completed poster, lab sheet, or code canvas against established accuracy benchmarks.', keyTip: 'Check reasoning, not just final answers.' }
    ],
    pedagogicalRationale: 'Triangulation prevents pen-and-paper bias and ensures multi-modal learners have diverse pathways to demonstrate competence.'
  },
  {
    id: 'guide-facilitation',
    title: 'How to Facilitate a Collaborative Group Task',
    category: 'facilitation',
    summary: 'Structure group work so every student holds an authentic, indispensable role rather than one student doing all the work.',
    steps: [
      { number: 1, title: 'Assign Complementary Roles', description: 'Designate specific roles: Scribe, Timekeeper/Material Lead, Skeptic/Auditor, and Spokesperson.', keyTip: 'Rotate roles across units.' },
      { number: 2, title: 'Establish Interdependence', description: 'Design tasks where the final output cannot be completed without contributions from every role.', keyTip: 'One sheet per team during brainstorm.' },
      { number: 3, title: 'Intervene Minimally', description: 'Allow teams to grapple with friction. Prompt with questions rather than giving immediate answers.', keyTip: 'Ask: "What does your team think?"' }
    ],
    pedagogicalRationale: 'Structured collaboration builds social-emotional resilience and mirrors real-world interdisciplinary problem-solving.'
  },
  {
    id: 'guide-inquiry',
    title: 'How to Run an Active Inquiry Cycle',
    category: 'inquiry',
    summary: 'Guide learners through Notice → Wonder → Investigate → Conclude rather than front-loading all answers.',
    steps: [
      { number: 1, title: 'Notice (Hook Phenomenon)', description: 'Present a curious artifact, video clip, or real mystery without naming the concept yet.', keyTip: 'E.g. show a muddy puddle and clean water.' },
      { number: 2, title: 'Wonder (Student Questioning)', description: 'Collect student questions on the board. Group questions into testable vs informational.', keyTip: 'Honor every genuine question.' },
      { number: 3, title: 'Investigate (Data Collection)', description: 'Students test hypotheses through structured experiments, surveys, or field walks.', keyTip: 'Keep variables controlled.' },
      { number: 4, title: 'Conclude & Reflect', description: 'Synthesize findings and connect back to the core disciplinary concept.', keyTip: 'Ask: "What would we do differently?"' }
    ],
    pedagogicalRationale: 'Inquiry anchors abstract concepts in visceral curiosity, dramatically improving long-term retention and scientific reasoning.'
  },
  {
    id: 'guide-scaffold',
    title: 'How to Scaffold for Diverse Learners',
    category: 'scaffold',
    summary: 'Provide temporary, structured supports that gradually fade as student autonomy strengthens.',
    steps: [
      { number: 1, title: 'Visual & Bilingual Sentence Starters', description: 'Supply pre-printed sentence frames (e.g. "Because X happened, Y changed by Z").', keyTip: 'Post on desks or board.' },
      { number: 2, title: 'Graphic Organizers', description: 'Provide structured boxes, flowcharts, or icon-assisted tally grids to organize thoughts.', keyTip: 'Reduces cognitive load on formatting.' },
      { number: 3, title: 'Chunked Step Checklists', description: 'Break 40-minute tasks into three 10-minute micro-goals with visual checkboxes.', keyTip: 'Celebrates incremental wins.' },
      { number: 4, title: 'Gradual Release of Responsibility', description: 'Move systematically: I Do (model), We Do (guided practice), You Do Together (pairs), You Do Alone.', keyTip: 'Never jump straight to solo tests.' }
    ],
    pedagogicalRationale: 'Universal Design for Learning (UDL) principles ensure high expectations remain accessible to every learner.'
  },
  {
    id: 'guide-extension',
    title: 'How to Extend Tasks for Advanced Learners',
    category: 'extension',
    summary: 'Deepen conceptual challenge through complexity, transfer, and authentic constraints—not just by giving more busywork.',
    steps: [
      { number: 1, title: 'Add a Real-World Constraint', description: 'Introduce a budget cap, time crunch, or low-resource restriction (e.g. "Build it using 50% fewer materials").', keyTip: 'Forces creative optimization.' },
      { number: 2, title: 'Prompt Cross-Context Transfer', description: 'Ask students to adapt their solution to an unfamiliar environment (e.g. "How would this filter work in a coastal saline village?").', keyTip: 'Tests true conceptual grasp.' },
      { number: 3, title: 'Peer Mentorship & Rubric Co-Creation', description: 'Invite quick finishers to audit peer drafts or assist in refining assessment rubrics.', keyTip: 'Deepens metacognition.' }
    ],
    pedagogicalRationale: 'Effective extension stimulates divergent thinking and prevents boredom without isolating advanced students from peers.'
  },
  {
    id: 'guide-ai-verification',
    title: 'How to Verify AI-Generated Information',
    category: 'ai-verification',
    summary: 'Teach students to critically interrogate automated outputs using the Triangulation Verification Protocol.',
    steps: [
      { number: 1, title: 'Audit the Prompt & Assumptions', description: 'Examine what instructions were fed into the model. Did the query introduce leading bias or ungrounded claims?', keyTip: 'Check the question first.' },
      { number: 2, title: 'Identify Specific Fact Claims', description: 'Highlight dates, statistics, quotes, and legal claims. Never accept high-confidence language as proof of truth.', keyTip: 'Flag every number and named entity.' },
      { number: 3, title: 'Triangulate with Two Authoritative Sources', description: 'Verify each highlighted claim against official government portals, peer-reviewed textbooks, or census archives.', keyTip: 'Require 2 independent external citations.' },
      { number: 4, title: 'Document Hallucinations & Biases', description: 'Keep an explicit log of AI errors, omissions, or demographic skews encountered during research.', keyTip: 'Treat AI as an eager intern, not an oracle.' }
    ],
    pedagogicalRationale: 'Digital literacy in the AI era demands proactive epistemic skepticism and rigorous source verification habits.'
  },
  {
    id: 'guide-peer-feedback',
    title: 'How to Facilitate Constructive Peer Feedback',
    category: 'peer-feedback',
    summary: 'Use the TAG method to ensure peer critique is kind, specific, and actionable rather than vague praise or harsh judgment.',
    steps: [
      { number: 1, title: 'T - Tell Something You Like', description: 'Begin with an objective commendation rooted in rubric criteria: "I noticed your data table clearly labeled units."', keyTip: 'Be specific, not generic.' },
      { number: 2, title: 'A - Ask a Thoughtful Question', description: 'Pose a clarifying inquiry: "Where did you find the evidence for your second claim?"', keyTip: 'Questions invite dialogue.' },
      { number: 3, title: 'G - Give an Actionable Suggestion', description: 'Provide one concrete improvement: "If you add arrows between steps 2 and 3, your diagram flow will be easier to follow."', keyTip: 'Focus on what can be changed now.' }
    ],
    pedagogicalRationale: 'Constructive peer review builds academic empathy, communication clarity, and collaborative accountability.'
  }
];

// ================= VISUAL GLOSSARY =================
export const visualGlossaryData: VisualGlossaryItem[] = [
  {
    term: 'Skill',
    hindiTerm: 'कौशल (Kaushal)',
    category: 'curriculum',
    definition: 'A demonstrable, observable ability to apply knowledge and execute actions with increasing autonomy, fluency, and precision.',
    concreteExample: 'Accurately tallying environmental observations during a field walk, or filtering sediment using layered earth media.',
    commonMisconception: 'Mistaking rote memorization of textbook facts for demonstrated procedural skill.'
  },
  {
    term: 'Competency',
    hindiTerm: 'दक्षता (Dakshta)',
    category: 'curriculum',
    definition: 'An integrated cluster of knowledge, skills, values, and dispositions that enables effective, ethical performance in real-world contexts (NCF 2023).',
    concreteExample: 'Designing an ethical, evidence-based civic policy brief that balances competing stakeholder rights.',
    commonMisconception: 'Treating competency as a standalone test score rather than a holistic developmental capability.'
  },
  {
    term: 'Learning Outcome',
    hindiTerm: 'सीखने का प्रतिफल (Sikshan Pratiphal)',
    category: 'curriculum',
    definition: 'A specific, measurable statement detailing what a learner should know, understand, and be able to do by the end of an instructional cycle.',
    concreteExample: 'Students calculate average flow rates from leaking taps and extrapolate monthly wastage in litres.',
    commonMisconception: 'Writing vague aspirations like "appreciate water" instead of verifiable actions.'
  },
  {
    term: 'Pedagogy',
    hindiTerm: 'शिक्षाशास्त्र (Shikshashastra)',
    category: 'pedagogy',
    definition: 'The deliberate art, science, and methodology of teaching that shapes how learning experiences are structured, facilitated, and experienced.',
    concreteExample: 'Using the "5 Whys" root-cause inquiry method and peer gallery walks instead of continuous lectures.',
    commonMisconception: 'Assuming pedagogy is merely textbook coverage rather than student-centred instructional design.'
  },
  {
    term: 'Classroom Activity',
    hindiTerm: 'कक्षा गतिविधि (Kaksha Gatividhi)',
    category: 'pedagogy',
    definition: 'A structured, purposeful task undertaken by students—individually, in pairs, or in groups—to construct meaning and practice skills.',
    concreteExample: 'The Neighbourhood Data Walk where student pairs systematically record campus tree and vehicle counts.',
    commonMisconception: 'Viewing activity as a recreational break from learning rather than the primary vehicle for skill acquisition.'
  },
  {
    term: 'Student Output',
    hindiTerm: 'छात्र उत्पाद (Chhatra Utpaad)',
    category: 'assessment',
    definition: 'The tangible, observable product or performance created by learners that embodies their conceptual understanding.',
    concreteExample: 'A completed 4-quadrant AI Ethics Canvas, a working filter bottle prototype, or a 2-page Policy Brief.',
    commonMisconception: 'Assuming student output must always be a written test sheet rather than visual models, reports, or demonstrations.'
  },
  {
    term: 'Observable Evidence',
    hindiTerm: 'दृश्यमान प्रमाण (Drishyamaad Pramaan)',
    category: 'assessment',
    definition: 'Concrete, verifiable artifacts, oral explanations, and procedural behaviors gathered to evaluate student growth over time.',
    concreteExample: 'A teacher’s checklist observing systematic layer packing + student math notes on flow rates.',
    commonMisconception: 'Relying exclusively on single-sitting summative exam marks as sole proof of competence.'
  },
  {
    term: 'Assessment Rubric',
    hindiTerm: 'मूल्यांकन रूब्रिक (Mulyankan Rubric)',
    category: 'assessment',
    definition: 'A scored matrix defining explicit qualitative criteria across progressive levels of autonomy: Emerging, Developing, Proficient, and Transfer.',
    concreteExample: 'A 4-tier rubric measuring whether an AI design identifies realistic edge cases and specifies human safeguards.',
    commonMisconception: 'Believing rubrics are only for final grades rather than self-monitoring and feedback tools.'
  },
  {
    term: 'Reflection',
    hindiTerm: 'आत्म-चिंतन (Aatma-Chintan)',
    category: 'pedagogy',
    definition: 'The conscious, metacognitive process of examining one’s own thinking, decisions, surprises, and future applications.',
    concreteExample: '"How did interviewing the school custodian change what I initially assumed about littering in our canteen?"',
    commonMisconception: 'Treating reflection as optional "extra time" filler rather than the essential consolidator of long-term learning.'
  }
];
