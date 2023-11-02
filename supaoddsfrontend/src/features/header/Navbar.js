// Navbar.js
import React from 'react';
// Navbar.js
import { useState } from 'react';
// import { Button } from '@chakra-ui/react';
// import { Link } from "react-router-dom";
import './Navbar.css'; // Import your CSS file for styling
import RegistrationPage from './RegistrationPage';
import Mobilelogo from './Mobilelogo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Define the onOpen function
  const onOpen = () => {
    // Implement the logic you want when the registration page should open.
    // For example, you can show a modal or navigate to a registration page.
    // You can use state or any other mechanism to control this behavior.
    console.log('Opening registration page');
  };


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <a href='/'><img src={Mobilelogo} alt='logo' /></a>
      </div>
      <div className={`mobile-menu-icon ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
      <li><a href="/">Home</a></li>
        <li><a href="blog">Blog</a></li>
        {/* <li><a href="results">Result</a></li> */}
        <li><a target="_blank" href="/leaguetable">Livescores</a></li>
        <button onClick={onOpen} className="Bsc"><RegistrationPage /></button>
      </ul>
      <button onClick={onOpen} className="subscribe-button"><RegistrationPage /></button>
      
    </nav>
  )
};

export default Navbar;


