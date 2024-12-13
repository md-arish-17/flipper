import React from 'react'
import { Link } from 'react-router-dom'

function JoinPart() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div className="text-center">
      <h2 className="mb-3" style={{color:"#232536", fontFamily:"sans-serif",fontWeight:"bold"}}>Join our team to be a part of our story</h2>
      <p className="mb-4 text-muted" style={{color:"#6D6E76", fontFamily:"Inter"}}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
      </p>
      <Link to='/auther'>
      <button className="btn btn-warning btn-lg" style={{backgroundColor:"#FFD050", borderRadius:0,fontWeight:"bold"}}>Join Now</button>
      </Link>
    </div>
  </div>
  )
}

export default JoinPart