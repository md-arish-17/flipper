import React from 'react';
import bussiness from '../images/assets/Client-First - icons/Icon-1.svg'
import startUps from '../images/assets/Client-First - icons/Icon (2).svg'
import economy from '../images/assets/Client-First - icons/icon.svg'
import technology from '../images/assets/Client-First - icons/business-and-trade 1.svg'
import './style.css'

function Community() {
  return (
    <div className="container my-5">
      {/* About Us and Our Mission Section */}
      <div >
      <div style={{ position: "relative", marginTop: "250px", backgroundColor: "#f8f4f4", padding: "100px" }}>
  <div style={{ position: "absolute", top: "0", left: "0", height: "5px", width: "100%",display:'flex' }}>
    <div  className='yellow-line'></div>
    <div className='violet-line'></div>
  </div>

  <div className="row align-items-center mb-5">
    <div className="col-md-6">
      <h5 className="text-uppercase fw-bold text-muted mb-2">About Us</h5>
      <h2 className="fw-bold mb-3">
        We are a community of content writers who share their learnings
      </h2>
      <p className="text-muted mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a href="#" className="text-decoration-none fw-bold " style={{color:'#592EA9'}}>
        Read More &gt;
      </a>
    </div>
    <div className="col-md-6">
      <h5 className="text-uppercase fw-bold text-muted mb-2">Our Mission</h5>
      <h2 className="fw-bold mb-3">
        Creating valuable content for creatives all around the world
      </h2>
      <p className="text-muted mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</div>

    
      {/* Choose A Category Section */}
      <h2 className="text-center fw-bold mb-5" style={{marginTop:'100px'}}>Choose A Category</h2>
      <div className="row g-4 categories audi">
  {[
    { img: bussiness, title: "Business", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { img: startUps, title: "Startup", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { img: economy, title: "Economy", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { img: technology, title: "Technology", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ].map((card, index) => (
    <div
  className="col-12 col-sm-6 col-md-4 col-lg-3"
  key={index}
>
  <div
    className="card p-3 w-100 card1 text-center"
    style={{
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.2)";
      e.currentTarget.style.backgroundColor = "#FFD050"
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.backgroundColor = "white"
    }}
  >
    <img
      src={card.img}
      alt={`${card.title} Icon`}
      className="img-fluid mx-auto"
      style={{ maxHeight: "120px" }}
    />
    <h5
      className="mt-3"
      style={{ color: "#232536", fontFamily: "sans-serif", fontWeight: "bold" }}
    >
      {card.title}
    </h5>
    <p style={{ color: "#6D6E76", fontFamily: "Inter" }}>{card.desc}</p>
  </div>
</div>

  ))}
</div>

      </div>
    </div>
  );
}

export default Community;
