# Changelog

All notable changes to the **Subjects2Skills** framework and platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
