import React, { useMemo, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, BookOpen, Layers, Target, 
  Sparkles, Award, ShieldAlert, CheckCircle2, Clock, 
  AlertCircle, MessageSquare, PlusCircle, Flag, X, 
  ExternalLink, Compass, Check, ShieldCheck, Calendar
} from 'lucide-react';
import { gradesData } from '@/data/grades';
import { stages } from '@/data/curriculum';
import { subjectMaps } from '@/data/subjectMaps';
import { activitiesData } from '@/data/activities';
import { sampleRubricsData } from '@/data/rubrics';
import { ActivityCard } from '@/components/ActivityCard';
import { SubjectSkillMapCard } from '@/components/SubjectSkillMapCard';
import { SkillRubric } from '@/components/SkillRubric';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { FEATURES } from '@/config/features';
import { Grade8Hub } from '@/features/planning/pages/Grade8Hub';

export function GradePage() {
  const { gradeId } = useParams<{ gradeId: string }>();

  if (FEATURES.ENABLE_GRADE8_FULL && (gradeId === '8' || gradeId === 'grade-8')) {
    return <Grade8Hub />;
  }
  const location = useLocation();

  // Safely find grade by id or slug alias
  const grade = useMemo(() => {
    if (!gradeId) return undefined;
    const clean = gradeId.toLowerCase().trim();
    return gradesData.find(g => 
      g.id === clean || 
      g.slug === clean || 
      g.id === `grade-${clean}` ||
      (clean === 'preschool' && g.id === 'pre-school') ||
      (clean === 'pre-school' && g.id === 'pre-school')
    );
  }, [gradeId]);

  const stage = useMemo(() => {
    if (!grade) return null;
    return Object.values(stages).find(s => s.id === grade.stageId) || null;
  }, [grade]);

  // Feedback modal state
  const [feedbackAction, setFeedbackAction] = useState<'resource' | 'activity' | 'issue' | null>(null);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackSubject, setFeedbackSubject] = useState('');

  // Relevant activities and subject maps if any
  const gradeActivities = useMemo(() => {
    if (!grade) return [];
    return activitiesData.filter(a => a.grade === grade.name || a.grade === grade.grade);
  }, [grade]);

  const gradeMaps = useMemo(() => {
    if (!grade) return [];
    return subjectMaps.filter(m => m.grade === grade.name || m.grade === grade.grade);
  }, [grade]);

  const gradeRubrics = useMemo(() => {
    if (!grade) return [];
    return sampleRubricsData.filter(r => r.grade === grade.name || r.grade === grade.grade);
  }, [grade]);

  if (!grade || !stage) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Grade Not Found</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
          The requested grade identifier "{gradeId}" does not match any current grade profile.
        </p>
        <Link 
          to="/grades" 
          className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline inline-flex items-center gap-2 min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Explore by Grade</span>
        </Link>
      </div>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published':
        return {
          label: 'Published',
          classes: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800',
          icon: CheckCircle2,
          explanation: 'Curriculum mapping, observable skills, classroom activities and assessment rubrics are published.'
        };
      case 'reviewed':
        return {
          label: 'Reviewed',
          classes: 'bg-teal-100 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300 border-teal-200 dark:border-teal-800',
          icon: CheckCircle2,
          explanation: 'Undergone expert educator review and ready for classroom pilots.'
        };
      case 'teacher-pilot':
        return {
          label: 'Teacher Pilot',
          classes: 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border-amber-200 dark:border-amber-800',
          icon: Sparkles,
          explanation: 'Currently undergoing live classroom piloting with feedback loops.'
        };
      case 'in-development':
        return {
          label: 'In Development',
          classes: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
          icon: Clock,
          explanation: 'Core learning pathways and priority skills are defined. Detailed classroom activities and assessment tools are in active drafting.'
        };
      case 'needs-update':
        return {
          label: 'Needs Update',
          classes: 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border-rose-200 dark:border-rose-800',
          icon: AlertCircle,
          explanation: 'Flagged for revision based on recent NCF or educator feedback.'
        };
      case 'planned':
      default:
        return {
          label: 'Planned',
          classes: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700',
          icon: AlertCircle,
          explanation: 'Framework, developmental focus, priority skills and intended learning areas are scoped on the v0.3 / v0.4 roadmap.'
        };
    }
  };

  const statusInfo = getStatusBadge(grade.status);
  const StatusIcon = statusInfo.icon;

  // Breadcrumb path logic
  const isFromStage = location.state?.from === 'stage';
  const breadcrumbItems = isFromStage
    ? [
        { label: 'Explore by Stage', path: '/stage/foundational' },
        { label: `${stage.name} Stage`, path: `/stage/${stage.id}` },
        { label: grade.name }
      ]
    : [
        { label: 'Explore by Grade', path: '/grades' },
        { label: `${stage.name} Stage`, path: `/stage/${stage.id}` },
        { label: grade.name }
      ];

  const currentIndex = useMemo(() => {
    if (!grade) return -1;
    return gradesData.findIndex(g => g.id === grade.id);
  }, [grade]);

  const prevGrade = currentIndex > 0 ? gradesData[currentIndex - 1] : null;
  const nextGrade = currentIndex >= 0 && currentIndex < gradesData.length - 1 ? gradesData[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-4">
      {/* Top Breadcrumb Navigation */}
      <div className="container mx-auto px-4 max-w-5xl mb-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      {/* Top Grade Navigator Bar (Previous / Next Grade) */}
      <div className="container mx-auto px-4 max-w-5xl mb-6">
        <nav aria-label="Grade progression navigation" className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-xs flex items-center justify-between gap-2">
          {prevGrade ? (
            <Link
              to={`/grade/${prevGrade.id}`}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-slate-800 dark:hover:text-indigo-300 transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Previous</span>
                <span className="font-bold text-slate-900 dark:text-white">{prevGrade.name}</span>
              </div>
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs text-slate-400 dark:text-slate-600 opacity-60 min-h-[44px]">
              <ArrowLeft className="w-4 h-4 shrink-0" />
              <div className="text-left">
                <span className="text-[10px] block uppercase tracking-wider font-semibold">Start</span>
                <span className="font-medium">Foundational</span>
              </div>
            </div>
          )}

          <div className="hidden md:flex items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold">
              Grade {currentIndex + 1} of {gradesData.length}
            </span>
            <Link
              to="/grades"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline px-2.5 py-1 rounded-lg hover:bg-indigo-50 dark:hover:bg-slate-800 transition-colors"
            >
              All Grades
            </Link>
          </div>

          {nextGrade ? (
            <Link
              to={`/grade/${nextGrade.id}`}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-indigo-50 hover:text-indigo-700 dark:hover:bg-slate-800 dark:hover:text-indigo-300 transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 text-right"
            >
              <div className="text-right">
                <span className="text-[10px] text-slate-400 block uppercase tracking-wider font-semibold">Next</span>
                <span className="font-bold text-slate-900 dark:text-white">{nextGrade.name}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-xs text-slate-400 dark:text-slate-600 opacity-60 min-h-[44px]">
              <div className="text-right">
                <span className="text-[10px] block uppercase tracking-wider font-semibold">End</span>
                <span className="font-medium">Grade 12 Complete</span>
              </div>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </div>
          )}
        </nav>
      </div>

      <div className="container mx-auto px-4 max-w-5xl space-y-10">
        
        {/* HERO BANNER */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                to={`/stage/${stage.id}`}
                className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40 hover:bg-indigo-100 transition-colors"
              >
                {stage.name} Stage
              </Link>
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                Ages {grade.ageRange}
              </span>
            </div>

            <span
              title={`Status: ${statusInfo.label} — ${statusInfo.explanation}`}
              className={`px-3 py-1 rounded-full text-xs font-bold border inline-flex items-center gap-1.5 ${statusInfo.classes}`}
            >
              <StatusIcon className="w-3.5 h-3.5" />
              <span>{statusInfo.label}</span>
            </span>
          </div>

          <div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {grade.name} Learning Profile
              </h1>
              
              {/* Trust/Alignment Badge */}
              <div className="group relative inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 dark:text-emerald-400 dark:bg-emerald-950/30 dark:border-emerald-800/50 px-3 py-1 rounded-full cursor-default w-max">
                <ShieldCheck className="w-3.5 h-3.5" />
                CBSE/NCERT Aligned
                
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all absolute top-full mt-2 left-0 sm:left-auto w-64 bg-slate-900 dark:bg-slate-800 text-white p-3 rounded-lg text-[11px] leading-relaxed shadow-xl z-50 font-medium">
                  Aligned to CBSE 2025–26, NCERT textbooks, and NCF 2023.
                  {grade.lastUpdated && (
                    <div className="mt-2 pt-2 border-t border-slate-700 flex items-center gap-1 text-slate-300">
                      <Calendar className="w-3 h-3" /> Last updated: {grade.lastUpdated}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mt-2 leading-relaxed">
              {grade.learningPurpose}
            </p>
          </div>

          {/* Transparent Content Status Explanation Banner */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <StatusIcon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Content Status: {statusInfo.label}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {statusInfo.explanation}
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-start gap-2 text-[11px] text-amber-800 dark:text-amber-300">
              <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
              <span>
                Content-status labels describe the maturity of Subjects2Skills material. They do not represent approval, endorsement or certification by CBSE, NCERT or any government body.
              </span>
            </div>
          </div>
        </div>

        {/* SECTION: DEVELOPMENTAL FOCUS */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Developmental Focus
              </h2>
              <p className="text-xs text-slate-500">
                Key cognitive, social and conceptual milestones for ages {grade.ageRange}
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {grade.developmentalFocus.map((focus, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-1.5"
              >
                <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 font-bold text-xs flex items-center justify-center">
                  {idx + 1}
                </div>
                <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 leading-snug">
                  {focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PRIORITY SKILLS */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                Priority Skills
              </h2>
              <p className="text-xs text-slate-500">
                Observable capabilities nurtured across subjects in {grade.name}
              </p>
            </div>
            <Link
              to="/skill-progression"
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden rounded-lg px-2 py-1"
            >
              <span>View All 21 Skills</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {grade.prioritySkills.map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/40 flex items-center gap-2 text-xs sm:text-sm font-semibold text-indigo-950 dark:text-indigo-200"
              >
                <Target className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: CBSE/NCERT ALIGNMENT */}
        {(grade.cbseSubjects || grade.ncrtBooks || grade.sources) && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                Curriculum Alignment
              </h2>
              <p className="text-xs text-slate-500">
                Official CBSE 2025–26 subjects and NCERT textbook references
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {grade.cbseSubjects && grade.cbseSubjects.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                    CBSE Core Subjects
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {grade.cbseSubjects.map((subject, idx) => (
                      <span key={idx} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700">
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {grade.ncrtBooks && grade.ncrtBooks.length > 0 && (
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 mb-3 uppercase tracking-wider">
                    NCERT Textbooks
                  </h3>
                  <ul className="space-y-2">
                    {grade.ncrtBooks.map((book, idx) => (
                      <li key={idx} className="flex flex-wrap items-center gap-2 text-xs">
                        <BookOpen className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-semibold text-slate-700 dark:text-slate-300">{book.subject}:</span>
                        <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1">
                          {book.title} <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {grade.sources && grade.sources.length > 0 && (
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                 <h3 className="text-xs font-bold text-slate-500 mb-2 uppercase tracking-wider">Primary Sources</h3>
                 <div className="flex flex-wrap gap-x-4 gap-y-1 text-[11px] text-slate-500">
                    {grade.sources.map((source, idx) => (
                      <span key={idx} className="flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {source}
                      </span>
                    ))}
                 </div>
              </div>
            )}
          </section>
        )}

        {/* SECTION: INTENDED LEARNING AREAS */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Intended Learning Areas
            </h2>
            <p className="text-xs text-slate-500">
              Curricular domains and subject disciplines aligned with NCF guidelines
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {grade.intendedLearningAreas.map((area, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/30 flex items-start gap-2.5"
              >
                <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                <span className="text-xs font-medium text-slate-800 dark:text-slate-200 leading-snug">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: RECOMMENDED PEDAGOGY */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Recommended Pedagogy
            </h2>
            <p className="text-xs text-slate-500">
              Developmentally responsive teaching practices for {stage.name} Stage
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {grade.pedagogy.map((ped, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
              >
                {ped}
              </span>
            ))}
          </div>
        </section>

        {/* SECTION: PEDAGOGICAL PROGRESSION BRIDGES */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Curriculum Continuity Bridges
            </h2>
            <p className="text-xs text-slate-500">
              Vertical articulation between previous foundation and next-grade readiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="text-slate-400 font-bold uppercase tracking-wider text-[10px] block">
                Prior Learning Foundation
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                What Students Bring
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {grade.previousGradeBridge && grade.previousGradeBridge.length > 0
                  ? grade.previousGradeBridge.join(' · ')
                  : grade.bringFromPrevious || 'Foundational readiness and exploratory curiosity.'}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-900/40 space-y-2">
              <span className="text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-wider text-[10px] block">
                Next Grade Horizon
              </span>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                Ready For Next Grade
              </h4>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                {grade.nextGradeBridge && grade.nextGradeBridge.length > 0
                  ? grade.nextGradeBridge.join(' · ')
                  : grade.readyForNext || 'Readiness for subsequent stage challenges.'}
              </p>
            </div>
          </div>
        </section>

        {/* EARLY PILOT CLASSROOM MATERIAL (Only rendered if genuine pilot content exists) */}
        {(gradeActivities.length > 0 || gradeMaps.length > 0 || grade.flagshipProject) && (
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-indigo-200 dark:border-indigo-900/60 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-200 inline-block mb-1">
                  Early Pilot Material
                </span>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  Classroom Activity & Subject Pilot
                </h2>
                <p className="text-xs text-slate-500">
                  Active pilot classroom material undergoing teacher testing
                </p>
              </div>
              <Link
                to="/activities"
                className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden rounded-lg px-2 py-1"
              >
                <span>Browse All Activities</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Flagship project */}
            {grade.flagshipProject && (
              <div className="p-5 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="font-bold text-slate-900 dark:text-white text-sm">
                    Flagship Project: {grade.flagshipProject.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {grade.flagshipProject.description}
                </p>
              </div>
            )}

            {/* Grade Activities */}
            {gradeActivities.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Classroom Lesson Activities ({gradeActivities.length})
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {gradeActivities.map(activity => (
                    <ActivityCard key={activity.id} activity={activity} />
                  ))}
                </div>
              </div>
            )}

            {/* Grade Rubrics */}
            {gradeRubrics.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Observable Skill Progression Rubric
                </h3>
                {gradeRubrics.map(rubric => (
                  <SkillRubric key={rubric.id} rubric={rubric} />
                ))}
              </div>
            )}
          </section>
        )}

        {/* SECTION: RELATED CURRICULUM & TEACHER SUPPORT HUBS */}
        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Related Curriculum & Teacher Support
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to={`/stage/${stage.id}`}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-xs flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                  Pedagogical Stage
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {stage.name} Stage
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  View complete stage outcomes, pedagogical principles and curriculum maps.
                </p>
              </div>
              <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 inline-flex items-center gap-1">
                <span>View Stage</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              to="/resources"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-xs flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  Teacher Support
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  Resource Hub
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Free NCERT, DIKSHA, PhET and NCF-aligned teaching resources.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 inline-flex items-center gap-1">
                <span>Open Hub</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              to="/toolkit"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-xs flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Planning Aids
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Teacher Toolkit
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Lesson plan templates, period timers, and classroom checklists.
                </p>
              </div>
              <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 inline-flex items-center gap-1">
                <span>Open Toolkit</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>

            <Link
              to="/assessment"
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition-all shadow-xs flex flex-col justify-between space-y-3 group"
            >
              <div className="space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  Evidence & Rubrics
                </span>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  Assessment Hub
                </h3>
                <p className="text-xs text-slate-500 line-clamp-2">
                  Triangulated assessment tools, rubrics and classroom evidence collection.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 inline-flex items-center gap-1">
                <span>Explore Hub</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>
        </section>

        {/* SECTION: FEEDBACK INVITATION (Exact Requirement) */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Help shape this grade map
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Which subject, activity, resource or teacher support would be most valuable for this grade?
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-1">
            <button
              onClick={() => setFeedbackAction('resource')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <PlusCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Suggest a resource</span>
            </button>

            <button
              onClick={() => setFeedbackAction('activity')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Suggest an activity</span>
            </button>

            <button
              onClick={() => setFeedbackAction('issue')}
              className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-2 min-h-[44px]"
            >
              <Flag className="w-3.5 h-3.5 text-rose-500" />
              <span>Report an issue</span>
            </button>
          </div>

          {/* Feedback Form Modal / Drawer */}
          {feedbackAction && (
            <div className="mt-4 p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  {feedbackAction === 'resource' && `Suggest a Resource for ${grade.name}`}
                  {feedbackAction === 'activity' && `Suggest a Classroom Activity for ${grade.name}`}
                  {feedbackAction === 'issue' && `Report an Issue for ${grade.name}`}
                </h3>
                <button
                  onClick={() => setFeedbackAction(null)}
                  className="p-1 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500"
                  aria-label="Close form"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label className="font-semibold block text-slate-700 dark:text-slate-300 mb-1">
                    Subject or Topic Area
                  </label>
                  <input
                    type="text"
                    value={feedbackSubject}
                    onChange={(e) => setFeedbackSubject(e.target.value)}
                    placeholder="e.g. Mathematics, Environmental Studies, Language..."
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="font-semibold block text-slate-700 dark:text-slate-300 mb-1">
                    Your Suggestion or Feedback
                  </label>
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    rows={3}
                    placeholder={`Tell us which ${feedbackAction} would best support teachers in ${grade.name}...`}
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-[11px] text-indigo-900 dark:text-indigo-300 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                  <span>
                    Feedback collection will be connected in a future update.
                  </span>
                </div>

                <div className="flex justify-end gap-2 pt-1">
                  <button
                    onClick={() => setFeedbackAction(null)}
                    className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors font-medium min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>

      </div>
    </div>
  );
}
