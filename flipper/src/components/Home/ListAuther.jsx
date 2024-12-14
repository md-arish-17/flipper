import React from "react";
import first from '../images/assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg'
import second from '../images/assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083 (2).svg'
import third from '../images/assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg'
import fourth from '../images/assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg'
import "./ListAuther.css"
import logo1 from "../images/assets/Client-First - IMAGES/Logo 1.svg"
import logo2 from "../images/assets/Client-First - IMAGES/Logo 2.svg"
import logo3 from "../images/assets/Client-First - IMAGES/Logo 3.svg"
import logo4 from "../images/assets/Client-First - IMAGES/Logo 4.svg"
import logo5 from "../images/assets/Client-First - IMAGES/Logo 5.svg"


function ListAuthor() {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className="container py-5">
    {/* Title */}
    <h2 className="text-center mb-4">List of Authors</h2>
  
    {/* Authors Section */}
    <div className="row text-center allAuther">
      {[
        {
          name: "Floyd Miles",
          image: first,
          role: "Content Writer @Company",
        },
        {
          name: "Dianne Russell",
          image: second,
          role: "Content Writer @Company",
        },
        {
          name: "Jenny Wilson",
          image: third,
          role: "Content Writer @Company",
        },
        {
          name: "Leslie Alexander",
          image: fourth,
          role: "Content Writer @Company",
        },
      ].map((author, index) => (
        <div className="col-md-3 col-sm-6 mb-4 " key={index}>
          <div className="card w-100 " id="authorCard" style={{backgroundColor:"#F4F0F8",border:"none"}}>
            {/* Author Image */}
            <img
              src={author.image}
              alt={author.name}
              className="card-img-top rounded-circle mx-auto mt-3"
              style={{ width: "100px", height: "100px" }}
            />
            {/* Author Details */}
            <div className="card-body">
              <h5 className="card-title">{author.name}</h5>
              <p className="text-muted">{author.role}</p>
              {/* Social Media Icons */}
              <div className="d-flex justify-content-center gap-3">
                <a href="#" className="text-muted">
                  <i className="bi bi-facebook fs-5"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-twitter fs-5"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-instagram fs-5"></i>
                </a>
                <a href="#" className="text-muted">
                  <i className="bi bi-linkedin fs-5"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/* Logos Section */}
    <div className="text-center mt-5">
      <p className="text-muted">We are Featured in</p>
      <div className="d-flex justify-content-center flex-wrap gap-3">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo}
                            alt={`Logo ${index + 1}`}
                            className="img-fluid"
                            style={{ maxHeight: "50px" }}
                        />
                    ))}
                </div>
    </div>
  </div>
  );
}

export default ListAuthor;
