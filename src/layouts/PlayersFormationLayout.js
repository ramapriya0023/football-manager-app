import { Card, styled } from "@mui/material";
import React, { useState } from "react";
import colors from "../constants/colors";
import FieldCard from "../components/Cards/FieldCard";
import PlayerCard from "../components/Cards/PlayerCard";

const FormationViewContainer = styled(Card)({
  background: colors.neutral.background2,
  padding: "32px",
  display: "flex",
  justifyContent: "space-around",
  height: "90%",
  gap: "32px",
});

const PlayersFormationOverview = ({ selectedFile }) => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <FormationViewContainer>
      <FieldCard
        onPlayerClick={setSelectedPlayer}
        selectedFile={selectedFile}
      />
      <PlayerCard player={selectedPlayer} />
    </FormationViewContainer>
  );
};

export default PlayersFormationOverview;
