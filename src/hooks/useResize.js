import { useRef, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

const initialState = { width: 0, height: 0 };
const useResize = (myRef) => {
  const [dimension, setDimension] = useState(initialState);
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setDimension({ width, height });
      });
    });
    if (resizeObserverRef.current) {
      resizeObserverRef.current.observe(myRef.current);
    }

    return () => {
      resizeObserverRef.current.disconnect();
    };
  }, [myRef]);
  return dimension;
};

export default useResize;
