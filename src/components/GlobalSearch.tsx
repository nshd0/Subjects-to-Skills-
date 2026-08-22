import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronRight, BookOpen, Layers, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { stages, secondaryStage, skillProgression } from '@/data/curriculum';

interface SearchResult {
  id: string;
  type: 'stage' | 'subject' | 'skill';
  title: string;
  subtitle: string;
  path: string;
}

export function GlobalSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Handle keyboard shortcut (cmd/ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search Logic
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchTerm = query.toLowerCase();
    const foundResults: SearchResult[] = [];

    // Search Stages and Subjects
    const allStages = [
      ...Object.values(stages),
      {
        ...secondaryStage,
        subjects: [...secondaryStage.phase1.subjects, ...secondaryStage.phase2.subjects]
      }
    ];

    allStages.forEach(stage => {
      const stageId = stage.id === 'secondary' ? 'secondary' : stage.id;
      
      // Match Stage Title/Description
      if (
        stage.title.toLowerCase().includes(searchTerm) || 
        stage.intro.toLowerCase().includes(searchTerm) ||
        stage.focus.some(f => f.toLowerCase().includes(searchTerm))
      ) {
        foundResults.push({
          id: `stage-${stageId}`,
          type: 'stage',
          title: stage.title,
          subtitle: stage.gradeBand,
          path: `/stage/${stageId}`
        });
      }

      // Match Subjects inside the stage
      stage.subjects?.forEach((subject: any) => {
        if (
          subject.name.toLowerCase().includes(searchTerm) ||
          subject.skills.toLowerCase().includes(searchTerm)
        ) {
          foundResults.push({
            id: `subject-${stageId}-${subject.name}`,
            type: 'subject',
            title: subject.name,
            subtitle: `in ${stage.title} • Skills: ${subject.skills}`,
            path: `/stage/${stageId}` // Route to stage page for now, as subjects are there
          });
        }
      });
    });

    // Search Skill Progressions
    skillProgression.forEach(sp => {
      if (
        sp.skill.toLowerCase().includes(searchTerm) ||
        sp.progression.some(p => p.toLowerCase().includes(searchTerm))
      ) {
        foundResults.push({
          id: `skill-${sp.skill}`,
          type: 'skill',
          title: sp.skill,
          subtitle: 'Skill Progression Curriculum',
          path: '/skill-progression'
        });
      }
    });

    setResults(foundResults.slice(0, 8)); // Limit to top 8 results
    setIsOpen(true);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    setIsOpen(false);
    setQuery('');
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'stage': return <Layers className="h-4 w-4 text-indigo-500" />;
      case 'subject': return <BookOpen className="h-4 w-4 text-emerald-500" />;
      case 'skill': return <Activity className="h-4 w-4 text-amber-500" />;
      default: return <Search className="h-4 w-4 text-slate-500" />;
    }
  };

  return (
    <div className="relative w-full max-w-md hidden md:block" ref={wrapperRef}>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
        </div>
        <input
          ref={inputRef}
          type="text"
          className="block w-full pl-10 pr-3 py-2 border border-slate-200 dark:border-slate-800 rounded-lg leading-5 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-all"
          placeholder="Search subjects, skills, or stages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
        />
        {/* Keyboard shortcut hint */}
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-xs text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 rounded px-1.5 py-0.5">⌘K</span>
        </div>
      </div>

      {/* Dropdown Results */}
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white dark:bg-slate-900 rounded-lg shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden z-50">
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-slate-500 dark:text-slate-400">
              No results found for "{query}"
            </div>
          ) : (
            <ul className="max-h-96 overflow-y-auto py-2">
              {results.map((result) => (
                <li key={result.id}>
                  <button
                    onClick={() => handleSelect(result.path)}
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-start gap-3 transition-colors"
                  >
                    <div className="mt-0.5 p-1.5 bg-slate-100 dark:bg-slate-950 rounded-md">
                      {getIcon(result.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-slate-900 dark:text-slate-100 truncate">
                        {result.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                        {result.subtitle}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-300 dark:text-slate-600 mt-1" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
