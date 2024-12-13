import React from "react";
import postImage1 from "../images/assets/Client-First - IMAGES/stained-glass-high-rise-building-1106476.svg"; // Replace with actual image path
import postImage2 from "../images/assets/Client-First - IMAGES/man-in-black-crew-neck-t-shirt-sitting-beside-woman-in-gray-crew-neck-t-shirt-3153201.svg"; // Replace with actual image path

function AutherPost() {
  const posts = [
    {
      category: "Business",
      title: "Font sizes in UI design: The complete guide to follow",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: postImage1,
    },
    {
      category: "Economy",
      title: "How to build rapport with your web design clients",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: postImage2,
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4" style={{color:"#232536",fontFamily:"sans-serif"}}>My Posts</h2>
      {posts.map((post, index) => (
        <div
          className="row align-items-center mb-5"
          key={index}
        >
          {/* Image Section */}
          <div className="col-md-5">
            <img
              src={post.image}
              alt={post.title}
              className="img-fluid rounded shadow"
              style={{ width: "100%", objectFit: "cover", height: "250px" }}
            />
          </div>

          {/* Content Section */}
          <div className="col-md-7">
            <p className="text-uppercase fw-bold" style={{color:"#592EA9",fontFamily:"sans-serif"}} >{post.category}</p>
            <h3 className="fw-bold" style={{color:"#232536",fontFamily:"sans-serif"}}>{post.title}</h3>
            <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>{post.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AutherPost;
