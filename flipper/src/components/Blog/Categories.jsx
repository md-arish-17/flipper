import React from 'react';
import bussinessIcon from '../images/assets/Client-First - icons/Icon-1.svg';
import "./Categories.css"

const Categories = () => {
  return (
    <div className="container my-4">
      <div className="mb-3">
        <h4 className="mb-0" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bold"}}>All Categories</h4>
      </div>
      {/* Add gap between the cards using the g-4 class */}
      <div className="row g-5"> 
        <div className="col-md-3 ">
          <div className="card p-3 w-100 card1">
            <img
              src={bussinessIcon}
              alt="Business Icon"
              className=""
            />
            <h5 className="mt-3" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bold"}}>Business</h5>
            <p style={{color:"#6D6E76", fontFamily:"Inter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        <div className="col-md-3 ">
          <div className="card p-3 w-100 card1">
            <img
              src={bussinessIcon}
              alt="Business Icon"
              className=""
            />
            <h5 className="mt-3" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bold"}}>Starup</h5>
            <p style={{color:"#6D6E76", fontFamily:"Inter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card p-3 w-100 card1">
            <img
              src={bussinessIcon}
              alt="Business Icon"
              className=""
            />
            <h5 className="mt-3" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bold"}}>Economy</h5>
            <p style={{color:"#6D6E76", fontFamily:"Inter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card p-3 w-100 card1">
            <img
              src={bussinessIcon}
              alt="Business Icon"
              className=""
            />
            <h5 className="mt-3" style={{color:"#232536",fontFamily:"sans-serif",fontWeight:"bold"}}>Technology</h5>
            <p style={{color:"#6D6E76", fontFamily:"Inter"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
