import React from 'react'
import MultiplePost from './MultiplePost'
import Categories from './Categories'
import JoinPart from './JoinPart'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import img from '../images/assets/Client-First - IMAGES/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.svg'
import { Link } from 'react-router-dom'


function Blog() {
  return (
    <>
    <Header/>
      {/* Featured Post Section */}
      <div className="container " style={{backgroundColor:'#f0f0f5' ,padding : "100px"}}>
      <div className="row align-items-center">
        {/* Text Section */}
        <div className="col-lg-6">
          <p className="text-uppercase fw-bold" style={{fontFamily:"sans-serif", color:"#4C4C4C"}}>Featured Post</p>
          <h2 className="fw-bold" style={{fontFamily:"sans-serif", color:"#232536"}}>
            Step-by-step guide to choosing great font pairs
          </h2>
          <p className="" style={{fontFamily:"Inter" , color:"#4C4C4C",fontWeight:"bold"}}>
            By <span className="" style={{color:"#592EA9"}}>John Doe</span> | May 23, 2022
          </p>
          <p style={{fontFamily:"Inter", color:"#4C4C4C"}}>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Link to='/blogpost'>
          <button className="btn " style={{backgroundColor:"#FFD050", fontWeight:"bold",borderRadius:0}}>Read More </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="col-lg-6">
          <img
            src={img}
            alt="Featured"
            className="img-fluid "
            style={{
              height:'100%',
              width : '100%'
            }}
          />
        </div>
      </div>
    </div>
    <MultiplePost/>
    <Categories/>
    <JoinPart/>
    <Footer/>
    </>
  )
}

export default Blog