const BASE_URL = "http://localhost:5001/api/roster";

export const getPlayers = async (fileId) => {
  const response = await fetch(`${BASE_URL}/${fileId}`);
  if (!response.ok) {
    throw new Error(`Error fetching players: ${response.statusText}`);
  }
  return response.json();
};

export const updatePlayer = async (playerData) => {
  const response = await fetch(BASE_URL, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(playerData),
  });

  if (!response.ok) {
    throw new Error(`Error updating player: ${response.statusText}`);
  }
  return response.text();
};

export const deletePlayer = async (playerId) => {
  const response = await fetch(`${BASE_URL}/${playerId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Error deleting player: ${response.statusText}`);
  }
  return response.text();
};
