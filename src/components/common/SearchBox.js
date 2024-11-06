import {
  Button,
  FormControl,
  InputAdornment,
  OutlinedInput,
  styled,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import colors from "../../constants/colors";

const InputContainer = styled(OutlinedInput)({
  width: "248px",
  height: "44px",
  padding: "12px 16px 11px 16px",
  borderRadius: "8px",
  border: `1px solid ${colors.border.default}`,
  background: colors.neutral.background1,
  color: colors.text.heading,
});

const SearchButton = styled(Button)({
  color: colors.primary.yellow,
  fontWeight: 500,
  fontSize: "14px",
});

const SearchBox = ({}) => {
  return (
    <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
      <InputContainer
        id="outlined-adornment-weight"
        endAdornment={<SearchButton position="end">Search</SearchButton>}
        startAdornment={
          <SearchRoundedIcon
            sx={{ color: colors.text.muted, paddingRight: "5px" }}
          />
        }
      />
    </FormControl>
  );
};

export default SearchBox;
