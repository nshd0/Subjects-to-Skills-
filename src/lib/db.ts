import { collection, getDocs, doc, setDoc, query, where, Timestamp } from 'firebase/firestore';
import { db } from './firebase';
import { SubjectMappingDoc } from '@/data/models';
import { SubjectMapping } from '@/data/curriculum';

/**
 * Fetch dynamic subject mappings from Firestore.
 */
export async function fetchSubjectMappings(stage: string): Promise<SubjectMapping[]> {
  try {
    const q = query(
      collection(db, 'subject_mappings'),
      where('stage', '==', stage)
    );
    const snap = await getDocs(q);
    
    // Convert backend documents to UI-compatible objects
    return snap.docs.map(doc => {
      const data = doc.data() as SubjectMappingDoc;
      return {
        id: doc.id,
        name: data.subject,
        ncfCurricularArea: data.ncfCurricularArea,
        applicableGrades: [data.grade],
        curricularGoal: data.curricularGoal,
        competency: data.competency,
        learningOutcome: data.learningOutcome,
        essentialKnowledge: data.essentialKnowledge,
        skills: data.skills,
        pedagogy: data.pedagogy,
        activities: data.activities,
        evidence: data.evidence,
        assessmentMethod: data.assessmentMethod,
        inclusionAndDifferentiation: data.inclusionAndDifferentiation,
        valuesAndDispositions: data.valuesAndDispositions,
        localIndianContext: data.localIndianContext,
        timeAndResources: data.timeAndResources,
        groupSize: data.groupSize,
        teacherPrep: data.teacherPrep,
        extensionActivity: data.extensionActivity,
        supportActivity: data.supportActivity,
        sourceLabel: "v0.2 Database"
      } as SubjectMapping;
    });
  } catch (error) {
    console.error("Error fetching mappings:", error);
    return []; // Return empty so it gracefully falls back to static if needed
  }
}
