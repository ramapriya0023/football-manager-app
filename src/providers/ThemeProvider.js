import { Global } from "@emotion/react";
import { MantineProvider } from "@mantine/core";
import colors from "../constants/colors";

const ThemeProvider = ({ children }) => {
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
      <Global
        styles={{
          ".MRT_TableBodyRow-module_root__2c3D4:not([data-selected], [data-row-pinned]) td[data-column-pinned]::before":
            {
              backgroundColor: colors.neutral.background2,
            },
          "[data-mantine-color-scheme='dark'] .MRT_TableHeadCell-module_root__6y50a[data-column-pinned][data-column-pinned='right'][data-first-right-pinned]":
            {
              boxShadow: "none",
            },
          "[data-mantine-color-scheme='dark'] .MRT_TableBodyRow-module_root__2c3D4 td[data-column-pinned][data-column-pinned='right'][data-first-right-pinned]::before":
            {
              boxShadow: "none",
            },
        }}
      />
      {children}
    </MantineProvider>
  );
};

export default ThemeProvider;
