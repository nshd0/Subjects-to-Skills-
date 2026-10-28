import React, { useRef, useEffect, useState } from 'react';
import { 
  PenTool, 
  Highlighter, 
  Eraser, 
  RotateCcw, 
  Trash2, 
  EyeOff, 
  Check, 
  Sliders,
  Maximize2
} from 'lucide-react';
import { AnnotationStroke } from './types';

interface CanvasAnnotationOverlayProps {
  isActive: boolean;
  onClose: () => void;
}

export const CanvasAnnotationOverlay: React.FC<CanvasAnnotationOverlayProps> = ({
  isActive,
  onClose,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [strokes, setStrokes] = useState<AnnotationStroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<AnnotationStroke | null>(null);
  const [tool, setTool] = useState<'pen' | 'highlighter' | 'eraser'>('pen');
  const [selectedColor, setSelectedColor] = useState<string>('#facc15'); // Neon Yellow default for smart boards
  const [lineWidth, setLineWidth] = useState<number>(4);
  const [palmRejection, setPalmRejection] = useState<boolean>(true);

  const colors = [
    { label: 'Neon Yellow', value: '#facc15' },
    { label: 'Electric Cyan', value: '#06b6d4' },
    { label: 'Emerald Green', value: '#10b981' },
    { label: 'Bright Red', value: '#ef4444' },
    { label: 'White', value: '#ffffff' },
    { label: 'Black', value: '#0f172a' },
  ];

  // Resize canvas to match container
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
        redrawAll(strokes);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isActive]);

  const redrawAll = (strokeList: AnnotationStroke[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    strokeList.forEach(stroke => {
      if (stroke.points.length < 2) return;
      ctx.beginPath();
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.width;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      if (stroke.isHighlighter) {
        ctx.globalAlpha = 0.4;
      } else {
        ctx.globalAlpha = 1.0;
      }

      ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
      ctx.stroke();
    });

    ctx.globalAlpha = 1.0;
  };

  const getCanvasCoords = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isActive) return;
    
    // Palm Rejection: Ignore large contact area if touch event
    if (palmRejection && e.pointerType === 'touch' && (e.width > 28 || e.height > 28)) {
      return;
    }

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    const point = getCanvasCoords(e);

    const isHigh = tool === 'highlighter';
    const effectiveWidth = isHigh ? lineWidth * 3.5 : tool === 'eraser' ? lineWidth * 5 : lineWidth;
    const strokeColor = tool === 'eraser' ? '#ffffff' : selectedColor;

    const newStroke: AnnotationStroke = {
      points: [point],
      color: strokeColor,
      width: effectiveWidth,
      isHighlighter: isHigh,
    };

    setCurrentStroke(newStroke);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentStroke || !canvasRef.current) return;
    const point = getCanvasCoords(e);
    const updated = {
      ...currentStroke,
      points: [...currentStroke.points, point],
    };
    setCurrentStroke(updated);

    // Live stroke drawing
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.beginPath();
    ctx.strokeStyle = updated.color;
    ctx.lineWidth = updated.width;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.globalAlpha = updated.isHighlighter ? 0.4 : 1.0;

    const len = updated.points.length;
    if (len >= 2) {
      ctx.moveTo(updated.points[len - 2].x, updated.points[len - 2].y);
      ctx.lineTo(updated.points[len - 1].x, updated.points[len - 1].y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1.0;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!currentStroke) return;
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch (err) {
      // Ignore if pointer capture release fails
    }

    const finalStrokeList = [...strokes, currentStroke];
    setStrokes(finalStrokeList);
    setCurrentStroke(null);
    redrawAll(finalStrokeList);
  };

  const handleUndo = () => {
    if (strokes.length === 0) return;
    const nextList = strokes.slice(0, -1);
    setStrokes(nextList);
    redrawAll(nextList);
  };

  const handleClear = () => {
    setStrokes([]);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
    }
  };

  if (!isActive) return null;

  return (
    <div className="absolute inset-0 z-30 pointer-events-none">
      {/* Interactive Drawing Canvas */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="w-full h-full pointer-events-auto touch-none cursor-crosshair"
      />

      {/* Floating Smart-Board Tool Palette (Optimized for finger/stylus >= 48px touch targets) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-auto bg-slate-900/95 text-white backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl border border-slate-700 flex flex-wrap items-center gap-3">
        {/* Tool selector */}
        <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setTool('pen')}
            className={`min-w-[48px] min-h-[48px] px-3 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
              tool === 'pen' ? 'bg-indigo-600 text-white shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Pen (Stylus / Fine point)"
          >
            <PenTool className="w-5 h-5" />
            <span className="hidden sm:inline">Pen</span>
          </button>
          <button
            onClick={() => setTool('highlighter')}
            className={`min-w-[48px] min-h-[48px] px-3 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
              tool === 'highlighter' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Highlighter (Semi-transparent neon)"
          >
            <Highlighter className="w-5 h-5" />
            <span className="hidden sm:inline">Highlighter</span>
          </button>
          <button
            onClick={() => setTool('eraser')}
            className={`min-w-[48px] min-h-[48px] px-3 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors ${
              tool === 'eraser' ? 'bg-rose-600 text-white shadow' : 'text-slate-300 hover:text-white'
            }`}
            title="Eraser"
          >
            <Eraser className="w-5 h-5" />
            <span className="hidden sm:inline">Eraser</span>
          </button>
        </div>

        {/* Color Palette (Visible when not eraser) */}
        {tool !== 'eraser' && (
          <div className="flex items-center gap-1.5 px-2 border-l border-slate-700">
            {colors.map(c => (
              <button
                key={c.value}
                onClick={() => setSelectedColor(c.value)}
                className={`w-9 h-9 rounded-full transition-transform flex items-center justify-center ${
                  selectedColor === c.value ? 'scale-110 ring-2 ring-white shadow-md' : 'hover:scale-105'
                }`}
                style={{ backgroundColor: c.value }}
                title={c.label}
              >
                {selectedColor === c.value && (
                  <Check className={`w-4 h-4 ${c.value === '#ffffff' || c.value === '#facc15' ? 'text-black' : 'text-white'}`} />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Stroke Width Selector */}
        <div className="flex items-center gap-1 border-l border-slate-700 pl-2">
          {[2, 4, 8].map(w => (
            <button
              key={w}
              onClick={() => setLineWidth(w)}
              className={`w-10 h-10 rounded-lg text-xs font-mono font-bold flex items-center justify-center ${
                lineWidth === w ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white bg-slate-800'
              }`}
            >
              {w}px
            </button>
          ))}
        </div>

        {/* Actions: Undo, Clear, Palm Rejection, Close */}
        <div className="flex items-center gap-1.5 border-l border-slate-700 pl-2">
          <button
            onClick={handleUndo}
            disabled={strokes.length === 0}
            className="min-w-[48px] min-h-[48px] p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-slate-200 flex items-center justify-center"
            title="Undo last stroke"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          <button
            onClick={handleClear}
            className="min-w-[48px] min-h-[48px] p-2.5 rounded-xl bg-rose-950/60 hover:bg-rose-900 border border-rose-800 text-rose-300 flex items-center justify-center"
            title="Clear all annotations"
          >
            <Trash2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setPalmRejection(!palmRejection)}
            className={`min-h-[48px] px-2.5 py-1.5 rounded-xl text-[11px] font-bold border transition-colors ${
              palmRejection 
                ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300' 
                : 'bg-slate-800 border-slate-700 text-slate-400'
            }`}
            title="Toggle Palm Rejection for Smart Board Touch"
          >
            {palmRejection ? 'Palm Rejection: ON' : 'Palm: OFF'}
          </button>
          <button
            onClick={onClose}
            className="min-w-[48px] min-h-[48px] px-3 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1"
            title="Done Annotating"
          >
            <span>Done</span>
          </button>
        </div>
      </div>
    </div>
  );
};
