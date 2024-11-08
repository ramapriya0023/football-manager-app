import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import colors from "../../constants/colors";

const FilePickerContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.neutral.background2,
  border: `1px solid ${colors.border.default}`,
  borderRadius: "8px",
  color: colors.text.muted,
  overflow: "hidden",
  width: "300px",
  height: "41px",
});

const FileNameDisplay = styled(Typography)({
  flex: 1,
  padding: "10px 16px",
  fontSize: "16px",
  color: colors.text.muted,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  textAlign: "center",
  "&:hover": {
    color: colors.text.heading,
  },
});

const SelectFileButton = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "10px 16px",
  backgroundColor: colors.neutral.background2,
  color: colors.text.normal,
  borderLeft: `1px solid ${colors.border.default}`,
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "8px",
  height: "40px",
});

const ErrorMessage = styled(Typography)({
  color: colors.text.error,
  fontSize: "14px",
  marginTop: "8px",
  textAlign: "center",
});

const HiddenInput = styled("input")({
  display: "none",
});

const FilePicker = () => {
  const [fileName, setFileName] = useState("No file selected");
  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type === "text/csv") {
        setError("");
      } else {
        setError("Only CSV files are allowed");
      }
      setFileName(file.name);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <FilePickerContainer>
        <FileNameDisplay>{fileName}</FileNameDisplay>
        <label htmlFor="file-upload">
          <HiddenInput
            id="file-upload"
            type="file"
            onChange={handleFileChange}
          />
          <SelectFileButton component="span">Select File</SelectFileButton>
        </label>
      </FilePickerContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        {error && (
          <>
            <Typography sx={{ color: colors.primary.red }}>Error</Typography>
            <Typography sx={{ color: colors.text.normal }}>{error}</Typography>
          </>
        )}
        {!error && (
          <Typography sx={{ color: colors.text.muted }}>
            File must be in .csv format
          </Typography>
        )}
      </div>
    </div>
  );
};

export default FilePicker;
