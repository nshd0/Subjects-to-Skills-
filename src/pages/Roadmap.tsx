import React from 'react';
import { motion } from 'motion/react';
import { GitPullRequest, Database, Bot, Users, LayoutDashboard, Target, BookOpen, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Link } from 'react-router-dom';
import { FileSearch } from 'lucide-react';

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

  const milestones = [
    {
      phase: "Phase 1",
      status: "Completed",
      title: "v0.1: Structural Alignment & Prototyping",
      date: "Current",
      icon: <Target className="h-5 w-5 text-emerald-500" />,
      features: [
        "Establish 5+3+3+4 Stage Architecture",
        "Subject-to-Skill Core Philosophy",
        "NCF-SE 2023 Compliance Auditing",
        "Granular Grade-Level Mapping",
        "Standard Learning Hierarchy UI"
      ]
    },
    {
      phase: "Phase 2",
      status: "Completed",
      title: "v0.2: Database Integration & Data Model",
      date: "Coming Soon",
      icon: <Database className="h-5 w-5 text-indigo-500" />,
      features: [
        "Firestore Backend Integration",
        "Complete CBSE Syllabus Data Ingestion",
        "Dynamic Grade-by-Grade Content Serving",
        "User Authentication (Teachers & Admins)",
        "Curriculum Versioning System"
      ]
    },
    {
      phase: "Phase 3",
      status: "In Progress",
      title: "v0.3: Teacher Workspaces & AI Assistance",
      date: "Future",
      icon: <Bot className="h-5 w-5 text-amber-500" />,
      features: [
        "Personalized Teacher Dashboards",
        "Interactive Lesson Plan Builder",
        "AI-Assisted Activity Generation (Gemini API)",
        "Save & Share Custom Frameworks",
        "Automated Formative Assessment Prompts"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        
        <div className="text-center space-y-4">
          <Badge className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400 hover:bg-indigo-100 border-none">
            The Journey to v1.0
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Development Roadmap
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            See what we've accomplished and where we're heading next in our mission to build a fully NCF-SE 2023 & CBSE 2026-27 compliant curriculum mapping tool.
          </p>
          <div className="pt-4 flex justify-center">
            <Link to="/audit" className="inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 h-11 px-6 py-2 shadow-sm border border-transparent">
              <FileSearch className="mr-2 h-5 w-5" />
              Read the v0.2 Baseline Audit Report
            </Link>
          </div>
        </div>


        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 mt-16 space-y-12 pb-8">
          {milestones.map((milestone, index) => (
            <motion.div key={index} variants={itemVariants} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-[13px] top-1.5 h-6 w-6 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm">
                <div className={`h-2.5 w-2.5 rounded-full ${milestone.status === 'Completed' ? 'bg-emerald-500' : milestone.status === 'In Progress' ? 'bg-indigo-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-700'}`} />
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">{milestone.phase}</span>
                      <Badge variant="outline" className={
                        milestone.status === 'Completed' ? 'text-emerald-600 border-emerald-200 bg-emerald-50 dark:bg-emerald-950/30 dark:border-emerald-900/50 dark:text-emerald-400' :
                        milestone.status === 'In Progress' ? 'text-indigo-600 border-indigo-200 bg-indigo-50 dark:bg-indigo-950/30 dark:border-indigo-900/50 dark:text-indigo-400' :
                        'text-slate-600 border-slate-200 bg-slate-50 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-400'
                      }>
                        {milestone.status}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 flex items-center gap-3">
                      {milestone.icon}
                      {milestone.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-sm font-medium bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg">
                    <Clock className="h-4 w-4" />
                    {milestone.date}
                  </div>
                </div>

                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  {milestone.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-slate-700 dark:text-slate-300">
                      <div className={`mt-1 h-1.5 w-1.5 rounded-full shrink-0 ${milestone.status === 'Completed' ? 'bg-emerald-500' : 'bg-indigo-500'}`} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={itemVariants} className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-8 text-center mt-12">
          <GitPullRequest className="h-12 w-12 text-indigo-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Want to contribute to v0.2?</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
            We are actively looking for feedback from curriculum designers, teachers, and school leaders. Use the feedback button in the bottom right to share your thoughts.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
