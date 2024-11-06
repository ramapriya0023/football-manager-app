import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import colors from "../../constants/colors";

const PrimaryButton = styled(Button)({
  backgroundColor: colors.primary.yellow,
  "&:hover": {
    backgroundColor: colors.primary.orange,
  },
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
});

const SecondaryButton = styled(Button)({
  backgroundColor: colors.neutral.background1,
  color: colors.text.normal,
  "&:hover": {
    color: colors.text.heading,
  },
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
  borderColor: colors.border.default,
});

const CustomButton = ({ text, disabled = false, onClick, type }) => {
  return type === "primary" ? (
    <PrimaryButton variant="contained" disabled={disabled} onClick={onClick}>
      {text}
    </PrimaryButton>
  ) : (
    <SecondaryButton variant="contained" disabled={disabled} onClick={onClick}>
      {text}
    </SecondaryButton>
  );
};

export default CustomButton;
