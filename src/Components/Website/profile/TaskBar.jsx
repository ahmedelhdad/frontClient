import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const TaskBar = () => {
    const user = useSelector((state) => state.user.user);

    return (
        <div className=" col-span-2  ">
          <div className="container flex items-center py-4 gap-3">
            <Link to="/" className="text-primary hover:text-gray-400 transition">
              <i className="fas fa-home"></i>
            </Link>
            <div className="text-sm text-gray-400">
              <span>
                <i className="fas fa-chevron-right"></i>
              </span>
            </div>
            <p className="text-gray-600 font-medium uppercase">Account</p>
          </div>
    
          <div className="container grid grid-cols-1  gap-6 pt-4 pb-16 ">
            <div className="col-span-1">
              <div className="flex items-center gap-4   px-4 py-3 shadow">
                <div className="flex-shrink-0">
                  <img
                    src={user.img}
                    className="rounded-full 2-14 h-14 border-gray-200 p-1 object-cover"
                    alt=""
                  />
                </div>
                <div className="flex-grow-0 hidden xl:block">
                  <h2>Hello,</h2>
                  <span className="text-md font-bold">{user.name}</span>
                </div>
              </div>
              <div className="bg-white flex flex-col text-gray-600 space-y-4 rounded  p-4 ">
                <div className="space-y-1 flex justify-center items-center w-20 xl:w-full pl-8 shadow p-3">
                  <Link
                    to="/profile"
                    className="hover:text-primary relative block font-medium capitalize"
                  >
                    <span className="absolute -left-8 top-0 text-base ">
                      <i className="far fa-address-card"></i>
                    </span>
                    <span className="hidden xl:block">Profile information</span> 

                  </Link>
                </div>
                <div className="space-y-1 pl-4 shadow py-3 flex justify-center items-center w-20 xl:w-full">
                  <Link
                    to="Order"
                    className="hover:text-primary relative block font-medium capitalize"
                  >
                    <span className="absolute -left-8 top-0 text-base ">
                      <i className="fa-thin fa-bag-shopping"></i>
                    </span>
                    <span className="hidden xl:block">My Order History</span> 

                    
                  </Link>
                </div>
     
    
              
              </div>
            </div>
          </div>
        </div>
      );
}

export default TaskBar
