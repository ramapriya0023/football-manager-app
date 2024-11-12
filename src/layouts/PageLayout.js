import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import colors from "../constants/colors";
import ActionBar from "../components/NavigationBars/ActionBar";
import SideNavigationBar from "../components/NavigationBars/SideNavigationBar";
import ContentPageLayout from "./ContentPageLayout";

const PageLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        background: colors.neutral.background2,
        height: "100%",
      }}
    >
      <CssBaseline />
      <ActionBar />
      <SideNavigationBar />
      <ContentPageLayout />
    </Box>
  );
};

export default PageLayout;
