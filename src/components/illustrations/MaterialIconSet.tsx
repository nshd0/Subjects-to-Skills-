import React from 'react';
import { 
  ClipboardCheck, 
  Layers, 
  FileText, 
  Timer, 
  FlaskConical, 
  Sparkles, 
  Users, 
  Tag, 
  ShieldCheck, 
  MapPin, 
  BookOpen,
  PenTool,
  Leaf,
  BarChart3,
  Search,
  Scale
} from 'lucide-react';
import { ActivityMaterialItem } from '../../types/illustrations';

interface MaterialIconSetProps {
  materials: ActivityMaterialItem[];
  className?: string;
}

export const MaterialIconSet: React.FC<MaterialIconSetProps> = ({ materials, className = "" }) => {
  const getMaterialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'clipboard':
        return <ClipboardCheck className="w-5 h-5 text-teal-700 dark:text-teal-400" />;
      case 'paper':
        return <FileText className="w-5 h-5 text-amber-700 dark:text-amber-400" />;
      case 'card':
      case 'cards':
        return <Layers className="w-5 h-5 text-indigo-700 dark:text-indigo-400" />;
      case 'stopwatch':
      case 'timer':
        return <Timer className="w-5 h-5 text-sky-700 dark:text-sky-400" />;
      case 'bottle':
      case 'filter':
        return <FlaskConical className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />;
      case 'pencil':
        return <PenTool className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />;
      case 'leaves':
        return <Leaf className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'chart':
        return <BarChart3 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />;
      case 'magnifier':
        return <Search className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'scale':
        return <Scale className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      default:
        return <Tag className="w-5 h-5 text-slate-600 dark:text-slate-400" />;
    }
  };

  if (!materials || materials.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
          <Layers className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          Physical Toolkit & Low-Resource Kit
        </h4>
        <span className="text-[11px] text-slate-400">
          {materials.length} Essential Items
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
        {materials.map((mat, idx) => (
          <div 
            key={idx}
            className="flex items-start gap-3 p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-850 shadow-2xs hover:border-teal-300 dark:hover:border-teal-700 transition-all"
          >
            <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shrink-0">
              {getMaterialIcon(mat.iconType)}
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-semibold text-xs text-slate-900 dark:text-white leading-snug block">
                {mat.name}
              </span>
              {mat.description && (
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-relaxed">
                  {mat.description}
                </p>
              )}
              {mat.lowResourceSubstitute && (
                <p className="text-[10px] text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded mt-1 inline-block border border-emerald-200 dark:border-emerald-800">
                  Sub: {mat.lowResourceSubstitute}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
