const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// I'll just rewrite the first few lines up to lucide-react to be clean.
// It's probably easier to just remove all duplicate imports.

const uniqueImports = new Set();
let match = content2.match(/import \{([^}]+)\} from 'lucide-react';/);
if (match) {
  let parts = match[1].split(',').map(s => s.trim()).filter(s => s);
  parts.forEach(p => uniqueImports.add(p));
  uniqueImports.add('Library');
  uniqueImports.add('ExternalLink');
  uniqueImports.add('FileText');
  content2 = content2.replace(match[0], `import { ${Array.from(uniqueImports).join(', ')} } from 'lucide-react';`);
  
  // also clean up any duplicate lucide-react import blocks
  let lucideImports = 0;
  content2 = content2.replace(/import \{[^}]+\} from 'lucide-react';\n?/g, (m) => {
    lucideImports++;
    if (lucideImports === 1) return m;
    return "";
  });
}

fs.writeFileSync(path2, content2);
console.log('Imports fixed for real for real');
