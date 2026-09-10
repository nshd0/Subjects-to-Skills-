const fs = require('fs');

let layout = fs.readFileSync('src/components/Layout.tsx', 'utf-8');

layout = layout.replace(
  "import { BookmarksDrawer } from './BookmarksDrawer';",
  "import { BookmarksDrawer } from './BookmarksDrawer';\nimport { OnboardingPrompt } from './OnboardingPrompt';\nimport { OnboardingTour } from './OnboardingTour';\nimport { FEATURES } from '@/config/features';"
);

layout = layout.replace(
  "const [isBookmarksOpen, setIsBookmarksOpen] = React.useState(false);",
  "const [isBookmarksOpen, setIsBookmarksOpen] = React.useState(false);\n  const [isTourOpen, setIsTourOpen] = React.useState(false);"
);

layout = layout.replace(
  "<BookmarksDrawer isOpen={isBookmarksOpen} onClose={() => setIsBookmarksOpen(false)} />",
  "<BookmarksDrawer isOpen={isBookmarksOpen} onClose={() => setIsBookmarksOpen(false)} />\n      {FEATURES.ENABLE_ONBOARDING_TOUR && (\n        <>\n          <OnboardingPrompt onStartTour={() => setIsTourOpen(true)} />\n          <OnboardingTour isOpen={isTourOpen} onClose={() => setIsTourOpen(false)} />\n        </>\n      )}"
);

layout = layout.replace(
  "<li><Link to=\"/about\" className=\"hover:underline\">About & Core Principles</Link></li>",
  "<li><Link to=\"/how-it-works\" className=\"hover:underline text-indigo-600 dark:text-indigo-400 font-semibold\">How It Works</Link></li>\n                <li><Link to=\"/about\" className=\"hover:underline\">About & Core Principles</Link></li>"
);

// Add Replay onboarding button
layout = layout.replace(
  "<div className=\"flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400\">",
  "<div className=\"flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-slate-400\">\n              <button onClick={() => setIsTourOpen(true)} className=\"text-indigo-600 dark:text-indigo-400 hover:underline font-semibold\">\n                Replay onboarding tour\n              </button>"
);

fs.writeFileSync('src/components/Layout.tsx', layout);
