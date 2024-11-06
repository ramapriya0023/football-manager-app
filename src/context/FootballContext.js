import React, { createContext, useReducer } from "react";
import { initialState, footballReducer } from "./reducer";

export const FootballContext = createContext();

export const FootballProvider = ({ children }) => {
  const [state, dispatch] = useReducer(footballReducer, initialState);

  return (
    <FootballContext.Provider value={{ state, dispatch }}>
      {children}
    </FootballContext.Provider>
  );
};
