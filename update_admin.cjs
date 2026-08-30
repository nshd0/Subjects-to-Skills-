const fs = require('fs');
let content = fs.readFileSync('src/pages/AdminDashboard.tsx', 'utf8');

// Imports
content = content.replace(
  "import { Shield, ShieldAlert, CheckCircle, Clock } from 'lucide-react';",
  "import { Shield, ShieldAlert, CheckCircle, Clock, Database, Loader2 } from 'lucide-react';\nimport { stages, secondaryStage } from '@/data/curriculum';\nimport { doc, setDoc, serverTimestamp } from 'firebase/firestore';"
);

// State
content = content.replace(
  "const [feedbacks, setFeedbacks] = useState<FeedbackDoc[]>([]);\n  const [loading, setLoading] = useState(true);",
  "const [feedbacks, setFeedbacks] = useState<FeedbackDoc[]>([]);\n  const [loading, setLoading] = useState(true);\n  const [migrating, setMigrating] = useState(false);\n  const [migrationStatus, setMigrationStatus] = useState('');"
);

// Migration Logic
const migrationCode = `
  const handleMigrateData = async () => {
    if (!confirm('Are you sure you want to migrate static syllabus data to Firestore? This might overwrite existing records.')) return;
    
    setMigrating(true);
    setMigrationStatus('Starting migration...');
    try {
      let count = 0;
      
      // Helper to process subjects
      const processStage = async (stageObj: any, stageName: string) => {
        for (const subject of stageObj.subjects || []) {
          for (const grade of subject.applicableGrades || [stageName]) {
            const docId = \`\${stageName}_\${subject.name.replace(/\\s+/g, '_')}_\${grade.replace(/\\s+/g, '_')}\`.toLowerCase();
            await setDoc(doc(db, 'subject_mappings', docId), {
              ncfCurricularArea: subject.ncfCurricularArea || subject.name,
              subject: subject.name,
              stage: stageName,
              grade: grade,
              curricularGoal: subject.curricularGoal || '',
              competency: subject.competency || '',
              learningOutcome: subject.learningOutcome || '',
              essentialKnowledge: subject.essentialKnowledge || '',
              skills: subject.skills || '',
              pedagogy: subject.pedagogy || '',
              activities: subject.activities || '',
              evidence: subject.evidence || '',
              assessmentMethod: subject.assessmentMethod || 'Observation and portfolio review',
              inclusionAndDifferentiation: subject.inclusionAndDifferentiation || '',
              valuesAndDispositions: subject.valuesAndDispositions || '',
              localIndianContext: subject.localIndianContext || '',
              timeAndResources: subject.timeAndResources || '',
              groupSize: subject.groupSize || '',
              teacherPrep: subject.teacherPrep || '',
              extensionActivity: subject.extensionActivity || '',
              supportActivity: subject.supportActivity || '',
              authorId: profile?.id || user?.uid || 'admin',
              isOfficial: true,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            });
            count++;
          }
        }
      };

      await processStage(stages.foundational, 'Foundational');
      await processStage(stages.preparatory, 'Preparatory');
      await processStage(stages.middle, 'Middle');
      
      // Secondary Phase 1 & 2
      await processStage(secondaryStage.phase1, 'Secondary');
      await processStage(secondaryStage.phase2, 'Secondary');
      
      setMigrationStatus(\`Migration complete! \${count} records ingested.\`);
    } catch (e: any) {
      console.error(e);
      setMigrationStatus(\`Error: \${e.message}\`);
    } finally {
      setMigrating(false);
    }
  };
`;

content = content.replace(
  "useEffect(() => {",
  migrationCode + "\n\n  useEffect(() => {"
);

const migrationUI = `
      <Card className="mb-8 border-indigo-100 dark:border-indigo-900/30">
        <CardHeader className="bg-indigo-50 dark:bg-indigo-950/20 rounded-t-xl border-b border-indigo-100 dark:border-indigo-900/30">
          <CardTitle className="text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
            <Database className="w-5 h-5" />
            Phase 2: Database Ingestion
          </CardTitle>
          <CardDescription className="text-indigo-700/70 dark:text-indigo-400/70">Migrate the hardcoded prototype syllabus data into Firestore for dynamic serving.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 flex flex-col sm:flex-row items-center gap-4 justify-between">
          <div className="text-sm text-slate-600 dark:text-slate-400">
            {migrationStatus || 'Ready to inject CBSE/NCF static data into the SubjectMappings collection.'}
          </div>
          <button 
            onClick={handleMigrateData}
            disabled={migrating}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 disabled:opacity-50 transition-colors whitespace-nowrap"
          >
            {migrating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
            {migrating ? 'Ingesting...' : 'Run Migration'}
          </button>
        </CardContent>
      </Card>

      <Card>
`;

content = content.replace(
  "<Card>\n        <CardHeader>\n          <CardTitle>Recent Educator Feedback</CardTitle>",
  migrationUI + "        <CardHeader>\n          <CardTitle>Recent Educator Feedback</CardTitle>"
);

fs.writeFileSync('src/pages/AdminDashboard.tsx', content);
