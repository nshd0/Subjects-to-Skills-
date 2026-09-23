# Changelog

All notable changes to the **Subjects2Skills** framework and platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
