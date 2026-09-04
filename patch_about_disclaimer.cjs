const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf8');

code = code.replace(
  "They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body.",
  "They do not represent approval, endorsement or certification by CBSE, NCERT or any government body."
);

fs.writeFileSync('src/pages/About.tsx', code);
console.log('Patched About disclaimer');
