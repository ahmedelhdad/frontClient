import React,{useEffect} from 'react'
import imgs from '../Website/image/banner-bg.jpg'
import { Link } from 'react-router-dom'
import { useDispatch} from "react-redux";
import {LOGIN} from '../ReduxToolkit/slice/sliceUser'
import axios from 'axios'
const Landing = () => {
  const dispatch =useDispatch()

  // User Token 
  useEffect(() => {
   
      const getUser = async() => 
    {
      const config = { headers: { 'Authorization':JSON.parse(window.localStorage.getItem('token')) } };
      const res = await axios.get('https://rafcartpp.onrender.com/auth',config)
      dispatch(LOGIN(res.data))
    }
     getUser()
     
   
  },[dispatch])
  return (
    <div className=" bg-no-repeat bg-cover bg-center py-36" style={{backgroundImage:`url(${imgs})`}} >
    <div className="container">
      <div className=" flex flex-col w-1/2 justify-center">
        <h1 className="text-5xl font-bold text-gray-800 capitalize ">
          Best Collection For <br/>
          Home Decoration
        </h1>
        <p className="py-6 text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro odio cum nostrum quos dolorum alias in </p>
        <Link to="/Shop" className="py-3 px-4 rounded-md border border-primary text-white uppercase transition bg-primary hover:bg-transparent w-fit">shop now</Link>
      </div>
    </div>
  </div>
  )
}

export default Landing
