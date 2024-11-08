import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import colors from "../../constants/colors";
import { styled } from "@mui/material";
import CloseIcon from "../../assets/icons/CloseIcon";
import CustomButton from "../common/CustomButton";
import Input from "../common/Input";
import DropdownSelect from "../common/DropdownSelect";
import { useState } from "react";

const DialogContainer = styled(Dialog)({
  "& .MuiDialog-paper": {
    borderRadius: "8px",
    background: colors.neutral.background2,
  },
});

const StyledDialogTitle = styled(DialogTitle)({
  color: colors.text.heading,
  fontSize: "18px",
  fontWeight: 600,
});

const Label = styled(Typography)({
  color: colors.text.heading,
  fontSize: "14px",
  fontWeight: 500,
  marginBottom: "8px",
});

const EditDialog = ({ isEditDialogOpen, handleEdit, handleClose }) => {
  const [playerDetails, setPlayerDetails] = useState({
    playerName: "",
    jerseyNumber: "",
    height: "",
    weight: "",
    nationality: "",
    position: "",
    starter: "yes",
  });
  const isFormComplete = Object.values(playerDetails).every((value) => value);

  const dummyOptions = [
    { value: 10, label: "Ten" },
    { value: 20, label: "Twenty" },
    { value: 30, label: "Thirty" },
  ];

  const handleChange = (field, value) => {
    console.log({ value, field });
    setPlayerDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleOnClose = () => {
    setPlayerDetails({
      playerName: "",
      jerseyNumber: "",
      height: "",
      weight: "",
      nationality: "",
      position: "",
      starter: "yes",
    });
    handleClose();
  };

  return (
    <DialogContainer open={isEditDialogOpen} maxWidth="xl">
      <StyledDialogTitle>{"Edit Player"}</StyledDialogTitle>
      <IconButton
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: colors.text.normal,
        }}
        onClick={() => handleOnClose()}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        <div>
          <Box display="flex" gap={2} mb={2}>
            <Box flex={1}>
              <Label>Player Name</Label>
              <Input
                value={playerDetails.playerName}
                placeholder={"Enter name..."}
                onChange={(e) => {
                  console.log(e);
                  handleChange("playerName", e.target.value);
                }}
              />
            </Box>
            <Box flex={1}>
              <Label>Jersey Number</Label>
              <Input
                value={playerDetails.jerseyNumber}
                placeholder={"Enter number..."}
                onChange={(e) => handleChange("jerseyNumber", e.target.value)}
                type={"number"}
              />
            </Box>
          </Box>

          <Box display="flex" gap={2} mb={2}>
            <Box flex={1}>
              <Label>Height</Label>
              <Input
                value={playerDetails.height}
                placeholder={"Enter height..."}
                onChange={(e) => handleChange("height", e.target.value)}
              />
            </Box>
            <Box flex={1}>
              <Label>Weight</Label>
              <Input
                value={playerDetails.weight}
                placeholder={"Enter weight..."}
                onChange={(e) => handleChange("weight", e.target.value)}
              />
            </Box>
          </Box>

          <Box mb={2}>
            <Label>Nationality</Label>
            <DropdownSelect
              value={playerDetails.nationality}
              options={dummyOptions}
              onChange={(e) => handleChange("nationality", e.target.value)}
            />
          </Box>

          <Box mb={2}>
            <Label>Position</Label>
            <DropdownSelect
              value={playerDetails.position}
              options={dummyOptions}
              onChange={(e) => handleChange("position", e.target.value)}
            />
          </Box>

          <Box mb={2}>
            <Label>Starter</Label>
            <RadioGroup
              row
              value={playerDetails.starter}
              onChange={(e) => handleChange("starter", e.target.value)}
            >
              <FormControlLabel
                value="yes"
                control={
                  <Radio
                    sx={{
                      color: colors.border.default,
                      "&.Mui-checked": {
                        color: colors.primary.yellow,
                      },
                    }}
                  />
                }
                label="Yes"
                sx={{
                  color: colors.text.heading,
                }}
              />
              <FormControlLabel
                value="no"
                control={
                  <Radio
                    sx={{
                      color: colors.border.default,
                      "&.Mui-checked": {
                        color: colors.primary.yellow,
                      },
                    }}
                  />
                }
                label="No"
                sx={{
                  color: colors.text.heading,
                }}
              />
            </RadioGroup>
          </Box>
        </div>
      </DialogContent>
      <DialogActions>
        <CustomButton
          text={"Edit player"}
          type={"primary"}
          disabled={!isFormComplete}
          onClick={handleEdit}
        />
      </DialogActions>
    </DialogContainer>
  );
};

export default EditDialog;
