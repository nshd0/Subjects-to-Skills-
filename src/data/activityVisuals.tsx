import React from 'react';

// For this pilot, we use simple SVG assets or inline SVGs directly mapped to IDs.
export interface ActivityVisualData {
  [key: string]: {
    type: 'scenario' | 'step' | 'evidence' | 'safety' | 'material';
    svg: React.ReactNode;
    title?: string;
    description?: string;
    altText?: string;
  };
}

export const activityVisuals: ActivityVisualData = {
  // Scenario
  'g7-water-scenario': {
    type: 'scenario',
    title: 'Water Audit and Filtration Challenge',
    description: 'Students testing an inverted clear bottle filter with sand, gravel, and charcoal layers as water drips into a measuring cylinder beside a stopwatch.',
    altText: 'Grade 7 students investigate water use and test simple filtration materials while recording evidence with teacher guidance.',
    svg: (
      <svg viewBox="0 0 400 250" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="400" height="250" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {/* Desk */}
          <path d="M 50 180 L 350 180 M 70 180 L 70 230 M 330 180 L 330 230" stroke="#5E6B77" />
          {/* Teacher (Facilitating) */}
          <circle cx="100" cy="90" r="15" fill="#2B8C87" stroke="none" />
          <path d="M 100 105 L 100 150 M 100 115 L 130 130 M 100 115 L 70 130 M 85 150 L 85 180 M 115 150 L 115 180" stroke="#0F2A43" />
          {/* Student 1 (Measuring) */}
          <circle cx="200" cy="110" r="14" fill="#E7853C" stroke="none" />
          <path d="M 200 124 L 200 160 M 200 135 L 225 150 M 200 135 L 175 145 M 190 160 L 190 180 M 210 160 L 210 180" stroke="#0F2A43" />
          {/* Student 2 (Recording) */}
          <circle cx="280" cy="115" r="13" fill="#2B8C87" stroke="none" />
          <path d="M 280 128 L 280 165 M 280 140 L 255 150 M 280 140 L 300 155 M 270 165 L 270 180 M 290 165 L 290 180" stroke="#0F2A43" />
          {/* Apparatus */}
          {/* Filter Bottle */}
          <path d="M 220 120 L 240 120 L 235 155 L 225 155 Z" fill="#FFFFFF" stroke="#0F2A43" />
          {/* Drip */}
          <circle cx="230" cy="160" r="1.5" fill="#2B8C87" stroke="none" />
          <circle cx="230" cy="165" r="2" fill="#2B8C87" stroke="none" />
          {/* Measuring Cylinder */}
          <path d="M 225 170 L 235 170 L 235 180 L 225 180 Z" fill="#FFFFFF" stroke="#0F2A43" />
          {/* Clipboard */}
          <rect x="250" y="145" width="15" height="20" fill="#FFFFFF" stroke="#0F2A43" />
        </g>
      </svg>
    )
  },

  // Steps
  'g7-water-step-1': {
    type: 'step',
    title: 'Observe and Ask',
    description: 'Students identify a water-use or water-quality question worth investigating.',
    altText: 'Student timing a dripping tap with stopwatch while partner captures water in a graduated cylinder.',
    svg: (
      <svg viewBox="0 0 200 150" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="200" height="150" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Tap */}
          <path d="M 40 40 L 80 40 L 80 60 L 70 60 L 70 70 M 65 70 L 75 70" />
          {/* Drip */}
          <circle cx="70" cy="85" r="2" fill="#2B8C87" stroke="none" />
          {/* Cylinder */}
          <path d="M 60 100 L 80 100 L 80 130 L 60 130 Z" fill="#FFFFFF" />
          {/* Hand holding stopwatch */}
          <circle cx="140" cy="80" r="12" fill="#FFFFFF" />
          <path d="M 140 68 L 140 64 M 137 64 L 143 64" />
          <path d="M 140 80 L 140 73" />
        </g>
      </svg>
    )
  },
  'g7-water-step-2': {
    type: 'step',
    title: 'Plan the Investigation',
    description: 'Teams choose materials, agree on a fair comparison, and assign roles.',
    altText: 'Students choosing materials and agreeing on roles for a fair test.',
    svg: (
      <svg viewBox="0 0 200 150" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="200" height="150" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Table */}
          <path d="M 30 120 L 170 120" />
          {/* Notebook */}
          <rect x="80" y="100" width="40" height="20" fill="#FFFFFF" />
          {/* Pens/Materials */}
          <path d="M 50 110 L 60 120 M 140 105 L 145 120" />
          {/* Two heads planning */}
          <circle cx="70" cy="70" r="12" fill="#E7853C" stroke="none" />
          <circle cx="130" cy="70" r="12" fill="#2B8C87" stroke="none" />
          {/* Speech bubble */}
          <path d="M 90 60 Q 100 40 110 60" strokeDasharray="2 2" />
        </g>
      </svg>
    )
  },
  'g7-water-step-3': {
    type: 'step',
    title: 'Test Safely',
    description: 'Students test teacher-approved filtration-material combinations and observe changes.',
    altText: 'Student pouring turbid water into an inverted bottle filter containing layered materials.',
    svg: (
      <svg viewBox="0 0 200 150" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="200" height="150" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Hand pouring */}
          <path d="M 40 40 L 70 50 L 70 70 L 40 60 Z" fill="#FFFFFF" />
          {/* Filter */}
          <path d="M 90 60 L 130 60 L 120 110 L 100 110 Z" fill="#FFFFFF" />
          {/* Layers */}
          <path d="M 95 80 L 125 80" strokeDasharray="2 2" />
          <path d="M 98 95 L 122 95" strokeDasharray="1 3" />
          {/* Drips */}
          <circle cx="110" cy="118" r="1.5" fill="#2B8C87" stroke="none" />
          {/* Beaker */}
          <path d="M 100 125 L 120 125 L 120 140 L 100 140 Z" fill="#FFFFFF" />
        </g>
      </svg>
    )
  },
  'g7-water-step-4': {
    type: 'step',
    title: 'Record and Compare',
    description: 'Students document observations in a data table, create a simple graph where appropriate, and compare findings.',
    altText: 'Data table and bar graph recording filtration speed and water clarity.',
    svg: (
      <svg viewBox="0 0 200 150" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="200" height="150" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Chart Board */}
          <rect x="40" y="30" width="120" height="90" fill="#FFFFFF" />
          {/* Grid lines */}
          <path d="M 50 60 L 150 60 M 50 90 L 150 90 M 90 40 L 90 110" stroke="#5E6B77" strokeWidth="1" />
          {/* Data Points */}
          <path d="M 60 75 L 80 75 M 100 75 L 140 75 M 60 100 L 70 100 M 100 100 L 120 100" />
        </g>
      </svg>
    )
  },
  'g7-water-step-5': {
    type: 'step',
    title: 'Improve, Present and Reflect',
    description: 'Teams improve their prototype, communicate evidence, and reflect on what changed.',
    altText: 'Students presenting their improved prototype to the teacher and reflecting on results.',
    svg: (
      <svg viewBox="0 0 200 150" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="200" height="150" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Presenter */}
          <circle cx="60" cy="50" r="12" fill="#E7853C" stroke="none" />
          <path d="M 60 62 L 60 100 M 60 70 L 90 60 M 60 70 L 30 80" />
          {/* Prototype on table */}
          <path d="M 90 90 L 130 90 L 120 130 L 100 130 Z" fill="#FFFFFF" />
          <path d="M 80 130 L 140 130" />
          {/* Teacher listening */}
          <circle cx="160" cy="60" r="12" fill="#2B8C87" stroke="none" />
          <path d="M 160 72 L 160 100" />
        </g>
      </svg>
    )
  },

  // Evidence
  'g7-water-evidence': {
    type: 'evidence',
    title: 'Visible Learning Evidence',
    description: 'Learning becomes visible through evidence, explanation, improvement, and reflection.',
    altText: 'Cluster showing a data table, physical filter prototype, and a written investigation report.',
    svg: (
      <svg viewBox="0 0 300 200" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <rect width="300" height="200" fill="#F7F1E8" rx="8" stroke="none" />
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          {/* Data Table */}
          <rect x="40" y="40" width="70" height="90" fill="#FFFFFF" />
          <path d="M 45 55 L 105 55 M 45 70 L 105 70 M 45 85 L 105 85" strokeWidth="1" />
          <path d="M 75 40 L 75 130" strokeWidth="1" />
          
          {/* Prototype Filter */}
          <path d="M 130 60 L 170 60 L 160 140 L 140 140 Z" fill="#FFFFFF" />
          <path d="M 135 90 L 165 90" strokeDasharray="3 3" />
          <path d="M 138 110 L 162 110" strokeDasharray="2 4" />
          
          {/* Report */}
          <rect x="190" y="60" width="70" height="90" fill="#FFFFFF" />
          <path d="M 200 75 L 250 75 M 200 90 L 240 90 M 200 105 L 250 105" />
          <circle cx="210" cy="125" r="8" fill="#2B8C87" stroke="none" />
        </g>
      </svg>
    )
  },

  // Safety/Inclusion
  'g7-water-safety': {
    type: 'safety',
    altText: 'Icons representing safety, inclusive roles, and low-resource adaptations.',
    svg: (
      <svg viewBox="0 0 100 100" className="w-full h-auto text-slate-800 dark:text-slate-200" fill="none" stroke="currentColor">
        <g strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" stroke="#0F2A43">
          <circle cx="50" cy="50" r="40" fill="#F7F1E8" stroke="none" />
          <path d="M 50 30 L 50 60 M 50 70 L 50 72" stroke="#E7853C" strokeWidth="4" />
        </g>
      </svg>
    )
  }
};
