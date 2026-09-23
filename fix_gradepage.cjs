const fs = require('fs');
let code = fs.readFileSync('src/pages/GradePage.tsx', 'utf8');

code = code.replace(
  `if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8') && !FEATURES.ENABLE_GRADE_RANGE_3_10) {
    return <Grade8Hub />;
  }`,
  `if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8')) {
    return <Grade8Hub />;
  }`
);

fs.writeFileSync('src/pages/GradePage.tsx', code);
