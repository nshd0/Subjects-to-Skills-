const fs = require('fs');
let code = fs.readFileSync('src/pages/About.tsx', 'utf8');

code = code.replace("Subjects2Skills v0.2 — Preparing for v0.3", "Subjects2Skills v0.3");
code = code.replace(
  "A public educational framework demonstrating how existing CBSE subjects can be connected to skills, pedagogy stages, classroom activities, assessment evidence, teacher support, and free/open resources.",
  "Subjects2Skills is an evolving public framework designed to support curriculum exploration, teacher planning and educational discussion. Schools should align all use with applicable CBSE, NCERT, state, school, safeguarding and assessment requirements."
);
code = code.replace(
  "This release represents the preparation and architectural upgrade for <strong>v0.3</strong>, an upcoming grade-wise curriculum implementation covering Pre-school to Grade 12.",
  "This release represents <strong>v0.3</strong>, a scalable grade-wise curriculum implementation covering Pre-school to Grade 12."
);

fs.writeFileSync('src/pages/About.tsx', code);
console.log('Patched About.tsx');
