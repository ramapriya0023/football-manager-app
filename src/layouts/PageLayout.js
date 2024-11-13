import Box from "@mui/material/Box";
import { Backdrop, CssBaseline } from "@mui/material";
import colors from "../constants/colors";
import ActionBar from "../components/NavigationBars/ActionBar";
import SideNavigationBar from "../components/NavigationBars/SideNavigationBar";
import ContentPageLayout from "./ContentPageLayout";
import BaseUrlModal from "../components/Modals/BaseURLModal";
import { useRoster } from "../providers/RosterContextProvider";
import { useState } from "react";

const PageLayout = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [popupOpen, setPopupOpen] = useState(true);
  const { updateBaseUrl, baseUrl } = useRoster();

  const handleConnect = (url) => {
    updateBaseUrl(url);
    setIsConnected(true);
    setPopupOpen(false);
    console.log("Connected to:", url);
  };

  return (
    <Box
      sx={{
        display: "flex",
        background: colors.neutral.background2,
        height: "100%",
      }}
    >
      <CssBaseline />
      {isConnected ? (
        <>
          <ActionBar />
          <SideNavigationBar />
          <ContentPageLayout />
        </>
      ) : (
        <Backdrop
          open={popupOpen}
          sx={{
            color: colors.neutral.background1,
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <BaseUrlModal
            open={popupOpen}
            onClose={() => setPopupOpen(false)}
            onConnect={handleConnect}
            defaultUrl={baseUrl}
          />
        </Backdrop>
      )}
    </Box>
  );
};

export default PageLayout;
