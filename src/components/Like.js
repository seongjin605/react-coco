import React, { useState } from 'react';

function Like() {
  // const element = (
  //   <a key="key1" style={{ width: 100 }} href="http://google.com">
  //     click here
  //   </a>
  // );
  // console.log(element);

  const [color, setColor] = useState('red');
  function onClick() {
    color === 'red' ? setColor('blue') : setColor('red');
  }
  return (
    <button style={{ backgroundColor: color }} onClick={onClick}>
      좋아요
    </button>
  );
}

export default React.memo(Like);
