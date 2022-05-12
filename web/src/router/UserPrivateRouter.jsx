import { Navigate, Outlet } from 'react-router-dom'

const UserPrivateRouter = ({ user }) => {
    return user ? <Outlet /> : <Navigate to="/sign-in" />
}

export default UserPrivateRouter