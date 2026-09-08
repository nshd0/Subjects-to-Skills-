import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Map, CheckCircle2, HeartHandshake, ShieldCheck, Database, Target, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutContent() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-16 max-w-4xl">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300 mb-6">
          <ShieldCheck className="h-4 w-4" /> Content Authenticity
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
          About Our Curriculum Content
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Our framework is meticulously aligned to the latest national standards, ensuring you have reliable, actionable, and open resources for your classroom.
        </p>
      </motion.div>

      {/* Visual Alignment Flowchart */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 mb-16 shadow-sm overflow-hidden"
      >
        <h2 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-12">The Alignment Architecture</h2>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <div className="flex flex-col items-center w-full md:w-auto text-center space-y-3 p-6 rounded-2xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50">
            <BookOpen className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">National Standards</h3>
              <p className="text-xs text-slate-500">CBSE Syllabus (2025–26)<br/>NCF 2023 Guidelines</p>
            </div>
          </div>

          <div className="hidden md:block w-8 h-0.5 bg-slate-300 dark:bg-slate-700"></div>
          <div className="md:hidden h-8 w-0.5 bg-slate-300 dark:bg-slate-700"></div>

          <div className="flex flex-col items-center w-full md:w-auto text-center space-y-3 p-6 rounded-2xl bg-sky-50 dark:bg-sky-900/20 border border-sky-100 dark:border-sky-800/50">
            <Map className="h-8 w-8 text-sky-600 dark:text-sky-400" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Skill Framework</h3>
              <p className="text-xs text-slate-500">Grade Profiles &<br/>Priority Competencies</p>
            </div>
          </div>

          <div className="hidden md:block w-8 h-0.5 bg-slate-300 dark:bg-slate-700"></div>
          <div className="md:hidden h-8 w-0.5 bg-slate-300 dark:bg-slate-700"></div>

          <div className="flex flex-col items-center w-full md:w-auto text-center space-y-3 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-100 dark:border-emerald-800/50">
            <Target className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">Classroom Reality</h3>
              <p className="text-xs text-slate-500">Units, Lesson Plans, &<br/>Assessment Tasks</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Section 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How we align to CBSE & NCERT</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Every grade profile, unit, and assessment in our platform traces directly back to the <strong>CBSE Curriculum (2025–26)</strong> and the <strong>National Curriculum Framework (NCF 2023)</strong>. We analyze official learning outcomes and translate them into actionable, skill-based classroom objectives.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-400 rounded-xl flex items-center justify-center mb-6">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How we choose resources</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            We prioritize open, verifiable, and free-to-use tools. Before adding a resource to our hub, we ensure it holds an open license (like Creative Commons or Open Government License), is directly relevant to the Indian context (e.g., DIKSHA, NCERT, Khan Academy India), and offers genuine pedagogical value.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400 rounded-xl flex items-center justify-center mb-6">
            <Database className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">How often we update</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Curriculum is a living entity. We perform comprehensive audits of our content and external links <strong>annually</strong> to match new textbook editions and syllabus changes. You will always see a "Last Updated" timestamp on grade profiles and resource cards.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-4"
        >
          <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-xl flex items-center justify-center mb-6">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Report errors or suggest improvements</h2>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Teachers are our best editors. If you spot a broken link, a misaligned competency, or want to suggest a new open-source tool, we want to hear from you. 
          </p>
        </motion.div>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-sm text-slate-500 mb-6 font-medium">Content last reviewed: <span className="text-slate-800 dark:text-slate-200">September 2025</span></p>
        <Link to="/resources" className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-semibold transition-colors shadow-sm">
          Browse Verified Resources
        </Link>
      </div>
    </div>
  );
}
