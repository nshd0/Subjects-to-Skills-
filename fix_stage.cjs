const fs = require('fs');

let content = fs.readFileSync('src/pages/StagePage.tsx', 'utf8');

const replacement = `
  const stage = stages[stageId || ''];

  const [activeGrade, setActiveGrade] = useState<string>("All");

  const getGradesForStage = (sId: string) => {
    if (sId === 'foundational') return ['Preschool', 'Grade 1', 'Grade 2'];
    if (sId === 'preparatory') return ['Grade 3', 'Grade 4', 'Grade 5'];
    if (sId === 'middle') return ['Grade 6', 'Grade 7', 'Grade 8'];
    return [];
  };

  const grades = getGradesForStage(stageId || "");
`;

content = content.replace(/const stage = stages\[stageId \|\| ''\];/, replacement);

fs.writeFileSync('src/pages/StagePage.tsx', content);
console.log('Fixed StagePage.tsx');
