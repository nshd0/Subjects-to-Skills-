const fs = require('fs');
let code = fs.readFileSync('src/data/subjectMaps.ts', 'utf8');
code = code.replace(/supportAndExtension:.*?\n  \}/g, match => match + ',');
fs.writeFileSync('src/data/subjectMaps.ts', code);
