import React from 'react'
import Header from '../Header/Header'
import AutherHome from './AutherHome'
import AutherPost from './AutherPost'
import Footer    from  '../Footer/Footer'

function Auther() {
  return (
    <div>
        <Header/>
        <AutherHome/>
        <AutherPost/>
        <Footer/>
    </div>
  )
}

export default Auther