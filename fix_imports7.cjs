const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

content2 = content2.replace("import { Loader2, NavLink", "import { NavLink");

let match = content2.match(/import \{([^}]+)\} from 'lucide-react';/);
if (match) {
  content2 = content2.replace(match[0], `import { Loader2, ${match[1]} } from 'lucide-react';`);
}

fs.writeFileSync(path2, content2);
console.log('Loader2 moved');
