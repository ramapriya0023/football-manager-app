// PlayerCard.js
import React from "react";

const PlayerCard = ({ player }) => {
  const cardStyle = {
    width: "35%",
    padding: "20px",
    backgroundColor: "#222222",
    color: "#fff",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  };

  const numberStyle = {
    fontSize: "65px",
    fontWeight: "bold",
    color: "#fea013",
    position: "absolute",
    top: "20px",
    left: "20px",
  };

  const imageStyle = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    margin: "20px auto",
    border: "4px solid #444",
  };

  const roleStyle = {
    color: "#fea013",
    fontSize: "18px",
    fontWeight: "600",
  };

  const statContainerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    paddingTop: "15px",
    marginTop: "15px",
    borderTop: "1px solid #444",
  };

  const statBoxStyle = {
    textAlign: "center",
  };

  const statNumberStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#fea013",
  };

  const statLabelStyle = {
    fontSize: "14px",
    color: "#fff",
  };

  if (!player) return <div style={cardStyle}>Select a player</div>;

  return (
    <div style={{ position: "relative", ...cardStyle }}>
      {/* Player Number */}
      <div style={numberStyle}>{player.number}</div>

      {/* Player Image */}
      <img src={player.image} alt={player.name} style={imageStyle} />

      {/* Player Name and Role */}
      <h2 style={{ fontSize: "22px", marginBottom: "5px" }}>{player.name}</h2>
      <p style={roleStyle}>{player.role}</p>

      {/* Player Details */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          marginTop: "10px",
        }}
      >
        <div>
          <p>Height</p>
          <p style={{ fontWeight: "bold" }}>{player.height}</p>
        </div>
        <div>
          <p>Weight</p>
          <p style={{ fontWeight: "bold" }}>{player.weight}</p>
        </div>
        <div>
          <p>Nationality</p>
          <p style={{ fontWeight: "bold" }}>{player.nationality}</p>
        </div>
      </div>

      {/* Player Statistics in 2x2 Grid */}
      <div style={statContainerStyle}>
        <div style={statBoxStyle}>
          <p style={statNumberStyle}>{player.appearances}</p>
          <p style={statLabelStyle}>Appearances</p>
        </div>
        <div style={statBoxStyle}>
          <p style={statNumberStyle}>{player.minutesPlayed}</p>
          <p style={statLabelStyle}>Minutes Played</p>
        </div>
        <div style={statBoxStyle}>
          <p style={statNumberStyle}>{player.cleanSheets}</p>
          <p style={statLabelStyle}>Clean Sheets</p>
        </div>
        <div style={statBoxStyle}>
          <p style={statNumberStyle}>{player.saves}</p>
          <p style={statLabelStyle}>Saves</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
