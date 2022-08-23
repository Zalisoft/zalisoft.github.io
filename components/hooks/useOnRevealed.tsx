import { useState, useEffect, MutableRefObject } from "react";

const useOnRevealed = (ref: MutableRefObject<any>) => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setRevealed(entry.isIntersecting);
      if (entry.isIntersecting) {
        if (ref.current) observer.unobserve(ref.current);
      }
    });
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);
  return revealed;
};

export default useOnRevealed;
