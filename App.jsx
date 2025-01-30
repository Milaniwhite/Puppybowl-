import { BrowserRouter ,Routes, Route } from 'react-router-dom';
import AllPlayers from './Components/AllPlayers.jsx';
import SinglePlayer from './Components/SinglePlayer.jsx';
import Navbar from './Components/NavBar.jsx'; 
import React from 'react';

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
export default App;