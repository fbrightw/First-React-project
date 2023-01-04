import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, BrowserRouter} from "react-router-dom";
import {Routes} from "react-router";
import './index.css'
import './styles.css'
import App from './App.jsx';
import Login from "./components/sections/login/Login";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
