import { useState, useEffect } from "react";

export const useOnScreen = (ref) => {
  const [isOnScreen, setOnScreen] = useState(false);
  const tenBreakpointThreshold = [
    0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  ];
  let observer = null;

  useEffect(() => {
    observer = new IntersectionObserver(
      ([entry]) => setOnScreen(entry.isIntersecting),
      {
        threshold: tenBreakpointThreshold,
      }
    );
  }, []);

  useEffect(() => {
    if (observer) {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  });

  return isOnScreen;
};
