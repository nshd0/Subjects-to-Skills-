const fs = require('fs');

let path = 'src/components/SubjectMappingCard.tsx';
let content = fs.readFileSync(path, 'utf8');

// Update hasIncompleteFields
content = content.replace(
  /const hasIncompleteFields = [^;]+;/,
  "const hasIncompleteFields = !subject.stage || !subject.grade || !subject.subject || !subject.competency || !subject.learningOutcome || !subject.essentialKnowledge || !(subject.observablePerformance || subject.learningOutcome) || !(subject.activityStructured || subject.activities) || !(subject.evidenceStructured || subject.evidence) || !(subject.assessmentStructured || subject.assessmentMethod) || !(subject.inclusionStructured || subject.inclusionAndDifferentiation);"
);

// Add aria-label to external links
content = content.replace(
  /href=\{ref.url\} target="_blank" rel="noopener noreferrer" className="([^"]*)"/g,
  'href={ref.url} target="_blank" rel="noopener noreferrer" className="$1" aria-label="Official Reference Link"'
);

fs.writeFileSync(path, content);
console.log('Fixed SubjectMappingCard.tsx');

// Also ensure layout has print:hidden on header/footer
let layoutPath = 'src/components/Layout.tsx';
if (fs.existsSync(layoutPath)) {
  let layoutContent = fs.readFileSync(layoutPath, 'utf8');
  layoutContent = layoutContent.replace(/<header className="([^"]*)"/g, '<header className="$1 print:hidden"');
  layoutContent = layoutContent.replace(/<footer className="([^"]*)"/g, '<footer className="$1 print:hidden"');
  fs.writeFileSync(layoutPath, layoutContent);
  console.log('Fixed Layout.tsx print styles');
}
