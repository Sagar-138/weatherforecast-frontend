import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <ul>
              <li><a href="#" className="fa fa-facebook"></a></li>
              <li><a href="#" className="fa fa-twitter"></a></li>
              <li><a href="#" className="fa fa-instagram"></a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2023 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
