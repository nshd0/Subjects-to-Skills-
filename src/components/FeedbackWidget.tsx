import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/Button';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';

export function FeedbackWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({ 
    userRole: '',
    stageOrGrade: '',
    subjectOrSkill: '',
    mappingClear: '',
    activityFeasible: '',
    content: '',
    willingToPilot: false,
    contactConsent: false,
    email: ''
  });

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
          setFormData({ 
            userRole: '',
            stageOrGrade: '',
            subjectOrSkill: '',
            mappingClear: '',
            activityFeasible: '',
            content: '',
            willingToPilot: false,
            contactConsent: false,
            email: ''
          });
        }, 300);
      }, 3000);
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value 
    }));
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      <div 
        className={`mb-4 overflow-hidden transition-all duration-300 ease-in-out transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 max-h-[800px]' : 'scale-90 opacity-0 max-h-0 pointer-events-none'
        }`}
      >
        <div className="w-80 md:w-96 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl flex flex-col max-h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 bg-indigo-50 dark:bg-indigo-950/30 sticky top-0 z-10">
            <h3 className="font-semibold text-indigo-900 dark:text-indigo-300 flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              Subjects2Skills Feedback
            </h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <div className="p-4">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-in fade-in zoom-in duration-300">
                <div className="h-12 w-12 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Thank you!</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Your feedback informs future versions.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                
                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Your Role *</label>
                  <select name="userRole" required value={formData.userRole} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                    <option value="">Select a role...</option>
                    <option value="Teacher">Teacher</option>
                    <option value="School leader">School leader</option>
                    <option value="Curriculum designer">Curriculum designer</option>
                    <option value="Teacher educator">Teacher educator</option>
                    <option value="Parent / caregiver">Parent / caregiver</option>
                    <option value="Student">Student</option>
                    <option value="Researcher">Researcher</option>
                    <option value="EdTech innovator">EdTech innovator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Stage / Grade</label>
                    <input type="text" name="stageOrGrade" value={formData.stageOrGrade} onChange={handleChange} placeholder="e.g. Grade 5" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Subject / Skill</label>
                    <input type="text" name="subjectOrSkill" value={formData.subjectOrSkill} onChange={handleChange} placeholder="e.g. Math" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Was mapping clear?</label>
                    <select name="mappingClear" value={formData.mappingClear} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                      <option value="">-</option><option value="Yes">Yes</option><option value="No">No</option><option value="Somewhat">Somewhat</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Activity feasible?</label>
                    <select name="activityFeasible" value={formData.activityFeasible} onChange={handleChange} className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400">
                      <option value="">-</option><option value="Yes">Yes</option><option value="No">No</option><option value="Somewhat">Somewhat</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">Suggestions to improve *</label>
                  <textarea name="content" required rows={3} value={formData.content} onChange={handleChange} placeholder="What would make it more useful?" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer">
                    <input type="checkbox" name="willingToPilot" checked={formData.willingToPilot} onChange={handleChange} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600" />
                    Willing to pilot or review a mapping?
                  </label>
                  
                  {formData.willingToPilot && (
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" className="w-full text-sm px-3 py-2 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400" />
                  )}
                  
                  <label className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400 cursor-pointer mt-2">
                    <input type="checkbox" name="contactConsent" required checked={formData.contactConsent} onChange={handleChange} className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-600 mt-0.5 shrink-0" />
                    <span>I consent to this feedback being used to improve the framework. (Required)</span>
                  </label>
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full mt-2 flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> {isSubmitting ? 'Sending...' : 'Send Feedback'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
      
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
