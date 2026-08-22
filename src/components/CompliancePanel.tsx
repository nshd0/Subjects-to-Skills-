import React from 'react';
import { ComplianceStatus } from '@/data/curriculum';
import { CheckCircle2, AlertCircle, HelpCircle, ShieldAlert } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';

export function CompliancePanel({ compliance }: { compliance?: ComplianceStatus }) {
  if (!compliance) return null;

  const renderStatus = (status: string) => {
    switch(status) {
      case 'Mapped':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 px-2.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800"><CheckCircle2 className="h-3.5 w-3.5" /> Mapped</span>;
      case 'Partially mapped':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/30 px-2.5 py-1 rounded-full border border-amber-200 dark:border-amber-800"><AlertCircle className="h-3.5 w-3.5" /> Partial</span>;
      case 'Not yet mapped':
        return <span className="flex items-center gap-1.5 text-xs font-medium text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 px-2.5 py-1 rounded-full border border-rose-200 dark:border-rose-800"><ShieldAlert className="h-3.5 w-3.5" /> Unmapped</span>;
      default:
        return <span className="flex items-center gap-1.5 text-xs font-medium text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-slate-200 dark:border-slate-700"><HelpCircle className="h-3.5 w-3.5" /> {status}</span>;
    }
  }

  const items = [
    { key: 'fln', label: 'Foundational Literacy & Numeracy' },
    { key: 'multilingualism', label: 'Multilingualism' },
    { key: 'mathematics', label: 'Mathematics' },
    { key: 'science', label: 'Science' },
    { key: 'socialScience', label: 'Social Science' },
    { key: 'artEducation', label: 'Art Education' },
    { key: 'physicalEducation', label: 'Physical Education & Well-being' },
    { key: 'vocationalEducation', label: 'Vocational Education' },
    { key: 'digitalLiteracy', label: 'Digital Literacy / CT' },
    { key: 'indianKnowledgeSystems', label: 'Indian Knowledge Systems' },
    { key: 'inclusion', label: 'Inclusion & Accessibility' },
  ];

  return (
    <Accordion type="single" collapsible className="w-full mt-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <AccordionItem value="compliance" className="border-none">
        <AccordionTrigger className="px-6 py-4 hover:no-underline">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900 rounded-md">
              <ShieldAlert className="h-5 w-5 text-indigo-700 dark:text-indigo-300" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-slate-900 dark:text-slate-100">NCF-SE 2023 Compliance Audit</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Internal tracker for curriculum mapping requirements</p>
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-6 pt-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6">
            {items.map(item => (
              <div key={item.key} className="flex flex-col gap-1.5">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.label}</span>
                <div>{renderStatus((compliance as any)[item.key] || 'Not yet mapped')}</div>
              </div>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
