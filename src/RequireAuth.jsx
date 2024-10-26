import React from 'react'
import Cookies from 'js-cookie'
import { Outlet, Navigate } from 'react-router-dom';

export default function RequireAuth() {
    const token = Cookies.get('token');
  return (
    token ? <Outlet/> : <Navigate to={'/login'} replace={true} />
  )
}
