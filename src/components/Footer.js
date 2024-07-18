import React from 'react';
import './Footer.css'; // Import the CSS for the footer
import logo from '../assets/logo1.png';
import nse from '../assets/nse.png';
import bse from '../assets/bse.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <div className="footer-logo">
          <img src= {logo} alt="Powergrid Logo" />
          <p>POWERGRID</p>
        </div>
        <div className="footer-info">
          <div className="office">
            <h4>Registered Office</h4>
            <p>B-9, Qutab Institutional Area, Katwaria Sarai, New Delhi-110016</p>
          </div>
          <div className="office">
            <h4>Corporate Office</h4>
            <p>Saudamini, Plot No.2, Sector 29, Gurgaon (Haryana) - 122001, INDIA</p>
          </div>
          <div className="share-price">
            <h4>POWERGRID SHARE PRICE</h4>
            <div className="share-price-details">
              <div className="share">
                <img src={nse}alt="NSE Logo" />
                <p> Rs 345.6</p>
              </div>
              <div className="share">
                <img src={bse} alt="BSE Logo" />
                <p> Rs 345.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-middle">
        <p>Follow Us</p>
        <div className="social-icons">
          <a href="https://google.com"><i className="fab fa-facebook-f"></i></a>
          <a href="https://google.com"><i className="fab fa-twitter"></i></a>
          <a href="https://google.com"><i className="fab fa-youtube"></i></a>
          <a href="https://google.com"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright Policy | Hyperlinking Policy | Privacy Policy | Terms of Use | Help | Gazette of India | Public Grievance | FAQs</p>
        <p>Copyright © 2024 Power Grid Corporation of India Ltd. (POWERGRID), Ministry of Power. All Rights Reserved</p>
        <p>Last Updated : 9 July, 2024</p>
        <p>Visitors Count : 2992467</p>
      </div>
    </div>
  );
}

export default Footer;
