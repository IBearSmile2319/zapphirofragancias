import { Navigate, Outlet, useLocation } from 'react-router-dom'

const UserPrivateRouter = ({ user }) => {
    const location = useLocation();
    return user ?
        <Outlet />
        :
        <Navigate to="/sign-in"
            state={
                {
                    from: location
                }
            }
            replace
        />
}

export default UserPrivateRouter