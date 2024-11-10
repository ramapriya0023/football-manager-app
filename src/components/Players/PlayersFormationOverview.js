import { Card, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import colors from "../../constants/colors";
import Field from "../Field/Field";
import PlayerCard from "../Field/PlayerCard";

const FormationViewContainer = styled(Card)({
  background: colors.neutral.background2,
  padding: "32px",
  display: "flex",
  justifyContent: "space-around",
  height: "90%",
  gap: "32px",
});

const PlayersFormationOverview = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(null);

  return (
    <FormationViewContainer>
      <Field onPlayerClick={setSelectedPlayer} />
      <PlayerCard player={selectedPlayer} />
    </FormationViewContainer>
  );
};

export default PlayersFormationOverview;
