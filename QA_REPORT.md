# QA Audit Report: Onboarding, How-It-Works, and Visual Diagrams

**Date:** 2026-09-12
**Status:** **FAIL**

## Summary Verdict
The implementation fails to meet non-negotiable constraints regarding feature flag isolation and real-data integration. Several orphaned links appear when flags are disabled, the How-It-Works page relies on hardcoded placeholder data instead of the requested `subjectMaps.ts` data, and the Onboarding Tour breaks on mobile viewports.

## Detailed Itemized Report

| Item | Status | Evidence / Notes | Suggested Fix |
|---|---|---|---|
| **1. Zero-regression check** | Pass | No major layout breakages observed on existing pages when flags are toggled (aside from the orphaned links noted below). | None required. |
| **2. Feature flags isolation** | **FAIL** | - When `ENABLE_ONBOARDING_TOUR` is off, the "Replay onboarding tour" link in `Layout.tsx` footer is still visible.<br>- When `ENABLE_HOW_IT_WORKS` is off, the "How It Works" link in the footer remains visible.<br>- When `ENABLE_SKILL_VISUALS` is off, the "Explore the Skill Map" link inside `HowItWorksPage.tsx` remains visible. | Conditionally wrap all these links/buttons with their respective `FEATURES` flags. |
| **3. Homepage upgrade** | Pass | Hero copy and "How It Works" cards implemented exactly to spec. | None required. |
| **4. Onboarding prompt & tour** | **FAIL** | The tour relies on CSS IDs (`tour-step-map`, etc.) that only exist on the desktop navigation. On mobile, these elements are `display: none` (hidden), causing the spotlight `getBoundingClientRect()` to break/position at 0,0. | Add corresponding IDs to the mobile navigation drawer links, and update the tour logic to target visible elements based on viewport. |
| **5. /how-it-works page** | **FAIL** | The examples ("Math Chapter 4 -> Proportional Reasoning", "Fraction Scavenger Hunt") are hardcoded text strings in `HowItWorksPage.tsx`. This directly violates the instruction to use real examples pulled from actual `subjectMaps.ts` data. | Refactor `HowItWorksPage.tsx` to randomly pick (or specifically filter) an actual `SubjectSkillMap` entry from `subjectMaps.ts` and populate the sample task/skill dynamically. |
| **6. /skill-map page** | Pass | Safely deep-links, correctly parses `subjectMaps.ts` data, and provides functional empty states. | None required. |
| **7. Process strips & guides** | Pass | `PageHeaderVisual` implements the contextual toggles without causing destructive layout shifts. | None required. |
| **8. Documentation claims** | **FAIL** | `CHANGELOG_VISUALS.md` falsely claims feature flags can be safely disengaged without orphaned links, and glosses over the hardcoded data in the How-It-Works page. | Rewrite the changelog after fixing the underlying code issues to accurately reflect reality. |

## Prioritized Blocking Issues
1. **Hardcoded fictional data** in `/how-it-works`. Must be replaced with a live lookup from `subjectMaps.ts`.
2. **Broken feature flag boundaries**. Orphaned links must be wrapped with their respective boolean checks.
3. **Broken mobile tour layout**. The tour spotlight targets hidden DOM nodes on mobile.

## Non-blocking Polish Items
* The `PageHeaderVisual` strip might look cleaner if the toggle button itself was integrated visually with the strip, rather than stacked, but it meets functional requirements.
