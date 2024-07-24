import React from 'react';
import './WelcomePage.css';

function WelcomePage({ onSignIn }) {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to the Chat App</h1>
        <button onClick={onSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default WelcomePage;
