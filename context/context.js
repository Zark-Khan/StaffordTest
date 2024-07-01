"use client";
import { createContext, useEffect, useState } from "react";

export const Message_data = createContext(null);

function Context({ children }) {
  const [theme, setTheme] = useState("light");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    getTheme();
  }, []);

  function getTheme() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <Message_data.Provider
      value={{
        theme,
        setTheme,
        setSelectedLanguage,
        selectedLanguage,
        setIsPageLoaded,
        isPageLoaded,
      }}
    >
      {children}
    </Message_data.Provider>
  );
}
export default Context;
