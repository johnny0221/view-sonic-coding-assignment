import React, { useState } from 'react';
import './TaskTwo.css';

const TaskTwo = () => {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleClick1 = () => {
    const currentTime = new Date().getTime();
    setStartTime(currentTime);
  };

  const handleClick2 = () => {
    const currentTime = new Date().getTime();
    if (startTime !== null) {
      const timeDiff = (currentTime - startTime) / 1000;
      setDuration(timeDiff.toFixed(2));
      setIsFinished(true);
    }
  };

  const handleClickRestartButton = () => {
    setStartTime(null);
    setDuration(null);
    setIsFinished(false);
  };

  return (
    <div>
      {!isFinished && (
        <>
          <button
            style={{ marginRight: '10px' }}
            className='button'
            onClick={handleClick1}>
            Start
          </button>
          <button
            disabled={!startTime}
            className='button'
            onClick={handleClick2}>
            End
          </button>
        </>
      )}
      {isFinished && duration !== null && (
        <div className='center'>
          <p>The duration between these two clicks are: {duration} seconds</p>
          <button className='button' onClick={handleClickRestartButton}>
            Re-start
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskTwo;
