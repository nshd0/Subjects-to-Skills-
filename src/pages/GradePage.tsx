import React, { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, BookOpen, Compass, Layers, Target, 
  Sparkles, Award, ShieldAlert, CheckCircle2, FileText, Download, 
  HelpCircle, ExternalLink, Calendar, UserCheck 
} from 'lucide-react';
import { gradesData } from '@/data/grades';
import { teacherResources } from '@/data/resources';
import { stages } from '@/data/curriculum';
import { subjectMaps } from '@/data/subjectMaps';
import { activitiesData } from '@/data/activities';
import { sampleRubricsData, evidenceItemsData } from '@/data/rubrics';
import { SubjectSkillMapCard } from '@/components/SubjectSkillMapCard';
import { ActivityCard } from '@/components/ActivityCard';
import { SkillRubric } from '@/components/SkillRubric';
import { ContentReviewPanel } from '@/components/ContentReviewPanel';

export function GradePage() {
  const { gradeId } = useParams<{ gradeId: string }>();
  
  const grade = useMemo(() => gradesData.find(g => g.id === gradeId), [gradeId]);
  const stage = useMemo(() => grade ? Object.values(stages).find(s => s.id === grade.stageId) : null, [grade]);

  const [activeEvidenceTab, setActiveEvidenceTab] = useState<'knowledge' | 'performance' | 'reflection'>('knowledge');

  // Filter subject maps for this grade
  const gradeMaps = useMemo(() => {
    return subjectMaps.filter(m => m.grade === grade?.name);
  }, [grade]);

  // Filter activities for this grade
  const gradeActivities = useMemo(() => {
    return activitiesData.filter(a => a.grade === grade?.name);
  }, [grade]);

  // Filter rubrics for this grade
  const gradeRubrics = useMemo(() => {
    return sampleRubricsData.filter(r => r.grade === grade?.name);
  }, [grade]);

  // Filter external resources for this grade
  const relevantResources = useMemo(() => {
    if (!grade || !stage) return [];
    return teacherResources.filter(res => {
      const stageMatch = Array.isArray(res.stage) 
        ? res.stage.includes(stage.name as any) 
        : res.stage === stage.name || res.stage === 'All Stages';
      const gradeMatch = !res.grades || res.grades.toLowerCase().includes(grade.name.toLowerCase()) || res.grades.includes(grade.id.replace('grade-', ''));
      return stageMatch && gradeMatch;
    });
  }, [grade, stage]);

  const anchorGrade = useMemo(() => {
    switch (grade?.stageId) {
      case 'foundational': return { id: 'grade-1', name: 'Grade 1' };
      case 'preparatory': return { id: 'grade-3', name: 'Grade 3' };
      case 'middle': return { id: 'grade-6', name: 'Grade 6' };
      case 'secondary': return { id: 'grade-9', name: 'Grade 9' };
      default: return { id: 'grade-3', name: 'Grade 3' };
    }
  }, [grade]);

  const isAnchor = grade ? grade.name === anchorGrade.name || grade.isFlagship : false;

  if (!grade || !stage) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Grade not found</h2>
        <Link to="/grades" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Explore All Grades
        </Link>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300 border-emerald-300';
      case 'reviewed': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 border-teal-300';
      case 'teacher-pilot': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border-amber-300';
      case 'in-development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 border-blue-300';
      case 'planned': return 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300 border-slate-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24">
      {/* Top Breadcrumb & Navigation */}
      <div className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
            <Link to="/grades" className="hover:text-indigo-600 dark:hover:text-indigo-400 flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" /> All Grades
            </Link>
            <span>/</span>
            <Link to={`/stage/${stage.id}`} className="hover:text-indigo-600 dark:hover:text-indigo-400">
              {stage.title}
            </Link>
            <span>/</span>
            <span className="font-semibold text-slate-900 dark:text-white">{grade.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusBadge(grade.status)}`}>
              Status: {grade.status.replace('-', ' ')}
            </span>
            <span className="text-slate-400">·</span>
            <span className="text-slate-500 dark:text-slate-400">Updated: {grade.lastUpdated}</span>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
                {stage.title}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                Ages {grade.ageRange}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300">
                CBSE/NCERT Aligned
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              {grade.name} Curriculum & Skill Navigator
            </h1>

            <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
              {grade.learningPurpose}
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation Jump Bar (Mobile & Desktop Accessible) */}
      <div className="sticky top-0 z-20 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-xs print:hidden">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-xs font-semibold text-slate-600 dark:text-slate-300">
            <span className="text-[11px] font-bold text-slate-400 uppercase mr-1 shrink-0">Sections:</span>
            <a href="#grade-overview" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">1. Overview</a>
            <a href="#developmental-focus" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">2. Focus</a>
            <a href="#subject-landscape" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">3. Subjects</a>
            <a href="#observable-skills" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">4. Skills</a>
            <a href="#subject-skill-map" className="px-2.5 py-1 rounded-md hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-indigo-950/50 whitespace-nowrap">5. Hierarchy Map</a>
            <a href="#classroom-activities" className="px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 whitespace-nowrap">6. Activities</a>
            <a href="#evidence-assessment" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">7. Assessment</a>
            <a href="#teacher-support" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">8. Support</a>
            <a href="#free-open-resources" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">9. Resources</a>
            <a href="#learning-progression" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">10. Progression</a>
            <a href="#feedback-review-status" className="px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 whitespace-nowrap">11. Governance</a>
          </div>
        </div>
      </div>

      {/* Main Content: 11 REQUIRED SECTIONS IN EXACT ORDER */}
      <div className="container mx-auto px-4 py-12 space-y-16 max-w-6xl">

        {/* SECTION 1: GRADE OVERVIEW */}
        <section id="grade-overview" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                1
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Grade Overview</h2>
                <p className="text-xs text-slate-500">Core structural metadata and developmental framing</p>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${getStatusBadge(grade.status)}`}>
              {grade.status.replace('-', ' ')}
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Target Grade & Cohort</span>
              <p className="font-semibold text-slate-900 dark:text-white text-base">{grade.name}</p>
              <p className="text-xs text-slate-500">Age Band: {grade.ageRange}</p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Pedagogical Stage</span>
              <p className="font-semibold text-slate-900 dark:text-white text-base">{stage.name} Stage</p>
              <p className="text-xs text-slate-500">{stage.ageRange}</p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Recommended Pedagogy</span>
              <p className="font-semibold text-slate-900 dark:text-white">{grade.pedagogy.join(', ')}</p>
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">Last Reviewed / Updated</span>
              <p className="font-semibold text-slate-900 dark:text-white">{grade.lastUpdated}</p>
              <p className="text-xs text-emerald-600 font-medium">Public v0.2 Preparation Release</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 grid md:grid-cols-2 gap-4 text-xs">
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-1">Prior-Learning Bridge:</strong>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {grade.previousGradeBridge.join('; ')}
              </p>
            </div>
            <div>
              <strong className="text-slate-800 dark:text-slate-200 block mb-1">Next-Grade Readiness Bridge:</strong>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {grade.nextGradeBridge.join('; ')}
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 2: DEVELOPMENTAL FOCUS */}
        <section id="developmental-focus" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
              2
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Developmental Focus</h2>
              <p className="text-xs text-slate-500">Cognitive, social-emotional, and physical growth targets</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {grade.developmentalFocus.map((focus, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-bold flex items-center justify-center text-sm">
                  {idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{focus}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Focuses on building authentic competency through active inquiry, practical interaction with materials, and collaborative peer learning.
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 3: PRIORITY SKILLS */}
        <section id="priority-skills" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
              3
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Priority Skills</h2>
              <p className="text-xs text-slate-500">Observable capabilities with demonstrable behavioral criteria</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {grade.prioritySkills.map((skill, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors space-y-2">
                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                  Priority Competency
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{skill}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Demonstrated when student independently formulates hypotheses, gathers evidence without prompting, and articulates rationale using appropriate terminology.
                </p>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 4: LEARNING AREAS AND SUBJECTS */}
        <section id="learning-areas" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                4
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Learning Areas and Subjects</h2>
                <p className="text-xs text-slate-500">Curricular domains mapped to national frameworks</p>
              </div>
            </div>
            <span className="text-xs text-slate-500">
              {gradeMaps.length} Learning Areas Fully Mapped
            </span>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {gradeMaps.map((m) => (
              <div key={m.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block">
                  {m.learningArea}
                </span>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{m.subject}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {m.curricularGoal}
                </p>
                <div className="pt-2 text-xs font-medium text-slate-500">
                  Key Concepts: {m.keyConcepts.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 5: KNOWLEDGE, COMPETENCY AND OUTCOME MAP */}
        <section id="subject-skill-map" className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                  5
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Knowledge, Competency and Outcome Map
                  </h2>
                  <p className="text-xs text-slate-500">
                    Rigorous 21-level hierarchy connecting subject knowledge to visible capability
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300">
                Subjects Organise Knowledge · Skills Organise Capability
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {gradeMaps.length > 0 ? (
                gradeMaps.map(mapping => (
                  <SubjectSkillMapCard key={mapping.id} mapping={mapping} />
                ))
              ) : (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-4 max-w-2xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mx-auto">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Curriculum Hierarchy Mapping in Preparation for {grade.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Subjects2Skills establishes full 21-level pedagogical depth on Stage Anchor Grades first before expanding across all adjacent grades. 
                      You can test the complete, classroom-ready curriculum map on our anchor grade for this stage.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    <Link
                      to={`/grade/${anchorGrade.id}#subject-skill-map`}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center gap-1.5 min-h-[40px]"
                    >
                      <span>Explore Anchor Pathway ({anchorGrade.name})</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#feedback-review-status"
                      className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs font-medium rounded-xl transition-colors min-h-[40px] flex items-center"
                    >
                      Suggest a Mapping for {grade.name}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* SECTION 6: CLASSROOM ACTIVITIES */}
        <section id="classroom-activities" className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                  6
                </span>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                    Classroom Activities & Flagship Projects
                  </h2>
                  <p className="text-xs text-slate-500">
                    Subject-rooted, grade-appropriate lesson plans with step-by-step guidance
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                {gradeActivities.length} Classroom Plans Available
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {gradeActivities.length > 0 ? (
                gradeActivities.map((activity, idx) => (
                  <ActivityCard 
                    key={activity.id} 
                    activity={activity} 
                    isFlagship={idx === 0} 
                  />
                ))
              ) : (
                <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/30 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 space-y-4 max-w-2xl mx-auto">
                  <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-slate-900 dark:text-white">
                      Flagship Classroom Activities in Development for {grade.name}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      Classroom-ready lesson plans with step-by-step guidance and printable templates are published on stage anchor grades. Test our complete lesson plans on <strong>{anchorGrade.name}</strong> or contribute an activity below.
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
                    <Link
                      to={`/grade/${anchorGrade.id}#classroom-activities`}
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs flex items-center gap-1.5 min-h-[40px]"
                    >
                      <span>View {anchorGrade.name} Flagship Activities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <a
                      href="#feedback-review-status"
                      className="px-4 py-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-750 text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs font-medium rounded-xl transition-colors min-h-[40px] flex items-center"
                    >
                      Contribute an Activity Plan
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>


        {/* SECTION 7: EVIDENCE AND ASSESSMENT */}
        <section id="evidence-assessment" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                7
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Evidence and Assessment System
                </h2>
                <p className="text-xs text-slate-500">
                  Observable evidence types and progression rubrics (Emerging → Developing → Proficient → Transfer)
                </p>
              </div>
            </div>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              Assesses Performance, Not Personality
            </span>
          </div>

          {/* Three Evidence Types Tabs */}
          <div className="space-y-4">
            <div className="flex border-b border-slate-200 dark:border-slate-800 text-xs font-semibold">
              <button
                onClick={() => setActiveEvidenceTab('knowledge')}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeEvidenceTab === 'knowledge'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                1. Knowledge Evidence
              </button>
              <button
                onClick={() => setActiveEvidenceTab('performance')}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeEvidenceTab === 'performance'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                2. Performance Evidence
              </button>
              <button
                onClick={() => setActiveEvidenceTab('reflection')}
                className={`py-2 px-4 border-b-2 transition-colors ${
                  activeEvidenceTab === 'reflection'
                    ? 'border-indigo-600 text-indigo-600 dark:text-indigo-400'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                3. Reflection Evidence
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {evidenceItemsData
                .filter(ev => ev.category === activeEvidenceTab)
                .map(item => (
                  <div key={item.id} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                    <div className="pt-2 border-t border-slate-200 dark:border-slate-700">
                      <strong className="text-slate-700 dark:text-slate-300 block mb-1">Authentic Classroom Examples:</strong>
                      <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-400">
                        {item.examples.map((ex, i) => (
                          <li key={i}>{ex}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {/* Skill Rubric for this Grade */}
          {gradeRubrics.length > 0 ? (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-indigo-600" />
                Observable Skill Progression Rubric ({grade.name})
              </h3>
              {gradeRubrics.map(rubric => (
                <SkillRubric key={rubric.id} rubric={rubric} />
              ))}
            </div>
          ) : (
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="p-6 bg-slate-50/70 dark:bg-slate-800/30 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <Award className="w-4 h-4 text-indigo-600" />
                    Observable Progression Rubric for {grade.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xl">
                    Specific 4-level observable performance rubrics (Emerging → Developing → Proficient → Transfer) are anchored across key stages. Explore the stage rubric on {anchorGrade.name} or browse the full rubric repository.
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/grade/${anchorGrade.id}#evidence-assessment`}
                    className="px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-lg transition-colors min-h-[40px] flex items-center"
                  >
                    View {anchorGrade.name} Rubric
                  </Link>
                  <Link
                    to="/assessment"
                    className="px-3.5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg hover:bg-slate-50 transition-colors min-h-[40px] flex items-center"
                  >
                    All Rubrics
                  </Link>
                </div>
              </div>
            </div>
          )}
        </section>


        {/* SECTION 8: TEACHER SUPPORT */}
        <section id="teacher-support" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
              8
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Teacher Support</h2>
              <p className="text-xs text-slate-500">Planning aids, differentiation strategies, and low-resource adaptations</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Classroom Setup & Management</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Establish 4-student collaborative table clusters. Use designated material managers and timekeepers to ensure activities transition smoothly in standard 40-minute Indian school periods.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Differentiation & Multilingual Support</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Encourage students to conduct preliminary discussions in their home or regional languages before recording final written responses in standard school language mediums.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">Low-Resource Classroom Kits</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All flagship activities can be adapted to chalkboards, slates, discarded cardboard, and student notebooks without requiring costly pre-printed kits or digital devices.
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 9: FREE AND OPEN RESOURCES */}
        <section id="free-open-resources" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
                9
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">Free and Open Resources</h2>
                <p className="text-xs text-slate-500">Official portals, open textbooks, and classroom-tested tools</p>
              </div>
            </div>
            <span className="text-xs text-slate-500">{relevantResources.length} Filtered Guides</span>
          </div>

          {/* Mandatory External Resource Safety Notice */}
          <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Teacher Safety & Privacy Notice:</strong> Teachers should review all external tools, resources and links for age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relevantResources.slice(0, 6).map(res => (
              <div key={res.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-800/20 text-xs space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 uppercase">
                      {res.type}
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold text-[11px]">
                      {res.cost}
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1">{res.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400 line-clamp-2">{res.whatItIs}</p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    {res.lowResourceFriendly ? '✓ Low-Resource' : 'Standard'}
                  </span>
                  {res.url && (
                    <a 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline flex items-center gap-1"
                    >
                      Open Link <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 10: LEARNING PROGRESSION */}
        <section id="learning-progression" className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
              10
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">Learning Progression</h2>
              <p className="text-xs text-slate-500">Vertical continuity from preceding learning into subsequent mastery</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Prior Learning */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Prior Foundation</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">What Students Bring</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {grade.previousGradeBridge.join('; ')}
              </p>
            </div>

            {/* Current Grade Mastery */}
            <div className="p-5 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2 ring-2 ring-indigo-500/20">
              <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">Current Mastery</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{grade.name} Focus</h4>
              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                {grade.prioritySkills.join(' · ')}
              </p>
            </div>

            {/* Next Grade Readiness */}
            <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Next Horizon</span>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Ready For Next Grade</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {grade.nextGradeBridge.join('; ')}
              </p>
            </div>
          </div>
        </section>


        {/* SECTION 11: FEEDBACK AND REVIEW STATUS */}
        <section id="feedback-review-status" className="space-y-6">
          <div className="flex items-center gap-2.5 mb-2">
            <span className="w-8 h-8 rounded-lg bg-indigo-600 text-white font-bold text-sm flex items-center justify-center">
              11
            </span>
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Feedback and Review Status
              </h2>
              <p className="text-xs text-slate-500">
                Transparent content governance and public educator review panel
              </p>
            </div>
          </div>

          <ContentReviewPanel
            gradeId={grade.id}
            gradeName={grade.name}
            contentStatus={grade.status}
            lastUpdated={grade.lastUpdated}
            initialReviewStatus="teacher-pilot-in-progress"
          />
        </section>

      </div>
    </div>
  );
}
