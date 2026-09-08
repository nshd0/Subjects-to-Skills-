import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Printer, Copy, CheckCircle2, ChevronDown, ListChecks, FileText, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TeacherToolkit() {
  const [copied, setCopied] = useState(false);
  const [copiedRubric, setCopiedRubric] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const templateText = `Subject2Skills Unit Planning Template

Grade and Stage: 
Unit Title: 
Duration: 

1. ALIGNMENT
Curricular Area:
Core Subject:
Curricular Goal (NCF):
Learning Outcome:

2. SKILL FOCUS
Primary Skill Domain:
Supporting Skills:
Observable Performance: 

3. PEDAGOGY & ACTIVITY
Teacher Preparation:
Classroom Steps (Sequence):
Student Actions:

4. INCLUSIVE DESIGN
Access (How they receive info):
Participation (How they join in):
Expression (How they show learning):
Support (Scaffolding):
Extension (Challenge):

5. ASSESSMENT & EVIDENCE
Purpose (Diagnostic/Formative/Summative):
Student Evidence to collect:
Assessment Criteria:
Next Steps / Reteach Plan:`;

  const rubricText = `Subject-Specific Rubric Template

Criteria: [Insert Observable Performance]

Level 1: Emerging
Student demonstrates limited understanding. Requires significant support to perform the skill.

Level 2: Developing
Student demonstrates basic understanding. Can perform the skill in familiar contexts with some support.

Level 3: Proficient
Student demonstrates clear understanding. Consistently performs the skill independently in various contexts.

Level 4: Advanced
Student demonstrates deep understanding. Applies the skill creatively, explains reasoning, and supports peers.`;

  const handleCopy = (text: string, setCopiedState: any) => {
    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setTimeout(() => setCopiedState(false), 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="print-content">
        <motion.div 
          className="flex justify-between items-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold tracking-tight">Teacher Toolkit</h1>
          <Button onClick={() => handlePrint()} className="gap-2 print:hidden transition-transform hover:scale-105 active:scale-95">
            <Printer className="h-4 w-4" />
            Export to PDF
          </Button>
        </motion.div>

        <motion.p 
          className="text-xl text-slate-600 dark:text-slate-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Practical resources, templates, and checklists for educators to design inclusive, skill-centred learning units.
        </motion.p>

        {/* Technical Quality & Audit Reference Banner */}
        <motion.div 
          className="mb-10 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                Framework Integrity & Technical Audit
              </span>
              <span className="text-slate-600 dark:text-slate-400">
                Review the newly verified v0.3 technical self-audit covering routing, grade completeness, and SPA fallback readiness.
              </span>
            </div>
          </div>
          <Link
            to="/audit-status"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shrink-0 transition-colors"
          >
            <span>v0.3 Audit & Status</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>

        {/* Assessment and Moderation Tools */}
        <motion.h2 
          className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 flex items-center gap-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <ListChecks className="h-6 w-6 text-indigo-600" /> Assessment & Moderation Toolkit
        </motion.h2>

        <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 mb-8 text-sm text-blue-900 dark:text-blue-300">
          <strong>Important:</strong> Varied evidence complements, rather than automatically replaces, written and practical assessment.
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-emerald-500"/> Moderation Checklist</h3>
              <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Is the task aligned to the intended learning outcome?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Does the rubric assess subject knowledge and skill performance?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Are criteria understandable to students?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Are examples of expected work available?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Have teachers agreed on evidence standards?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Can students improve and resubmit where appropriate?</li>
                <li className="flex gap-2"><input type="checkbox" className="mt-1" /> Is the activity manageable within the timetable?</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2"><FileText className="h-5 w-5 text-purple-500"/> Assessment Purpose Selector</h3>
              <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                <li><strong className="block text-slate-900 dark:text-white">Diagnostic</strong> Identifies prior knowledge before teaching.</li>
                <li><strong className="block text-slate-900 dark:text-white">Formative</strong> Checks understanding during the learning process.</li>
                <li><strong className="block text-slate-900 dark:text-white">Summative</strong> Evaluates learning against standards at the end of a unit.</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg p-6 relative">
            <h3 className="font-bold text-lg mb-4">Subject-Specific Rubric Builder</h3>
            <div className="absolute top-4 right-4 print:hidden">
              <Button variant="outline" size="sm" onClick={() => handleCopy(rubricText, setCopiedRubric)} className="gap-2 bg-white dark:bg-slate-900 transition-transform hover:scale-105 active:scale-95">
                {copiedRubric ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
                {copiedRubric ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <pre className="text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap mt-8 lg:mt-0">
              {rubricText}
            </pre>
          </div>

        </div>

        {/* Existing Unit Planning Template */}
        <motion.h2 
          className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Unit Planning Template
        </motion.h2>
        
        <motion.div 
          className="relative bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden print:border-slate-300 print:bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-4 right-4 print:hidden">
            <Button variant="outline" size="sm" onClick={() => handleCopy(templateText, setCopied)} className="gap-2 bg-white dark:bg-slate-900 transition-transform hover:scale-105 active:scale-95">
              {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </div>
          <pre className="text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap mt-8 lg:mt-0">
            {templateText}
          </pre>
        </motion.div>
        
        {/* Stage-Specific Checklists */}
        <motion.h2 
          className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-800 pb-2 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Stage-Specific Implementation Checklists
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Foundational</h3>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Learning is play-, story-, activity-, movement- and interaction-rich</li>
              <li>Foundational literacy and numeracy are visible</li>
              <li>Observation and conversation are prioritised over test-heavy assessment</li>
              <li>Home/local language is supported</li>
              <li>Art, movement, well-being and social-emotional development are integrated</li>
              <li>Developmental diversity is accommodated</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Preparatory</h3>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Learning moves from concrete experience toward representation and abstraction</li>
              <li>Activity is followed by discussion and concept consolidation</li>
              <li>Students explain their thinking</li>
              <li>The World Around Us remains connected to local environment and community</li>
              <li>Reading, writing and numeracy progression are explicit</li>
              <li>Teacher guidance remains strong</li>
            </ul>
          </div>
          
          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Middle</h3>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Subject knowledge and disciplinary methods are explicit</li>
              <li>Inquiry, experimentation, discussion, fieldwork and projects are balanced</li>
              <li>Vocational / Kaushal Bodh experiences are represented</li>
              <li>Digital and AI literacy includes verification, ethics, privacy and bias</li>
              <li>Projects require meaningful contribution from each subject</li>
              <li>Students use evidence to support claims</li>
            </ul>
          </div>

          <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-5">
            <h3 className="font-bold text-lg mb-3">Secondary</h3>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
              <li>Subject depth is protected</li>
              <li>Academic, arts, vocational and skill pathways are not treated as rigid hierarchies</li>
              <li>Students have opportunities for analysis, research, application and career exploration</li>
              <li>General Studies, Health and Physical Education, and wellbeing are represented</li>
              <li>Subject choice and pathway guidance are visible</li>
              <li>Assessment combines knowledge, practical work, application and reflection</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
