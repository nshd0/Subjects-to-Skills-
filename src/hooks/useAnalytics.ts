import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Non-intrusive route telemetry hook placeholder.
 * Captures route transitions client-side without collecting personally identifiable information.
 * Easily connect to Google Analytics 4, Plausible, or Cloud Logging in the future.
 */
export function useAnalytics() {
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname + location.search;

    // Optional telemetry hook:
    // if (typeof window !== 'undefined' && (window as any).gtag) {
    //   (window as any).gtag('config', 'G-XXXXXXXXXX', { page_path: currentPath });
    // }

    // Development diagnostic log
    if (import.meta.env.DEV) {
      console.debug(`[Telemetry] Page navigation to: ${currentPath}`);
    }
  }, [location]);
}
