import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import { UserContextProvider } from './Context/UserContext';
import { CartContextProvider } from './Context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <CartContextProvider>
        <Router>
          <App />
        </Router>
      </CartContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
