import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router'
import { getAdminStatus, getToken } from './SessionFunctions'

const PrivateRoute = () => {
  const location = useLocation()

  return getAdminStatus() ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default PrivateRoute
