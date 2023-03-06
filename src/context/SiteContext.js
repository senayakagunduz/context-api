import { createContext,useState } from "react";

export const Context = createContext();

const Provider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("tr");

  const data = {
    theme,
    setTheme,
    lang,
    setLang,
  };
  return (
  <Context.Provider value={data}>
    {children}
  </Context.Provider>
  )
};
export default Provider;
