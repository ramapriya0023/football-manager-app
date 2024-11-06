import {
  Button,
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

const StyledDialog = styled(Dialog)({
  padding: "20px",
  border: colors.border.default,
});

const ImportDialog = ({ setOpen, open }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      maxWidth="lg"
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
      <Divider variant="middle" />
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={(theme) => ({
          position: "absolute",
          right: 8,
          top: 8,
          color: colors.text.normal,
        })}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={{ background: colors.neutral.background2 }}>
        <Typography gutterBottom sx={{ color: colors.text.heading }}>
          Roster File
        </Typography>
        <FilePicker />
        <Typography sx={{ color: colors.text.muted }}>
          File must be in .csv format
        </Typography>
      </DialogContent>
      <DialogActions sx={{ background: colors.neutral.background2 }}>
        <Button
          autoFocus
          onClick={handleClose}
          sx={{ color: colors.text.muted }}
        >
          Import
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default ImportDialog;
