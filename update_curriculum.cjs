const fs = require('fs');
let content = fs.readFileSync('src/data/curriculum.ts', 'utf8');

content = content.replace(
  /export interface SubjectMapping \{[\s\S]*?\}/,
  `export interface SubjectMapping {
  name: string;
  essentialKnowledge?: string;
  curricularGoal?: string;
  competency?: string;
  learningOutcome?: string;
  skills: string;
  valuesAndDispositions?: string;
  pedagogy: string;
  activities: string;
  evidence: string;
  assessmentMethod?: string;
  inclusionAndDifferentiation?: string;
  localIndianContext?: string;
  timeAndResources?: string;
  sourceLabel?: string;
}`
);

content = content.replace(
  /export interface StageData \{/,
  `export interface ComplianceStatus {
  fln: string;
  multilingualism: string;
  mathematics: string;
  science: string;
  socialScience: string;
  artEducation: string;
  physicalEducation: string;
  vocationalEducation: string;
  digitalLiteracy: string;
  indianKnowledgeSystems: string;
  inclusion: string;
}

export interface SecondaryPathway {
  name: string;
  description: string;
  subjects: string[];
}

export interface StageData {`
);

content = content.replace(
  /inclusivePaths\?: InclusivePath\[\];/,
  `inclusivePaths?: InclusivePath[];
  compliance?: ComplianceStatus;
  pathways?: SecondaryPathway[];`
);

const middleScienceOld = `{
        name: "Science",
        skills: "scientific thinking, investigation, evidence use",
        pedagogy: "laboratory work, field studies and design challenges",
        activities: "test materials for water filtration",
        evidence: "lab record, conclusion, prototype"
      }`;

const middleScienceNew = `{
        name: "Science",
        essentialKnowledge: "Filtration and separation",
        curricularGoal: "Develops scientific temper and investigates the natural world.",
        competency: "Plans and conducts a fair investigation.",
        learningOutcome: "Identifies variables and uses appropriate tools to separate mixtures.",
        skills: "Problem-solving, investigation",
        valuesAndDispositions: "Care for shared resources, scientific integrity",
        pedagogy: "Inquiry-based laboratory work",
        activities: "Design and test materials for a low-cost water filtration system",
        evidence: "Water-filter prototype",
        assessmentMethod: "Variables chart, data table, conclusion, and peer presentation",
        inclusionAndDifferentiation: "Provide tactile materials for visually impaired; use bilingual term sheets.",
        localIndianContext: "Study traditional local water harvesting or filtration methods (e.g., matka filtration).",
        timeAndResources: "4 periods. Requires basic lab supplies, sand, charcoal, gravel.",
        sourceLabel: "NCF-SE 2023 & Subjects2Skills Example"
      }`;

content = content.replace(middleScienceOld, middleScienceNew);

const foundMathOld = `{
        name: "Mathematics",
        skills: "counting, classification, patterns, spatial reasoning",
        pedagogy: "manipulatives, games, sorting and movement",
        activities: "sort objects by colour, size and shape",
        evidence: "demonstration and explanation"
      }`;

const foundMathNew = `{
        name: "Mathematics (Foundational Numeracy)",
        essentialKnowledge: "Number sense, quantity, operations",
        curricularGoal: "Develops foundational numeracy and spatial understanding.",
        competency: "Compares quantities up to 10.",
        learningOutcome: "Observes one-to-one correspondence in play.",
        skills: "Counting, spatial reasoning",
        valuesAndDispositions: "Patience, sharing materials",
        pedagogy: "Play-based learning, manipulatives",
        activities: "Sorting and sharing game with concrete objects (seeds, pebbles).",
        evidence: "Photo/work sample/oral explanation",
        assessmentMethod: "Teacher observation of child portfolio",
        inclusionAndDifferentiation: "Use high-contrast large objects for visually impaired.",
        localIndianContext: "Use local materials like tamarind seeds or shells.",
        timeAndResources: "15-minute guided burst.",
        sourceLabel: "NCERT FLN Advisory"
      }`;

content = content.replace(foundMathOld, foundMathNew);

const defaultCompliance = `compliance: {
      fln: 'Partially mapped',
      multilingualism: 'Partially mapped',
      mathematics: 'Mapped',
      science: 'Mapped',
      socialScience: 'Mapped',
      artEducation: 'Partially mapped',
      physicalEducation: 'Partially mapped',
      vocationalEducation: 'Not yet mapped',
      digitalLiteracy: 'Partially mapped',
      indianKnowledgeSystems: 'Not yet mapped',
      inclusion: 'Partially mapped'
    },`;

content = content.replace(/image: foundationalImage,/, `image: foundationalImage, \n    ${defaultCompliance}`);
content = content.replace(/image: preparatoryImage,/, `image: preparatoryImage, \n    ${defaultCompliance}`);
content = content.replace(/image: middleImage,/, `image: middleImage, \n    ${defaultCompliance}`);
content = content.replace(/image: secondaryImage,/, `image: secondaryImage, \n    ${defaultCompliance}`);

const pathways = `pathways: [
    { name: "Mathematical and Computational", description: "Focus on logic, data, and algorithms.", subjects: ["Mathematics", "Computer Science", "Physics"] },
    { name: "Scientific and Health", description: "Focus on biological sciences, health, and environment.", subjects: ["Biology", "Chemistry", "Physical Education"] },
    { name: "Humanities and Social Inquiry", description: "Focus on society, history, and human behavior.", subjects: ["History", "Political Science", "Sociology"] },
    { name: "Commerce and Enterprise", description: "Focus on business, economics, and finance.", subjects: ["Accountancy", "Business Studies", "Economics"] },
    { name: "Creative and Design", description: "Focus on fine arts, media, and design thinking.", subjects: ["Fine Arts", "Languages"] },
    { name: "Vocational and Applied", description: "Focus on practical skills and workplace readiness.", subjects: ["Skill Subjects", "Entrepreneurship"] }
  ],`;

content = content.replace(/intro: "This stage deepens/, `${pathways}\n  intro: "This stage deepens`);

fs.writeFileSync('src/data/curriculum.ts', content);
console.log('Done modifying curriculum.ts');
