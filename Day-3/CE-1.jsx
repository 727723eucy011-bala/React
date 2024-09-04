import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleMessage = () => {
    setIsVisible(prevState => !prevState);
  };
  return (
    <div>
      <button onClick={toggleMessage}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>
      {isVisible && <p>Hi! How are You!!!</p>}
    </div>
  );
};

export default ToggleMessage;
