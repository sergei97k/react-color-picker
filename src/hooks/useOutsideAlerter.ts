import React, { useEffect } from "react";

export const useOutsideAlerter = (
  ref: React.RefObject<HTMLDivElement>,
  onClose: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (ref.current && !ref.current.contains(target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, ref]);
};
