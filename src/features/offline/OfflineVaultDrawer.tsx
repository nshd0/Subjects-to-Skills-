import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  WifiOff, 
  Trash2, 
  CheckCircle2, 
  AlertTriangle, 
  GitMerge, 
  X, 
  DownloadCloud, 
  Layers, 
  FileText, 
  RefreshCw,
  HardDrive
} from 'lucide-react';
import { useOfflineVault } from './useOfflineVault';
import { PWAInstallButton } from '@/components/PWAInstallButton';

export const OfflineVaultDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { 
    vaultItems, 
    removeFromVault, 
    triggerSimulatedSyncConflict, 
    activeConflict, 
    resolveSyncConflict 
  } = useOfflineVault();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white dark:bg-slate-900 rounded-3xl max-w-2xl w-full p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 text-xs"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 flex items-center gap-1">
                <Database className="w-3 h-3" /> IndexedDB Offline Storage
              </span>
              <span className="text-slate-400">Low-Bandwidth Optimized</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              Offline Resource Vault ({vaultItems.length} cached)
            </h3>
          </div>

          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-600">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* PWA App Install Callout */}
        <div className="p-4 bg-indigo-50 dark:bg-indigo-950/40 rounded-2xl border border-indigo-200 dark:border-indigo-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="font-bold text-indigo-900 dark:text-indigo-200 text-xs">
              Install Android-First Mobile PWA
            </div>
            <div className="text-[11px] text-slate-600 dark:text-slate-400">
              Zero internet required once installed. Works in remote rural classrooms.
            </div>
          </div>
          <PWAInstallButton />
        </div>

        {/* Sync Conflict Resolution Alert Banner */}
        {activeConflict && (
          <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 space-y-3">
            <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-200 text-xs">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              Sync Conflict Detected: {activeConflict.title}
            </div>
            <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-[11px]">
              {activeConflict.conflictState?.diffSummary}
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                onClick={() => resolveSyncConflict('merge-both')}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center gap-1 shadow-xs"
              >
                <GitMerge className="w-3.5 h-3.5" /> 3-Way CRDT Auto-Merge (Keep Both)
              </button>
              <button
                type="button"
                onClick={() => resolveSyncConflict('accept-local')}
                className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
              >
                Keep Local Offline Edits
              </button>
              <button
                type="button"
                onClick={() => resolveSyncConflict('accept-remote')}
                className="px-3 py-1.5 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold"
              >
                Accept Remote Changes
              </button>
            </div>
          </div>
        )}

        {/* Cached Items List */}
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1">
          {vaultItems.map((item) => (
            <div
              key={item.id}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 flex items-center justify-between gap-3"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {item.type}
                  </span>
                  <span className="font-bold text-slate-900 dark:text-white">{item.title}</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  {item.grade} · {item.subject} · Cached: {new Date(item.savedAt).toLocaleDateString()}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  title="Remove from offline cache"
                  onClick={() => removeFromVault(item.id)}
                  className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
          <button
            type="button"
            onClick={triggerSimulatedSyncConflict}
            className="text-[11px] font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <RefreshCw className="w-3.5 h-3.5" /> Simulate Offline Sync Conflict
          </button>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold"
          >
            Close Vault
          </button>
        </div>
      </motion.div>
    </div>
  );
};
