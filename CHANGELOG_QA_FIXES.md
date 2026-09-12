# QA Fixes - Grade 8 Full Enablement & Cross-Subject Collaboration

## Fix 1: Replaced mock skill data in CreateIntegratedUnitWizard
* **What was broken:** Step 3 of the wizard hardcoded placeholder options instead of real skill data.
* **What was changed:** The wizard now filters `subjectMaps.ts` by the selected Grade 8 subjects and dynamically populates the checkbox list with the actual `primarySkill` for each selected subject.
* **How it was verified:** Selected Math and Science in Step 2; verified that Step 3 renders real skills from `subjectMaps.ts` with correct text and functional selection state.

## Fix 2: Added fallback UI for unmapped units
* **What was broken:** Subjects with zero mapped skills risked rendering empty states without context.
* **What was changed:** Updated `Grade8Hub.tsx` to explicitly check `stats.skillCount === 0`. If true, the subject card renders an "Unmapped" pill and displays the fallback message: "Skill mapping for this unit is in progress — you can still create a plan manually."
* **How it was verified:** Manually simulated an unmapped subject in `Grade8Hub.tsx` and verified the fallback UI correctly renders in place of the normal skill count.

## Fix 3: Pre-scoped Grade 8 hub entry points
* **What was broken:** Action buttons in `Grade8Hub.tsx` (Planner, Assessment Mapper, Roadmap) navigated to global views without preserving the Grade 8 context.
* **What was changed:** Appended `?grade=grade-8` to the `to` prop of these `Link` components.
* **How it was verified:** Clicked the entry point buttons and verified that the browser navigates to the respective tools with the `grade-8` query parameter active.

## Fix 4: Seeded exemplar plans and assessments
* **What was broken:** The system initialized with empty lesson plans and assessments, meaning no exemplars were available for reference.
* **What was changed:** Added a default set of mock `LessonPlan` and `WizardAssessment` data for each Grade 8 subject to `useWizardStorage.ts`. These are populated upon initial load if local storage is empty.
* **How it was verified:** Cleared local storage, reloaded, and verified that exemplar plans and assessments for each subject are accessible in the UI.

## Fix 5: Completed Cross-Subject Collaboration functionality
* **What was broken:** `IntegratedUnitDetail` was a read-only mock UI without real logic for comments, status transitions, permissions, or assessment linking.
* **What was changed:** 
  * Rebuilt `IntegratedUnitDetail.tsx` to include a fully functional comments thread that updates state and persists.
  * Added a status dropdown that correctly updates the unit's `status` field.
  * Enforced edit/delete permissions based on `leadTeacherId` and `collaboratorIds`.
  * Wired the Step 7 assessment linking buttons in `CreateIntegratedUnitWizard.tsx` to either link an exemplar or navigate to the assessment creator.
* **Cascade-delete safety:** Deleting an `IntegratedUnit` correctly removes only the unit from local storage without altering the `wizard_lesson_plans` or `wizard_assessments` keys.
* **How it was verified:** Created a unit, added comments (verified persistence), changed status (verified persistence), tested delete functionality, and verified that Step 7 buttons navigate/link as intended.

## Note on Fix 6 (Runtime Feature Flags)
* Feature flags in `src/config/features.ts` remain evaluated at build-time. Runtime-loaded feature flags are out of scope for this FIX-ONLY pass, meaning toggling flags currently still requires a full build/redeploy. This is a known limitation.

## Zero Regression Confirmation
* Evaluated `/grades`, `/roadmap`, and `/grade/:id` for grades other than 8.
* Verified no unintended changes occurred and standard layout and functionality remains completely unaffected by these scoped additions.
