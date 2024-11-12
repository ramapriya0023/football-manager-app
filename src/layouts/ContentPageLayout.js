import { Box, Toolbar } from "@mui/material";
import { useState, useEffect } from "react";
import FileImportGrid from "../components/DataGrids/FileImportGrid";
import ImportModal from "../components/Modals/ImportModal";
import PlayersFormationLayout from "./PlayersFormationLayout";
import colors from "../constants/colors";
import PlayersGrid from "../components/DataGrids/PlayersGrid";
import { useRoster } from "../providers/RosterProvider";

const ContentPageLayout = ({}) => {
  const [refreshFilesData, setRefreshFilesData] = useState(false);
  const [selectedRow, setSelectedRow] = useState([]);

  const { selectedView, showImportedFiles, setShowImportedFiles } = useRoster();
  console.log({ showImportedFiles });

  useEffect(() => {
    setRefreshFilesData(true);
  }, [showImportedFiles]);

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
      <ImportModal
        setShowImportedFiles={setShowImportedFiles}
        refreshFilesData={refreshFilesData}
        setRefreshFilesData={setRefreshFilesData}
      />

      {showImportedFiles ? (
        <FileImportGrid
          selectedRow={selectedRow}
          setSelectedRow={setSelectedRow}
        />
      ) : selectedView === "roster" ? (
        <PlayersGrid selectedFile={selectedRow} />
      ) : (
        <PlayersFormationLayout selectedFile={selectedRow} />
      )}
    </Box>
  );
};

export default ContentPageLayout;
