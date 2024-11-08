import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputBase,
  OutlinedInput,
  Paper,
  styled,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import colors from "../../constants/colors";

const InputContainer = styled(Paper)({
  p: "2px 4px",
  display: "flex",
  alignItems: "center",
  background: colors.neutral.background1,
  border: `1px solid ${colors.border.default}`,
  borderRadius: "8px",
  width: "248px",
  height: "44px",
});

const SearchButton = styled(Button)({
  color: colors.primary.yellow,
  fontWeight: 500,
  fontSize: "14px",
});

const SearchBox = ({ label, value = "" }) => {
  return (
    <InputContainer component="form">
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchRoundedIcon
          sx={{ color: colors.text.muted, paddingRight: "5px" }}
        />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: colors.text.heading }}
        placeholder={label}
      />
      {value && <SearchButton>Search</SearchButton>}
    </InputContainer>
  );
};

export default SearchBox;
