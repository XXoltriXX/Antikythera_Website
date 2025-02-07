import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/pricing">Pricing</Link>
      <Link to="/case-studies">Case Studies</Link>
      <Link to="/about-us">About Us</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
