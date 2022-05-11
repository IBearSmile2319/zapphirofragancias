import { Navigate, Outlet } from 'react-router-dom'
const UserPublicRouter = ({user}) => {
    return user ? <Navigate to="/home" /> : <Outlet />
}

export default UserPublicRouter