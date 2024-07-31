import React from 'react';
import './WelcomePage.css';
/*import React, { useState } from "react";
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { BsEnvelopeAtFill } from "react-icons/bs";
import { auth, provider } from './firebase';
import { signInWithPopup } from "firebase/auth";*/

function WelcomePage({ onSignIn }) {
  return (
    <div className="welcome-page">
      <div className="welcome-content">
        <h1>Welcome to the Chat App.</h1>
        <h2>Sign in to start Chatting!</h2>
        <button onClick={onSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
}

export default WelcomePage;
