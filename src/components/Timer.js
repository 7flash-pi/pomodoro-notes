import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useGlobalContext } from '../context/context';

const Timer = ({note}) => {
  const remainingTime=20;
  const { stopTimer,startTimer,pauseTimer }=useGlobalContext();
  const { task }=note.task;

  const {duration}=parseInt(note.duration)*60;
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60
    
    return `${minutes}:${seconds}`
  }
  return (
    <div className='Timer'>
          <CountdownCircleTimer
            isPlaying
            duration={duration}
            colors={['#eb7734']}
            colorsTime={[6]}
            trailColor="#151932"
            onComplete={() => stopTimer()}
          >
            {children}
          </CountdownCircleTimer>
          <div className="green">
            <button onClick={pauseTimer}>Pause</button>
             
            <button onClick={startTimer}>Resume</button>
          </div>

        <div className="breakForm">
            <input type="number"/>
            <button>Add Break</button>
        </div>
      
    </div>
  )
}

export default Timer
