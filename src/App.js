import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import SignUp from './Signup';
import Chat from './Chat';
import './App.css';
import logo from './logo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
      
      <footer>
        <Link to="/chat">Go to Chat</Link>
      </footer>
    </div>
  );
}

export default App;

