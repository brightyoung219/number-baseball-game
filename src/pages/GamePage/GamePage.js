import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './GamePage.css';
import GameOver from '../../components/GameOver/GameOver.js';
import Logs from '../../components/Logs/Logs.js';
import Win from '../../components/Win/Win.js';

function GamePage() {
 
  const [answer, setAnswer] = useState([]); //정답 array ['1234']
  const showAnswer = [...answer.join()]; // 정답 array ['1','2','3','4']

  const [tryNum, setTryNum] = useState(''); // input 값 onSubmit 후 리셋되는 값
  const [tryNum2, setTryNum2] = useState(''); // input 값
  const [tries, setTries] = useState([]); // input값 전체 저장 배열 길이가 10이 될 경우 게임오버
  const [log, setLog] = useState([]); // 몇 볼 몇 스트라이크 저장값 [{strike : strike, ball : ball}]
  const [out, setOut] = useState(0); // 0볼 0스트라이크일 경우 +1
  const [gameOver3, setGameOver3] = useState(false); //3아웃일 경우 보여주는 컴포넌트
  const [gameOver10, setGameOver10] = useState(false); //도전 10회 다 소진한 경우 컴포넌트
  const [win, setWin] = useState(false); // 정담을 맞췄을 경우 보여주는 컴포넌트
  const [play, setPlay] = useState(true); // input입력하는 컴포넌트
 

  // 랜덤숫자 생성
  useEffect(() => {
    const numbers = Array(9).fill().map((n, i) => i + 1); // 1 부터 9를 갖는 어레이
    const randomNum = []; // 랜덤 4자리 숫자

    for (let n = 0; n <= 3; n++) {
      const index = Math.floor(Math.random() * numbers.length);
      randomNum.push(numbers[index]);
      numbers.splice(index, 1);
    };
    setAnswer([randomNum.join('')])
  }, [])

  console.log(answer);


  const onChange = (e) => setTryNum(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (tryNum === '') {
      return;
    }
    // 입력값 검증
    if (tryNum.includes('0') === true) {
      setTryNum('')
      return alert('0을 제외한 1부터 9 숫자 중에 입력해주세요.')
    }
    if (tryNum.length !== 4) {
      setTryNum('')
      return alert('4자리 숫자를 입력해주세요.')
    }
    if (new Set(tryNum).size !== 4) {
      setTryNum('')
      return alert('중복되지 않게 입력해 주세요.')
    }
    if (tries.includes(tryNum)) {
      setTryNum('')
      return alert('이미 시도한 값입니다.')
    }
    if (answer[0] === tryNum) {
      setPlay(false)
      return setWin( true )
    }
    if (tries.length >= 9) {
      setPlay(false)
      return setGameOver10( true )
    }
    if (out === 2){
      setPlay(false)
      return setGameOver3( true )
    }

    // 몇 볼 몇 스트라이크인지 검사
    let strike = 0;
    let ball = 0;
    for (let i = 0; i < 4; i++) {
      const index = tryNum.indexOf(answer[0][i]);
      if (index > -1) {
        if (index === i) {
          strike += 1;
        } else {
          ball += 1
        }
      }
    };

    // 0볼 0스트라이크일 경우 1아웃
    if (strike === 0 && ball === 0) {
      setOut((pre) => pre + 1)
    };

    setLog((pre) => [{ strike: strike, ball: ball }, ...pre]);


    setTries((pre) => [tryNum, ...pre])
    setTryNum2( tryNum ) 
    setTryNum('') //input창을 빈값으로 만들어줌

  };

  return (
    <div className='container'>
      <div className='logo'>
        <Link className='link' to='/'><p>야구는<br />아니지만<br />야구게임</p></Link>
      </div>

      {gameOver3? <GameOver text='3아웃!' answer={answer[0]}/> : null}

      {gameOver10? <GameOver text='아쉽네요 T^T' answer={answer[0]}/> : null}

      {win? <Win answer={answer[0]}/> : null}

      {play? <Logs
      tryNum2={tryNum2} showAnswer={showAnswer} onChange={onChange} onSubmit={onSubmit} tryNum={tryNum} tries={tries} log={log} out={out}/> : null }

    </div>
  )
}

export default GamePage;