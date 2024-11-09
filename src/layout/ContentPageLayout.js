import { Box, Toolbar, Typography } from "@mui/material";
import ImportDialog from "../components/Dialogs/ImportDialog";
import colors from "../constants/colors";
import FileImportGrid from "../components/DataGrids/FileImportGrid";
import PlayersFormationOverview from "../components/Players/PlayersFormationOverview";

const ContentPageLayout = ({
  importOpen,
  setImportOpen,
  isImported,
  setIsImported,
  showImportedFiles,
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
      <ImportDialog importOpen={importOpen} setImportOpen={setImportOpen} />
      {showImportedFiles ? <FileImportGrid /> : <PlayersFormationOverview />}
    </Box>
  );
};

export default ContentPageLayout;
