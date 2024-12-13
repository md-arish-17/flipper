import React from 'react';
import logo from "../images/assets/Client-First - IMAGES/Logo.svg"
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="text-light py-5" style={{backgroundColor:"#232536"}}>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          {/* Logo */}
          <div className="col-md-4 mb-4">
            <img src={logo} alt="" />
          </div>

          {/* Navigation */}
          <div className="col-md-8 text-md-end">
            <nav className="d-flex justify-content-md-end gap-4">
              <Link to='/' className="text-decoration-none text-light" style={{fontFamily:"Inter", color:"#6D6E76"}}>Home</Link>
              <Link to='/blog' className="text-decoration-none text-light" style={{fontFamily:"Inter"}}>Blog</Link>
              <Link to='/about' className="text-decoration-none text-light" style={{fontFamily:"Inter"}}>About us</Link>
              <Link to='/contact' className="text-decoration-none text-light" style={{fontFamily:"Inter"}}>Contact us</Link>
              <Link to="/privacy" className="text-decoration-none text-light" style={{fontFamily:"Inter"}}>Privacy Policy</Link>
            </nav>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="row mt-5">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center p-4 rounded" style={{backgroundColor:"#373b4a87"}}>
              {/* Left Text */}
              <h5 className="text-light mb-0" style={{fontFamily:"sans-serif",color:"#F4F4F4",fontWeight:"bold"}}>Subscribe to our newsletter to get latest updates and news</h5>
              
              {/* Right Input and Button */}
              <div className="d-flex">
                <input
                  type="email"
                  className="form-control me-2"
                  placeholder="Enter Your Email"
                  style={{ maxWidth: '300px',backgroundColor:"#4C4C4C",border:"1px solid #6D6E76",color:"#F4F0F8" }}
                />
                <button className="btn btn-warning" style={{borderRadius:4,fontWeight:"bold",color:"#232536", backgroundColor:"#FFD050"}}>Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information and Social Links */}
        <div className="row mt-4">
          <div className="col-md-6" style={{color:"#F4F0F8",fontFamily:"Inter"}}>
            <p className="mb-1">Finstreet 118 2561 Fintown</p>
            <p className="mb-0">hello@finsweet.com | 020 7993 2905</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#facebook" className="text-light me-3"><i className="bi bi-facebook"></i></a>
            <a href="#twitter" className="text-light me-3"><i className="bi bi-twitter"></i></a>
            <a href="#instagram" className="text-light me-3"><i className="bi bi-instagram"></i></a>
            <a href="#email" className="text-light"><i className="bi bi-envelope"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
