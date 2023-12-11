import { createContext, useState } from "react";

const ThemeContext = createContext(null);

const ThemeProvider = ({children}) => {
  const [theme,setTheme] = useState("default");
  const updateTheme= () => {
    setTheme( theme === "default" ? "switchTheme": "default");
  };

  return (
      <ThemeContext.Provider value = {{theme,updateTheme}}>
        {children}
      </ThemeContext.Provider>
  );
}; 

export { ThemeContext, ThemeProvider};
