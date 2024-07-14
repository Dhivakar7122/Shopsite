import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../Css/about.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import about1 from '../Images/about1.jpg';
import about2 from '../Images/about2.jpg';
import caro1 from '../Images/caro1.jpg';
import caro2 from '../Images/caro2.jpg';
import caro3 from '../Images/caro3.jpg';

export default function AboutUs() {
  return (
    <Container fluid className="aboutcont">
      <Row className="abrow1">
        <Col md={6}>
          <h1>About Us</h1>
          <p>
            Welcome to Karuda Tea, your number one source for premium tea varieties. We are dedicated to providing you with the finest quality teas, with a focus on freshness, exceptional taste, and customer satisfaction.
          </p>
          <h2>Our Story</h2>
          <p>
            Our journey began with a simple love for tea and a passion for sharing that love with others. We believe that tea is more than just a beverage – it's an experience, a moment of tranquility in a busy day, and a connection to a rich cultural tradition. This belief inspired us to create <b>Karuda Tea</b>, a place where tea enthusiasts can find the perfect blend for every occasion.
          </p>
          <h2>Our Teas</h2>
          <p>We offer three unique varieties of teas, each crafted to deliver a distinct flavor and experience:</p>
          <ul>
            <li><b>Normal Tea</b> </li>
            <li><b>Elachi Tea</b></li>
            <li><b>Naturalcare Tea</b></li>
          </ul>
        </Col>
        <Col md={6}>
          <img src={about1} alt='no Image' className='aero img-fluid' />
        </Col>
      </Row>

      <div className='ab4'>
        <h1>Our Commitment</h1>
        <p>At <b>Karuda Tea</b>, quality is our top priority. We source our tea leaves from the finest tea gardens, ensuring that each cup you brew is filled with the rich, authentic flavors that tea lovers crave. We are committed to sustainability and ethical sourcing, working closely with our suppliers to promote fair trade practices.</p>
        <div className='carousel'>
          <Carousel>
            <Carousel.Item>
              <img
                className="w-25"
                src={caro1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="w-25"
                src={caro2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className=" w-25"
                src={caro3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className='about2 my-5'>
          <Row>
            <Col md={6}>
              <h1>Why Choose Us?</h1>
              <ul>
                <li><b>Premium Quality:</b> Our teas are carefully selected and blended to provide the best possible flavor and aroma.</li>
                <li><b>Freshness Guaranteed:</b> We ensure that our tea dust is fresh, preserving its natural taste and health benefits.</li>
                <li><b>Customer Satisfaction:</b> Your satisfaction is our top priority. We strive to provide excellent customer service and a seamless shopping experience.</li>
              </ul>
            </Col>
            <Col md={6}>
              <img src={about2} alt='no Image' className='aero img-fluid' />
            </Col>
          </Row>
        </div>

        <div className='about3'>
          <p>Thank you for choosing <b>Karuda Tea</b>. We are thrilled to be part of your tea journey and look forward to sharing many delightful tea moments with you.</p>
        </div>
      </div>

    </Container>
  );
}
