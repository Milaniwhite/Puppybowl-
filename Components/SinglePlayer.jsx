import { useParams } from 'react-router-dom';
import React from 'react';
import { SinglePlayers } from './API/Index';
import {useState,useEffect} from "react";
function SinglePlayer() {
  const [selectedPlayer , setSelectedPlayer] =useState("");
  const { id } = useParams();  

  useEffect(() => {
    async function Players() {
        if (id) {  // Ensure 'id' is available before making the API call
            const response = await SinglePlayers(id);
            if (response.success) {
                setSelectedPlayer(response.data.player);
            } else {
                setError(response.error);  // You might need to define setError
            }
        }
    }
    Players();
}, [id]);  // Include 'id' in the dependency array

  return (
    <div>
      <h1>The SinglePlayer component</h1>
      {selectedPlayer && (
        <div className="selected-card">
            <p>Name: {selectedPlayer.name}</p>
            <p>Breed: {selectedPlayer.breed}</p>
            <img src={selectedPlayer.imageUrl} alt="player image" />
        </div>)}
    </div>
  );
}
export default SinglePlayer;