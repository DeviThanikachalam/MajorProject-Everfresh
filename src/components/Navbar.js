import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
  return (
    <div className='NavBar'>
      <div className='NavContent'>
        <Link to="/" onClick={() => props.onButtonClick('Home')}>Home</Link>
        <Link to="/about" onClick={() => props.onButtonClick('AboutUs')}>About Us</Link>
        <Link to="/product" onClick={() => props.onButtonClick('Product')}>Product</Link>
        <Link to="/support" onClick={() => props.onButtonClick('Support')}>Support</Link>
      </div>
    </div>
  );
}

export default Navbar;
