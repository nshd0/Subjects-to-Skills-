const fs = require('fs');
let code = fs.readFileSync('src/components/Layout.tsx', 'utf8');

// Replace the old Feedback buttons we inserted to dispatch event
code = code.replace(
  '<button onClick={() => setIsFeedbackOpen(true)} className={navLinkClass}>Feedback</button>',
  '<button onClick={() => window.dispatchEvent(new Event("open-feedback"))} className={`px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors whitespace-nowrap text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50`}>Feedback</button>'
);

code = code.replace(
  '<button onClick={() => setIsFeedbackOpen(true)} className={`w-full text-left ${navLinkClass({isActive: false})}`}>Feedback</button>',
  '<button onClick={() => window.dispatchEvent(new Event("open-feedback"))} className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs lg:text-sm font-medium transition-colors whitespace-nowrap text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-50`}>Feedback</button>'
);

// We can remove the isFeedbackOpen states if they are still there
code = code.replace('  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);\n', '');

fs.writeFileSync('src/components/Layout.tsx', code);
console.log('Patched Layout for feedback event');

let widgetCode = fs.readFileSync('src/components/FeedbackWidget.tsx', 'utf8');
if (!widgetCode.includes('open-feedback')) {
  widgetCode = widgetCode.replace(
    'const [isSubmitting, setIsSubmitting] = useState(false);',
    'const [isSubmitting, setIsSubmitting] = useState(false);\n\n  React.useEffect(() => {\n    const handleOpen = () => setIsOpen(true);\n    window.addEventListener("open-feedback", handleOpen);\n    return () => window.removeEventListener("open-feedback", handleOpen);\n  }, []);'
  );
  fs.writeFileSync('src/components/FeedbackWidget.tsx', widgetCode);
  console.log('Patched FeedbackWidget for event');
}

