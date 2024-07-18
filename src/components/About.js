import React from 'react';
import './About.css';

const About = () => {
  const founderArray = [
    { name: "Jyoti Yadav", image: "/Images/jyoti.jpg" },
    { name: "Priyal Singh", image: "/Images/priyal.jpg" },
    { name: "Harsha Sri", image: "/Images/harsha.jpg" },
    { name: "Ishita Gupta", image: "/Images/ishita.jpg" },
  ];

  return (
    <div className="aboutus">
      <div className="aboutus_box">
        <div className="aboutus_box_title">
          <h2>QRYPT</h2>
          <p>A web-based messaging application that ensures security against the future threats of quantum computers.</p>
          <p>The main objective of this project is to learn about post-cryptographic techniques and algorithms.</p>
          <h4>Overview</h4>
          <p>This project is a web-based messaging app that ensures security against future quantum computing threats by using advanced cryptographic techniques. It allows users to send and receive messages that are encrypted in a way that makes them very hard to intercept or decode by unauthorized parties.</p>
        </div>

        <div className="aboutus_box_founders">
          <h3>Meet The Team</h3>
          <div className="aboutus_box_founders_box">
            {founderArray.map((el, i) => (
              <div key={i} className="aboutus_box_founders_box_img">
                <img 
                  src={`${process.env.PUBLIC_URL}${el.image}`} 
                  alt={el.name} 
                  width={300} 
                  height={300}
                  className="aboutus_box_founders_box_img_img"
                /> 
                <h3>{el.name}</h3>               
              </div>
            ))}
          </div>
        </div>

        <div className="aboutus_box_hero">
          <div className="aboutus_box_hero_left">
            <h1>About Us</h1>
            <p>Welcome to QRYPT, a pioneering web-based messaging application designed to secure your communications against the emerging threats of quantum computing.</p>
            <p>Our mission is to explore and implement advanced post-quantum cryptographic techniques, ensuring that your messages remain private and secure, both now and in the future.</p>
            <p>By leveraging cutting-edge encryption algorithms, QRYPT provides a robust platform for sending and receiving messages, making unauthorized interception or decoding virtually impossible.</p>
            <p>Join us on our journey to fortify digital communication against the evolving landscape of cybersecurity threats.</p>
          </div>
          <div className="aboutus_box_hero_right">
            <img 
            src={`${process.env.PUBLIC_URL}/Images/logo.png`} 
            alt="Hero"
            width={480}
            height={480}
            classname="aboutus_box_hero_right_img" />
          </div>
        </div>        
      </div>
    </div>
  );
};

export default About;
