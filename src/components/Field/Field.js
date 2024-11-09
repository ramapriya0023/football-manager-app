// Field.js
import React from "react";
import FieldSVG from "../../assets/images/Field.svg"; // Import the SVG file

const Field = ({ players, onPlayerClick }) => {
  const fieldStyle = {
    position: "relative",
    width: "67%",
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
              padding: "8px",
              borderRadius: "50%",
              border: "2px solid #fff", // Thin white border
              width: "32px", // Make the circle size consistent
              height: "32px", // Ensure it's a perfect circle
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              fontWeight: 600, // Adjust font size if needed
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
