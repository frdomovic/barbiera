import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getAdminStatus } from './SessionFunctions'
const PrivateRoute = () => {
  return getAdminStatus() ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoute
