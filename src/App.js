import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import './App.css';
import Home from './components/pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
          <Navbar />
          <Home />
          </>
          } />

      </Routes>
    </Router>
  );
}

export default App;

