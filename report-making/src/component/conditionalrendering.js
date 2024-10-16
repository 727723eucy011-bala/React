// conditionalrendering.js
import React, { useState } from 'react';

const Demo = () => {
  const [count, setCount] = useState(0);
  const [color1, setColor1] = useState('pink');
  const [color2, setColor2] = useState('lightgreen');

  const changeColor1 = () => {
    setColor1(color1 === 'pink' ? 'blue' : 'pink');
    changeCount();
  };

  const changeColor2 = () => {
    setColor2(color2 === 'lightgreen' ? 'yellow' : 'lightgreen');
  };

  const changeCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{textAlign:'center', marginTop:'40px'}}>
      <h1>Conditional Rendering</h1>
      <div style={{padding: '10px' , display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button onClick={changeColor1} style={{ marginRight:'20px', padding:'10px 30px',backgroundColor: color1 }}>
        -
      </button> 
      <p>Zero</p>
      <button onClick={changeColor2} style={{ marginLeft:'20px', padding:'10px 30px',backgroundColor: color2 }}>
        +
      </button></div>
    </div>
  );
};

export default Demo;
