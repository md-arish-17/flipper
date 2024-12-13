import React from "react";
import backgroundImg from "../images/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"; // Replace with your actual image path

function AboutUsHome() {
  return (
    <div className="container my-5 position-relative" style={{ top: "150px" }}>
      {/* About Us Section */}
      <div className="row mb-5 position-relative">
        <div className="col-md-6 position-absolute" style={{ zIndex: 2, top: "-100px", left: "50px" }}>
          <div className="bg-white p-4 shadow" style={{ borderRadius: "8px" }}>
            <p className="text-uppercase text-muted">About us</p>
            <h2 className="fw-bold">
              We are a team of <br /> content writers who <br /> share their learnings
            </h2>
            <p className="text-muted mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="col-md-12">
          <img
            src={backgroundImg}
            alt="Background"
            className="w-100"
            style={{ height: "300px", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="row mb-5 text-center">
        <div className="col-md-4">
          <div
            className="py-4 rounded shadow"
            style={{
              backgroundColor: "#FFC107",
              color: "black",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="fw-bold mb-0">12+</h3>
            <p className="mb-0">Blogs Published</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="py-4 rounded shadow"
            style={{
              backgroundColor: "#FFC107",
              color: "black",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="fw-bold mb-0">18K+</h3>
            <p className="mb-0">Views on Finsweet</p>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className="py-4 rounded shadow"
            style={{
              backgroundColor: "#FFC107",
              color: "black",
              height: "120px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="fw-bold mb-0">30K+</h3>
            <p className="mb-0">Total active users</p>
          </div>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="row" style={{marginBottom:"25vh"}}>
        <div className="col-md-6 mb-4">
          <h4 className="fw-bold">Our Mission</h4>
          <p className="text-muted">
            Creating valuable content for creatives all around the world
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="col-md-6">
          <h4 className="fw-bold">Our Vision</h4>
          <p className="text-muted">
            A platform that empowers individuals to improve
          </p>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsHome;