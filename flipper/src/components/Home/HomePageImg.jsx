import React from "react";
import img from "../images/assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg";
import "./HomePageImg.css"
import arrow from "../images/assets/Client-First - icons/Arrow 1.svg"
import { Link } from "react-router-dom";

function HomePageImg() {
  return (
    <div className="position-relative bg-dark text-white">
      <img
        src={img} 
        alt="Background"
        className="w-100 homeWall"
        style={{    opacity: 0.5,
          height: "100vh",
          objectFit: "cover"}}
      />
      <div className="container position-absolute top-50 start-0 translate-middle-y">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 col-12 px-4">
            <p className="text-uppercase fw-bold small mb-2 post" style={{fontWeight:"bold",color:"#F4F4F4",fontFamily:"sans-serif"}}>Posted on Startup</p>
            <h1 className="display-4 fw-bold mb-3" style={{fontWeight:"bold",color:"#F4F4F4",fontFamily:"sans-serif"}}>
              Step-by-step guide to choosing  great font pairs
            </h1>
            <p className="mb-4" style={{color:"#F4F4F4",fontFamily:"Inter"}}>
              By <strong style={{fontWeight:"bold",color:"#FFD050",fontFamily:"sans-serif"}}>Md Arish</strong> | May 23, 2022
            </p>
            <p className="mb-4" style={{color:"#F4F4F4",fontFamily:"Inter"}}>
              Donec aliquet malesuada tincidunt. Nullam scelerisque,  turpis nec
              laoreet posuere, est lacus sodales ex, quis bibendum augue mi sit
              amet eros.
            </p>
            <Link to='/category'>
            <button
              className="btn fw-bold px-4 py-2"
              style={{ borderRadius: "0%" , backgroundColor:"#FFD050",fontFamily:"Inter" ,height:'50px', width:'130px' }}
            >
              Read Here
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePageImg;
