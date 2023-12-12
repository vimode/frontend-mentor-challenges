import { createContext, useState } from "react";

type ThemeContextType = {
  theme: Theme;
  updateTheme: () => void;
}

type Theme = "default" | "switchTheme";

type Props = {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({children}:Props) => {
  const [theme,setTheme] = useState<Theme>("default");
  const updateTheme  = () =>  {
    setTheme( theme === "default" ? "switchTheme": "default");
  };

  return (
      <ThemeContext.Provider value = {{theme,updateTheme}}>
        {children}
      </ThemeContext.Provider>
  );
}; 

export { ThemeContext, ThemeProvider};
