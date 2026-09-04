import React, { useEffect } from 'react';
import { X, ZoomIn, Download } from 'lucide-react';

interface IllustrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  caption: string;
  children: React.ReactNode;
}

export const IllustrationModal: React.FC<IllustrationModalProps> = ({
  isOpen,
  onClose,
  title,
  caption,
  children,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="illustration-modal-title"
    >
      <div 
        className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-4xl w-full overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-teal-50 text-teal-800 border border-teal-200">
              <ZoomIn className="w-4 h-4" />
            </span>
            <div>
              <h3 id="illustration-modal-title" className="text-base font-bold text-slate-900 leading-tight">
                {title}
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">Subjects2Skills Learning Scenes · High Resolution</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            aria-label="Close illustration modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Vector SVG */}
        <div className="p-6 overflow-y-auto flex items-center justify-center bg-slate-50/50 min-h-[300px]">
          <div className="w-full max-w-3xl drop-shadow-sm bg-white p-2 rounded-xl border border-slate-200/60">
            {children}
          </div>
        </div>

        {/* Modal Footer Caption */}
        <div className="px-6 py-3.5 bg-white border-t border-slate-100 text-xs text-slate-600 flex items-center justify-between">
          <p className="leading-relaxed pr-4 font-normal">{caption}</p>
          <button 
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs shrink-0 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            Print / Project
          </button>
        </div>
      </div>
    </div>
  );
};
