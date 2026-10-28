# Grade 9 Artificial Intelligence: Ethics, Privacy & Algorithmic Bias
## Task-Based Learning (TBL) Competency Decomposition

**Curricular Subject:** Artificial Intelligence / Skill Subject 417 (Secondary Stage, Grade 9 - Foundation Depth)  
**Curriculum Documents:** CBSE Class 9 AI Curriculum (Subject Code 417: Unit 1 *Introduction to AI*, Unit 2 *AI Project Cycle*, Unit 3 *Neural Networks & Ethics*); NCF-SE 2023 Secondary Stage Computational & Ethical Competencies C-7.1, C-7.2.  
**Focus:** Ethical discernment, algorithmic bias audits, data rights under India's Digital Personal Data Protection Act 2023, and accountability in high-stakes automated decisions.

---

## 1. Competency Statement

> *"The learner conducts rigorous ethical audits of AI systems to detect algorithmic bias and historical dataset skew, evaluates data privacy risks, consent architectures, and dark patterns under the Digital Personal Data Protection Act (DPDPA 2023), and formulates Explainable AI (XAI) frameworks ensuring human agency, transparency, and accountability across automated decision systems."*

### Key Curricular References & Standards:
- **CBSE AI Curriculum Class 9 (Code 417):** Unit 1 (*AI Ethics, Inclusivity, and Bias*), Unit 2 (*AI Project Cycle: Scoping, Acquisition, Exploration, Modeling, Evaluation*).
- **NCF-SE 2023:** Secondary Stage AI Ethics C-7.1, C-7.2.
- **UNESCO Recommendation on the Ethics of Artificial Intelligence:** Core Principles 1–4 (Safety, Privacy, Fairness, Transparency).

---

## 2. Sub-Competencies Breakdown

- **C1: Algorithmic Bias Detection & Mitigation:** Audit recruitment, facial verification, and credit rating machine learning models for demographic and gender representation disparities; calculate false positive and false negative equity rates.
- **C2: Data Privacy, Surveillance & Regulatory Frameworks:** Analyze user tracking, biometric databases, camera surveillance, and consent fatigue; evaluate compliance with India's DPDPA 2023 and the landmark Puttaswamy Right to Privacy judgment.
- **C3: Dark Patterns & Autonomous Manipulation:** Dissect digital behavioral nudges, deceptive interface design (confirm-shaming, forced continuity, disguised ads), and algorithmic addiction mechanics in teenage social media feeds.
- **C4: Explainable AI (XAI) & Human-in-the-Loop Governance:** Construct transparency cards for AI models; formulate policy mechanisms where high-stakes judicial, educational, or medical AI recommendations require mandatory human oversight.

---

## 3. Discrete Task Decomposition

### Sub-Competency C1: Algorithmic Bias Detection & Mitigation

#### Task ID: `AI-9-BIAS-1.1`
- **Title:** Audit a simulated automated CV/Resume recruitment screener for gender and geographical bias.
- **Time Estimate:** 35 min
- **Resource Level:** Low (dataset of 30 mock student job applicant resumes with scoring labels)
- **Skill Type:** Auditing & Critical Data Analysis
- **Assessment Mode:** Written Audit Report & Disparity Matrix
- **Track Alignment:** Track B (CBSE Subject 417 Elective)
- **Success Criteria:**
  - Evaluates scores assigned by an automated keyword-matching screener.
  - Detects that male candidate resumes receive 28% higher interview invitation rates despite identical technical qualification scores.
  - Identifies proxy bias: The algorithm penalized resumes containing words like "women's sports captain" or maternity leave gaps.
  - Proposes 3 concrete debiasing interventions: masking gender/name, balancing historical training corpora, and auditing output parity.
- **Source Citation:** CBSE Class 9 AI Curriculum, Unit 1: Ethics in AI, pp. 18–22; NCF-SE C-7.2.
- **Scaffold Support:** Disparity ratio worksheet: $\text{Parity Metric} = \frac{\text{Selection Rate}_{\text{Group A}}}{\text{Selection Rate}_{\text{Group B}}}$.
- **Extension Challenge:** "How does Amazon's scrapped AI recruiting tool serve as a landmark case study of historical training data bias?"
- **Multilingual Terms:**
  - Hindi: एल्गोरिदमिक पूर्वाग्रह (Algorithmic Poorvaagrah - Algorithmic Bias), ऐतिहासिक डेटा (Aitihaasik Data - Historical Data)
  - Tamil: அல்காரிதமிக் சார்பு (Algorithmic Saarbu)

