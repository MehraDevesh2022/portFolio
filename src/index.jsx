import React from 'react';
import ReactDOM from 'react-dom'; // Import ReactDOM correctly
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css';
import { inject } from '@vercel/analytics';
import { BrowserRouter } from 'react-router-dom';
inject();

// Use ReactDOM.render instead of ReactDOM.createRoot
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
