const fs = require('fs');
let code = fs.readFileSync('src/data/subjectMaps.ts', 'utf8');
code = code.replace(
  'Extension: Present the top class briefs to the local Ward Councillor or School Management Committee."\n  }\n  {\n    id: "g8-math-1",',
  'Extension: Present the top class briefs to the local Ward Councillor or School Management Committee."\n  },\n  {\n    id: "g8-math-1",'
);
code = code.replace(/\];\n\];/g, '];');
fs.writeFileSync('src/data/subjectMaps.ts', code);
