import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import estate from '../Images/estate1.jpg';
import estate1 from '../Images/estate2.jpg';
import aero from '../Images/aero.png';
import '../Css/home.css'; // Your existing custom CSS file
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const handleclick = () => {
        navigate('/signup');
    }

    return (
        <Container fluid>
            <div className='body1'>
                <Row className='home1img'>
                    <Col md={6}>
                    <h1 className='header'><span>Welcome To</span> Karuda Tea</h1>
                        {/* <img src={estate} alt='no Image' className='img-fluid rounded' /> */}
                    </Col>
                    <Col md={6}>
                       
                        <p className='homep1'>Discover the finest teas crafted with passion and care. Our teas are a testament to our dedication to quality and flavor, meticulously sourced from the best tea gardens around the world. Each sip tells a story of tradition and excellence, bringing you the rich heritage of tea culture.</p>
                    </Col>
                </Row>
            </div>

            <div className='ibwpara'>
                <Row>
                    <Col md={6}>
                        <p className='para1'>"Experience the essence of tranquility with our premium teas, each cup crafted to bring you a moment of peace and reflection. From the rich, traditional flavors to the innovative blends, discover the perfect tea to suit your every mood."</p>
                    </Col>
                    <Col md={6}>
                        <img src={aero} alt='no Image' className='aero img-fluid' />
                    </Col>
                </Row>
            </div>

            <div className='body2'>
                <Row className='home2img'>
                    <Col md={6}>
                        <p className='homep2'>At Teadust Shop, we believe that a great cup of tea can transform ordinary moments into extraordinary experiences. That’s why we’re committed to using only the finest ingredients and sustainable practices. Join us in celebrating the art of tea-making and elevate your tea-drinking experience to new heights.</p>
                    </Col>
                    <Col md={6}>
                        <img src={estate1} alt='no image' className='img-fluid rounded' />
                    </Col>
                </Row>
            </div>

            <div className='order text-center'>
                <h1 className='ordercon'>Order Our Products Click Here!!</h1>
                <Button className='orderbtn' onClick={handleclick}>Order</Button>
            </div>
        </Container>
    );
}
