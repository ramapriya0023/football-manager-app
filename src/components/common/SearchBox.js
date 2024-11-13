import { Button, IconButton, InputBase, Paper, styled } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import colors from "../../constants/colors";
import { useRoster } from "../../providers/RosterContextProvider";
import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";

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
  padding: "15px",
});

const SearchBox = () => {
  const { updateSearchValue, showImportedFiles } = useRoster();
  const [searchText, setSearchText] = useState("");
  const [isSearched, setIsSearched] = useState(false);

  useEffect(() => {
    setSearchText("");
    setIsSearched(false);
    updateSearchValue("");
  }, [showImportedFiles]);

  return (
    <InputContainer component="form">
      <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
        <SearchRoundedIcon
          sx={{ color: colors.text.muted, paddingRight: "5px" }}
        />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: colors.text.heading }}
        placeholder={showImportedFiles ? "Find Roster" : "Find Player"}
        value={searchText}
        onChange={(event) => {
          setSearchText(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            event.preventDefault();
            setIsSearched(true);
            updateSearchValue(searchText);
          } else if (event.key === "Escape") {
            setSearchText("");
            setIsSearched(false);
            updateSearchValue("");
          }
        }}
      />
      {searchText && !isSearched && (
        <SearchButton
          onClick={() => {
            setIsSearched(true);
            updateSearchValue(searchText);
          }}
        >
          Search
        </SearchButton>
      )}
      {isSearched && (
        <div
          onClick={() => {
            setSearchText("");
            setIsSearched(false);
            updateSearchValue("");
          }}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <CloseIcon />
        </div>
      )}
    </InputContainer>
  );
};

export default SearchBox;
