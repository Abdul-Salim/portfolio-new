// import { useRef, useContext, useEffect } from "react";
// import { useOnScreen } from "./useOnScreen";
// import { NavContext } from "../context/NavContext";

// export const useNav = (navLinkId) => {
//   const ref = useRef(null);

//   const { setActiveNavLinkId } = useContext(NavContext);

//   const isOnScreen = useOnScreen(ref);

//   useEffect(() => {
//     if (isOnScreen) {
//       setActiveNavLinkId(navLinkId);
//     }
//   }, [isOnScreen, setActiveNavLinkId, navLinkId]);

//   return ref;
// };

import { useRef, useContext, useEffect } from "react";
import { useOnScreen } from "./useOnScreen";
import { NavContext } from "../context/NavContext";
import { useInView } from "react-intersection-observer";

export const useNav = (navLinkId) => {
  // const ref = useRef(null);

  const { setActiveNavLinkId } = useContext(NavContext);

  const tenBreakpointThreshold = [
    0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0,
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: tenBreakpointThreshold,
  });
  // const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if (inView) {
      setActiveNavLinkId(navLinkId);
    }
  }, [inView, setActiveNavLinkId, navLinkId]);

  return ref;
};
