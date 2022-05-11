import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AdminPrivateRoute = ({admin}) => {
    return admin ? <Outlet /> : <Navigate to="/admin/sign-in" />
}

export default AdminPrivateRoute
