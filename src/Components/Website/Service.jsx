import React from 'react'
import delivery from './image/icons/delivery-van.svg'
import Money from './image/icons/money-back.svg'
import hours from './image/icons/service-hours.svg'
const Service = () => {
  return (
    <div className="container py-14 ">
      <div className="grid grid-cols-1 text-gray-600 md:grid-cols-2 lg:grid-cols-3  w-10/12 mx-auto  gap-8 ">
        <div className="border border-primary py-6  rounded-md  space-x-4 px-3 flex justify-center items-center">
          <img src={delivery} alt="" />
          <div>
            <h4 className="font-bold text-gra ">Free Shipping</h4>
            <span className="text-gray-400">Order over $200</span>
          </div>
        </div>
        <div className="border border-primary py-6  space-x-4 px-3 flex justify-center items-center">
          <img src={Money} alt=""/>
          <div>
            <h4 className="font-bold ">Money Returns</h4>
            <span className="text-gray-400">30 days money return</span>
          </div>
        </div>
        <div className="border border-primary py-6 space-x-4 px-3 flex justify-center items-center">
          <img src={hours} alt=""/>
          <div>
            <h4 className="font-bold ">24/7 Support</h4>
            <span className="text-gray-400">Customer Suppart</span>
          </div>
        </div>
    
      </div>
    </div>
  )
}

export default Service
