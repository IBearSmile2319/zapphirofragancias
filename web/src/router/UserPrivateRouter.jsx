import { Navigate, Outlet } from 'react-router-dom'

const UserPrivateRouter = ({ user }) => {
    return user ? <Outlet /> : <Navigate to="/login" />
}

export default UserPrivateRouter