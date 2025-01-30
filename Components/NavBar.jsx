import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllPlayers">All Players</Link>
          </li>
          <li>
            <Link to="/players/2">Player 2</Link>
          </li>
        </ul>
      </nav>
    );
  }
  export default Navbar;