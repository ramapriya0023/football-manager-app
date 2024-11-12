import { Divider, Drawer, List, ListItem } from "@mui/material";
import FootballLogo from "../../assets/icons/FootballLogo";
import ImportIcon from "../../assets/icons/ImportIcon";
import colors from "../../constants/colors";

const drawerWidth = 60;

const SideNavigationBar = () => {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          background: colors.neutral.black,
          overflow: "hidden",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Divider />
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FootballLogo />
        </ListItem>
        <ListItem
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ImportIcon type={"DotNavigationIcon"} />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideNavigationBar;
