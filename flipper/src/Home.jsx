import React from 'react'
import "./Home.css"
import background from "./components/images/assets/Client-First - IMAGES/man-in-black-suit-wearing-eye-glasses-sitting-on-gray-sofa-using-macbook-3772622.svg"
import Button from './Button';
import Featured from './Featured';
import Minihero from './Minihero';


const Home = () => {
  return (
    <>
    <img src={background} alt="" id='img'/>
    <div id='container'>
        <div className="desc">
          <h4 id='smHead'>posted on <span id='span'>startup</span></h4>
          <h1 id='mainHead'>Step-by-step guide to choosing great font pairs</h1>
          <p id='para'>By <span id='name'>md arish</span> | 23 Nov 2003</p>
          <p id='para2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, quisquam sapiente eius numquam sit </p>
          <Button/>
        </div>
        <div>
          <Featured/>
        </div>
        <div>
          <Minihero/>
        </div>
    
        
    </div>
    </>
  )
}

export default Home