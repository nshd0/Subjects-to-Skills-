import React, { useState } from 'react';
import { SkillRubricData, RubricTier } from '@/types';
import { useProgress } from '@/contexts/ProgressContext';
import { Copy, Check, Printer, Award, HelpCircle, Bookmark, FileCode } from 'lucide-react';

interface SkillRubricProps {
  key?: React.Key;
  rubric: SkillRubricData;
}

export function SkillRubric({ rubric }: SkillRubricProps) {
  const [copiedRubric, setCopiedRubric] = useState(false);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [selectedLevels, setSelectedLevels] = useState<Record<string, RubricTier>>({});
  const { isBookmarked, toggleBookmark } = useProgress();

  const isSaved = isBookmarked(rubric.id);

  const handleToggleBookmark = () => {
    toggleBookmark({
      id: rubric.id,
      type: 'rubric',
      title: rubric.title,
      subtitle: `${rubric.grade} · ${rubric.skill}`,
      grade: rubric.grade,
      stage: rubric.stage,
      path: `/assessment`
    });
  };

  const levels: { key: RubricTier; title: string; color: string; desc: string }[] = [
    { 
      key: 'Emerging', 
      title: 'Emerging', 
      color: 'bg-amber-50 text-amber-900 border-amber-200 dark:bg-amber-950/30 dark:text-amber-200 dark:border-amber-800',
      desc: 'Demonstrates partial grasp; requires continuous teacher scaffolding and frequent prompts.'
    },
    { 
      key: 'Developing', 
      title: 'Developing', 
      color: 'bg-blue-50 text-blue-900 border-blue-200 dark:bg-blue-950/30 dark:text-blue-200 dark:border-blue-800',
      desc: 'Executes core procedure accurately with occasional guidance; minor inconsistencies.'
    },
    { 
      key: 'Proficient', 
      title: 'Proficient', 
      color: 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-200 dark:border-emerald-800',
      desc: 'Demonstrates independent mastery; explains rationale clearly with consistent observable evidence.'
    },
    { 
      key: 'Transfer', 
      title: 'Transfer', 
      color: 'bg-purple-50 text-purple-900 border-purple-200 dark:bg-purple-950/30 dark:text-purple-200 dark:border-purple-800',
      desc: 'Applies skill autonomously to novel, unfamiliar contexts; adapts methods and identifies edge cases.'
    },
  ];

  const handleLevelSelect = (criterionId: string, level: RubricTier) => {
    setSelectedLevels(prev => ({
      ...prev,
      [criterionId]: prev[criterionId] === level ? (undefined as unknown as RubricTier) : level
    }));
  };

  const copyRubricText = () => {
    let text = `SKILL RUBRIC: ${rubric.title}\n`;
    text += `Skill Focus: ${rubric.skill}\n`;
    text += `Grade: ${rubric.grade} | Subject: ${rubric.subject}\n\n`;

    rubric.criteria.forEach((crit, i) => {
      text += `CRITERION ${i + 1}: ${crit.criterion}\n`;
      text += `  - Emerging: ${crit.emerging}\n`;
      text += `  - Developing: ${crit.developing}\n`;
      text += `  - Proficient: ${crit.proficient}\n`;
      text += `  - Transfer: ${crit.transfer}\n\n`;
    });

    if (rubric.teacherNotes) {
      text += `Teacher Guidance Note: ${rubric.teacherNotes}\n`;
    }

    navigator.clipboard.writeText(text);
    setCopiedRubric(true);
    setTimeout(() => setCopiedRubric(false), 2000);
  };

  const copyBlankRubricTemplate = () => {
    const template = `
# SUBJECTS2SKILLS 4-LEVEL OBSERVABLE SKILL RUBRIC TEMPLATE
**Rubric Title:** [Skill Assessment Name]
**Target Grade & Stage:** [e.g. Grade 3 · Preparatory Stage]
**Subject:** [e.g. Environmental Studies / Mathematics]
**Observable Skill:** [e.g. Experimental Observation and Recording]

## Performance Continuum
| Observable Criterion | Emerging (Level 1) | Developing (Level 2) | Proficient - Target (Level 3) | Transfer (Level 4) |
| :--- | :--- | :--- | :--- | :--- |
| **[Criterion 1]** | Requires step-by-step guidance; misses key details. | Executes with peer or teacher cueing; mostly accurate. | Independently and accurately performs and articulates rationale. | Adapts method to unfamiliar context; explains exceptions. |
| **[Criterion 2]** | Records data irregularly or requires template completion. | Records data with minor formatting omissions. | Records systematic data clearly with standard units. | Analyzes anomalies and explains patterns autonomously. |

## Teacher Observation Guidelines
- Observe during active group work or independent synthesis.
- Focus on observable student behavior and tangible evidence, not rote test scores.
`.trim();

    navigator.clipboard.writeText(template);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden shadow-xs print:border-none print:shadow-none print:break-inside-avoid">
      {/* Print-Only Header */}
      <div className="hidden print:block p-4 border-b-2 border-slate-300">
        <div className="text-[10px] uppercase font-bold text-slate-500">
          Subjects2Skills Framework · Observable Skill Rubric
        </div>
        <h3 className="text-xl font-bold text-slate-950 mt-1">
          {rubric.title}
        </h3>
        <div className="text-xs text-slate-700 mt-1 flex gap-4">
          <span><strong>Grade:</strong> {rubric.grade} ({rubric.stage})</span>
          <span><strong>Subject:</strong> {rubric.subject}</span>
          <span><strong>Skill:</strong> {rubric.skill}</span>
        </div>
      </div>

      {/* Rubric Header */}
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 flex flex-col md:flex-row md:items-center justify-between gap-3 print:bg-transparent print:p-0 print:border-none">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300">
              {rubric.grade} · {rubric.stage}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              {rubric.subject}
            </span>
            <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300">
              Observable Performance Criteria
            </span>
          </div>
          <h4 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 print:hidden" />
            {rubric.title}
          </h4>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Skill Assessed: <strong className="text-slate-700 dark:text-slate-300">{rubric.skill}</strong>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 self-end md:self-auto print:hidden">
          <button
            onClick={handleToggleBookmark}
            className={`p-1.5 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1 min-h-[36px] ${
              isSaved 
                ? 'bg-indigo-50 border-indigo-300 text-indigo-700 dark:bg-indigo-950/60 dark:border-indigo-700 dark:text-indigo-300' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
            title={isSaved ? "Remove from bookmarks" : "Save to bookmarks"}
            aria-label={isSaved ? "Remove from bookmarks" : "Save to bookmarks"}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={copyRubricText}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
            title="Copy rubric text to clipboard"
            aria-label="Copy rubric text"
          >
            {copiedRubric ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedRubric ? 'Copied' : 'Copy Rubric'}</span>
          </button>

          <button
            onClick={copyBlankRubricTemplate}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700 rounded-lg transition-colors min-h-[36px]"
            title="Copy blank rubric markdown template"
            aria-label="Copy blank rubric template"
          >
            {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <FileCode className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copiedTemplate ? 'Copied' : 'Blank Template'}</span>
          </button>

          <button
            onClick={() => window.print()}
            className="p-1.5 text-slate-500 hover:text-slate-900 dark:hover:text-white bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg min-h-[36px] min-w-[36px] flex items-center justify-center"
            title="Print rubric sheet"
            aria-label="Print rubric"
          >
            <Printer className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* 4 Progression Levels Explainer Banner */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4 bg-slate-100/60 dark:bg-slate-800/20 border-b border-slate-200 dark:border-slate-800 text-xs print:bg-white print:border-slate-300">
        {levels.map(l => (
          <div key={l.key} className={`p-2 rounded border ${l.color} print:bg-white print:border-slate-300 print:text-black`}>
            <span className="font-bold block uppercase tracking-wider text-[10px] mb-0.5 print:text-black">{l.title}</span>
            <span className="leading-tight text-[11px] opacity-90 print:text-black">{l.desc}</span>
          </div>
        ))}
      </div>

      {/* Rubric Criteria Table / Grid */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800 print:bg-white print:border-slate-400 print:text-black">
              <th scope="col" className="p-3 font-bold w-1/5 min-w-[150px]">Observable Criterion</th>
              <th scope="col" className="p-3 font-bold w-1/5 min-w-[170px] text-amber-800 dark:text-amber-300 print:text-black">Emerging</th>
              <th scope="col" className="p-3 font-bold w-1/5 min-w-[170px] text-blue-800 dark:text-blue-300 print:text-black">Developing</th>
              <th scope="col" className="p-3 font-bold w-1/5 min-w-[170px] text-emerald-800 dark:text-emerald-300 print:text-black">Proficient (Target)</th>
              <th scope="col" className="p-3 font-bold w-1/5 min-w-[170px] text-purple-800 dark:text-purple-300 print:text-black">Transfer</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800 print:divide-slate-300">
            {rubric.criteria.map((crit) => {
              const currentSelected = selectedLevels[crit.id];
              return (
                <tr key={crit.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-colors">
                  <td className="p-3 font-semibold text-slate-900 dark:text-white align-top bg-slate-50/30 dark:bg-slate-900/30 print:bg-white print:text-black">
                    <span className="text-indigo-600 dark:text-indigo-400 block mb-1 print:text-slate-700">Criterion</span>
                    {crit.criterion}
                  </td>
                  
                  {/* Emerging */}
                  <td 
                    onClick={() => handleLevelSelect(crit.id, 'Emerging')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLevelSelect(crit.id, 'Emerging'); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select Emerging level for ${crit.criterion}`}
                    className={`p-3 align-top cursor-pointer transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 print:cursor-default ${
                      currentSelected === 'Emerging' 
                        ? 'bg-amber-100/70 dark:bg-amber-950/60 ring-2 ring-amber-500 font-medium text-amber-950 dark:text-amber-100 print:bg-slate-100' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-amber-50/30 dark:hover:bg-amber-950/20 print:text-black'
                    }`}
                  >
                    <div className="leading-relaxed">{crit.emerging}</div>
                  </td>

                  {/* Developing */}
                  <td 
                    onClick={() => handleLevelSelect(crit.id, 'Developing')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLevelSelect(crit.id, 'Developing'); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select Developing level for ${crit.criterion}`}
                    className={`p-3 align-top cursor-pointer transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 print:cursor-default ${
                      currentSelected === 'Developing' 
                        ? 'bg-blue-100/70 dark:bg-blue-950/60 ring-2 ring-blue-500 font-medium text-blue-950 dark:text-blue-100 print:bg-slate-100' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-blue-50/30 dark:hover:bg-blue-950/20 print:text-black'
                    }`}
                  >
                    <div className="leading-relaxed">{crit.developing}</div>
                  </td>

                  {/* Proficient */}
                  <td 
                    onClick={() => handleLevelSelect(crit.id, 'Proficient')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLevelSelect(crit.id, 'Proficient'); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select Proficient level for ${crit.criterion}`}
                    className={`p-3 align-top cursor-pointer transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 print:cursor-default ${
                      currentSelected === 'Proficient' 
                        ? 'bg-emerald-100/70 dark:bg-emerald-950/60 ring-2 ring-emerald-500 font-medium text-emerald-950 dark:text-emerald-100 print:bg-slate-100' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-emerald-50/30 dark:hover:bg-emerald-950/20 print:text-black'
                    }`}
                  >
                    <div className="leading-relaxed">{crit.proficient}</div>
                  </td>

                  {/* Transfer */}
                  <td 
                    onClick={() => handleLevelSelect(crit.id, 'Transfer')}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleLevelSelect(crit.id, 'Transfer'); }}
                    tabIndex={0}
                    role="button"
                    aria-label={`Select Transfer level for ${crit.criterion}`}
                    className={`p-3 align-top cursor-pointer transition-all focus:outline-hidden focus:ring-2 focus:ring-indigo-500 print:cursor-default ${
                      currentSelected === 'Transfer' 
                        ? 'bg-purple-100/70 dark:bg-purple-950/60 ring-2 ring-purple-500 font-medium text-purple-950 dark:text-purple-100 print:bg-slate-100' 
                        : 'text-slate-700 dark:text-slate-300 hover:bg-purple-50/30 dark:hover:bg-purple-950/20 print:text-black'
                    }`}
                  >
                    <div className="leading-relaxed">{crit.transfer}</div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Teacher Guidance Note */}
      {rubric.teacherNotes && (
        <div className="p-3 bg-amber-50/60 dark:bg-amber-950/20 border-t border-amber-100 dark:border-amber-900/30 text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2 print:bg-white print:border-slate-300 print:text-black">
          <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5 print:hidden" />
          <p><strong>Teacher Observation Rule:</strong> {rubric.teacherNotes}</p>
        </div>
      )}
    </div>
  );
}

