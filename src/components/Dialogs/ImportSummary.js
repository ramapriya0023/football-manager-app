import { styled } from "@mui/material";
import { Typography } from "@mui/material";
import colors from "../../constants/colors";

const FileSummaryContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
});

const TableContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
});

const TableCell = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: colors.text.normal,
  gap: "8px",
});

const LabelTypography = styled(Typography)({
  fontWeight: 400,
  fontSize: "14px",
});

const ValueTypography = styled(Typography)({
  fontWeight: 600,
  fontSize: "16px",
});

const ImportSummary = () => {
  return (
    <FileSummaryContainer>
      <Typography gutterBottom sx={{ color: colors.text.heading }}>
        File Summary
      </Typography>
      <TableContainer>
        <TableCell>
          <LabelTypography>Total Players</LabelTypography>
          <Typography>32</Typography>
        </TableCell>
        <TableCell>
          <LabelTypography>Goal Keepers</LabelTypography>
          <Typography>32</Typography>
        </TableCell>
        <TableCell>
          <LabelTypography>Defenders</LabelTypography>
          <ValueTypography>32</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Mid Fielders</LabelTypography>
          <ValueTypography>32</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Forwards</LabelTypography>
          <ValueTypography>32</ValueTypography>
        </TableCell>
      </TableContainer>
    </FileSummaryContainer>
  );
};

export default ImportSummary;
