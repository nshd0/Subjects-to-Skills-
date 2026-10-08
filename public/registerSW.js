// Subjects2Skills Safe Service Worker Registration Fallback
// Provides a clean no-op script in development or sandboxed iframe environments
if (typeof window !== 'undefined' && 'serviceWorker' in navigator && location.protocol === 'https:') {
  // Production worker is registered through VitePWA generated sw.js
}
