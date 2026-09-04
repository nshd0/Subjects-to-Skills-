const fs = require('fs');
let code = fs.readFileSync('src/pages/Roadmap.tsx', 'utf8');

code = code.replace(
  "They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body.",
  "They do not represent approval, endorsement or certification by CBSE, NCERT or any government body."
);

fs.writeFileSync('src/pages/Roadmap.tsx', code);
console.log('Patched Roadmap disclaimer');
