const fs = require('fs');

let file = fs.readFileSync('src/pages/GradePage.tsx', 'utf-8');

file = file.replace(
  "import { Breadcrumbs } from '@/components/Breadcrumbs';",
  "import { Breadcrumbs } from '@/components/Breadcrumbs';\nimport { FEATURES } from '@/config/features';\nimport { Grade8Hub } from '@/features/planning/pages/Grade8Hub';"
);

file = file.replace(
  "export function GradePage() {\n  const { gradeId } = useParams<{ gradeId: string }>();",
  "export function GradePage() {\n  const { gradeId } = useParams<{ gradeId: string }>();\n\n  if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8')) {\n    return <Grade8Hub />;\n  }"
);

fs.writeFileSync('src/pages/GradePage.tsx', file);
