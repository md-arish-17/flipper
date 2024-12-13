import React from 'react'
import "./Featured.css"
import Button from "./Button"
import Allpost from './Allpost'
import building from "./components/images/assets/Client-First - IMAGES/white-concrete-building-1838640.svg"

const Featured = () => {
  return (
    <div id='page2'>
      <div className="featureContent">
        <h2 id='featureHeading'>Featured Post</h2>
        <div className="featuredSection">
            <img src={building} alt="" />
            <h4>By Md Arish | 23 Nov 2003</h4>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, voluptatum minus? Dolorum?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aut quos rem quaerat eaque velit? Tenetur cumque quod nesciunt neque.</p>
            <Button/>
        </div>
      </div>
      <div >
        <Allpost/>
      </div>
        
    </div>
  )
}

export default Featured