import React from 'react';
import { 
  Cpu, 
  GitMerge, 
  RefreshCw, 
  ShieldCheck, 
  Users, 
  Lock, 
  HardDrive, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

export function RealtimeCollabDocs() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300 border border-indigo-200">
              Technical Architecture Whitepaper
            </span>
            <span className="text-xs text-slate-500">Version 0.8 Architecture</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-3">
            <Cpu className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            Real-Time Co-Planning: CRDT Implementation & Sync Strategy
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
            Technical blueprint explaining how Subjects2Skills achieves Google Docs-grade real-time co-planning, cursor awareness, suggestion branching, and offline-first three-way merges without central locks or data loss.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold text-sm">
              <RefreshCw className="w-5 h-5" />
              1. Conflict-Free Replicated Data Types (Yjs)
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Unlike legacy lock-based editors or Operational Transformation (OT) servers that fail on intermittent networks, Subjects2Skills uses <strong>Yjs CRDTs</strong>. Every unit plan is modeled as a deterministic directed acyclic graph of state items.
            </p>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Commutative & Associative: Edits arrive in any sequence and converge to identical state.</li>
              <li>Minimal Memory Footprint: Compresses character-level deltas efficiently for mobile browsers.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
              <Users className="w-5 h-5" />
              2. Ephemeral Cursor & Presence Awareness
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Collaborator presence is tracked through state awareness vectors. When Educator A selects Lesson 2, a lightweight broadcast informs all connected peers, rendering A’s colored cursor and name avatar without mutating the core document data.
            </p>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Heartbeat TTL of 30 seconds automatically prunes disconnected sessions.</li>
              <li>Avatars provide immediate visual certainty on who is editing which lesson block.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-sm">
              <GitMerge className="w-5 h-5" />
              3. Non-Destructive Suggestion Mode
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              When switched to "Suggesting" mode, edits do not overwrite the live unit plan. Instead, proposed deltas are stored as pending suggestions tagged with author attribution, diff snapshots, and automated merge resolvers.
            </p>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Owners and Editors can review side-by-side diffs.</li>
              <li>Accepting a suggestion merges the change atomically into the primary Yjs document.</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-sm">
              <HardDrive className="w-5 h-5" />
              4. Offline-First Resilience & Sync Vectors
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Educators in rural areas with spotty connectivity can continue editing seamlessly. State updates are appended to IndexedDB local storage and synchronized via <code>Y.encodeStateAsUpdate()</code> upon internet restoration.
            </p>
            <ul className="list-disc list-inside text-slate-500 space-y-1">
              <li>Zero keystroke loss during network blackouts.</li>
              <li>Built-in interactive conflict merge UI for reviewing divergent simultaneous edits.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
