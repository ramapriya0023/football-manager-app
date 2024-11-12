import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  styled,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import CloseIcon from "../../assets/icons/CloseIcon";
import colors from "../../constants/colors";
import CustomButton from "../common/CustomButton";
import DropdownSelect from "../common/DropdownSelect";
import Input from "../common/Input";
import { updatePlayer } from "../../services/PlayerApiService";
import { useNationality } from "../../providers/NationalityProvider";

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

const EditModal = ({
  isEditDialogOpen,
  handleClose,
  selectedPlayer,
  reloadGrid,
  setReloadGrid,
}) => {
  const { nationalities } = useNationality();

  const [playerDetails, setPlayerDetails] = useState({
    playerName: "",
    jerseyNumber: "",
    height: "",
    weight: "",
    nationality: "",
    position: "",
    starter: false,
    id: "",
  });

  const isFormComplete = Object.values(playerDetails).every(
    (value) => value !== null && value !== undefined && value.length !== 0
  );

  const playerPositionOptions = [
    { value: "Goalkeeper", label: "Goalkeeper" },
    { value: "Defender", label: "Defender" },
    { value: "Midfielder", label: "Midfielder" },
    { value: "Forward", label: "Forward" },
  ];

  const handleChange = (field, value) => {
    if (field === "nationality") {
      const selectedNationality = nationalities.find(
        (option) => option.nationality === value
      );

      setPlayerDetails((prevDetails) => ({
        ...prevDetails,
        nationality: selectedNationality?.nationality || "",
        flagImg: selectedNationality?.flagImg || "",
      }));
    } else {
      setPlayerDetails((prevDetails) => ({
        ...prevDetails,
        [field]: value,
      }));
    }
  };

  const handleSave = async () => {
    try {
      const updatedPlayerDetails = {
        ...playerDetails,
        starter: playerDetails.starter === "true" || playerDetails.starter,
      };

      await updatePlayer(updatedPlayerDetails);
      setReloadGrid(!reloadGrid);
      handleClose();
    } catch (error) {
      console.error("Error updating player:", error);
    }
  };

  const handleOnClose = () => {
    setPlayerDetails({
      playerName: "",
      jerseyNumber: "",
      height: "",
      weight: "",
      nationality: "",
      position: "",
      id: "",
      starter: false,
    });
    handleClose();
  };

  useEffect(() => {
    if (isEditDialogOpen && selectedPlayer) {
      setPlayerDetails({
        playerName: selectedPlayer.playerName || "",
        jerseyNumber: selectedPlayer.jerseyNumber || "",
        height: selectedPlayer.height || "",
        weight: selectedPlayer.weight || "",
        nationality: selectedPlayer.nationality || "",
        position: selectedPlayer.position || "",
        starter: selectedPlayer.starter || false,
        id: selectedPlayer.id || "",
      });
    }
  }, [isEditDialogOpen, selectedPlayer]);

  return (
    <DialogContainer
      open={isEditDialogOpen}
      maxWidth="xl"
      slotProps={{
        backdrop: {
          style: { backgroundColor: "transparent", pointerEvents: "none" },
        },
      }}
    >
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
                onChange={(e) => handleChange("playerName", e.target.value)}
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
              options={nationalities.map((option) => ({
                value: option.nationality,
                label: option.nationality,
              }))}
              onChange={(e) => handleChange("nationality", e.target.value)}
            />
          </Box>

          <Box mb={2}>
            <Label>Position</Label>
            <DropdownSelect
              value={playerDetails.position}
              options={playerPositionOptions}
              onChange={(e) => handleChange("position", e.target.value)}
            />
          </Box>

          <Box mb={2}>
            <Label>Starter</Label>
            <RadioGroup
              row
              value={playerDetails.starter}
              onChange={(e) => {
                console.log(e.target.value);
                handleChange("starter", e.target.value === "true");
              }}
            >
              <FormControlLabel
                value="true"
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
                value="false"
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
          text={"Edit Player"}
          type={"primary"}
          disabled={!isFormComplete}
          onClick={handleSave}
        />
      </DialogActions>
    </DialogContainer>
  );
};

export default EditModal;
