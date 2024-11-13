import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  styled,
  Typography,
} from "@mui/material";
import colors from "../../constants/colors";
import CloseIcon from "@mui/icons-material/Close";
import FilePicker from "../common/FilePicker";
import CustomButton from "../common/CustomButton";
import ImportSummary from "./ImportSummary";
import Papa from "papaparse";
import { useState } from "react";
import { useRoster } from "../../providers/RosterContextProvider";
import { useFileAPI } from "../../services/FileApiService";

const StyledDialog = styled(Dialog)({
  padding: "24px",
  border: colors.border.default,
});

const FileContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const ErrorMessage = styled(Typography)({
  color: colors.text.normal,
  fontSize: "15px",
  marginTop: "8px",
  fontWeight: 400,
});

const ImportModal = ({
  setShowImportedFiles,
  refreshFilesData,
  setRefreshFilesData,
}) => {
  const { openImportModal, isImportModalOpen } = useRoster();
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const { updateIsFileImported } = useRoster();
  const { uploadFile } = useFileAPI();

  const handleFileChange = (uploadedFile) => {
    setFile(uploadedFile);
    setErrorMessage("");
    setSummary(null);

    Papa.parse(uploadedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const players = results.data;

        const hasEmptyValues = players.some((row) =>
          Object.values(row).some((value) => value.trim() === "")
        );
        if (hasEmptyValues) {
          setErrorMessage(
            "Your sheet is missing data. Please ensure all cells are filled out."
          );
          return;
        }

        const summaryData = {
          totalPlayers: players.length,
          goalKeepers: players.filter((p) => p.Position === "Goalkeeper")
            .length,
          defenders: players.filter((p) => p.Position === "Defender").length,
          midFielders: players.filter((p) => p.Position === "Midfielder")
            .length,
          forwards: players.filter((p) => p.Position === "Forward").length,
        };
        setSummary(summaryData);
      },
      error: (err) => {
        setErrorMessage(`Error parsing CSV: ${err.message}`);
      },
    });
  };

  const handleImport = () => {
    if (!file) {
      setErrorMessage("Please select a file first.");
      return;
    }

    uploadFile(file)
      .then(() => {
        setShowImportedFiles(true);
        updateIsFileImported(true);
        setRefreshFilesData(!refreshFilesData);
        setErrorMessage("");
        openImportModal(false);
      })
      .catch(async (err) => {
        let message = err.message || "An unexpected error occurred.";

        setErrorMessage(message);
      });
  };

  const handleClose = () => {
    openImportModal(false);
    setErrorMessage("");
    setSummary("");
    setFile(null);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={isImportModalOpen}
      maxWidth="md"
      fullWidth
      slotProps={{
        backdrop: {
          style: { backgroundColor: "transparent", pointerEvents: "none" },
        },
      }}
    >
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          background: colors.neutral.background2,
          color: colors.text.heading,
        }}
        id="customized-dialog-title"
      >
        Importer
      </DialogTitle>
      <Divider variant="fullWidth" sx={{ background: colors.border.default }} />
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: colors.text.normal,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent
        dividers
        sx={{
          background: colors.neutral.background2,
          height: "60vh",
          gap: "50px",
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <FileContainer>
          <Typography gutterBottom sx={{ color: colors.text.heading }}>
            Roster File
          </Typography>
          <FilePicker
            onFileSelect={handleFileChange}
            errorMessage={errorMessage}
          />
          {errorMessage && (
            <>
              <Typography
                sx={{
                  color: colors.primary.red,
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                Error
              </Typography>
              <ErrorMessage>{errorMessage}</ErrorMessage>
            </>
          )}
        </FileContainer>
        {summary && <ImportSummary summary={summary} />}
      </DialogContent>
      <DialogActions sx={{ background: colors.neutral.background2 }}>
        <CustomButton
          type="secondary"
          onClick={handleImport}
          text="Import"
          disabled={errorMessage}
        />
      </DialogActions>
    </StyledDialog>
  );
};

export default ImportModal;
