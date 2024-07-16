import React from 'react';
import './About.css';

const About = () => {
  const founderArray = [
    { name: "Priyal Singh", position: "Developer", image: "/Images/Priyal.jpeg" },
    { name: "Harsha Sri", position: "Developer", image: "/Images/Harsha.jpeg" },
    { name: "Ishita Gupta", position: "Developer", image: "/Images/Ishita.jpeg" },
    { name: "Jyoti Yadav", position: "Developer", image: "/Images/Jyoti.jpeg" },
  ];

  const factsArray = [
    {
      title: "Fact 1",
      info: "Description for fact 1"
    },
    {
      title: "Fact 2",
      info: "Description for fact 2"
    },
    {
      title: "Fact 3",
      info: "Description for fact 3"
    }
  ];

  return (
    <div className="aboutus">
      <div className="aboutus_box">
        <div className="aboutus_box_hero">
          <div className="aboutus_box_hero_left">
            <h1>About Us</h1>
            <p>Welcome to Qrypt. We are dedicated to providing the best service possible. Our team is passionate about delivering high-quality solutions and ensuring customer satisfaction.</p>
            <p>Our mission is to make technology accessible and useful for everyone. We believe in innovation, transparency, and collaboration.</p>
            <p>Thank you for visiting our site. We hope you find what you’re looking for. If you have any questions, feel free to <a href="mailto:info@example.com">contact us</a>.</p>
          </div>
          <div className="aboutus_box_hero_right">
            <img src={`${process.env.PUBLIC_URL}/Images/4.png`} alt="Hero" />
          </div>
        </div>

        <div className="aboutus_box_title">
          <h2>Founder</h2>
          <p>Coming soon...</p>
        </div>

        <div className="aboutus_box_founders">
          <div className="aboutus_box_founders_box">
            {founderArray.map((el, i) => (
              <div key={i} className="aboutus_box_founders_box_img">
                <img 
                  src={`${process.env.PUBLIC_URL}${el.image}`} 
                  alt={el.name} 
                  width={500} 
                  height={500}
                  className="aboutus_box_founders_box_img_img"
                /> 
                <h3>{el.name}</h3>
                <p>{el.position}</p>               
              </div>
            ))}
          </div>
        </div>

        <div className="aboutus_box_title">
          <h2>Fast Facts</h2>
          <p>We're impartial and independent, and every day we create distinctive, world-class programmes and content.</p>
        </div>

        <div className="aboutus_box_facts">
          <div className="aboutus_box_facts_box">
            {factsArray.map((el, i) => (
              <div key={i} className="aboutus_box_facts_box_info">
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
