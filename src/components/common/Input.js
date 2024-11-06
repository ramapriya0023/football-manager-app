import { styled } from "@mui/material";
import colors from "../../constants/colors";

const InputContainer = styled("input")({
  width: "248px",
  height: "44px",
  padding: "12px 16px 11px 16px",
  borderRadius: "8px",
  border: `1px solid ${colors.border.default}`,
  color: colors.text.muted,
  background: colors.neutral.background1,
  "&:hover": {
    color: colors.text.heading,
  },
});

const Input = ({ label, disabled = false, placeholder }) => {
  return (
    <InputContainer
      disabled={disabled}
      value={label}
      type="text"
      placeholder={placeholder}
    />
  );
};

export default Input;
