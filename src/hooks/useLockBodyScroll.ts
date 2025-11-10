import { useEffect } from "react";

export const useLockBodyScroll = (locked: boolean) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (locked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "auto";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, [locked]);
};
