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

const StyledDialog = styled(Dialog)({
  padding: "24px",
  border: colors.border.default,
});

const FileContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const ImportModal = ({ setImportOpen, importOpen }) => {
  const handleClose = () => {
    setImportOpen(false);
  };
  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={importOpen}
      maxWidth="md"
      fullWidth
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
          <FilePicker />
        </FileContainer>
        <ImportSummary />
      </DialogContent>
      <DialogActions sx={{ background: colors.neutral.background2 }}>
        <CustomButton
          type={"secondary"}
          onClick={handleClose}
          text={"Import"}
        />
      </DialogActions>
    </StyledDialog>
  );
};

export default ImportModal;
