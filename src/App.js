import React from "react";
import PageLayout from "./layouts/PageLayout";
import { RosterContextProvider } from "./providers/RosterContextProvider";
import { NationalityProvider } from "./providers/NationalityProvider";
import ThemeProvider from "./providers/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <NationalityProvider>
        <RosterContextProvider>
          <PageLayout />
        </RosterContextProvider>
      </NationalityProvider>
    </ThemeProvider>
  );
};

export default App;
