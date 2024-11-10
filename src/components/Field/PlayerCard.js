import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, Paper, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Player_Image from "../../assets/images/Player_Image.png";
import colors from "../../constants/colors";

const StyledCard = styled(Card)({
  width: "30%",
  backgroundColor: "#1f1f1f",
  borderRadius: "15px",
  display: "flex",
  overflow: "hidden",
  flexDirection: "column",
  padding: "24px",
  gap: "30px",
});

const ImageContainer = styled(Box)(({ backgroundImage }) => ({
  position: "relative",
  height: "100%",
  borderRadius: "10px",
  overflow: "hidden",
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
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
}));

const PlayerHeader = styled("div")({
  position: "absolute",
  bottom: "10px",
  left: "20px",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

const Name = styled(Typography)({
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
  fontSize: "41px",
  color: colors.primary.yellow,
  position: "relative",
  zIndex: 2,
});

const PlayerNumberShadow = styled("div")({
  fontWeight: 600,
  fontSize: "110px",
  color: "rgba(58, 55, 49, 0.5)",
  position: "absolute",
  top: "-62px",
  left: "-40px",
  zIndex: 1,
});
const PlayerCard = ({ player }) => {
  const [imageSrc, setImageSrc] = useState(Player_Image);

  useEffect(() => {
    setImageSrc(player?.playerImg);
  }, [player]);

  const handleImageError = () => {
    setImageSrc(Player_Image);
  };

  if (!player) {
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
  }
  console.log({ imageSrc });
  return (
    <StyledCard elevation={4}>
      <ImageContainer backgroundImage={imageSrc}>
        <img
          src={imageSrc}
          alt={player.playerName}
          style={{ display: "none" }}
          onError={handleImageError}
        />
        <PlayerNumberContainer>
          <PlayerNumberShadow>{player.jerseyNumber}</PlayerNumberShadow>
          <PlayerNumber>{player.jerseyNumber}</PlayerNumber>
        </PlayerNumberContainer>
        <PlayerHeader>
          <Name variant="h5" component="h2">
            {player.playerName}
          </Name>
          <Role>{player.position}</Role>
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
