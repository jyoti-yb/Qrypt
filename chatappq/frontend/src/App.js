// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import WelcomePage from './WelcomePage';
import { auth } from './firebase';
import './App.css';

const socket = io('http://localhost:8080');

function App() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUsername(user.displayName);
        socket.emit('new user', user.displayName);
      }
    });

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [username]);

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  const handleUsernameSubmit = (username) => {
    setUsername(username);
  };

  if (!username) {
    return <WelcomePage onSubmitUsername={handleUsernameSubmit} />;
  }

  return (
    <div className="App">
      <div id="banner"><span>{username.charAt(0).toUpperCase() + username.slice(1).toLowerCase()}</span></div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>
            <div className={`message ${msg.username === username ? 'sent' : 'received'}`}>
              <p><span className="username">{msg.username}</span>: {msg.decrypted}</p>
              <span className="timestamp"><small>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small></span>
            </div>
          </li>
        ))}
      </ul>
      <form id="form" onSubmit={handleSubmitMessage}>
        <input id="input" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off" required minLength="1" maxLength="500" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
