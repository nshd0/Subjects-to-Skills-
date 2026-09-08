import React, { useState } from 'react';
import { Unit, Lesson } from '@/types';

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
  const [lessonCount, setLessonCount] = useState(1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    const targetSkillIds = skillsText
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    // Generate some basic stub lessons
    const lessons: Lesson[] = Array.from({ length: lessonCount }).map((_, i) => ({
      id: `lesson-${Date.now()}-${i}`,
      unitId: `custom-unit-${Date.now()}`,
      sequenceIndex: i + 1,
      title: `Lesson ${i + 1}`,
      activities: ['Draft activity outline here'],
      resources: []
    }));

    const newUnit: Unit = {
      id: `custom-unit-${Date.now()}`,
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
    <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-md max-w-2xl mx-auto space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Create New Unit</h2>
        <p className="text-sm text-slate-500 mt-1">Draft a custom competency-based unit for the selected grade.</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Unit Title</label>
          <input 
            type="text" 
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            placeholder="e.g. Exploring Local Ecosystems"
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
          <textarea 
            required
            rows={3}
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            placeholder="Brief overview of the unit's inquiry and goals..."
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Duration (Weeks)</label>
            <input 
              type="number" 
              min="1"
              max="12"
              value={durationWeeks}
              onChange={e => setDurationWeeks(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Number of Lessons</label>
            <input 
              type="number" 
              min="1"
              max="20"
              value={lessonCount}
              onChange={e => setLessonCount(parseInt(e.target.value) || 1)}
              className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">Target Skills (comma separated)</label>
          <input 
            type="text" 
            value={skillsText}
            onChange={e => setSkillsText(e.target.value)}
            className="w-full px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
            placeholder="e.g. data-representation, critical-thinking"
          />
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
        <button 
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="submit"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-sm transition-colors"
        >
          Save Unit
        </button>
      </div>
    </form>
  );
}
