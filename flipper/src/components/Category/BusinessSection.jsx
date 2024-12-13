import React from "react";

function BusinessSection() {
  return (
    <div
      className="container-fluid d-flex flex-column align-items-center justify-content-center text-center py-5 vh-100"
      style={{ backgroundColor: "#f8f9fa", minHeight: "200px" }}
    >
      {/* Section Title */}
      <h1 className="fw-bold mb-3" style={{color:"#232536",fontFamily:"sans-serif"}}>Business</h1>

      {/* Description */}
      <p className="" style={{ maxWidth: "600px",color:"#6D6E76",fontFamily:"Inter" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </p>

      {/* Breadcrumb */}
      <p className="text-uppercase text-muted mt-4" style={{ letterSpacing: "0.5px",color:"#4C4C4C",fontWeight:"bold",fontFamily:"sans-serif" }}>
        Blog &gt; Business
      </p>
    </div>
  );
}

export default BusinessSection;
