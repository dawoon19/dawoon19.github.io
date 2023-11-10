import { useState, useEffect } from "react";

const OPTIONS = {
  root: null,
  rootMargin: "0px",
  threshold: 0,
};

export default function useCardVisibiliity(ref) {
  const [isVisible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(ref.current);
          }
        })
    }, OPTIONS);
    observer.observe(ref.current);
  }, [ref]);

  return isVisible;
}
