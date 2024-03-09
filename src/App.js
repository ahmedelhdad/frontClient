import React from 'react'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Founded, Login, Register, About, Contact, ShoppingInfo, PageProducts, Product, Cart, Wish, Search, Shop } from './Components/Website/Website.jsx'
import Profile from './Components/Website/profile/Profile'
import Website from './Components/Website/Website.jsx';
import { Admin, AddProduct, Prouducts, ProductEdit, Order,User } from './Components/Dashboard/Deshboard'
import Deshboard from './Components/Dashboard/Deshboard'
import Home from './Home'
import Auth from './Auth.js';
import AuthLoRe from './AuthLoRe.js';
const App = () => {

  return (

    <BrowserRouter>
      <ToastContainer />
      <Routes>

        <Route path='/admin' element={<Auth Component={Deshboard}/>}>

          <Route path='/admin' element={<Admin />} />
          <Route path='dashboard' element={<Admin />} />
          <Route path='prouducts' element={<Prouducts />} />
          <Route path='/admin/prouducts/:id' element={<ProductEdit />} />
          <Route path='AddProduct' element={<AddProduct />} />
          <Route path='order' element={<Order />} />
          <Route path='users' element={<User />} />


        </Route>

        <Route path='*' element={<Founded />} />
        <Route path='/' element={<Home />} >
          <Route path='/' element={<Website />} />
          <Route path='login' element={<AuthLoRe Component={Login}/>} />
          <Route path='register' element={<AuthLoRe Component={Register} />} />
          <Route path='product/:id' element={<Product />} />
          <Route path='profile' element={<Profile />} />
          <Route path='Cart' element={<Cart />} />
          <Route path='wish' element={<Wish />} />
          <Route path='search' element={<Search />} />
          <Route path='page/:category' element={<PageProducts />} />
          <Route path='Shop' element={<Shop />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='ShoppingInfo' element={<ShoppingInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App