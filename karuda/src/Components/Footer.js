import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import leaf from '../Images/tealeaf.png';
import '../Css/footer.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="footer bg-dark text-white py-5">
      <Container fluid>
        <Row>
          <Col lg={3} md={6} className="mb-2 mb-lg-0">
            <div className="footer-section about">
              <h2>Karuda Tea</h2>
              <p>Experience the finest teas crafted with passion and care. Join us in celebrating the art of tea-making.</p>
              {/* <img className='leaf' src={leaf} alt='Tea Leaf'/> */}
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2 mb-lg-0 px-5">
            <div className="footer-section links">
              <h2>Quick Links</h2>
              <ul className="list-unstyled">
                <li><NavLink to="/" className="text-white">Home</NavLink></li>
                <li><NavLink to="/about" className="text-white">About Us</NavLink></li>
                <li><NavLink to="/products" className="text-white">Products</NavLink></li>
                <li><NavLink to="/contact" className="text-white">Contact Us</NavLink></li>
              </ul>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2 mb-lg-0 d-flex">
            <div className="footer-section social">
              <h2>Follow Us</h2>
              <a href="#" className="social-icon text-white"><FaFacebookF/></a>
              <a href="#" className="social-icon text-white"><FaTwitter/></a>
              <a href="#" className="social-icon text-white"><FaInstagram/></a>
              <a href="#" className="social-icon text-white"><FaLinkedinIn/></a>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-2 mb-lg-0">
            <div className="footer-section contact">
              <h2>Contact Us</h2>
              <p>Email: karudatea@gmail.com</p>
              <p>Phone: +91 9092141525</p>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom mt-2">
        <Container>
          <div className="text-center text-white">
            &copy; 2024 Karuda Tea. All rights reserved.
          </div>
        </Container>
      </div>
    </footer>
  );
}
