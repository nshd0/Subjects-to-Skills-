# Release v0.4

## Added
- Grade 8 skill mapping across all subjects with grade-to-grade progression notes.
- Grade 8 hub with readiness badges and scoped tool entry points.
- Cross-subject collaboration: IntegratedUnit creation, real skill selection, comments, status tracking, and permissioned editing.
- Guided onboarding tour (desktop and mobile) with replay capability.
- /how-it-works page with dynamically randomized, real curriculum examples.
- /skill-map interactive skill progression view (with 3D visualization enhancements).
- Contextual "What is this page for?" guides and process-strip diagrams across core tools.

## Fixed
- Feature flag isolation across all five flags (no orphaned links or dead routes when disabled).
- Mobile onboarding tour spotlight positioning (previously mispositioned at 0,0 on narrow viewports).
- Hardcoded fictional examples in How-It-Works replaced with live, randomized data from `subjectMaps.ts`.
- Cross-link gating in onboarding tour's final step, with graceful fallback CTA to Explore Grades.

## Verified
- Zero regression to all existing v0.3 routes and functionality, confirmed via smoke test in this release cycle.
