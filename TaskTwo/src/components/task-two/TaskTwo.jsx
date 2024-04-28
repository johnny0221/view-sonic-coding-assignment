import { useState } from 'react';
import './TaskTwo.css';

const TaskTwo = () => {
  const [startTime, setStartTime] = useState(null);
  const [duration, setDuration] = useState(null);
  const [isFinished, setIsFinished] = useState(false);

  const handleClickStart = () => {
    const currentTime = new Date().getTime();
    setStartTime(currentTime);
  };

  const handleClickEnd = () => {
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
          <button className='button mr-10' onClick={handleClickStart}>
            Start
          </button>
          <button
            disabled={!startTime}
            className='button'
            onClick={handleClickEnd}>
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
