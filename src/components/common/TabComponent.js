import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import TableListIcon from "../../assets/icons/TableListIcon";
import WidgetIcon from "../../assets/icons/WidgetIcon";
import colors from "../../constants/colors";
import { useRoster } from "../../providers/RosterContextProvider";

const TabContainer = styled(Box)({
  display: "flex",
  backgroundColor: colors.neutral.background1,
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
  const { selectedView, updateViewLayout } = useRoster();
  return (
    <TabContainer>
      <Tab
        selected={selectedView === "roster"}
        onClick={() => updateViewLayout("roster")}
      >
        <TabIcon>
          <TableListIcon />
        </TabIcon>
        <Typography>Roster Details</Typography>
      </Tab>
      <Tab
        selected={selectedView === "formation"}
        onClick={() => updateViewLayout("formation")}
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
