import React from 'react'
import { Link } from 'react-router-dom';
import './GameOver.css'

function GameOver({ text, answer }) {
  return (
    <div className='wrap'>
      <h1>{text}</h1>
      <p>정답은! <b>{answer}</b>입니다.</p>
      <Link to="/"><button>메인으로</button></Link>
      <button onClick={() => window.location.reload('/game') }>다시하기</button>
    </div>
  )
}

export default GameOver;