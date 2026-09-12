const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

if (!code.includes('SkillMapPage')) {
  code = code.replace(
    "import { HowItWorksPage } from './pages/HowItWorksPage';",
    "import { HowItWorksPage } from './pages/HowItWorksPage';\nimport { SkillMapPage } from './pages/SkillMapPage';"
  );

  code = code.replace(
    "{FEATURES.ENABLE_HOW_IT_WORKS && <Route path=\"how-it-works\" element={<HowItWorksPage />} />}",
    "{FEATURES.ENABLE_HOW_IT_WORKS && <Route path=\"how-it-works\" element={<HowItWorksPage />} />}\n        {FEATURES.ENABLE_SKILL_VISUALS && <Route path=\"skill-map\" element={<SkillMapPage />} />}"
  );
  
  fs.writeFileSync('src/App.tsx', code);
}
