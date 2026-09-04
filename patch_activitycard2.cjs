const fs = require('fs');
let code = fs.readFileSync('src/components/ActivityCard.tsx', 'utf8');

// Hide the text steps if hasNewVisuals is true, UNLESS viewMode is text
code = code.replace(
  '{/* Step-by-Step Teacher Instructions */}\n              <div>',
  '{/* Step-by-Step Teacher Instructions */}\n              {(!hasNewVisuals || viewMode === "text") && (\n              <div>'
);

code = code.replace(
  '</ol>\n              </div>\n\n              {/* Student Instructions */}',
  '</ol>\n              </div>\n              )}\n\n              {/* Student Instructions */}'
);

fs.writeFileSync('src/components/ActivityCard.tsx', code);
console.log('Patched ActivityCard text steps condition');
