import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import './index.css';

try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error("Failed to find the root element with id 'root'");
  }

  createRoot(rootElement).render(
    <StrictMode>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StrictMode>,
  );
} catch (fatalMountErr) {
  console.error("Fatal React mount error:", fatalMountErr);
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;font-family:system-ui,-apple-system,sans-serif;background:#0f172a;color:#f8fafc;text-align:center;">
        <div style="max-width:440px;padding:32px;background:#1e293b;border-radius:16px;border:1px solid #334155;box-shadow:0 10px 25px rgba(0,0,0,0.5);">
          <div style="width:48px;height:48px;border-radius:12px;background:#4f46e5;color:white;display:inline-flex;align-items:center;justify-content:center;font-weight:bold;font-size:24px;margin-bottom:16px;">S</div>
          <h2 style="margin:0 0 8px 0;font-size:18px;font-weight:700;">Subjects2Skills</h2>
          <p style="margin:0 0 16px 0;font-size:13px;color:#94a3b8;line-height:1.5;">Could not initialize the application view. Please reload.</p>
          <button onclick="window.location.reload()" style="background:#4f46e5;color:white;border:none;padding:10px 20px;border-radius:8px;font-weight:600;font-size:13px;cursor:pointer;">Reload Framework</button>
        </div>
      </div>
    `;
  }
}

