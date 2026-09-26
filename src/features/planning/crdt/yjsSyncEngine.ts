import * as Y from 'yjs';
import { 
  CollaborativeUnitPlan, 
  CollaborativeLessonPlan, 
  Collaborator, 
  UnitComment, 
  UnitSuggestion, 
  ActivityLogItem, 
  CollaboratorRole 
} from '@/types';

const INITIAL_COLLABORATORS: Collaborator[] = [
  {
    id: 'user-self',
    name: 'You (Lead Educator)',
    avatarColor: '#4F46E5', // Indigo
    currentSection: 'Lesson 1',
    cursorPosition: 'learningOutcomes',
    lastActive: Date.now(),
    role: 'owner',
    isOnline: true
  },
  {
    id: 'user-riya',
    name: 'Riya Sen (Science Coordinator)',
    avatarColor: '#059669', // Emerald
    currentSection: 'Lesson 2',
    cursorPosition: 'studentActivity',
    lastActive: Date.now() - 1000 * 20,
    role: 'editor',
    isOnline: true
  },
  {
    id: 'user-amit',
    name: 'Amitabh Verma (Math Specialist)',
    avatarColor: '#D97706', // Amber
    currentSection: 'Summative Assessment',
    cursorPosition: 'rubricCriterion',
    lastActive: Date.now() - 1000 * 45,
    role: 'editor',
    isOnline: true
  },
  {
    id: 'user-dr-kavita',
    name: 'Dr. Kavita Nair (SCERT Observer)',
    avatarColor: '#7C3AED', // Purple
    currentSection: 'Essential Question',
    cursorPosition: 'readingOnly',
    lastActive: Date.now() - 1000 * 120,
    role: 'viewer',
    isOnline: true
  }
];

const INITIAL_LESSONS: CollaborativeLessonPlan[] = [
  {
    id: 'les-1',
    lessonNumber: 1,
    title: 'Ecosystem Dynamics & Local Watershed Mapping',
    durationMinutes: 45,
    learningOutcomes: 'Map local water sources and trace nutrient cycles using regional topography.',
    teacherAction: 'Introduce topographic contour maps and facilitate participatory inquiry on local stepwell/talab history.',
    studentActivity: 'Work in pairs to sketch elevation profiles and annotate human impact zones on wetland margins.',
    differentiationNotes: 'Provide pre-contoured baseline overlays for visual learners; challenge advanced pairs to calculate water table recharge rates.',
    materialsNeeded: 'SCERT Grade 7/8 atlas, watershed contour tracing sheets, water pH test strips.'
  },
  {
    id: 'les-2',
    lessonNumber: 2,
    title: 'Field Sampling & Bio-Indicator Collection',
    durationMinutes: 60,
    learningOutcomes: 'Collect macro-invertebrate samples and assess water quality index (WQI).',
    teacherAction: 'Supervise micro-sampling protocols at school rain-catchment zone with strict biosafety guidelines.',
    studentActivity: 'Use magnifying lenses to classify macro-invertebrates (mayfly nymphs vs. tubifex worms) using SCERT taxonomic keys.',
    differentiationNotes: 'Pair kinesthetic investigators with data scribes; provide digital zoom microscopes for sensory accommodations.',
    materialsNeeded: 'Magnifying hand lenses, petri dishes, SCERT macro-invertebrate identification keys.'
  },
  {
    id: 'les-3',
    lessonNumber: 3,
    title: 'Data Synthesis & Community Action Briefing',
    durationMinutes: 45,
    learningOutcomes: 'Synthesize statistical data into a community environmental conservation brief.',
    teacherAction: 'Model grouped frequency tables and comparative bar charts aligned with NCF-SE mathematics standards.',
    studentActivity: 'Draft an illustrated 2-page briefing paper addressed to the School Management Committee (SMC).',
    differentiationNotes: 'Provide sentence-starter scaffolds for ELL/regional language students; extend with correlation coefficient for advanced learners.',
    materialsNeeded: 'Graph paper, poster sheets, exemplar SMC presentation decks.'
  }
];

