import React, {useEffect, useState} from 'react'
import { Table } from 'react-bootstrap';
import './Logs.scss'

function Logs({ tryNum2, showAnswer, onChange, onSubmit, tryNum, tries, log, out}) {
  
  return (
    <div style={{height : '100vh'}}>
      <div className='numbers'>
        <div>{tryNum2[0] === showAnswer[0] ? showAnswer[0] : null}</div>
        <div>{tryNum2[1] === showAnswer[1] ? showAnswer[1] : null}</div>
        <div>{tryNum2[2] === showAnswer[2] ? showAnswer[2] : null}</div>
        <div>{tryNum2[3] === showAnswer[3] ? showAnswer[3] : null}</div>
      </div>

      <div className='inputAndCount' >
          <form onSubmit={onSubmit} className='inputBox'>
            <input
              onChange={onChange}
              value={tryNum}
              type='text'
              placeholder='숫자를 입력해주세요.'
            />
            <button>확인</button>
          </form>

        <div className='count'>
          <p>남은기회 &nbsp;<b>{10 - (tries.length)}</b></p>
          {out === 2? <p><b className='red'>{out}</b> &nbsp; 아웃</p>
          : <p><b>{out}</b> &nbsp; 아웃</p> }
        </div>
      </div>

      <div>
        <Table hover className='table'>
          <tbody>
            {
              log.map((a, i) =>
                <tr key={i}>
                  <td style={{width : '30%'}}><b>{tries[i]}</b></td>
                  <td style={{width : '10%'}}>{a.ball}</td>
                  <td style={{width : '10%'}}>볼</td>
                  <td className='strike'  style={{width : '15%'}}>{a.strike}</td>
                  <td className='strike' style={{width : '35%'}}>스트라이크</td>
                </tr>
              )
            }
          </tbody>
        </Table>

      </div>





    </div>
  )
}

export default Logs;