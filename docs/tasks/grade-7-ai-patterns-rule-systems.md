# Grade 7 Artificial Intelligence: Pattern Recognition & Rule-Based Systems
## Task-Based Learning (TBL) Competency Decomposition

**Curricular Subject:** Artificial Intelligence / Skill Education (Middle Stage, Grade 7 - Core Cross-Disciplinary)  
**Curriculum Documents:** CBSE Class 7 AI Skill Curriculum (Unit 1: Pattern Recognition & Decomposition; Unit 2: Rule-Based Systems vs Machine Learning; Unit 3: Introduction to Natural Language Processing); NCF-SE 2023 Middle Stage Vocational Goals C-7.1, C-7.2.  
**Focus:** Developing computational abstractions: Extracting mathematical patterns, designing expert IF-THEN knowledge bases, decomposing text into tokens, and analyzing rule limits.

---

## 1. Competency Statement

> *"The learner decomposes complex problems into recurring patterns, designs rule-based expert systems using nested conditional logic and truth tables, tokenizes and extracts linguistic features from Indian language sentences, and evaluates the limitations of rigid rule systems when confronting ambiguous human language and computer vision inputs."*

### Key Curricular References & Standards:
- **CBSE AI Skill Curriculum Grade 7:** Module 1 (*Pattern Recognition and Decomposition*), Module 2 (*Rule-Based AI Architecture*), Module 3 (*Natural Language Foundations*).
- **NCF-SE 2023:** Middle Stage Computational Thinking & AI C-7.1, C-7.2.
- **UNESCO AI Competency Framework:** Aspect 2 (AI Techniques), Aspect 3 (Ethical System Design).

---

## 2. Sub-Competencies Breakdown

- **C1: Algorithmic Pattern Recognition:** Detect mathematical, sequential, and visual invariants in data streams; decompose multi-step problems into modular reusable functions.
- **C2: Engineering Rule-Based Expert Systems:** Construct multi-condition IF-THEN knowledge graphs (e.g., medical triage assistant, crop disease diagnostician) with deterministic outputs.
- **C3: Natural Language Tokenization & Syntax:** Deconstruct sentences into word tokens, filter stopwords, identify parts-of-speech tags, and build a bag-of-words representation for sentiment analysis.
- **C4: System Vulnerability & Failure Edge Cases:** Probe how rule-based systems break when encountering sarcasm, slang, rare spellings, or visual occlusions; articulate the need for probabilistic machine learning.

---

## 3. Discrete Task Decomposition

### Sub-Competency C1: Algorithmic Pattern Recognition

#### Task ID: `AI-7-PATT-1.1`
- **Title:** Identify numerical and geometric Fibonacci-type progression patterns in nature.
- **Time Estimate:** 30 min
- **Resource Level:** Low (pinecone, sunflower center photo, pineapple or worksheet)
- **Skill Type:** Pattern Recognition & Mathematical Induction
- **Assessment Mode:** Performance Task & Pattern Record
- **Track Alignment:** Track B (Optional Skill Module) / Track A (Embedded)
- **Success Criteria:**
  - Counts spiral turns clockwise and counter-clockwise on a pinecone or sunflower center.
  - Documents sequence: $1, 1, 2, 3, 5, 8, 13, 21 \dots$ where $F_n = F_{n-1} + F_{n-2}$.
  - Explains how computer algorithms use sequence recurrence relations to generate predictive models.
- **Source Citation:** CBSE Class 7 AI Curriculum, Unit 1, pp. 10–14.
- **Scaffold Support:** Number chart showing Fibonacci spiral tile growth ($1 \times 1, 2 \times 2, 3 \times 3, 5 \times 5$).
- **Extension Challenge:** "Calculate ratio between consecutive Fibonacci numbers ($\frac{13}{8}, \frac{21}{13}, \frac{34}{21}$) and relate to the Golden Ratio $\phi \approx 1.618$."
- **Multilingual Terms:**
  - Hindi: पैटर्न पहचान (Pattern Pehchaan), अनुक्रम (Anukram - Sequence), फिबोनाची अनुक्रम (Fibonacci Sequence)
  - Tamil: முறைமை அங்கீகாரம் (Muraimai Angikaram)

---

### Sub-Competency C2: Engineering Rule-Based Expert Systems

