# Changelog

All notable changes to the **Subjects2Skills** framework and platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.8.0] - 2026-09-24

### Added
- **Full State Board Expansion (All Major States & Stages) (`/state-alignments` & `/state-docs`)**:
  - Expanded from middle school pilot to 12 major state SCERT boards + National CBSE/NCERT baseline:
    - **Karnataka (DSERT / KTBS, Bengaluru)**: Nali Kali Activity Milestones, Class 7 & 8 Mathematics and General Science, SSLC Social Science.
    - **Tamil Nadu (TNSCERT / Samacheer Kalvi, Chennai)**: Ennum Ezhuthum Arumbu/Mottu early numeracy, Standard 7 Science, Standard 8 Rational Numbers, Class 10 Social Science.
    - **Delhi (SCERT Delhi / DBSE)**: Mission Buniyaad foundational numeracy, Happiness Curriculum SEL modules, Class 8 Yamuna ecology, DBSE secondary applied science.
    - **Rajasthan (RSCERT Udaipur / RBSE)**: Apna Parivesh Class 5 water harvesting, Class 7 Science desert adaptations, Class 9 Peasant and Tribal Resistance History.
    - **Uttar Pradesh (SCERT UP / Basic Shiksha, Lucknow)**: NIPUN Bharat Kalrav, Hamara Parivesh Class 4 Doab water tables, Class 7 Science, Class 10 Ray Optics.
    - **West Bengal (WBBSE / SCERT WB, Kolkata)**: Amar Boi Class 1 integrated primer, Class 4 Amader Paribesh Sundarban delta halophytes, Class 7 & 10 Physical Science.
    - **Gujarat (GCERT Gandhinagar / GSEB)**: Standard 4 Aas Paas Gir ecology, Standard 8 Ganit square roots, Class 10 Science chemical reactions.
    - **Andhra Pradesh (SCERT AP, Amaravati)**: Vidya Pravesh Telugu Thota, Class 7 Science motion and velocity graphs, SSC Physical Sciences curved surface optics.
    - **Telangana (SCERT Telangana, Hyderabad)**: Class 4 We - Our Environment Kakatiya cascade tanks, Class 8 Social Studies cartography, SSC Biology nutrition.
    - **Punjab (PSEB / SCERT Punjab, Mohali)**: Meri Pustak Pehli Jamaat Gurmukhi, Class 4 Meri Duniya canal networks, Class 8 & 10 Science heredity.
    - **Kerala SCERT (Samagra, Thiruvananthapuram)**: Basic Science, Mathematics, and SSLC Chemistry modern periodic classification.
    - **Maharashtra SCERT (Balbharati, Pune)**: Mathematics Standard 1, General Science Standard 8 buoyant pressure, Standard 10 Algebra Cramer's Rule.
  - Multi-stage coverage across all 4 NCF 5+3+3+4 stages: Foundational (Ages 3–8), Preparatory (Ages 8–11), Middle (Ages 11–14), and Secondary (Ages 14–18).
  - Multilingual regional language interfaces (Hindi, Tamil, Telugu, Kannada, Malayalam, Gujarati, Bengali, Marathi, Punjabi, and English).
  - Expanded "My State Board" filter and "Suggest State Alignment" peer review routing.

- **Real-Time Co-Planning — Google Docs-Style Collaboration (`/co-planning`)**:
  - Yjs CRDT-based synchronization engine (`Y.Doc`, `Y.Map`, `Y.Array`) for conflict-free multi-user editing.
  - Live cursor presence displaying active educator avatars and current lesson tags ("Riya Sen is editing Lesson 2...").
  - Suggestion Mode: Non-destructive proposed edits with side-by-side diff comparison, author credit, and single-click Accept/Decline resolution.
  - Real-time threaded commentary directly anchored to unit modules and rubrics.
  - Real-time activity audit log recording keystrokes, comments, and review decisions.
  - Three-tier permissions model (Owner, Editor, Viewer).
  - Interactive CRDT Conflict Resolution Simulator demonstrating mathematical 3-way merge convergence.

