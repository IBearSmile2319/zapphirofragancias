import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Container from '../components/Admin/Container';

const AdminPrivateRoute = ({ admin }) => {
    const location = useLocation();
    return admin ?
        <Container>
            <Outlet />
        </Container>

        : <Navigate to="/admin/sign-in" state={
            {
                from: location
            }
        }
            replace
        />
}

export default AdminPrivateRoute
