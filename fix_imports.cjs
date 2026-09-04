const fs = require('fs');

let path1 = 'src/components/SubjectMappingCard.tsx';
let content1 = fs.readFileSync(path1, 'utf8');
content1 = content1.replace(
  "import { Target, Lightbulb, FileCheck, Info, HeartHandshake, Map, Clock, BadgeCheck, BookOpen, Users, HelpCircle, GraduationCap, ChevronDown, CheckCircle2, Link as LinkIcon, AlertCircle } from 'lucide-react';",
  "import { Target, Lightbulb, FileCheck, Info, HeartHandshake, Map, Clock, BadgeCheck, BookOpen, Users, HelpCircle, GraduationCap, ChevronDown, CheckCircle2, Link as LinkIcon, AlertCircle, Library, ExternalLink } from 'lucide-react';"
);
fs.writeFileSync(path1, content1);

let path2 = 'src/pages/StagePage.tsx';
let content2 = fs.readFileSync(path2, 'utf8');
content2 = content2.replace(
  "import { Library, ExternalLink, ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin, FileText } from 'lucide-react';",
  ""
);
content2 = content2.replace(
  "import { ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin } from 'lucide-react';",
  "import { ChevronRight, Activity, Target, Download, FileCheck, Info, MapPin, Library, ExternalLink, FileText } from 'lucide-react';"
);
// just to be super safe
if (!content2.includes('ExternalLink')) {
  content2 = "import { Library, ExternalLink, FileText } from 'lucide-react';\n" + content2;
}

fs.writeFileSync(path2, content2);
console.log('Imports fixed');
