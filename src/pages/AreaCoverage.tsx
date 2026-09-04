import React from 'react';
import { CheckCircle2, Circle, AlertCircle, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { stages, secondaryStage } from '@/data/curriculum';

export function AreaCoverage() {
  const coverageAreas = [
    { name: 'Languages and multilingualism', status: 'mapped' },
    { name: 'Mathematics', status: 'mapped' },
    { name: 'The World Around Us / Environmental understanding', status: 'mapped' },
    { name: 'Science', status: 'mapped' },
    { name: 'Social Science / Humanities', status: 'mapped' },
    { name: 'Computational Thinking and AI', status: 'partially-mapped' },
    { name: 'Art Education', status: 'mapped' },
    { name: 'Physical Education and Well-being', status: 'mapped' },
    { name: 'Work Education', status: 'partially-mapped' },
    { name: 'Vocational Education / Kaushal Bodh', status: 'partially-mapped' },
    { name: 'Skill subjects', status: 'partially-mapped' },
    { name: 'General Studies', status: 'not-mapped' },
    { name: 'Indian Knowledge Systems and local context', status: 'partially-mapped' },
    { name: 'Constitutional values and citizenship', status: 'mapped' },
    { name: 'Environmental sustainability', status: 'mapped' },
    { name: 'Inclusion and accessibility', status: 'mapped' },
    { name: 'Assessment', status: 'mapped' },
    { name: 'Career guidance and subject choice', status: 'not-mapped' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'mapped': return <CheckCircle2 className="h-5 w-5 text-emerald-500" />;
      case 'partially-mapped': return <Clock className="h-5 w-5 text-amber-500" />;
      case 'not-mapped': return <Circle className="h-5 w-5 text-slate-300 dark:text-slate-600" />;
      case 'requires-verification': return <AlertCircle className="h-5 w-5 text-indigo-500" />;
      default: return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'mapped': return 'Mapped';
      case 'partially-mapped': return 'Partially Mapped';
      case 'not-mapped': return 'Not Yet Mapped';
      case 'requires-verification': return 'Requires Verification';
      default: return status;
    }
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Equal Curricular Area Coverage</h1>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-3xl">
        This dashboard tracks the availability of Subjects2Skills mapping records across essential NCF-SE 2023 curricular areas.
        <br/><br/>
        <strong>Note:</strong> Coverage status indicates availability of Subjects2Skills mapping records. It does not represent official curriculum approval or school compliance certification.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {coverageAreas.map(area => (
          <Card key={area.name} className="flex flex-row items-start p-4 space-y-0 gap-4">
            <div className="mt-0.5">{getStatusIcon(area.status)}</div>
            <div>
              <h3 className="font-semibold text-sm leading-tight text-slate-900 dark:text-white">{area.name}</h3>
              <p className="text-xs text-slate-500 mt-1">{getStatusLabel(area.status)}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Secondary Stage Broad Areas</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Languages', 'Humanities', 'Mathematics', 'Sciences', 'Skill Subjects', 'General Studies', 'Health and Physical Education'].map(area => (
            <div key={area} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-lg text-center font-medium text-sm">
              {area}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
