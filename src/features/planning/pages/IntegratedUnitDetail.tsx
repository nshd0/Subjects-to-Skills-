import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare, Trash2, Edit } from 'lucide-react';
import { useWizardIntegratedUnits } from '../useWizardStorage';
import { Comment } from '../wizardTypes';

export function IntegratedUnitDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { units, saveUnit, deleteUnit } = useWizardIntegratedUnits();
  
  const unit = units.find(u => u.id === id);
  const [commentText, setCommentText] = useState('');

  if (!unit) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-8 text-center">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Unit not found</h2>
        <Link to="/grade/8/collaborate" className="text-indigo-600 mt-4 inline-block">Back to collaborations</Link>
      </div>
    );
  }

  // Permissions logic
  const isLead = unit.leadTeacherId === 'me';
  const isCollaborator = unit.collaboratorIds?.includes('me');
  const canEdit = (isLead || isCollaborator) && unit.status !== 'archived';
  const isReadOnly = !canEdit || (unit.status === 'ready' && !isLead && !isCollaborator);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!canEdit) return;
    saveUnit({ ...unit, status: e.target.value as any, updatedAt: Date.now() });
  };

  const handleAddComment = () => {
    if (!commentText.trim()) return;
    const newComment: Comment = {
      id: Math.random().toString(36).substring(7),
      authorId: 'me',
      text: commentText,
      createdAt: Date.now()
    };
    saveUnit({
      ...unit,
      comments: [...(unit.comments || []), newComment],
      updatedAt: Date.now()
    });
    setCommentText('');
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this unit? Linked assessments and lesson plans will NOT be deleted.")) {
      deleteUnit(unit.id);
      navigate('/grade/8/collaborate');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-24 pt-8">
      <div className="container mx-auto px-4 max-w-4xl space-y-8">
        <Link to="/grade/8/collaborate" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-indigo-600">
          <ArrowLeft className="w-4 h-4" /> Back to collaborations
        </Link>
        
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm relative">
          
          {canEdit && (
            <div className="absolute top-8 right-8 flex gap-2">
              <button onClick={handleDelete} className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors" title="Delete Unit">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="flex gap-2 mb-4">
             {unit.subjectIds?.map(sub => (
               <span key={sub} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[10px] font-bold px-2 py-1 rounded uppercase">{sub}</span>
             ))}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{unit.title || 'Untitled Unit'}</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-6">{unit.description}</p>
          
          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400 mb-8 pb-8 border-b border-slate-100 dark:border-slate-800">
            <div><strong>Lead:</strong> {unit.leadTeacherId === 'me' ? 'You' : unit.leadTeacherId}</div>
            <div><strong>Collaborators:</strong> {unit.collaboratorIds?.join(', ') || 'None'}</div>
            <div className="flex items-center gap-2">
              <strong>Status:</strong>
              {canEdit ? (
                <select 
                  value={unit.status} 
                  onChange={handleStatusChange}
                  className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg px-2 py-1 text-sm font-bold uppercase tracking-wider text-amber-600"
                >
                  <option value="draft">Draft</option>
                  <option value="in-review">In Review</option>
                  <option value="ready">Ready</option>
                  <option value="archived">Archived</option>
                </select>
              ) : (
                <span className="uppercase tracking-wider font-bold text-amber-600">{unit.status}</span>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Timeline</h3>
          <div className="space-y-3 mb-8">
            {unit.timeline?.length > 0 ? unit.timeline.map((b, i) => (
              <div key={i} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 flex gap-4">
                 <div className="font-bold text-indigo-600 dark:text-indigo-400 w-16 shrink-0">{b.durationMin}m</div>
                 <div>
                   <div className="font-medium text-slate-900 dark:text-white">{b.title}</div>
                   {b.skillIds?.length > 0 && <div className="text-xs text-slate-500 mt-1">Skills: {b.skillIds.length} mapped</div>}
                 </div>
              </div>
            )) : (
              <div className="text-sm text-slate-500 italic">No timeline blocks defined.</div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2"><MessageSquare className="w-5 h-5"/> Comments</h3>
          
          <div className="space-y-4 mb-6">
            {unit.comments?.length > 0 ? (
              unit.comments.map(comment => (
                <div key={comment.id} className="bg-slate-50 dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm text-slate-900 dark:text-white">{comment.authorId === 'me' ? 'You' : comment.authorId}</span>
                    <span className="text-xs text-slate-500">{new Date(comment.createdAt).toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-slate-700 dark:text-slate-300">{comment.text}</p>
                </div>
              ))
            ) : (
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl text-center text-slate-500 text-sm border border-slate-200 dark:border-slate-700">
                No comments yet. Leave a comment to start the discussion.
              </div>
            )}
          </div>

          {!isReadOnly && (
            <div className="flex gap-2">
              <textarea 
                value={commentText}
                onChange={e => setCommentText(e.target.value)}
                placeholder="Type your comment..."
                className="flex-1 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-hidden"
                rows={2}
              />
              <button 
                onClick={handleAddComment}
                disabled={!commentText.trim()}
                className="px-6 py-2 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 transition-colors"
              >
                Post
              </button>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}
