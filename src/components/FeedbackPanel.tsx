import React, { useState } from 'react';
import { Button } from './ui/Button';
import { CheckCircle2, Send } from 'lucide-react';

export function FeedbackPanel({ gradeName }: { gradeName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    role: '',
    learningArea: '',
    foundActivity: '',
    useActivity: '',
    missing: '',
    improve: '',
    reviewFuture: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    // In future: connect to backend API here
    setSubmitted(true);
  };

  const handleStringChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 rounded-xl p-8 text-center mt-12 mb-16">
        <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Thank you for your feedback!</h3>
        <p className="text-slate-600 dark:text-slate-400">Your insights help us improve the {gradeName} curriculum mapping for educators everywhere.</p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6">Submit another review</Button>
      </div>
    );
  }

  return (
    <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-xl p-6 md:p-8 mt-12 mb-16">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Teacher Feedback & Review</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm">
          We are actively testing this {gradeName} structure. Help us improve it by answering a few quick questions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">1. What is your role?</label>
              <select 
                name="role" 
                value={formData.role} 
                onChange={handleStringChange}
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select a role...</option>
                <option value="Teacher">Teacher</option>
                <option value="School leader">School leader</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
                <option value="Curriculum designer">Curriculum designer</option>
                <option value="Researcher">Researcher</option>
                <option value="Other">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">2. Which learning area did you explore?</label>
              <input 
                type="text" 
                name="learningArea"
                value={formData.learningArea}
                onChange={handleStringChange}
                placeholder="e.g. Science, Mathematics..."
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">3. Could you find a useful activity quickly?</label>
              <select 
                name="foundActivity"
                value={formData.foundActivity}
                onChange={handleStringChange}
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select...</option>
                <option value="Yes">Yes</option>
                <option value="Partly">Partly</option>
                <option value="No">No</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-900 dark:text-slate-200">4. Would you use this activity in your classroom?</label>
              <select 
                name="useActivity"
                value={formData.useActivity}
                onChange={handleStringChange}
                className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select...</option>
                <option value="Yes, as is">Yes, as is</option>
                <option value="Yes, with changes">Yes, with changes</option>
                <option value="Not yet">Not yet</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-200">5. What is missing?</label>
            <textarea 
              name="missing"
              value={formData.missing}
              onChange={handleStringChange}
              rows={2}
              className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-200">6. What should be improved?</label>
            <textarea 
              name="improve"
              value={formData.improve}
              onChange={handleStringChange}
              rows={2}
              className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900 dark:text-slate-200">7. Would you be willing to review future content?</label>
            <select 
              name="reviewFuture"
              value={formData.reviewFuture}
              onChange={handleStringChange}
              className="w-full bg-white dark:bg-slate-950 border border-slate-300 dark:border-slate-700 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select...</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end items-center gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">Content Review Status: Pending</span>
            <Button type="submit" className="flex items-center gap-2">
              <Send className="w-4 h-4" /> Submit Feedback
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
