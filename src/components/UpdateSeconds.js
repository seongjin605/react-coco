import React from 'react';
import ReactDOM from 'react-dom';

let seconds = 0;
function UpdateComponents() {
  seconds += 1;

  const element = (
    <div>
      <h2>지금까지 {seconds}초가 지났습니다.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

export const startTimer = () => {
  setInterval(UpdateComponents, 1000);
};
