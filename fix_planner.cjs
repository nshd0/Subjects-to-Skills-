const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/PlannerPage.tsx', 'utf8');

code = code.replace(
  "import { LessonPlanCard } from '../components/LessonPlanCard';",
  "import { LessonPlanCard } from '../components/LessonPlanCard';\nimport { PageHeaderVisual } from '@/components/PageHeaderVisual';"
);

code = code.replace(
  "</header>",
  "</header>\n\n        <PageHeaderVisual type=\"planner\" />"
);

fs.writeFileSync('src/features/planning/pages/PlannerPage.tsx', code);
