const fs = require('fs');

let stagePagePath = 'src/pages/StagePage.tsx';
let stagePageContent = fs.readFileSync(stagePagePath, 'utf8');

// The regex might have missed some
stagePageContent = stagePageContent.replace(/<SubjectMappingCard\s+key=\{[^}]+\}\s+subject=\{subject\}\s+index=\{index\}\s+currentGrade=\{[^\}]+\}\s*\/>/g, '<SubjectMappingCard key={`${subject.id || subject.name}-${index}`} subject={subject} index={index} />');
stagePageContent = stagePageContent.replace(/<SubjectMappingCard key=\{`\$\{subject\.id \|\| subject\.name\}-\$\{index\}`\} subject=\{subject\} index=\{index\} currentGrade=\{[^\}]+\} \/>/g, '<SubjectMappingCard key={`${subject.id || subject.name}-${index}`} subject={subject} index={index} />');
stagePageContent = stagePageContent.replace(/<SubjectMappingCard\s+key=\{`\$\{subject\.id \|\| subject\.name\}-\$\{index\}`\}\s+subject=\{subject\}\s+index=\{index\}\s+currentGrade=\{[^\}]+\}\s*\/>/g, '<SubjectMappingCard key={`${subject.id || subject.name}-${index}`} subject={subject} index={index} />');

fs.writeFileSync(stagePagePath, stagePageContent);

let currPath = 'src/data/curriculum.ts';
let currContent = fs.readFileSync(currPath, 'utf8');
currContent = currContent.replace("valuesAndDispositions?: string;\n  valuesAndDispositions?: string;", "valuesAndDispositions?: string;");
currContent = currContent.replace("  valuesAndDispositions?: string;\n", "");

fs.writeFileSync(currPath, currContent);
console.log('Fixed props and interfaces again');
