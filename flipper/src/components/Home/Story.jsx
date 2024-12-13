import React from "react";
import img from "../images/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg";
import './story.css'

function Story() {
  return (
    <div
      className="container my-5"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container my-5" style={{ position: "relative", overflow: "hidden" }}>
  <div className="row align-items-center flex-md-row flex-column">
    {/* Left Side: Image */}
    <div className="col-md-6 col-12 mb-4 mb-md-0 imgCls">
      <img
        src={img}
        alt="Story"
        className="img-fluid w-100"
        style={{ borderRadius: "0px" }}
      />
    </div>

    {/* Right Side: Text */}
    <div className="col-md-6 col-12 content">
      <h6 className="text-uppercase fw-bold text-muted mb-2">Why We Started</h6>
      <h2 className="fw-bold mb-3">It started out as a simple idea and evolved into our passion</h2>
      <p className="text-muted mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <button
        className="btn btn-warning fw-bold text-dark px-5 py-2"
        style={{ borderRadius: "5px" }}
      >
        Discover our story
      </button>
    </div>
  </div>
</div>


      {/* Add responsiveness using media queries */}
      <style jsx>{`
        @media (max-width: 768px) {
          .col-md-6:last-child {
            position: relative !important;
            top: auto;
            right: auto;
            transform: none;
            max-width: 100%;
            margin-top: 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Story;
