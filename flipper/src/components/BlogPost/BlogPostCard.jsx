import React from "react";
import first from '../images/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533-1.svg'
import second from '../images/assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg'
import third from '../images/assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg'
import "./BlogPostCard.css"

function BlogPostCard() {
  const articles = [
    {
      img: first, // Replace with actual image URLs
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      img: second,
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      img: third,
      author: "John Doe",
      date: "Aug 23, 2021",
      title: "A UX Case Study Creating a Studious Environment for Students:",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    },
  ];

  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4" style={{color:"#232536",fontFamily:"sans-serif"}}>What to read next</h2>
      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 w-100 card2">
              <img
                src={article.img}
                className="card-img-top w-100"
                alt="Article"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="mb-1"  style={{color:"#6D6E76",fontFamily:"sans-serif",fontWeight:"bold"}}>
                  By <span className="" style={{color:"#592EA9"}}>{article.author}</span> |{" "}
                  {article.date}
                </p>
                <h5 className="card-title fw-bold"  style={{color:"#232536",fontFamily:"sans-serif"}}>{article.title}</h5>
                <p className="card-text text-muted"  style={{color:"#232536",fontFamily:"Inter"}}>{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPostCard;
