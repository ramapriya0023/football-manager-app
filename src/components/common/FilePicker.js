import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import colors from "../../constants/colors";

const FilePickerContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.neutral.background2,
  border: "1px solid #555",
  borderRadius: "8px",
  color: colors.text.muted,
  overflow: "hidden",
  width: "300px",
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
  color: colors.text.heading,
  borderLeft: `1px solid ${colors.border.default}`,
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "5px",
});

const HiddenInput = styled("input")({
  display: "none",
});

const FilePicker = () => {
  const [fileName, setFileName] = useState("No file selected");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <FilePickerContainer>
      <FileNameDisplay>{fileName}</FileNameDisplay>
      <label htmlFor="file-upload">
        <HiddenInput id="file-upload" type="file" onChange={handleFileChange} />
        <SelectFileButton component="span">Select File</SelectFileButton>
      </label>
    </FilePickerContainer>
  );
};

export default FilePicker;
