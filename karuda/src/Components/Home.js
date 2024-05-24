import React from 'react'
import estate from '../Images/estate1.jpg'
import estate1 from '../Images/estate2.jpg'
import aero from '../Images/aero.png'
import home from '../Css/home.css'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Home() {
    const navigate=useNavigate()

    const handleclick=()=>{
        navigate('/signup')
    }
  return (
    <div>
        <div className='body1'>
        <h1 className='header'>Welcome To Karuda Tea</h1>
        <div className='home1img'>
        <img src={estate} alt='no Image'/>
        <p className='homep1'>Discover the finest teas crafted with passion and care. Our teas are a testament to our dedication to quality and flavor, meticulously sourced from the best tea gardens around the world. Each sip tells a story of tradition and excellence, bringing you the rich heritage of tea culture.!!</p>
        </div>
        </div>
        <div className='ibwpara'>
            <p className='para1'>"Experience the essence of tranquility with our premium teas, each cup crafted to bring you a moment of peace and reflection. From the rich, traditional flavors to the innovative blends, discover the perfect tea to suit your every mood."</p>
        <img className='aero' src={aero} alt='no Image'/>
        </div>
        <div className='body2'>
            <div className='home2img'>
            <p className='homep2'>At Teadust Shop, we believe that a great cup of tea can transform ordinary moments into extraordinary experiences. That’s why we’re committed to using only the finest ingredients and sustainable practices. Join us in celebrating the art of tea-making and elevate your tea-drinking experience to new heights.</p>
            <img src={estate1} alt='no image'/>
            </div>
            
        </div>
        <div className='order'>
                <h1 className='ordercon'>Order Our Products Click Here!!</h1>
                <button className='orderbtn' onClick={handleclick}>Order</button>
            </div>
    </div>
  )
}
