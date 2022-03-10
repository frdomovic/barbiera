import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { getAdminStatus, getToken } from './SessionFunctions'

const PublicRoute = () => {
  return getToken() ? <Navigate to='/admin-dashboard' /> : <Outlet />
}

export default PublicRoute
