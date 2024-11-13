import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import colors from "../../constants/colors";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";

const BaseUrlModal = ({ open, onClose, onConnect, defaultUrl }) => {
  const [baseUrl, setBaseUrl] = useState("");

  const handleConnect = () => {
    onConnect(baseUrl || defaultUrl);
    onClose();
  };

  const handleDefaultConnect = () => {
    onConnect(defaultUrl);
    onClose();
  };

  return (
    <Dialog open={open} maxWidth="xs" fullWidth>
      <DialogTitle
        sx={{
          background: colors.neutral.background1,
          color: colors.text.normal,
          padding: "30px 20px 30px 30px",
          fontWeight: 500,
        }}
      >
        Enter Base URL
      </DialogTitle>
      <DialogContent
        sx={{
          background: colors.neutral.background1,
          color: colors.text.normal,
          padding: "0px 35px 20px 35px",
        }}
      >
        <Input
          value={baseUrl}
          placeholder={"Enter URL..."}
          onChange={(e) => setBaseUrl(e.target.value)}
          type={"url"}
          fullWidth={true}
        />
      </DialogContent>
      <DialogActions
        sx={{
          background: colors.neutral.background1,
          display: "flex",
          alignItems: "center",
          gap: "10px",
          padding: "20px",
        }}
      >
        <CustomButton
          onClick={handleDefaultConnect}
          type="secondary"
          text={"Use Default URL"}
        />

        <CustomButton
          onClick={handleConnect}
          type="primary"
          text={"Connect"}
          disabled={baseUrl ? false : true}
        />
      </DialogActions>
    </Dialog>
  );
};

export default BaseUrlModal;
