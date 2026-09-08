import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { gradesData } from '@/data/grades';
import { GradeCard } from '@/components/GradeCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ArrowRight, Layers, Clock, AlertCircle } from 'lucide-react';

export function ExploreByGrade() {
  const [selectedStage, setSelectedStage] = useState<string>('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 }
  };

  const stages = [
    { 
      id: 'foundational', 
      name: 'Foundational Stage', 
      ageSpan: '3–8',
      grades: 'Pre-school, Grade 1, Grade 2',
      pedagogy: 'Play, stories, movement, art, exploration, conversation and guided activity.',
      anchor: 'Grade 1' 
    },
    { 
      id: 'preparatory', 
      name: 'Preparatory Stage', 
      ageSpan: '8–11',
      grades: 'Grade 3, Grade 4, Grade 5',
      pedagogy: 'Activity, discovery, discussion, concrete-to-abstract learning, guided inquiry and collaboration.',
      anchor: 'Grade 3' 
    },
    { 
      id: 'middle', 
      name: 'Middle Stage', 
      ageSpan: '11–14',
      grades: 'Grade 6, Grade 7, Grade 8',
      pedagogy: 'Inquiry, experimentation, fieldwork, projects, debate, making and design challenges.',
      anchor: 'Grade 6' 
    },
    { 
      id: 'secondary', 
      name: 'Secondary Stage', 
      ageSpan: '14–18',
      grades: 'Grade 9, Grade 10, Grade 11, Grade 12',
      pedagogy: 'Disciplinary depth, analysis, research, application, portfolio development and career-linked learning.',
      anchor: 'Grade 9' 
    }
  ];

  const filteredStages = selectedStage === 'all' 
    ? stages 
    : stages.filter(s => s.id === selectedStage);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 pt-4">
      {/* Top Breadcrumbs */}
      <div className="container mx-auto px-4 max-w-6xl mb-6">
        <Breadcrumbs items={[{ label: 'Explore by Grade' }]} />
      </div>

      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-12 max-w-6xl mx-auto">
          
          {/* Header Section */}
          <div className="text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-3 py-1 rounded-full border border-indigo-100 dark:border-indigo-900/40 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              NCF 5+3+3+4 Pedagogical Framework
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Explore by Grade
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Explore the Subjects2Skills framework through grade-wise learning pathways, subject knowledge, skills, pedagogy, activities and teacher support.
            </p>

            {/* Introductory Note & Public Trust Statement */}
            <div className="max-w-3xl mx-auto space-y-3 pt-2 text-left">
              <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/50 text-xs text-indigo-950 dark:text-indigo-200">
                <p className="leading-relaxed">
                  <strong>Grade-wise content is being developed progressively.</strong> Status labels indicate the maturity of Subjects2Skills content and do not represent official approval, endorsement or certification by CBSE, NCERT or any government body.
                </p>
              </div>
            </div>

            {/* Stage Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                onClick={() => setSelectedStage('all')}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
                  selectedStage === 'all'
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                }`}
              >
                All Stages
              </button>
              {stages.map(st => (
                <button
                  key={st.id}
                  onClick={() => setSelectedStage(st.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden ${
                    selectedStage === st.id
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {st.name}
                </button>
              ))}
            </div>

            {/* Status Legend */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs pt-1 text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Content Status:</span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                <span>In Development</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-400 inline-block"></span>
                <span>Planned</span>
              </span>
              <Link to="/roadmap" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium inline-flex items-center gap-1 ml-2">
                <span>View v0.3 Roadmap</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Stages and Grade Cards */}
          {filteredStages.map(stage => {
            const stageGrades = gradesData.filter(g => g.stageId === stage.id);
            if (stageGrades.length === 0) return null;

            return (
              <div key={stage.id} className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                        {stage.name}
                      </h2>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-medium">
                        Ages {stage.ageSpan}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      <strong>Pedagogy:</strong> {stage.pedagogy}
                    </p>
                  </div>
                  <Link 
                    to={`/stage/${stage.id}`}
                    className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 self-start sm:self-auto min-h-[44px]"
                  >
                    <span>View Stage Overview</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className={`grid grid-cols-1 sm:grid-cols-2 ${stageGrades.length >= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-5`}>
                  {stageGrades.map(grade => {
                    const isAnchor = grade.status === 'in-development';

                    return (
                      <motion.div key={grade.id} variants={itemVariants} className="h-full">
                        <GradeCard 
                          grade={grade} 
                          isAnchor={isAnchor} 
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
