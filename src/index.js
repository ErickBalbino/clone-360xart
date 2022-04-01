import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// SHOW AND HIDE MENU
let prevScrollpos = window.pageYOffset;

window.onscroll = () => {
  let currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    document.getElementById('header').style.top = '0';
  } else {
    document.getElementById('header').style.top = '-110px';
  }
  prevScrollpos = currentScrollPos;
}
