import React, { createContext, useContext } from "react";
import colors from "../constants/colors";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = { colors };
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
