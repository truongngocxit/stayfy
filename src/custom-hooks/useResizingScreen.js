import { useState, useEffect, useRef } from "react";

const useResizingScreen = function (threshold) {
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver(function (
      entries,
      observer
    ) {
      if (entries[0].contentRect.width <= threshold) {
        setIsSmallerScreen(true);
      } else {
        setIsSmallerScreen(false);
      }
    });

    resizeObserverRef.current.observe(document.documentElement);

    return () => resizeObserverRef.current.disconnect();
  }, [threshold]);

  return isSmallerScreen;
};

export default useResizingScreen;
