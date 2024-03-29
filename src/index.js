import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Card from './card';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
     <Route path="/ProfileCardClient" element={<App/>}/>
     <Route path="/card" element={<Card/>}/>
  </Routes>
</BrowserRouter>
);
