import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <section className="footer-info">
        <div className="info-item">
          
          <strong>High Quality </strong> <br /> <p>crafted from top materials</p>
        </div>
        <div className="info-item">
          
          <strong>Warranty Protection </strong> <br /> <p>Over 2 years</p>
        </div>
        <div className="info-item">
          
          <strong>Free Shipping </strong> <br /> <p>Order over $150</p>
        </div>
        <div className="info-item">
          
          <strong>24/7 Support </strong> <br /> <p>Dedicated support</p>
        </div>
      </section>

      <section className="footer-main">
        <div className="footer-company">
          <h2>Funiro.</h2>
          <p>400 University Drive Suite 200 Coral <br /> Gables,<br /> FL 33134 USA</p>
        </div>
        <div className="footer-links">
          <ul>
            <p className='ok'>Links</p>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-help">
          <ul>
          <p className='ok'>Help</p>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div className="footer-newsletter">
        <p className='ok'>Newsletter</p>
          <p>Enter Your Email Address</p><br />
          <input type="email" placeholder="Enter Email" />
          <br /><br /><button>SUBSCRIBE</button>
        </div>
      </section>
      <p className='prod'>2023 furino. All rights reverved</p><br />
    </footer>
  );
};

export default Footer;