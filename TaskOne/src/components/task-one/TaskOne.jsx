import { useState } from 'react';
import './TaskOne.css';

const SCREEN_SIZES = {
  small: '400px',
  large: '800px',
};

const TaskOne = () => {
  const [outerFrameWidth, setOuterFrameWidth] = useState(SCREEN_SIZES.small);
  const [content, setContent] = useState('');
  const [isContentEditable, setIsContentEditable] = useState(false);

  const outerFrameStyle = {
    width: outerFrameWidth,
    border: '1px solid red',
    padding: '10px',
    margin: '10px',
  };

  const renderContent = () => {
    return (
      <>
        <p style={{ overflow: 'hidden' }}>{content || 'Empty content'}</p>
      </>
    );
  };

  const renderEditableContent = () => {
    return (
      <div>
        <input
          className='text-field__container'
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
    );
  };

  const handleToggleContentEditable = () => {
    setIsContentEditable(!isContentEditable);
  };

  const handleResizeScreen = () => {
    outerFrameWidth === SCREEN_SIZES.small
      ? setOuterFrameWidth(SCREEN_SIZES.large)
      : setOuterFrameWidth(SCREEN_SIZES.small);
  };

  return (
    <div style={outerFrameStyle}>
      <div className='grid-container'>
        <div className='grid-item'>
          {isContentEditable ? renderEditableContent() : renderContent()}
        </div>
        <div className='grid-item'>
          <button className='button' onClick={handleToggleContentEditable}>
            {isContentEditable ? 'save' : 'edit'}
          </button>
          <button className='button' onClick={handleResizeScreen}>
            resize to{' '}
            {outerFrameWidth === SCREEN_SIZES.small ? 'large' : 'small'} screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskOne;
