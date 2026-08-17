import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', feedback: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'feedbacks'), {
        ...formData,
        createdAt: serverTimestamp()
      });
      
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', feedback: '' });
        }, 300); // Wait for transition to finish
      }, 3000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Feedback Panel */}
      <div 
        className={`mb-4 overflow-hidden transition-all duration-300 ease-in-out transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 max-h-[500px]' : 'scale-90 opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="w-80 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/30 rounded-t-2xl">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Leave Feedback
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Thank you!</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Your feedback has been received.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label htmlFor="feedback" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Feedback</label>
                  <textarea
                    id="feedback"
                    name="feedback"
                    required
                    rows={4}
                    value={formData.feedback}
                    onChange={handleChange}
                    placeholder="Tell us what you think..."
                    className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 transition-all text-slate-900 dark:text-slate-100 placeholder:text-slate-400 resize-none"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full mt-2 flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Feedback
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`h-14 w-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-950 focus:ring-indigo-500 ${
          isOpen 
            ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900' 
            : 'bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600'
        }`}
        aria-label="Leave feedback"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
