import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router'
import { getAdminStatus, getToken } from './SessionFunctions'

const PublicRoute = () => {
  const location = useLocation()

  return !getToken() ? (
    <Outlet />
  ) : getAdminStatus() ? (
    <Navigate to='/admin-dashboard' state={{ from: location }} replace />
  ) : (
    <Navigate to='/worker-dashboard' state={{ from: location }} replace />
  )
}

export default PublicRoute
