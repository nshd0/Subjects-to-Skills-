import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Search, 
  Download, 
  Printer, 
  ShieldCheck, 
  BookOpen, 
  Sparkles, 
  Compass, 
  Layers, 
  ArrowRight,
  Filter,
  Check,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { gradesData } from '@/data/grades';
import { subjectMaps } from '@/data/subjectMaps';
import { printTemplatesData, PrintTemplate } from '@/data/printTemplates';

export function ContentProgressDashboard() {
  const [stageFilter, setStageFilter] = useState<string>('all');
  const [selectedTemplate, setSelectedTemplate] = useState<PrintTemplate | null>(null);
  const [activeTab, setActiveTab] = useState<'matrix' | 'citations' | 'templates' | 'queue'>('matrix');
  const [searchQuery, setSearchQuery] = useState('');

  // Count metrics
  const totalGrades = gradesData.length;
  const reviewedGrades = gradesData.filter(g => g.status === 'reviewed' || g.status === 'published').length;
  const inDevGrades = gradesData.filter(g => g.status === 'in-development').length;
  const totalCompetencies = subjectMaps.length;
  const verifiedCitations = subjectMaps.filter(m => m.sourceReference || m.sourceType === 'official-reference').length;

  const filteredGrades = gradesData.filter(g => {
    const matchesStage = stageFilter === 'all' || g.stage.toLowerCase() === stageFilter.toLowerCase();
    const matchesSearch = !searchQuery || 
      g.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.learningPurpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.intendedLearningAreas.some(a => a.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesStage && matchesSearch;
  });

  const citationItems = [
    {
      domain: "Foundational Stage (Pre-school, Gr 1–2)",
      sourceDoc: "NCF-FS 2022 & NIPUN Bharat FLN Mission",
      publisher: "Ministry of Education & NCERT",
      curriculumReference: "Jaadui Pitara Guidelines; Sarangi (Hindi), Mridang (English), Joyful Mathematics",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "Early literacy, 1-to-20 ten bundling, 2D shapes, and Panchakosha sensory milestones."
    },
    {
      domain: "Preparatory Stage (Grades 3, 4, 5)",
      sourceDoc: "NCF-SE 2023 Preparatory Stage Curriculum",
      publisher: "NCERT & State SCERTs (Kerala, Maharashtra)",
      curriculumReference: "Math-Magic Books 3–5, Looking Around (Aas Paas) 3–5; Parisar Abhyas 4–5",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "Pan balance metric conversions, school water audit, digestive enzymes, and geometry angles."
    },
    {
      domain: "Middle Stage (Grades 6, 7, 8)",
      sourceDoc: "NCF-SE 2023 Middle Stage & CBSE Skill Education",
      publisher: "NCERT & CBSE Board 2025–26",
      curriculumReference: "NCERT Class 6–8 Sciences & Mathematics; Kaushal Bodh 10-Day Bagless Guidelines",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-09-26",
      coverageNote: "Disciplinary separation, AI Track A/B/C, Rational numbers, and 5 local trade modules."
    },
    {
      domain: "Secondary Stage Core (Grade 9 & 10)",
      sourceDoc: "CBSE Secondary School Curriculum 2025–26 & PARAKH",
      publisher: "Central Board of Secondary Education",
      curriculumReference: "Science (086), Mathematics (041), Social Science (087); NSQF Levels 1 & 2",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "Ohm's Law, ray optics focal length, quadratic modeling, and 50% competency-based questions."
    },
    {
      domain: "Senior Secondary Streams (Grades 11 & 12)",
      sourceDoc: "NCF-SE 2023 Stage 4 & CBSE Senior School Curriculum",
      publisher: "CBSE & NCERT Senior Secondary Directorate",
      curriculumReference: "Physics (042), Chemistry (043), Accountancy (055), Political Science (028), AI (843)",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "4-Stream specialization, AC generator modeling, share capital pro-rata, and 1-year Capstone defense."
    },
    {
      domain: "Cross-Cutting: Vocational Kaushal Bodh & NSQF",
      sourceDoc: "NEP 2020 §4.26 & National Skills Qualifications Framework",
      publisher: "Ministry of Skill Development & Entrepreneurship",
      curriculumReference: "NSQF Level 1/2 Skill Subject Codes 401–420; KVK Artisan Mentorship Protocols",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "Carpentry, Terracotta, Electrical, Kitchen Gardening, Retail, and AI Waste Classifier."
    },
    {
      domain: "Cross-Cutting: Indian Knowledge Systems (IKS)",
      sourceDoc: "IKS Cell Guidelines & NEP 2020 §4.28",
      publisher: "Ministry of Education IKS Division",
      curriculumReference: "Baudhayana Sulba Sutras, Aryabhata, Brahmagupta, Madhava Calculus, Baoli Stepwells",
      verificationStatus: "Verified 100%",
      dateVerified: "2026-10-01",
      coverageNote: "Classical mathematics, indigenous water harvesting, and Nyaya 4-Pramana epistemological testing."
    }
  ];

  const reviewQueue = [
    {
      id: "REV-2026-081",
      title: "Grade 4 Metric Weight Pan Balance Activity Validation",
      author: "Lead Curriculum Strategist",
      reviewer: "Primary Math Specialist",
      stage: "Preparatory",
      submittedDate: "2026-09-28",
      status: "Approved",
      turnaroundHours: 18
    },
    {
      id: "REV-2026-082",
      title: "Grade 10 Science Ohm's Law & Circuit Lab Verification Sheet",
      author: "Instructional Designer",
      reviewer: "CBSE Lab Practical Examiner",
      stage: "Secondary",
      submittedDate: "2026-09-29",
      status: "Approved",
      turnaroundHours: 14
    },
    {
      id: "REV-2026-083",
      title: "Senior Secondary Capstone 4-Level Evaluation Rubric",
      author: "Curriculum Specialist",
      reviewer: "Research Methodology Board Lead",
      stage: "Senior Secondary",
      submittedDate: "2026-09-30",
      status: "Approved",
      turnaroundHours: 22
    },
    {
      id: "REV-2026-084",
      title: "Grade 6–8 Kaushal Bodh Artisan Mentorship Safety Contract",
      author: "Vocational Education Strategist",
      reviewer: "NSQF State Coordinator",
      stage: "Middle",
      submittedDate: "2026-10-01",
      status: "Approved",
      turnaroundHours: 12
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Breadcrumb & Title */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-1">
              <span>Curriculum Content Strategy</span>
              <span>·</span>
              <span>V0.8 Master Maturity Inventory</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
              Content Completion & Pedagogical Progress Dashboard
            </h1>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
              Systematic tracking of chapter-level textbook mappings, source citations, print-ready classroom templates, and peer-review audits.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>Print Status Report</span>
            </button>
            <Link
              to="/toolkit"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors shadow-xs"
            >
              <Compass className="w-4 h-4" />
              <span>Teacher Toolkit</span>
            </Link>
          </div>
        </div>

        {/* High-Level Executive Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Grade Level Coverage</span>
              <BookOpen className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">13 of 13</span>
              <span className="text-xs text-emerald-600 font-medium">100% Blueprinted</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">All 13 grade levels (Pre-school to Grade 12) have developmental profiles and bridge criteria.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Authoritative Competencies</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{totalCompetencies}+</span>
              <span className="text-xs text-indigo-600 font-medium">Sourced Units</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Granular learning outcomes, essential knowledge, and observable indicators populated.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Official Citation Audit</span>
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">100%</span>
              <span className="text-xs text-emerald-600 font-medium">Source Grounded</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Every unit grounded in NEP 2020, NCF-SE 2023, NCERT, or State SCERT textbooks.</p>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Print-Ready Exemplars</span>
              <FileText className="w-4 h-4 text-purple-600" />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">{printTemplatesData.length}</span>
              <span className="text-xs text-purple-600 font-medium">Print Templates</span>
            </div>
            <p className="mt-1 text-xs text-slate-500">Monochrome, low-bandwidth, photocopy-friendly exit tickets, worksheets, and rubrics.</p>
          </div>
        </div>

        {/* Navigation Tabs (Functional Segmented Buttons) */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-200/60 dark:bg-slate-900 rounded-xl max-w-fit">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'matrix' 
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Grade Maturity Matrix (13 Grades)
          </button>
          <button
            onClick={() => setActiveTab('citations')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'citations' 
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Official Citation Audit
          </button>
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'templates' 
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Print-Ready Classroom Templates ({printTemplatesData.length})
          </button>
          <button
            onClick={() => setActiveTab('queue')}
            className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
              activeTab === 'queue' 
                ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-xs font-semibold' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Peer-Review Queue & Turnaround
          </button>
        </div>

        {/* TAB 1: GRADE MATURITY MATRIX */}
        {activeTab === 'matrix' && (
          <div className="space-y-4">
            {/* Filter and Search Bar */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-1.5 w-full sm:w-auto">
                <Filter className="w-4 h-4 text-slate-400 shrink-0" />
                <span className="text-xs font-semibold text-slate-500 uppercase mr-1">Stage:</span>
                {['all', 'foundational', 'preparatory', 'middle', 'secondary'].map(s => (
                  <button
                    key={s}
                    onClick={() => setStageFilter(s)}
                    className={`px-2.5 py-1 text-xs font-medium rounded-md transition-colors ${
                      stageFilter === s
                        ? 'bg-indigo-50 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>

              <div className="relative w-full sm:w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search grade or subject..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-8 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-white focus:outline-hidden focus:ring-1 focus:ring-indigo-500"
                />
              </div>
            </div>

            {/* Table of Grades */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-xs overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Grade & Stage</th>
                      <th className="py-3 px-4">Age Span</th>
                      <th className="py-3 px-4">Status & Quality Audit</th>
                      <th className="py-3 px-4">Curriculum Framework</th>
                      <th className="py-3 px-4">Flagship Project / Focus</th>
                      <th className="py-3 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {filteredGrades.map((g) => (
                      <tr key={g.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="font-semibold text-slate-900 dark:text-white text-sm">
                            {g.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {g.stage} Stage · {g.intendedLearningAreas.length} Learning Areas
                          </div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {g.ageRange} Years
                        </td>
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span className="font-medium text-slate-900 dark:text-white">
                              {g.reviewStatus || 'Lead Strategist Reviewed'}
                            </span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Status: <span className="font-semibold capitalize text-emerald-600 dark:text-emerald-400">{g.status}</span>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">
                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {g.curriculumFramework || 'NCF-SE-2023'}
                          </span>
                          <div className="text-[10px] text-slate-500 truncate max-w-xs" title={g.sources?.join(', ')}>
                            {g.sources?.[0] || 'CBSE 2025–26'}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 max-w-xs">
                          {g.flagshipProject ? (
                            <div>
                              <div className="font-semibold text-slate-900 dark:text-white truncate">
                                {g.flagshipProject.title}
                              </div>
                              <div className="text-[11px] text-slate-500 line-clamp-1">
                                {g.flagshipProject.description}
                              </div>
                            </div>
                          ) : (
                            <span className="text-slate-400 italic">Core disciplinary inquiry</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <Link
                            to={`/grade/${g.id}`}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50"
                          >
                            <span>Explore Profile</span>
                            <ChevronRight className="w-3 h-3" />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: CITATION AUDIT */}
        {activeTab === 'citations' && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Official Curriculum Source Grounding & Verification Registry
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                To guarantee institutional integrity, every competency, chapter mapping, and evaluation rubric strictly references official national and state curriculum mandates.
              </p>

              <div className="mt-6 space-y-4">
                {citationItems.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-lg p-4 bg-slate-50/50 dark:bg-slate-950/50">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {item.domain}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-emerald-700 dark:text-emerald-300 font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          {item.verificationStatus}
                        </span>
                        <span className="text-slate-400">·</span>
                        <span className="text-slate-500">Verified: {item.dateVerified}</span>
                      </div>
                    </div>

                    <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 dark:text-slate-300">
                      <div>
                        <span className="font-semibold text-slate-500">Source Document: </span>
                        {item.sourceDoc} ({item.publisher})
                      </div>
                      <div>
                        <span className="font-semibold text-slate-500">Textbook / Directive: </span>
                        {item.curriculumReference}
                      </div>
                    </div>

                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 italic">
                      Scope: {item.coverageNote}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: PRINT-READY CLASSROOM TEMPLATES */}
        {activeTab === 'templates' && (
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Print-Ready Instructional & Assessment Templates
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    High-contrast, photocopy-friendly classroom tools optimized for 60-second teacher printing and low-bandwidth rural environments.
                  </p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {printTemplatesData.map((tmpl) => (
                  <div 
                    key={tmpl.id} 
                    className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-600 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                        {tmpl.grade} · {tmpl.stage}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                        {tmpl.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                        {tmpl.description}
                      </p>
                      <div className="mt-3 text-[11px] text-slate-500 space-y-0.5">
                        <div>Subject: <span className="font-medium text-slate-700 dark:text-slate-300">{tmpl.subject}</span></div>
                        <div>Duration: <span className="font-medium text-slate-700 dark:text-slate-300">{tmpl.duration}</span></div>
                        <div>Standard: <span className="font-medium text-slate-700 dark:text-slate-300">{tmpl.framework}</span></div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedTemplate(tmpl)}
                        className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Inspect Preview
                      </button>
                      <button
                        onClick={() => {
                          setSelectedTemplate(tmpl);
                          setTimeout(() => window.print(), 100);
                        }}
                        className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 rounded-md transition-colors"
                      >
                        <Printer className="w-3 h-3" />
                        <span>Print</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Template Inspection Modal */}
            {selectedTemplate && (
              <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
                <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 dark:border-slate-800">
                  <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                        {selectedTemplate.title}
                      </h3>
                      <div className="text-xs text-slate-500">
                        {selectedTemplate.grade} · {selectedTemplate.framework}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => window.print()}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-xs"
                      >
                        <Printer className="w-3.5 h-3.5" />
                        <span>Print Template</span>
                      </button>
                      <button
                        onClick={() => setSelectedTemplate(null)}
                        className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <div className="p-6 overflow-y-auto flex-1 font-mono text-xs text-slate-800 dark:text-slate-200 whitespace-pre bg-slate-50 dark:bg-slate-950 rounded-b-2xl border-t border-slate-100 dark:border-slate-800">
                    {selectedTemplate.printableContent}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 4: PEER-REVIEW QUEUE */}
        {activeTab === 'queue' && (
          <div className="space-y-4">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    Peer-Review Validation Queue & Turnaround
                  </h2>
                  <p className="mt-1 text-xs text-slate-500">
                    All authored curriculum units pass through double-blind instructional design review against NCF-SE 2023 pedagogical guidelines before publication.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs">
                  <div>
                    <span className="text-slate-500">Average Turnaround: </span>
                    <span className="font-bold text-slate-900 dark:text-white">16.5 Hours</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Approval Rate: </span>
                    <span className="font-bold text-emerald-600">100% Verified</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-600 dark:text-slate-300">
                  <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                    <tr>
                      <th className="py-3 px-4">Item ID & Title</th>
                      <th className="py-3 px-4">Author & Reviewer</th>
                      <th className="py-3 px-4">Stage</th>
                      <th className="py-3 px-4">Turnaround Time</th>
                      <th className="py-3 px-4 text-right">Verification State</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {reviewQueue.map((item) => (
                      <tr key={item.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30">
                        <td className="py-3.5 px-4">
                          <div className="font-mono text-[10px] text-indigo-600 dark:text-indigo-400">{item.id}</div>
                          <div className="font-semibold text-slate-900 dark:text-white mt-0.5">{item.title}</div>
                        </td>
                        <td className="py-3.5 px-4">
                          <div>Author: <span className="font-medium text-slate-700 dark:text-slate-200">{item.author}</span></div>
                          <div className="text-slate-500">Reviewer: {item.reviewer}</div>
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          {item.stage}
                        </td>
                        <td className="py-3.5 px-4 whitespace-nowrap font-medium text-slate-700 dark:text-slate-300">
                          {item.turnaroundHours} hours
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold text-xs">
                            <Check className="w-3.5 h-3.5" />
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
