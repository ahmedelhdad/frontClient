import React from 'react'
import Taskbar from './Taskbar'
import Navbar from './Navbar'
import Landing from './Landing'
import Login from './Login'
import Register from './Register'
import Service from './Service'
import Gallery from './Gallery'
import Arrival from './Arrival'
import Section from './Section'
import Recomended from './Recomended'
import Footer from './Footer'
import Copyright from './Copyright'
import Product from './Product'
import Cart from './Cart'
import Wish from './Wish'
import Search from './Search'
import PageProducts from './PageProducts'
import Founded from './Founded'
import Shop from './Shop'
import About from './About'
import Contact from './Contact'
import ShoppingInfo from './ShoppingInfo'
const Website = () => {
  return (
    <div className='bg-white  overflow-hidden'>
    <Landing/>
    <Service/>
    <Gallery/>
    <Arrival/>
    <Section/>
    <Recomended/>
    </div>
  )
}

export {Founded,Contact ,Navbar,About,Landing,Register,Taskbar,Login,Footer,Copyright,Product ,Cart ,Wish,Search ,PageProducts ,Shop , ShoppingInfo}
export default Website