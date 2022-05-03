/*eslint-disable*/

import React, { useState } from 'react';
import './DarkMode.css';
import { Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function DarkMode() {

  const [darkMode, setDarkMode] = useState(true);
  const darkModeClick = () => {
    console.log('클릭했음')
    setDarkMode( !darkMode );
    let darkModeBtn = document.querySelector('.dark-btn');

    
    
    // darkModeBtn.classList.toggle('move-btn'); //버튼 애니메이션
    darkMode? darkModeBtn.classList.add('move-btn') : darkModeBtn.classList.remove('move-btn')
    document.body.classList.toggle('darkMode');
  };

  return (
    <div className='nav'>
      <div className='badges' onClick={ darkModeClick }>
        <Badge pill bg="light" text="dark" className='white-btn'>On</Badge>
        <Badge pill bg="dark" className='dark-btn'><FontAwesomeIcon icon={faMoon} /> 다크모드 &nbsp; </Badge>
      </div>
    </div>
  )
}

export default DarkMode;