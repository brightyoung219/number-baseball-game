import React from 'react'
import { Table } from 'react-bootstrap';
import './Logs.scss'

function Logs({ tryNum2, showAnswer, onChange, onSubmit, tryNum, tries, log, threeOut }) {
  
  return (
    <div>
      <div className='numbers'>
        <div>{tryNum2[0] === showAnswer[0] ? showAnswer[0] : null}</div>
        <div>{tryNum2[1] === showAnswer[1] ? showAnswer[1] : null}</div>
        <div>{tryNum2[2] === showAnswer[2] ? showAnswer[2] : null}</div>
        <div>{tryNum2[3] === showAnswer[3] ? showAnswer[3] : null}</div>
      </div>

      <div className='logContainer'>
        <div>
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={tryNum}
              type='text'
              placeholder='숫자를 입력해주세요.'
            />
            <button>확인</button>
          </form>

          <div>
            <Table hover className='table'>
              <tbody>
                {
                  log.map((a, i) =>
                    <tr key={i}>
                      <td><b>{tries[i]}</b></td>
                      <td>{a.ball}</td>
                      <td>볼</td>
                      <td>{a.strike}</td>
                      <td>스트라이크</td>
                    </tr>
                  )
                }
              </tbody>
            </Table>

          </div>
        </div>

        <div className='count'>
          <h1>남은기회 &nbsp;<b>{10 - (tries.length)}</b></h1>
          <h1><b>{threeOut}</b> &nbsp; 아웃</h1>
        </div>

      </div>
    </div>
  )
}

export default Logs;