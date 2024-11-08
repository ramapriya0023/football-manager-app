import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { color, styled } from "@mui/system";
import TableListIcon from "../../assets/icons/TableListIcon";
import WidgetIcon from "../../assets/icons/WidgetIcon";
import colors from "../../constants/colors";

const TabContainer = styled(Box)({
  display: "flex",
  backgroundColor: colors.neutral.background1, // Dark background color
  borderRadius: "8px",
  border: `1px solid ${colors.border.default}`,
});

const Tab = styled(Box)(({ selected }) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  padding: "8px 16px",
  color: selected ? colors.text.normal : colors.text.disabled,
  background: selected
    ? colors.neutral.background2
    : colors.neutral.background1,
  fontWeight: selected ? 600 : 400,
  borderRadius: "8px",
  height: "44px",
}));

const TabIcon = styled("span")({
  marginRight: "8px",
  display: "flex",
  alignItems: "center",
});

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState("roster");

  return (
    <TabContainer>
      <Tab
        selected={selectedTab === "roster"}
        onClick={() => setSelectedTab("roster")}
      >
        <TabIcon>
          <TableListIcon />
        </TabIcon>
        <Typography>Roster Details</Typography>
      </Tab>
      <Tab
        selected={selectedTab === "formation"}
        onClick={() => setSelectedTab("formation")}
      >
        <TabIcon>
          <WidgetIcon />
        </TabIcon>
        <Typography>Formation Overview</Typography>
      </Tab>
    </TabContainer>
  );
};

export default TabComponent;