- **Ready-to-Use Classroom Resources — Activity Bank 2.0 (`/resources`)**:
  - 5 comprehensive resource formats: Worksheets & Handouts (with answer keys), Slide Decks (with teacher notes), Curated DIKSHA Video Playlists, Low-Cost Hands-On Activity Kits, and 5-Minute Formative Exit Tickets.
  - Double peer educator review gate requiring 2 verified endorsements and 4-dimension quality scoring.
  - Monthly rate limiting enforced at maximum 10 resource submissions per educator with real-time quota indicator.
  - Open licensing: All resources published under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0).

- **Differentiation & Inclusion Tools (`/resources` & `/planner`)**:
  - Scaffolding suggestions for all competencies: "Simplify for struggling learners" and "Extend for advanced learners".
  - Multilingual Vocabulary Bridges across 10 Indian languages with pronunciation guide and classroom prompts.
  - Universal Design for Learning (UDL) tags: Visual, Auditory, Kinesthetic, Reading/Writing.
  - Individualized Education Plan (IEP) alignment to RPwD Act 2016 inclusive classroom goals.

- **School & District Implementation Dashboards (`/school-dashboards`)**:
  - School Leadership Dashboard tracking active teacher rate, subject/grade volume, and exportable SMC reports.
  - District / Block Dashboard tracking multi-school cluster adoption, educator recognition, and learning goal progress.
  - Strict DPDP Act 2023 compliance with anonymization-by-default and school opt-in controls.

- **Professional Development Integration (`/professional-development`)**:
  - Subjects2Skills themes and resources mapped to NISHTHA 1.0 (Elementary), 2.0 (Secondary), 3.0 (FLN), and 4.0 (ECCE) training modules.
  - Annual Continuous Professional Development (CPD) tracker for NEP 2020 mandated 50 hours/year.
  - Downloadable official CPD verification certificate summary.

- **Offline-First Mode & PWA Integration**:
  - Full PWA compliance with `vite-plugin-pwa`, `usePWAInstall`, and `PWAInstallButton` for Android, Desktop, and iOS Safari.
  - Offline resource vault in IndexedDB allowing teachers to save unit plans, rubrics, and worksheets for 100% offline classroom use.
  - Offline sync conflict resolution manager with interactive 3-way merge tools.

- **Technical Audit & Documentation Deliverables (`/audit-v0-8`, `/resource-guidelines`, `/collab-docs`, `/school-dashboard-docs`, `/state-docs`)**:
  - Full technical audit report certifying 0 TypeScript errors, 100% evidentiary citations, WCAG AA compliance, and zero regressions.

---

## [0.7.0] - 2026-09-24

### Added
- **Interdisciplinary Theme Bundles Phase 2 — Co-Create & Share (`/theme-bundles`)**:
  - Full collaborative blueprint builder enabling verified educators to author and submit multi-subject inquiry units spanning 2+ disciplines.
  - Verifiable citation enforcement: Every cross-subject connection requires an official citation to NCF-SE 2023, NCERT textbooks, CBSE circulars, or State SCERT curricula.
  - Rate limiting governance: Hard limits capped at 5 bundle submissions per educator per calendar month, visible through an active monthly quota indicator.
  - Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) licensing on all published blueprints.
  - Community feedback channels: "Report Issue" and "Suggest Edit" modal workflows allowing educators to flag citation discrepancies, pacing issues, or accessibility barriers.
  - Transparent version history modal displaying revision numbers (e.g. v1.0.0, v1.2.0), revision dates, contributing authors, and changelog summaries.

