import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from './ui/Button';
import { MessageSquarePlus, X, Send, Loader2 } from 'lucide-react';
import { SubjectMapping } from '@/data/curriculum';

interface FeedbackModalProps {
  subject: SubjectMapping;
}

export function FeedbackModal({ subject }: FeedbackModalProps) {
  const { user, profile } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'feedbacks'), {
        content: `Feedback for [${subject.name} - ${subject.learningOutcome?.slice(0, 50)}...]:\n\n${content}`,
        userId: user?.uid || 'anonymous',
        userRole: profile?.role || 'Educator',
        createdAt: serverTimestamp()
      });
      setSuccess(true);
      setTimeout(() => {
        setIsOpen(false);
        setSuccess(false);
        setContent('');
      }, 2000);
    } catch (err) {
      console.error("Failed to submit feedback", err);
      alert("Failed to submit feedback. Ensure you are logged in.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) {
    return (
      <Button variant="outline" size="sm" onClick={() => setIsOpen(true)} className="flex items-center gap-2 mt-4 text-slate-500 hover:text-indigo-600 w-full sm:w-auto border-dashed">
        <MessageSquarePlus className="w-4 h-4" />
        Suggest Improvement
      </Button>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl w-full max-w-lg overflow-hidden border border-slate-200 dark:border-slate-800">
        <div className="flex justify-between items-center p-4 border-b border-slate-100 dark:border-slate-800">
          <h3 className="font-semibold text-lg flex items-center gap-2 text-slate-900 dark:text-slate-100">
            <MessageSquarePlus className="w-5 h-5 text-indigo-600" />
            Improve Curriculum Mapping
          </h3>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
            <X className="w-4 h-4" />
          </Button>
        </div>
        
        {success ? (
          <div className="p-8 text-center text-emerald-600 dark:text-emerald-400">
            <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
              <Send className="w-6 h-6" />
            </div>
            <p className="font-medium">Thank you! Your feedback has been sent to the curriculum team.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-4">
            <div className="text-sm text-slate-500 mb-2">
              Feedback regarding: <span className="font-semibold text-slate-700 dark:text-slate-300">{subject.name}</span>
            </div>
            <textarea 
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="E.g., The assessment method feels too theoretical for this grade level. Consider adding a practical experiment here..."
              className="w-full h-32 p-3 text-sm rounded-md border border-slate-300 dark:border-slate-700 bg-transparent dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              required
            />
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button type="submit" disabled={submitting || !content.trim()} className="bg-indigo-600 hover:bg-indigo-700 text-white min-w-[100px]">
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
