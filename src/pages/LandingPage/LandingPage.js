import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {

  return (
    <div>
      <h1 className='title'>야구는 아니지만<br />야구게임</h1>
      <div className='btn-container'>
        <Link to='/howto'><button className='btn'> 게임방법 </button></Link>
        <Link to='/game'><button className='btn'> 게임시작 </button></Link>
      </div>
    </div>
  )
};



export default LandingPage;