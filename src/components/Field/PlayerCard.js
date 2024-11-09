import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Player_Image from "../../assets/images/Player_Image.png";
import colors from "../../constants/colors";

const StyledCard = styled(Card)({
  width: "30%",
  backgroundColor: "#1f1f1f",
  color: "#fff",
  borderRadius: "15px",
  display: "flex",
  overflow: "hidden",
  flexDirection: "column",
  padding: "24px",
  gap: "30px",
});

// const PlayerHeader = styled("div")({
//   display: "flex",
//   flexDirection: "column",
// });

// const ImageContainer = styled(Box)({
//   width: "274px",
//   height: "258px",
//   background:
//     "linear-gradient(180deg, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 0.38) 60.94%, #222222 100%)",
// });

const ImageContainer = styled(Box)({
  position: "relative",
  //width: "274px",
  height: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundImage: `url(${Player_Image})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "50%",
    background:
      "linear-gradient(transparent, rgba(34, 34, 34, 1) 80%, #222222)",
    borderRadius: "10px",
  },
});

const PlayerHeader = styled("div")({
  position: "absolute",
  bottom: "10px",
  left: "20px",
  color: "#fff",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

// const FadedImage = styled("img")({
//   width: "274px",
//   height: "278px",
// });

const Name = styled(Typography)({
  display: "flex",
  fontSize: "24px",
  fontWeight: 500,
  color: colors.text.heading,
});

const Role = styled(Typography)({
  color: colors.primary.yellow,
  fontSize: "18px",
  fontWeight: "600",
});

const PlayerDetailsContainer = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  padding: "0px",
});

const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "14px",
  fontWeight: "500",
});

const StatContainer = styled("div")({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "30px",
  paddingTop: "30px",
  borderTop: "1px solid #444",
});

const StatNumber = styled("div")({
  fontSize: "24px",
  fontWeight: 600,
  color: colors.primary.yellow,
});

const StatLabel = styled("div")({
  fontSize: "12px",
  fontWeight: 400,
  color: colors.text.normal,
});

const PlayerNumberContainer = styled("div")({
  position: "absolute",
  top: "43px",
  left: "30px",
});

const PlayerNumber = styled("div")({
  fontWeight: 600,
  fontSize: "41px", // Actual text size
  color: colors.primary.yellow,
  position: "relative", // To position the shadow element relative to the text
  zIndex: 2,
});

const PlayerNumberShadow = styled("div")({
  fontWeight: 600,
  fontSize: "110px", // Shadow text size
  color: "rgba(58, 55, 49, 0.5)", // Shadow color (black with opacity)
  position: "absolute",
  top: "-62px", // Align the shadow exactly with the original text
  left: "-40px", // Align the shadow exactly with the original text
  zIndex: 1, // Ensure the shadow stays behind the text
});

const PlayerCard = ({ player }) => {
  if (!player)
    return (
      <Paper
        style={{
          width: "30%",
          padding: "30px",
          backgroundColor: "#1f1f1f",
          color: "#fff",
          borderRadius: "15px",
        }}
      >
        Select a player
      </Paper>
    );

  return (
    <StyledCard elevation={4}>
      <ImageContainer>
        <PlayerNumberContainer>
          <PlayerNumberShadow>{player.number}</PlayerNumberShadow>{" "}
          {/* Shadow with larger font */}
          <PlayerNumber>{player.number}</PlayerNumber> {/* Actual text */}
        </PlayerNumberContainer>
        <PlayerHeader>
          <Name variant="h5" component="h2">
            {player.name}
          </Name>
          <Role>{player.role}</Role>
        </PlayerHeader>
      </ImageContainer>

      <PlayerDetailsContainer>
        <Details>
          <div>
            <Typography sx={{ fontSize: "12px", color: colors.text.normal }}>
              Height
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
              {player.height}
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: colors.text.normal }}>
              Weight
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
              {player.weight}
            </Typography>
          </div>
          <div>
            <Typography sx={{ fontSize: "12px", color: colors.text.normal }}>
              Nationality
            </Typography>
            <Typography sx={{ fontWeight: 500, fontSize: "14px" }}>
              {player.nationality}
            </Typography>
          </div>
        </Details>
        <StatContainer>
          <div>
            <StatNumber>{player.appearances}</StatNumber>
            <StatLabel>Appearances</StatLabel>
          </div>
          <div>
            <StatNumber>{player.minutesPlayed}</StatNumber>
            <StatLabel>Minutes Played</StatLabel>
          </div>
          <div>
            <StatNumber>{player.cleanSheets}</StatNumber>
            <StatLabel>Clean Sheets</StatLabel>
          </div>
          <div>
            <StatNumber>{player.saves}</StatNumber>
            <StatLabel>Saves</StatLabel>
          </div>
        </StatContainer>
      </PlayerDetailsContainer>
    </StyledCard>
  );
};

export default PlayerCard;
