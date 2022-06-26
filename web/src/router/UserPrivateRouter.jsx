import { Navigate, Outlet, useLocation } from 'react-router-dom'
import Container from '@components/User/Container';

const UserPrivateRouter = ({ user }) => {
    const location = useLocation();
    return user ?
        <Container>
            <Outlet />
        </Container>
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