import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const AuthLoRe = ({ Component }) => {
  const route = useNavigate()
  const user = useSelector((state) => state.user.user)
  useEffect(() => {
    if (user.role) {
      route('/')
    }
  }, [user,route])
  return (
    <Component />
  )
}

export default AuthLoRe
