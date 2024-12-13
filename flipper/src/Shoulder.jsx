import React from 'react'
import "./Shoulder.css"
import shoulder from "./components/images/assets/Client-First - IMAGES/close-up-photography-of-man-wearing-sunglasses-1212984.svg"
import { MdKeyboardArrowRight } from "react-icons/md";
import Author from './Author';

const Shoulder = () => {
  return (
    <>
    <div id='shoulderSec'>
        <div id=''>
            <img src={shoulder} alt="" id='shoulderImg'/>
        </div>
        <div id='shoulderDesc'>
            <h3>why we started</h3>
            <h1>It started out as a simple idea and evolve into our passion</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maxime deserunt ullam, voluptatem molestiae nemo aliquid, repellendus odio voluptates porro deleniti consequuntur incidunt, inventore facilis. Placeat, rerum! Recusandae, fuga fugit.</p>
            <button id='discoverBtn'>
              Discover our story
              <MdKeyboardArrowRight id='icon'/>
            </button>
        </div>
    </div>
    <Author/>
    </>
  )
}

export default Shoulder