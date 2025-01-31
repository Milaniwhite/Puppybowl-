import { useParams } from 'react-router-dom';
import React from 'react';
import { SinglePlayers } from './API/Index';
import {useState,useEffect} from "react";
function SinglePlayer() {
  const [selectedPlayer , setSelectedPlayer] =useState("");
  const { id } = useParams();  
  const [error, setError] = useState(null);
  useEffect(() => {
    async function Players() {
        if (id) {  
            const response = await SinglePlayers(id);
            if (response.success) {
                setSelectedPlayer(response.data.player);
            } else {
                setError(response.error);  
            }
        }
    }
    Players();
}, [id]);  

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