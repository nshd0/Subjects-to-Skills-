import React from 'react';
import { WifiOff, RefreshCw, CheckCircle2, Database } from 'lucide-react';
import { useOnlineStatus } from '@/hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2.5 rounded-2xl bg-amber-600/95 text-white px-4 py-2.5 text-xs font-semibold shadow-2xl backdrop-blur-xs border border-amber-400 animate-pulse">
      <WifiOff className="w-4 h-4 shrink-0" />
      <div>
        <div className="font-bold">Offline-First Mode Active</div>
        <div className="text-[10px] text-amber-100 font-normal">
          Using cached curriculum and lesson vault. Edits will sync automatically when connection restores.
        </div>
      </div>
    </div>
  );
};
