

import React, { useState } from 'react';

function Goku() {
  const [state, setState] = useState('KAIOKEN');
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
    if (clickCount === 4) {
      setState((prev) => (prev === 'KAIOKEN' ? 'SUPERSAIYAN' : 'KAIOKEN'));
      setClickCount(0);
    }
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={handleClick}>
        Click me
      </button><br />
      <p>Click me 4 times to see the magic {clickCount}/4</p>
    </div>
  );
}

export default Goku;
