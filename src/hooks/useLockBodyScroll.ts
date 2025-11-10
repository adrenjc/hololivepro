import { useEffect } from "react";

export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const computedPaddingRight =
      parseFloat(window.getComputedStyle(document.body).paddingRight) || 0;

    if (locked) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${computedPaddingRight + scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = originalOverflow || "auto";
      document.body.style.paddingRight = originalPaddingRight || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "auto";
      document.body.style.paddingRight = originalPaddingRight || "";
    };
  }, [locked]);
};
