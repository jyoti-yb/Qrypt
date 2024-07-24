import React from 'react';
import '../../App.css';
import WelcomePage from '../WelcomePage';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase';
import { signInWithPopup } from "firebase/auth";

function SignUp() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        navigate('/chat'); // Redirect to chat after successful sign-in
      })
      .catch((error) => {
        console.error("Error signing in with Google: ", error);
      });
  };

  return (
    <div className="sign-up">
      <video src='/Videos/Main_page.mp4' autoPlay loop muted />
      <WelcomePage onSignIn={handleSignIn} />
    </div>
  );
}

export default SignUp;
