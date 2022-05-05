import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './HowTo.scss';

function HowTo() {

  const navigate = useNavigate();

  return (
    <div style={{height : '100vh'}}>
      <div className='box'>
        <div className="close"><FontAwesomeIcon onClick={() => navigate(-1)} icon={faXmark} /></div>
        <div>
          <h1>게임방법</h1>
          <p>
            숫자 1 ~ 9 중에서 랜덤으로 4자리 숫자 제시 <br />
            총 10번의 기회안에 4자리 숫자를 맞추면 정답 <br />
          </p>

          <p>
            숫자는 맞지만 순서가 틀릴경우 1볼 <br />
            숫자의 순서까지 맞을 경우 1스트라이크 <br />
            해당 숫자가 없을 경우 1 아웃 <br />
            3아웃이면 도전 실패! <br />
          </p>

          <p>
            예) 랜덤숫자 1 2 3 4 <br />
            <b>도전숫자 2 5 7 8</b> &nbsp;1 볼 0 스트라이크 <br />
            <span>2를 맞췄지만 순서가 틀리기 때문에 1볼 <br /></span>
            <b>도전숫자 5 2 7 8</b> &nbsp;0 볼 1 스트라이크 <br />
            <span>2의 자릿수까지 맞췄으므로 1 스트라이크 <br /></span>
          </p>

        </div>
        <Link to="/game"><button>해보자! 해보자!</button></Link>
      </div>
    </div>
  )
}

export default HowTo;