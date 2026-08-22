const fs = require('fs');

let content = fs.readFileSync('src/components/SubjectMappingCard.tsx', 'utf8');

content = content.replace(/export function SubjectMappingCard\(\{ subject, index, currentGrade \}: \{ subject: SubjectMapping, index: number, currentGrade\?: string \}\) \{/,
  "export function SubjectMappingCard({ subject, index, currentGrade }: { key?: React.Key | string | number, subject: SubjectMapping, index: number, currentGrade?: string }) {");

fs.writeFileSync('src/components/SubjectMappingCard.tsx', content);
console.log('Fixed SubjectMappingCard.tsx');
