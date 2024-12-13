import React from 'react'
import Header from '../Header/Header'
import HomePageImg from './HomePageImg'
import FeaturesPost from './FeaturesPost'
import Community from './Community'
import Story from './Story'
import ListAuthor from './ListAuther'
import JoinPart from '../Blog/JoinPart'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
        <Header/>
        <HomePageImg/>
        <FeaturesPost/>
        <Community/>
        <Story/>
        <ListAuthor/>
        <JoinPart/>
        <Footer/>
    </div>
  )
}

export default Home