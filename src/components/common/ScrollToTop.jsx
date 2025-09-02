import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the new route to render before querying the element
      const t = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      }, 50);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
