import { createContext, useState } from "react"

const FontContext = createContext(null)

const FontProvider = ({ children }) => {
  const [ font, setFont ]= useState("Sans");
  const updateFont = (value) => {
    setFont(value)
  };

  return (
    <FontContext.Provider value = {{ font, updateFont}}>
      {children}
    </FontContext.Provider>
  );
};

export { FontContext, FontProvider};

