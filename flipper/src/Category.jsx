import React from 'react'
import "./Category.css"
import building from "./components/images/assets/Client-First - icons/Icon-1.svg"
import rocket from "./components/images/assets/Client-First - icons/Icon (2).svg"
import analytic from "./components/images/assets/Client-First - icons/icon.svg"
import brain from "./components/images/assets/Client-First - icons/business-and-trade 1.svg"
import Shoulder from './Shoulder'


const Category = () => {
  return (
    <>
    <div id='cardSec'>
        <div id='cardUpHead'>
            <h1>Choose A Category</h1>
        </div>
        <div id='cardConatiner'>
            <div className='card'>
                <div id='imgCont'>
                   <img src={building} alt="" />
                </div>
                <h2>Business</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='card'>
            <div id='imgCont'>
                   <img src={rocket} alt="" />
                </div>                
                <h2>Startup</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='card'>
                <div id='imgCont'>
                   <img src={analytic} alt="" />
                </div>                
                <h2>Economy</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='card'>
                <div id='imgCont'>
                   <img src={brain} alt="" />
                </div>         
                <h2>Technology</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    </div>

    <Shoulder/>
    </>
  )
}

export default Category