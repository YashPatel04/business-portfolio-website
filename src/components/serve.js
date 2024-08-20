import React from 'react';
import './serve.css';
import { Link } from 'react-router-dom';
import Brands from './Brands';
function Content() {
  return (
    <div className='servyces'>
      <h1><i>Services</i></h1>
      <section id='services'>
      <h2>Reasons To Be a Partner</h2>
      <br></br>
      <h3>Our team provides you with the perfect environment and opportunities to succeed. Which includes:</h3>
      <section id='serv'>
      <ul>
        <li><b>Value-Driven Brands</b> – Choose from a wide array of brands that add value to your location, whether it’s an oil company, franchised c-store, or quick-serve restaurant.</li>
        <li><b>Flexible Financing Solutions</b> – Traditional financing can be challenging, but we offer innovative solutions you won’t find elsewhere.</li>
        <li><b>Store Leasing and Purchase Options</b> – Whether you’re starting out or expanding, we have store options available.</li>
        <li><b>Exceptional Customer Service</b> – Our dedicated staff and territory managers are here to exceed your expectations. <a href='/contact' id='link'>Contact us</a> today to see how we can assist you!</li>
        <li><b>Specialty Programs</b> – Benefit from branded fleet, consumer, and loyalty programs that drive customers to your store.</li>
      </ul>
      </section>
      </section>
      <section id='getready'>
        <h2>Are You Ready To Boost Your Business?</h2>
        <p>Whether you’re just starting out or looking to expand your current operation, SK Management has the real estate solutions you need. What sets us apart from the competition is our extensive portfolio of properties available for purchase or lease. We’re here to support you every step of the way. Our relationship doesn’t end when the contract is signed. From transferring licenses and permits to setting up store suppliers, training, and ongoing support, we’re committed to helping you grow. Our mission is to build mutually profitable partnerships by providing the tools needed to succeed in the fuel industry.The benefits of partnering with SK Management don’t stop there.</p>
        <Link to='/contact'>
            <button className='myButton'>Contact us</button>
          </Link> 
      </section>
      <section className='brand'>
      <h2>Our Brands</h2>
      </section>
      <Brands />
    </div>
  )
}

export default Content;
