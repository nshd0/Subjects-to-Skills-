const fs = require('fs');
let code = fs.readFileSync('src/types.ts', 'utf8');
code = code.replace(
  '  supportAndExtension?: string;\n};',
  '  supportAndExtension?: string;\n  progression?: { priorGrade?: string; nextGrade?: string; notes?: string };\n};'
);
fs.writeFileSync('src/types.ts', code);