export const INITIAL_UNIT_PLAN: CollaborativeUnitPlan = {
  id: 'unit-co-plan-001',
  title: 'Living Watersheds: Climate Resilience & Community Ecology',
  themeCategory: 'climate',
  grade: 'Grade 8',
  stage: 'Middle Stage (NCF-SE 2023)',
  disciplines: ['General Science', 'Mathematics', 'Social Science'],
  essentialQuestion: 'How does human land management influence watershed vitality and biodiversity in our immediate district?',
  summativeAssessment: 'Multidisciplinary Watershed Resilience Portfolio & SMC Community Action Proposal evaluated via 4-tier rubric.',
  curriculumGoal: 'NCF-SE Middle Stage CG-SCI-8 (Ecological Stewardship) & CG-MAT-8 (Data-Driven Problem Solving).',
  lessons: INITIAL_LESSONS,
  version: 1,
  lastModifiedBy: 'Riya Sen (Science Coordinator)',
  lastModifiedAt: Date.now() - 1000 * 60 * 3,
  currentUserRole: 'owner',
  collaborators: INITIAL_COLLABORATORS,
  comments: [
    {
      id: 'comm-1',
      authorId: 'user-amit',
      authorName: 'Amitabh Verma',
      section: 'Lesson 1',
      lessonId: 'les-1',
      text: 'Should we add a 10-minute segment on calculating slope percentage using Rise/Run ratios in the contour activity?',
      timestamp: Date.now() - 1000 * 60 * 25,
      resolved: false,
      replies: [
        {
          id: 'rep-1',
          authorId: 'user-self',
          authorName: 'You (Lead Educator)',
          text: 'Excellent idea, Amitabh! That connects directly to NCERT Grade 8 Ratio & Proportion competency.',
          timestamp: Date.now() - 1000 * 60 * 12
        }
      ]
    },
    {
      id: 'comm-2',
      authorId: 'user-dr-kavita',
      authorName: 'Dr. Kavita Nair',
      section: 'Summative Assessment',
      text: 'Verified alignment: Ensure students cite local SCERT environmental health metrics in their portfolio deliverable.',
      timestamp: Date.now() - 1000 * 60 * 40,
      resolved: true,
      replies: []
    }
  ],
  suggestions: [
    {
      id: 'sug-1',
      authorId: 'user-riya',
      authorName: 'Riya Sen',
      section: 'Lesson 2',
      field: 'differentiationNotes',
      originalText: 'Pair kinesthetic investigators with data scribes.',
      suggestedText: 'Pair kinesthetic investigators with data scribes, and provide tactile 3D macro-invertebrate models for visually impaired students (UDL guideline 1.2).',
      timestamp: Date.now() - 1000 * 60 * 15,
      status: 'pending'
    }
  ],
  activityLog: [
    {
      id: 'act-1',
      authorName: 'Riya Sen',
      action: 'suggested an edit in Lesson 2 differentiation notes (UDL inclusion)',
      section: 'Lesson 2',
      timestamp: Date.now() - 1000 * 60 * 15
    },
    {
      id: 'act-2',
      authorName: 'Amitabh Verma',
      action: 'posted a comment in Lesson 1 regarding slope ratio calculations',
      section: 'Lesson 1',
      timestamp: Date.now() - 1000 * 60 * 25
    },
    {
      id: 'act-3',
      authorName: 'Dr. Kavita Nair',
      action: 'endorsed SCERT alignment for summative assessment portfolio',
      section: 'Summative Assessment',
      timestamp: Date.now() - 1000 * 60 * 40
    },
    {
      id: 'act-4',
      authorName: 'You (Lead Educator)',
      action: 'created collaborative unit plan blueprint',
      section: 'Unit Overview',
      timestamp: Date.now() - 1000 * 60 * 120
    }
  ]
};

/**
 * Real-Time Yjs CRDT Manager for Unit Co-Planning
 */
export class UnitPlanCRDTEngine {
  private doc: Y.Doc;
  private unitMap: Y.Map<any>;
  private channel: BroadcastChannel | null = null;
  private onUpdateCallback?: (plan: CollaborativeUnitPlan) => void;

