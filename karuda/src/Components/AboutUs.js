import React from 'react'
import aboutcss from '../Css/about.css'
import tea from '../Images/about1.jpg'

export default function AboutUs() {
  return (
    <div className='aboutcont'>
      <div className='about'> 
      <div className='ab1'>
      <h1 className='ab-h1'>AboutUs</h1>
      <p className='ab-p1'>Welcome to <b>Karuda Tea</b>, your number one source for premium tea varieties. 
     We are dedicated to providing you with the finest quality teas, with a focus on freshness, exceptional taste, and customer satisfaction.</p>
      <div className='ab1-2'>
      <img src={tea}/>
      </div>
      </div> 
     <div className='ab2'>
     <h1 className='ab-h2'>Our Story</h1> 
     <p className='ab-p2'>Our journey began with a simple love for tea and a passion for sharing that love with others. 
      We believe that tea is more than just a beverage – it's an experience, a moment of tranquility in a busy day, and a connection to a rich cultural tradition. 
      This belief inspired us to create <b>Karuda Tea</b>, a place where tea enthusiasts can find the perfect blend for every occasion.</p>
     </div>
     <div className='ab3'>
      <h1 className='ab-h3'>Our Teas</h1>
      <p className='ab-p3'>We offer three unique varieties of teas, each crafted to deliver a distinct flavor and experience:</p>
      <ul className='ab-list'>
        <li><b>Normal Tea:</b> Classic and comforting, our normal tea is perfect for those who enjoy the traditional taste of tea. It's a blend that brings warmth and familiarity with every sip.</li>
      <li><b>Elachi Tea:</b> Infused with the aromatic flavor of cardamom, our Elachi tea offers a delightful twist on the classic tea experience. It's a refreshing and invigorating blend that is perfect for any time of the day.</li>
      <li><b>Naturalcare Tea:</b>Our Naturalcare tea is a special blend that combines the goodness of natural ingredients for a healthful and rejuvenating tea experience. It's designed for those who seek a balanced and nourishing cup of tea.</li>
      </ul>
     </div>
     <div className='ab4'>
      <h1>Our Commitment</h1>
      <p>At <b>Karuda Tea</b>, quality is our top priority.
         We source our tea leaves from the finest tea gardens, ensuring that each cup you brew is filled with the rich, authentic flavors that tea lovers crave.
         We are committed to sustainability and ethical sourcing, working closely with our suppliers to promote fair trade practices.</p>
      <h1>Why Choose Us?</h1>
      <ul>
        <li><b>Premium Quality: </b>Our teas are carefully selected and blended to provide the best possible flavor and aroma.</li>
      <li><b>Freshness Guaranteed: </b>We ensure that our tea dust is fresh, preserving its natural taste and health benefits.</li>
      <li><b>Customer Satisfaction:</b>Your satisfaction is our top priority. We strive to provide excellent customer service and a seamless shopping experience.</li>
      </ul>
     </div>
     <div>
      <p>Thank you for choosing <b>Karuda Tea</b>. We are thrilled to be part of your tea journey and look forward to sharing many delightful tea moments with you.</p>
     </div>
      </div>
      </div>
  )
}
