import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './Win.css';

function Win({answer}) {
  return (
    <div className='wrap'>
      <h1>{answer}</h1>
      <h2>홈런! 정답입니다 &nbsp;
        <span>
          <FontAwesomeIcon icon={faHandsClapping} /> &nbsp;
          <FontAwesomeIcon icon={faHandsClapping} /> &nbsp;
          <FontAwesomeIcon icon={faHandsClapping} /> &nbsp;
        </span> 
      </h2>
      <Link to="/"><button>메인으로</button></Link>
      <button onClick={() => window.location.reload() }>한번 더?</button>
    </div>
  )
}

export default Win;