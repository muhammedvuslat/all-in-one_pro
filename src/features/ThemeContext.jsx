//  Context and provider component for theme management.
import { createContext, useContext, useEffect, useState } from "react";
// EN: Creates the theme context
const ThemeContext = createContext();
// Theme provider component, manages theme state and provides it to child components.

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  // Updates document class and saves to localStorage when theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggles the theme (between dark and light)
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context.
export const useTheme = () => useContext(ThemeContext);
