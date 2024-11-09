import React from "react";
import PageLayout from "./layout/PageLayout";
import { MantineProvider } from "@mantine/core";

const App = () => {
  return (
    <MantineProvider
      theme={{
        primaryColor: "gray",
        primaryShade: 7,
      }}
      forceColorScheme="dark"
    >
      <div>
        <PageLayout />
      </div>
    </MantineProvider>
  );
};

export default App;
