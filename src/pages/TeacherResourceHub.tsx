import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Search, Filter, ExternalLink, Lightbulb, CheckCircle2, Copy, Leaf, Smartphone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { teacherResources, ResourceType, Stage, ResourceCost } from '@/data/resources';

export function TeacherResourceHub() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStage, setSelectedStage] = useState<Stage | 'All'>('All');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');
  const [selectedCost, setSelectedCost] = useState<ResourceCost | 'All'>('All');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredResources = useMemo(() => {
    return teacherResources.filter(res => {
      const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            res.whatItIs.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            res.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesStage = selectedStage === 'All' || 
                           (Array.isArray(res.stage) ? res.stage.includes(selectedStage) : res.stage === selectedStage || res.stage === 'All Stages');
                           
      const matchesType = selectedType === 'All' || res.type === selectedType;
      const matchesCost = selectedCost === 'All' || res.cost === selectedCost;

      return matchesSearch && matchesStage && matchesType && matchesCost;
    });
  }, [searchTerm, selectedStage, selectedType, selectedCost]);

  const stages: (Stage | 'All')[] = ['All', 'Foundational', 'Preparatory', 'Middle', 'Secondary'];
  const types: (ResourceType | 'All')[] = ['All', 'Activity', 'Support Guide', 'Template', 'Official Resource', 'Open Educational Resource', 'Tool'];
  const costs: (ResourceCost | 'All')[] = ['All', 'Free', 'Open Source', 'Free with sign-in', 'Official public resource'];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getTemplateContent = (id: string) => {
    if (id === 'tpl-1') {
      return `Universal Lesson Planning Template
Date: ______________  Subject: ______________  Grade: ______________
1. Skill Focus:
2. Learning Objective:
3. Assessment / Evidence of Learning:
4. Activity Sequence:
   - Hook / Intro (____ mins):
   - Main Activity (____ mins):
   - Wrap-up / Reflection (____ mins):
5. Inclusion & Differentiation:
   - Access (How to present):
   - Expression (How students show learning):`;
    }
    if (id === 'tpl-2') {
      return `TAG Peer Feedback Form
Reviewer Name: _________________  Author Name: _________________

T - Tell something you like:
_________________________________________________________________

A - Ask a question:
_________________________________________________________________

G - Give a suggestion:
_________________________________________________________________`;
    }
    return 'Template content here...';
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-7xl">
      {/* Header section */}
      <motion.div 
        className="mb-10 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-4">
          Teacher Resource Hub
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">
          Curated classroom activities, pedagogical guides, templates, and free tools to implement the Subjects2Skills framework in your classroom.
        </p>
      </motion.div>

      {/* Filters and Search */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 md:p-6 mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search resources, activities, tools..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4 items-center text-sm">
          <div className="flex items-center gap-2 text-slate-500">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filters:</span>
          </div>
          
          <select 
            value={selectedStage} 
            onChange={(e) => setSelectedStage(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {stages.map(s => <option key={s} value={s}>{s === 'All' ? 'All Stages' : s}</option>)}
          </select>

          <select 
            value={selectedType} 
            onChange={(e) => setSelectedType(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {types.map(t => <option key={t} value={t}>{t === 'All' ? 'All Types' : t}</option>)}
          </select>

          <select 
            value={selectedCost} 
            onChange={(e) => setSelectedCost(e.target.value as any)}
            className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {costs.map(c => <option key={c} value={c}>{c === 'All' ? 'All Costs' : c}</option>)}
          </select>
        </div>
      </div>

      {/* Trust banner */}
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 rounded-lg p-4 mb-8 text-sm text-amber-800 dark:text-amber-200 flex items-start gap-3">
        <Lightbulb className="h-5 w-5 shrink-0 mt-0.5" />
        <p>
          <strong>Note on external tools:</strong> External open-source and free resources are curated for utility, but do not imply official CBSE endorsement. Teachers should review all external tools, resources and links for age-appropriateness, accessibility, privacy, safety and school-policy compliance before classroom use.
        </p>
      </div>

      {/* Results */}
      {filteredResources.length === 0 ? (
        <div className="text-center py-20 text-slate-500">
          <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-20" />
          <h3 className="text-lg font-medium">No resources found</h3>
          <p>Try adjusting your filters or search terms.</p>
          <Button variant="outline" className="mt-4" onClick={() => {
            setSearchTerm(''); setSelectedStage('All'); setSelectedType('All'); setSelectedCost('All');
          }}>Clear Filters</Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {filteredResources.map((res, idx) => (
            <motion.article 
              key={res.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden flex flex-col shadow-[0_2px_10px_-3px_rgba(6,81,237,0.1)] transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.05)]"
            >
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md uppercase tracking-wider
                    ${res.type === 'Activity' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300' : 
                      res.type === 'Support Guide' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300' :
                      res.type === 'Template' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' :
                      'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'}`}
                  >
                    {res.type}
                  </span>
                  
                  <div className="flex items-center gap-2">
                    {res.lowResourceFriendly && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 px-2 py-1 rounded-md border border-green-200 dark:border-green-800/50" title="Works in low-resource classrooms">
                        <Leaf className="h-3 w-3" /> Low-Resource
                      </span>
                    )}
                    {res.mobileFriendly && (
                      <span className="flex items-center gap-1 text-[11px] font-semibold bg-sky-50 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400 px-2 py-1 rounded-md border border-sky-200 dark:border-sky-800/50" title="Mobile friendly">
                        <Smartphone className="h-3 w-3" /> Mobile
                      </span>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight font-serif">{res.title}</h3>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                  {res.subject && <span><strong>Subject:</strong> {res.subject}</span>}
                  {res.timeRequired && <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5"/> {res.timeRequired}</span>}
                  <span className="font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">{res.cost}</span>
                </div>
                
                <div className="space-y-6 text-[15px] leading-relaxed flex-grow">
                  {/* WHAT IT IS */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">What it is</h4>
                    <p className="text-slate-800 dark:text-slate-200 font-medium">{res.whatItIs}</p>
                  </div>

                  {/* WHY IT MATTERS */}
                  {res.whyItMatters && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Why it matters</h4>
                      <p className="text-slate-600 dark:text-slate-400">{res.whyItMatters}</p>
                    </div>
                  )}

                  {/* HOW TO USE IT */}
                  {res.howToUse && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">How to use it</h4>
                      {Array.isArray(res.howToUse) ? (
                        <ol className="list-decimal pl-5 text-slate-600 dark:text-slate-400 space-y-1.5 marker:text-slate-400">
                          {res.howToUse.map((step, i) => <li key={i} className="pl-1">{step}</li>)}
                        </ol>
                      ) : (
                        <p className="text-slate-600 dark:text-slate-400">{res.howToUse}</p>
                      )}
                    </div>
                  )}

                  {/* WHAT STUDENTS PRODUCE */}
                  {res.whatStudentsProduce && (
                    <div className="pt-2">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-400 dark:text-indigo-500 mb-2 flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" /> What students produce
                      </h4>
                      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/50 rounded-lg p-3 text-indigo-800 dark:text-indigo-300 font-medium">
                        {res.whatStudentsProduce}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Action Area */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 p-4 md:px-8 md:py-5 mt-auto">
                {res.url ? (
                  <a 
                    href={res.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 py-2.5 px-4 rounded-lg text-sm font-semibold transition-colors shadow-sm"
                  >
                    Open Resource <ExternalLink className="h-4 w-4" />
                  </a>
                ) : res.type === 'Template' ? (
                  <Button 
                    className="w-full gap-2 shadow-sm font-semibold"
                    onClick={() => handleCopy(getTemplateContent(res.id), res.id)}
                  >
                    {copiedId === res.id ? <CheckCircle2 className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    {copiedId === res.id ? 'Copied to clipboard' : 'Copy Template Text'}
                  </Button>
                ) : (
                  <div className="flex flex-wrap gap-2">
                    {res.skillsSupported?.slice(0, 3).map((skill, i) => (
                      <span key={i} className="text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {res.skillsSupported && res.skillsSupported.length > 3 && (
                      <span className="text-xs text-slate-400 px-1 py-1">+{res.skillsSupported.length - 3} more</span>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </div>
  );
}
