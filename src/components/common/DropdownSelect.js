import { useState } from "react";
import { styled } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import colors from "../../constants/colors";

const Placeholder = styled("div")({
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
  textAlign: "left",
  color: colors.text.muted,
  "&:hover": {
    color: colors.text.heading,
  },
});
const StyledSelect = styled(Select)({
  width: "248px",
  height: "44px",
  padding: "12px 16px 11px 16px",
  borderRadius: "8px",
  border: `1px solid ${colors.border.default}`,
  background: colors.neutral.background2,
  color: colors.text.heading,
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& .MuiSelect-icon": {
    color: "white",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: colors.border.default,
  },
  "&.Mui-focused": {
    outline: "none",
    border: "none",
  },
});

const StyledMenuItem = styled(MenuItem)({
  "&.Mui-selected": {
    backgroundColor: colors.border.default,
    "&:hover": {
      backgroundColor: colors.border.default,
    },
  },
  "&:hover": {
    backgroundColor: colors.border.default,
  },
});

const DropdownSelect = ({
  options = [],
  value,
  placeholder = "Select an option",
  onChange,
}) => {
  return (
    <StyledSelect
      value={value}
      onChange={onChange}
      renderValue={(selected) => {
        if (!selected) {
          return <Placeholder>{placeholder}</Placeholder>;
        }
        return selected;
      }}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      MenuProps={{
        sx: {
          "& .MuiMenu-paper": {
            background: colors.neutral.background2,
            color: colors.text.heading,
          },
        },
      }}
    >
      {options.map((option, index) => (
        <StyledMenuItem key={index} value={option.value}>
          {option.label}
        </StyledMenuItem>
      ))}
    </StyledSelect>
  );
};

export default DropdownSelect;
