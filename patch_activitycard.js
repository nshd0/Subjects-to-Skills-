const fs = require('fs');
let code = fs.readFileSync('src/components/ActivityCard.tsx', 'utf8');

// Update useState for viewMode to 'text' instead of 'all' for pilot requirement
code = code.replace(/useState\<'all' \| 'visual' \| 'text'\>\('all'\)/, "useState<'all' | 'visual' | 'text'>('text')");

// Import VisualActivityGuide
code = code.replace("import { priorityScenesData } from '@/data/learningScenesData';", "import { VisualActivityGuide } from '@/components/activities/VisualActivityGuide';\nimport { priorityScenesData } from '@/data/learningScenesData';");

// Check for hasNewVisuals
code = code.replace("const sceneData = priorityScenesData[activity.id];", "const sceneData = priorityScenesData[activity.id];\n  const hasNewVisuals = !!activity.visuals;");

// Update the View Mode Selector
code = code.replace(/\{sceneData && \(/g, "{(sceneData || hasNewVisuals) && (");

// Add the rendering of VisualActivityGuide where sceneData && (viewMode === 'all' || viewMode === 'visual') is used
// Wait, I can just find that block and inject mine.
code = code.replace(
  "{sceneData && (viewMode === 'all' || viewMode === 'visual') && (",
  `{(hasNewVisuals && (viewMode === 'all' || viewMode === 'visual')) && (
            <VisualActivityGuide activity={activity} />
          )}

          {!hasNewVisuals && sceneData && (viewMode === 'all' || viewMode === 'visual') && (`
);

// We need to also close the block for sceneData if not hasNewVisuals, but it's part of a JSX block so it's fine, we just wrapped the start.

// The text mode:
code = code.replace(
  "{(!sceneData || viewMode === 'all' || viewMode === 'text') && (",
  "{(!(sceneData || hasNewVisuals) || viewMode === 'all' || viewMode === 'text') && ("
);

// Fix button labels to match the prompt exactly
code = code.replace("Complete (Visuals + Plan)", "Complete Plan");
code = code.replace("Instructional Visuals", "Visual Step Guide");
code = code.replace("Text-Only Plan", "Text and Print View"); // if it exists, otherwise find where it is

fs.writeFileSync('src/components/ActivityCard.tsx', code);
console.log('Patched ActivityCard.tsx');
