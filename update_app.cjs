const fs = require('fs');
let app = fs.readFileSync('src/App.tsx', 'utf-8');

app = app.replace(
  "import { useAnalytics } from './hooks/useAnalytics';",
  "import { useAnalytics } from './hooks/useAnalytics';\nimport { HowItWorksPage } from './pages/HowItWorksPage';\nimport { FEATURES } from './config/features';"
);

app = app.replace(
  "<Route path=\"health\" element={<Health />} />",
  "<Route path=\"health\" element={<Health />} />\n        {FEATURES.ENABLE_HOW_IT_WORKS && <Route path=\"how-it-works\" element={<HowItWorksPage />} />}"
);

fs.writeFileSync('src/App.tsx', app);
