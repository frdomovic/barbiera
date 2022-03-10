import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { getAdminStatus, getToken } from './SessionFunctions'

const PrivateRoute = () => {
  const location = useLocation()
  const { token } = getToken()

  return token ? (
    <Navigate to='/admin-dashboard' state={{ from: location }} replace />
  ) : (
    <Outlet />
  )
}

export default PrivateRoute
