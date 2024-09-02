"use client"; // Only this component is a client component

import { useEffect } from "react";

const BootstrapLoader = () => {
  useEffect(() => {
    // Dynamically import Bootstrap JS for client-side only
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return null; // This component doesn't render anything visible
};

export default BootstrapLoader;
