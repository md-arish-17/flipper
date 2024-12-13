import React from 'react'
import people from '../images/assets/Client-First - IMAGES/photo-of-people-doing-handshakes-3183197.svg'
import twowomen from '../images/assets/Client-First - IMAGES/two-women-in-front-of-dry-erase-board-1181533.svg'
import glass from '../images/assets/Client-First - IMAGES/photo-of-woman-looking-at-man-3183173.svg'
import manblue from '../images/assets/Client-First - IMAGES/photo-of-people-walking-on-hallway-3182811.svg'

function MultiplePost() {
  return (
    <div className="container my-5">
    {/* Heading */}
    <h1 className="fw-bold mb-4" style={{color:"#232536"}}>All posts</h1>

    {/* Posts */}
    <div className="row gy-4">
      {/* Post 1 */}
      <div className="col-md-12 d-flex">
        <img
          src={twowomen}
          alt="Post 1"
          className="img-fluid rounded me-3"
          style={{ width: "40%" }}
        />
        <div>
          <p className="text-uppercase fw-bold mb-1" style={{color:"#592EA9",fontFamily:"sans-serif"}}>Startup</p>
          <h5 className="fw-bold" style={{fontFamily:"sans-serif"}}>
            Design tips for designers that cover everything you need
          </h5>
          <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>

      {/* Post 2 */}
      <div className="col-md-12 d-flex">
        <img
          src={people}
          alt="Post 2"
          className="img-fluid rounded me-3"
          style={{ width: "40%" }}
        />
        <div>
          <p className="text-uppercase fw-bold mb-1" style={{color:"#592EA9",fontFamily:"sans-serif"}}>Business</p>
          <h5 className="fw-bold" style={{fontFamily:"sans-serif"}}>
            How to build rapport with your web design clients
          </h5>
          <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
       {/* Post 3 */}
       <div className="col-md-12 d-flex">
        <img
          src={glass}
          alt="Post 2"
          className="img-fluid rounded me-3"
          style={{ width: "40%" }}
        />
        <div>
          <p className="text-uppercase fw-bold mb-1" style={{color:"#592EA9",fontFamily:"sans-serif"}}>StartUp</p>
          <h5 className="fw-bold" style={{fontFamily:"sans-serif"}}>
        Logo design trends to avoid in 2022
          </h5>
          <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
         {/* Post 4 */}
         <div className="col-md-12 d-flex">
        <img
          src={manblue}
          alt="Post 2"
          className="img-fluid rounded me-3"
          style={{ width: "40%" }}
        />
        <div>
          <p className="text-uppercase fw-bold mb-1" style={{color:"#592EA9",fontFamily:"sans-serif"}}>Technology</p>
          <h5 className="fw-bold" style={{fontFamily:"sans-serif"}}>
             8 Figma design system you can download for free today
          </h5>
          <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
         {/* Post 5 */}
         <div className="col-md-12 d-flex">
        <img
          src={twowomen}
          alt="Post 2"
          className="img-fluid rounded me-3"
          style={{ width: "40%" }}
        />
        <div>
          <p className="text-uppercase fw-bold mb-1" style={{color:"#592EA9",fontFamily:"sans-serif"}}>Economy</p>
          <h5 className="fw-bold" style={{fontFamily:"sans-serif"}}>
            Font size in ui design:the complete guide to follow
          </h5>
          <p className="" style={{color:"#6D6E76",fontFamily:"Inter"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default MultiplePost