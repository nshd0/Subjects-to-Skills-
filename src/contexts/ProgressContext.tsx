import React, { createContext, useContext, useEffect, useState } from 'react';

export interface BookmarkItem {
  id: string;
  type: 'activity' | 'mapping' | 'rubric' | 'grade';
  title: string;
  subtitle?: string;
  stage?: string;
  grade?: string;
  path: string;
  timestamp: number;
}

interface ProgressState {
  savedModules: string[];
  toggleModule: (id: string) => void;
  isSaved: (id: string) => boolean;
  bookmarks: BookmarkItem[];
  toggleBookmark: (item: Omit<BookmarkItem, 'timestamp'>) => boolean; // returns true if now saved, false if removed
  isBookmarked: (id: string) => boolean;
  removeBookmark: (id: string) => void;
  clearBookmarks: () => void;
}

const ProgressContext = createContext<ProgressState | undefined>(undefined);

const BOOKMARKS_STORAGE_KEY = 'subjects2skills-bookmarks';
const MODULES_STORAGE_KEY = 'curriculum-progress';

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [savedModules, setSavedModules] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(MODULES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>(() => {
    try {
      const saved = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(MODULES_STORAGE_KEY, JSON.stringify(savedModules));
    } catch (e) {
      console.warn('Failed to persist curriculum progress', e);
    }
  }, [savedModules]);

  useEffect(() => {
    try {
      localStorage.setItem(BOOKMARKS_STORAGE_KEY, JSON.stringify(bookmarks));
    } catch (e) {
      console.warn('Failed to persist bookmarks', e);
    }
  }, [bookmarks]);

  const toggleModule = (id: string) => {
    setSavedModules((prev) => 
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const isSaved = (id: string) => savedModules.includes(id);

  const isBookmarked = (id: string) => bookmarks.some(b => b.id === id);

  const toggleBookmark = (item: Omit<BookmarkItem, 'timestamp'>): boolean => {
    const exists = bookmarks.some(b => b.id === item.id);
    if (exists) {
      setBookmarks(prev => prev.filter(b => b.id !== item.id));
      // Also sync savedModules
      setSavedModules(prev => prev.filter(id => id !== item.id));
      return false;
    } else {
      const newItem: BookmarkItem = {
        ...item,
        timestamp: Date.now()
      };
      setBookmarks(prev => [newItem, ...prev]);
      setSavedModules(prev => prev.includes(item.id) ? prev : [...prev, item.id]);
      return true;
    }
  };

  const removeBookmark = (id: string) => {
    setBookmarks(prev => prev.filter(b => b.id !== id));
    setSavedModules(prev => prev.filter(m => m !== id));
  };

  const clearBookmarks = () => {
    setBookmarks([]);
    setSavedModules([]);
  };

  return (
    <ProgressContext.Provider 
      value={{ 
        savedModules, 
        toggleModule, 
        isSaved, 
        bookmarks, 
        toggleBookmark, 
        isBookmarked, 
        removeBookmark, 
        clearBookmarks 
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};

