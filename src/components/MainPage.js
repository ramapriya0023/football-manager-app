import { Box, Toolbar, Typography } from "@mui/material";
import ImportDialog from "./Dialogs/ImportDialog";
import colors from "../constants/colors";
import FileImportGrid from "./DataGrids/FileImportGrid";

const MainPage = ({ importOpen, setImportOpen }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        bgcolor: colors.neutral.background1,
        p: 3,
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Toolbar sx={{ height: "70px" }} />
      <ImportDialog importOpen={importOpen} setImportOpen={setImportOpen} />
      <FileImportGrid />
    </Box>
  );
};

export default MainPage;
