import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import bed from './image/icons/bed.svg'
import sofa from './image/icons/sofa.svg'
import office from './image/icons/office.svg'
import outdoor from './image/icons/outdoor-cafe.svg'
import Mattress from './image/icons/bed-2.svg'
import Dining from './image/icons/restaurant.svg'
import { useSelector,useDispatch } from "react-redux";
import {LOGIN} from '../ReduxToolkit/slice/sliceUser'
const Navbar = () => {
  const user = useSelector((state) => state.user.user);
  const router = useNavigate()
  const dispatch =useDispatch()
  useEffect(() => { }, [user])
  const handlerSign = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router('login')
    dispatch(LOGIN(''))
    // window.location.reload();
  };
  return (
    <div className="">
      <div className="flex md:px-10 flex-grow px-3 bg-black text-white  items-center ">
        <div className="bg-primary flex items-center p-4   cursor-pointer relative group">
          <div className="text-md"><i className="fa fa-list" aria-hidden="true"></i></div>
          <h4 className=" capitalize ml-2">all categories</h4>

          <div className="absolute left-0 top-full  z-20  divide-y divide-gray-300 divide-dashed w-full bg-white shadow-md  py-3 invisible  group-hover:visible duration-300">
            <Link to="page/Bedroom" className="flex items-center   px-6 py-3 hover:bg-gray-100 transition">
              <img src={bed} alt='' className=" w-6 h-6 object-contain" />
              <span className="ml-6  text-gray-600 text-sm">Bedroom</span>
            </Link>
            <Link to="page/Sofa" className="flex items-center   px-6 py-3 hover:bg-gray-100 transition">
              <img src={sofa} alt='' className=" w-6 h-6 object-contain" />
              <span className="ml-6  text-gray-600 text-sm">Sofa</span>
            </Link>
            <Link to="page/Office" className="flex items-center   px-6 py-3 hover:bg-gray-100 transition">
              <img src={office} alt='' className=" w-6 h-6 object-contain" />

              <span className="ml-6  text-gray-600 text-sm">Office</span>
            </Link>
            <Link to="page/Outdoor" className="flex items-center  px-6 py-3 hover:bg-gray-100 transition">
              <img src={outdoor} alt='' className=" w-6 h-6 object-contain" />

              <span className="ml-6  text-gray-600 text-sm">Outdoor</span>
            </Link>
            <Link to="page/Mattress" className="flex items-center  px-6 py-3 hover:bg-gray-100 transition">
              <img src={Mattress} alt='' className=" w-6 h-6 object-contain" />

              <span className="ml-6  text-gray-600 text-sm">Mattress</span>
            </Link>
            <Link to="page/Dinings" className="flex items-center  px-6 py-3 hover:bg-gray-100 transition">
              <img src={Dining} alt='' className=" w-6 h-6 object-contain" />

              <span className="ml-6  text-gray-600 text-sm">Dining</span>
            </Link>

          </div>



        </div>
        <div className="hidden md:flex space-x-6 ml-4 ">
          <Link to="/" className="text-gray-200 hover:text-white transition">
            Home
          </Link>
          <Link
            to="/Shop"
            className="text-gray-200 hover:text-white transition"
          >
            Shop
          </Link>
          <Link to="/about" className="text-gray-200 hover:text-white transition">
            About{" "}
          </Link>
          <Link to="/contact" className="text-gray-200 hover:text-white transition">
            Contact{" "}
          </Link>
        </div>
        <div className="ml-auto ">{user.name ? (
          <div className="flex items-center gap-3  ">
            <h5 className="text-lg capitalize">{user.name}</h5>
            <div className=" cursor-pointer w-10 h-10 group relative">
              <img
                src={user.img}
                className=" w-10 h-10 rounded-full "
                alt="profile"
              />
              <div className="absolute right-0 top-14 z-10 text-white bg-primary  opacity-0  group-hover:opacity-100   p-4 space-y-4 ">
                <Link to='/profile'>Profile</Link>
                <h1 className="cursor-pointer hover:text-gray-400 " onClick={handlerSign}>
                  logout
                </h1>
              </div>
            </div>

          </div>
        ) : (
          <div>
            <Link
              to="login"
              className="text-gray-200 hover:text-white transition"
            >
              Login
            </Link>{" "}
            /
            <Link
              to="register"
              className="text-gray-200 hover:text-white transition"
            >
              Register
            </Link>
          </div>
        )}</div>
      </div>
      <Outlet />
    </div>
  );
};

export default Navbar;
