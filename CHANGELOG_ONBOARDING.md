# Changelog: Onboarding Feature

## Added
- **Interactive Onboarding Tour**: Added a friendly, teacher-focused step-by-step tour overlay (`src/components/OnboardingTour.tsx`) that highlights key sections of the app (Skill Map, Planner, Assessment, Resources).
- **Onboarding Prompt**: Created an inviting, opt-in prompt card (`src/components/OnboardingPrompt.tsx`) that detects first-time visitors using `localStorage` and invites them to take the tour.
- **"How It Works" Page**: Added a visual, jargon-free 3-step explainer page (`src/pages/HowItWorksPage.tsx`) demonstrating how subjects translate into skills, plans, and resources. Accessible at `/how-it-works`.
- **Replay Mechanism**: Added a subtle "Replay onboarding tour" link to the footer within the main `Layout.tsx` for easy re-triggering.
- **Feature Flags**: Introduced `src/config/features.ts` containing `ENABLE_ONBOARDING_TOUR` and `ENABLE_HOW_IT_WORKS` to independently toggle the new features.

## Modified
- **`src/components/Layout.tsx`**: 
  - Injected `id` tags (`tour-step-map`, `tour-step-planner`, etc.) onto specific nav elements to serve as anchor targets for the onboarding spotlight.
  - Rendered `<OnboardingPrompt />` and `<OnboardingTour />` governed by the feature flag.
  - Added the "How It Works" link in the footer alongside a Replay Tour trigger.
- **`src/App.tsx`**: 
  - Registered the new `/how-it-works` route, protected by its feature flag.

## Verification
- Existing SPA routes (`/grades`, `/roadmap`, `/grade/:id`, etc.) remain fully intact and unmodified. The new code is strictly additive and non-blocking.
- The onboarding flow relies on `localStorage` to only surface itself once, unless explicitly replayed by the user via the footer.
