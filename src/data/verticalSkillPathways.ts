import { VerticalSkillPathway } from '@/types';

export const verticalSkillPathways: VerticalSkillPathway[] = [
  {
    id: 'data-literacy',
    name: 'Data Literacy & Statistical Inquiry',
    domain: 'Data & Mathematical Sciences',
    description: 'The journey from sensory sorting of physical objects to multi-variate statistical modeling, data cleaning, and bias evaluation.',
    progressionOverview: 'Physical sensory grouping (Foundational) → Tabular frequency counts and bar pictograms (Preparatory) → Central tendencies and comparative charts (Middle) → Inferential statistics, correlation vs causation, and confusion matrix evaluation (Secondary).',
    stages: [
      {
        stage: 'Foundational',
        ageRange: 'Ages 3–8',
        grades: 'Balvatika – Grade 2',
        ncfCompetencyCode: 'NCF-FS C-2.4',
        sourceCitation: 'National Curriculum Framework for Foundational Stage (NCF-FS 2022), Section 4.2: Mathematical & Numeracy Development, Competency C-2.4 (Sorting and Classification).',
        whatStudentsLearn: 'Sorts concrete objects based on single observable physical attributes (color, size, shape, texture) and describes relative quantities ("more than", "fewer than").',
        whatChanges: 'Shift from unorganized sensory observation to purposeful single-attribute categorization using physical objects.',
        observableArtifact: 'Arrangement of classroom leaves or colored bottle caps into distinct physical clusters with verbal explanation of the sorting rule.',
        sampleBenchmark: 'Given 15 mixed buttons, groups them accurately by color and orally explains why an odd button belongs to a specific group.'
      },
      {
        stage: 'Preparatory',
        ageRange: 'Ages 8–11',
        grades: 'Grades 3–5',
        ncfCompetencyCode: 'NCF-SE C-3.2',
        sourceCitation: 'National Curriculum Framework for School Education (NCF-SE 2023), Part C, Section 3.2: Mathematics & Data Handling, Class 3–5 Learning Outcomes.',
        whatStudentsLearn: 'Collects first-hand categorical data through tallies, translates tallies into scaled pictographs and simple bar charts, and answers comparative questions.',
        whatChanges: 'Shift from concrete physical items to symbolic representations (tally marks, scaled grid bars) with uniform interval scales.',
        observableArtifact: 'A classroom "Favorite Reading Genre" frequency chart using 5-unit tally marks and an accompanying drawn bar graph.',
        sampleBenchmark: 'Interprets a pictograph where 1 tree icon represents 5 planted saplings and computes total trees across 4 school houses.'
      },
      {
        stage: 'Middle',
        ageRange: 'Ages 11–14',
        grades: 'Grades 6–8',
        ncfCompetencyCode: 'NCF-SE C-6.4',
        sourceCitation: 'NCF-SE 2023, Part C, Section 4.3: Middle Stage Mathematics & Science, Data Handling & Statistical Measures.',
        whatStudentsLearn: 'Organizes discrete data into frequency distribution tables; computes mean, median, mode, and range; and identifies how outliers distort central tendencies.',
        whatChanges: 'Shift from descriptive bar counts to quantitative statistical summarization and recognizing the sensitivity of the mean to extreme values.',
        observableArtifact: 'A spreadsheet or tabulated lab report recording 14 days of campus water meter readings with computed mean daily usage and outlier explanations.',
        sampleBenchmark: 'Given a set of daily temperatures with a sudden sensor error outlier, identifies why median temperature is a more robust summary than mean.'
      },
      {
        stage: 'Secondary',
        ageRange: 'Ages 14–18',
        grades: 'Grades 9–12',
        ncfCompetencyCode: 'NCF-SE C-9.3 / CBSE 417 Unit 2',
        sourceCitation: 'NCF-SE 2023, Part C, Section 5.1 & CBSE Curriculum for Secondary School (Skill Education) Subject Code 417: Artificial Intelligence, Unit 2 (Data Exploration).',
        whatStudentsLearn: 'Applies exploratory data analysis (EDA), visualizes correlations via scatter plots, cleans real-world messy datasets (missing values, normalization), and evaluates classification confusion matrices.',
        whatChanges: 'Shift from isolated descriptive summary to predictive statistical reasoning, multi-variate correlation vs causation, and auditing datasets for representation bias.',
        observableArtifact: 'A Jupyter / Python exploratory data analysis notebook analyzing local air quality index (AQI) readings with regression plots and missing-data imputation.',
        sampleBenchmark: 'Deconstructs a binary classification confusion matrix and calculates Precision, Recall, and F1-Score for an epidemic screening model.'
      }
    ]
  },
  {
    id: 'computational-thinking',
    name: 'Computational Thinking & Algorithmic Problem Solving',
    domain: 'Technology & Applied Sciences',
    description: 'The vertical progression of algorithmic decomposition, pattern abstraction, and automation from kinesthetic play to production software engineering.',
    progressionOverview: 'Sequential physical commands (Foundational) → Decomposition and repeating loops (Preparatory) → Standardized nested flowcharts and machine perception (Middle) → End-to-end algorithmic models and automated intelligence (Secondary).',
    stages: [
      {
        stage: 'Foundational',
        ageRange: 'Ages 3–8',
        grades: 'Balvatika – Grade 2',
        ncfCompetencyCode: 'NCF-FS C-1.3',
        sourceCitation: 'National Curriculum Framework for Foundational Stage (NCF-FS 2022), Section 4.1: Cognitive Development, Algorithmic Sequences in Play.',
        whatStudentsLearn: 'Follows and verbalizes multi-step sequential instructions (first, next, then, finally) in daily routines, dances, and games.',
        whatChanges: 'Shift from reactive impulse to deliberate anticipation of sequential order and consequence.',
        observableArtifact: 'A visual picture-card strip showing the correct chronological steps to plant a seed or wash hands.',
        sampleBenchmark: 'Physically guides a peer "robot" across a 3x3 classroom floor grid using only cardinal stepping commands.'
      },
      {
        stage: 'Preparatory',
        ageRange: 'Ages 8–11',
        grades: 'Grades 3–5',
        ncfCompetencyCode: 'NCF-SE C-4.1 / CBSE CT Track A',
        sourceCitation: 'CBSE Computational Thinking Framework for Classes 3–5 (Circular Acad-21/2024), 50 hrs/yr Embedded Mathematics Strand.',
        whatStudentsLearn: 'Decomposes complex everyday procedures into modular sub-tasks, identifies repeating patterns to formulate loops, and detects simple instruction errors ("debugging").',
        whatChanges: 'Shift from executing linear instructions to designing instructions with loop efficiency and systematic error diagnosis.',
        observableArtifact: 'An "Unplugged Algorithm" recipe card detailing an origami fold or rangoli pattern with explicit loop indicators ("Repeat 4 times").',
        sampleBenchmark: 'Traces a flawed set of directions on a maze grid, points out the exact incorrect step, and proposes the corrected instruction.'
      },
      {
        stage: 'Middle',
        ageRange: 'Ages 11–14',
        grades: 'Grades 6–8',
        ncfCompetencyCode: 'NCF-SE C-7.2 / CBSE CT&AI Strand 1',
        sourceCitation: 'CBSE CT & AI Curriculum Classes 6–8 (2026–27), Middle Stage Strand 1: Advanced CT Skills (40 hrs) & Strand 2: Machine Perception (20 hrs).',
        whatStudentsLearn: 'Constructs standardized flowcharts using ISO symbols (terminal, process, diamond decision, I/O) with nested conditionals; contrasts deterministic logic with machine perception.',
        whatChanges: 'Shift from informal step-by-step notes to formal system logic diagrams capable of resolving branching decision conditions.',
        observableArtifact: 'A validated multi-criteria school governance flowchart poster (e.g. library borrowing rules) with trace tables verifying edge-case tests.',
        sampleBenchmark: 'Accurately traces 4 varied user profiles through a nested decision flowchart without infinite loops or undefined pathways.'
      },
      {
        stage: 'Secondary',
        ageRange: 'Ages 14–18',
        grades: 'Grades 9–12',
        ncfCompetencyCode: 'NCF-SE C-10.1 / CBSE 417 AI Project Cycle',
        sourceCitation: 'CBSE Curriculum for Secondary School Subject Code 417 (Class IX–X), Part B: Subject Specific Skills, AI Project Cycle (Problem Scoping to Deployment).',
        whatStudentsLearn: 'Executes the 5-stage AI Project Cycle (Problem Scoping via 4Ws canvas, Data Acquisition, Data Exploration, Modeling, Evaluation); programs algorithms in Python.',
        whatChanges: 'Shift from conceptual diagramming to implementing functional programmatic systems that process real-world inputs and optimize evaluation metrics.',
        observableArtifact: 'A working Python repository with documented code, trained scikit-learn model, and 4Ws problem scoping canvas addressing a local community challenge.',
        sampleBenchmark: 'Programs a rule-or-model based classifier in Python, calculates baseline accuracy, and implements feature scaling to improve model performance.'
      }
    ]
  },
  {
    id: 'scientific-reasoning',
    name: 'Scientific Reasoning & Empirical Inquiry',
    domain: 'Natural Sciences & Environmental Studies',
    description: 'The developmental arc from sensory observation of the immediate environment to rigorous controlled experimentation and theoretical synthesis.',
    progressionOverview: 'Sensory observation & naming (Foundational) → Fair testing with single variable control (Preparatory) → Hypothesis falsification & quantitative error analysis (Middle) → Complex multi-variable empirical research and scientific modeling (Secondary).',
    stages: [
      {
        stage: 'Foundational',
        ageRange: 'Ages 3–8',
        grades: 'Balvatika – Grade 2',
        ncfCompetencyCode: 'NCF-FS C-3.1',
        sourceCitation: 'NCF-FS 2022, Section 4.3: Exploring the World Around Us, Sensory Observation and Inquiry.',
        whatStudentsLearn: 'Observes natural phenomena using multiple senses; records physical changes over time (shadows moving, seeds sprouting) through oral dialogue and drawings.',
        whatChanges: 'Shift from passive perception to guided intentional observation of cause-and-effect in nature.',
        observableArtifact: 'A daily illustrated classroom weather wall showing morning and afternoon sky conditions across one school week.',
        sampleBenchmark: 'Predicts whether common classroom objects (pencil, coin, leaf, eraser) will sink or float in a water bowl before testing.'
      },
      {
        stage: 'Preparatory',
        ageRange: 'Ages 8–11',
        grades: 'Grades 3–5',
        ncfCompetencyCode: 'NCF-SE C-5.1',
        sourceCitation: 'NCF-SE 2023, Part C, Section 3.3: Science & Environmental Education, Preparatory Stage Inquiry.',
        whatStudentsLearn: 'Conducts simple "fair tests" by holding one condition constant while altering another (e.g. plant growth with light vs darkness); measures with standard tools.',
        whatChanges: 'Shift from qualitative observation to recognizing the necessity of fair comparisons and controlled conditions.',
        observableArtifact: 'A comparative plant growth log measuring stem height in centimeters over 14 days under differing watering conditions.',
        sampleBenchmark: 'Explains why two plants in a sunlight experiment must receive the exact same soil volume and water amount to make the test valid.'
      },
      {
        stage: 'Middle',
        ageRange: 'Ages 11–14',
        grades: 'Grades 6–8',
        ncfCompetencyCode: 'NCF-SE C-8.2',
        sourceCitation: 'NCF-SE 2023, Part C, Section 4.4: Middle Stage Science, Experimental Methods and Quantitative Observations.',
        whatStudentsLearn: 'Formulates testable scientific hypotheses; designs investigations with independent, dependent, and control variables; identifies experimental errors.',
        whatChanges: 'Shift from empirical trial-and-error to systematic hypothesis testing, repeatable measurement protocols, and isolating sources of experimental uncertainty.',
        observableArtifact: 'A structured laboratory journal documenting an inquiry into food starch/protein testing or acid-base indicators with chemical color changes.',
        sampleBenchmark: 'Designs a controlled experiment to measure the rate of evaporation across different surface areas while maintaining constant ambient temperature.'
      },
      {
        stage: 'Secondary',
        ageRange: 'Ages 14–18',
        grades: 'Grades 9–12',
        ncfCompetencyCode: 'NCF-SE C-11.4',
        sourceCitation: 'NCF-SE 2023, Part C, Section 5.2: Secondary Stage Science (Physics, Chemistry, Biology), Empirical Methodology and Modeling.',
        whatStudentsLearn: 'Constructs mathematical and conceptual models of physical systems; analyzes experimental data with uncertainty intervals; evaluates scientific claims in media.',
        whatChanges: 'Shift from descriptive experimental logs to mathematical relationships (laws of motion, reaction kinetics) and peer-reviewed scientific argumentation.',
        observableArtifact: 'A comprehensive investigation report including calibration data, percentage error calculations, and theoretical alignment with chemical or physical laws.',
        sampleBenchmark: 'Calculates the experimental percentage yield in a chemical titration and isolates systematic calibration error from random human error.'
      }
    ]
  },
  {
    id: 'ethical-reasoning',
    name: 'Ethical Reasoning & Digital Citizenship',
    domain: 'Social Sciences & Digital Ethics',
    description: 'The moral and intellectual progression from sharing classroom toys to evaluating societal impacts of automated AI surveillance and democratic rights.',
    progressionOverview: 'Empathy, sharing & basic turn-taking (Foundational) → Fair play, cyber hygiene & community rules (Preparatory) → Algorithmic bias, privacy rights & digital footprint awareness (Middle) → Societal equity, AI safety regulation & ethical framework application (Secondary).',
    stages: [
      {
        stage: 'Foundational',
        ageRange: 'Ages 3–8',
        grades: 'Balvatika – Grade 2',
        ncfCompetencyCode: 'NCF-FS C-5.2',
        sourceCitation: 'NCF-FS 2022, Section 4.4: Socio-Emotional and Ethical Development, Empathy and Social Awareness.',
        whatStudentsLearn: 'Practices basic empathy, recognizes personal and others’ emotional states, and abides by shared classroom fairness rules (turn-taking, asking permission).',
        whatChanges: 'Shift from purely egocentric desires to reciprocal social awareness and cooperative sharing.',
        observableArtifact: 'Participates in a peer restorative circle to resolve a shared toy dispute without physical conflict.',
        sampleBenchmark: 'Verbalizes why taking another child’s drawing materials without asking causes distress and identifies an alternative polite request.'
      },
      {
        stage: 'Preparatory',
        ageRange: 'Ages 8–11',
        grades: 'Grades 3–5',
        ncfCompetencyCode: 'NCF-SE C-5.3',
        sourceCitation: 'NCF-SE 2023, Part C, Section 3.4: Social Science & Ethical Values, Digital Awareness and Community Respect.',
        whatStudentsLearn: 'Understands basic digital safety (password privacy, not sharing personal details online) and evaluates community fairness rules in playground games.',
        whatChanges: 'Shift from adult-enforced compliance to internalizing the concept of personal digital boundaries and collective safety rules.',
        observableArtifact: 'A student-created "Safe Digital Explorer Pledge" outlining 5 non-negotiable personal privacy guidelines for home internet use.',
        sampleBenchmark: 'Identifies why a tempting online game prompt asking for real home addresses and school names represents a security risk.'
      },
      {
        stage: 'Middle',
        ageRange: 'Ages 11–14',
        grades: 'Grades 6–8',
        ncfCompetencyCode: 'NCF-SE C-7.5 / CBSE Circular Acad-43/2024',
        sourceCitation: 'CBSE AI Skill Modules (Circular Acad-43/2024) & NCF-SE 2023 Section 4.5: Social Science & Technological Ethics.',
        whatStudentsLearn: 'Analyzes digital footprint permanence; evaluates algorithmic bias in voice/facial recognition; debates fairness in automated recommendation algorithms.',
        whatChanges: 'Shift from individual cyber hygiene to systemic scrutiny of how software algorithms amplify social stereotypes or historical inequalities.',
        observableArtifact: 'An "AI Bias Audit Sheet" analyzing three voice recognition applications for dialect accessibility across non-metro Indian accents.',
        sampleBenchmark: 'Debates the ethical trade-offs between automated facial recognition for school gate attendance versus student biometric privacy rights.'
      },
      {
        stage: 'Secondary',
        ageRange: 'Ages 14–18',
        grades: 'Grades 9–12',
        ncfCompetencyCode: 'NCF-SE C-10.4 / CBSE 417 Ethics Unit',
        sourceCitation: 'CBSE Class 9–10 Subject 417: AI Curriculum, Unit 1: Introduction to AI (AI Ethics, SDGs & Data Privacy Regulations).',
        whatStudentsLearn: 'Evaluates legal and philosophical frameworks for AI safety, intellectual property, deepfake identification, and the digital divide in developing economies.',
        whatChanges: 'Shift from awareness of algorithmic bias to applying formal ethical frameworks (utilitarianism, rights-based ethics) and legal privacy guidelines.',
        observableArtifact: 'A comprehensive Ethical Impact Assessment (EIA) for an automated healthcare diagnosis proposal, detailing mitigation of historical dataset biases.',
        sampleBenchmark: 'Constructs an argument referencing national digital personal data protection principles to critique an invasive employer monitoring tool.'
      }
    ]
  }
];
