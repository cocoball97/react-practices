import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App.js';

// createRoot : 컴포넌트 렌더링 컨테이너
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);