- **Peer Educator Review Workflow (`/peer-review-guidelines` & `/theme-bundles`)**:
  - Verified educator moderation: Submissions enter an open peer review queue requiring 2 to 3 independent educator audits prior to public certification.
  - Four explicit review dimensions (weighted 25% each):
    1. *Curriculum Alignment*: Alignment with NCF-SE 2023 developmental stages and CBSE learning outcomes.
    2. *Classroom Usability*: Pacing feasibility, 40+ student management, and low-cost material accessibility.
    3. *Source Verification*: Strict factual audit against official government textbooks and policy circulars.
    4. *Accessibility & Inclusion*: Universal Design for Learning (UDL), multi-sensory formats, and multilingual bridging.
  - "Peer-Reviewed" certification badge awarded upon recording 2+ verified endorsements, displaying reviewer signatures, designations, and timestamps.

- **State SCERT Textbook Localization — Phase 1 Pilot (`/state-alignments` & `SkillMapPage`)**:
  - Direct chapter-level mapping between NCF-SE 2023 skill nodes and state textbooks for Grades 6–8 across two priority states:
    - **Kerala SCERT (Samagra Portal)**: Verified alignments across Basic Science, Mathematics, and Social Science (e.g., Kerala SCERT Grade 7 Math, Chapter 4: Repeated Multiplication, p. 78).
    - **Maharashtra State Board (Balbharati)**: Verified alignments across General Science, Mathematics, History & Civics, and Geography (e.g., Maharashtra Balbharati Grade 8 Science, Chapter 3: Force and Pressure, p. 14).
    - **National (CBSE / NCERT)**: Baseline comparative references for Class 7 & 8 Science and Mathematics.
  - Interactive "My State Board" filter on Skill Map and dedicated State SCERT Alignment Hub.
  - "Suggest State Alignment" button on all skill nodes routing community proposals directly into the peer review queue.

- **Collaborative Unit Planning — Lite (`/plan/integrated/:id`)**:
  - Asynchronous multi-teacher planning with clear ownership indicators ("Edited by [Name] on [Date]") and verified educator badges.
  - Co-planning comment thread supporting department collaboration.
  - One-click "Copy to My Plans" action allowing any teacher to fork a shared or exemplar unit into their personal workspace.

- **Curriculum Assist (AI-Assisted Suggestions)**:
  - Built-in template assist in theme bundle authoring offering source-grounded suggestions for skills, rubrics, and chapters based on grade and topic.
  - Clear "Suggested by Curriculum Assist" tagging requiring explicit teacher review, modification, and confirmation before saving.

- **Technical Audit Report (`/audit-v0-7` & `docs/releases/v0.7.0-audit.md`)**:
  - Complete compliance audit certifying 0 TypeScript errors, 95+ verified citations, 100% WCAG AA compliance, and zero regressions.

### Changed
- Upgraded project version to `0.7.0` across `package.json`, `/VERSION`, and `src/pages/Health.tsx`.
- Updated top navigation banner, navbar dropdowns, and footer to feature V0.7 Interdisciplinary Co-Planning, Peer Review, and State SCERT Alignments.

---

## [0.6.0] - 2026-09-23

### Added
- **Vertical Skill Pathways (`/pathways`)**:
  - Interactive longitudinal visualization mapping core competencies across the four NCF developmental stages: **Foundational (Ages 3–8)**, **Preparatory (Ages 8–11)**, **Middle (Ages 11–14)**, and **Secondary (Ages 14–18)**.
  - Granular progressions for core skill domains: Data Literacy & Statistical Inquiry, Computational Thinking & Algorithmic Problem Solving, Scientific Reasoning & Empirical Inquiry, and Ethical Reasoning & Digital Citizenship.
  - Official competency indicator citations for every stage: NCF-FS 2022 (`C-1.3`, `C-2.4`, `C-3.1`, `C-5.2`), NCF-SE 2023 (`C-3.2`, `C-4.1`, `C-6.4`, `C-7.2`, `C-9.3`), and CBSE Subject Code 417.
  - Clear "What Changes" cognitive progression column highlighting qualitative pedagogical leaps (e.g. concrete sensory sorting in Foundational → formal ISO flowcharts in Middle → multi-variate statistical modeling & confusion matrices in Secondary).
  - Comparative Stage Matrix view for side-by-side developmental cross-analysis.

