import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import colors from "../../constants/colors";

const PrimaryButton = styled(Button)({
  backgroundColor: colors.primary.yellow,
  color: colors.text.normal,
  "&:hover": {
    backgroundColor: colors.primary.orange,
  },
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
  height: "44px",
  textTransform: "none",
  "& .Mui-disabled": {
    color: "white",
  },
  "& .MuiButton-root": {
    color: "white",
  },
});

const SecondaryButton = styled(Button)({
  backgroundColor: colors.neutral.background2,
  color: colors.text.normal,
  textTransform: "none",
  "&:hover": {
    color: colors.text.heading,
  },
  padding: "12px 20px 11px 20px",
  borderRadius: "8px",
  borderColor: colors.border.default,
  height: "44px",
  "& .Mui-disabled": {
    color: colors.text.disabled,
  },
  "& .MuiButton-root": {
    color: colors.text.disabled,
  },
});

const CustomButton = ({ text, disabled = false, onClick, type }) => {
  return type === "primary" ? (
    <PrimaryButton variant="contained" disabled={disabled} onClick={onClick}>
      <div
        style={{ color: disabled ? colors.text.disabled : colors.text.heading }}
      >
        {text}
      </div>
    </PrimaryButton>
  ) : (
    <SecondaryButton variant="outlined" disabled={disabled} onClick={onClick}>
      <div
        style={{ color: disabled ? colors.text.disabled : colors.text.heading }}
      >
        {text}
      </div>
    </SecondaryButton>
  );
};

export default CustomButton;
