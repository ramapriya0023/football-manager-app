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
  justify: "space-between",
  background: colors.neutral.background1,
  "& .MuiSelect-icon": {
    color: "white",
  },
  "& .MuiSelect-root": {
    border: "none",
  },
});

const DropdownSelect = ({}) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <StyledSelect
      value={age}
      onChange={handleChange}
      renderValue={(selected) => {
        if (selected.length === 0) {
          return <Placeholder>Placeholder</Placeholder>;
        }
        return selected;
      }}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </StyledSelect>
  );
};

export default DropdownSelect;
