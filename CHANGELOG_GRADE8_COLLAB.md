# Changelog: Grade 8 Full Enablement & Cross-Subject Collaboration

## Added
- **Grade 8 Subject Maps**: Extended `src/data/subjectMaps.ts` to fully cover Grade 8 Mathematics, Science, English, Social Science, and Second Language. Includes progression notes (prior/next grade).
- **`Grade8Hub` Component**: A dedicated Grade 8 landing experience (`/grade/8`) providing direct access to the Skill Map, Planner, and Assessment Mapper.
- **Cross-Subject Collaboration (`IntegratedUnit`)**: 
  - Added data models (`IntegratedUnit`, `Comment`) to `src/features/planning/wizardTypes.ts`.
  - Added `useWizardIntegratedUnits` hook for local persistence.
  - Implemented `CreateIntegratedUnitWizard` (`/plan/integrated/new`), an 8-step flow for co-designing cross-subject units.
  - Implemented `Grade8Collaborate` (`/grade/8/collaborate`) to view and filter cross-subject units.
  - Implemented `IntegratedUnitDetail` (`/plan/integrated/:id`) to view created units.
- **Feature Flags**: Added `ENABLE_GRADE8_FULL` and `ENABLE_CROSS_SUBJECT_COLLAB` to `src/config/features.ts`.

## Modified
- **`src/pages/GradePage.tsx`**: Safely intercepts navigation to `/grade/8` and routes it to `Grade8Hub` if the feature flag is enabled, otherwise preserves existing functionality.
- **`src/types.ts`**: Safely extended `SubjectSkillMap` with a `progression` object.
- **`CreateLessonPlanWizard` & `CreateAssessmentWizard`**: Updated subject selectors to include all Grade 8 subjects (English, Social Science, Second Language).
- **`src/App.tsx`**: Registered new routes `/grade/8/collaborate`, `/plan/integrated/new`, and `/plan/integrated/:id`.

## Verification
- Existing Grade 3, 6, and 7 pages (`/grade/3`, etc.) remain functionally and visually unchanged.
- All new functionality is purely additive and feature-flagged.
- Tone across all wizards and hubs is teacher-friendly, practical, and references realistic classroom setups (e.g. 40+ students).
