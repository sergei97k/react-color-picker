import React, { useEffect } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const mount = document.getElementById("portal-root");
  const el = document.createElement("div");

  // @ts-ignore
  useEffect(() => {
    if (mount) {
      mount.appendChild(el);
      return () => mount.removeChild(el);
    }
  }, [el, mount]);

  return createPortal(children, el);
};

export default Portal;
