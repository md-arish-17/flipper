import React from "react";
import twoImg from '../images/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
import starup from '../images/assets/Client-First - icons/Icon (2).svg'
import business from '../images/assets/Client-First - icons/Icon-1.svg'
import economy from '../images/assets/Client-First - icons/icon.svg'
import technology from '../images/assets/Client-First - icons/business-and-trade 1.svg'

function CategoryPage() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Blog Posts Section */}
        <div className="col-lg-8">
          {[1, 2, 3].map((_, index) => (
            <div className="d-flex mb-4" key={index}>
              <img
                src={twoImg}
                alt="Blog Thumbnail"
                className="img-fluid me-3"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
              <div>
                <p className="text-uppercase fw-bold" style={{color:"#592EA9",fontFamily:"sans-serif"}}>Business</p>
                <h5 className="fw-bold" style={{color:"#232536",fontFamily:"sans-serif"}}>
                  {index === 0
                    ? "Top 6 free website mockup tools 2022"
                    : index === 1
                    ? "Step-by-step guide to choosing great font pairs"
                    : "Ten free Google fonts that you should use"}
                </h5>
                <p className="text-muted" style={{color:"#6D6E76",fontFamily:"Inter"}}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Non blandit massa enim nec.
                </p>
              </div>
            </div>
          ))}
        </div>

  {/* Sidebar Section */}
<div className="col-lg-4">
  {/* Categories Section */}
 {/* Categories Section */}
{/* Categories Section */}
<div className="mb-5">
  <h5 className="fw-bold mb-3">Categories</h5>
  {[
    { name: "Startup", icon: starup },
    { name: "Business", icon: business },
    { name: "Economy", icon: economy },
    { name: "Technology", icon: technology },
  ].map((category, index) => (
    <div
      className={`d-flex align-items-center p-3 mb-3 rounded shadow-sm ${
        index === 0 ? "bg-warning text-dark" : "bg-white"
      }`}
      style={{ cursor: "pointer" }}
      key={index}
    >
      <div
        className="icon-wrapper d-flex justify-content-center align-items-center me-3"
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "white",
          borderRadius: "5%", // Makes wrapper look rounded
          overflow: "hidden", // Ensures icons respect wrapper boundaries
        }}
      >
        <img
          src={category.icon}
          alt={category.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain", // Ensures SVG icons scale uniformly
          }}
        />
      </div>
      <span className="fw-bold">{category.name}</span>
    </div>
  ))}
</div>



  {/* Tags Section */}
  <div>
    <h5 className="fw-bold mb-3">All Tags</h5>
    {["Business", "Experience", "Screen", "Technology", "Marketing", "Life"].map(
      (tag, index) => (
        <span
          key={index}
          className="badge bg-light text-dark me-2 mb-2 p-2 shadow-sm"
          style={{ cursor: "pointer" }}
        >
          {tag}
        </span>
      )
    )}
  </div>
</div>
      </div>
    </div>
  );
}

export default CategoryPage;
