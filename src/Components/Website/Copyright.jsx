import React from 'react'
import image from './image/methods.png'
const Copyright = () => {
  return (
    <div>
    <div className="bg-gray-800 py-4">
      <div className="container flex items-center justify-between">
        <p className="text-white">&copy;RAFCART - ALL Rights Reserved</p>
          <img src={image} alt='' className="h-5"/>
      </div>
    </div>
    </div>
  )
}

export default Copyright
