import { Card, styled } from "@mui/material";
import React, { useState } from "react";
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

  // Define player details and new positions for a 4-3-3 formation (Horizontal)
  const players = [
    {
      id: 1,
      name: "Keylor Navas",
      number: 1,
      position: { top: "50%", left: "5%" }, // Goalkeeper in center-left
      role: "Goalkeeper",
      height: "1.85 m",
      weight: "80 kg",
      nationality: "Costa Rican",
      appearances: 26,
      minutesPlayed: 2308,
      cleanSheets: 10,
      saves: 76,
      image: "path_to_image_of_keylor_navas",
    },
    {
      id: 2,
      name: "Achraf Hakimi",
      number: 2,
      position: { top: "10%", left: "24%" }, // Right Back
      role: "Right Back",
      height: "1.81 m",
      weight: "70 kg",
      nationality: "Moroccan",
      appearances: 29,
      minutesPlayed: 2523,
      cleanSheets: 10,
      saves: 0,
      image: "path_to_image_of_achraf_hakimi",
    },
    {
      id: 3,
      name: "Sergio Ramos",
      number: 4,
      position: { top: "34%", left: "22%" }, // Right Center Back
      role: "Right Center Back",
      height: "1.84 m",
      weight: "82 kg",
      nationality: "Spanish",
      appearances: 30,
      minutesPlayed: 2654,
      cleanSheets: 15,
      saves: 0,
      image: "path_to_image_of_sergio_ramos",
    },
    {
      id: 4,
      name: "Presnel Kimpembe",
      number: 3,
      position: { top: "57%", left: "21%" }, // Left Center Back
      role: "Left Center Back",
      height: "1.83 m",
      weight: "77 kg",
      nationality: "French",
      appearances: 24,
      minutesPlayed: 2101,
      cleanSheets: 10,
      saves: 0,
      image: "path_to_image_of_presnel_kimpembe",
    },
    {
      id: 5,
      name: "Marquinhos",
      number: 5,
      position: { top: "80%", left: "24%" }, // Left Back
      role: "Left Back",
      height: "1.83 m",
      weight: "75 kg",
      nationality: "Brazilian",
      appearances: 32,
      minutesPlayed: 2801,
      cleanSheets: 12,
      saves: 0,
      image: "path_to_image_of_marquinhos",
    },
    {
      id: 6,
      name: "Marco Verratti",
      number: 6,
      position: { top: "17%", left: "48%" }, // Center Midfielder (Higher Center)
      role: "Center Midfielder",
      height: "1.65 m",
      weight: "60 kg",
      nationality: "Italian",
      appearances: 28,
      minutesPlayed: 2412,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_marco_verratti",
    },
    {
      id: 7,
      name: "Danilo Pereira",
      number: 15,
      position: { top: "48%", left: "48%" }, // Defensive Midfielder (Center)
      role: "Defensive Midfielder",
      height: "1.88 m",
      weight: "83 kg",
      nationality: "Portuguese",
      appearances: 25,
      minutesPlayed: 2105,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_danilo_pereira",
    },
    {
      id: 8,
      name: "Angel Di Maria",
      number: 11,
      position: { top: "78%", left: "48%" }, // Left Midfielder (Lower Center)
      role: "Left Midfielder",
      height: "1.80 m",
      weight: "70 kg",
      nationality: "Argentinian",
      appearances: 27,
      minutesPlayed: 2200,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_angel_di_maria",
    },
    {
      id: 9,
      name: "Lionel Messi",
      number: 30,
      position: { top: "23%", left: "72%" }, // Right Forward
      role: "Right Forward",
      height: "1.70 m",
      weight: "72 kg",
      nationality: "Argentinian",
      appearances: 31,
      minutesPlayed: 2789,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_lionel_messi",
    },
    {
      id: 10,
      name: "Neymar Jr",
      number: 10,
      position: { top: "73%", left: "72%" }, // Left Forward
      role: "Left Forward",
      height: "1.75 m",
      weight: "68 kg",
      nationality: "Brazilian",
      appearances: 28,
      minutesPlayed: 2500,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_neymar_jr",
    },
    {
      id: 11,
      name: "Kylian Mbappé",
      number: 7,
      position: { top: "48%", left: "75%" }, // Center Forward
      role: "Center Forward",
      height: "1.78 m",
      weight: "73 kg",
      nationality: "French",
      appearances: 33,
      minutesPlayed: 2901,
      cleanSheets: 0,
      saves: 0,
      image: "path_to_image_of_kylian_mbappe",
    },
  ];

  return (
    <FormationViewContainer>
      <Field players={players} onPlayerClick={setSelectedPlayer} />
      <PlayerCard player={selectedPlayer} />
    </FormationViewContainer>
  );
};

export default PlayersFormationOverview;
