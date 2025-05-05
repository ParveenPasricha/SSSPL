// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // On route change
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  useEffect(() => {
    // On refresh
    window.onbeforeunload = () => {
      window.scrollTo(0, 0); // Forces scroll to top before reload
    };
  }, []);

  return null;
};

export default ScrollToTop;
