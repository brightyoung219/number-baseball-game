/*eslint-disable*/

import React from 'react';
import DarkMode from './components/DarkMode/DarkMode.js';
import GamePage from './pages/GamePage/GamePage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <DarkMode />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;


