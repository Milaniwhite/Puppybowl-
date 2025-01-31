import { GetAllPlayers , deletePlayer } from "./API/Index";
import { useState, useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router";
import Form from "./Form";
function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  const navigate=useNavigate();
 

  async function GetPlayers() {
    const response = await GetAllPlayers();
    if (response.success) {
      setPlayers(response.data.players);
    } else {
      setError(response.error);
    }
  }
  
  useEffect(() => {
    
    GetPlayers();
  }, []);

  const handleDelete = async (event,id) =>{
    event.preventDefault()
    await deletePlayer(id)
    GetPlayers();
  }

  
  const filteredPlayers = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams.toLowerCase())
      )
    : players;

  return (
    <div>
      <h1>All Players</h1>
    <Form/>

      {/* Display error if there is one */}
      {error && <div>Error: {error}</div>}

      {/* Search input */}
      <input
        type="text"
        placeholder="Search players..."
        value={searchParams}
        onChange={(e) => setSearchParams(e.target.value)}
      />

      {/* Display loading state if players are not fetched yet */}
      {players.length === 0 && !error ? (
        <div>Loading...</div>
      ) : (
        <div>
          
          {filteredPlayers.map((player, index) => {
            return (
              <div key={index}>
                <h4>{player.name}</h4>
                <img src={player.imageUrl} alt="player image" />
                {/* Display additional player details here */}
                {/* <p>{player.details}</p> */}
                <button
                
                  onClick={() => navigate(`/players/${player.id}`)}
                >
                  See Details
                </button>
                <button
                
                onClick={(event) => handleDelete(event,player.id)}
              >
                Delete
              </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default AllPlayers;
