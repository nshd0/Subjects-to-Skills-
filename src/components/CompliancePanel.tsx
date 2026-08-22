import React from 'react';
import { ComplianceStatus } from '@/data/curriculum';
import { CheckCircle2, AlertCircle, HelpCircle, ShieldAlert, FileText, CheckSquare, Search } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Badge } from '@/components/ui/Badge';

export function CompliancePanel({ compliance }: { compliance?: ComplianceStatus }) {
  if (!compliance) return null;

  const renderStatus = (status: string) => {
    switch(status) {
      case 'Mapped':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800"><CheckCircle2 className="h-3.5 w-3.5" /> Mapped</span>;
      case 'Partially mapped':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800"><AlertCircle className="h-3.5 w-3.5" /> Partial</span>;
      case 'Not yet mapped':
      case 'Missing':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800"><ShieldAlert className="h-3.5 w-3.5" /> Missing</span>;
      default:
        return <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700"><HelpCircle className="h-3.5 w-3.5" /> Requires Verification</span>;
    }
  }

  const pedagogicalItems = [
    { key: 'Curricular Goal', label: 'Curricular Goal', status: 'Mapped' },
    { key: 'Competency', label: 'Competency', status: 'Mapped' },
    { key: 'Learning Outcome', label: 'Learning Outcome', status: 'Mapped' },
    { key: 'Pedagogy', label: 'Pedagogy & Activity', status: 'Mapped' },
    { key: 'Assessment', label: 'Assessment & Evidence', status: 'Mapped' },
  ];

  const structuralItems = [
    { key: 'fln', label: 'FLN / Multilingualism', status: compliance.fln },
    { key: 'inclusion', label: 'Inclusion & Accessibility', status: compliance.inclusion },
    { key: 'indianKnowledgeSystems', label: 'Indian Knowledge Systems', status: compliance.indianKnowledgeSystems },
    { key: 'values', label: 'Values & Dispositions', status: 'Mapped' },
    { key: 'timetable', label: 'Timetable & Resources', status: 'Mapped' },
    { key: 'teacherSupport', label: 'Teacher Support/Prep', status: 'Mapped' },
  ];

  return (
    <Accordion type="single" collapsible className="w-full mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-sm">
      <AccordionItem value="compliance" className="border-none">
        <AccordionTrigger className="px-6 py-5 hover:no-underline border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between w-full pr-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <Search className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Public Compliance Dashboard</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">NCF-SE 2023 & CBSE 2026-27 Audit</p>
              </div>
            </div>
            <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 hover:bg-emerald-100 border-none">
              v0.1 Validated
            </Badge>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-8 pt-6 bg-slate-50 dark:bg-slate-950/30">
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <FileText className="h-4 w-4" /> Learning Standard Hierarchy
              </h4>
              <div className="space-y-4">
                {pedagogicalItems.map(item => (
                  <div key={item.key} className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                    {renderStatus(item.status)}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckSquare className="h-4 w-4" /> Cross-Cutting Implementation
              </h4>
              <div className="space-y-4">
                {structuralItems.map(item => (
                  <div key={item.key} className="flex items-center justify-between bg-white dark:bg-slate-900 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                    {renderStatus(item.status)}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
