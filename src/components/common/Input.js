import { styled } from "@mui/material";
import colors from "../../constants/colors";

const InputContainer = styled("input")(({ fullWidth }) => ({
  width: fullWidth ? "100%" : "248px",
  height: "44px",
  padding: "12px 16px 11px 16px",
  borderRadius: "8px",
  border: `1px solid ${colors.border.default}`,
  "&:focus": {
    border: `1px solid ${colors.border.default}`,
    outline: "none",
  },
  color: colors.text.heading,
  background: colors.neutral.background2,
}));

const Input = ({
  value,
  onChange,
  disabled = false,
  placeholder,
  type = "text",
  fullWidth = false,
}) => {
  return (
    <InputContainer
      disabled={disabled}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
    />
  );
};

export default Input;
