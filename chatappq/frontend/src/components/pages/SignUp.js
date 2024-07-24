import React from 'react';
import '../../App.css';
import WelcomePage from '../WelcomePage';

function SignUp() {
  return (
    <div className="sign-up">
      <video src='/Videos/Main_page.mp4' autoPlay loop muted />
      <WelcomePage />
    </div>
  );
}

export default SignUp;
