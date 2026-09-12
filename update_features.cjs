const fs = require('fs');
let code = fs.readFileSync('src/config/features.ts', 'utf8');
code = code.replace(
  '  ENABLE_ASSESSMENT_WIZARD: true,\n};',
  '  ENABLE_ASSESSMENT_WIZARD: true,\n  ENABLE_GRADE8_FULL: true,\n  ENABLE_CROSS_SUBJECT_COLLAB: true,\n};'
);
fs.writeFileSync('src/config/features.ts', code);
