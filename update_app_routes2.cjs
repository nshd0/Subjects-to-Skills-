const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import { CreateAssessmentWizard } from './features/planning/components/CreateAssessmentWizard';",
  "import { CreateAssessmentWizard } from './features/planning/components/CreateAssessmentWizard';\nimport { Grade8Collaborate } from './features/planning/pages/Grade8Collaborate';\nimport { CreateIntegratedUnitWizard } from './features/planning/components/CreateIntegratedUnitWizard';\nimport { IntegratedUnitDetail } from './features/planning/pages/IntegratedUnitDetail';"
);

code = code.replace(
  "{FEATURES.ENABLE_LESSON_PLAN_WIZARD && <Route path=\"plan/lesson/new\" element={<CreateLessonPlanWizard />} />}",
  "{FEATURES.ENABLE_LESSON_PLAN_WIZARD && <Route path=\"plan/lesson/new\" element={<CreateLessonPlanWizard />} />}\n        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path=\"grade/8/collaborate\" element={<Grade8Collaborate />} />}\n        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path=\"plan/integrated/new\" element={<CreateIntegratedUnitWizard />} />}\n        {FEATURES.ENABLE_CROSS_SUBJECT_COLLAB && <Route path=\"plan/integrated/:id\" element={<IntegratedUnitDetail />} />}"
);

fs.writeFileSync('src/App.tsx', code);
