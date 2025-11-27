import React from "react";
import "../styles/Footer.css";
import logo from "../assets/logo.png"; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        
        <div className="footer-col">
          <img src={logo} alt="Yarash Logo" className="footer-logo" />
          <p className="footer-desc">
            Yarash brings together luxury dining,<br />
            world-class chefs, and a stunning ambience<br />
            to create unforgettable moments.
          </p>
        </div>

        
        <div className="footer-col">
          <h3>Contact Us</h3>

         
          <p className="footer-item">
            <span className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 
                11.72 11.72 0 003.68.59 1 1 0 011 1V21a1 1 0 01-1 1A18 18 0 013 
                4a1 1 0 011-1h3.47a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 
                1.01l-2.2 2.2z"></path>
              </svg>
            </span>
            +94 76 833 1087
          </p>

          
          <p className="footer-item">
            <span className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M4 4h16a2 2 0 012 2v1l-10 6L2 7V6a2 2 0 012-2zm18 6l-10 
                6-10-6v8a2 2 0 002 2h16a2 2 0 002-2v-8z"></path>
              </svg>
            </span>
            yarash.restaurant@gmail.com
          </p>

          
          <p className="footer-item">
            <span className="footer-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 
                7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 
                112.5-2.5A2.5 2.5 0 0112 11.5z"></path>
              </svg>
            </span>
            Nauththuduwa, Mathugama, Kalutara District
          </p>
        </div>

       
        <div className="footer-col">
          <h3>Find Us</h3>
          <iframe
            title="Yarash Location"
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63333.26427218032!2d80.04591005!3d6.528688549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2412abcd123ef%3A0x9a61bdf1ce9c3c6e!2sMathugama!5e0!3m2!1sen!2slk!4v1700000000000"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Yarash Restaurant. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;

