import React from "react";
import img from '../images/assets/Client-First - IMAGES/Image.svg'

function BlogHome() {
  return (
    <div
      className="d-flex justify-content-center align-items-center bg-light" // Center content horizontally and vertically
      style={{
        minHeight: "75vh", // Set minimum height for a balanced look
        padding: "20px",
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "600px", // Set width to control the card's size
        }}
      >
        <div className="d-flex">
          {/* Profile Picture */}
          <img
            src={img}
            alt="Author"
            className="rounded-circle me-3"
            width="40"
            height="40"
          />
          {/* Author Information */}
          <div>
            <p className="m-0 fw-bold" style={{ fontSize: "16px",color:"#592EA9",fontFamily:"sans-serif" }}>
              Andrew Jonson
            </p>
            <p className="m-0" style={{ fontSize: "14px",fontFamily:"Inter",color:"#6D6E76" }}>
              Posted on 27th January 2022
            </p>
          </div>
        </div>

        {/* Title */}
        <h2
          className="mt-3 mb-4 fw-bold"
          style={{
            fontSize: "24px", // Match the title size
            lineHeight: "1.5",
            fontFamily:"sans-serif",
            color:"#232536"
          }}
        >
          Step-by-step guide to choosing great font pairs
        </h2>

        {/* Tag */}
        <div className="d-flex align-items-center">
          <span className="me-2" style={{ fontSize: "20px" }}>
            🚀
          </span>
          <p className="m-0 fw-semibold" style={{ fontSize: "16px", fontFamily:"Inter",color:"#6D6E76" }}>
            Startup
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
