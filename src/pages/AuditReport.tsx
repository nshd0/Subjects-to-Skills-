import React from 'react';
import { motion } from 'motion/react';
import { FileSearch, CheckCircle2, AlertCircle, AlertTriangle, ArrowRight, ShieldCheck, Target, ListTodo } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export function AuditReport() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const requiredStructure = [
    "NCF Curricular Area", "Subject", "Stage", "Grade", 
    "Curricular Goal", "Competency", "Learning Outcome", 
    "Subject Knowledge", "Skill", "Pedagogy", "Activity", 
    "Evidence", "Assessment", "Inclusion"
  ];

  const priorities = [
    { title: "Grade-level landing pages", desc: "Stage navigation leads to specific grade-level views (e.g. Prep -> Grade 3, 4, 5)." },
    { title: "Standards-alignment field", desc: "Every subject explicitly lists NCF curricular area, CBSE subject, Stage, Grade, Goal, Competency, and LO." },
    { title: "Implementation panel", desc: "Activities show Duration, Group size, Resources, Prep, Accessibility, Knowledge, Output, Assessment, and Extensions." },
    { title: "Compliance dashboard", desc: "Public/Internal audit view showing Mapped, Partial, Missing, or Requires Verification for all standards." },
    { title: "Feedback & version control", desc: "Visible prototype status and 'Suggest an improvement' loop for educators." }
  ];

  const misalignments = [
    { title: "Generic skills vs subject competencies", desc: "Skills must attach to a specific subject competency and grade-level outcome, not float generically." },
    { title: "Activities vs pedagogy", desc: "Activities must show explicit prior knowledge, teaching steps, investigation, and feedback loops." },
    { title: "Projects vs disciplinary depth", desc: "Interdisciplinary projects require explicit subject-specific contributions (e.g. Math reasoning, Science investigation)." },
    { title: "Skills vs dispositions and values", desc: "Explicitly include empathy, inclusion, constitutional values, environmental responsibility, and scientific temper." },
    { title: "Assessment evidence vs assessment standards", desc: "Specify observable behaviours and performance levels (Emerging to Advanced) for evidence formats." }
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 hover:bg-amber-100 border-none">
            NCF-SE & CBSE 2026-27 Baseline
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Cross-Check Audit Report
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            The decisive evaluation of the v0.1 prototype driving the architectural requirements for Version 0.2.
          </p>
        </div>

        {/* Verdict */}
        <motion.div variants={itemVariants}>
          <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <CardHeader className="bg-slate-50 dark:bg-slate-950/50 border-b border-slate-100 dark:border-slate-800 pb-6">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <CardTitle className="text-2xl">Executive Verdict</CardTitle>
              </div>
              <p className="text-slate-600 dark:text-slate-400">
                The core concept remains sound, but the public site currently exposes mainly the framework landing page. The detailed stage pages and compliance evidence must be verifiable from accessible data. Therefore, the framework is <strong className="text-slate-900 dark:text-slate-100">conceptually aligned, but requires deep data modeling to be fully NCF-SE/CBSE-aligned.</strong>
              </p>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Conceptually Aligned
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• "Subjects are not removed" principle</li>
                    <li>• 5+3+3+4 stage structure & age bands</li>
                    <li>• Skill-centred outcomes philosophy</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-amber-700 dark:text-amber-400 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" /> v0.2 Data Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    <li>• Verifiable Subject mapping data</li>
                    <li>• Explicit Classroom activities</li>
                    <li>• Verifiable Evidence of learning</li>
                    <li>• Functional Teacher planning tools</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Required Structure */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Target className="h-6 w-6 text-indigo-500" /> Required Data Structure
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            The decisive NCF-SE 2023 test is whether each subject mapping follows this strict sequence. This flow replaces the simplistic Knowledge → Skill → Pedagogy pipeline.
          </p>
          <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
            {requiredStructure.map((step, idx) => (
              <React.Fragment key={step}>
                <Badge variant="secondary" className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 px-3 py-1.5 text-sm shadow-sm">
                  {step}
                </Badge>
                {idx < requiredStructure.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Priorities for v0.2 */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <ListTodo className="h-6 w-6 text-indigo-500" /> Priorities for v0.2
            </h2>
            <div className="space-y-3">
              {priorities.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Priority {idx + 1}: {item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Core Misalignments to Fix */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <AlertCircle className="h-6 w-6 text-rose-500" /> Misalignments to Fix
            </h2>
            <div className="space-y-3">
              {misalignments.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 p-4 rounded-lg border border-rose-100 dark:border-rose-900/30 shadow-sm">
                  <h4 className="font-semibold text-rose-900 dark:text-rose-300 text-sm">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Conclusion block */}
        <motion.div variants={itemVariants} className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-8 mt-12">
          <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">The Principle for Version 0.2</h3>
          <p className="text-lg text-indigo-900 dark:text-indigo-300 font-medium italic border-l-4 border-indigo-500 pl-4">
            "Make every skill outcome subject-rooted, grade-specific, observable, assessable and connected to the official NCF-SE learning-standard hierarchy."
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-4">
            This principle preserves the strength of Subjects2Skills while preventing the framework from becoming a generic “21st-century skills” model detached from CBSE requirements.
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}
