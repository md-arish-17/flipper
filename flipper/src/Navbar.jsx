import React from 'react'
import "./Navbar.css";
import logo1 from './components/images/assets/Client-First - IMAGES/Logo.svg'
import Home from './Home';

const Navbar = () => {
  return (
    <div>
        {/* Navbar */}

        <div className='header'>
            <div className="leftSection">
                <img src={logo1} alt="" />
            </div>
            <div className="rightSection">
                <a href="">
                    <p>Home</p>
                </a>
                <a href="">
                    <p>Blog</p>
                </a>
                <a href="">
                    <p>About Us</p>
                </a>
                <a href="">
                    <p>Contact Us</p>
                </a>
                <button>Subscribe</button>
            </div>
        </div>

        {/* Home */}
        
        <Home/>

        
    </div>
  )
}

export default Navbar