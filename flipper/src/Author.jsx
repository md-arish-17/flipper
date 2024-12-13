import React from 'react'
import "./Author.css"
import baker from "./components/images/assets/Client-First - IMAGES/content-baker-with-delicious-puff-in-cafeteria-6205509.svg"
import fashion from "./components/images/assets/Client-First - IMAGES/fashion-woman-cute-shoes-5704849.svg"
import blackYellow from "./components/images/assets/Client-First - IMAGES/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.svg"
import women from "./components/images/assets/Client-First - IMAGES/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.svg"
import insta from "./components/images/assets/Client-First - icons/Negative (2).svg"
import linkeIn from "./components/images/assets/Client-First - icons/Negative (3).svg"
import facebook from "./components/images/assets/Client-First - icons/Negative.svg"
import twitter from "./components/images/assets/Client-First - icons/Negative (4).svg"

const Author = () => {
  return (
    <div>
        <div className="authorSec">
            <div>
                <h2>List of Authors</h2>
            </div>
            <div className="authorContainer">
                <div className="authorCard">
                   <img src={baker} alt="" />
                   <h2>Floyd Miles</h2>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <div className="authorSocial">
                      <img src={facebook} alt="" />
                      <img src={twitter} alt="" />
                      <img src={linkeIn} alt="" />
                      <img src={insta} alt="" />
                   </div>
                </div>
                <div className="authorCard">
                   <img src={fashion} alt="" />
                   <h2>Dianne Russell</h2>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <div className="authorSocial">
                      <img src={facebook} alt="" />
                      <img src={twitter} alt="" />
                      <img src={linkeIn} alt="" />
                      <img src={insta} alt="" />
                   </div>
                </div>
                <div className="authorCard">
                   <img src={blackYellow} alt="" />
                   <h2>Jenny Wilson</h2>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <div className="authorSocial">
                      <img src={facebook} alt="" />
                      <img src={twitter} alt="" />
                      <img src={linkeIn} alt="" />
                      <img src={insta} alt="" />
                   </div>
                </div>
                <div className="authorCard">
                   <img src={women} alt="" />
                   <h2>Leslie Alexander</h2>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <div className="authorSocial">
                      <img src={facebook} alt="" />
                      <img src={twitter} alt="" />
                      <img src={linkeIn} alt="" />
                      <img src={insta} alt="" />
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Author