import React from 'react';
import { Shield, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export function AboutFramework() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">About the Subjects2Skills Framework</h1>
      
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6 mb-8 flex gap-4">
        <Shield className="h-8 w-8 text-amber-600 dark:text-amber-400 shrink-0" />
        <div>
          <h2 className="text-xl font-bold text-amber-900 dark:text-amber-300 mb-2">Governance Notice</h2>
          <p className="text-amber-800 dark:text-amber-400">
            Subjects2Skills is a public curriculum-translation framework. It helps educators connect subject knowledge, competencies, pedagogy, assessment, and learner skills. 
            <strong> It is not an official CBSE or NCERT portal.</strong> Schools should verify local implementation with current official curriculum documents.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" /> What Subjects2Skills Is
          </h2>
          <p className="mb-4">
            Subjects2Skills is a framework designed to bridge the gap between high-level curriculum standards and daily classroom practice. We believe that:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Subjects</strong> provide the knowledge context.</li>
            <li><strong>Skills</strong> demonstrate what learners can do with knowledge.</li>
            <li><strong>Pedagogy</strong> adapts learning to developmental stage.</li>
            <li><strong>Assessment</strong> makes learning visible through valid evidence.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Layers className="h-6 w-6 text-indigo-600" /> What It Is Not
          </h2>
          <p className="mb-4">
            Subjects2Skills does not replace CBSE, NCERT, NEP 2020, NCF-SE 2023, school assessment policy, teachers, or prescribed textbooks. It is a translation layer to support teachers in implementing these frameworks.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-indigo-600" /> Navigating the Framework
          </h2>
          <p className="mb-4">
            Throughout the platform, you will see clear labels indicating the source and status of curriculum mapping data:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
              <div className="font-semibold text-slate-900 dark:text-white">Official Curriculum Reference</div>
              <p className="text-sm mt-1">Direct links and quotes from NCF-SE 2023 or CBSE.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
              <div className="font-semibold text-slate-900 dark:text-white">Subjects2Skills Interpretation</div>
              <p className="text-sm mt-1">Our translation of standards into observable skills and activities.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
              <div className="font-semibold text-slate-900 dark:text-white">Teacher-Contributed Practice</div>
              <p className="text-sm mt-1">Classroom-tested activities submitted by the educator community.</p>
            </div>
            <div className="bg-white dark:bg-slate-900 p-4 rounded border border-slate-200 dark:border-slate-800">
              <div className="font-semibold text-slate-900 dark:text-white">Requires Local School Adaptation</div>
              <p className="text-sm mt-1">Guidance that must be tailored to your specific school context.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
