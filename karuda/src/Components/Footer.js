import React from 'react'
import footercss from '../Css/footer.css'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import leaf from '../Images/tealeaf.png'
export default function Footer() {
  return (
    <div className='footerdiv'>
        <footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h2>Karuda Tea</h2>
      <p>Experience the finest teas crafted with passion and care. Join us in celebrating the art of tea-making.</p>
      <img className='leaf' src={leaf} alt='no Image'/>
    </div>
    <div className="footer-section links">
      <h2>Quick Links</h2>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </div>
    <div className="footer-section social">
      <h2>Follow Us</h2>
      <a href="#" className="social-icon"><FaFacebookF/></a>
      <a href="#" className="social-icon"><FaTwitter/></a>
      <a href="#" className="social-icon"><FaInstagram/></a>
      <a href="#" className="social-icon"><FaLinkedinIn/></a>
    </div>
    <div className="footer-section contact">
      <h2>Contact Us</h2>
      <p>Email: karudatea@gmail.com</p>
      <p>Phone: +91 9092141525</p>
    </div>
  </div>
  <div className="footer-bottom">
    &copy; 2024 Karuda Tea. All rights reserved.
  </div>
</footer>
    </div>
  )
}
