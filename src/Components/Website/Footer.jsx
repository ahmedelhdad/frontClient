import React from 'react'
import Logo from './image/logo.svg'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="bg-white py-16 border-t border-gray-100">
      <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6">


        <div className="space-y-4 footer">
          <Link to=""><img src={Logo} alt='' /></Link>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, esse sit </p>
          <div className="fkex items-center space-x-6">
            <Link to="" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-facebook-f" ></i>
            </Link>
            <Link to="" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-twitter" ></i>
            </Link>
            <Link to="" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-instagram" ></i>
            </Link>
            <Link to="" className="text-gray-400 hover:text-gray-500">
              <i className="fab fa-linkedin-in" ></i>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-around">
          <div className="space-y-3">
           <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div className="space-y-3">
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Marketing</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Analytics</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Commerce</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Insights</Link>
            </div>
          </div>
          <div className="space-y-3">
           <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div className="space-y-3">
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Pricing</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Documentation</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Guides</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">API Status</Link>
            </div>
          </div>
       
        </div>

        <div className="flex items-center justify-around">
          <div className="space-y-3">
           <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
            <div className="space-y-3">
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Marketing</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Analytics</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Commerce</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Insights</Link>
            </div>
          </div>
          <div className="space-y-3">
           <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
            <div className="space-y-3">
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Pricing</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Documentation</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">Guides</Link>
              <Link to="#" className="text-base text-gray-400 hover:text-gray-900 block">API Status</Link>
            </div>
          </div>
       
        </div>
      
      </div>
    </div>
  )
}

export default Footer