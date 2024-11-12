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

const ImportSummary = ({ summary }) => {
  return (
    <FileSummaryContainer>
      <Typography gutterBottom sx={{ color: colors.text.heading }}>
        File Summary
      </Typography>
      <TableContainer>
        <TableCell>
          <LabelTypography>Total Players</LabelTypography>
          <ValueTypography>{summary.totalPlayers || 0}</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Goal Keepers</LabelTypography>
          <ValueTypography>{summary.goalKeepers || 0}</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Defenders</LabelTypography>
          <ValueTypography>{summary.defenders || 0}</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Mid Fielders</LabelTypography>
          <ValueTypography>{summary.midFielders || 0}</ValueTypography>
        </TableCell>
        <TableCell>
          <LabelTypography>Forwards</LabelTypography>
          <ValueTypography>{summary.forwards || 0}</ValueTypography>
        </TableCell>
      </TableContainer>
    </FileSummaryContainer>
  );
};

export default ImportSummary;
