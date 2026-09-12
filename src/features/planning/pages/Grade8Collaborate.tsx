import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Users, Plus, MessageSquare, AlertCircle, Search, Filter } from 'lucide-react';
import { useWizardIntegratedUnits } from '../useWizardStorage';

export function Grade8Collaborate() {
  const { units } = useWizardIntegratedUnits();
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUnits = units.filter(u => filterStatus === 'all' || u.status === filterStatus);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-8">
      <div className="container mx-auto px-4 max-w-6xl space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
               <Link to="/grade/8" className="text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Grade 8</Link>
               <span className="text-slate-400">/</span>
               <span className="text-sm font-semibold text-slate-900 dark:text-white">Collaboration</span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-indigo-500" />
              Cross-Subject Units
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2 max-w-2xl">
              Co-design integrated lessons and assessments with other Grade 8 teachers.
            </p>
          </div>
          <Link to="/plan/integrated/new" className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm whitespace-nowrap">
            <Plus className="w-4 h-4" /> Start new unit
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search units by title or subject..." className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div className="flex gap-2">
            <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-500">
              <option value="all">All Statuses</option>
              <option value="draft">Drafts</option>
              <option value="in-review">In Review</option>
              <option value="ready">Ready (Exemplars)</option>
            </select>
          </div>
        </div>

        {/* List */}
        {filteredUnits.length === 0 ? (
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-12 text-center">
             <Users className="w-12 h-12 text-slate-300 mx-auto mb-4" />
             <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No units found</h3>
             <p className="text-slate-500 mb-6">Start collaborating by creating your first integrated unit.</p>
             <Link to="/plan/integrated/new" className="text-indigo-600 font-semibold hover:underline">Create unit</Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredUnits.map(unit => (
              <div key={unit.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 flex flex-col shadow-sm hover:border-indigo-300 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 flex-wrap">
                    {unit.subjectIds?.map(sub => (
                      <span key={sub} className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider capitalize">{sub}</span>
                    ))}
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${unit.status === 'ready' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                    {unit.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{unit.title || 'Untitled Unit'}</h3>
                
                {unit.status === 'draft' && unit.collaboratorIds?.length > 0 && (
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-2 rounded-lg mb-4 w-fit">
                    <AlertCircle className="w-4 h-4" /> Awaiting input from: {unit.collaboratorIds.join(', ')}
                  </div>
                )}
                
                <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       <div className="w-6 h-6 rounded-full bg-indigo-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-indigo-700">M</div>
                       {unit.collaboratorIds?.slice(0,2).map((c, i) => (
                         <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white dark:border-slate-900 flex items-center justify-center text-[10px] font-bold text-slate-700">{c.charAt(0).toUpperCase()}</div>
                       ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <MessageSquare className="w-4 h-4" /> {unit.comments?.length || 0}
                    </div>
                  </div>
                  <Link to={`/plan/integrated/${unit.id}`} className="text-sm font-bold text-indigo-600 hover:underline">Open Unit</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
