import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import{
  Register,
  Login,
  Sidebar,
  Search,
} from './components'

import {BrowserRouter as Router, Route, Routes, useNavigate} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div>
  <Sidebar />
  <Routes>
      <Route path="/login" element={ <Login/>}/> 
      <Route path="/register" element={ <Register/>}/> 
      <Route path="/search" element={ <Search/>}/> 
  </Routes>
  </div>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals