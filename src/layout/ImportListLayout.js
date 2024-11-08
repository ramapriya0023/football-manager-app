import { useState } from "react";

import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import colors from "../constants/colors";
import ActionBar from "../components/NavigationBars/ActionBar";
import SideNavigationBar from "../components/NavigationBars/SideNavigationBar";
import MainPage from "../components/MainPage";

const ImportListLayout = () => {
  const [importOpen, setImportOpen] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        background: colors.neutral.background2,
      }}
    >
      <CssBaseline />
      <ActionBar setImportOpen={setImportOpen} />
      <SideNavigationBar />
      <MainPage importOpen={importOpen} setImportOpen={setImportOpen} />
    </Box>
  );
};

export default ImportListLayout;
