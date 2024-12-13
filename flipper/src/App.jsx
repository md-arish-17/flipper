import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './components/Blog/Blog'
import BlogPost from './components/BlogPost/BlogPost'
import AboutUs from './components/AboutUs/AboutUs'
import Category from './components/Category/Category'
import Auther from './components/Auther/Auther'
import Contact from './components/Contact/Contact'
import PrivacyPolicy from './components/PrivayAndPolicy/PrivacyPolicy'
import Home from './components/Home/Home'

const App = () => {
  return (
    <>    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogpost' element={<BlogPost/>}/>
        <Route path='about' element={<AboutUs/>}/>
        <Route path='category' element={<Category/>} />
        <Route path='auther' element={<Auther/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
      </Routes>
    </BrowserRouter>
    
    </>

  )
}

export default App