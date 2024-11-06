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

export const initialState = {
  players: [],
  teams: [],
  loading: false,
  error: null,
};

export const footballReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLAYERS:
      return { ...state, players: action.payload };
    case ADD_PLAYER:
      return { ...state, players: [...state.players, action.payload] };
    case REMOVE_PLAYER:
      return {
        ...state,
        players: state.players.filter((player) => player.id !== action.payload),
      };

    case SET_TEAMS:
      return { ...state, teams: action.payload };
    case ADD_TEAM:
      return { ...state, teams: [...state.teams, action.payload] };
    case REMOVE_TEAM:
      return {
        ...state,
        teams: state.teams.filter((team) => team.id !== action.payload),
      };

    case SET_LOADING:
      return { ...state, loading: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
