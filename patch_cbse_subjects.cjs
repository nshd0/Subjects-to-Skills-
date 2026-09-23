const fs = require('fs');
let code = fs.readFileSync('src/data/grades.ts', 'utf8');

// Grade 3 to 5
for (let i = 3; i <= 5; i++) {
  const regex = new RegExp(`(id:\\s*"grade-${i}",[\\s\\S]*?cbseSubjects:\\s*\\[).*?(\\])`);
  code = code.replace(regex, `$1"Mathematics", "EVS", "English", "Hindi"$2`);
}

// Grade 6 to 10
for (let i = 6; i <= 10; i++) {
  const regex = new RegExp(`(id:\\s*"grade-${i}",[\\s\\S]*?cbseSubjects:\\s*\\[).*?(\\])`);
  code = code.replace(regex, `$1"Mathematics", "Science", "Social Science", "English", "Second Language", "Third Language"$2`);
}

fs.writeFileSync('src/data/grades.ts', code);
