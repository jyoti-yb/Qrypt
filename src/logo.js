
import React from 'react';
import logo from './'; 

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Our logo" className="logo" />
      <h1 className="Qrypt">My Website</h1>
    </header>
  );
};

export default Header;

