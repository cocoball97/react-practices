import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

// 일반 사용자가 배포단계에서 해당 함수들을 사용하지 못하도록 재정의
if(process.env.NODE_ENV === 'production'){
  console.log = () => {};
  console.info = () => {};
  console.error = () => {};
  console.warn = () => {};
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode : 검증
  <React.StrictMode>
    <App />
  </React.StrictMode>
);