- **Custom Rubric Builder (`/rubric/new`)**:
  - Teacher-facing rubric construction engine standardized on the 4-level maturity scale: **Emerging (Level 1)** → **Developing (Level 2)** → **Proficient (Level 3 • CBSE Target Benchmark)** → **Transfer (Level 4 • Synthesis & Extension)**.
  - Strict anti-orphan validation: Enforces mandatory association with a target Grade Band, a verified curriculum skill from `subjectMaps`, and non-empty criteria descriptors across all 4 maturity levels.
  - Full local persistence via `useCustomRubrics` hook with export, reset, and printable 4-column matrix dialog.

- **Print-Ready Monochrome Exports (`PrintReadyPlanExport`)**:
  - Print-optimized black-and-white output designed specifically for standard low-cost school photocopiers and laser printers.
  - High-contrast black borders (`border-black`) and crisp typography, replacing pastel color fills that wash out on monochrome prints.
  - Distinct typographic track patterns (`[ TRACK A : COMPULSORY EMBEDDED ]`, `[ TRACK B : OPTIONAL SKILL MODULE 901 ]`, and `[ TRACK C : ELECTIVE SKILL SUBJECT 417 ]`) ensuring track recognition without color.
  - Integrated into Lesson Plan Wizard (Step 8 Review & Save), Unit Detail Panel, and Integrated Unit Detail view.
  - Formal administrative signoff blocks for teachers, curriculum coordinators, and school principals.

- **Interdisciplinary Theme Bundles — Phase 1 Browse Only (`/theme-bundles`)**:
  - Three comprehensive multi-subject inquiry blueprints:
    - **Climate Resilience & Local Ecological Action**: Connecting Science (biogeochemical cycles), Social Science (monsoon shifts & Baoli water harvesting), and Mathematics (catchment volume modeling).
    - **Heritage, Craft Economies & Living Traditions**: Synthesizing History (guild economies & monument architecture), Art Education (botanical dyes & Warli/Madhubani motifs), and Language (oral histories).
    - **Data, AI & Civic Ethics**: Interlinking Mathematics (sampling bias & probability), Artificial Intelligence Code 417 (computer vision bias & confusion matrices), and Social Science (Article 21 privacy rights & Puttaswamy judgment).
  - Verifiable source citations for every discipline connection referencing NCERT Class 7–10 chapters and CBSE guidelines.
  - "Clone into My Plans" one-click action to copy blueprints directly into active Unit Plans as editable drafts.

- **Context-Aware Pedagogical Teacher Tips (`TeacherTipsPopover`)**:
  - Embedded guidance across planning and assessment wizards delivering targeted classroom strategies for Track A (embedded CT), Track B (15-hr exploratory sprints), Track C (AI 417 project cycle), and 40+ student classroom management.

- **Technical Audit Report (`/audit-v0-6`)**:
  - Published comprehensive compliance report confirming source verification, type safety, and WCAG AA accessibility.

### Changed
- Updated platform navigation menus and top banner to highlight V0.6 Vertical Pathways, Custom Rubric Builder, and Theme Bundles.
- Enhanced Assessment Mapper with direct launching point into Custom Rubric Builder.
- Upgraded project version to `0.6.0` in `package.json` and `VERSION`.

### Fixed
- Hardened preview environment startup against sandboxed iframe storage restrictions: wrapped Firebase Auth and Firestore initializers in defensive fallbacks to eliminate blank-screen exceptions.
- Added viewport polyfills (IntersectionObserver, ResizeObserver, matchMedia) in `index.html` to guarantee instant visual rendering under restricted container policies.
- Eliminated hidden initial states in top-level page animations to guarantee instant above-the-fold content visibility.

---

## [0.5.0] - 2026-09-22

