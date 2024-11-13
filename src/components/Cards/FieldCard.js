import React, { useEffect, useState } from "react";
import FieldSVG from "../../assets/images/Field.svg";
import { styled } from "@mui/material";
import { playerPositions } from "../../constants/playerPositions";
import { useRosterAPI } from "../../services/PlayerApiService";
import colors from "../../constants/colors";
import RosterEmptyState from "../common/RosterEmptyState";

const FieldContainer = styled("div")({
  position: "relative",
  width: "67%",
  backgroundImage: `url(${FieldSVG})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
});

const PlayerContainer = styled("div")(({ position }) => ({
  position: "absolute",
  top: position.top,
  left: position.left,
  textAlign: "center",
  cursor: "pointer",
}));

const PlayerNumber = styled("div")(({ isSelected }) => ({
  backgroundColor: isSelected
    ? colors.primary.yellow
    : colors.neutral.background2,
  color: colors.text.heading,
  padding: "8px",
  borderRadius: "50%",
  border: `2px solid ${
    isSelected ? colors.primary.yellow : colors.text.normal
  }`,
  width: "32px",
  height: "32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "16px",
  fontWeight: 600,
}));

const PlayerName = styled("div")({
  fontSize: "0.8rem",
  color: "white",
  marginTop: "4px",
});

const Field = ({ onPlayerClick, selectedFile }) => {
  const [players, setPlayers] = useState([]);
  const { getPlayers } = useRosterAPI();
  const [errorContent, setErrorContent] = useState({
    errorTitle: "",
    errorMessage: "",
  });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [startersData, setStartersData] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showEmptyState, setShowEmptyState] = useState(false);

  const roleIndexes = {
    Goalkeeper: 0,
    Defender: 0,
    Midfielder: 0,
    Forward: 0,
  };

  const requiredStarters = {
    Goalkeeper: 1,
    Defender: 4,
    Midfielder: 3,
    Forward: 3,
  };

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const data = await getPlayers(selectedFile.id);

        if (!data[0].players || data[0].players.length === 0) {
          setShowEmptyState(true);
          return;
        }

        const positionCounts = {
          Goalkeeper: 0,
          Defender: 0,
          Midfielder: 0,
          Forward: 0,
        };

        let startersData = [];

        const startersPlayers = data[0].players.filter(
          (player) => player.starter === true
        );

        startersPlayers.forEach((player) => {
          if (positionCounts[player.position] !== undefined) {
            positionCounts[player.position]++;
          }
        });

        Object.keys(requiredStarters).forEach((position) => {
          const required = requiredStarters[position];
          const current = positionCounts[position];

          if (current !== required) {
            startersData.push({
              position,
              required,
              current,
            });
          }
        });

        let errorMessage = "";
        let errorTitle = "";
        if (startersData.length > 0) {
          startersData.forEach((data) => {
            if (data.current < data.required) {
              errorTitle = "Not enough starters";
              errorMessage = `Your team doesn't have enough starters for one or more of the positions in the 4-3-3 formation\n`;
            } else if (data.current > data.required) {
              errorTitle = "There are too many starters";
              errorMessage = `Your team has too many starters for one or more of the positions in the 4-3-3 formation\n`;
            }
          });

          setErrorContent({
            errorTitle,
            errorMessage,
          });
          setStartersData(startersData);
          setAnchorEl(document.getElementById("field-container"));
          setIsErrorModalOpen(true);
        } else {
          const goalkeeper = startersPlayers.find(
            (player) => player.position === "Goalkeeper"
          );
          setSelectedPlayer(goalkeeper);
          onPlayerClick(goalkeeper);
          setPlayers(startersPlayers);
        }
      } catch (error) {
        console.error("Error fetching players:", error);
      }
    };

    fetchPlayers();

    return () => {
      setIsErrorModalOpen(false);
      setAnchorEl(null);
    };
  }, [selectedFile.id]);

  const handlePlayerClick = (player) => {
    setSelectedPlayer(player);
    onPlayerClick(player);
  };

  return (
    <>
      <FieldContainer id="field-container">
        {players.map((player) => {
          const role = player.position;
          const positionArray = playerPositions[role];
          const positionIndex = roleIndexes[role];
          const position = positionArray[positionIndex];
          roleIndexes[role] = (positionIndex + 1) % positionArray.length;

          return (
            <PlayerContainer
              key={player.id}
              position={position}
              onClick={() => handlePlayerClick(player)}
            >
              <PlayerNumber isSelected={selectedPlayer?.id === player.id}>
                {player.jerseyNumber}
              </PlayerNumber>
              <PlayerName>{player.playerName}</PlayerName>
            </PlayerContainer>
          );
        })}
      </FieldContainer>
      {(isErrorModalOpen || showEmptyState) && (
        <div
          style={{ position: "absolute", bottom: "40%", borderRadius: "8px" }}
        >
          <RosterEmptyState
            emptyState={showEmptyState}
            errorContent={errorContent}
            startersData={startersData}
          />
        </div>
      )}
    </>
  );
};

export default Field;
