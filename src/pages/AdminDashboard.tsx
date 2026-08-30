import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { FeedbackDoc } from '@/data/models';
import { useAuth } from '@/contexts/AuthContext';
import { Shield, ShieldAlert, CheckCircle, Clock, Database, Loader2 } from 'lucide-react';
import { stages, secondaryStage } from '@/data/curriculum';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';

export function AdminDashboard() {
  const { profile, user } = useAuth();
  const [feedbacks, setFeedbacks] = useState<FeedbackDoc[]>([]);
  const [loading, setLoading] = useState(true);
  const [migrating, setMigrating] = useState(false);
  const [migrationStatus, setMigrationStatus] = useState('');

  
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
            const docId = `${stageName}_${subject.name.replace(/[^a-zA-Z0-9_-]/g, '_').replace(/\s+/g, '_')}_${grade.replace(/[^a-zA-Z0-9_-]/g, '_')}`.toLowerCase();
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
      
      setMigrationStatus(`Migration complete! ${count} records ingested.`);
    } catch (e: any) {
      console.error(e);
      setMigrationStatus(`Error: ${e.message}`);
    } finally {
      setMigrating(false);
    }
  };


  useEffect(() => {
    async function loadFeedbacks() {
      if (profile?.role !== 'admin') return;
      try {
        const q = query(collection(db, 'feedbacks'), orderBy('createdAt', 'desc'), limit(50));
        const snap = await getDocs(q);
        const data = snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as FeedbackDoc));
        setFeedbacks(data);
      } catch (e) {
        console.error("Failed to load feedbacks:", e);
      } finally {
        setLoading(false);
      }
    }
    loadFeedbacks();
  }, [profile]);

  if (profile?.role !== 'admin') {
    return (
      <div className="container mx-auto p-12 text-center flex flex-col items-center">
        <ShieldAlert className="w-16 h-16 text-red-500 mb-4" />
        <h2 className="text-2xl font-bold">Access Denied</h2>
        <p className="text-slate-500 mt-2">You need administrator privileges to view this page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Shield className="w-8 h-8 text-indigo-600" />
            Curriculum Admin Portal
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Review educator feedback and manage SubjectMapping data (v0.2 Phase 4).</p>
        </div>
      </div>

      
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
        <CardHeader>
          <CardTitle>Recent Educator Feedback</CardTitle>
          <CardDescription>Direct telemetry from the prototype's implementation panels.</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="text-center py-8">Loading feedback...</div>
          ) : feedbacks.length === 0 ? (
            <div className="text-center py-12 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg">
              <CheckCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-medium text-slate-900 dark:text-slate-100">All caught up</h3>
              <p className="text-slate-500">No feedback submitted yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {feedbacks.map(fb => (
                <div key={fb.id} className="p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-sm font-medium text-slate-900 dark:text-slate-100">
                      {fb.userRole || 'Educator'} 
                      {fb.userId && <span className="text-slate-500 font-normal ml-2">ID: {fb.userId.slice(0,8)}...</span>}
                    </div>
                    <div className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date((fb.createdAt as any)?.toMillis?.() || fb.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 text-sm whitespace-pre-wrap">{fb.content}</p>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
