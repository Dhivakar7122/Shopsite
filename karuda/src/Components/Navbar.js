import React from 'react'
import { NavLink } from 'react-router-dom'
import navbar from '../Css/navbar.css'
import Logo from'../Images/Logo.png'
import { FaCheckCircle } from 'react-icons/fa'
export default function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <NavLink  to='/'>
            <img className='logo' src={Logo}/>
            </NavLink>
            <NavLink className={'navite'} to='/'>Home</NavLink>
            <NavLink className={'navite'} to='/product'>Products</NavLink>
            <NavLink className={'navite'} to='/about'>AboutUs</NavLink>
            <NavLink className={'navite'} to='/contact'>ContactUs</NavLink>
            <NavLink className={'navite signup'} to='/signup'>Signup</NavLink>
        </nav>
    </div>
  )
}
