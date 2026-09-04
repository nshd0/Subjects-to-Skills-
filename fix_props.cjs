const fs = require('fs');

// Fix StagePage passing extra props to SubjectMappingCard
let stagePagePath = 'src/pages/StagePage.tsx';
let stagePageContent = fs.readFileSync(stagePagePath, 'utf8');

stagePageContent = stagePageContent.replace(/<SubjectMappingCard\s+key=\{[^}]+\}\s+subject=\{subject\}\s+index=\{index\}\s+currentGrade=\{[^\}]+\}\s*\/>/g, '<SubjectMappingCard key={`${subject.id || subject.name}-${index}`} subject={subject} index={index} />');
fs.writeFileSync(stagePagePath, stagePageContent);

// Fix SubjectMapping interface in src/data/curriculum.ts
let currPath = 'src/data/curriculum.ts';
let currContent = fs.readFileSync(currPath, 'utf8');

currContent = currContent.replace(
  "export interface SubjectMapping {",
  `export interface SubjectMapping {
  primarySkillDomain?: string;
  supportingSkillDomains?: string[];
  observablePerformance?: string;
  officialReference?: any[];
  activityStructured?: any;
  pedagogyStructured?: any;
  inclusionStructured?: any;
  evidenceStructured?: any;
  assessmentStructured?: any;
  valuesAndDispositions?: string;
`
);

fs.writeFileSync(currPath, currContent);
console.log('Fixed props and interfaces');
