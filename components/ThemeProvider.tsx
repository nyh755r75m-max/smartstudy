import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const ThemeContext = createContext<any>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<string>("smartstudy:theme", "blue");

  const colors: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800",
    green: "bg-green-100 text-green-800",
    purple: "bg-purple-100 text-purple-800",
    dark: "bg-gray-900 text-white"
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      <div className={colors[theme] + " min-h-screen transition-colors duration-300"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