#### Task ID: `AI-9-BIAS-1.2`
- **Title:** Evaluate facial recognition performance disparities across lighting conditions and Fitzpatrick skin tones.
- **Time Estimate:** 30 min
- **Resource Level:** Low (case study dossiers on commercial facial verification error rates)
- **Skill Type:** Quantitative Disparity Analysis
- **Assessment Mode:** Written Evaluation & Debate
- **Track Alignment:** Track B
- **Success Criteria:**
  - Analyzes research data (e.g., Joy Buolamwini's Gender Shades study).
  - Documents that error rates for darker-skinned females exceeded 34% compared to under 1% for lighter-skinned males.
  - Explains technical causes: Under-representation in benchmark datasets (ImageNet, LFW) and camera exposure tuning biased toward lighter skin.
  - Formulates a policy brief on risks of using uncalibrated facial recognition in Indian school attendance and policing.
- **Source Citation:** CBSE Class 9 AI Curriculum, Unit 1, pp. 24–26; Joy Buolamwini & Timnit Gebru (Gender Shades).
- **Scaffold Support:** Comparison bar chart showing error rates across demographic cohorts.
- **Extension Challenge:** "Design a diverse verification benchmark dataset representative of all 28 Indian states."
- **Multilingual Terms:**
  - Hindi: चेहरा पहचान प्रणाली (Chehra Pehchaan Pranalee - Facial Recognition), त्रुटि दर (Truti Dar - Error Rate)
  - Kannada: ಮುಖ ಗುರುತಿಸುವಿಕೆ (Mukha Gurutisuvike)

---

### Sub-Competency C2: Data Privacy, Surveillance & Regulatory Frameworks

#### Task ID: `AI-9-PRIV-2.1`
- **Title:** Map personal data trails and audit a smartphone mobile app under the Digital Personal Data Protection Act (DPDPA 2023).
- **Time Estimate:** 35 min
- **Resource Level:** Low (privacy policy excerpt from a popular social media app, worksheet)
- **Skill Type:** Legal & Technical Privacy Analysis
- **Assessment Mode:** Privacy Audit Matrix
- **Track Alignment:** Track B
- **Success Criteria:**
  - Maps 6 categories of extracted telemetry: GPS location, microphone access, contacts, browsing history, device ID, biometric face geometry.
  - Audits app terms against DPDPA 2023: Identifies lack of verifiable parental consent for minors under age 18.
  - Distinguishes between Data Principal (the citizen) and Data Fiduciary (the corporation).
- **Source Citation:** India DPDPA 2023, Sections 6 & 9 (Obligations regarding children); CBSE Class 9 AI Code 417.
- **Scaffold Support:** DPDPA 2023 checklist template highlighting user consent requirements.
- **Extension Challenge:** "Evaluate the Supreme Court's K.S. Puttaswamy judgment (2017) affirming privacy as a fundamental right under Article 21."
- **Multilingual Terms:**
  - Hindi: डेटा गोपनीयता (Data Gopaneeyata - Data Privacy), डेटा न्यासी (Data Nyaasi - Data Fiduciary), डिजिटल व्यक्तिगत डेटा संरक्षण (DPDPA)
  - Telugu: డేటా గోప్యత (Data Gopyatha)

---

### Sub-Competency C3: Dark Patterns & Autonomous Manipulation

#### Task ID: `AI-9-DARK-3.1`
- **Title:** Identify and redesign 4 commercial user interfaces employing deceptive Dark Patterns.
- **Time Estimate:** 35 min
- **Resource Level:** Low (printed screenshots of e-commerce checkout flows and gaming subscriptions)
- **Skill Type:** UX Analysis & Consumer Protection
- **Assessment Mode:** Redesign Wireframe & Written Critique
- **Track Alignment:** Track B
- **Success Criteria:**
  - Identifies 4 dark patterns: Confirm-shaming ("No, I hate saving money"), Hidden subscriptions (Roach Motel), False countdown timers, and Pre-ticked consent boxes.
  - Cites the Guidelines for Prevention and Regulation of Dark Patterns (2023) by India's Central Consumer Protection Authority (CCPA).
  - Sketched ethical alternative UI layouts prioritizing informed consumer choice.
- **Source Citation:** CCPA Guidelines for Prevention of Dark Patterns 2023; CBSE Class 9 AI Curriculum.
- **Scaffold Support:** Dark pattern taxonomic reference sheet with visual examples.
- **Extension Challenge:** "How do generative AI engines weaponize dark patterns through personalized conversational persuasion?"
- **Multilingual Terms:**
  - Hindi: डार्क पैटर्न (Dark Pattern), भ्रामक डिज़ाइन (Bhraamak Design - Deceptive Design), उपभोक्ता संरक्षण (Upbhokta Sanrakshan)
  - Marathi: ग्राहक संरक्षण (Grahak Sanrakshan)

---

### Sub-Competency C4: Explainable AI (XAI) & Human-in-the-Loop Governance

#### Task ID: `AI-9-XAI-4.1`
- **Title:** Draft an AI Model Card specifying training limits, intended use, and human-in-the-loop safeguards.
- **Time Estimate:** 35 min
- **Resource Level:** Low (Model Card template sheet)
- **Skill Type:** System Governance & Transparency Documentation
- **Assessment Mode:** Performance Task & Model Card
- **Track Alignment:** Track B
- **Success Criteria:**
  - Selects an AI system (e.g., automated student scholarship scoring or automated medical X-ray scanner).
  - Fills 5 essential Model Card sections: Model Details, Intended Use Cases, Out-of-Scope Misuses, Training Dataset Demographics, Evaluation Metrics across sub-groups.
  - Specifies mandatory human escalation protocol: Decisions below 95% confidence score must be reviewed by a human professional.
- **Source Citation:** Margaret Mitchell et al. (Model Cards for Model Reporting); CBSE AI Subject 417 Unit 1.
- **Scaffold Support:** Structured Model Card fill-in-the-blanks format.
- **Extension Challenge:** "Why is Explainability (XAI) considered legally necessary for automated administrative decisions under Article 14 (Equality before Law)?"
- **Multilingual Terms:**
  - Hindi: व्याख्या योग्य एआई (Vyaakhya Yogya AI - Explainable AI), मानव-निगरानी (Maanav-Nigraani - Human-in-the-Loop)
  - Malayalam: സുതാര്യമായ നിർമ്മിത ബുദ്ധി (Suthaaryamaaya Nirmitha Buddhi)
