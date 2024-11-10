import { Box, Toolbar, Typography } from "@mui/material";
import ImportModal from "../components/Modals/ImportModal";
import colors from "../constants/colors";
import FileImportGrid from "../components/DataGrids/FileImportGrid";
import PlayersFormationOverview from "../components/Players/PlayersFormationOverview";

const ContentPageLayout = ({
  importOpen,
  setImportOpen,
  isImported,
  setIsImported,
  showImportedFiles,
  selectedView,
}) => {
  console.log({ showImportedFiles });
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: colors.neutral.background1,
        p: 3,
        height: "100vh",
        overflow: "hidden",
        padding: "40px",
      }}
    >
      <Toolbar sx={{ height: "70px" }} />
      <ImportModal importOpen={importOpen} setImportOpen={setImportOpen} />
      {showImportedFiles ? (
        <FileImportGrid />
      ) : selectedView === "roster" ? (
        <FileImportGrid />
      ) : (
        <PlayersFormationOverview />
      )}
    </Box>
  );
};

export default ContentPageLayout;
