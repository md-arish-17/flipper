import React from 'react'
import Header from '../Header/Header'
import BlogHome from './BlogHome'
import BlogPostSection from './BlogPostSection'
import BlogPostCard from './BlogPostCard'
import JoinPart from '../Blog/JoinPart'
import Footer  from '../Footer/Footer'


function BlogPost() {
  return (
    <div>
        <Header/>
        <BlogHome/>
        <BlogPostSection/>
        <BlogPostCard/>
        <JoinPart/>
        <Footer/>
    </div>
  )
}

export default BlogPost