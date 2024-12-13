import React from "react";

function ContactHome() {
  return (
    <div className="container my-5" >
      {/* Header Section */}
      <div className="text-center mb-5" style={{marginTop:'170px'}}>
        <h6 className="text-uppercase" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bolder"}}>Contact Us</h6>
        <h2 className="fw-bold" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bolder"}}>Let’s Start a Conversation</h2>
        <p className="text-muted" style={{color:"#6D6E76",fontFamily:"Inter"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim.
        </p>
      </div>

      {/* Info Section */}
      <div
        className="row justify-content-center align-items-center p-4  mb-4"
        style={{ backgroundColor: "#592EA9", color: "#F4F4F4" }}
      >
        <div className="col-md-6 text-center text-md-start "
        style={{paddingTop:'25px'}}
        >
          <h6 className="fw-bold" style={{fontFamily:"sans-serif",color:"#F4F4F4"}}>Working hours</h6>
          <div className="col-12 ">
          <hr style={{ borderTop: "2px solid white", opacity: 0.9}} />
        </div>
          <p  style={{fontFamily:"Inter",color:"#F4F4F4"}}>
            Monday To Friday
            <br />
            9:00 AM to 8:00 PM
          </p>
          <p  style={{fontFamily:"Inter",color:"#F4F4F4"}}>Our Support Team is available 24/7</p>
        </div>
        
        <div className="col-md-6 text-center text-md-start">
          <h6 className="fw-bold"  style={{fontFamily:"sans-serif",color:"#F4F4F4"}}>Contact Us</h6>
          <div className="col-12">
          <hr style={{ borderTop: "2px solid white", opacity: 0.9}} />
        </div>
          <p style={{fontFamily:"Inter",color:"#F4F4F4"}}>020 7993 2905</p>
          <p style={{fontFamily:"Inter",color:"#F4F4F4"}}>hello@finsweet.com</p>
        </div>
      </div>

      {/* Form Section */}
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-3">
          <select className="form-select" required>
            <option value="" disabled selected>
              Query Related
            </option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="4"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-warning w-100 fw-bold text-dark"  style={{fontFamily:"sans-serif",backgroundColor:"#FFD050"}}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactHome;
