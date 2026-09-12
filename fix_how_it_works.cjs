const fs = require('fs');
let code = fs.readFileSync('src/pages/HowItWorksPage.tsx', 'utf8');

code = code.replace(
  "const [activeStep, setActiveStep] = useState<number>(0);",
  "const [activeStep, setActiveStep] = useState<number>(0);\n  const [exampleData] = useState(() => subjectMaps[Math.floor(Math.random() * subjectMaps.length)]);"
);

// We replace subjectMaps[0] with exampleData globally in the file
code = code.replace(/subjectMaps\[0\]/g, 'exampleData');

fs.writeFileSync('src/pages/HowItWorksPage.tsx', code);
