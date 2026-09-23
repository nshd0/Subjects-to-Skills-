const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

if (!code.includes('import { FEATURES }')) {
  code = code.replace(
    "import { gradesData } from '@/data/grades';",
    "import { gradesData } from '@/data/grades';\nimport { FEATURES } from '@/config/features';"
  );
}

if (!code.includes('if (!FEATURES.ENABLE_GRADE_RANGE_3_10)')) {
  code = code.replace(
    "const anchorGrades = gradesData.filter(g => ['grade-3', 'grade-6', 'grade-9', 'grade-11'].includes(g.id));",
    `let anchorGradesIds = ['grade-3', 'grade-6', 'grade-9', 'grade-11'];
  if (!FEATURES.ENABLE_GRADE_RANGE_3_10) {
    anchorGradesIds = ['grade-11'];
    if (FEATURES.ENABLE_GRADE8_FULL) anchorGradesIds.unshift('grade-8');
  } else {
    if (FEATURES.ENABLE_GRADE8_FULL) anchorGradesIds.splice(2, 0, 'grade-8');
  }
  const anchorGrades = gradesData.filter(g => anchorGradesIds.includes(g.id));`
  );
}

fs.writeFileSync('src/components/Layout.tsx', code);
