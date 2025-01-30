import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPlayers from './AllPlayers.jsx';
import SinglePlayer from './SinglePlayer.jsx';
import Navbar from '../../NavBar.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Navbar />  

      <Routes>
        <Route path="/" element={<AllPlayers />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
      </Routes>
    </BrowserRouter>
  );
}
