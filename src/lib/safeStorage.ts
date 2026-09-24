/**
 * Safe LocalStorage abstraction with in-memory fallback.
 * Prevents white screen crashes in sandboxed iframes, private browsing,
 * or when third-party cookies/storage are blocked.
 */

const memoryStore = new Map<string, string>();

function isStorageAvailable(): boolean {
  try {
    if (typeof window === 'undefined' || !window.localStorage) {
      return false;
    }
    const testKey = '__s2s_storage_test__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

const storageAvailable = isStorageAvailable();

export const safeStorage = {
  getItem(key: string): string | null {
    try {
      if (storageAvailable) {
        return window.localStorage.getItem(key);
      }
    } catch (e) {
      console.warn(`[safeStorage] getItem failed for key "${key}":`, e);
    }
    return memoryStore.get(key) ?? null;
  },

  setItem(key: string, value: string): void {
    try {
      if (storageAvailable) {
        window.localStorage.setItem(key, value);
        return;
      }
    } catch (e) {
      console.warn(`[safeStorage] setItem failed for key "${key}":`, e);
    }
    memoryStore.set(key, value);
  },

  removeItem(key: string): void {
    try {
      if (storageAvailable) {
        window.localStorage.removeItem(key);
        return;
      }
    } catch (e) {
      console.warn(`[safeStorage] removeItem failed for key "${key}":`, e);
    }
    memoryStore.delete(key);
  },

  clear(): void {
    try {
      if (storageAvailable) {
        window.localStorage.clear();
        return;
      }
    } catch (e) {
      console.warn('[safeStorage] clear failed:', e);
    }
    memoryStore.clear();
  }
};
