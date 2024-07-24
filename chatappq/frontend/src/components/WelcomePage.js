// frontend/src/WelcomePage.js
import React from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

import './WelcomePage.css';

function WelcomePage({ onSubmitUsername }) {
  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        onSubmitUsername(user.displayName);
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to the Chat App</h1>
        <button onClick={handleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default WelcomePage;