import { useRoster } from "../providers/RosterContextProvider";

export const useRosterAPI = () => {
  const { baseUrl } = useRoster();
  const FINAL_URL = `${baseUrl}/api/roster`;

  const getPlayers = async (fileId) => {
    const response = await fetch(`${FINAL_URL}/${fileId}`);
    if (!response.ok) {
      let errorMessage = `Error fetching players: ${response.statusText}`;

      const errorBody = await response.json();
      errorMessage = errorBody.message || errorMessage;
      throw new Error(errorMessage);
    }
    return response.json();
  };

  const updatePlayer = async (playerData) => {
    const response = await fetch(FINAL_URL, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(playerData),
    });

    if (!response.ok) {
      let errorMessage = `Error updating players: ${response.statusText}`;

      const errorBody = await response.json();
      errorMessage = errorBody.message || errorMessage;
      throw new Error(errorMessage);
    }
    return response.text();
  };

  const deletePlayer = async (playerId) => {
    const response = await fetch(`${FINAL_URL}/${playerId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error deleting player: ${response.statusText}`);
    }
    return response.text();
  };

  return { getPlayers, updatePlayer, deletePlayer };
};
