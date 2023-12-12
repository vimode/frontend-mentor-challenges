import { createContext, useState } from "react";

type ThemeContextType = {
  theme: Theme;
  updateTheme: () => void;
}

type Theme = boolean;

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
