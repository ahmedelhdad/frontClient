import React from 'react'
import Navbar from './Navbar'
import Taskbar from './Taskbar'
import Footer from './Footer'
import Copyright from './Copyright'
const Founded = () => {
  return (
    <div className='bg-white'>
      <Taskbar />
      <Navbar />
      <div className='text-center py-40 text-2xl font-bold text-gray-600'>
        <h2>404!</h2>
        <p>Page not found</p>
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Founded