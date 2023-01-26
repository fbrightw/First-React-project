import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, HashRouter} from "react-router-dom";
import {Routes} from "react-router";
import './index.css'
import './styles.css'
import App from './App.jsx';
import Login from "./components/sections/login/Login";
import TaskContainer from "./components/sections/todotasks/tasks/TaskContainer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/login" element={<Login />} />
              <Route path="/todo" element={<TaskContainer />} />
          </Routes>
      </HashRouter>
  </React.StrictMode>
);
