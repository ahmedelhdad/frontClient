import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
const Auth = ({ Component }) => {
  const route = useNavigate()
  const user = useSelector((state) => state.user.user);
  useEffect(() => {

    if (user.role) {

    } else {
      route('/dontFound')
     
    }

  }, [user, route])
  return (
    <Component />
  )
}

export default Auth