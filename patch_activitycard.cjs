const fs = require('fs');
let code = fs.readFileSync('src/components/ActivityCard.tsx', 'utf8');

// Update useState for viewMode to 'text' instead of 'all' for pilot requirement
code = code.replace(/useState\<'all' \| 'visual' \| 'text'\>\('all'\)/, "useState<'all' | 'visual' | 'text'>('text')");

// Import VisualActivityGuide
code = code.replace("import { priorityScenesData } from '@/data/learningScenesData';", "import { VisualActivityGuide } from '@/components/activities/VisualActivityGuide';\nimport { priorityScenesData } from '@/data/learningScenesData';");

// Check for hasNewVisuals
code = code.replace("const sceneData = priorityScenesData[activity.id];", "const sceneData = priorityScenesData[activity.id];\n  const hasNewVisuals = !!activity.visuals;");

// Update the View Mode Selector - carefully
code = code.replace(/\{sceneData && \(\n            <div className="flex flex-wrap/g, "{(sceneData || hasNewVisuals) && (\n            <div className=\"flex flex-wrap");

// Add the rendering of VisualActivityGuide
code = code.replace(
  "{sceneData && (viewMode === 'all' || viewMode === 'visual') && (",
  `{(hasNewVisuals && (viewMode === 'all' || viewMode === 'visual')) && (
            <VisualActivityGuide activity={activity} className="mb-6" />
          )}

          {!hasNewVisuals && sceneData && (viewMode === 'all' || viewMode === 'visual') && (`
);

// Update text condition
code = code.replace(
  "{(!sceneData || viewMode === 'all' || viewMode === 'text') && (",
  "{(!(sceneData || hasNewVisuals) || viewMode === 'all' || viewMode === 'text') && ("
);

code = code.replace("Complete (Visuals + Plan)", "Complete Plan");
code = code.replace("Instructional Visuals", "Visual Step Guide");
code = code.replace("Text-Only Plan", "Text and Print View");

fs.writeFileSync('src/components/ActivityCard.tsx', code);
console.log('Patched ActivityCard.tsx');
