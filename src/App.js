import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Event from './components/pages/Event';
import Events1 from './components/pages/Events1';
import Events2 from './components/pages/Events2';
import Events3 from './components/pages/Events3';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path = '/' exact Component={Home}/>
            <Route path = '/event' Component={Event}/>
            <Route path = '/events1' Component={Events1}/>
            <Route path = '/events2' Component={Events2}/>
            <Route path = '/events3' Component={Events3}/>
        </Routes>       
      </Router>
    </>
  );
}

export default App;