### Added
- **Full CBSE AI Track Integration (Tracks A, B, C)** across Grades 3–12 skill maps:
  - **Track A (Compulsory Embedded)**: Computational Thinking for Grades 3–5 (50 hrs/yr) and Computational Thinking & AI for Grades 6–8 (100 hrs/yr, embedded across Mathematics, Science, and Social Science).
  - **Track B (Optional Skill Module)**: AI Skill Modules (Code 901A/B/C, ~15 hours standalone) offered at school discretion for Grades 6–8.
  - **Track C (Elective Skill Subject)**: Secondary Board AI Skill Subject (Code 417, 100 Marks: 50 theory + 50 practical, 200 hrs/yr) for Grades 9–10, with senior secondary readiness mapping for Grades 11–12.
- **Visual Track Badges & Color-Coded Indicators** on skill map nodes:
  - Track A (Compulsory Embedded): Distinctive blue badge (`border-blue-200 bg-blue-100 text-blue-800`).
  - Track B (Optional Skill Module): Amber badge (`border-amber-200 bg-amber-100 text-amber-800`).
  - Track C (Elective Skill Subject): Emerald badge (`border-emerald-200 bg-emerald-100 text-emerald-800`).
- **Track Profile Panel** in skill node detail drawers:
  - Detailed track type description and curricular status.
  - Annual hour allocations and breakdown (CT skills vs. AI concepts vs. capstone projects).
  - Explicit curricular transition pathways (Track A foundational bridge into Track C; Track B optionality notes).
  - Authoritative source citations referencing official CBSE circulars and curricular handbooks.
- **Dynamic Grade- and Track-Aware Filtering in Planning Wizards**:
  - **Lesson Plan Wizard**: Automatically filters eligible subjects by grade and AI track (Grades 3–5: Computational Thinking; Grades 6–8: Computational Thinking & AI, AI Skill Module 901; Grades 9–12: Artificial Intelligence Subject 417) with explicit track labeling in dropdowns.
  - **Assessment Wizard**: Dynamic grade-specific AI and CT subject options with pre-populated assessment templates, rubric alignments, and Bloom's taxonomy mapping.
- **Curriculum-Aligned Assessment Rubrics for AI & Computational Thinking**:
  - Detailed rubrics spanning 4 performance levels (Exemplary, Proficient, Developing, Beginning) for problem scoping, algorithmic design, dataset ethics, and ML evaluation metrics.

### Changed
- Updated Grade Hub views (`Grade8Hub` and `GenericGradeHub`) with dedicated CBSE AI & Computational Thinking Curriculum sections tailored per stage (Preparatory, Middle, Secondary).
- Enhanced skill node drawers with clear transition pathway notices explaining NEP 2020 / NCF-SE 2023 rollout timelines.

### Fixed
- Fixed TypeScript variant typing for motion animations in `Home.tsx` and `StagePage.tsx`.
- Resolved generic JSX construct signatures in `ErrorBoundary`.
- Extended `Badge` UI component variants to support `'destructive'` states.
- Ensured strict typing and non-optional `gradeId` adherence in `CreateIntegratedUnitWizard`.

---

## [0.4.3] - 2026-08-15

### Added
- Interactive Skill-to-Assessment mapping explorer.
- Integrated unit planning templates for cross-disciplinary middle school projects.
- Formative and summative assessment rubric matrices.

### Changed
- Refactored grade profiles to support extended NCF-SE competency taxonomies.

---

## [0.4.0] - 2026-06-30

### Added
- Integrated Lesson Plan Wizard and Assessment Builder.
- Grade 8 Full Pilot Hub with interdisciplinary units.
- Bloom's taxonomy tagging across curriculum nodes.

---

## [0.3.0] - 2026-03-20

### Added
- Verified curriculum mapping and teacher implementation layer.
- Standards alignment panel and observable competency descriptors.
- Assessment moderation toolkit and stage-specific implementation checklists.

---

## [0.2.0] - 2026-01-15

### Added
- Data platform migration and grade-level filtering.
- Global search across subjects and competencies.
- Authentication, print views, and educator feedback collection.

---

## [0.1.0] - 2025-10-10

### Added
- Conceptual framework and public prototype.
- Stage-based Subjects2Skills structure across Foundational, Preparatory, Middle, and Secondary stages.
