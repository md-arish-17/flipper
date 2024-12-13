import React from 'react'
import logo from "../images/assets/Client-First - IMAGES/Logo.svg"
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
    {/* Navbar */}
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#232536"}}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to='/' style={{fontFamily:"Inter"}}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/blog' style={{fontFamily:"Inter"}}>
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/about' style={{fontFamily:"Inter"}}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to='/contact' style={{fontFamily:"Inter"}}>
                Contact Us
              </Link>
            </li>
          </ul>
          <button className="btn btn-light ms-3" style={{borderRadius:4,fontWeight:"bold",color:"#6D6E76"}} >Subscribe</button>
        </div>
      </div>
    </nav>
  </div>  )
}

export default Header