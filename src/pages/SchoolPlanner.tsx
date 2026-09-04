import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ShieldAlert, Save, Printer, Plus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function SchoolPlanner() {
  const { user, profile } = useAuth();
  
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl text-center">
        <ShieldAlert className="h-16 w-16 mx-auto text-slate-400 mb-4" />
        <h1 className="text-3xl font-bold mb-4">School Implementation Planner</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          This is a private school workspace. You must be logged in to view or create implementation plans.
        </p>
        <p className="text-sm text-slate-500 bg-slate-100 dark:bg-slate-900 p-4 rounded inline-block">
          <strong>Privacy Note:</strong> Do not upload personally identifiable student information unless your school has approved the data process and access controls.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">School Implementation Planner</h1>
          <p className="text-slate-600 dark:text-slate-400">Private school workspace</p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()} className="flex items-center gap-2">
            <Printer className="h-4 w-4" /> Print Plan
          </Button>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> New Plan
          </Button>
        </div>
      </div>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8 text-sm text-yellow-800 dark:text-yellow-300 print:hidden flex gap-3 items-start">
        <ShieldAlert className="h-5 w-5 shrink-0" />
        <p>
          <strong>Privacy Warning:</strong> Do not upload personally identifiable student information unless your school has approved the data process and access controls. Saved drafts are stored securely and only accessible by you.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 md:p-8 shadow-sm">
        <h2 className="text-xl font-bold mb-6 border-b pb-2 border-slate-100 dark:border-slate-800">Create Pilot Plan</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Teacher Name / Code</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. TCH-01 or Ms. Sharma" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timeline / Term</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Term 1, Week 3" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Stage</label>
              <select className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <option value="">Select Stage...</option>
                <option value="Foundational">Foundational</option>
                <option value="Preparatory">Preparatory</option>
                <option value="Middle">Middle</option>
                <option value="Secondary">Secondary</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Grade</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Grade 5" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Subject</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Science" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Timetable Allocation</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 2 periods (80 mins)" />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Primary Skill</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Scientific thinking" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Supporting Skills (Max 2)</label>
              <input type="text" className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. Communication, Problem-solving" />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Resource Needs</label>
              <textarea className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20" placeholder="Materials, tech access, printed rubrics..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Evidence Collection Plan</label>
              <textarea className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20" placeholder="How will you capture student learning? (e.g. Portfolios, photos, peer feedback forms)"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Assessment Approach</label>
              <textarea className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20" placeholder="Diagnostic / Formative / Summative"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Inclusion Strategies</label>
              <textarea className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20" placeholder="Access, participation, expression supports..."></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Parent Communication Notes</label>
              <textarea className="w-full rounded-md border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-20" placeholder="What will parents see or need to know?"></textarea>
            </div>
          </div>
          
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-2 print:hidden">
            <Button variant="outline">Cancel</Button>
            <Button type="button" className="flex items-center gap-2"><Save className="h-4 w-4" /> Save Draft to Private Workspace</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
