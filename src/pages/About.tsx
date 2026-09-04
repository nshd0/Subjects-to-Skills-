import React from 'react';
import { ShieldAlert, BookOpen, Award, CheckCircle2, Sparkles, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function About() {
  return (
    <div className="pb-20 pt-8 min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-4 max-w-4xl space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            Subjects2Skills v0.2 — Preparing for v0.3
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Subjects2Skills
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            A public educational framework demonstrating how existing CBSE subjects can be connected to skills, pedagogy stages, classroom activities, assessment evidence, teacher support, and free/open resources.
          </p>
        </div>

        {/* Core Principles Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Core Principle #1
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Subjects organise knowledge.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Academic subjects provide rigorous conceptual architecture, historical context, domain epistemology, and disciplinary vocabulary. We do not dilute or dismantle subject disciplines.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Core Principle #2
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Skills organise capability.
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Skills define what a learner can observe, hypothesize, test, communicate, and transfer to unfamiliar situations. Skills operationalize knowledge into observable human agency.
            </p>
          </div>
        </div>

        {/* Non-Negotiable Boundary Callout */}
        <div className="p-6 rounded-2xl bg-slate-900 text-white dark:bg-slate-800 space-y-3 shadow-md">
          <h3 className="text-base font-bold text-indigo-300 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-indigo-400" />
            Curricular Integrity Statement
          </h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Generic skills are <strong>never</strong> represented as replacements for academic knowledge, subject-specific methods, CBSE curriculum requirements, or statutory assessment guidelines. Every skill in Subjects2Skills is anchored within authentic subject content.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-8 shadow-xs space-y-8 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              The Purpose of this Upgrade
            </h2>
            <p>
              This release represents the preparation and architectural upgrade for <strong>v0.3</strong>, an upcoming grade-wise curriculum implementation covering Pre-school to Grade 12. We provide transparent starter structures and full flagship activities for priority anchor grades (Grades 3, 6, 7, 8, and 9) while inviting educators across India to review, test, and contribute feedback.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Primary Audiences We Serve
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">1. Classroom Teachers</strong>
                <p className="text-xs text-slate-600 dark:text-slate-400">Need classroom-ready guidance, low-resource adaptations, and observable assessment rubrics that fit standard 40-minute school periods.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">2. School Leaders & Principals</strong>
                <p className="text-xs text-slate-600 dark:text-slate-400">Need a coherent curriculum implementation view across stages, ensuring vertical continuity from Foundational to Secondary.</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">3. Curriculum Designers</strong>
                <p className="text-xs text-slate-600 dark:text-slate-400">Need transparent, auditable subject-to-skill mapping aligned to national frameworks (NCF-SE / NEP 2020).</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <strong className="text-slate-900 dark:text-white block mb-1">4. Parents & Students</strong>
                <p className="text-xs text-slate-600 dark:text-slate-400">Need a plain-language understanding of developmental learning progression beyond traditional numerical marks.</p>
              </div>
            </div>
          </section>

          {/* Mandatory Trust and Independence Statement */}
          <div className="p-5 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/40 text-amber-900 dark:text-amber-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />
              Official Endorsement & Content Maturity Disclaimer
            </div>
            <p className="text-xs leading-relaxed">
              <strong>Content-status labels describe the maturity of Subjects2Skills material. They do not represent approval, endorsement, or certification by CBSE, NCERT, or any government body.</strong>
            </p>
            <p className="text-xs leading-relaxed opacity-90">
              Subjects2Skills is an independent open educational framework designed for reference, research, and collaborative professional development. Educators should always review statutory curriculum syllabi issued directly by the relevant exam boards.
            </p>
          </div>

          {/* Mandatory Safety Notice */}
          <div className="p-5 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800/40 text-blue-900 dark:text-blue-200 space-y-2">
            <div className="flex items-center gap-2 font-bold text-sm">
              <ShieldAlert className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
              External Tool & Resource Safety Guideline
            </div>
            <p className="text-xs leading-relaxed">
              <strong>Teachers should review all external tools, resources and links for age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use.</strong>
            </p>
          </div>

        </div>

        {/* Call to action */}
        <div className="text-center pt-4">
          <Link
            to="/grades"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm shadow-sm transition-colors"
          >
            Explore the Grade-Wise Curriculum Dashboards →
          </Link>
        </div>

      </div>
    </div>
  );
}
