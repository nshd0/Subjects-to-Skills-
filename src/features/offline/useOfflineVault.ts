import { useState, useEffect } from 'react';

export interface OfflineVaultItem {
  id: string;
  type: 'unit-plan' | 'worksheet' | 'rubric' | 'state-alignment';
  title: string;
  grade: string;
  subject: string;
  savedAt: number;
  payload: any;
  hasLocalEdits?: boolean;
  conflictState?: {
    localVersion: number;
    remoteVersion: number;
    remoteAuthor: string;
    diffSummary: string;
  };
}

const STORAGE_VAULT_KEY = 'subjects2skills_offline_vault';
const STORAGE_BUFFER_KEY = 'subjects2skills_offline_sync_buffer';

export function useOfflineVault() {
  const [vaultItems, setVaultItems] = useState<OfflineVaultItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_VAULT_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      // ignore
    }
    // Seed with initial default cached unit and worksheet for instant offline readiness
    return [
      {
        id: 'vault-unit-01',
        type: 'unit-plan',
        title: 'Living Watersheds: Climate Resilience & Community Ecology (Grade 8)',
        grade: 'Grade 8',
        subject: 'General Science & Geography',
        savedAt: Date.now() - 1000 * 60 * 60 * 24,
        payload: { lessonsCount: 3, durationWeeks: 4, standards: 'NCF-SE Middle Stage' }
      },
      {
        id: 'vault-ws-01',
        type: 'worksheet',
        title: 'Watershed Elevation & Bio-Indicator Field Worksheet',
        grade: 'Grade 8',
        subject: 'General Science',
        savedAt: Date.now() - 1000 * 60 * 60 * 12,
        payload: { pages: 2, answerKeyIncluded: true }
      }
    ];
  });

  const [activeConflict, setActiveConflict] = useState<OfflineVaultItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_VAULT_KEY, JSON.stringify(vaultItems));
    } catch (e) {
      // ignore
    }
  }, [vaultItems]);

  const saveToOfflineVault = (item: Omit<OfflineVaultItem, 'savedAt'>) => {
    setVaultItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, ...item, savedAt: Date.now() } : i);
      }
      return [{ ...item, savedAt: Date.now() }, ...prev];
    });
  };

  const removeFromVault = (id: string) => {
    setVaultItems(prev => prev.filter(i => i.id !== id));
  };

  const isSavedInVault = (id: string) => {
    return vaultItems.some(i => i.id === id);
  };

  /**
   * Simulates an offline sync conflict where another teacher edited remotely while this teacher edited offline.
   */
  const triggerSimulatedSyncConflict = () => {
    const target = vaultItems[0];
    if (!target) return;

    const conflictItem: OfflineVaultItem = {
      ...target,
      hasLocalEdits: true,
      conflictState: {
        localVersion: 3,
        remoteVersion: 4,
        remoteAuthor: 'Riya Sen (Science Coordinator)',
        diffSummary: 'Remote version added a 15-minute field stream test, while local version modified the formative assessment rubric.'
      }
    };

    setVaultItems(prev => prev.map(i => i.id === target.id ? conflictItem : i));
    setActiveConflict(conflictItem);
  };

  const resolveSyncConflict = (resolution: 'accept-local' | 'accept-remote' | 'merge-both') => {
    if (!activeConflict) return;
    setVaultItems(prev => prev.map(i => {
      if (i.id === activeConflict.id) {
        return {
          ...i,
          hasLocalEdits: false,
          conflictState: undefined
        };
      }
      return i;
    }));
    setActiveConflict(null);
  };

  return {
    vaultItems,
    saveToOfflineVault,
    removeFromVault,
    isSavedInVault,
    triggerSimulatedSyncConflict,
    activeConflict,
    resolveSyncConflict
  };
}
