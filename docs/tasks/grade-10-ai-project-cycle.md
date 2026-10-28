# Grade 10 Artificial Intelligence: The AI Project Cycle (Scoping to Deployment)
## Task-Based Learning (TBL) Competency Decomposition

**Curricular Subject:** Artificial Intelligence / Skill Subject 417 (Secondary Stage, Grade 10 - Board Examination Readiness)  
**Curriculum Documents:** CBSE Class 10 AI Curriculum (Subject Code 417: Part B *Subject Specific Skills*, Unit 1 *Introduction to AI Project Cycle*, Unit 2 *Evaluation & Computer Vision/NLP*); NCF-SE 2023 Secondary Stage Computational & Vocational Goals C-7.1, C-7.2.  
**Focus:** Full lifecycle machine learning project engineering: Problem scoping aligned with UN Sustainable Development Goals (SDGs), data acquisition, exploratory data analysis, neural network modeling, confusion matrix evaluation (Precision, Recall, F1-Score), and edge deployment monitoring.

---

## 1. Competency Statement

> *"The learner executes the end-to-end AI Project Cycle to build an applied machine learning solution, scoping problems using the 4Ws Canvas aligned to UN SDGs, acquiring and cleaning multi-modal training datasets, selecting appropriate learning algorithms (supervised classification/regression vs unsupervised clustering), calculating comprehensive evaluation metrics from confusion matrices (Accuracy, Precision, Recall, F1-Score), and specifying deployment pipelines with model drift monitoring and human oversight safeguards."*

### Key Curricular References & Standards:
- **CBSE Class 10 AI Curriculum (Code 417):** Unit 1 (*AI Project Cycle*), Unit 2 (*Evaluation Metrics & Confusion Matrix*).
- **NCF-SE 2023:** Secondary Stage Computational Thinking & AI C-7.1, C-7.2.
- **CBSE Board Skill Question Paper Pattern:** 50-mark board theory exam + practical portfolio requirements.

---

## 2. Sub-Competencies Breakdown

- **C1: Problem Scoping & SDG Alignment:** Deconstruct complex societal challenges using the 4Ws Canvas (Who, What, Where, Why); align projects to UN Sustainable Development Goals (SDG 3: Good Health, SDG 11: Sustainable Cities, SDG 13: Climate Action); define measurable target metrics.
- **C2: Data Acquisition & Exploratory Data Analysis (EDA):** Identify primary and secondary data acquisition channels (APIs, web scraping, sensors); clean datasets; perform statistical exploratory analysis (correlation heatmaps, outlier removal, normalization).
- **C3: Machine Learning & Neural Network Modeling:** Select modeling approaches: Rule-based vs Learning-based; Supervised learning (Classification vs Regression); Unsupervised learning (K-Means Clustering); construct multi-layer Artificial Neural Network (ANN) topologies with input, hidden, and output activation layers.
- **C4: Rigorous Model Evaluation & Confusion Matrix Metrics:** Construct a 2x2 Confusion Matrix (True Positive, False Positive, True Negative, False Negative); calculate Accuracy, Precision, Recall, and F1-Score; analyze critical tradeoffs (e.g., maximizing Recall for cancer screening vs maximizing Precision for spam detection).

---

## 3. Discrete Task Decomposition

### Sub-Competency C1: Problem Scoping & SDG Alignment

#### Task ID: `AI-10-SCOPE-1.1`
- **Title:** Scope an AI solution for solar rooftop potential mapping using the 4Ws Problem Canvas.
- **Time Estimate:** 35 min
- **Resource Level:** Low (4Ws Canvas worksheet, UN SDG goal sheet)
- **Skill Type:** Systems Scoping & Sustainable Goal Alignment
- **Assessment Mode:** 4Ws Canvas Portfolio Entry
- **Track Alignment:** Track B (CBSE Subject 417 Core)
- **Success Criteria:**
  - Identifies Stakeholders (Who): Municipal urban planners, residential solar adopters, electric utilities.
  - Articulates Problem (What): Inability to rapidly estimate shadow obstruction and solar irradiance on building rooftops.
  - Pinpoints Context (Where): Dense Indian metropolitan wards with mixed high-rise and low-rise buildings.
  - Explains Value Proposition (Why): Accelerates clean energy transition under SDG 7 & SDG 13.
  - Writes formal Problem Statement Template linking Who, What, Where, and Why.
- **Source Citation:** CBSE Class 10 AI Curriculum (Code 417), Unit 1: Problem Scoping, pp. 12–16.
- **Scaffold Support:** 4Ws Canvas template with sentence-starter prompts.
- **Extension Challenge:** "Define measurable Key Performance Indicators (KPIs) to evaluate whether the deployed AI solution succeeds after 12 months."
- **Multilingual Terms:**
  - Hindi: समस्या का दायरा (Samasya ka Daayra - Problem Scoping), 4Ws कैनवास (4Ws Canvas), सतत विकास लक्ष्य (SDG)
  - Tamil: சிக்கல் வரையறை (Sikkal Varaiyarai)

---

### Sub-Competency C2: Data Acquisition & Exploratory Data Analysis (EDA)

