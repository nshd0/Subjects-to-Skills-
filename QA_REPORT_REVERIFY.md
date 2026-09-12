# QA Re-Audit Report: Onboarding, How-It-Works, and Visual Diagrams

**Date:** 2026-09-12
**Status:** **Partial Fail**

## Summary Verdict
The fixes successfully addressed the core issues: real data is now used instead of fictional text, the three explicit orphaned links were closed, and the mobile onboarding tour works perfectly. However, the implementation is a **Partial Fail** due to a remaining feature flag leak inside the tour itself, and a discrepancy in the changelog regarding how data is selected.

## Detailed Itemized Report

| Item | Status | Evidence | Remaining issue (if any) |
|---|---|---|---|
| **1. HowItWorksPage real data** | **Partial** | `src/pages/HowItWorksPage.tsx` lines 20-45 correctly use `subjectMaps[0]` to populate real learning areas, skills, and tasks from the live registry. | The data is hardcoded to index `0` (Grade 3 EVS). While it uses real data, it is not "dynamically selected" across subjects or reloads as the changelog claims. |
| **2. Feature flag isolation** | **Partial** | The originally cited footer links in `Layout.tsx` and the cross-link in `HowItWorksPage.tsx` are correctly wrapped in their respective `FEATURES.*` flags. | The final step of `OnboardingTour.tsx` (lines 165-172) contains buttons linking to `/skill-map` and `/how-it-works`. If `ENABLE_ONBOARDING_TOUR` is ON but the others are OFF, these buttons remain visible and lead to 404s. |
| **3. Mobile onboarding tour** | **Pass** | `OnboardingTour.tsx` correctly iterates through an array of viewport-specific `targetIds` to find the one with `rect.width > 0`. `Layout.tsx` correctly opens the drawer on mobile when the tour is triggered. | None. This fix is robust. |

## Documentation check
The `CHANGELOG_VISUALS.md` contains two false claims:
1. It claims `HowItWorksPage` "randomly selects real SubjectSkillMap records" (it is hardcoded to `[0]`).
2. It claims disabling any flag cleanly removes cross-links across the site (the `OnboardingTour` still leaks links to disabled features).

## Conclusion
The mobile onboarding fix is solid. However, the unflagged cross-links in the tour component mean feature isolation is not complete. These cross-links in `OnboardingTour.tsx` need to be wrapped in their respective feature flags, and the changelog needs to accurately describe the `subjectMaps[0]` indexing (or the code needs to be updated to actually select randomly).
