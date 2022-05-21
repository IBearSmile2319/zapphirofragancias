import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const AdminPrivateRoute = ({ admin }) => {
    const location = useLocation();
    return admin ? <Outlet /> : <Navigate to="/admin/sign-in" state={
        {
            from: location
        }
    }
        replace
    />
}

export default AdminPrivateRoute
