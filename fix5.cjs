const fs = require('fs');
let code = fs.readFileSync('src/data/subjectMaps.ts', 'utf8');
code = code.replace(/\];\n\n\];/g, '];');
code = code.replace(/\];\r?\n\];/g, '];');
fs.writeFileSync('src/data/subjectMaps.ts', code);
