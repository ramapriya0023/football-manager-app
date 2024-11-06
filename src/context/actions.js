import {
  SET_PLAYERS,
  ADD_PLAYER,
  REMOVE_PLAYER,
  SET_TEAMS,
  ADD_TEAM,
  REMOVE_TEAM,
  SET_LOADING,
  SET_ERROR,
} from "./constants/actionTypes";

export const setPlayers = (players) => ({
  type: SET_PLAYERS,
  payload: players,
});

export const addPlayer = (player) => ({
  type: ADD_PLAYER,
  payload: player,
});

export const removePlayer = (playerId) => ({
  type: REMOVE_PLAYER,
  payload: playerId,
});

export const setTeams = (teams) => ({
  type: SET_TEAMS,
  payload: teams,
});

export const addTeam = (team) => ({
  type: ADD_TEAM,
  payload: team,
});

export const removeTeam = (teamId) => ({
  type: REMOVE_TEAM,
  payload: teamId,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});

export const setError = (error) => ({
  type: SET_ERROR,
  payload: error,
});
