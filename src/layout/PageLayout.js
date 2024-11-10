import { useState } from "react";

import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import colors from "../constants/colors";
import ActionBar from "../components/NavigationBars/ActionBar";
import SideNavigationBar from "../components/NavigationBars/SideNavigationBar";
import ContentPageLayout from "./ContentPageLayout";

const PageLayout = () => {
  const [importOpen, setImportOpen] = useState(false);
  const [isImported, setIsImported] = useState(true);
  const [selectedView, setSelectedView] = useState("roster");
  const [showImportedFiles, setShowImportedFiles] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        background: colors.neutral.background2,
        height: "100%",
      }}
    >
      <CssBaseline />
      <ActionBar
        setImportOpen={setImportOpen}
        isImported={isImported}
        setShowImportedFiles={setShowImportedFiles}
        showImportedFiles={showImportedFiles}
        setSelectedView={setSelectedView}
        selectedView={selectedView}
      />
      <SideNavigationBar />
      <ContentPageLayout
        importOpen={importOpen}
        setImportOpen={setImportOpen}
        isImported={isImported}
        setIsImported={setIsImported}
        showImportedFiles={showImportedFiles}
        selectedView={selectedView}
      />
    </Box>
  );
};

export default PageLayout;
