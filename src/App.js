import React from "react";
import PageLayout from "./layouts/PageLayout";
import { MantineProvider } from "@mantine/core";
import { RosterProvider } from "./providers/RosterProvider";
import colors from "./constants/colors";
import { NationalityProvider } from "./providers/NationalityProvider";

const App = () => {
  return (
    <MantineProvider
      theme={{
        primaryColor: "gray",
        primaryShade: 7,
        components: {
          Text: {
            styles: {
              root: {
                color: colors.text.normal,
              },
            },
          },
        },
      }}
      forceColorScheme="dark"
    >
      <NationalityProvider>
        <RosterProvider>
          <PageLayout />
        </RosterProvider>
      </NationalityProvider>
    </MantineProvider>
  );
};

export default App;
