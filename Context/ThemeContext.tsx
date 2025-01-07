"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({ theme: "light", toggle: () => {} });

const getFromLocalStorage = () => {
  if (typeof window !== undefined && typeof localStorage !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = getFromLocalStorage();
    setTheme(savedTheme);
  }, []);

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && typeof localStorage !== "undefined") {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};
