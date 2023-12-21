import { createContext, useState } from "react";

export type ThemeContextType = {
  theme: Theme;
  updateTheme: () => void;
}

export type Theme = boolean;

type Props = {
  children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType| null >(null);

const ThemeProvider = ({children}:Props) => {
  const [theme,setTheme] = useState<Theme>(false);
  const updateTheme  = () =>  {
    setTheme(!theme);
  };

  return (
      <ThemeContext.Provider value = {{theme,updateTheme}}>
        {children}
      </ThemeContext.Provider>
  );
}; 

export { ThemeContext, ThemeProvider};
