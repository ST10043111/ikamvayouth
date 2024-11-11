import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/Custom.css';
import './styles/Styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  
);