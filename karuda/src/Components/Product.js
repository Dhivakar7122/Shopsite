import React from 'react'
import productcss from '../Css/product.css'
import tcup from '../Images/teacup1.png'
import tdust1 from '../Images/teapro2.png'
import elachi1 from '../Images/elachitea1.png'
import nct1 from '../Images/naturaltea1.png'
import { Navigate } from 'react-router-dom'
import { FaCartArrowDown } from "react-icons/fa";




export default function Product() {
  const handleclick=()=>{
    Navigate('/order')
  }
  return (
    <div>
      <div className='product1'>
      <div className='p1body1'>
        <h1 className='p1h1'>Our Product's</h1>
        <h2 className='p1h2'>Welcome to Our Teadust Selection</h2>
        <p className='p1p'>At Karuda Tea, we believe that every cup of tea tells a story. Our teadust collection is a testament to the rich heritage and tradition of tea making, offering you an opportunity to savor the finest blends that nature has to offer. Whether you are a seasoned tea enthusiast or a newcomer to the world of tea, our premium teadust collection promises an unparalleled experience of flavor, aroma, and wellness.</p>
    </div>
    <div className='p2body'>
      <div className='p2b1'>
       <aside>
      <h2 className='p2h2'>Discover the Rich Flavors and Unique Blends</h2>
      <p className='p2p'>Our teadust selection is meticulously curated to bring you the best of what tea can offer. Each blend is crafted with passion and precision, ensuring that every sip is a journey of taste and tranquility. From the robust and invigorating flavors of our Normal Estate Tea to the exotic and aromatic notes of our Elachi Tea, and the soothing and healthful qualities of our Natural Care Tea, there is something for everyone.</p>
      </aside>
      <aside>
        <h1 className='p2h12'>Why Our Teas Stand Out:</h1>
      <h2 className='p2h2'>Exceptional Quality:</h2>
      <p className='p2p'>We source our tea leaves from the finest estates, ensuring that only the best leaves make it into your cup. Our commitment to quality is unwavering, and it reflects in the rich flavors and captivating aromas of our teas.</p>
      <h2 className='p2h2'>Health and Wellness:</h2>
      <p className='p2p'>Tea is more than just a beverage; it's a source of wellness. Our blends are thoughtfully crafted to offer various health benefits, from boosting your immune system to aiding digestion and reducing stress. The inclusion of natural ingredients like cardamom, dry ginger, and herbs in our teas ensures that you get the best of nature in every cup.</p>
      </aside>
      </div>
      <div className='p2b2'>
        <img src={tcup} alt='no Image'/>
      </div>
    </div>
    </div>
     {/* Starting content closed */}
    <div className='ownprod'>
      <div className='normalpro'>
        <div className='ncon'>
        <h2>Normal Estate Tea</h2>
        <h3>Description:</h3>
        <p>Our Normal Estate Tea is a classic blend, offering the purest and most traditional tea experience.This tea boasts a robust flavor and a delightful aroma, perfect for any time of the day.</p>
        <h3>Features:</h3>
        <ul>
          <li><b>Pure Tea Leaves:</b>No additives or flavorings, just 100% natural tea leaves.</li>
          <li><b>Rich Aroma:</b>A full-bodied tea with a strong, inviting fragrance.</li>
          <li><b>Perfect Brew:</b>Ideal for making a refreshing cup of tea to kickstart your day.</li>
        </ul>
        <h3>How to Brew:</h3>
        <ol>
          <li value={1}>Add one teaspoon of Normal Estate Tea to a cup.</li>
          <li>Pour boiling water over the tea.</li>
          <li>Let it steep for 3-5 minutes.</li>
          <li>Strain and enjoy!</li>
        </ol>
        <div className='pordercon'>
        <h3 className='orderquote'>Order Normal Tea!!!</h3>
        <button className='porderbtn'><FaCartArrowDown /></button> 
        </div>
        </div>
        <div className='imgs'>
          <img className='img1' src={tdust1} alt='no Img'/>
        </div>
      </div>
      {/* Normal Tea closed */}
      <div className='elachi'>
        <div className='elachicon'>
        <h2>Elachi Tea</h2>
        <h3>Description:</h3>
        <p>Our Elachi Tea is a unique blend that combines the boldness of tea with the exotic flavor of cardamom. This aromatic tea is perfect for those who love a hint of spice in their brew.</p>
        <h3>Features:</h3>
        <ul>
          <li><b>Cardamom Infusion:</b>A delightful blend of tea leaves and aromatic cardamom.</li>
          <li><b>Invigorating Flavor:</b> A refreshing and spicy taste that enhances the tea experience.</li>
          <li><b>Versatile Brew:</b>Enjoy it hot or iced, with or without milk.</li>
        </ul>
        <h3>How to Brew:</h3>
        <ol>
          <li value={1}>Add one teaspoon of Elachi Tea to a cup.</li>
          <li>Pour boiling water over the tea.</li>
          <li>Let it steep for 3-5 minutes.</li>
          <li>Strain and savor the exotic flavor!!</li>
        </ol>
        <div className='pordercon'>
        <h3 className='orderquote'>Order Elachi Tea!!!</h3>
        <button className='porderbtn'><FaCartArrowDown /></button> 
        </div>
        </div>
        <div className='elachiimg'>
          <img src={elachi1} alt='no image'/>
        </div>
      </div>
      <div className='naturaltea'>
        <div className='naturalteacon'>
        <h2>Natural Care Tea</h2>
        <h3>Description:</h3>
        <p>Our Natural Care Tea is a special blend designed for wellness and relaxation. It combines the goodness of elachi, dry ginger, and a selection of herbs to create a soothing and healthful tea.</p>
        <h3>Features:</h3>
        <ul>
          <li><b>Herbal Blend: </b>A mix of elachi, dry ginger, and beneficial herbs.</li>
          <li><b>Health Benefits:</b> Known for its digestive and anti-inflammatory properties.</li>
          <li><b>Calming Brew: </b>Perfect for unwinding after a long day or soothing an upset stomach.</li>
        </ul>
        <h3>How to Brew:</h3>
        <ol>
          <li value={1}>Add one teaspoon of Natural Care Tea to a cup.</li>
          <li>Pour boiling water over the tea.</li>
          <li>Let it steep for 5-7 minutes.</li>
          <li>Strain and relax with a cup of wellness!</li>
        </ol>
        <div className='pordercon'>
        <h3 className='orderquote'>Order Naturalcare Tea!!!</h3>
        <button className='porderbtn'><FaCartArrowDown /></button> 
        </div>
        </div>
        <div className='naturalimg'>
          <img src={nct1}/>
        </div>
      </div>
    </div>
    
    </div>
  )
}
