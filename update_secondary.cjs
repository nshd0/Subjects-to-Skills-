const fs = require('fs');
let content = fs.readFileSync('src/pages/StagePage.tsx', 'utf8');

// State hooks for Secondary
content = content.replace(
  "const [activeGradeP2, setActiveGradeP2] = useState<string>(\"All\");",
  `const [activeGradeP2, setActiveGradeP2] = useState<string>("All");
  const [dbMappings, setDbMappings] = useState<SubjectMapping[]>([]);
  const [loadingDb, setLoadingDb] = useState(true);

  React.useEffect(() => {
    let isMounted = true;
    async function load() {
      setLoadingDb(true);
      const data = await fetchSubjectMappings('Secondary');
      if (isMounted) {
        setDbMappings(data);
        setLoadingDb(false);
      }
    }
    load();
    return () => { isMounted = false; };
  }, []);

  const subjectsP1 = dbMappings.length > 0 
    ? dbMappings.filter(s => s.applicableGrades?.includes('Grade 9') || s.applicableGrades?.includes('Grade 10')) 
    : stage.phase1.subjects;
    
  const subjectsP2 = dbMappings.length > 0 
    ? dbMappings.filter(s => s.applicableGrades?.includes('Grade 11') || s.applicableGrades?.includes('Grade 12')) 
    : stage.phase2.subjects;
`
);

content = content.replace(
  "{stage.phase1.subjects.map((subject: any, index: number) => (",
  `{loadingDb ? <div className="py-8 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-indigo-500" /></div> : subjectsP1.filter(s => activeGradeP1 === "All" || (s.applicableGrades && s.applicableGrades.includes(activeGradeP1))).map((subject: any, index: number) => (`
);

content = content.replace(
  "{stage.phase2.subjects.map((subject: any, index: number) => (",
  `{loadingDb ? <div className="py-8 flex justify-center"><Loader2 className="w-6 h-6 animate-spin text-indigo-500" /></div> : subjectsP2.filter(s => activeGradeP2 === "All" || (s.applicableGrades && s.applicableGrades.includes(activeGradeP2))).map((subject: any, index: number) => (`
);

fs.writeFileSync('src/pages/StagePage.tsx', content);
