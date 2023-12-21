import { createContext, useState } from "react"

export type FontContextType = {
  font: FontType;
  updateFont : (string:FontType) => void;
}

export type FontType = "Sans" | "Serif" | "Mono";

type Props = {
  children: React.ReactNode;
}

const FontContext = createContext<FontContextType | null>(null)

const FontProvider = ({ children }:Props) => {
  const [ font, setFont ]= useState<FontType>("Sans");
  const updateFont = (value:FontType) => {
    setFont(value)
  };

  return (
    <FontContext.Provider value = {{ font, updateFont}}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider};

