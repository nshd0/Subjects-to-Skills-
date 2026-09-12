const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/AssessmentMapperPage.tsx', 'utf8');

code = code.replace(
  "import { FEATURES } from '@/config/features';",
  "import { FEATURES } from '@/config/features';\nimport { PageHeaderVisual } from '@/components/PageHeaderVisual';"
);

code = code.replace(
  "            <p className=\"mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl\">\n              Map grade-specific competencies to standardized rubrics and actionable assessment tasks. Select a grade and a target skill to view associated assessments.\n            </p>\n          </div>",
  "            <p className=\"mt-2 text-sm text-slate-500 dark:text-slate-400 max-w-2xl mb-4\">\n              Map grade-specific competencies to standardized rubrics and actionable assessment tasks. Select a grade and a target skill to view associated assessments.\n            </p>\n            <PageHeaderVisual type=\"assessment\" />\n          </div>"
);

fs.writeFileSync('src/features/planning/pages/AssessmentMapperPage.tsx', code);
