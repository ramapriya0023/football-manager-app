import { IconButton, styled, TextField, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import colors from "../../constants/colors";
import SearchBox from "../common/SearchBox";
import CustomButton from "../common/CustomButton";
import TabComponent from "../common/TabComponent";
import { useEffect, useState } from "react";
import ImportIcon from "../../assets/icons/ImportIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import EditIcon from "../../assets/icons/EditIcon";
import { useRoster } from "../../providers/RosterContextProvider";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "../../assets/icons/CloseIcon";
import { useFileAPI } from "../../services/FileApiService";

const drawerWidth = 60;

const HeaderContainer = styled(AppBar)({
  display: "flex",
  width: `calc(100% - ${drawerWidth}px)`,
  ml: `${drawerWidth}px`,
  flexDirection: "row",
  background: colors.neutral.background1,
  alignItems: "center",
  margin: "20px",
  paddingLeft: "50px",
  justifyContent: "space-between",
});

const PageTitle = styled(Typography)(({ imported }) => ({
  color: imported ? colors.text.normal : colors.primary.yellow,
  fontSize: imported ? "16px" : "20px",
  fontWeight: 600,
  marginRight: "8px",
}));

const ContentPageLayoutHeader = styled("div")({
  display: "flex",
  alignItems: "center",
});
const NavigationHeader = styled("div")({
  display: "flex",
  alignItems: "center",
  width: "50%",
});

const ToolbarActions = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const FileNameContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginLeft: "10px",
  width: "70%",
});

const FileName = styled(Typography)({
  color: colors.primary.yellow,
  fontSize: "20px",
  fontWeight: 600,
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

const IconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  marginRight: "10px",
});

const ImportNavigation = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
const FileNavigation = styled("div")({
  display: "flex",
  alignItems: "center",
  maxWidth: "100%",
});

const ActionBar = () => {
  const {
    rosterName,
    openImportModal,
    isFileImported,
    setShowImportedFiles,
    showImportedFiles,
    updateRosterName,
    fileId,
  } = useRoster();

  const { updateFileName } = useFileAPI();

  const [isEditing, setIsEditing] = useState(false);
  const [newRosterName, setNewRosterName] = useState(rosterName);
  const [isEdited, setIsEdited] = useState(false);
  const [isFileNameValid, setIsFileNameValid] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setNewRosterName(rosterName);
  }, [rosterName]);

  const handleCancelClick = () => {
    setNewRosterName(rosterName);
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    try {
      await updateFileName(fileId, newRosterName);

      updateRosterName(newRosterName);
      setIsEditing(false);
      setIsEdited(true);
    } catch (error) {
      console.log("error");
      setIsFileNameValid(false);
      console.error("Failed to update roster name:", error);
    }
  };

  return (
    <HeaderContainer position="fixed" elevation={0}>
      {!showImportedFiles ? (
        <NavigationHeader>
          <ImportNavigation
            onClick={() => {
              setShowImportedFiles(true);
              updateRosterName("");
              setIsEditing(false);
              setIsFileNameValid(true);
            }}
          >
            <ImportIcon type={"CompletedImportIcon"} />
            <PageTitle imported={isFileImported}>Import List</PageTitle>
          </ImportNavigation>
          {rosterName && (
            <>
              <IconContainer>
                <ChevronRightIcon />
              </IconContainer>
              <FileNameContainer
                onMouseEnter={() => {
                  isEdited && handleMouseEnter();
                }}
                onMouseLeave={() => {
                  isEdited && handleMouseLeave();
                }}
              >
                <FileNavigation>
                  <IconContainer>
                    <MenuIcon />
                  </IconContainer>

                  {isEditing ? (
                    <TextField
                      variant="standard"
                      focused
                      fullWidth
                      value={newRosterName}
                      onChange={(e) => {
                        setIsFileNameValid(true);
                        setNewRosterName(e.target.value);
                      }}
                      slotProps={{
                        htmlInput: {
                          sx: {
                            color: colors.primary.yellow,
                            fontSize: "20px",
                            fontWeight: 600,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          },
                        },
                      }}
                      sx={{
                        "& .MuiInputBase-root::after": {
                          borderBottom: `1px solid ${
                            isFileNameValid ? colors.border.default : "red"
                          }`,
                        },
                      }}
                    />
                  ) : (
                    <FileName>{rosterName}</FileName>
                  )}
                </FileNavigation>

                {isEditing ? (
                  <>
                    <IconButton onClick={handleSaveClick}>
                      <CheckIcon sx={{ color: colors.text.normal }} />
                    </IconButton>
                    <IconButton onClick={handleCancelClick}>
                      <CloseIcon />
                    </IconButton>
                  </>
                ) : !isEdited ? (
                  <IconButton onClick={handleEditClick}>
                    <EditIcon />
                  </IconButton>
                ) : (
                  isHovered && (
                    <IconButton onClick={handleEditClick}>
                      <EditIcon />
                    </IconButton>
                  )
                )}
              </FileNameContainer>
            </>
          )}
        </NavigationHeader>
      ) : (
        <ContentPageLayoutHeader>
          <ImportIcon type={"PendingImportIcon"} />
          <PageTitle>Import List</PageTitle>
        </ContentPageLayoutHeader>
      )}
      <ToolbarActions>
        <SearchBox label={"Find Roster"} />
        {isFileImported && !showImportedFiles ? (
          <TabComponent />
        ) : (
          <CustomButton
            type={"primary"}
            onClick={() => openImportModal(true)}
            text={"Import Team"}
          />
        )}
      </ToolbarActions>
    </HeaderContainer>
  );
};

export default ActionBar;
