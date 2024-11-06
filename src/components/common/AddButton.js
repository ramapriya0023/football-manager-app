import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import colors from "../../constants/colors";

const PrimaryButton = styled(Button)({
  backgroundColor: colors.primary.yellow,
  "&:hover": {
    backgroundColor: colors.primary.orange,
  },
  width: "105px",
  height: "44px",
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
});

const SecondaryButton = styled(Button)({
  backgroundColor: colors.neutral.background1,
  color: colors.text.normal,
  "&:hover": {
    color: colors.text.heading,
  },
  width: "105px",
  height: "44px",
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
  borderColor: colors.border.default,
});

const CustomButton = ({ disabled = false, onClick, type }) => {
  return type === "primary" ? (
    <PrimaryButton variant="contained" disabled={disabled} onClick={onClick}>
      <AddOutlinedIcon />
    </PrimaryButton>
  ) : (
    <SecondaryButton variant="contained" disabled={disabled} onClick={onClick}>
      <AddOutlinedIcon />
    </SecondaryButton>
  );
};

export default CustomButton;
