import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  BookOpen, 
  Users, 
  Layers, 
  FileCheck2, 
  Scale, 
  AlertTriangle,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

export function PeerReviewGuidelines() {
  const criteria = [
    {
      id: 'crit-1',
      title: '1. Curriculum Alignment & Developmental Stage',
      weight: '25%',
      icon: BookOpen,
      color: 'indigo',
      description: 'The theme bundle or textbook alignment must align accurately with NCF-SE 2023 developmental stages and official learning outcomes.',
      checklist: [
        'Matches cognitive readiness for target stage (Foundational, Preparatory, Middle, or Secondary).',
        'Directly maps to at least one identifiable Competency or Curricular Goal from NCF-SE 2023 or CBSE curriculum.',
        'Learning progression follows Bloom’s taxonomy from comprehension to synthesis/creation.',
        'Does not duplicate or conflict with existing national curricular sequences.'
      ]
    },
    {
      id: 'crit-2',
      title: '2. Classroom Usability & Realistic Pacing',
      weight: '25%',
      icon: Clock,
      color: 'emerald',
      description: 'The plan must be practical for real Indian classrooms, accommodating 40+ students and varying resource constraints.',
      checklist: [
        'Time allocations are realistic (e.g. 20–30 hours spread across 4–6 weeks).',
        'Includes facilitation guidance for large class sizes (grouping, rotations, pair-checks).',
        'Materials are readily accessible in government and budget private schools (no proprietary kits required).',
        'Assessment evidence is tangible, observable, and easy for a single teacher to moderate.'
      ]
    },
    {
      id: 'crit-3',
      title: '3. Source Verification & Evidentiary Standard',
      weight: '25%',
      icon: FileCheck2,
      color: 'amber',
      description: 'Zero tolerance for fabricated, imaginary, or ungrounded curriculum claims. Every citation must point to a real document.',
      checklist: [
        'Every cross-subject connection cites an exact NCF-SE 2023 section, NCERT chapter, CBSE circular, or State SCERT textbook.',
        'Page numbers, chapter numbers, or circular IDs are provided and verifiable.',
        'State textbook alignments must accurately reference current prescribed editions (e.g., Kerala Samagra, Maharashtra Balbharati).',
        'No AI hallucinations or non-existent policy claims.'
      ]
    },
    {
      id: 'crit-4',
      title: '4. Accessibility, Inclusion & Multilingualism',
      weight: '25%',
      icon: Users,
      color: 'blue',
      description: 'Blueprints must follow Universal Design for Learning (UDL) principles and honor regional linguistic diversity.',
      checklist: [
        'Provides multi-sensory modalities (visual diagrams, kinesthetic modeling, oral discourse).',
        'Includes explicit adaptations for neurodiverse learners or students with disabilities (Divyangjan).',
        'Encourages multilingual bridging (using local mother tongues alongside English/Hindi).',
        'Respects cultural, regional, and socioeconomic diversity without stereotyping.'
      ]
    }
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Educator Submission',
      desc: 'A verified educator drafts and submits a Theme Bundle or State Textbook Alignment. Rate limit: maximum 5 submissions per teacher per calendar month.'
    },
    {
      step: '2',
      title: 'Double-Blind / Open Peer Review',
      desc: 'The submission enters the community review queue. Two to three verified educators independently audit the submission against the 4 core criteria.'
    },
    {
      step: '3',
      title: 'Revision or Endorsement',
      desc: 'Reviewers can request specific revisions or endorse. If revisions are requested, the author receives itemized constructive commentary.'
    },
    {
      step: '4',
      title: 'Peer-Reviewed Certification',
      desc: 'Upon receiving 2+ verified endorsements, the blueprint receives the official "Peer-Reviewed" badge, verified reviewer signatures, and is published under CC BY-SA 4.0.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Page Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Subjects2Skills Framework Standard
            </span>
            <span className="text-xs text-slate-500">
              V0.7 Public Educational Peer Review Framework
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Peer Educator Review Guidelines & Quality Gates
          </h1>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
            Every interdisciplinary theme bundle, custom rubric, and state SCERT textbook alignment published on Subjects2Skills is vetted by practicing classroom educators before public certification. This document outlines our four-dimensional evaluation rubric, evidentiary standards, and open-licensing attribution rules.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              to="/theme-bundles"
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs"
            >
              Browse Theme Bundles & Queue
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/audit-v0-8"
              className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Review Technical Audit Reports
            </Link>
          </div>
        </div>

        {/* Workflow Overview */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-600" />
            The Peer Review Lifecycle
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((wf) => (
              <div 
                key={wf.step}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center shadow-xs">
                    {wf.step}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Criteria Rubrics */}
        <div className="space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              The Four Dimensions of Review
            </h2>
            <p className="text-xs text-slate-500">
              Each submission must score a minimum of 4/5 across all 4 criteria to earn the "Peer-Reviewed" certification badge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {criteria.map((crit) => {
              const Icon = crit.icon;
              return (
                <Card key={crit.id} className="border-slate-200 dark:border-slate-800 shadow-sm">
                  <CardHeader className="pb-3 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center">
                          <Icon className="w-4 h-4" />
                        </div>
                        <CardTitle className="text-base font-bold text-slate-900 dark:text-white">
                          {crit.title}
                        </CardTitle>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        Weight: {crit.weight}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                      {crit.description}
                    </p>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Verification Checklist:
                    </span>
                    <ul className="space-y-2">
                      {crit.checklist.map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Attribution, Ethics & CC BY-SA 4.0 */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            Open Licensing & Code of Conduct
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Attribution, Licensing & Conflict of Interest Policy
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                CC BY-SA 4.0 Licensing
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                All published theme bundles, lesson plans, and rubrics are open educational resources (OER) shared under Creative Commons Attribution-ShareAlike 4.0. Anyone may adapt, photocopy, or remix with appropriate credit.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                Author Attribution
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Author names remain indelibly linked to blueprints in version histories. School affiliations are opt-in, allowing teachers to highlight their institutional contributions or maintain private identities.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-2">
              <span className="font-bold text-slate-900 dark:text-white block text-sm">
                Conflict of Interest
              </span>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Reviewers cannot review their own submissions or those co-authored with direct colleagues from the same school department. All reviews are logged with professional designations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
