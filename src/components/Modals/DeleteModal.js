import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  styled,
} from "@mui/material";
import { useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import colors from "../../constants/colors";

const DialogContainer = styled(Dialog)({
  "& .MuiDialog-paper": {
    borderRadius: "8px",
    background: colors.neutral.background2,
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  color: colors.text.normal,
});
const StyledDialogContentText = styled(DialogContentText)({
  color: colors.text.normal,
});

const CancelButton = styled(Button)({
  background: colors.neutral.background2,
  border: `1px solid ${colors.border.default}`,
  color: colors.text.heading,
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
});
const DeleteButton = styled(Button)({
  background: colors.primary.red,
  color: colors.text.heading,
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
});

const DeleteModal = ({ isDeleteDialogOpen, handleClose, handleDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <DialogContainer open={isDeleteDialogOpen} maxWidth="xs" fullWidth>
      <StyledDialogTitle>{"Are you sure?"}</StyledDialogTitle>
      <IconButton
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
      <DialogContent>
        <StyledDialogContentText>
          This action cannot be undone.
        </StyledDialogContentText>
        {error && (
          <StyledDialogContentText style={{ color: colors.primary.red }}>
            {error}
          </StyledDialogContentText>
        )}
      </DialogContent>
      <DialogActions>
        <CancelButton onClick={handleClose} disabled={loading}>
          Cancel
        </CancelButton>
        <DeleteButton
          onClick={handleDelete}
          variant="contained"
          disabled={loading}
        >
          {loading ? "Deleting..." : "Delete"}
        </DeleteButton>
      </DialogActions>
    </DialogContainer>
  );
};

export default DeleteModal;
