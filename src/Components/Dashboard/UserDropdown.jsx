import React from 'react'
import { useSelector } from 'react-redux'
const UserDropdown = () => {
  const Admin = useSelector((state) => state.user.user)
  return (
    <div>
      <img src={Admin.img} alt="" className='w-10 h-10 rounded-full ' />
    </div>
  )
}

export default UserDropdown