#### Task ID: `AI-10-DATA-2.1`
- **Title:** Design a multi-source data acquisition architecture and assess training-validation split ratios.
- **Time Estimate:** 35 min
- **Resource Level:** Low (system architecture worksheet)
- **Skill Type:** Data Architecture & Machine Learning Pipeline Design
- **Assessment Mode:** Pipeline Architecture Diagram
- **Track Alignment:** Track B
- **Success Criteria:**
  - Identifies 3 distinct data collection channels: Open-source satellite imagery (ISRO Bhuvan), weather API historical irradiance data, and ground truth electricity meter bills.
  - Outlines feature cleaning: Normalizing satellite images to 256x256 pixels, imputing missing weather sensor timestamps.
  - Justifies a 70% Training / 15% Validation / 15% Test split to avoid data leakage and overfitting.
- **Source Citation:** CBSE Class 10 AI Curriculum (Code 417), Unit 1: Data Acquisition & Exploration, pp. 17–22.
- **Scaffold Support:** Data pipeline flowchart showing Raw Data $\rightarrow$ Preprocessing $\rightarrow$ Train/Val/Test Split.
- **Extension Challenge:** "How does k-fold cross-validation mitigate variance in small sample biomedical datasets?"
- **Multilingual Terms:**
  - Hindi: डेटा अर्जन (Data Arjan - Data Acquisition), डेटा विभाजन (Data Vibhaajan - Data Split), सामान्यीकरण (Saamaanyeekaran - Normalization)
  - Kannada: ಡೇಟಾ ಸಂಗ್ರಹಣೆ (Data Sangrahane)

---

### Sub-Competency C3: Machine Learning & Neural Network Modeling

#### Task ID: `AI-10-MODEL-3.1`
- **Title:** Select appropriate AI model architectures across three distinct problem statements.
- **Time Estimate:** 35 min
- **Resource Level:** Low (case study scenario cards)
- **Skill Type:** Model Selection & Taxonomic Reasoning
- **Assessment Mode:** Written Response & Matrix Table
- **Track Alignment:** Track B
- **Success Criteria:**
  - Problem A: Predicting continuous house prices $\rightarrow$ Supervised Regression.
  - Problem B: Detecting fraudulent credit transactions $\rightarrow$ Supervised Classification.
  - Problem C: Segmenting e-commerce customers without prior labels $\rightarrow$ Unsupervised K-Means Clustering.
  - Justifies selection based on presence/absence of continuous vs categorical ground truth labels.
- **Source Citation:** CBSE Class 10 AI Curriculum (Code 417), Unit 1: Modeling, pp. 23–28; CBSE Sample Paper 2023–24.
- **Scaffold Support:** Machine learning taxonomy decision tree card.
- **Extension Challenge:** "Draw an Artificial Neural Network diagram showing 4 input features, 2 hidden layers with ReLU activations, and 1 sigmoid output neuron."
- **Multilingual Terms:**
  - Hindi: पर्यवेक्षित शिक्षण (Paryavekshit Shikshan - Supervised Learning), अपर्यवेक्षित शिक्षण (Aparyavekshit Shikshan - Unsupervised Learning), कृत्रिम तंत्रिका तंत्र (ANN)
  - Telugu: పర్యవేక్షిత అభ్యాసం (Paryavekshitha Abhyaasam)

---

### Sub-Competency C4: Rigorous Model Evaluation & Confusion Matrix Metrics

#### Task ID: `AI-10-EVAL-4.1`
- **Title:** Calculate Accuracy, Precision, Recall, and F1-Score from a 2x2 Confusion Matrix for medical diagnosis.
- **Time Estimate:** 40 min
- **Resource Level:** Low (worksheet with board exam numerical question set)
- **Skill Type:** Quantitative Metric Calculation & High-Stakes Evaluation
- **Assessment Mode:** Board Exam Problem Set & Self-Check
- **Track Alignment:** Track B
- **Success Criteria:**
  - Fills 2x2 matrix: $\text{TP} = 85$, $\text{FN} = 15$, $\text{FP} = 20$, $\text{TN} = 880$ (Total $= 1000$ patient scans).
  - Calculates $\text{Accuracy} = \frac{\text{TP} + \text{TN}}{\text{Total}} = \frac{965}{1000} = 96.5\%$.
  - Calculates $\text{Precision} = \frac{\text{TP}}{\text{TP} + \text{FP}} = \frac{85}{105} \approx 80.95\%$.
  - Calculates $\text{Recall} = \frac{\text{TP}}{\text{TP} + \text{FN}} = \frac{85}{100} = 85\%$.
  - Computes $\text{F1-Score} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}} \approx 82.9\%$.
  - Explains why a naive model predicting 'Healthy' for all patients has 90% accuracy but is medically catastrophic (0% Recall).
- **Source Citation:** CBSE Class 10 AI Curriculum (Code 417), Unit 2: Evaluation, pp. 35–42; CBSE 2023 Board Exam Question 21.
- **Scaffold Support:** Formula cheat sheet: Accuracy, Precision, Recall, and Harmonic Mean F1-Score formulas.
- **Extension Challenge:** "Analyze the Precision vs Recall tradeoff in an autonomous vehicle emergency braking algorithm versus an email spam classifier."
- **Multilingual Terms:**
  - Hindi: कन्फ्यूज़न मैट्रिक्स (Confusion Matrix), परिशुद्धता (Parishuddhata - Precision), रिकॉल (Recall), सटीकता (Sateekta - Accuracy), एफ1 स्कोर (F1-Score)
  - Bengali: যথার্থতা (Jotharthota - Precision), নির্ভুলতা (Nirbhulta - Accuracy)
