import React from 'react'
import "./Button.css"
import { MdKeyboardArrowRight } from "react-icons/md";

const Button = () => {
  return (
    <div>
        <button id='readMore'>
            Read More
            <MdKeyboardArrowRight id='icon'/>
          </button>
    </div>
  )
}

export default Button