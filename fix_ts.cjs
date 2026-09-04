const fs = require('fs');

// 1. Fix SubjectMappingCard.tsx imports
let path1 = 'src/components/SubjectMappingCard.tsx';
let content1 = fs.readFileSync(path1, 'utf8');
content1 = content1.replace(
  "import { BookOpen, Target, Lightbulb, Clock, Users, FileCheck, CheckCircle2, HeartHandshake } from 'lucide-react';",
  "import { BookOpen, Target, Lightbulb, Clock, Users, FileCheck, CheckCircle2, HeartHandshake, Library, ExternalLink } from 'lucide-react';"
);
fs.writeFileSync(path1, content1);

// 2. Fix resources.ts type definition
let path2 = 'src/data/resources.ts';
let content2 = fs.readFileSync(path2, 'utf8');
content2 = content2.replace("grades: string;", "grades?: string;");
content2 = content2.replace("subject?: string;", "subject?: string;\n  subjects?: string[];");
fs.writeFileSync(path2, content2);

// 3. Fix StagePage.tsx imports
let path3 = 'src/pages/StagePage.tsx';
let content3 = fs.readFileSync(path3, 'utf8');
content3 = content3.replace(
  "import { Library, ExternalLink, ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin } from 'lucide-react';",
  "import { Library, ExternalLink, ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin, FileText } from 'lucide-react';"
);
if (!content3.includes('FileText')) {
  // if previous replace didn't work
  content3 = content3.replace(
    "import { ChevronRight, Activity,", 
    "import { FileText, Library, ExternalLink, ChevronRight, Activity,"
  );
}
fs.writeFileSync(path3, content3);
console.log('Fixed TS Errors');
