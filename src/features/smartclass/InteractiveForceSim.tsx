import React, { useState } from 'react';
import { Play, RotateCcw, ArrowRight, ArrowLeft, Zap, Info } from 'lucide-react';

export const InteractiveForceSim: React.FC = () => {
  const [appliedForce, setAppliedForce] = useState<number>(20); // in Newtons (-50 to +50)
  const [frictionSurface, setFrictionSurface] = useState<'smooth' | 'rough' | 'ice'>('rough');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [blockPosition, setBlockPosition] = useState<number>(50); // percentage 10% to 90%

  // Friction coefficients
  const frictionCoef = {
    ice: 0.1,
    smooth: 0.3,
    rough: 0.6,
  }[frictionSurface];

  const normalForce = 50; // Weight in N
  const maxStaticFriction = normalForce * frictionCoef; // in N
  const isMoving = Math.abs(appliedForce) > maxStaticFriction;
  const netForce = isMoving 
    ? (appliedForce > 0 ? appliedForce - maxStaticFriction : appliedForce + maxStaticFriction)
    : 0;

  const handleStepMotion = () => {
    if (!isMoving) return;
    setIsSimulating(true);
    setBlockPosition(prev => {
      const delta = netForce > 0 ? 10 : -10;
      const next = Math.max(15, Math.min(85, prev + delta));
      return next;
    });
    setTimeout(() => setIsSimulating(false), 500);
  };

  const resetPosition = () => {
    setBlockPosition(50);
    setAppliedForce(20);
  };

  return (
    <div className="bg-slate-900 text-white rounded-2xl p-5 border border-slate-800 shadow-xl space-y-4">
      {/* Simulation Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <h4 className="font-bold text-sm sm:text-base text-white">
            Smart-Board Interactive Sim: Push vs Pull & Friction
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Surface:</span>
          <span className="font-bold uppercase text-indigo-400">{frictionSurface}</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Max Friction:</span>
          <span className="font-bold text-rose-400">{maxStaticFriction.toFixed(1)} N</span>
        </div>
      </div>

      {/* Physics Canvas Stage */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 rounded-xl border border-slate-800 overflow-hidden flex flex-col justify-end p-4">
        {/* Sky / Grid markings */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

        {/* Applied Vector Arrow Indicator */}
        <div 
          className="absolute top-8 transition-all duration-300 flex flex-col items-center"
          style={{ left: `${blockPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-900/90 text-indigo-200 border border-indigo-700/60 mb-1">
            {appliedForce > 0 ? `PUSH: +${appliedForce} N →` : appliedForce < 0 ? `← PULL: ${appliedForce} N` : '0 N'}
          </div>
          {appliedForce !== 0 && (
            <div className={`h-1.5 rounded-full transition-all ${appliedForce > 0 ? 'bg-indigo-400' : 'bg-amber-400'}`} style={{ width: `${Math.abs(appliedForce) * 2}px` }} />
          )}
        </div>

        {/* The Test Block */}
        <div 
          className={`relative z-10 w-24 h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-all duration-300 shadow-2xl ${
            isMoving
              ? 'bg-gradient-to-br from-indigo-600 to-indigo-800 border-indigo-400 text-white'
              : 'bg-gradient-to-br from-slate-700 to-slate-800 border-slate-500 text-slate-300'
          }`}
          style={{
            left: `${blockPosition}%`,
            transform: 'translateX(-50%)',
          }}
        >
          <span className="text-xs font-black tracking-wider">BLOCK</span>
          <span className="text-[10px] font-mono opacity-80">5.0 kg</span>
          {isMoving ? (
            <span className="text-[9px] font-bold text-emerald-300 animate-pulse mt-0.5">ACCELERATING</span>
          ) : (
            <span className="text-[9px] font-bold text-amber-300 mt-0.5">AT REST</span>
          )}
        </div>

        {/* Ground Surface */}
        <div className="relative w-full h-8 bg-slate-800 border-t-2 border-slate-600 rounded-b-lg flex items-center justify-between px-3 text-[10px] text-slate-400 font-mono">
          <span>← Left (Pull)</span>
          <span className="font-semibold text-slate-300">Surface Friction: {frictionCoef} μ</span>
          <span>Right (Push) →</span>
        </div>
      </div>

      {/* Touch-Friendly Controls (>= 48px touch targets) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
        {/* Applied Force Slider & Buttons */}
        <div className="space-y-1.5 md:col-span-2 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-300">Applied Force (Touch Slider):</span>
            <span className="font-mono font-bold text-indigo-400 text-sm">
              {appliedForce > 0 ? `+${appliedForce} N (Push)` : appliedForce < 0 ? `${appliedForce} N (Pull)` : '0 N (Neutral)'}
            </span>
          </div>
          <input
            type="range"
            min="-50"
            max="50"
            step="5"
            value={appliedForce}
            onChange={(e) => setAppliedForce(parseInt(e.target.value, 10))}
            className="w-full h-4 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
          <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>-50 N (Hard Pull)</span>
            <span>0 N</span>
            <span>+50 N (Hard Push)</span>
          </div>
        </div>

        {/* Surface Material Selection */}
        <div className="space-y-1.5 bg-slate-800/80 p-3 rounded-xl border border-slate-700">
          <label className="text-xs font-bold text-slate-300">Surface Type:</label>
          <div className="grid grid-cols-3 gap-1">
            {(['ice', 'smooth', 'rough'] as const).map(s => (
              <button
                key={s}
                onClick={() => setFrictionSurface(s)}
                className={`min-h-[44px] py-1.5 px-2 rounded-lg text-xs font-bold capitalize transition-colors ${
                  frictionSurface === s ? 'bg-indigo-600 text-white shadow' : 'bg-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Physics Feedback & Motion Trigger */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="text-xs text-slate-300 flex items-center gap-2">
          <Info className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>
            {isMoving 
              ? `Applied Force (${Math.abs(appliedForce)} N) overcomes Static Friction (${maxStaticFriction.toFixed(1)} N). Net Force = ${Math.abs(netForce).toFixed(1)} N.`
              : `Applied Force (${Math.abs(appliedForce)} N) is insufficient to overcome Static Friction (${maxStaticFriction.toFixed(1)} N). Block remains stationary.`
            }
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetPosition}
            className="min-h-[48px] px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs flex items-center gap-1.5"
            title="Reset position to center"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset</span>
          </button>
          <button
            onClick={handleStepMotion}
            disabled={!isMoving}
            className={`min-h-[48px] px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center gap-2 transition-all shadow-lg ${
              isMoving 
                ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 active:scale-95' 
                : 'bg-slate-800 text-slate-500 cursor-not-allowed'
            }`}
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Apply Force & Step Motion</span>
          </button>
        </div>
      </div>
    </div>
  );
};
