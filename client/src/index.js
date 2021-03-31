import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Italian from './context/ItalianContext';

ReactDOM.render(
  <React.StrictMode>
    <Italian>
      <App />
    </Italian>
  </React.StrictMode>,
  document.getElementById('root')
);

