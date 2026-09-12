const fs = require('fs');
let code = fs.readFileSync('src/features/planning/pages/PlannerPage.tsx', 'utf8');

if (!code.includes("import { PageHeaderVisual } from '@/components/PageHeaderVisual';")) {
  code = code.replace(
    "import { FEATURES } from '@/config/features';",
    "import { FEATURES } from '@/config/features';\nimport { PageHeaderVisual } from '@/components/PageHeaderVisual';"
  );
  fs.writeFileSync('src/features/planning/pages/PlannerPage.tsx', code);
}
