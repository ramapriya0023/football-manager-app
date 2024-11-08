import React from "react";
import ImportListLayout from "./layout/ImportListLayout";
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
        <ImportListLayout />
      </div>
    </MantineProvider>
  );
};

export default App;
