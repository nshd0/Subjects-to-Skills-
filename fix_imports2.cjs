const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

content2 = "import { Library, ExternalLink, FileText } from 'lucide-react';\n" + content2;

fs.writeFileSync(path2, content2);
console.log('Imports fixed again');
