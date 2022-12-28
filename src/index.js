import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router"
import Login from "./components/sections/home/Login";
import './index.css'

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
