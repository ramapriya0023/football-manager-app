import React, { createContext, useContext, useState } from "react";

const NationalityContext = createContext();

export const useNationality = () => useContext(NationalityContext);

export const NationalityProvider = ({ children }) => {
  const [nationalities, setNationalities] = useState([]);

  const updateNationalities = (data) => {
    setNationalities(data);
  };

  return (
    <NationalityContext.Provider value={{ nationalities, updateNationalities }}>
      {children}
    </NationalityContext.Provider>
  );
};
