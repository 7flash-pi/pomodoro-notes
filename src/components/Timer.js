import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const Timer = ({note}) => {
  const remainingTime=20;
  const { task }=note.task;
  const {duration}=parseInt(note.duration);
  return (
    <div className='Timer'>
          <CountdownCircleTimer
            isPlaying
            duration={20}
            colors={['#03800d' , '#f01818']}
            colorsTime={[6,4]}
          >
            {({ remainingTime }) => remainingTime}
          </CountdownCircleTimer>
          <div className="green">
            <button>Pause</button>
             <button className='red'>Stop</button>
            <button>Resume</button>
          </div>

        <div className="breakForm">
            <input type="number"/>
            <button>Add Break</button>
        </div>
      
    </div>
  )
}

export default Timer
