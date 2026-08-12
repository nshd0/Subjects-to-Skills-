import React, { createContext, useContext, useEffect, useState } from 'react';

interface ProgressState {
  savedModules: string[];
  toggleModule: (id: string) => void;
  isSaved: (id: string) => boolean;
}

const ProgressContext = createContext<ProgressState | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [savedModules, setSavedModules] = useState<string[]>(() => {
    const saved = localStorage.getItem('curriculum-progress');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('curriculum-progress', JSON.stringify(savedModules));
  }, [savedModules]);

  const toggleModule = (id: string) => {
    setSavedModules((prev) => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedModules.includes(id);

  return (
    <ProgressContext.Provider value={{ savedModules, toggleModule, isSaved }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
