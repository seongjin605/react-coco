import React, { useState } from 'react';

function CallHook() {
  // const [count, setCount] = useState({ value: 0 });
  const [count, setCount] = useState(0);
  function onClick() {
    // setCount({ value: count.value + 1 });
    // setCount({ value: count.value + 1 });
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  }
  console.log('render called', count);
  return (
    <div>
      <h2>{count.value}</h2>
      <button onClick={onClick}>증가</button>
    </div>
  );
}

export default CallHook;
