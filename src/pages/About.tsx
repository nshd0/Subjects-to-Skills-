import React from 'react';

export function About() {
  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-8">About the Framework</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none text-lg">
          <p className="lead text-xl text-slate-600 dark:text-slate-300 mb-8">
            This public framework demonstrates how existing CBSE subjects can be mapped through pedagogy stages into a skill-centred curriculum model. It is intended as a practical design reference for schools, educators, curriculum innovators, and public stakeholders.
          </p>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Why subject-to-skill mapping matters</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Subjects provide essential structure and domain knowledge, but true education is defined by what a learner can <em>do</em> with that knowledge. By mapping subjects to specific skills, we shift the focus from rote memorisation to the active application of knowledge in real-world contexts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">Why stage-based design matters</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Cognitive and emotional development occurs in phases. A pedagogy that works for a 16-year-old is often ineffective for an 8-year-old. Stage-based design ensures that the methods of teaching and the complexity of the skills align precisely with the learner's developmental readiness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-100">How schools can use this</h2>
              <p className="text-slate-700 dark:text-slate-300">
                Schools can use this framework as a high-level reference tool to initiate conversations about pedagogical shifts. Teachers can use the toolkit and mapping examples to begin designing interdisciplinary units that prioritize skill acquisition without abandoning the existing subject syllabus.
              </p>
            </section>

            <div className="mt-12 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-2">Important Notice</h3>
              <p className="text-slate-700 dark:text-slate-300 text-sm">
                This is a conceptual framework designed for exploratory and reference purposes. Schools and educators should always verify curriculum plans with the most current, official guidance provided by the CBSE and NCERT before implementation in formal classroom settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
