import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/Videos/Main_page.mp4' autoPlay loop muted />
        <h1>Welcome to Qrypt!</h1>
        <h3>Experience the Future of Secure Texting</h3>
        <p>
  Protect your communications from the threats of tomorrow with Qrypt's cutting-edge, web-based texting platform.<br />
  Using the revolutionary post-quantum Kyber algorithm, we ensure that your messages remain private and secure,<br />
  even against the power of quantum computers.
</p>

      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>

      </div>
    </div>
  )
}

export default HeroSection
