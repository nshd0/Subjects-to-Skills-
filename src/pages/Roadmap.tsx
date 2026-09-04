import React from 'react';
import { motion } from 'motion/react';
import { Database, Target, Clock, FileSearch, Layers, ShieldAlert, GitPullRequest, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gradesData } from '@/data/grades';

export function Roadmap() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'published': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 border-emerald-300';
      case 'reviewed': return 'bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300 border-teal-300';
      case 'teacher-pilot': return 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300 border-amber-300';
      case 'in-development': return 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 border-blue-300';
      case 'planned': return 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-300';
      case 'needs-update': return 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300 border-rose-300';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  const formatStatus = (status: string) => {
    return status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  // Detailed roadmap matrix data with requested columns
  const roadmapMatrix = gradesData.map(g => {
    const isAnchor = ['grade-3', 'grade-6', 'grade-7', 'grade-8', 'grade-9'].includes(g.id);
    let focus = 'Foundational framework scoping';
    let milestone = 'v0.4 Scoping';
    let reviewerStatus = 'Not yet reviewed';

    if (g.id === 'grade-3') {
      focus = 'Language, Mathematics, The World Around Us & Computational Thinking';
      milestone = 'Classroom pilot verification';
      reviewerStatus = 'Teacher pilot in progress';
    } else if (g.id === 'grade-6') {
      focus = 'Transition to Middle Stage, Inquiry, Communication & Vocational Exposure';
      milestone = 'Subject-specific review';
      reviewerStatus = 'Teacher pilot in progress';
    } else if (g.id === 'grade-7') {
      focus = 'Scientific Reasoning, Data Literacy & Prototyping';
      milestone = 'Lab activity refinement';
      reviewerStatus = 'Teacher pilot in progress';
    } else if (g.id === 'grade-8') {
      focus = 'AI Literacy, Algorithmic Bias, Privacy & Interdisciplinary Projects';
      milestone = 'Ethics canvas benchmarking';
      reviewerStatus = 'Teacher pilot in progress';
    } else if (g.id === 'grade-9') {
      focus = 'Disciplinary Depth, Secondary Research & Evidence-Based Policy Brief';
      milestone = 'Curriculum designer review';
      reviewerStatus = 'Teacher pilot in progress';
    } else if (g.status === 'in-development') {
      focus = 'Subject-to-skill draft mapping';
      milestone = 'Starter content publication';
      reviewerStatus = 'In internal review';
    } else {
      focus = 'Stage competency alignment';
      milestone = 'Subsequent release';
      reviewerStatus = 'Not yet reviewed';
    }

    return {
      ...g,
      currentFocus: focus,
      nextMilestone: milestone,
      reviewerStatus: reviewerStatus,
      isAnchor
    };
  });

  const milestones = [
    {
      phase: "Phase 1",
      status: "Completed",
      title: "v0.1: Structural Alignment & Prototyping",
      date: "Past",
      icon: <Target className="h-5 w-5 text-emerald-500" />,
      features: [
        "Established 5+3+3+4 Stage Architecture",
        "Subject-to-Skill Core Philosophy",
        "NCF-SE Alignment & Stage Bridges",
        "Initial Curricular Mappings"
      ]
    },
    {
      phase: "Phase 2",
      status: "Current Release",
      title: "v0.2: Preparation for Grade-wise Architecture",
      date: "September 2026",
      icon: <Database className="h-5 w-5 text-indigo-500" />,
      features: [
        "Grade Navigator and Dashboards (Pre-K to 12)",
        "Unified 21-Level Subject-to-Skill Data Hierarchy",
        "Rich Flagship Activities for Anchor Grades (3, 6, 7, 8, 9)",
        "4-Level Observable Skill Progression Rubrics",
        "Educator Content Review Panel & Governance",
        "Triangulated Assessment Hub (Knowledge, Performance, Reflection)"
      ]
    },
    {
      phase: "Phase 3",
      status: "Target Release",
      title: "v0.3: Grade-wise Curriculum Implementation",
      date: "Upcoming",
      icon: <Layers className="h-5 w-5 text-amber-500" />,
      features: [
        "Complete Subject-to-Skill Mapping across all 15 Grades",
        "Expanded Classroom Activity Bank with Community Contributions",
        "Downloadable Assessment Worksheets & Rubrics",
        "Multilingual Vernacular Support & Regional Curriculum Bridges"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Clock className="w-3.5 h-3.5" />
            Release Roadmap
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            v0.3 Content Roadmap
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400">
            Tracking the transition from a stage-based conceptual framework to grade-wise curriculum implementation across Indian K–12.
          </p>
        </div>

        {/* Mandatory Roadmap Callout */}
        <div className="p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 text-indigo-950 dark:text-indigo-200 shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Roadmap Commitment
            </span>
            <h3 className="text-lg font-bold">
              "v0.3 will focus on quality-checked grade-wise maps, starting with anchor grades and expanding through teacher feedback."
            </h3>
            <p className="text-xs text-indigo-800 dark:text-indigo-300">
              We never fabricate full coverage metrics. Each grade advances through transparent, verified review stages.
            </p>
          </div>
          <Link
            to="/grades"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-xs hover:bg-indigo-700 transition-colors shadow-sm"
          >
            Explore Grade Dashboards →
          </Link>
        </div>

        {/* Mandatory Trust Statement */}
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-3">
          <ShieldAlert className="w-4.5 h-4.5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong>Trust & Quality Statement:</strong> Content-status labels describe the maturity of Subjects2Skills material. 
            They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body.
          </p>
        </div>

        {/* RESPONSIVE MATRIX: Stage → Grade → Current Content Status → Current Focus → Next Milestone → Reviewer Status → Last Updated */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs">
          <div className="p-6 border-b border-slate-100 dark:border-slate-800">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Curriculum Matrix & Maturity Dashboard
            </h2>
            <p className="text-xs text-slate-500">
              Comprehensive stage-wise and grade-wise implementation progression.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
                  <th className="p-3.5 font-bold">Stage</th>
                  <th className="p-3.5 font-bold">Grade</th>
                  <th className="p-3.5 font-bold">Current Content Status</th>
                  <th className="p-3.5 font-bold min-w-[200px]">Current Focus</th>
                  <th className="p-3.5 font-bold min-w-[150px]">Next Milestone</th>
                  <th className="p-3.5 font-bold">Reviewer Status</th>
                  <th className="p-3.5 font-bold">Last Updated</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {roadmapMatrix.map((item) => (
                  <tr 
                    key={item.id} 
                    className={`hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors ${
                      item.isAnchor ? 'bg-indigo-50/20 dark:bg-indigo-950/10 font-medium' : ''
                    }`}
                  >
                    <td className="p-3.5 font-semibold text-slate-600 dark:text-slate-400">
                      {item.stage}
                    </td>
                    <td className="p-3.5 font-bold text-slate-900 dark:text-white">
                      <Link 
                        to={`/grade/${item.id}`} 
                        className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1"
                      >
                        {item.name}
                        {item.isAnchor && (
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300 ml-1">
                            Anchor
                          </span>
                        )}
                      </Link>
                    </td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-bold uppercase tracking-wider border ${getStatusBadge(item.status)}`}>
                        {formatStatus(item.status)}
                      </span>
                    </td>
                    <td className="p-3.5 text-slate-700 dark:text-slate-300">
                      {item.currentFocus}
                    </td>
                    <td className="p-3.5 text-slate-600 dark:text-slate-400">
                      {item.nextMilestone}
                    </td>
                    <td className="p-3.5 font-medium text-slate-700 dark:text-slate-300">
                      {item.reviewerStatus}
                    </td>
                    <td className="p-3.5 text-slate-500">
                      {item.lastUpdated}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Milestone Progression Cards */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Architecture & Release Roadmap
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{milestone.phase}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-semibold ${
                      milestone.status === 'Completed' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300' :
                      milestone.status === 'Current Release' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300' :
                      'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                    }`}>
                      {milestone.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    {milestone.icon}
                    {milestone.title}
                  </h3>
                  <span className="text-xs text-slate-500 block mt-1">{milestone.date}</span>

                  <ul className="space-y-2 mt-4 text-xs text-slate-600 dark:text-slate-400">
                    {milestone.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500">
                  {milestone.status === 'Current Release' ? 'Active preview release under community review' : 'Scheduled iteration'}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
