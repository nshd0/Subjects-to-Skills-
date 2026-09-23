const fs = require('fs');
let code = fs.readFileSync('src/pages/GradePage.tsx', 'utf8');

if (!code.includes('GenericGradeHub')) {
  code = code.replace(
    "import { Grade8Hub } from '../features/planning/pages/Grade8Hub';",
    "import { Grade8Hub } from '../features/planning/pages/Grade8Hub';\nimport { GenericGradeHub } from '../features/planning/pages/GenericGradeHub';"
  );
  
  code = code.replace(
    "if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8')) {\n    return <Grade8Hub />;\n  }",
    `if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8') && !FEATURES.ENABLE_GRADE_RANGE_3_10) {
    return <Grade8Hub />;
  }

  if (FEATURES.ENABLE_GRADE_RANGE_3_10 && gradeId) {
    const numericGrade = gradeId.replace('grade-', '');
    const validGrades = ['3','4','5','6','7','8','9','10'];
    if (validGrades.includes(numericGrade)) {
      return <GenericGradeHub gradeId={numericGrade} />;
    }
  }`
  );
}

fs.writeFileSync('src/pages/GradePage.tsx', code);
