import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './components/App';


import 'bootswatch/dist/minty/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min.js';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
