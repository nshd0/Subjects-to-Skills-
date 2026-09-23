const fs = require('fs');
let code = fs.readFileSync('src/data/subjectMaps.ts', 'utf8');

const newContent = `
// ============================================================================
// v0.5 Extended Content (Grades 3-10)
// ============================================================================
export const extendedSubjectMaps: SubjectSkillMap[] = [
  {
    id: "g3-evs-1",
    stage: "Preparatory",
    grade: "Grade 3",
    learningArea: "Environmental Studies",
    subject: "EVS",
    primarySkill: "Skill mapping pending verification",
    competency: "Observe and identify immediate surroundings",
    learningOutcome: "Students will explore their local environment.",
    essentialKnowledge: ["Local flora and fauna"],
    keyConcepts: ["Observation"],
    vocabulary: ["Environment", "Local"],
    subjectPractices: ["Observation"],
    curricularGoal: "Develop environmental awareness",
    supportingSkills: [],
    pedagogy: ["Field trip"],
    activityIds: [],
    evidence: ["Observation notes"],
    assessmentIds: [],
    inclusion: [],
    resourceIds: [],
    sourceType: "official-reference",
    status: "in-development",
    sourceReference: "NCERT Grade 3 EVS, NCF-SE 2023 edition (Pending Validation)",
    progression: { nextGrade: "Grade 4: Broader ecosystems" }
  },
  {
    id: "g9-math-1",
    stage: "Secondary",
    grade: "Grade 9",
    learningArea: "Mathematics",
    subject: "Mathematics",
    primarySkill: "Skill mapping pending verification",
    competency: "Number systems (Advanced track available)",
    learningOutcome: "Students will understand irrational numbers.",
    essentialKnowledge: ["Irrational numbers", "Real numbers"],
    keyConcepts: ["Number lines"],
    vocabulary: ["Irrational"],
    subjectPractices: ["Mathematical proof"],
    curricularGoal: "Build abstract mathematical reasoning",
    supportingSkills: [],
    pedagogy: ["Direct instruction"],
    activityIds: [],
    evidence: ["Problem sets"],
    assessmentIds: [],
    inclusion: [],
    resourceIds: [],
    sourceType: "official-reference",
    status: "in-development",
    sourceReference: "CBSE Class 9 Curriculum 2026-27 (Pending Validation)",
    progression: { nextGrade: "Grade 10: Real Numbers", notes: "Note: Transitioning to pre-NCF 2023 curriculum in Grade 10." }
  },
  {
    id: "g10-sci-1",
    stage: "Secondary",
    grade: "Grade 10",
    learningArea: "Science",
    subject: "Science",
    primarySkill: "Chemical Reactions and Equations",
    competency: "Write and balance chemical equations",
    learningOutcome: "Students balance chemical equations following the law of conservation of mass.",
    essentialKnowledge: ["Reactants", "Products", "Conservation of mass"],
    keyConcepts: ["Chemical equations"],
    vocabulary: ["Balance", "Coefficient"],
    subjectPractices: ["Scientific notation"],
    curricularGoal: "Understand chemical processes",
    supportingSkills: ["Algebraic balancing"],
    pedagogy: ["Lab demonstration"],
    activityIds: [],
    evidence: ["Balanced equations worksheet"],
    assessmentIds: [],
    inclusion: [],
    resourceIds: [],
    sourceType: "official-reference",
    status: "published",
    sourceReference: "NCERT Class 10 Science (Pre-NCF 2023 syllabus)",
    progression: { priorGrade: "Grade 9: Atoms and Molecules (NCF-2023 transition boundary)" }
  }
];

// Append to export if not already there
`;

if (!code.includes('extendedSubjectMaps')) {
  // We need to merge them. The existing export is `export const subjectMaps: SubjectSkillMap[] = [...]`
  // I will replace `export const subjectMaps: SubjectSkillMap[] = [`
  // with the new arrays merged. Wait, simpler to append after file and modify the export if possible.
  // Actually, I can just rename the existing export const subjectMaps to const baseSubjectMaps
  // and then export const subjectMaps = [...baseSubjectMaps, ...extendedSubjectMaps];
  
  code = code.replace(
    'export const subjectMaps: SubjectSkillMap[] = [',
    'const baseSubjectMaps: SubjectSkillMap[] = ['
  );
  
  code += newContent;
  code += '\nexport const subjectMaps: SubjectSkillMap[] = [...baseSubjectMaps, ...extendedSubjectMaps];\n';
  
  fs.writeFileSync('src/data/subjectMaps.ts', code);
}

