import React from 'react'
import building from '../images/assets/Client-First - IMAGES/white-concrete-building-1838640.svg'
import './features.css'

function FeaturesPost() {
  return (
    <div className="container my-5">
    <div className="row parente ">
      {/* Featured Post */}
      <div className="col-lg-8 featureCarde">
        <h2 className="fw-bold mb-4">Featured Post</h2>
        <div className="card border-0 shadow w-75">
          <img
            src={building} // Replace with your image
            alt="Featured Post"
            className="card-img-top w-100 h-100"
            style={{ objectFit: "cover" }}

          />
          <div className="card-body">
            <p className="text-muted small mb-2">
              By <strong>Author Name</strong> | May 23, 2022
            </p>
            <h5 className="card-title fw-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </h5>
            <p className="card-text text-muted">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <a href="#" className="btn btn-warning fw-bold px-4" style={{backgroundColor:'#FFD050'}}>
              Read More 
            </a>
          </div>
        </div>
      </div>

      {/* All Posts */}
      <div className="col-lg-4 ">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold ">All Posts</h2>
          <a href="#" className="text-decoration-none  fw-bold" style={{color:'#592EA9'}}>
            View All
          </a>
        </div>
        <ul className="list-unstyled">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <li key={index} className="mb-4 " style={{fontSize:'28px'}}> 
                <p className="text-muted small mb-1" style={{fontSize:'18px'}}>
                  By Author {index + 1} | Aug 23, 2023
                </p>
                <h6 className="fw-bold mb-0" style={{fontSize:'28px'}}>
                  8 Figma design systems that you can download for free today.
                </h6>
              </li>
            ))}
        </ul>
      </div>
    </div>
  </div>  )
}

export default FeaturesPost