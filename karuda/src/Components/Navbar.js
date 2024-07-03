import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/Logo.png';
import { FaCheckCircle } from 'react-icons/fa';
import '../Css/navbar.css'; // Your existing custom CSS file
import { Container, Navbar as BootstrapNavbar } from 'react-bootstrap';

export default function Navbar() {
    return (
        <BootstrapNavbar expand="lg" className="nav">
            <Container>
                <NavLink to='/' className='navbar-brand'>
                    <img className='logo' src={Logo} alt='Logo' />
                </NavLink>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink exact to='/' className='nav-link' activeClassName='active'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/product' className='nav-link' activeClassName='active'>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' className='nav-link' activeClassName='active'>About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' className='nav-link' activeClassName='active'>Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/signup' className='nav-link signup' activeClassName='active'>Signup</NavLink>
                        </li>
                    </ul>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
}
