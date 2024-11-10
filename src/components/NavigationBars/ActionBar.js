import { Box, IconButton, styled, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import colors from "../../constants/colors";
import SearchBox from "../common/SearchBox";
import CustomButton from "../common/CustomButton";
import TabComponent from "../common/TabComponent";
import { useState } from "react";
import ImportIcon from "../../assets/icons/ImportIcon";
import TableListIcon from "../../assets/icons/TableListIcon";
import ChevronRightIcon from "../../assets/icons/ChevronRightIcon";
import MenuIcon from "../../assets/icons/MenuIcon";
import EditIcon from "../../assets/icons/EditIcon";
const drawerWidth = 60;

const HeaderContainer = styled(AppBar)({
  //height: "60px",
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
});

const FileName = styled(Typography)({
  color: colors.primary.yellow,
  fontSize: "20px",
  fontWeight: 600,
});

const IconContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const ImportNavigation = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
const FileNavigation = styled("div")({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});

const ActionBar = ({
  setImportOpen,
  isImported,
  setShowImportedFiles,
  showImportedFiles,
  selectedView,
  setSelectedView,
}) => {
  return (
    <HeaderContainer position="fixed" elevation={0}>
      {isImported ? (
        <NavigationHeader>
          <ImportNavigation onClick={() => setShowImportedFiles(true)}>
            <ImportIcon type={"CompletedImportIcon"} />
            <PageTitle imported={isImported}>Import List</PageTitle>
          </ImportNavigation>
          <IconContainer>
            <ChevronRightIcon />
          </IconContainer>
          <FileNameContainer>
            <FileNavigation onClick={() => setShowImportedFiles(false)}>
              <IconContainer>
                <MenuIcon />
              </IconContainer>
              <FileName>{"fileName"}</FileName>
            </FileNavigation>
            <IconButton>
              <EditIcon />
            </IconButton>
          </FileNameContainer>
        </NavigationHeader>
      ) : (
        <ContentPageLayoutHeader>
          <ImportIcon type={"PendingImportIcon"} />
          <PageTitle>Import List</PageTitle>
        </ContentPageLayoutHeader>
      )}
      <ToolbarActions>
        <SearchBox label={"Find Roster"} />
        {isImported && !showImportedFiles ? (
          <TabComponent
            selectedView={selectedView}
            setSelectedView={setSelectedView}
          />
        ) : (
          <CustomButton
            type={"primary"}
            onClick={() => setImportOpen(true)}
            text={"Import Team"}
          />
        )}
      </ToolbarActions>
    </HeaderContainer>
  );
};

export default ActionBar;
