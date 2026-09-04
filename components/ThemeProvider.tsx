import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const ThemeContext = createContext<any>(null);

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useLocalStorage<string>("smartstudy:theme", "blue");

  const colors: Record<string, string> = {
    blue: "bg-blue-50 text-blue-900",
    green: "bg-green-50 text-green-900",
    purple: "bg-purple-50 text-purple-900",
    dark: "bg-gray-900 text-white"
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      <div className={colors[theme] + " min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
