const fs = require('fs');
let content = fs.readFileSync('src/pages/StagePage.tsx', 'utf8');

// Imports
content = content.replace(
  "import { SubjectMappingCard } from '@/components/SubjectMappingCard';",
  "import { SubjectMappingCard } from '@/components/SubjectMappingCard';\nimport { fetchSubjectMappings } from '@/lib/db';\nimport { SubjectMapping } from '@/data/curriculum';\nimport { Loader2 } from 'lucide-react';"
);

// State hooks
content = content.replace(
  "const [activeGrade, setActiveGrade] = useState<string>(\"All\");",
  `const [activeGrade, setActiveGrade] = useState<string>("All");
  const [dbMappings, setDbMappings] = useState<SubjectMapping[]>([]);
  const [loadingDb, setLoadingDb] = useState(true);

  React.useEffect(() => {
    let isMounted = true;
    async function load() {
      if (stageId) {
        setLoadingDb(true);
        // Stage names in DB are Capitalized
        const stageName = stageId.charAt(0).toUpperCase() + stageId.slice(1);
        const data = await fetchSubjectMappings(stageName);
        if (isMounted) {
          setDbMappings(data);
          setLoadingDb(false);
        }
      }
    }
    load();
    return () => { isMounted = false; };
  }, [stageId]);`
);

// Fallback logic
content = content.replace(
  "const stage = stages[stageId || ''];",
  `const stage = stages[stageId || ''];
  const subjectsToRender = dbMappings.length > 0 ? dbMappings : (stage?.subjects || []);`
);

// Loop rendering
content = content.replace(
  "{stage.subjects.map((subject, index) => (",
  `{loadingDb ? (
              <div className="py-12 flex justify-center"><Loader2 className="w-8 h-8 animate-spin text-indigo-500" /></div>
            ) : subjectsToRender.filter(s => activeGrade === "All" || (s.applicableGrades && s.applicableGrades.includes(activeGrade))).map((subject, index) => (`
);

content = content.replace(
  "currentGrade={activeGrade !== \"All\" ? activeGrade : undefined} \n              />\n            ))}",
  "currentGrade={activeGrade !== \"All\" ? activeGrade : undefined} \n              />\n            ))}"
);

fs.writeFileSync('src/pages/StagePage.tsx', content);
