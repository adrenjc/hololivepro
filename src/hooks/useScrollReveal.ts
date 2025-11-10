import { useEffect, useRef } from "react";

type ScrollRevealOptions = {
  animationClass?: string;
  threshold?: number;
  rootMargin?: string;
};

export const useScrollReveal = <T extends HTMLElement>({
  animationClass = "isVisible",
  threshold = 0.2,
  rootMargin = "0px",
}: ScrollRevealOptions = {}) => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [animationClass, threshold, rootMargin]);

  return ref;
};
