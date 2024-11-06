// PlayerCard.js
import React from "react";

const PlayerCard = ({ player }) => {
  const cardStyle = {
    width: "35%",
    padding: "20px",
    backgroundColor: "#333",
    color: "white",
    borderRadius: "10px",
    textAlign: "center",
  };

  const imageStyle = {
    width: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
  };

  if (!player) return <div style={cardStyle}>Select a player</div>;

  return (
    <div style={cardStyle}>
      <img src={player.image} alt={player.name} style={imageStyle} />
      <h2>{player.name}</h2>
      <p>Position: {player.positionName}</p>
      <p>Height: {player.height}</p>
      <p>Weight: {player.weight}</p>
      <p>Nationality: {player.nationality}</p>
      <p>Appearances: {player.appearances}</p>
      <p>Minutes Played: {player.minutesPlayed}</p>
      <p>Clean Sheets: {player.cleanSheets}</p>
      <p>Saves: {player.saves}</p>
    </div>
  );
};

export default PlayerCard;
