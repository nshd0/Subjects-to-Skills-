# Visual Diagrams & Onboarding Layer

## Changes Implemented

### Part A: Homepage Messaging
- Updated the main hero headline and subheadline to emphasize "From Subjects to Skills".
- Modified the status banner to display a cleaner trust statement regarding CBSE/NCERT/NCF 2023 alignment.
- Added a new 3-card "How It Works" section just beneath the hero area. This is feature-flagged via `ENABLE_HOW_IT_WORKS`.

### Part B: Opt-in Onboarding
- Enabled the `OnboardingPrompt` which displays a welcoming toast/modal to first-time visitors (using `localStorage` for `hasSeenOnboarding`).
- Enabled the interactive `OnboardingTour` component which highlights core navigation steps (Skill Map, Planner, Assess, Resources) with a dark overlay and contextual explanations.
- **Fix applied**: Added specific layout handling for the onboarding tour on mobile viewports. On smaller screens, the tour now successfully targets the elements nested inside the mobile drawer menu, replacing a bug where the spotlight defaulted to `0,0` coordinates due to targeting hidden desktop IDs.
- **Fix applied**: The "Replay onboarding tour" link in the footer is now safely wrapped inside the `ENABLE_ONBOARDING_TOUR` flag, preventing any orphaned links from persisting when the feature is disabled.
- **Fix applied**: Feature flag isolation issues inside `OnboardingTour.tsx` itself have been fully resolved. The final step's cross-links to the Skill Map and How It Works pages are now dynamically wrapped by their respective feature flags (`ENABLE_SKILL_VISUALS` and `ENABLE_HOW_IT_WORKS`). If both target features are disabled, the UI safely falls back to presenting a default "Explore Grades" CTA instead of exposing dead 404 links.

### Part C: Visual Diagrams & Skill Map
- **`/how-it-works` (C1):** Verified the existing new page providing a 3-step interactive node flow illustrating how subjects map to skills, plans, and resources. 
  - **Fix applied**: Replaced hardcoded text placeholders with dynamic lookups. We have implemented Option A (randomization on load) using `useState(() => subjectMaps[Math.floor(...)])`. The steps now genuinely randomize on each page load, selecting a real `SubjectSkillMap` record from the `subjectMaps.ts` registry, ensuring that sample subjects, competencies, and assessment tasks are authentic data references rather than static strings or fixed indexes.
  - **Fix applied**: The "Explore the Skill Map" link inside this component is now wrapped safely behind `ENABLE_SKILL_VISUALS`, preventing 404 dead-ends if that specific feature is disabled.
- **`/skill-map` (C2):** Created a new interactive page showing skill progressions across the 4 pedagogical stages (Foundational -> Preparatory -> Middle -> Secondary). Includes subject filtering, expansion for deep skill descriptors, and linked resources. Governed by `ENABLE_SKILL_VISUALS`.
- **Process Strips & Contextual Help (C3 & C4):** Created the `PageHeaderVisual` component and injected it into `PlannerPage`, `AssessmentMapperPage`, and `TeacherResourceHub`. Includes a collapsible "What is this page for?" toggle revealing a step-by-step process diagram. Governed by `ENABLE_SKILL_VISUALS`.

## Zero Breaking Changes Confirmation
- All additions were made purely additively, maintaining 100% functional parity for existing routes (`/grades`, `/roadmap`, `/grade/:id`, etc.).
- New components reside exclusively under their respective feature namespaces or pages, and do not mutate existing shared components in a breaking way.
- **Fix verified**: Feature flags now strictly enforce boundary isolation. Disabling any given visual/onboarding flag cleanly removes all associated DOM elements and cross-links across the site without leaving orphaned artifacts. 

## Verification Notes
- Deep Links: `/how-it-works` and `/skill-map` successfully resolve directly within standard Single-Page Application routing structures, maintaining deep-linkability across standard deployments.
- Mobile Layout Verification: Validated the corrected mobile onboarding tour logic via a 375px viewport test, ensuring the targeted mobile drawer links successfully open, trigger the bounding-rect logic, and render the spotlight highlight accurately in place.
