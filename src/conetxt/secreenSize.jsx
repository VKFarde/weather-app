import React, { createContext, useState, useEffect } from "react";

// Provide an initial size or use undefined as the default value
const screenSizeContext = createContext(undefined);

const InnerScreenSize = ({ children }) => {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };

    // Subscribe to window resize event
    window.addEventListener("resize", handleResize);

    // Unsubscribe when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  return (
    <screenSizeContext.Provider value={{ size, setSize }}>
      {children}
    </screenSizeContext.Provider>
  );
};

export { screenSizeContext, InnerScreenSize };
