const fs = require('fs');
let code = fs.readFileSync('src/config/features.ts', 'utf8');

if (!code.includes('ENABLE_GRADE_RANGE_3_10')) {
  code = code.replace(
    'ENABLE_CROSS_SUBJECT_COLLAB: true,',
    `ENABLE_CROSS_SUBJECT_COLLAB: true,
  ENABLE_GRADE_RANGE_3_10: true,`
  );
}

fs.writeFileSync('src/config/features.ts', code);
