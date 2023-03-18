import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import { UserContextProvider } from './Context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </React.StrictMode>
);
