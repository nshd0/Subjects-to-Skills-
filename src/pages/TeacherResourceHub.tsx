import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { openResources } from '@/data/resources';
import { Resource } from '@/types';

export function TeacherResourceHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredResources = useMemo(() => {
    return openResources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            res.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSubject = selectedSubject === 'All' || 
                             (res.subject && res.subject.includes(selectedSubject)) ||
                             (res.subjects && res.subjects.includes(selectedSubject));
                             
      const matchesType = selectedType === 'All' || 
                          (res.resourceType === selectedType || res.type === selectedType);

      return matchesSearch && matchesSubject && matchesType;
    });
  }, [searchTerm, selectedSubject, selectedType]);

  const subjects = ['All', 'Science', 'Mathematics', 'Social Science', 'Languages', 'STEM'];
  const types = ['All', 'textbook', 'video', 'interactive', 'curriculum-reference'];

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
      <motion.div 
        className="mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Curated Free & Open Resources
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          A carefully vetted collection of free, open-source, and official tools directly aligned with the CBSE syllabus and NCF 2023.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 md:p-6 mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by title, topic, provider..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 min-h-[44px]"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <select 
            value={selectedSubject} 
            onChange={(e) => setSelectedSubject(e.target.value)}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {subjects.map(s => <option key={s} value={s}>{s === 'All' ? 'All Subjects' : s}</option>)}
          </select>

          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value)}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {types.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
          </select>
        </div>
      </div>

      {/* Results */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <h3 className="text-lg font-medium">No resources found</h3>
          <p>Try adjusting your filters or search terms.</p>
          <Button variant="outline" className="mt-4 min-h-[44px]" onClick={() => {
            setSearchTerm(''); setSelectedSubject('All'); setSelectedType('All');
          }}>Clear Filters</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredResources.map((res: Resource, idx) => (
            <motion.article 
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
            >
              <div className="p-6 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4 gap-2">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {res.resourceType || res.type}
                  </span>
                  {res.lastVerified && (
                    <span className="group relative flex items-center gap-1 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/30 px-2 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/50 cursor-default">
                      <ShieldCheck className="h-3 w-3" /> 
                      Verified
                      <span className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition absolute bottom-full mb-1 right-0 w-32 bg-slate-800 text-white text-xs rounded p-1.5 text-center shadow-lg pointer-events-none z-10">
                        Last verified: {res.lastVerified}
                      </span>
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 leading-tight">{res.title}</h3>
                
                <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400 mb-4 flex items-center gap-1.5">
                  {res.provider} <span className="text-slate-300 dark:text-slate-600">•</span> <span className="text-slate-500 dark:text-slate-400 text-xs">{res.license || 'Free'}</span>
                </div>
                
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                  {res.description}
                </p>
                
                <div className="mt-auto space-y-2 text-xs">
                  <div className="flex gap-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 min-w-[60px]">Grades:</span>
                    <span className="text-slate-500">{Array.isArray(res.grades) ? res.grades.map(g => g.replace('grade-', 'G')).join(', ') : 'All'}</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-semibold text-slate-700 dark:text-slate-300 min-w-[60px]">Subject:</span>
                    <span className="text-slate-500">{res.subject || res.subjects?.join(', ')}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
                <a 
                  href={res.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-3 px-4 rounded-xl text-sm font-semibold transition-colors min-h-[44px]"
                >
                  Open Resource <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
