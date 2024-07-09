import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Button } from './components/Button';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
      {/* <Button/> */}
        <Navbar/>
        <Routes>
            <Route path = '/' exact Component={Home}/>
        </Routes>       
      </Router>
    </>
  );
}

export default App;
