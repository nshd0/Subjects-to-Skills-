# Changelog: Guided Planning Wizards

## Added
- **`CreateLessonPlanWizard`**: A 7-step guided workflow for creating skill-based lesson plans. Integrates Bloom's taxonomy and VARK differentiated activities designed for 40+ learner classes.
- **`CreateAssessmentWizard`**: A 7-step guided workflow for creating learner-based assessments. Integrates formative/summative task mapping, skill-based rubrics, and large-class logistics.
- **Data Models**: Added lightweight data models (`LessonPlan`, `WizardAssessment`, `LessonBlock`, etc.) in `src/features/planning/wizardTypes.ts` that safely sit alongside existing v0.3 models.
- **Hooks**: Added `useWizardLessonPlans` and `useWizardAssessments` using simple `localStorage` mechanisms to avoid modifying current v0.3 backend interactions.
- **New Routes**:
  - `/plan/lesson/new`
  - `/assess/new`
- **Feature Flags**: Added `ENABLE_LESSON_PLAN_WIZARD` and `ENABLE_ASSESSMENT_WIZARD` to `src/config/features.ts`.

## Modified
- **`src/features/planning/pages/PlannerPage.tsx`**: Added an additive "Plan a lesson / unit" action button behind its feature flag.
- **`src/features/planning/pages/AssessmentMapperPage.tsx`**: Added an additive "Create an assessment" action button behind its feature flag.
- **`src/App.tsx`**: Registered the two new routes cleanly.

## Verification
- All existing v0.3 routes continue to function identically. No existing data structures or state hooks were altered.
- Feature flags cleanly abstract the new functionality, allowing safe rollback.
- Both wizards utilize the existing Indigo/Slate design palette and teacher-friendly voice requirements.
