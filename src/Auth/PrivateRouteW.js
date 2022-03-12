import React from 'react'
import { useLocation } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router'
import { getWorkerStatus } from './SessionFunctions'

const PrivateRouteW = () => {
  const location = useLocation()

  return getWorkerStatus() ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export default PrivateRouteW
