import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './AllPlayers';
import SinglePlayer from './SinglePlayer';  
import { Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
function Navbar() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/players/1">Player 1</Link>
          </li>
          <li>
            <Link to="/players/2">Player 2</Link>
          </li>
        </ul>
      </nav>
    );
  }