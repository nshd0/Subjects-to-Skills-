import React from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function TeacherToolkit() {
  const [copied, setCopied] = React.useState(false);

  const templateText = `Unit Planning Template
Grade and Stage:
CBSE Subject:
Connected Subjects:
Essential Knowledge:
Primary Skill:
Supporting Skills:
Learning Outcome:
Pedagogy:
Classroom Task:
Evidence:
Assessment:
Transfer Question:`;

  const handleCopy = () => {
    navigator.clipboard.writeText(templateText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Teacher Toolkit</h1>
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
          Practical resources and templates for educators to design skill-centred learning units.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-indigo-600 dark:text-indigo-400">Stage-Based Planning Guide</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>1. Identify the developmental focus of the stage.</li>
              <li>2. Select the core skill to be developed.</li>
              <li>3. Map the skill to existing subject knowledge.</li>
              <li>4. Choose an age-appropriate pedagogical mode.</li>
              <li>5. Design a task that generates visible evidence.</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="text-lg font-bold mb-3 text-emerald-600 dark:text-emerald-400">Assessment Evidence Ideas</h3>
            <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>• Oral presentations and debates</li>
              <li>• Process journals and logs</li>
              <li>• Physical prototypes and models</li>
              <li>• Multimedia and digital campaigns</li>
              <li>• Peer critique and self-reflection rubrics</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">Unit Planning Template</h2>
        
        <div className="relative bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 p-6 overflow-hidden">
          <div className="absolute top-4 right-4">
            <Button variant="outline" size="sm" onClick={handleCopy} className="gap-2 bg-white dark:bg-slate-900">
              {copied ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied!' : 'Copy to Clipboard'}
            </Button>
          </div>
          <pre className="text-sm text-slate-700 dark:text-slate-300 font-mono whitespace-pre-wrap mt-8 lg:mt-0">
            {templateText}
          </pre>
        </div>

        <div className="mt-12 p-6 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/50">
          <h3 className="text-lg font-bold text-amber-800 dark:text-amber-400 mb-2">Reflection Prompts for Educators</h3>
          <p className="text-amber-700 dark:text-amber-300 text-sm mb-4">Ask these questions when designing a unit:</p>
          <ul className="list-disc pl-5 space-y-1 text-amber-800 dark:text-amber-200 text-sm">
            <li>Does this task require students to simply recall information, or apply a skill?</li>
            <li>How does this connect to the real world or other disciplines?</li>
            <li>What visible evidence will tell me the student has mastered this skill?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