#### Task ID: `AI-7-RULE-2.1`
- **Title:** Design a paper-based 'Crop Doctor' expert system using nested IF-THEN diagnostic rules.
- **Time Estimate:** 35 min
- **Resource Level:** Low (large chart paper, colored sticky notes)
- **Skill Type:** Knowledge Engineering & Rule Modeling
- **Assessment Mode:** Performance Task & Peer Case Test
- **Track Alignment:** Track B
- **Success Criteria:**
  - Builds an expert system for diagnosing 4 common crop leaf diseases (e.g., Leaf Rust, Powdery Mildew, Nitrogen Deficiency, Pest Aphids).
  - Writes formal conditional rules: e.g., `IF Leaf_Color == Yellow AND Veins == Green THEN Diagnosis = Iron_Chlorosis`.
  - Tests rule base with 4 mock farmer symptom scenarios; verifies correct prescription.
- **Source Citation:** CBSE Class 7 AI Curriculum, Unit 2: Rule-Based AI, pp. 24–28.
- **Scaffold Support:** Decision tree template with symptom category slots (Color, Spot Shape, Texture).
- **Extension Challenge:** "What happens if a farmer presents symptoms that match TWO contradictory rules simultaneously? How do inference engines resolve rule conflicts?"
- **Multilingual Terms:**
  - Hindi: नियम-आधारित प्रणाली (Niyam-Aadhaarit Pranalee), विशेषज्ञ प्रणाली (Visheshagya Pranalee - Expert System)
  - Telugu: నియమ ఆధారిత వ్యవస్థ (Niyama Aadhaarita Vyavastha)

---

### Sub-Competency C3: Natural Language Tokenization & Syntax

#### Task ID: `AI-7-NLP-3.1`
- **Title:** Perform manual text preprocessing: Tokenization, stopword removal, and sentiment scoring.
- **Time Estimate:** 30 min
- **Resource Level:** Low (worksheet with 3 customer reviews of a solar lamp)
- **Skill Type:** Natural Language Processing & Feature Extraction
- **Assessment Mode:** Written Response & Vocabulary Table
- **Track Alignment:** Track B
- **Success Criteria:**
  - Splits sentences into individual word tokens, removing punctuation.
  - Eliminates common grammatical stopwords ('the', 'is', 'at', 'and', 'के', 'का', 'है').
  - Calculates a sentiment valence score by tallying positive emotion words (+1) vs negative emotion words (-1).
- **Source Citation:** CBSE Class 7 AI Curriculum, Unit 3: Introduction to NLP, pp. 36–41.
- **Scaffold Support:** Pre-compiled stopword dictionary list in English and Hindi.
- **Extension Challenge:** "Demonstrate why a pure bag-of-words model fails on the sentence 'This lamp is not good at all' if negation words are ignored."
- **Multilingual Terms:**
  - Hindi: टोकनीकरण (Tokenikaran), विराम शब्द (Viram Shabd - Stopwords), भावना विश्लेषण (Bhaavana Vishleshan - Sentiment Analysis)
  - Bengali: শব্দ বিভাজন (Shobdo Bibhajon), অনুভূতি বিশ্লেষণ (Onubhuti Bishleshon)

---

### Sub-Competency C4: System Vulnerability & Failure Edge Cases

#### Task ID: `AI-7-EDGE-4.1`
- **Title:** Stress-test a chatbot's rule engine with linguistic edge cases (sarcasm, slang, typos).
- **Time Estimate:** 25 min
- **Resource Level:** Low (worksheet with customer support dialogue scripts)
- **Skill Type:** Quality Assurance & Adversarial Testing
- **Assessment Mode:** Written Audit & Reflection
- **Track Alignment:** Track B
- **Success Criteria:**
  - Tests 5 phrases containing sarcasm (e.g., "Oh great, another delayed train!"), regional slang, or spelling typos against fixed keyword rules.
  - Documents false positives and false negatives where rule engine misunderstood intent.
  - Formulates a 3-point explanation for why probabilistic Machine Learning replaced strict rule-based systems in modern AI.
- **Source Citation:** CBSE Class 7 AI Curriculum, Unit 2, p. 32; Unit 3, p. 45.
- **Scaffold Support:** Test matrix table with columns: Input Phrase -> Extracted Keyword -> Rule Triggered -> Intended Meaning -> Error Type.
- **Extension Challenge:** "How do modern Large Language Models use contextual word embeddings to understand idioms and sarcastic tone?"
- **Multilingual Terms:**
  - Hindi: व्यंग्य (Vyangya - Sarcasm), अपवाद (Apvaad - Edge Cases), मशीन लर्निंग (Machine Learning)
  - Malayalam: വിരോധാഭാസം (Virodhabhasam), നിയമ പരിമിതികൾ (Niyama Parimithikal)
