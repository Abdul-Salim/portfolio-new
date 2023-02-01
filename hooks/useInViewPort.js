import { useEffect, useMemo, useState } from "react";

function useIsInViewport(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(([entry]) => {
      console.log(entry.boundingClientRect);
      if (entry.intersectionRatio <= 0.75) {
        // intersectionCounter++;

        setIntersecting(entry.isIntersecting);
      }
    });
    observer.observe(ref.current);
    // Remove the observer as soon as the component is unmounted
    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}

export default useIsInViewport;
