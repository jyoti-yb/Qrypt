import React, { useState, useEffect } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    console.log('Fetching initial messages');
    setMessages([
      { id: 1, sender: 'Alice', text: 'Hello!' },
      { id: 2, sender: 'Bob', text: 'Hi there!' },
    ]);
  }, []);

  const handleSendMessage = (event) => {
    event.preventDefault();
    if (newMessage.trim() === '') return;
    const newMessageObject = {
      id: messages.length + 1,
      sender: 'You',
      text: newMessage.trim(),
    };
    setMessages([...messages, newMessageObject]);
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <h2>Chat Room</h2>
      <div className="messages">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <strong>{message.sender}: </strong>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="chat-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="chat-button">Send</button>
      </form>
    </div>
  );
}

export default Chat;

