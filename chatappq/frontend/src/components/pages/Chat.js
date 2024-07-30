import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

const socket = io('http://localhost:8080');

function Chat() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const emailName = user.email.split('@')[0];
      setUsername(emailName);
      socket.emit('new user', emailName);
    } else {
      navigate('/'); // Redirect if no user is authenticated
    }

    socket.on('chat message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, [navigate]);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      navigate('/');
    }).catch((error) => {
      console.error("Error signing out: ", error);
    });
  };

  const handleSubmitMessage = (e) => {
    e.preventDefault();
    if (input.trim()) {
      socket.emit('chat message', input);
      setInput('');
    }
  };

  return (
    <div className="chat">
      <video src='/Videos/Main_page.mp4' autoPlay loop muted />
      <div id="banner">
        <span>{username}</span>
        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>
      </div>
      <ul id="messages">
        {messages.map((msg, index) => (
          <li key={index}>
            <div className={`message ${msg.username === username ? 'sent' : 'received'}`}>
              <p><span className="username">{username}</span></p>
              <p>{msg}</p>
              <span className="timestamp"><small>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</small></span>
            </div>
          </li>
        ))}
      </ul>
      <form id="form" onSubmit={handleSubmitMessage}>
        <input
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          autoComplete="off"
          required
          minLength="1"
          maxLength="500"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
