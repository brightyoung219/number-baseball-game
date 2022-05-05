/*eslint-disable*/

import React from 'react';
import GamePage from './pages/GamePage/GamePage.js';
import LandingPage from './pages/LandingPage/LandingPage.js';
import HowTo from './pages/HowTo/HowTo.js';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div style={{height: '100vh', width : '100vw', maxWidth : '480px', margin : 'auto', marginTop : '50px'}}>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/game' element={<GamePage />} />
        <Route path='/howto' element={<HowTo />} />
      </Routes>
    </div>
  );
}

export default App;


