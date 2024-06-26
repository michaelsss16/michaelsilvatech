import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Helmet from 'react-helmet'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <head>
      <title>Curso de canto</title>
    </head>
    <App />
  </React.StrictMode>
);
