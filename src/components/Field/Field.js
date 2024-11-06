// Field.js
import React from "react";
import FieldSVG from "../../assets/Field.svg"; // Import the SVG file

const Field = ({ players, onPlayerClick }) => {
  const fieldStyle = {
    position: "relative",
    width: "60%",
    height: "80vh",
    backgroundImage: `url(${FieldSVG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={fieldStyle}>
      {players.map((player) => (
        <div
          key={player.id}
          style={{
            position: "absolute",
            top: player.position.top,
            left: player.position.left,
            textAlign: "center",
            cursor: "pointer",
          }}
          onClick={() => onPlayerClick(player)}
        >
          <div
            style={{
              backgroundColor: "#333",
              color: "#fff",
              padding: "4px",
              borderRadius: "50%",
            }}
          >
            {player.number}
          </div>
          <div style={{ fontSize: "0.8rem", color: "white", marginTop: "4px" }}>
            {player.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Field;
