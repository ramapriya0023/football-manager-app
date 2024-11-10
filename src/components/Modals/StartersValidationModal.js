import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  styled,
  DialogContentText,
  Paper,
} from "@mui/material";
import colors from "../../constants/colors";
import WarningIcon from "../../assets/icons/WarningIcon";

const DialogContainer = styled(Paper)({
  width: "70%",
  "&.MuiPaper-rounded": {
    borderRadius: "8px",
  },
  "&.MuiPaper-root": {
    borderRadius: "8px",
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  color: colors.text.heading,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  fontWeight: 600,
  gap: "5px",
  background: colors.neutral.background2,
});

const StyledDialogContent = styled(DialogContent)({
  background: colors.neutral.background2,
  gap: "12px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});

const StyledDialogContentText = styled(DialogContentText)({
  color: colors.text.normal,
  fontSize: "14px",
  fontWeight: 400,
  display: "flex",
  width: "100%",
  padding: "0px 20px",
});

const InfoContainer = styled("div")({
  background: colors.neutral.background2,
  color: colors.text.normal,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  gap: "8px",
});

const HeaderRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  color: colors.text.normal,
  width: "90%",
  gap: "8px",
  marginLeft: "10px",
});

const DataRowContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "8px",
  width: "90%",
});

const DataRow = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  height: "45px",
  background: colors.neutral.background1,
  width: "100%",
  borderRadius: "8px",
});

const PositionText = styled("div")({
  display: "flex",
  color: colors.text.normal,
  fontSize: "14px",
  fontWeight: 500,
  padding: "5px",
});

const RequiredText = styled("div")({
  display: "flex",
  color: colors.text.normal,
  padding: "5px",
});

const CurrentText = styled("div")({
  display: "flex",
  color: colors.primary.yellow,
  fontSize: "14px",
  fontWeight: 500,
  padding: "5px",
});

const StartersValidationModal = ({ errorContent, startersData }) => {
  return (
    <DialogContainer sx={{ borderRadius: "8px" }} elevation={8}>
      <StyledDialogTitle>
        <WarningIcon />
        <Typography>{errorContent.errorTitle}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <StyledDialogContentText>
          {errorContent.errorMessage}
        </StyledDialogContentText>
        <InfoContainer>
          <HeaderRow>
            <div>Positions</div>
            <div>Required</div>
            <div>Current</div>
          </HeaderRow>
          <DataRowContainer>
            {startersData.map((row) => (
              <DataRow key={row.position}>
                <PositionText>{row.position}</PositionText>
                <RequiredText>{row.required}</RequiredText>
                <CurrentText>{row.current}</CurrentText>
              </DataRow>
            ))}
          </DataRowContainer>
        </InfoContainer>
      </StyledDialogContent>
    </DialogContainer>
  );
};
export default StartersValidationModal;
