import React from 'react';
import { useProgress } from '@/contexts/ProgressContext';
import { Link } from 'react-router-dom';
import { 
  Bookmark, X, Trash2, ArrowRight, BookOpen, Sparkles, Award, ExternalLink 
} from 'lucide-react';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookmarksDrawer({ isOpen, onClose }: BookmarksDrawerProps) {
  const { bookmarks, removeBookmark, clearBookmarks } = useProgress();

  if (!isOpen) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'activity':
        return <Sparkles className="w-4 h-4 text-blue-500" />;
      case 'mapping':
        return <BookOpen className="w-4 h-4 text-indigo-500" />;
      case 'rubric':
        return <Award className="w-4 h-4 text-emerald-500" />;
      default:
        return <Bookmark className="w-4 h-4 text-purple-500" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'activity': return 'Classroom Activity';
      case 'mapping': return 'Curriculum Map';
      case 'rubric': return 'Skill Rubric';
      default: return 'Saved Item';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-labelledby="bookmarks-drawer-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-full max-w-md bg-white dark:bg-slate-900 shadow-2xl flex flex-col border-l border-slate-200 dark:border-slate-800">
          
          {/* Header */}
          <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Bookmark className="w-5 h-5" />
              </div>
              <div>
                <h2 id="bookmarks-drawer-title" className="text-base font-bold text-slate-900 dark:text-white">
                  Teacher Saved Bookmarks
                </h2>
                <p className="text-xs text-slate-500">
                  {bookmarks.length} saved curriculum {bookmarks.length === 1 ? 'item' : 'items'} stored locally
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close bookmarks drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {bookmarks.length === 0 ? (
              <div className="py-16 text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400">
                  <Bookmark className="w-6 h-6" />
                </div>
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                  No saved bookmarks yet
                </h3>
                <p className="text-xs text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Click the bookmark icon on any classroom activity, curriculum map, or rubric to save it here for fast offline access.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {bookmarks.map((item) => (
                  <div 
                    key={item.id}
                    className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors group"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                        {getTypeIcon(item.type)}
                        <span>{getTypeLabel(item.type)}</span>
                        {item.grade && (
                          <>
                            <span>·</span>
                            <span className="text-indigo-600 dark:text-indigo-400 font-medium">{item.grade}</span>
                          </>
                        )}
                      </div>

                      <button
                        onClick={() => removeBookmark(item.id)}
                        className="opacity-60 hover:opacity-100 text-slate-400 hover:text-rose-600 p-1 rounded transition-colors"
                        title="Remove bookmark"
                        aria-label={`Remove ${item.title}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {item.title}
                    </h4>

                    {item.subtitle && (
                      <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                        {item.subtitle}
                      </p>
                    )}

                    <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        {new Date(item.timestamp).toLocaleDateString()}
                      </span>
                      
                      <Link
                        to={item.path}
                        onClick={onClose}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        Open Resource <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Actions */}
          {bookmarks.length > 0 && (
            <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between text-xs">
              <button
                onClick={clearBookmarks}
                className="text-slate-500 hover:text-rose-600 transition-colors min-h-[44px] px-2 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" /> Clear all bookmarks
              </button>
              
              <span className="text-slate-400">
                Auto-saved in browser
              </span>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
