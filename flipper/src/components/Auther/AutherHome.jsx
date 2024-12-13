import React from "react";
import profileImg from "../images/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984 (2).svg"; // Replace with the actual path to your image
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function AutherHome() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Profile Image */}
        <div className="col-md-4 text-center">
          <img
            src={profileImg}
            alt="Author"
            className="img-fluid  shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>

        {/* Text Section */}
        <div className="col-md-8">
          <h1 className="fw-bold" style={{color:"#232536",fontFamily:"sans-serif"}}>Hey there, I’m Andrew Johnson</h1>
          <h2 className="fw-bold" style={{color:"#232536",fontFamily:"sans-serif"}}>and welcome to my Blog</h2>
          <p className="mt-3 "  style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>

          {/* Social Media Icons */}
          <div className="mt-4">
            <a
              href="https://facebook.com"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-dark me-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-dark"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "1.5rem" }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Bars */}
      <div className="mt-5 d-flex">
        <div
          className="flex-grow-1"
          style={{ height: "10px", backgroundColor: "#f0a500" }}
        ></div>
        <div
          className="flex-grow-1"
          style={{ height: "10px", backgroundColor: "#6f42c1" }}
        ></div>
      </div>
    </div>
  );
}

export default AutherHome;
