const fs = require('fs');

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');

// replace all instances of import { Library, ExternalLink, FileText } from 'lucide-react';
// and add them safely to the main one.

content2 = content2.replace("import { Library, ExternalLink, FileText } from 'lucide-react';\n", "");
content2 = content2.replace("import { Library, ExternalLink, FileText } from 'lucide-react';\n", "");
content2 = content2.replace("import { Library, ExternalLink, FileText } from 'lucide-react';\n", "");
content2 = content2.replace("import { Library, ExternalLink, FileText } from 'lucide-react';\n", "");

content2 = content2.replace(
  "import { ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin, Library, ExternalLink, FileText } from 'lucide-react';",
  "import { ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin, Library, ExternalLink, FileText } from 'lucide-react';"
);

fs.writeFileSync(path2, content2);
console.log('Imports fixed final');
