import React, { useState } from 'react';
import { Unit, Lesson } from '@/types';
import { PlusCircle, Trash2 } from 'lucide-react';

interface CreateUnitFormProps {
  gradeId: string;
  onSubmit: (unit: Unit) => void;
  onCancel: () => void;
}

export function CreateUnitForm({ gradeId, onSubmit, onCancel }: CreateUnitFormProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [durationWeeks, setDurationWeeks] = useState(2);
  const [skillsText, setSkillsText] = useState('');
  
  const [lessonsDraft, setLessonsDraft] = useState<{ title: string; outline: string }[]>([
    { title: '', outline: '' }
  ]);

  const addLesson = () => {
    if (lessonsDraft.length < 5) {
      setLessonsDraft([...lessonsDraft, { title: '', outline: '' }]);
    }
  };

  const updateLesson = (index: number, field: 'title' | 'outline', value: string) => {
    const updated = [...lessonsDraft];
    updated[index][field] = value;
    setLessonsDraft(updated);
  };

  const removeLesson = (index: number) => {
    if (lessonsDraft.length > 1) {
      setLessonsDraft(lessonsDraft.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const targetSkillIds = skillsText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    const unitId = `custom-unit-${Date.now()}`;
    
    const lessons: Lesson[] = lessonsDraft.map((ld, i) => ({
      id: `lesson-${Date.now()}-${i}`,
      unitId,
      sequenceIndex: i + 1,
      title: ld.title || `Lesson ${i + 1}`,
      activities: [ld.outline || 'Draft activity outline'],
      resources: []
    }));

    const newUnit: Unit = {
      id: unitId,
      gradeId,
      title,
      description,
      durationWeeks,
      targetSkillIds,
      learningAreas: ['Custom'],
      status: 'draft',
      lessons
    };

    onSubmit(newUnit);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Unit</h2>
        <p className="text-sm text-slate-500 mt-1">Draft a custom competency-based unit for the selected grade.</p>
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="unitTitle" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Unit Title</label>
          <input 
            id="unitTitle"
            type="text" 
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden min-h-[44px]"
            placeholder="e.g. Exploring Local Ecosystems"
          />
        </div>
        
        <div>
          <label htmlFor="unitDescription" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
          <textarea 
            id="unitDescription"
            required
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            placeholder="Brief overview of the unit's inquiry and goals..."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="unitDuration" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Duration (Weeks)</label>
            <input 
              id="unitDuration"
              type="number" 
              min="1"
              max="12"
              value={durationWeeks}
              onChange={e => setDurationWeeks(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden min-h-[44px]"
            />
          </div>
          <div>
            <label htmlFor="targetSkills" className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Skills (comma separated)</label>
            <input 
              id="targetSkills"
              type="text" 
              value={skillsText}
              onChange={e => setSkillsText(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden min-h-[44px]"
              placeholder="e.g. data-representation, critical-thinking"
            />
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Lessons</h3>
          {lessonsDraft.length < 5 && (
            <button 
              type="button" 
              onClick={addLesson}
              className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden rounded-lg px-2"
            >
              <PlusCircle className="w-4 h-4" />
              Add Lesson
            </button>
          )}
        </div>

        <div className="space-y-4">
          {lessonsDraft.map((lesson, index) => (
            <div key={index} className="p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 space-y-3 relative">
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Lesson {index + 1}</span>
                {lessonsDraft.length > 1 && (
                  <button 
                    type="button" 
                    onClick={() => removeLesson(index)}
                    className="text-slate-400 hover:text-red-500 p-1 min-h-[44px] min-w-[44px] flex items-center justify-center focus:ring-2 focus:ring-red-500 focus:outline-hidden rounded-lg"
                    title="Remove Lesson"
                    aria-label="Remove Lesson"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
              <div>
                <label htmlFor={`lessonTitle-${index}`} className="sr-only">Lesson {index + 1} Title</label>
                <input 
                  id={`lessonTitle-${index}`}
                  type="text" 
                  value={lesson.title}
                  onChange={e => updateLesson(index, 'title', e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden min-h-[44px]"
                  placeholder="Lesson Title"
                />
              </div>
              <div>
                <label htmlFor={`lessonOutline-${index}`} className="sr-only">Lesson {index + 1} Outline</label>
                <textarea 
                  id={`lessonOutline-${index}`}
                  rows={2}
                  value={lesson.outline}
                  onChange={e => updateLesson(index, 'outline', e.target.value)}
                  className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                  placeholder="Brief activity outline..."
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-6 border-t border-slate-100 dark:border-slate-800">
        <button 
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors min-h-[44px] focus:ring-2 focus:ring-slate-500 focus:outline-hidden"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm transition-colors min-h-[44px] focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        >
          Save Unit
        </button>
      </div>
    </form>
  );
}
