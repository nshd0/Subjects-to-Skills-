const fs = require('fs');

let app = fs.readFileSync('src/App.tsx', 'utf-8');

app = app.replace(
  "import { useAnalytics } from './hooks/useAnalytics';",
  "import { useAnalytics } from './hooks/useAnalytics';\nimport { CreateLessonPlanWizard } from './features/planning/components/CreateLessonPlanWizard';\nimport { CreateAssessmentWizard } from './features/planning/components/CreateAssessmentWizard';"
);

app = app.replace(
  "<Route path=\"planner\" element={<PlannerRoute />} />",
  "<Route path=\"planner\" element={<PlannerRoute />} />\n        {FEATURES.ENABLE_LESSON_PLAN_WIZARD && <Route path=\"plan/lesson/new\" element={<CreateLessonPlanWizard />} />}"
);

app = app.replace(
  "<Route path=\"assess\" element={<AssessmentMapperRoute />} />",
  "<Route path=\"assess\" element={<AssessmentMapperRoute />} />\n        {FEATURES.ENABLE_ASSESSMENT_WIZARD && <Route path=\"assess/new\" element={<CreateAssessmentWizard />} />}"
);

fs.writeFileSync('src/App.tsx', app);
