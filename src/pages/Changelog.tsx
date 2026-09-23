import React from 'react';

export function Changelog() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Changelog</h1>
      
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-slate-800 before:to-transparent">
        
        {/* v0.5 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-indigo-600 text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
            <span className="text-sm font-bold">v0.5</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 rounded-2xl border-2 border-indigo-200 dark:border-indigo-900/60 bg-white dark:bg-slate-900 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">CBSE AI Curriculum Tracks Integration</h3>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300">
                Latest Release
              </span>
            </div>
            <p className="text-sm text-slate-500 mb-3">Release 0.5.0 • September 2026</p>
            <ul className="list-disc pl-5 text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
              <li><strong>Track Integration (Tracks A, B, C):</strong> Integrated Track A (compulsory embedded CT&AI), Track B (optional skill module 901), and Track C (elective skill subject 417) across Grades 3–12.</li>
              <li><strong>Color-Coded Visual Indicators:</strong> Track A (blue), Track B (amber), and Track C (emerald) badges on all skill nodes.</li>
              <li><strong>Track Profile Panel:</strong> Node detail drawer includes hours per year, track status, transition pathways, and verified CBSE citations.</li>
              <li><strong>Dynamic Planning Wizards:</strong> Grade- and track-aware filtering in Lesson Plan Wizard and Assessment Wizard.</li>
              <li><strong>Curriculum-Aligned Rubrics:</strong> 4-level performance rubrics aligned with official CBSE assessment outcomes.</li>
            </ul>
          </div>
        </div>

        {/* v0.4 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
            <span className="text-sm font-bold">v0.4</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="font-bold text-lg mb-1">Unit & Lesson Planning Engine</h3>
            <p className="text-sm text-slate-500 mb-3">Milestone 1</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Integrated Lesson Plan Wizard with Bloom's taxonomy mapping</li>
              <li>Assessment Mapper with formative rubric matrices</li>
              <li>Cross-subject collaborative unit builder</li>
              <li>Grade 8 comprehensive pilot curriculum hub</li>
            </ul>
          </div>
        </div>

        {/* v0.3 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
            <span className="text-sm font-bold">v0.3</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="font-bold text-lg mb-1">Verified Curriculum Mapping & Teacher Implementation Layer</h3>
            <p className="text-sm text-slate-500 mb-3">Public Beta</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Added standards alignment panel</li>
              <li>Added observable competency descriptors</li>
              <li>Added inclusion fields to activity planning</li>
              <li>Added assessment and moderation toolkit</li>
              <li>Added area coverage dashboard</li>
              <li>Added stage-specific implementation checklists</li>
              <li>Added authenticated school implementation planner</li>
              <li>Improved stakeholder feedback categories</li>
              <li>Added source-verification states</li>
            </ul>
          </div>
        </div>

        {/* v0.2 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
            <span className="text-sm font-bold">v0.2</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="font-bold text-lg mb-1">Data Platform Migration</h3>
            <p className="text-sm text-slate-500 mb-3">Public Beta</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Added curriculum metadata and compliance panels</li>
              <li>Added grade-level filtering</li>
              <li>Added global search</li>
              <li>Added audit and roadmap pages</li>
              <li>Added print support</li>
              <li>Added feedback capability</li>
              <li>Added inclusive learning resources</li>
              <li>Added authentication and secure routing</li>
            </ul>
          </div>
        </div>

        {/* v0.1 */}
        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-800 text-slate-500 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow">
            <span className="text-sm font-bold">v0.1</span>
          </div>
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
            <h3 className="font-bold text-lg mb-1">Conceptual Framework</h3>
            <p className="text-sm text-slate-500 mb-3">Public Prototype</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-slate-700 dark:text-slate-300">
              <li>Introduced the stage-based Subjects2Skills framework</li>
              <li>Added the public explanation of subject-to-skill learning</li>
              <li>Added stage navigation, curriculum mapping and teacher toolkit foundation</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
