import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useGlobalContext } from '../context/context';

const Timer = ({note}) => {
  const remainingTime=20;
  const { task }=note.task;
  return (
    <div className='Timer'>
          <CountdownCircleTimer
            isPlaying
            duration={20}
            colors={['#eb7734']}
            colorsTime={[6]}
            trailColor="#151932"
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
