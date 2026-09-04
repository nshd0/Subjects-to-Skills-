const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// The file likely has:
// import { Target, Activity, Lightbulb, FileCheck, ... } from 'lucide-react';
// So let's just append to the end of the file a fake import if needed, or better, 
// replace `from 'lucide-react';` with `, Library, ExternalLink, FileText } from 'lucide-react';` for the first occurrence.

content2 = content2.replace(/} from 'lucide-react';/, ", Library, ExternalLink, FileText } from 'lucide-react';");

fs.writeFileSync(path2, content2);
console.log('Imports fixed really final');
