import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop component — when the location pathname changes, scroll window to top.
 * Mount this inside the Router so every route change resets scroll position.
 */
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // scroll the window and document (covers different browsers)
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    } catch {
      // ignore in non-browser environments
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
