import { Checkbox, Popper, styled } from "@mui/material";
import { IconPlus } from "@tabler/icons-react";
import React, { useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import colors from "../../constants/colors";
import CustomButton from "../common/CustomButton";

const MenuContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "10px",
});

const MenuTitle = styled("div")({
  color: colors.text.heading,
  fontSize: "18px",
  fontWeight: 600,
});

const ColumnList = styled("div")({
  display: "flex",
  flexDirection: "column",
  height: "270px",
  overflowY: "auto",
  scrollbarWidth: "thin",
});

const ColumnItem = styled("label")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  borderRadius: "4px",
  transition: "background-color 0.2s",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: colors.neutral.background2,
  },
});

const ActionsContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "10px",
  marginTop: "16px",
});

const StyledPopper = styled(Popper)({
  maxHeight: "450px",
  width: "300px",
  padding: "15px",
  borderRadius: "8px",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  background: colors.neutral.background2,
  zIndex: 10,
});

const ColumnVisibilityMenuCard = ({ table }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [tempColumnVisibility, setTempColumnVisibility] = useState({});

  const handleMenuOpen = (event) => {
    const currentVisibility = {};
    table.getAllColumns().forEach((column) => {
      currentVisibility[column.id] = column.getIsVisible();
    });
    setTempColumnVisibility(currentVisibility);
    setAnchorEl(event.currentTarget);
    setShowMenu(true);
  };

  const handleTempVisibilityChange = (columnId, isVisible) => {
    setTempColumnVisibility((prev) => ({
      ...prev,
      [columnId]: isVisible,
    }));
  };

  const applyColumnVisibility = () => {
    Object.entries(tempColumnVisibility).forEach(([columnId, isVisible]) => {
      const column = table.getColumn(columnId);
      if (column) {
        column.toggleVisibility(isVisible);
      }
    });
    setShowMenu(false);
  };

  return (
    <div>
      <IconPlus
        onClick={handleMenuOpen}
        style={{
          cursor: "pointer",
          fontSize: "1.5rem",
          color: colors.primary.main,
        }}
      />

      <StyledPopper
        open={showMenu}
        onClose={() => {
          setAnchorEl(null);
          setShowMenu(false);
        }}
        anchorEl={anchorEl}
      >
        <MenuContainer>
          <MenuTitle>Columns</MenuTitle>
          <div onClick={() => setShowMenu(false)} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </div>
        </MenuContainer>

        <ColumnList>
          {table
            .getAllColumns()
            .filter((column) => column.id !== "mrt-row-actions")
            .map((column) => (
              <ColumnItem key={column.id}>
                <Checkbox
                  checked={tempColumnVisibility[column.id] || false}
                  disabled={!column.getCanHide()}
                  onChange={(event) =>
                    handleTempVisibilityChange(column.id, event.target.checked)
                  }
                  sx={{
                    color: colors.primary.yellow,
                    "&.Mui-checked": {
                      color: colors.primary.yellow,
                    },
                  }}
                />
                <span style={{ fontSize: "14px", color: colors.text.normal }}>
                  {column.columnDef.header}
                </span>
              </ColumnItem>
            ))}
        </ColumnList>

        <ActionsContainer>
          <CustomButton
            onClick={() => setShowMenu(false)}
            text="Cancel"
            type={"secondary"}
          />
          <CustomButton
            onClick={applyColumnVisibility}
            text={"Confirm"}
            type={"primary"}
          />
        </ActionsContainer>
      </StyledPopper>
    </div>
  );
};

export default ColumnVisibilityMenuCard;
