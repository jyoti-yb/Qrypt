import React from 'react';
import '../../App.css';
import About from '../About';

function AboutUs() {
  return (
    <div className="aboutus">
      <video src='/Videos/Main_page.mp4' autoPlay loop muted />
      <About />
    </div>
  );
}

export default AboutUs;