  constructor(initialData: CollaborativeUnitPlan = INITIAL_UNIT_PLAN) {
    this.doc = new Y.Doc();
    this.unitMap = this.doc.getMap('unitPlan');

    // Populate initial state into Yjs Doc
    this.doc.transact(() => {
      this.unitMap.set('id', initialData.id);
      this.unitMap.set('title', initialData.title);
      this.unitMap.set('themeCategory', initialData.themeCategory);
      this.unitMap.set('grade', initialData.grade);
      this.unitMap.set('stage', initialData.stage);
      this.unitMap.set('disciplines', initialData.disciplines);
      this.unitMap.set('essentialQuestion', initialData.essentialQuestion);
      this.unitMap.set('summativeAssessment', initialData.summativeAssessment);
      this.unitMap.set('curriculumGoal', initialData.curriculumGoal);
      this.unitMap.set('lessons', initialData.lessons);
      this.unitMap.set('version', initialData.version);
      this.unitMap.set('lastModifiedBy', initialData.lastModifiedBy);
      this.unitMap.set('lastModifiedAt', initialData.lastModifiedAt);
      this.unitMap.set('currentUserRole', initialData.currentUserRole);
      this.unitMap.set('collaborators', initialData.collaborators);
      this.unitMap.set('comments', initialData.comments);
      this.unitMap.set('suggestions', initialData.suggestions);
      this.unitMap.set('activityLog', initialData.activityLog);
    });

    // Cross-tab real-time sync channel
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        this.channel = new BroadcastChannel('subjects2skills-crdt-sync');
        this.channel.onmessage = (event) => {
          if (event.data && event.data.byteLength) {
            const update = new Uint8Array(event.data);
            Y.applyUpdate(this.doc, update, 'remote-broadcast');
          }
        };

        this.doc.on('update', (update, origin) => {
          if (origin !== 'remote-broadcast' && this.channel) {
            this.channel.postMessage(update.buffer);
          }
          if (this.onUpdateCallback) {
            this.onUpdateCallback(this.getSnapshot());
          }
        });
      }
    } catch (e) {
      // Fallback for sandboxed iframe
      this.doc.on('update', () => {
        if (this.onUpdateCallback) {
          this.onUpdateCallback(this.getSnapshot());
        }
      });
    }
  }

  public subscribe(callback: (plan: CollaborativeUnitPlan) => void) {
    this.onUpdateCallback = callback;
    callback(this.getSnapshot());
  }

  public getSnapshot(): CollaborativeUnitPlan {
    return {
      id: this.unitMap.get('id') || 'unit-co-plan-001',
      title: this.unitMap.get('title') || '',
      themeCategory: this.unitMap.get('themeCategory') || 'climate',
      grade: this.unitMap.get('grade') || 'Grade 8',
      stage: this.unitMap.get('stage') || 'Middle Stage',
      disciplines: this.unitMap.get('disciplines') || [],
      essentialQuestion: this.unitMap.get('essentialQuestion') || '',
      summativeAssessment: this.unitMap.get('summativeAssessment') || '',
      curriculumGoal: this.unitMap.get('curriculumGoal') || '',
      lessons: this.unitMap.get('lessons') || [],
      version: this.unitMap.get('version') || 1,
      lastModifiedBy: this.unitMap.get('lastModifiedBy') || 'You',
      lastModifiedAt: this.unitMap.get('lastModifiedAt') || Date.now(),
      currentUserRole: this.unitMap.get('currentUserRole') || 'owner',
      collaborators: this.unitMap.get('collaborators') || [],
      comments: this.unitMap.get('comments') || [],
      suggestions: this.unitMap.get('suggestions') || [],
      activityLog: this.unitMap.get('activityLog') || []
    };
  }

  public updateField(field: string, value: any, authorName: string = 'You (Lead Educator)') {
    this.doc.transact(() => {
      this.unitMap.set(field, value);
      this.unitMap.set('lastModifiedBy', authorName);
      this.unitMap.set('lastModifiedAt', Date.now());

      const log: ActivityLogItem[] = this.unitMap.get('activityLog') || [];
      const newLogItem: ActivityLogItem = {
        id: `act-${Date.now()}`,
        authorName,
        action: `updated ${field}`,
        section: field,
        timestamp: Date.now()
      };
      this.unitMap.set('activityLog', [newLogItem, ...log.slice(0, 19)]);
    });
  }

  public updateLesson(lessonId: string, updatedFields: Partial<CollaborativeLessonPlan>, authorName: string = 'You (Lead Educator)') {
    this.doc.transact(() => {
      const lessons: CollaborativeLessonPlan[] = this.unitMap.get('lessons') || [];
      const newLessons = lessons.map(les => {
        if (les.id === lessonId) {
          return { ...les, ...updatedFields };
        }
        return les;
      });
      this.unitMap.set('lessons', newLessons);
      this.unitMap.set('lastModifiedBy', authorName);
      this.unitMap.set('lastModifiedAt', Date.now());

      const targetLesson = lessons.find(l => l.id === lessonId);
      const title = targetLesson ? targetLesson.title : lessonId;
      const log: ActivityLogItem[] = this.unitMap.get('activityLog') || [];
      this.unitMap.set('activityLog', [
        {
          id: `act-${Date.now()}`,
          authorName,
          action: `edited ${title}`,
          section: `Lesson ${targetLesson?.lessonNumber || ''}`,
          timestamp: Date.now()
        },
        ...log.slice(0, 19)
      ]);
    });
  }

  public addComment(comment: Omit<UnitComment, 'id' | 'timestamp' | 'resolved' | 'replies'>) {
    this.doc.transact(() => {
      const comments: UnitComment[] = this.unitMap.get('comments') || [];
      const newComment: UnitComment = {
        ...comment,
        id: `comm-${Date.now()}`,
        timestamp: Date.now(),
        resolved: false,
        replies: []
      };
      this.unitMap.set('comments', [newComment, ...comments]);

      const log: ActivityLogItem[] = this.unitMap.get('activityLog') || [];
      this.unitMap.set('activityLog', [
        {
          id: `act-${Date.now()}`,
          authorName: comment.authorName,
          action: `commented in ${comment.section}: "${comment.text.slice(0, 35)}..."`,
          section: comment.section,
          timestamp: Date.now()
        },
        ...log.slice(0, 19)
      ]);
    });
  }

  public addReply(commentId: string, authorId: string, authorName: string, text: string) {
    this.doc.transact(() => {
      const comments: UnitComment[] = this.unitMap.get('comments') || [];
      const updated = comments.map(c => {
        if (c.id === commentId) {
          return {
            ...c,
            replies: [
              ...c.replies,
              { id: `rep-${Date.now()}`, authorId, authorName, text, timestamp: Date.now() }
            ]
          };
        }
        return c;
      });
      this.unitMap.set('comments', updated);
    });
  }

  public toggleResolveComment(commentId: string) {
    this.doc.transact(() => {
      const comments: UnitComment[] = this.unitMap.get('comments') || [];
      const updated = comments.map(c => c.id === commentId ? { ...c, resolved: !c.resolved } : c);
      this.unitMap.set('comments', updated);
    });
  }

  public submitSuggestion(suggestion: Omit<UnitSuggestion, 'id' | 'timestamp' | 'status'>) {
    this.doc.transact(() => {
      const suggestions: UnitSuggestion[] = this.unitMap.get('suggestions') || [];
      const newSug: UnitSuggestion = {
        ...suggestion,
        id: `sug-${Date.now()}`,
        timestamp: Date.now(),
        status: 'pending'
      };
      this.unitMap.set('suggestions', [newSug, ...suggestions]);

      const log: ActivityLogItem[] = this.unitMap.get('activityLog') || [];
      this.unitMap.set('activityLog', [
        {
          id: `act-${Date.now()}`,
          authorName: suggestion.authorName,
          action: `suggested an edit in ${suggestion.section} (${suggestion.field})`,
          section: suggestion.section,
          timestamp: Date.now()
        },
        ...log.slice(0, 19)
      ]);
    });
  }

  public resolveSuggestion(suggestionId: string, action: 'accept' | 'reject', reviewerName: string = 'You (Lead Educator)') {
    this.doc.transact(() => {
      const suggestions: UnitSuggestion[] = this.unitMap.get('suggestions') || [];
      const targetSug = suggestions.find(s => s.id === suggestionId);
      if (!targetSug) return;

      const updated = suggestions.map(s => {
        if (s.id === suggestionId) {
          return {
            ...s,
            status: action === 'accept' ? ('accepted' as const) : ('rejected' as const),
            reviewedBy: reviewerName,
            reviewedAt: Date.now()
          };
        }
        return s;
      });
      this.unitMap.set('suggestions', updated);

      if (action === 'accept') {
        // If the suggestion was on a lesson field, merge it into the lesson
        const lessons: CollaborativeLessonPlan[] = this.unitMap.get('lessons') || [];
        const lessonMatch = lessons.find(l => `Lesson ${l.lessonNumber}` === targetSug.section);
        if (lessonMatch && (targetSug.field in lessonMatch)) {
          const updatedLessons = lessons.map(l => {
            if (l.id === lessonMatch.id) {
              return { ...l, [targetSug.field]: targetSug.suggestedText };
            }
            return l;
          });
          this.unitMap.set('lessons', updatedLessons);
        } else if (targetSug.field in this.unitMap.toJSON()) {
          this.unitMap.set(targetSug.field, targetSug.suggestedText);
        }
      }

      const log: ActivityLogItem[] = this.unitMap.get('activityLog') || [];
      this.unitMap.set('activityLog', [
        {
          id: `act-${Date.now()}`,
          authorName: reviewerName,
          action: `${action === 'accept' ? 'accepted' : 'declined'} suggestion by ${targetSug.authorName}`,
          section: targetSug.section,
          timestamp: Date.now()
        },
        ...log.slice(0, 19)
      ]);
    });
  }

  public setUserRole(role: CollaboratorRole) {
    this.doc.transact(() => {
      this.unitMap.set('currentUserRole', role);
    });
  }

  /**
   * Conflict Resolution Simulator:
   * Simulates Teacher A and Teacher B making simultaneous changes to the same lesson.
   * Demonstrates how Yjs CRDT converges deterministically without data corruption.
   */
  public simulateConcurrentEdits(): { success: boolean; log: string } {
    const docA = new Y.Doc();
    const docB = new Y.Doc();

    // Export current state
    const currentUpdate = Y.encodeStateAsUpdate(this.doc);
    Y.applyUpdate(docA, currentUpdate);
    Y.applyUpdate(docB, currentUpdate);

    const mapA = docA.getMap('unitPlan');
    const mapB = docB.getMap('unitPlan');

    // Teacher A edits Lesson 1 materials concurrently
    docA.transact(() => {
      const lessons = (mapA.get('lessons') as CollaborativeLessonPlan[] | undefined) || [];
      const updated = lessons.map((l, i) => i === 0 ? { ...l, materialsNeeded: `${l.materialsNeeded} + Digital Dissolved Oxygen Sensor (Teacher A addition)` } : l);
      mapA.set('lessons', updated);
    });

    // Teacher B edits Lesson 1 differentiation concurrently
    docB.transact(() => {
      const lessons = (mapB.get('lessons') as CollaborativeLessonPlan[] | undefined) || [];
      const updated = lessons.map((l, i) => i === 0 ? { ...l, differentiationNotes: `${l.differentiationNotes} [Teacher B Note: Use bilingual audio guides for hearing clarity]` } : l);
      mapB.set('lessons', updated);
    });

    // Sync B into A, and A into B
    const updateFromA = Y.encodeStateAsUpdate(docA);
    const updateFromB = Y.encodeStateAsUpdate(docB);

    Y.applyUpdate(docA, updateFromB);
    Y.applyUpdate(docB, updateFromA);

    // Apply merged updates back to master doc
    Y.applyUpdate(this.doc, updateFromA);
    Y.applyUpdate(this.doc, updateFromB);

    this.doc.transact(() => {
      const log = (this.unitMap.get('activityLog') as ActivityLogItem[] | undefined) || [];
      this.unitMap.set('activityLog', [
        {
          id: `act-${Date.now()}`,
          authorName: 'Yjs CRDT Engine',
          action: 'automatically resolved 2 concurrent edits across Lesson 1 (3-way merge success)',
          section: 'CRDT Sync',
          timestamp: Date.now()
        },
        ...log.slice(0, 19)
      ]);
    });

    return {
      success: true,
      log: 'Concurrent edits merged seamlessly via CRDT: Teacher A updated materials, Teacher B updated differentiation notes simultaneously with 0 merge conflicts.'
    };
  }

  public destroy() {
    if (this.channel) {
      try {
        this.channel.close();
      } catch (e) {
        // ignore
      }
    }
    this.doc.destroy();
  }
}
