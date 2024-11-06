import apiClient from "./apiClient";

export const fetchTeams = () => apiClient.get("/teams");
export const fetchPlayers = () => apiClient.get("/players");
