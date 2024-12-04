import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';  // Esto está bien, ya que style.css está dentro de 'src'
import App from './App';  // Esto está bien, ya que App.js está dentro de 'src'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
