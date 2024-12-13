import React from 'react'
import "./Minihero.css"
import { MdKeyboardArrowRight } from "react-icons/md";
import Category from './Category';


const Minihero = () => {
  return (
    <>
    <div>
        <div id='color'>
            <div id='yellowColor'></div>
            <div id='purpleColor'></div>
        </div>
        <div id='aboutSec'>
            <div className="leftSec">
                <h4>About Us</h4>
                <h1>We are community of content writers who share their learnings</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates adipisci aliquid, dignissimos eos aut tempore repudiandae repellendus modi ex asperiores.</p>
                <button>
                    Read More
                    <MdKeyboardArrowRight />
                </button>
            </div>
            <div className="rightSec">
                <h4>Our mission</h4>
                <h2>Creating valuable content for creatives all around the world</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem molestias sequi voluptatum numquam deleniti blanditiis. Natus expedita distinctio amet suscipit porro eos a voluptatibus! Recusandae, vero? Enim, praesentium, reprehenderit dolorum itaque porro necessitatibus, delectus laudantium esse impedit voluptatem est sit?</p>
            </div>
        </div>
        <Category/>
    </div>
    </>
  )
}

export default Minihero