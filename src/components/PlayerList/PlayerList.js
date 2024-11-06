import React from "react";
import PlayerCard from "./PlayerCard";
import useFetch from "../../hooks/useFetch";
import { fetchPlayers } from "../../api/footballAPI";

const PlayerList = () => {
  const { data: players, loading, error } = useFetch(fetchPlayers);

  if (loading) return <p>Loading players...</p>;
  if (error) return <p>Error loading players.</p>;

  return (
    <div>
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayerList;
